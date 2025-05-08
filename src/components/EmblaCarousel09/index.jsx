import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };

const App = () => {
  const slides = [
    {
      image: "/images/對現有網站不滿意.png",
      title: "對現有網站不滿意",

      link: "/WebOptimization",
    },
    {
      image: "/images/收集客戶資料再行銷.png",
      title: " 你想完整收集客戶資料，再行銷嗎？",

      link: "/WebOptimization",
    },
    {
      image: "/images/電商平台的高抽成01.png",
      title: " 電商平台的高抽成",

      link: "/3dProduct",
    },

    // Add more slides as needed
  ];

  return (
    <>
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </>
  );
};

export default App;
