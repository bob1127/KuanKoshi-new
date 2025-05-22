"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import SpecialOffers from "../components/SpecialOffers";
// import ThreedSlider from "../components/ThreeDSlider/ThreeSlider";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
// import ThreeDBanner from "../components/ThreeDBanner/index";
import ThreeDSlider from "../components/3DSlider.jsx";
// import InfiniteScroll from "../components/InfiniteScroll/page.jsx";
import GsapText from "../components/RevealText/index";
import Preloader from "../components/Preloader/index";
// import HomeSlider from "../components/HeroSliderHome/page.jsx";
import AnimatedLink from "../components/AnimatedLink";
import Script from "next/script";
import LogoLoader from "../components/Loderanimation.jsx";
// import Marquee from "react-fast-marquee";
import { Compare } from "../components/ui/compare";
gsap.registerPlugin(ScrollTrigger);

export default function HomeClient({ specialPosts }) {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "寬越設計｜室內設計首選品牌",
    url: "https://www.kuankoshi.com/",
    description:
      "寬越設計提供專業室內設計服務，專精於住宅、商業空間與老屋翻新。從50萬小資裝潢到千萬豪宅設計，皆有豐富經驗與客製提案。",
    publisher: {
      "@type": "Organization",
      name: "寬越設計",
      url: "https://www.kuankoshi.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.kuankoshi.com/images/logo/company-logo.ico",
      },
    },
    mainEntity: [
      {
        "@type": "CreativeWork",
        name: "小資裝修專案",
        url: "https://www.kuankoshi.com/#special",
        description: "50-100萬裝潢專案，為首購族量身打造，兼具美感與實用性",
      },
      {
        "@type": "CreativeWork",
        name: "商業空間設計",
        url: "https://www.kuankoshi.com/project?cat=commercial-public",
        description: "量身打造品牌商業空間，從品牌精神出發整合設計與施工",
      },
      {
        "@type": "CreativeWork",
        name: "老屋翻新工程",
        url: "https://www.kuankoshi.com/project?cat=renovation-restoration",
        description: "結合現代美感與結構優化，翻轉老屋新生命",
      },
    ],
  };

  const initGSAPAnimations = useCallback(() => {
    if (window.innerWidth < 580) return;

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

    return ctx;
  }, []);

  useEffect(() => {
    const firstVisit = localStorage.getItem("visited");
    if (firstVisit) {
      setLoading(false);
    }
  }, []);

  const handleLogoFinish = () => {
    localStorage.setItem("visited", "true");
    setLoading(false);

    requestAnimationFrame(() => {
      initGSAPAnimations(); // 🟢 初始化動畫
    });
  };

  // useEffect(() => {
  //   let ctx;

  //   const onTransitionComplete = () => {
  //     ctx = initGSAPAnimations();
  //   };

  //   window.addEventListener("pageTransitionComplete", onTransitionComplete);

  //   if (!sessionStorage.getItem("transitioning")) {
  //     if (!loading) {
  //       ctx = initGSAPAnimations();
  //     }
  //   } else {
  //     sessionStorage.removeItem("transitioning");
  //   }

  //   return () => {
  //     if (ctx) ctx.revert();
  //     window.removeEventListener(
  //       "pageTransitionComplete",
  //       onTransitionComplete
  //     );
  //   };
  // }, [initGSAPAnimations, loading]);

  return (
    <ReactLenis root>
      <Script
        id="home-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      {loading ? (
        <LogoLoader onFinish={handleLogoFinish} />
      ) : (
        // 🔽 你原本的 JSX 區塊，保持不變

        <div className="overflow-hidden ">
          <div
            id="dark-section"
            className="relative w-full aspect-[16/9] md:aspect-[1024/576]  "
          >
            <Preloader />
          </div>

          {/* <section className="section-padding">
            <div className="flex flex-col justify-center items-center  px-4 sm:px-8">
              <GsapText
                text="從小資日常到質感夢想宅"
                id="headline"
                className="text-[5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] leading-snug font-medium text-white text-center"
              />
              <GsapText
                text="一起打造家的每一種可能"
                id="headline"
                className="text-[4.5vw] sm:text-[2.3vw] md:text-[1.8vw] lg:text-[1.6vw] leading-snug font--normal text-white text-center"
              />
            </div>
            <div className="flex  flex-col md:flex-row max-w-[1400px] mx-auto w-[90%] gap-10 mt-10 md:mt-[50px]">
     
              <div className="flex flex-col w-full">
                <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-0 z-10" />
                    <Image
                      src="/images/小資專案/小資專案.webp"
                      alt="About Image 1"
                      fill
                      loading="lazy"
                      placeholder="empty"
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section id="dark-section" className=" section-padding  ">
            <div
              id="dark-section"
              className="flex flex-col justify-center  w-full md:w-[90%] max-w-[1920px] mx-auto"
            >
              <div className="flex  flex-col  w-full   justify-center  mx-auto items-cente items-center  mt-4">
                <div className="flex flex-col mb-5 justify-center items-center  px-4 sm:px-8">
                  <GsapText
                    text="小資首購裝修首選第一品牌"
                    id="headline"
                    className="text-[5vw] font-mode sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] leading-snug  text-white text-center"
                  />

                  <h2 className="font-normal  text-[20px]">
                    50-100萬裝修專案量身訂做
                  </h2>

                  {/* <span className=" leading-loose font--normal max-w-3xl text-base sm:text-md text-center text-gray-800 ">
                    寬越設計從 50
                    萬小資方案到千萬豪宅規劃皆具經驗，無論是小坪數輕裝潢，或全室訂製系統與高端設計，我們都能為每個預算量身打造舒適、實用且富有美感的生活空間。
                  </span> */}
                </div>

                <div className="w-[90%] md:w-full mx-auto">
                  <SpecialOffers posts={specialPosts} />
                </div>
                {/* <div className="text w-[95%] lg:w-1/2 p-8 flex flex-col justify-center items-center">
            <TextGenerateEffect words="宜居" />
            <p>不與人同的作為</p>
          </div> */}
              </div>
            </div>
          </section>

          {/* 下方 ThreeDSlider 保持 */}

          <section className="section-ThreeD-carousel section-padding">
            <ThreeDSlider />
          </section>

          <section>
            <div className="flex flex-col sm:flex-row section-padding items-end">
              {/* 第一張圖 */}
              <div className="img group w-[95%] sm:w-[32.5%] mx-auto sm:mx-3 h-auto overflow-hidden">
                <AnimatedLink href="https://www.kuankoshi.com/project?cat=commercial-public">
                  <div className="flex flex-col pl-4 py-4">
                    <div className="inline-block pb-4">
                      <button className="relative !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                        <b className="text-[.9rem] font-mode"> 商業空間</b>
                      </button>
                    </div>
                    <span className="text-[.75rem]">Project</span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>

                  <div className="animate-image-wrapper relative w-full aspect-[4/5] max-h-[500px] md:max-h-[550px] xl:max-h-[600px] overflow-hidden">
                    <div className="mask-up p-4 md:p-10 absolute h-0 opacity-0 group-hover:h-[30%] md:group-hover:h-[55%] group-hover:opacity-100 duration-500 z-40 bottom-0 left-0 w-full bg-white">
                      <div className="txt">
                        <b className="text-xs xl:text-normal">
                          房屋改造｜外觀拉皮｜自地自建｜舊屋翻修
                        </b>
                        <p className="xl:text-normal text-xs md:block hidden">
                          我們以尊重歷史為出發，結合現代工藝與美感，賦予老屋新的生命力，讓空間在歲月中持續發光。
                        </p>
                      </div>
                    </div>
                    <div className="overlay absolute inset-0 bg-black hidden sm:block z-10"></div>
                    <div className="image-container overflow-hidden relative w-full h-full">
                      <Image
                        src="/images/商業空間.webp"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-110 duration-2000"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                    </div>
                  </div>
                </AnimatedLink>
              </div>

              {/* 第二張圖 */}
              <div className="img group w-[95%] sm:w-[32.5%] mx-auto sm:mx-3 h-auto overflow-hidden">
                <AnimatedLink href="https://www.kuankoshi.com/project?cat=commercial-public">
                  <div className="flex flex-col pl-4 py-4">
                    <div className="inline-block pb-4">
                      <button className="relative !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                        <b className="text-[.9rem] font-mode"> 辦公空間</b>
                      </button>
                    </div>
                    <span className="text-[.75rem]">商辦科技</span>
                    <span className="text-[.75rem]">Taichung - 西屯</span>
                  </div>

                  <div className="animate-image-wrapper relative w-full aspect-[4/5] max-h-[500px] md:max-h-[550px] xl:max-h-[600px] overflow-hidden">
                    <div className="mask-up p-4 md:p-10 absolute h-0 opacity-0 group-hover:h-[30%] md:group-hover:h-[50%] group-hover:opacity-100 duration-500 z-40 bottom-0 left-0 w-full bg-white">
                      <div className="txt">
                        <b className="text-xs xl:text-normal">
                          商辦展示｜科技商辦
                        </b>
                        <p className="xl:text-normal text-xs md:block hidden">
                          以人為本，從動線、光線到材質細節，縝密規劃每一寸辦公空間，提升團隊凝聚力與工作效率
                        </p>
                      </div>
                    </div>
                    <div className="overlay absolute inset-0 bg-black hidden sm:block z-10"></div>
                    <div className="image-container overflow-hidden relative w-full h-full">
                      <Image
                        src="/images/辦公空間.webp"
                        alt="辦公空間-商辦科技|寬越室內設計"
                        fill
                        className="object-cover group-hover:scale-110 duration-2000"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                    </div>
                  </div>
                </AnimatedLink>
              </div>

              {/* 第三張圖 */}
              <div className="img group w-[95%] sm:w-[32.5%] mx-auto sm:mx-3 h-auto overflow-hidden">
                <AnimatedLink href="https://www.kuankoshi.com/project?cat=residential-luxury">
                  <div className="flex flex-col pl-4 py-4">
                    <div className="inline-block pb-4">
                      <button className="relative !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                        <b className="text-[.9rem] font-mode"> 住家豪宅</b>
                      </button>
                    </div>
                    <span className="text-[.75rem]">Project</span>
                    <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                  </div>

                  <div className="animate-image-wrapper relative w-full aspect-[4/5] max-h-[500px] md:max-h-[550px] xl:max-h-[600px] overflow-hidden">
                    <div className="mask-up p-4 md:p-10 absolute h-0 opacity-0 group-hover:h-[30%] md:group-hover:h-[45%] group-hover:opacity-100 duration-500 z-40 bottom-0 left-0 w-full bg-white">
                      <div className="txt">
                        <b className="text-xs xl:text-normal">
                          大器豪墅｜現代時尚｜精緻官邸｜七期豪宅
                        </b>
                        <p className="xl:text-normal text-xs md:block hidden">
                          以優雅與機能並重為設計主軸，融合居者性格，打造兼具舒適感與獨特風格的理想豪宅
                        </p>
                      </div>
                    </div>
                    <div className="overlay absolute inset-0 bg-black hidden sm:block z-10"></div>
                    <div className="image-container overflow-hidden relative w-full h-full">
                      <Image
                        src="/images/住家豪宅.webp"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-110 duration-2000"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                    </div>
                  </div>
                </AnimatedLink>
              </div>
            </div>
          </section>

          {/* <section className="">
            <ThreeDBanner />
          </section> */}
          <section className="section-padding">
            <div className="img group w-[98%]    ">
              <AnimatedLink href="https://www.kuankoshi.com/project?cat=renovation-restoration">
                <div className="flex flex-col pl-4 py-4">
                  <div className="inline-block pb-4">
                    <button
                      role="link"
                      class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                    >
                      <button
                        role="link"
                        class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                      >
                        <b className="text-[.9rem] font-mode"> 建築老屋</b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">舊屋翻新</span>
                  <span className="text-[.75rem]">Taichung - 南屯</span>
                </div>
                <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/4] sm:aspect-[3/4] lg:aspect-[1920/1080] max-h-[650px] overflow-hidden">
                  <div className="m-2 ">
                    <Compare
                      firstImage="/images/舊屋翻新before.webp"
                      secondImage="/images/舊屋翻新after.webp"
                      firstImageClassName="object-cover "
                      secondImageClassname="object-cover "
                      className="h-[250px] w-full md:h-[500px] lg:h-[600px]"
                      slideMode="hover"
                    />
                  </div>
                  {/* <div className="mask-up p-4 md:p-10 absolute h-0 opacity-0 group-hover:h-[30%] md:group-hover:h-[35%] group-hover:opacity-100 duration-500 z-40 bottom-0 left-0 w-full  bg-white ">
                    <div className="txt">
                      <b className="text-xs xl:text-normal">
                        健身中心｜汽車旅館｜手作美學
                      </b>
                      <p className="xl:text-normal text-xs md:block hidden">
                        結合品牌精神與市場洞察，量身打造具吸引力與記憶點的商業空間，助力品牌形象升級與業績成長
                      </p>
                    </div>
                  </div>
                  <div className="overlay absolute inset-0 bg-black hidden sm:block z-10"></div>
                  <div className="image-container overflow-hidden relative w-full h-full">
                    <Image
                      src="/images/img01.webp"
                      alt="About Image 1"
                      fill
                      className="object-cover group-hover:scale-110 duration-2000"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                    />
                    xs
                  </div> */}
                </div>
              </AnimatedLink>
            </div>
          </section>

          <section className="section-padding border-t border-gray-300 w-full">
            <div className="flex justify-between items-center px-4 md:px-8 pb-8">
              <div className="flex items-center gap-2">
                <b className="text-lg font-mode">Featured</b>
                <span className="text-lg font-mode">Project</span>
              </div>
              <AnimatedLink href="project">
                <b className="text-lg font-mode">看更多案例</b>
              </AnimatedLink>
            </div>

            {/* 滑動容器 */}
            <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide w-full">
              {[
                {
                  title: "住宅空間設計",
                  desc: "打造專屬於您的理想居所，從格局配置到材質選用，細膩呈現生活美學。",
                  date: "Taichung - 2025.03.23",
                  img: "/images/006-LINE_ALBUM_皇普熊S_250105_1.jpg",
                  baseHeight: "h-[320px]",
                  hoverHeight: "group-hover:h-[400px]",
                },
                {
                  title: "商業空間設計",
                  desc: "從品牌精神出發，創造兼具美感與功能的商業場域，提升品牌形象與消費體驗。",
                  date: "Taichung - 2025.03.23",
                  img: "/images/taiwan.png",
                  baseHeight: "h-[360px]",
                  hoverHeight: "group-hover:h-[400px]",
                },
                {
                  title: "辦公室與共享空間設計",
                  desc: "打造靈活高效的工作場域，提升團隊協作力與品牌文化感知。",
                  date: "Taichung - 2025.03.23",
                  img: "/images/001_瑞其科技_250305_9.jpg",
                  baseHeight: "h-[300px]",
                  hoverHeight: "group-hover:h-[380px]",
                },
                {
                  title: "空間美學顧問",
                  desc: "從色彩搭配、家具配置到照明設計，全面提升空間細節質感。",
                  date: "Taichung - 2025.03.23",
                  img: "/images/03-ADDＢ.jpg",
                  baseHeight: "h-[340px]",
                  hoverHeight: "group-hover:h-[420px]",
                },
                {
                  title: "3D 模型與虛擬實境提案",
                  desc: "以擬真 3D 模型與 VR 技術，讓設計想像提前落地，打造沉浸式體驗。",
                  date: "Taichung - 2025.03.23",
                  img: "/images/小資專案/469076948_122223966266031935_4434481575489001954_n.jpg",
                  baseHeight: "h-[380px]",
                  hoverHeight: "group-hover:h-[480px]",
                },
              ].map((item, index) => (
                <AnimatedLink
                  href="/project"
                  key={index}
                  className="group snap-start inline-block min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[20%]"
                >
                  <div className="flex flex-col transition-all duration-500 ease-in-out">
                    {/* 圖片 */}
                    <div className="relative w-full overflow-hidden bg-gray-100">
                      <div
                        className={`animate-image-wrapper relative w-full ${item.baseHeight} overflow-hidden transition-all duration-500 ${item.hoverHeight}`}
                      >
                        <div className="overlay absolute inset-0 bg-black hidden sm:block opacity-20 group-hover:opacity-30 z-10 transition"></div>
                        <div className="image-container relative w-full h-full">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 文字 */}
                    <div className="flex flex-col py-4 pl-4 pr-4 bg-white w-full overflow-hidden break-words">
                      <div className="relative inline-block pb-2">
                        <span className="relative font-mode text-base group-hover:text-black">
                          {item.title}
                        </span>
                        <div className="absolute bottom-0 left-0 h-[2px] w-full origin-bottom-right scale-x-0 bg-neutral-800 transition-transform duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)] group-hover:origin-bottom-left group-hover:scale-x-100"></div>
                      </div>

                      <span className="text-sm text-gray-500 leading-relaxed mt-2">
                        {item.desc}
                      </span>
                      <span className="text-xs text-gray-400 mt-2">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </AnimatedLink>
              ))}
            </div>
          </section>
        </div>
      )}
    </ReactLenis>
  );
}
