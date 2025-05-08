import Client from "./news";

// /app/photos/metadata.js
// /app/news/metadata.js
export const metadata = {
  title: "寬越設計專欄｜設計案例與空間靈感分享",
  description:
    "從老屋翻新到商業空間，寬越設計分享最新設計專案與空間美學觀察，提供專業見解與風格靈感，打造更貼近生活的室內設計。",
  keywords: [
    "室內設計新聞",
    "裝潢案例",
    "設計專欄",
    "老屋翻新",
    "店面設計靈感",
    "空間美學",
    "住宅設計案例",
    "寬越設計文章",
  ],
  icons: {
    icon: "/images/logo/company-logo.ico",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://www.kuankoshi.com/news",
    siteName: "寬越設計 Kuankoshi Design",
    title: "寬越設計專欄｜設計案例與空間靈感分享",
    description:
      "深入解析室內設計實例與靈感來源，寬越設計帶您探索空間規劃背後的美學與實用平衡。",
    images: [
      {
        url: "https://www.kuankoshi.com/images/og/news-cover.jpg",
        width: 1200,
        height: 630,
        alt: "寬越設計新聞與案例圖庫",
      },
    ],
  },
  alternates: {
    canonical: "https://www.kuankoshi.com/news",
  },
};

export const revalidate = 60;

export default function QaPage() {
  return <Client />;
}
