import Client from "./about";
import Script from "next/script";

export const metadata = {
  title: "關於寬越設計｜空間規劃、品牌合作與設計理念介紹",
  description:
    "寬越設計專注於小坪數住宅、商業空間與跨界合作，打造兼具機能與美感的生活場域。了解我們的設計理念與合作模式。",
  keywords: [
    "關於寬越設計",
    "品牌設計理念",
    "商業空間設計",
    "跨界合作",
    "室內設計公司介紹",
    "空間規劃服務",
    "設計團隊",
    "室內設計理念",
  ],
  icons: {
    icon: "/images/logo/company-logo.ico",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://www.kuankoshi.com/about",
    siteName: "寬越設計 Kuankoshi Design",
    title: "關於寬越設計｜空間規劃、品牌合作與設計理念介紹",
    description:
      "從設計初衷到空間實踐，寬越設計致力於打造每一個貼近生活的理想空間，歡迎了解我們的設計風格與合作模式。",
    images: [
      {
        url: "https://www.kuankoshi.com/images/og/about-cover.jpg",
        width: 1200,
        height: 630,
        alt: "寬越設計品牌介紹封面",
      },
    ],
  },
  alternates: {
    canonical: "https://www.kuankoshi.com/about",
  },
};

export const revalidate = 60;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "寬越設計 Kuankoshi Design",
  url: "https://www.kuankoshi.com",
  logo: "https://www.kuankoshi.com/images/logo/company-logo.png",
  description:
    "寬越設計專注於老屋翻新、商業空間與住宅設計，融合風格與機能，打造舒適與美感並存的空間。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "NTC國家商貿中心",
    addressLocality: "台中市",
    addressRegion: "台灣",
    postalCode: "407",
    addressCountry: "TW",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "客戶服務",
    availableLanguage: ["zh-TW"],
    url: "https://www.kuankoshi.com/contact",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61550958051323",
    "https://www.instagram.com/kuankoshi.design",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Client />
    </>
  );
}
