import Client from "./home";

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

export default function Page() {
  return <Client />;
}
