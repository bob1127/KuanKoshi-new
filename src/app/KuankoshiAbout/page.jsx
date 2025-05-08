"use client";

import ThreeDSlider from "../../components/3DSlider.jsx";
import ParallaxImage from "../../components/ParallaxImage";
import InfiniteScroll from "../../components/InfiniteScroll/page.jsx";
import GsapText from "../../components/RevealText/index";
import HomeSlider from "../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import ScrollTopCard from "../../components/ScrollTopCard/index.jsx";
import ScrollTopCard1 from "../../components/ScrollTopCard1/index.jsx";
import ScrollTopCard2 from "../../components/ScrollTopCard2/index.jsx";
import { ReactLenis } from "@studio-freight/react-lenis";
import styles from "./page.module.scss";
import { projects } from "../../data.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <ReactLenis root>
      <div className="">
        <section className=" border w-[100%] mx-auto section-news 2xl:aspect-[1920/800] aspect-[500/500] md:aspect-[1024/576]   lg:aspect-[1920/768]  relative overflow-hidden">
          <div className="mask bg-[#000] absolute opacity-25 w-full h-full top-0 left-0 z-30"></div>
          <div className="absolute flex-row inset-0 flex z-50 items-center justify-center ">
            <div className="txt flex justify-center flex-col items-center">
              <GsapText
                text="KUANKOSHI"
                id="gsap-intro"
                fontSize="3.3rem"
                fontWeight="500"
                color="#fff"
                lineHeight="60px"
                className="text-center inline-block mb-0 h-auto "
              />
              <div className="news-tag mt-4 flex justify-center">
                <div className="tag px-3 hover:bg-white hover:text-black duration-500 py-1 rounded-[20px] border border-white text-white flex justify-center items-center mx-2 text-[.8rem]">
                  新案件賞
                </div>
                <div className="tag px-3 py-1 rounded-[20px] hover:bg-white hover:text-black duration-500 border border-white text-white flex justify-center items-center mx-2 text-[.8rem]">
                  新案件賞
                </div>
                <div className="tag px-3 py-1 rounded-[20px] hover:bg-white hover:text-black duration-500 border border-white text-white flex justify-center items-center mx-2 text-[.8rem]">
                  新案件賞
                </div>
                <div className="tag px-3 py-1 rounded-[20px] hover:bg-white hover:text-black duration-500 border border-white text-white flex justify-center items-center mx-2 text-[.8rem]">
                  新案件賞
                </div>
              </div>
            </div>
          </div>
          <div className="portrait-container overflow-hidden">
            <div className="img mt-8">
              <ParallaxImage src="/images/hero-img/img04.png" alt="" />
            </div>
          </div>
        </section>
        <section className="">
          <ScrollTopCard1 />
          <ScrollTopCard />
          <ScrollTopCard2 />
        </section>
        <section className="bg-[#f1f1f1] relative py-[110px]">
          <div className="top-tag border border-gray-300 text-[.8rem] bg-white absolute z-10 left-1/2 -translate-x-1/2 text-gray-500 top-[-20px] tracking-widest rounded-full px-6 py-3">
            Project | Cooperation
          </div>

          <div className="flex flex-col lg:flex-row w-[90%] mx-auto max-w-[1380px] gap-10 sm:gap-16">
            {/* 第一塊內容 */}
            <div className="w-full lg:w-1/2 group flex px-4 sm:px-6 flex-col items-center">
              <Image
                src="https://store-palette.com/assets/img/common/layout/spesial_banner_1-pc.png"
                alt="map-section"
                width={1000}
                height={600}
                className="w-full max-w-[600px] group-hover:rounded-[40px] duration-700"
              />
              <div className="description mt-5 flex flex-col sm:flex-row items-center justify-between sm:pl-5 w-full">
                <span className="text-[.9rem] leading-loose tracking-widest text-center sm:text-left">
                  無論是住宅規劃、商業提案或空間優化，歡迎與我們聯繫，
                  <br />
                  我們將以專業與誠意回應每一個期待。
                </span>
                <button className="mt-4 sm:mt-0 sm:ml-3 relative inline-flex h-12 w-12 items-center justify-center overflow-hidden group-hover:bg-black group-hover:text-white rounded-full border-black border font-medium text-neutral-900">
                  <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                    <svg className="h-5 w-5" viewBox="0 0 15 15" fill="none">
                      <path
                        fill="currentColor"
                        d="M8.15 3.15a.5.5 0 0 1 .7 0l4 4a.5.5 0 0 1 0 .7l-4 4a.5.5 0 1 1-.7-.7L11.3 8H2.5a.5.5 0 0 1 0-1H11.3L8.15 3.85a.5.5 0 0 1 0-.7Z"
                      />
                    </svg>
                  </div>
                  <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                    <svg className="h-5 w-5" viewBox="0 0 15 15" fill="none">
                      <path
                        fill="currentColor"
                        d="M8.15 3.15a.5.5 0 0 1 .7 0l4 4a.5.5 0 0 1 0 .7l-4 4a.5.5 0 1 1-.7-.7L11.3 8H2.5a.5.5 0 0 1 0-1H11.3L8.15 3.85a.5.5 0 0 1 0-.7Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* 第二塊內容 */}
            <div className="w-full lg:w-1/2 group flex px-4 sm:px-6 flex-col items-center">
              <Image
                src="/images/about/spesial_banner_2-pc.png"
                alt="map-section"
                width={1000}
                height={600}
                className="w-full max-w-[600px] group-hover:rounded-[40px] duration-700"
              />
              <div className="description mt-5 flex flex-col sm:flex-row items-center justify-between sm:pl-5 w-full">
                <span className="text-[.9rem] leading-loose tracking-widest text-center sm:text-left">
                  寬越設計擁有跨領域合作經驗，歡迎品牌、建築師、開發商與我們洽談設計、
                  <br />
                  整合施工或空間創作項目，共同完成具備深度與美感的場域作品。
                </span>
                <button className="mt-4 sm:mt-0 sm:ml-3 relative inline-flex h-12 w-12 items-center justify-center overflow-hidden group-hover:bg-black group-hover:text-white rounded-full border-black border font-medium text-neutral-900">
                  <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                    <svg className="h-5 w-5" viewBox="0 0 15 15" fill="none">
                      <path
                        fill="currentColor"
                        d="M8.15 3.15a.5.5 0 0 1 .7 0l4 4a.5.5 0 0 1 0 .7l-4 4a.5.5 0 1 1-.7-.7L11.3 8H2.5a.5.5 0 0 1 0-1H11.3L8.15 3.85a.5.5 0 0 1 0-.7Z"
                      />
                    </svg>
                  </div>
                  <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                    <svg className="h-5 w-5" viewBox="0 0 15 15" fill="none">
                      <path
                        fill="currentColor"
                        d="M8.15 3.15a.5.5 0 0 1 .7 0l4 4a.5.5 0 0 1 0 .7l-4 4a.5.5 0 1 1-.7-.7L11.3 8H2.5a.5.5 0 0 1 0-1H11.3L8.15 3.85a.5.5 0 0 1 0-.7Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <TextParallaxContent
        imgUrl="https://aitohus.com/assets/images/top/quality.avif"
        heading="關於宜園建設."
        description="宜家園邸，打造溫馨舒適的理想家園。宜園建設精心規劃，融合自然綠意與現代設計，營造安心宜居的生活環境。便利交通、完善機能，讓您盡享家的溫暖與美好。"
      ></TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://aitohus.com/assets/images/top/quality.avif"
        heading="關於宜園建設."
        description="宜家園邸，打造溫馨舒適的理想家園。宜園建設精心規劃，融合自然綠意與現代設計，營造安心宜居的生活環境。便利交通、完善機能，讓您盡享家的溫暖與美好。"
      ></TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://aitohus.com/assets/images/top/quality.avif"
        heading="關於宜園建設."
        description="宜家園邸，打造溫馨舒適的理想家園。宜園建設精心規劃，融合自然綠意與現代設計，營造安心宜居的生活環境。便利交通、完善機能，讓您盡享家的溫暖與美好。"
      ></TextParallaxContent> */}

      {/* <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div> */}
    </ReactLenis>
  );
}
const IMG_PADDING = 12;
const TextParallaxContent = ({
  imgUrl,
  description,
  subheading,
  heading,
  children,
}) => {
  return (
    <div>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy
          heading={heading}
          subheading={subheading}
          description={description}
        />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.99]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden "
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, description }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute right-0 border border-white  inline-flex top-0  h-[200vh] px-[5%] sm:px-[8%] lg:px-[10%] 2xl:px-[15%]  flex-row pb-[50vh] items-center justify-center text-white"
    >
      <div className="flex flex-col justify-center w-1/2">
        <h2 className="text-[5rem] text-white font-light mt-[-100px]">
          QUILITY
        </h2>
      </div>
      <div className="flex flex-col w-1/2">
        <p className="mb-2 text-center text-xl md:mb-4 text-white md:text-3xl">
          {subheading}
        </p>
        <p className="text-left  w-full !font-light leading-relaxed text-white text-[2rem]">
          {heading}
        </p>
        <p className="w-full !font-light text-[.9rem] text-white leading-loose mt-5">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
