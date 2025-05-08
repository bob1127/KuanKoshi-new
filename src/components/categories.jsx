"use client";

import React, { useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedLink from "./AnimatedLink";
import { Select, SelectItem } from "@heroui/react";
gsap.registerPlugin(ScrollTrigger);

const categoriesData = [
  { slug: "commercial-public", name: "商業空間" },
  { slug: "renovation-restoration", name: "翻修工程" },
  { slug: "residential-luxury", name: "高端住宅" },
  { slug: "special-offers", name: "限時優惠" },
];

export default function About() {
  const containerRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSlug = searchParams.get("cat") || "";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = document.querySelectorAll(".animate-image-wrapper");

      images.forEach((image, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none none",
            id: "imageReveal-" + i,
          },
        });

        tl.fromTo(
          image.querySelector(".overlay"),
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.7,
            ease: "power2.inOut",
          }
        )
          .to(image.querySelector(".overlay"), {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: 0.7,
            ease: "power2.inOut",
          })
          .fromTo(
            image.querySelector(".image-container"),
            { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.5,
              ease: "power3.inOut",
            },
            "-=0.5"
          );
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCategoryChange = (key) => {
    router.push(`/project?cat=${key}`);
  };

  return (
    <ReactLenis root>
      <div className="bg-transparent " ref={containerRef}>
        <section className="max-w-[1920px] mx-auto w-full px-4 sm:px-6 xl:px-12 pt-0 md:pt-[100px]  pb-0 md:pb-[80px] ">
          <div className="lg:flex lg:gap-16">
            {/* 手機版分類選單 */}
            <div className="block lg:hidden w-full mb-10">
              <Select
                label="選擇設計類型"
                placeholder="請選擇分類"
                className="max-w-xs"
                selectedKeys={[currentSlug]}
                onSelectionChange={(keys) => {
                  const selected = Array.from(keys)[0];
                  handleCategoryChange(selected);
                }}
              >
                {categoriesData.map((cat) => (
                  <SelectItem key={cat.slug}>{cat.name}</SelectItem>
                ))}
              </Select>
            </div>

            {/* 桌機版分類選單 */}
            <div className="hidden lg:block w-full max-w-[300px] shrink-0">
              <div className="sticky top-24">
                <h2 className="text-[clamp(1.1rem,2vw,1.2rem)] font-semibold mb-4 tracking-wide">
                  設計類型
                </h2>
                <ul className="space-y-2">
                  {categoriesData.map((cat) => (
                    <li key={cat.slug}>
                      <AnimatedLink
                        href={`/project?cat=${cat.slug}`}
                        className={`block text-[clamp(0.9rem,1vw,1rem)] tracking-wide font-normal transition-colors duration-300 ${
                          currentSlug === cat.slug
                            ? "text-black font-semibold"
                            : "text-gray-500 hover:text-black"
                        }`}
                      >
                        {cat.name}
                      </AnimatedLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 預留右側內容區塊 */}
            <div className="flex-1">{/* 右側區塊內容 */}</div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
