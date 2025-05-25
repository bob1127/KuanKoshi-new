import BlogListClient from "./BlogClient";

// 每 60 秒重新抓取一次資料（ISR）
export const revalidate = 60;

async function getBlogPosts() {
  const blogCategoryId = 11; // 使用分類 blog 的 ID

  const postsRes = await fetch(
    `https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?_embed&categories=${blogCategoryId}&per_page=100`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!postsRes.ok) {
    throw new Error("無法取得 blog 分類文章資料");
  }

  const rawPosts = await postsRes.json();

  return rawPosts.map((post) => {
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
}

export default async function NewsPage() {
  const posts = await getBlogPosts();

  return <BlogListClient posts={posts} />;
}
