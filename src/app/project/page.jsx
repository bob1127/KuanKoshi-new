import ProjectListClient from "./ProjectListClient";
import { Suspense } from "react";
import { Metadata } from "next";
import { getProjectListStructuredData } from "../../lib/structuredData";

export const metadata = {
  title: "設計案例總覽｜寬越設計",
  description:
    "瀏覽寬越設計過去精選的室內設計實績案例，從老屋翻新、新成屋裝潢，到高端訂製空間，探索我們的美學與細節。",
  keywords: [
    "室內設計",
    "裝潢案例",
    "老屋翻新",
    "新成屋裝修",
    "商業空間設計",
    "寬越設計",
  ],
  openGraph: {
    title: "設計案例總覽｜寬越設計",
    description: "精選室內裝潢實績，展現空間設計的美學與細節。",
    url: "https://kuankoshi.com/project",
    images: [
      {
        url: "https://www.kuankoshi.com/images/hero-img/468947784_122223976550031935_8836870033944229922_n_0.webp",
        width: 1200,
        height: 630,
        alt: "寬越室內設計作品",
      },
    ],
    siteName: "寬越設計 Kuankoshi",
  },
  twitter: {
    card: "summary_large_image",
    title: "設計案例總覽｜寬越設計",
    description: "從老屋翻新到新成屋裝潢，探索寬越的設計實力。",
    images: [
      "https://www.kuankoshi.com/images/hero-img/468947784_122223976550031935_8836870033944229922_n_0.webp",
    ],
  },
};

async function getProjectData() {
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

  return { posts, categories };
}

export default async function ProjectListPage() {
  const { posts, categories } = await getProjectData();
  const structuredData = getProjectListStructuredData(posts);

  return (
    <>
      <Suspense fallback={<div></div>}>
        <ProjectListClient posts={posts} categories={categories} />
      </Suspense>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
