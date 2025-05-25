import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient"; // <-- 用 Client Component 顯示文章
import { getStructuredProjectData } from "../../../lib/structuredData";

async function getPost(slug) {
  const res = await fetch(
    `https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } }
  );
  const posts = await res.json();
  const post = posts?.[0];

  if (!post) return null;

  post.content.rendered = post.content.rendered.replace(
    /(<img[^>]+src="[^"]*?)(-\d{2,4}x\d{2,4})(\.[a-z]{3,4}")/g,
    "$1$3"
  );

  return post;
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return {};

  const structuredData = getStructuredProjectData(post);
  const imageMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
  const contentImage = imageMatch?.[1]?.replace(
    /-\d+x\d+(?=\.[a-z]{3,4}$)/,
    ""
  );
  const ogImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    contentImage ||
    "/default-og.jpg";

  const title = `${post.title.rendered.replace(/<[^>]+>/g, "")}｜寬越設計`;
  const description =
    post.excerpt?.rendered.replace(/<[^>]+>/g, "") ||
    post.title.rendered.replace(/<[^>]+>/g, "");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.kuankoshi.com/blog/${params.slug}`,
      siteName: "寬越設計 Kuankoshi Design",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    other: {
      "ld+json": JSON.stringify(structuredData),
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return <BlogPostClient post={post} />;
}
