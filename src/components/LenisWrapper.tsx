"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";

export default function LenisWrapper({
  children,
  enable = true, // 控制是否啟用 Lenis
}: {
  children: React.ReactNode;
  enable?: boolean;
}) {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth <= 768);
  }, []);

  if (!isClient) return null;

  if (!enable || isMobile) {
    // 若未啟用或為手機，直接回傳內容
    return <>{children}</>;
  }

  return <ReactLenis root>{children}</ReactLenis>;
}
