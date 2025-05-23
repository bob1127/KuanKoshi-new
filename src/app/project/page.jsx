import ProjectListClient from "./ProjectListClient";
import { Suspense } from "react";

async function getProjectData() {
  // 1. 抓全部分類
  const categoriesRes = await fetch(
    "https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/categories?per_page=100",
    { next: { revalidate: 60 } }
  );
  const allCategories = await categoriesRes.json();

  const targetSlugs = [
    "commercial-public",
    "renovation-restoration",
    "residential-luxury",
    "special-offers",
  ];
  const categories = allCategories.filter((cat) =>
    targetSlugs.includes(cat.slug)
  );

  // 2. 抓全部文章
  const postsRes = await fetch(
    "https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?_embed&per_page=100",
    { next: { revalidate: 60 } }
  );
  const rawPosts = await postsRes.json();

  const posts = rawPosts.map((post) => {
    const featuredMedia =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
    const cleanImage = featuredMedia
      ? featuredMedia.replace(/-\d+x\d+(?=\.\w{3,4}$)/, "")
      : null;
    return {
      ...post,
      clean_featured_image: cleanImage,
    };
  });

  // ✅ 3. 額外抓給 Swiper 輪播的 aboutPosts
  const aboutRes = await fetch(
    "https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?_embed&per_page=6",
    { next: { revalidate: 60 } }
  );
  const aboutRaw = await aboutRes.json();

  const aboutPosts = aboutRaw.map((post) => {
    const match = post.content.rendered.match(/<img[^>]+src="([^"]+)"/);
    return {
      title: post.title.rendered,
      href: `/project/${post.slug}`,
      image: match ? match[1] : "/images/fallback.jpg",
    };
  });

  return { posts, categories, aboutPosts };
}

export default async function ProjectListPage() {
  const { posts, categories, aboutPosts } = await getProjectData();

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <ProjectListClient
          posts={posts}
          categories={categories}
          aboutPosts={aboutPosts}
        />
      </Suspense>
    </div>
  );
}
