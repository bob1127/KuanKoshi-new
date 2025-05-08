import Client from "./home";

export const metadata = {
  title:
    "寬越設計｜小宅美學與風格空間提案｜50萬輕裝潢提案・小資族與新婚家庭的理想選擇",
  description:
    "專為小資家庭與小坪數空間量身打造的室內設計，寬越設計提供輕裝潢、預算客製化與風格提案，打造實用與美感兼具的理想居所。",
  keywords: [
    "50萬裝潢",
    "小資族設計",
    "新婚家庭裝潢",
    "小坪數室內設計",
    "輕裝潢方案",
    "寬越設計",
    "老屋翻新",
    "預算裝潢推薦",
    "室內設計提案",
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
    title:
      "寬越設計｜小宅美學與風格空間提案｜50萬輕裝潢提案・小資族與新婚家庭的理想選擇",
    description:
      "從初步規劃到完工交付，寬越設計結合生活機能與風格美學，為您打造舒適、實用又有品味的居家空間。",
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

export default function Page() {
  return <Client />;
}
