"use client";
import { useTransitionRouter } from "next-view-transitions";
import React from "react";

const slideInOut = () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // 手機版不阻塞轉場，留空或執行非同步動畫
    return;
  }

  // 桌面版動畫
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.2,
        transform: "translateY(-35%)",
      },
    ],
    {
      duration: 800,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 800,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

const AnimatedLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useTransitionRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // 手機：直接跳轉，不等動畫
      router.push(href);
    } else {
      // 桌機：播放動畫 → transition
      router.push(href, {
        onTransitionReady: slideInOut,
      });
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default AnimatedLink;
