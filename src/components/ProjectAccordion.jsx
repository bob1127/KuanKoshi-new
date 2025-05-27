"use client";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "@/components/AnimatedLink";
import { Compare } from "@/components/ui/compare";

export default function ProjectAccordion() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // >=768px 為平板或桌機
    };

    handleResize(); // 初次載入時判斷
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const sections = [
    {
      title: "建築老屋",
      subtitle: ["舊屋翻新", "Taichung - 南屯李宅"],
      link: "/project?cat=renovation-restoration",
      beforeImg: isDesktop
        ? "/images/舊屋翻新/project-01/南屯鄭宅-before_寬越室內設計_desktop.webp"
        : "/images/舊屋翻新/project-01/南屯鄭宅-before_寬越室內設計.webp",
      afterImg: isDesktop
        ? "/images/舊屋翻新/project-01/南屯鄭宅-after_寬越室內設計_desktop.webp"
        : "/images/舊屋翻新/project-01/南屯鄭宅-after_寬越室內設計.webp",
    },
    {
      title: "建築老屋",
      subtitle: ["舊屋翻新", ""],
      link: "/project?cat=renovation-restoration",
      beforeImg: isDesktop
        ? "/images/舊屋翻新/project-02/05現況02_結果_desktop.webp"
        : "/images/舊屋翻新/project-02/05現況02_結果.webp",
      afterImg: isDesktop
        ? "/images/舊屋翻新/project-02/03外觀三-3_結果_desktop.webp"
        : "/images/舊屋翻新/project-02/03外觀三-3_結果.webp",
    },
    {
      title: "建築老屋",
      subtitle: ["舊屋翻新", ""],
      link: "/project?cat=renovation-restoration",
      beforeImg: isDesktop
        ? "/images/舊屋翻新/project-03/04現況黎01_結果_desktop.webp"
        : "/images/舊屋翻新/project-03/04現況黎01_結果.webp",
      afterImg: isDesktop
        ? "/images/舊屋翻新/project-03/03外觀三黎-1_結果_desktop.webp"
        : "/images/舊屋翻新/project-03/03外觀三黎-1_結果.webp",
    },
    {
      title: "建築老屋",
      subtitle: ["舊屋翻新", ""],
      link: "/project?cat=renovation-restoration",
      beforeImg: isDesktop
        ? "/images/舊屋翻新/project-04/P1380036-2_結果拷貝_desktop.webp"
        : "/images/舊屋翻新/project-04/P1380036-2_結果拷貝.webp",
      afterImg: isDesktop
        ? "/images/舊屋翻新/project-04/P1380036-2_結果_desktop.webp"
        : "/images/舊屋翻新/project-04/P1380036-2_結果.webp",
    },
    {
      title: "建築老屋",
      subtitle: ["舊屋翻新", ""],
      link: "/project?cat=renovation-restoration",
      beforeImg: isDesktop
        ? "/images/舊屋翻新/project-05/02P1230395_結果_desktop.webp"
        : "/images/舊屋翻新/project-05/02P1230395_結果.webp",
      afterImg: isDesktop
        ? "/images/舊屋翻新/project-05/01img-0525-002_結果_desktop.webp"
        : "/images/舊屋翻新/project-05/01img-0525-002_結果.webp",
    },
    {
      title: "建築老屋",
      subtitle: ["舊屋翻新", ""],
      link: "/project?cat=renovation-restoration",
      beforeImg: isDesktop
        ? "/images/舊屋翻新/project-06/E6DF0A91-B69A-428B-B1F0-A7D8709B483F_desktop.webp"
        : "/images/舊屋翻新/project-06/E6DF0A91-B69A-428B-B1F0-A7D8709B483F.webp",
      afterImg: isDesktop
        ? "/images/舊屋翻新/project-06/002東方悅_240204_4_desktop.webp"
        : "/images/舊屋翻新/project-06/002東方悅_240204_4.webp",
    },
    {
      title: "建築老屋",
      subtitle: ["舊屋翻新", ""],
      link: "/project?cat=renovation-restoration",
      beforeImg: isDesktop
        ? "/images/舊屋翻新/project-07/S__28344502_desktop.webp"
        : "/images/舊屋翻新/project-07/S__28344502.webp",
      afterImg: isDesktop
        ? "/images/舊屋翻新/project-07/S__28344501_desktop.webp"
        : "/images/舊屋翻新/project-07/S__28344501.webp",
    },
  ];

  // 預設所有區塊都展開
  const [openIndexes, setOpenIndexes] = useState(
    sections.map((_, index) => index)
  );

  const toggleIndex = (index) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // 如果已展開 -> 收起
          : [...prev, index] // 如果收起 -> 展開
    );
  };

  return (
    <section className="w-[98%] mx-auto">
      {sections.map((section, index) => (
        <div key={index} className="border-b pb-4">
          {/* Accordion 標題 */}
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left group"
          >
            <div className="flex flex-col pl-4 py-4">
              <div className="inline-block pb-2">
                <span className="text-[.9rem] font-mode relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                  {section.title}
                </span>
              </div>
              {section.subtitle.map((text, i) => (
                <span key={i} className="text-[.75rem]">
                  {text}
                </span>
              ))}
            </div>
          </button>

          {/* 展開內容 */}
          <AnimatePresence initial={false}>
            {openIndexes.includes(index) && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.65, 0.05, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[1920/768] 2xl:aspect-[1920/850] max-h-[850px] overflow-hidden">
                  <div className="m-2">
                    <AnimatedLink href={section.link}>
                      <Compare
                        firstImage={section.beforeImg}
                        secondImage={section.afterImg}
                        firstImageClassName="object-cover"
                        secondImageClassname="object-cover"
                        className="h-[250px] w-full md:h-[500px] lg:h-[600px] xl:h-[768px] 2xl:h-[850px]"
                        slideMode="hover"
                      />
                    </AnimatedLink>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
