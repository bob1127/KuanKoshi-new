import QaClient from "./qa";
import Script from "next/script";

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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "裝潢費用怎麼計算？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "依坪數、設計內容與材料等條件評估，一般每坪價格約落在 3 萬至 6 萬元，實際需依需求報價。",
      },
    },
    {
      "@type": "Question",
      name: "有提供免費估價服務嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "我們提供初步免費線上預估，正式丈量與規劃後會提供詳細報價單與時間表。",
      },
    },
    {
      "@type": "Question",
      name: "設計費包含施工嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "設計與施工可以分開報價，也可選擇整合方案，我們可依您需求彈性搭配。",
      },
    },
    {
      "@type": "Question",
      name: "我不知道自己喜歡什麼風格，怎麼辦？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "我們會透過風格圖卡、空間提問與喜好分析，協助您找到最合適的空間樣貌。",
      },
    },
    {
      "@type": "Question",
      name: "設計風格會跟我提供的圖片一樣嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "我們會以圖片作為參考，並依實際空間比例、預算與建材，進行符合您需求的客製化設計。",
      },
    },
    {
      "@type": "Question",
      name: "整體裝修會需要多久？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般小坪數住家（15~25坪）從施工到完工約需 2～2.5 個月，視工程內容與配合度調整。",
      },
    },
    {
      "@type": "Question",
      name: "施工會不會有粉塵、噪音？如何管理？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "會有，但我們會加裝粉塵布、指定施工時間、使用靜音工具，並派駐現場監工控管品質。",
      },
    },
  ],
};

export default function QaPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <QaClient />
    </>
  );
}
