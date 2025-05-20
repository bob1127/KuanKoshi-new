// /app/page.jsx 或 app/home/page.jsx
import Client from "./home";
import Script from "next/script";

export const metadata = {
  title: "寬越設計｜從小資輕裝潢到千萬豪宅｜專屬風格空間與全案設計提案",
  description:
    "寬越設計提供從 50 萬輕裝潢到千萬等級豪宅的室內設計服務，無論是小資預算或高端訂製，皆量身打造兼具美感與機能的理想生活空間。",
  keywords: [
    "50萬裝潢",
    "小資族設計",
    "豪宅設計",
    "新婚家庭裝潢",
    "小坪數室內設計",
    "輕裝潢方案",
    "寬越設計",
    "全案設計",
    "預算裝潢推薦",
    "高端室內設計",
    "空間風格規劃",
  ],
  icons: {
    icon: "/images/logo/company-logo.ico",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://www.kuankoshi.com",
    siteName: "寬越設計 Kuankoshi Design",
    title: "寬越設計｜從小資輕裝潢到千萬豪宅｜專屬風格空間與全案設計提案",
    description:
      "寬越設計專注於從 50 萬小資預算到千萬豪宅空間的全案設計，融合風格美學與生活機能，為您打造最適合的居家與商業場域。",
    images: [
      {
        url: "https://www.kuankoshi.com/images/舊屋翻新/004-AB3C5203321B.jpg",
        width: 1200,
        height: 630,
        alt: "寬越設計室內空間封面",
      },
    ],
  },
  alternates: {
    canonical: "https://www.kuankoshi.com",
  },
};

export const revalidate = 60;

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "寬越設計｜室內設計首選品牌",
  url: "https://www.kuankoshi.com/",
  description:
    "寬越設計提供專業室內設計服務，專精於住宅、商業空間與老屋翻新。從50萬小資裝潢到千萬豪宅設計，皆有豐富經驗與客製提案。",
  publisher: {
    "@type": "Organization",
    name: "寬越設計",
    url: "https://www.kuankoshi.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.kuankoshi.com/images/logo/company-logo.svg",
    },
  },
  mainEntity: [
    {
      "@type": "CreativeWork",
      name: "小資裝修專案",
      url: "https://www.kuankoshi.com/#special",
      description: "50-100萬裝潢專案，為首購族量身打造，兼具美感與實用性",
    },
    {
      "@type": "CreativeWork",
      name: "商業空間設計",
      url: "https://www.kuankoshi.com/project?cat=commercial-public",
      description: "量身打造品牌商業空間，從品牌精神出發整合設計與施工",
    },
    {
      "@type": "CreativeWork",
      name: "老屋翻新工程",
      url: "https://www.kuankoshi.com/project?cat=renovation-restoration",
      description: "結合現代美感與結構優化，翻轉老屋新生命",
    },
  ],
};

export default async function Page() {
  const res = await fetch(
    "https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?per_page=100&_embed",
    { next: { revalidate: 60 } } // 👈 App Router 寫法
  );
  const data = await res.json();

  const filtered = data.filter((post) =>
    post._embedded["wp:term"][0]?.some((cat) => cat.slug === "special-offers")
  );

  filtered.sort((a, b) => {
    const numA = parseInt(a.title.rendered.match(/^\d+/)?.[0] || "0", 10);
    const numB = parseInt(b.title.rendered.match(/^\d+/)?.[0] || "0", 10);
    return numA - numB;
  });

  return (
    <>
      <Script
        id="structured-data-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      <Client specialPosts={filtered} /> {/* 👈 傳資料給 client component */}
    </>
  );
}
