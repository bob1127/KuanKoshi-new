import QaClient from "./qa";

export const metadata = {
  title: "常見問題｜室內設計流程與裝潢疑問解答｜寬越設計",
  description:
    "裝潢流程不清楚？設計費用怎麼算？寬越設計為您整理最常見的室內設計問題，從風格選擇、報價到施工工期，給您最安心的裝修指引。",
  keywords: [
    "室內設計常見問題",
    "裝潢流程",
    "裝潢設計費用",
    "老屋翻新常見問題",
    "寬越設計QA",
    "小坪數設計解答",
    "預售屋客變疑問",
    "裝修施工時間",
  ],
  icons: {
    icon: "/images/logo/company-logo.ico",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://www.kuankoshi.com/qa",
    siteName: "寬越設計 Kuankoshi Design",
    title: "常見問題｜室內設計流程與裝潢疑問解答｜寬越設計",
    description:
      "裝潢流程不清楚？設計費用怎麼算？寬越設計為您整理最常見的室內設計問題，從風格選擇、報價到施工工期，給您最安心的裝修指引。",
    images: [
      {
        url: "https://www.kuankoshi.com/images/qa/自己來還是交給專業設計.jpg",
        width: 1200,
        height: 630,
        alt: "寬越設計網站封面",
      },
    ],
  },
  alternates: {
    canonical: "https://www.kuankoshi.com/qa",
  },
};

export const revalidate = 60;

export default function QaPage() {
  return <QaClient />;
}
