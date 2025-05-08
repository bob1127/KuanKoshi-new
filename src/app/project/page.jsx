import ProjectListClient from "./ProjectListClient";
import { Suspense } from "react";

async function getProjectData() {
  // 1. 抓全部分類
  const categoriesRes = await fetch(
    "https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/categories?per_page=100",
    { next: { revalidate: 60 } }
  );
  const allCategories = await categoriesRes.json();

  // 2. 篩選目標 slug
  const targetSlugs = [
    "commercial-public",
    "renovation-restoration",
    "residential-luxury",
    "special-offers",
  ];
  const categories = allCategories.filter((cat) =>
    targetSlugs.includes(cat.slug)
  );

  // 3. 抓全部文章含內嵌資料
  const postsRes = await fetch(
    "https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?_embed&per_page=100",
    { next: { revalidate: 60 } }
  );
  const rawPosts = await postsRes.json();

  // 4. 處理 featured image：強制使用原圖網址
  const posts = rawPosts.map((post) => {
    const featuredMedia =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

    // 若圖片帶有 -150x150.jpg 或 -768x512.webp 等，轉成原圖路徑
    const cleanImage = featuredMedia
      ? featuredMedia.replace(/-\d+x\d+(?=\.\w{3,4}$)/, "")
      : null;

    return {
      ...post,
      clean_featured_image: cleanImage,
    };
  });

  return { posts, categories };
}

export default async function ProjectListPage() {
  const { posts, categories } = await getProjectData();

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <ProjectListClient posts={posts} categories={categories} />
      </Suspense>
    </div>
  );
}
