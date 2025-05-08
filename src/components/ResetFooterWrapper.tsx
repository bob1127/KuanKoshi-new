"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "../components/Footer/Footer1";

export default function ResetFooterWrapper() {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // 重新掛載 Footer（等同刷新）
    setKey((prev) => prev + 1);

    // 強制觸發 layout 重排
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100); // 小延遲等 transition 完成
  }, [pathname]);

  return <Footer key={key} />;
}
