// components/GTMDeferred.tsx
"use client";

import { useEffect } from "react";

export default function GTMDeferred() {
  useEffect(() => {
    const onInteraction = () => {
      if (document.getElementById("gtm-script")) return;

      // 注入 GTM 主 script
      const script = document.createElement("script");
      script.id = "gtm-script";
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PVLBC57F";
      document.head.appendChild(script);

      // 初始化 dataLayer
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "gtm.js",
        "gtm.start": new Date().getTime(),
      });

      // 移除事件監聽
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("mousemove", onInteraction);
      window.removeEventListener("touchstart", onInteraction);
    };

    // 等用戶互動再載入 GTM
    window.addEventListener("scroll", onInteraction, { once: true });
    window.addEventListener("mousemove", onInteraction, { once: true });
    window.addEventListener("touchstart", onInteraction, { once: true });

    return () => {
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("mousemove", onInteraction);
      window.removeEventListener("touchstart", onInteraction);
    };
  }, []);

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PVLBC57F"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  );
}
