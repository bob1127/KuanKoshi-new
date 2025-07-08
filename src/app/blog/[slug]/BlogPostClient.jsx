"use client";

import HomeSlider from "../../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link.js";

import { motion, AnimatePresence } from "framer-motion";
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

    const titles = Array.from(contentRef.current.querySelectorAll("h2"));

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
  function addH2IdsToHTML(html) {
    let index = 0;
    return html.replace(/<h2([^>]*)>/g, (match, attrs) => {
      const id = `section-${index++}`;
      return `<h2${attrs} id="${id}">`;
    });
  }

  function extractFirstImage(html) {
    const match = html.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1].replace(/-\d+x\d+(?=\.[a-z]{3,4}$)/, "") : null;
  }
  function transformQAAccordionHTML(html) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    const qaLists = wrapper.querySelectorAll("ul:not([class])"); // 或你可以改 class 名稱來精準選取
    qaLists.forEach((ul) => {
      const items = ul.querySelectorAll("li");

      ul.outerHTML = `<div class="qa-accordion-wrapper">${[...items]
        .map((li) => {
          const question = li.querySelector("strong")?.innerHTML || "Q";
          const content = li.innerHTML
            .replace(/<strong>.*?<\/strong><br\s*\/?>/, "")
            .trim();

          return `
        <div class="accordion-item ">
          <button type="button" class="accordion-button w-full text-left text-[#242424] px-4 py-3 font-semibold transition duration-300">
            ${question}
          </button>
          <div class="accordion-content hidden px-4 py-4 bg-white text-gray-700 leading-relaxed">
            ${content}
          </div>
        </div>`;
        })
        .join("")}</div>`;
    });

    return wrapper.innerHTML;
  }

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new MutationObserver(() => {
      const buttons = contentRef.current.querySelectorAll(".accordion-button");
      if (!buttons.length) return;

      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const content = btn.nextElementSibling;
          const isOpen = !content.classList.contains("hidden");

          // 關閉全部
          contentRef.current
            .querySelectorAll(".accordion-content")
            .forEach((el) => el.classList.add("hidden"));
          contentRef.current
            .querySelectorAll(".accordion-item")
            .forEach((el) => el.classList.remove("bg-white"));

          // 如果原本是關的，就打開
          if (!isOpen) {
            content.classList.remove("hidden");
            btn.parentElement.classList.add("bg-white");
          }
        });
      });

      // 偵測到有按鈕後就停止觀察
      observer.disconnect();
    });

    observer.observe(contentRef.current, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [post.content.rendered]);

  const firstImage = extractFirstImage(post.content.rendered);
  return (
    <ReactLenis root>
      <div className="bg-[#f7f7f9] mt-[-50px] pt-[40px]">
        <div className="w-[95%] md:w-[80%]   mx-auto">
          <div className="navgation border-b-1 2xl:border-b-2 mt-[10vh] py-10 flex w-[85%] mx-auto flex-col">
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
          {/* <section className=" border w-[96%] md:w-[85%] mx-auto  section-news 2xl:aspect-[1920/800] aspect-[500/500] md:aspect-[1024/576]   lg:aspect-[1920/768]  relative overflow-hidden">
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
          </section> */}
          <section className=" mt-[10px] md:mt-[5vh] lg:mt-[5vh] ">
            <div className="flex flex-col lg:flex-row w-[95%] md:w-[85%]   mx-auto">
              <div className="stick-section  justify-start bg-white lg:bg-transparent p-8 lg:p-0   lg:justify-start relative  flex   pt-[80px] w-full sm:w-[85%]  lg:w-[30%] 2xl:w-[35%]  ">
                <div className="square sticky flex  flex-col  left-0  pr-0 lg:pr-[15%] top-2 lg:top-[90px] h-auto lg:h-[100px]  ">
                  <span className="font-bold">IDEA DESIGN</span>
                  <ul className="space-y-2 flex flex-col items-start text-sm mt-4 text-gray-700">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => {
                            const el = document.getElementById(section.id);
                            if (el) {
                              const offset = 80;
                              const y =
                                el.getBoundingClientRect().top +
                                window.pageYOffset -
                                offset;
                              window.scrollTo({ top: y, behavior: "smooth" });
                            }
                          }}
                          className="hover:underline mt-1 text-left transition"
                        >
                          {section.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                ref={contentRef}
                className="prose max-w-full [&_.table-wrapper]:overflow-x-auto ..."
                dangerouslySetInnerHTML={{
                  __html: transformQAAccordionHTML(
                    (() => {
                      let h2Index = 0;
                      return post.content.rendered
                        .replace(
                          /<table([^>]*)>/g,
                          '<div class="table-wrapper overflow-x-auto w-full"><table$1>'
                        )
                        .replace(/<\/table>/g, "</table></div>")
                        .replace(
                          /<figure class="wp-block-image size-full">/g,
                          '<figure class="wp-block-image">'
                        )
                        .replace(
                          /class="([^\"]*?)\bsize-full\b([^\"]*?)"/g,
                          'class="$1$2"'
                        )
                        .replace(
                          /<h2([^>]*)>/g,
                          () =>
                            `<h2 id="section-${h2Index++}" style="font-size:clamp(1rem,2.3vw,1.25rem);line-height:1.4; margin-top:40px">`
                        )
                        .replace(
                          /<h4([^>]*)>/g,
                          '<h4$1 style="margin-top:50px; padding:12px 0; border-top:1px solid #5e7682; border-bottom:1px solid #5e7682; color:#5e7682; font-size:clamp(1rem,2.2vw,1.2rem); line-height:1.6; font-weight:600;">'
                        )
                        .replace(
                          /<p([^>]*)>/g,
                          '<p$1 style="letter-spacing: 0.05em; margin-top: 1.2em; margin-bottom: 1.2em; line-height: 1.9;">'
                        )
                        .replace(
                          /<img([^>]*?)alt="([^"]*?)"([^>]*)>/g,
                          (match, beforeAlt, altText, afterAlt) => {
                            return `<img${beforeAlt}alt="${altText}"${afterAlt}/><span class="text-align-right text-[13px]  text-gray-500 block mt-[-9px]">${altText}</span>`;
                          }
                        );
                    })()
                  ),
                }}
              />
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
          {/* 
          <section className=" pb-[100px]">
            <div className="w-[100%] border overflow-hidden">
              <Carousel items={cards} />
            </div>
          </section> */}
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
