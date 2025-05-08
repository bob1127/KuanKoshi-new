"use client"; // 讓這個 Component 成為 Client Component

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 動畫時間 (1秒)
      once: false, // 確保滾動時每次進入視口都會觸發動畫
      offset: 0, // 元素進入視口 100px 後才觸發
      easing: "ease-in-out", // 動畫的漸變效果
    });
  }, []);

  return <>{children}</>;
}
