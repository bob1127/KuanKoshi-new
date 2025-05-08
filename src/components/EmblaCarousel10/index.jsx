import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };

const App = () => {
  const slides = [
    {
      image: "/images/新網站SEO規劃-極客網頁設計.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "建立設計一個新網站-我該如何做seo規劃?",
      link: "/blog-01",
    },
    {
      image: "/images/blog/spline3d.png",
      title: "建Spline 3D 入門指南",
      description: "3D 入門指南",
      link: "/blog-05",
    },
    {
      image:
        "/images/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.webp",
      title: "建立設計一個新網站-我該如何做seo規劃?",
      description: "我該如何做seo規劃",
      link: "/blog-01",
    },
    {
      image: "/images/blog/photoshop2024-01.jpeg",
      title: "Photoshop 2024 全新 AI 漸進式填充功能：設計效率的革命性提升",
      description: "AI漸進式填充功能",
      link: "/blog-08",
    },
    {
      image:
        "/images/blog/如何增加搜尋引擎曝光度和排名-極客網頁設計_網頁結構優化_seo優化.png",
      title: "分析網頁SEO成效指標",
      description: "分析網頁SEO成效指標",
      link: "/blog-09",
    },
    {
      image: "/images/無頭網站_高性能seo有善-極客網頁設計.png",
      title: "無頭網站-高性能、SEO友善",
      description: "無頭網站-高性能",
      link: "/blog-10",
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
