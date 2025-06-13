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
    icon: "https://www.kuankoshi.com/images/logo/company-logo.ico",
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
        url: "https://www.kuankoshi.com/images/OpenGraph-img02.jpg",
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

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.kuankoshi.com/",
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
          url: "https://www.kuankoshi.com/images/logo/company-logo.ico",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "首頁",
          item: "https://www.kuankoshi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "設計作品",
          item: "https://www.kuankoshi.com/project",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "寬越設計是否提供免費諮詢？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "是的，我們提供初次免費諮詢服務，歡迎透過表單或 LINE 預約。",
          },
        },
        {
          "@type": "Question",
          name: "裝潢預算有限也能設計嗎？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "當然，我們有 50 萬起的小資方案，專為首購族、小家庭與新婚族設計。",
          },
        },
      ],
    },
    {
      "@type": "Product",
      name: "小資裝潢專案",
      image: "https://www.kuankoshi.com/images/小資專案/小資專案.webp",
      description: "50~100萬小資輕裝潢方案，量身打造實用美感兼具的居家空間。",
      brand: {
        "@type": "Organization",
        name: "寬越設計",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "TWD",
        price: "500000",
        availability: "https://schema.org/InStock",
        url: "https://www.kuankoshi.com/#special",
      },
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
          __html: JSON.stringify(homepageStructuredData),
        }}
      />
      <Client
        specialPosts={filtered}
        homeStructuredData={homepageStructuredData}
      />
    </>
  );
}
