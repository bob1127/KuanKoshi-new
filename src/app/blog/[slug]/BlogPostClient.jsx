"use client";

import HomeSlider from "../../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link.js";
import { Carousel, Card } from "../../../components/ui/apple-cards-carousel";
import Lightbox from "yet-another-react-lightbox";
import {
  Captions,
  Download,
  Fullscreen,
  Zoom,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ParallaxImage from "../../../components/ParallaxImage.jsx";
import { ReactLenis } from "@studio-freight/react-lenis";
import GsapText from "../../../components/RevealText/index";
import HoverItem from "../../../components/HoverItem.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import Character from "../../../components/TextOpacityScroll/Character.jsx";
import MotionImage from "../../../components/MotionImage.jsx";
import AnimatedLink from "../../../components/AnimatedLink";
const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPostClient({ post }) {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [sections, setSections] = useState([]);
  useEffect(() => {
    if (!contentRef.current) return;

    const titles = Array.from(
      contentRef.current.querySelectorAll("h2.wp-block-heading")
    );

    titles.forEach((title, index) => {
      title.id = `section-${index}`;
    });

    setSections(
      titles.map((el, index) => ({
        id: `section-${index}`,
        text: el.innerText,
      }))
    );
  }, [post.content.rendered]);

  useEffect(() => {
    const initGSAPAnimations = () => {
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
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            },
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
              {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              },
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

      return ctx; // return so we can revert later
    };

    let ctx;

    const onTransitionComplete = () => {
      ctx = initGSAPAnimations();
    };

    window.addEventListener("pageTransitionComplete", onTransitionComplete);

    // fallback: 若不是從 transition link 進來，直接初始化
    if (!sessionStorage.getItem("transitioning")) {
      ctx = initGSAPAnimations();
    } else {
      sessionStorage.removeItem("transitioning"); // 清除 flag
    }

    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener(
        "pageTransitionComplete",
        onTransitionComplete
      );
    };

    return () => ctx.revert(); // 👈 自動 kill 清理範圍內動畫
  }, []);
  const [hovered, setHovered] = useState(false);
  const words = paragraph.split(" ");
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const [index, setIndex] = useState(-1);

  // 所有圖片統一管理，順序要與文章一致
  const slides = [
    {
      src: "/images/blog/006-20250224-109.jpg",
    },
    { src: "/images/blog/001-20250317-74.jpg" },
    { src: "/images/blog/006-20250317.jpg" },

    {
      src: "/images/blog/469720578_122225453222031935_8767653310245579018_n.jpg",
    },
    { src: "/images/blog/250105_8.jpg" },
  ];
  function extractFirstImage(html) {
    const match = html.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1].replace(/-\d+x\d+(?=\.[a-z]{3,4}$)/, "") : null;
  }

  const firstImage = extractFirstImage(post.content.rendered);
  return (
    <ReactLenis root>
      <div className="bg-[#F1F1F1]">
        <div className="">
          <div className="navgation mt-[10vh] py-10 flex w-[85%] mx-auto flex-col">
            <span className="">
              <span className="categories-tag  border border-gray-500 rounded-full text-[.9rem] tracking-widest px-3">
                Categories
              </span>
            </span>
            <div className="title">
              <h1
                className="text-[2.5rem] text-gray-800"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </div>

            <div className="flex ">
              <AnimatedLink href="/">
                <span className="text-[.85rem] text-gray-500">
                  Categoreies - 室內設計預算
                </span>
              </AnimatedLink>
              <span className="mx-2 text-gray-500">|</span>
              <AnimatedLink href="">
                <span className="text-[.85rem] text-gray-500">
                  {" "}
                  行情分析與裝潢費用完整指南
                </span>
              </AnimatedLink>
            </div>
          </div>
          <section className=" border w-[96%] md:w-[85%] mx-auto  section-news 2xl:aspect-[1920/800] aspect-[500/500] md:aspect-[1024/576]   lg:aspect-[1920/768]  relative overflow-hidden">
            <div className="mask bg-[#000] absolute opacity-35 w-full h-full top-0 left-0 z-30"></div>

            <div className="portrait-container overflow-hidden">
              <div className="img mt-8">
                <ParallaxImage
                  src={firstImage || "/images/fallback.jpg"} // 如果沒圖用備用圖
                  alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                  fill
                  className="aspect-[500/500] md:aspect-[1024/768] lg:aspect-[1920/900] object"
                />
              </div>
            </div>
          </section>
          <section className=" mt-[10px] md:mt-[10vh] lg:mt-[15vh] ">
            <div className="flex flex-col lg:flex-row w-[95%] md:w-[80%]   mx-auto">
              <div className="stick-section  justify-start bg-white lg:bg-transparent p-8 lg:p-0   lg:justify-end relative  flex   pt-[80px] w-full sm:w-[85%]  lg:w-[30%]  ">
                <div className="square sticky flex  flex-col  right-4  pr-0 lg:pr-[15%] top-2 lg:top-[90px] h-auto lg:h-[100px]  ">
                  <span className="font-bold">IDEA DESIGN</span>
                  <ul className="space-y-2 flex flex-col items-start text-sm mt-4 text-gray-700">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => {
                            const el = document.getElementById(section.id);
                            if (el) {
                              const yOffset = -80;
                              const y =
                                el.getBoundingClientRect().top +
                                window.pageYOffset +
                                yOffset;
                              window.scrollTo({ top: y, behavior: "smooth" });
                            }
                          }}
                          className="hover:underline mt-` text-left transition"
                        >
                          {section.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="content-section px-2 pt-[10px] md:pt-[50px] flex justify-end w-[95%] md:w-[88%] lg:w-[70%]">
                <div
                  ref={contentRef}
                  className="prose max-w-full
    [&_.table-wrapper]:overflow-x-auto
    [&_.table-wrapper]:w-full
    [&_table]:min-w-[600px]
    [&_th]:bg-[#375E77]
    [&_th]:text-white
    [&_th]:font-semibold
    [&_th]:border
    [&_th]:px-4
    [&_th]:py-2
    [&_td]:bg-white
    [&_td]:text-black
    [&_td]:border
    [&_td]:px-4
    [&_td]:py-2"
                  dangerouslySetInnerHTML={{
                    __html: post.content.rendered
                      // 表格處理
                      .replace(
                        /<table([^>]*)>/g,
                        '<div class="table-wrapper overflow-x-auto w-full"><table$1>'
                      )
                      .replace(/<\/table>/g, "</table></div>")
                      // ✅ 加上 h2 字體大小自適應樣式
                      .replace(
                        /<h2 class="wp-block-heading">/g,
                        '<h2 class="wp-block-heading" style="font-size:clamp(1.25rem,2.3vw,1.75rem);line-height:1.4;">'
                      ),
                  }}
                />
              </div>
            </div>
          </section>
          <div className="flex flex-col py-5 sm:flex-row justify-center  items-center gap-4 mt-6">
            <AnimatedLink href="" className="group ">
              <div className="bg-white rounded-full py-5 xl:py-6 px-8 sm:px-12 group-hover:bg-black transition duration-300 text-center">
                <span className="tracking-widest text-sm group-hover:text-white transition duration-300">
                  ← PREV
                </span>
              </div>
            </AnimatedLink>

            <AnimatedLink
              href="/blog"
              className="group flex flex-col items-center "
            >
              <div className="bg-white rounded-full w-full  py-5 xl:py-6 px-8 sm:px-12 group-hover:bg-black transition duration-300 text-center">
                <span className="tracking-widest text-sm group-hover:text-white transition duration-300">
                  MENU
                </span>
              </div>
              <span className="text-sm text-gray-700 mt-2">30+ | 案例</span>
            </AnimatedLink>

            <AnimatedLink href="" className="group ">
              <div className="bg-white rounded-full py-5 xl:py-6 px-8 sm:px-12 group-hover:bg-black transition duration-300 text-center">
                <span className="tracking-widest text-sm group-hover:text-white transition duration-300">
                  NEXT →
                </span>
              </div>
            </AnimatedLink>
          </div>

          <section className=" pb-[100px]">
            <div className="w-[100%] border overflow-hidden">
              <Carousel items={cards} />
            </div>
          </section>
        </div>
      </div>
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />

      {/* <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div> */}
    </ReactLenis>
  );
}
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14  mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-medium font-sans max-w-3xl mx-auto">
              <span className="font-bold text-[20px] text-neutral-700 dark:text-neutral-200">
                臨近繁華，與自然共生
              </span>{" "}
              周邊環境方面，宜園建設為您精心選擇了理想的生活圈。社區周邊生活機能豐富，無論是超市、學校還是醫療機構，應有盡有。交通便捷，讓您無論是通勤還是外出，都能輕鬆迅速。
            </p>
            <Image
              src="https://hadashinoie.co.jp/app/wp-content/uploads/2024/05/2B3A0382-2048x1365.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const data = [
  {
    category: "各種室內設計 - 專案",
    title: "BLOG",
    src: "/images/小資專案/469120903_122223965966031935_3027154932930762522_n.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/bo3-2000x1333.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/da4.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/07/ta4.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/09/m3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/04/ta2-2000x2294.jpg",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/ho4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/bo3-2000x1333.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/06/da4.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/07/ta4.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/09/m3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://store-palette.com/wp/wp-content/uploads/2020/04/ta2-2000x2294.jpg",
    content: <DummyContent />,
  },
];
