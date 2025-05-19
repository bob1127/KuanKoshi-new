"use client";
// import { TransitionLink } from "../../components/utils/TransitionLink";
// import EmblaCarousel from "../../components/EmblaCarousel07/EmblaCarousel";
import AnimatedLink from "../../components/AnimatedLink";
import { Form, Input, Button } from "@heroui/react";
import HeroSlider from "../../components/HeroSlider/page";

import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import GsapText from "../../components/RevealText/index";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import InfiniteScroll from "../../components/InfiniteScroll/page";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
export default function About() {
  const data01 = [
    {
      title: "STEP1 會談˙溝通",
      content: (
        <div>
          <div className="tag bg-rose-500 mb-4 rounded-full text-white font-bold w-[200px] flex justify-center items-center px-4 py-2">
            FREE
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            了解屋況，裝修需求、想法，預算考量，風格喜好等…
          </p>
          <div className="w-full">
            <Image
              src="/images/服務流程/服務流程-STEP1會談_溝通|寬越設計.png"
              alt="STEP1 會談_溝通"
              width={500}
              height={500}
              placeholder="empty"
              loading="lazy"
              className="rounded-lg object-cover h-[450px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "STEP2 現勘˙丈量",
      content: (
        <div>
          <div className="tag bg-rose-500 mb-4 rounded-full text-white font-bold w-[200px] flex justify-center items-center px-4 py-2">
            FREE
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            環境勘查，丈量拍照，初步規劃想法討論。
          </p>
          <div className="w-full">
            <Image
              src="/images/服務流程/服務流程-STEP2現勘_丈量|寬越設計.png"
              alt="STEP1 會談_溝通"
              width={500}
              height={500}
              placeholder="empty"
              loading="lazy"
              className="rounded-lg object-cover h-[450px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "STEP3 平面配置˙初步估價",
      content: (
        <div>
          <div className="tag bg-rose-500 mb-4 rounded-full text-white font-bold w-[200px] flex justify-center items-center px-4 py-2">
            FREE
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            平面空間動線規劃，設計風格簡報， 初步估價， 規劃預算。
          </p>
          <div className="w-full">
            <Image
              src="/images/服務流程/服務流程-STEP3平面配置＿初步估價|寬越設計.png"
              alt="STEP1 會談_溝通"
              width={500}
              height={500}
              placeholder="empty"
              loading="lazy"
              className="rounded-lg object-cover h-[450px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "STEP4 設計合約",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            確認配置及風格，進行設計合約之簽訂 繪製平面系統施工圖及3D模擬彩圖。
          </p>
          <div className="w-full">
            <Image
              src="/images/服務流程/服務流程-STEP4設計合約|寬越設計.png"
              alt="STEP1 會談_溝通"
              width={500}
              height={500}
              placeholder="empty"
              loading="lazy"
              className="rounded-lg object-cover h-[450px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "STEP4 設計合約",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            確認配置及風格，進行設計合約之簽訂 繪製平面系統施工圖及3D模擬彩圖。
          </p>
          <div className="w-full">
            <Image
              src="/images/服務流程/服務流程-STEP4設計合約|寬越設計.png"
              alt="STEP1 會談_溝通"
              width={500}
              height={500}
              placeholder="empty"
              loading="lazy"
              className="rounded-lg object-cover h-[450px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const backgroundImages = [
    "/images/hero-img/img07.png",
    "/images/小資專案/468762259_122223978674031935_6019549633708583470_n.jpg",
    "/images/hero-img/img06.png",
    "/images/小資專案/469720578_122225453222031935_8767653310245579018_n.jpg",
    "/images/小資專案/469120903_122223965966031935_3027154932930762522_n.jpg",
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex); // 保留上一張索引
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "業務人員",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image: "/images/hero-img/img01.png",
    },
    {
      id: 2,
      name: "John Doe",
      designation: "買屋看房",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image: "/images/hero-img/img05.png",
    },
    {
      id: 3,
      name: "John Doe",
      designation: "詢問價格",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image: "/images/hero-img/img06.png",
    },
    {
      id: 4,
      name: "John Doe",
      designation: "詢問價格",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image: "/images/hero-img/img07.png",
    },
  ];
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

  const OPTIONS = {};

  // 這裡定義你的背景圖片
  const SLIDES = [
    "/images/hero-img/img05.png",
    "/images/ph_takahiradai-no-ie.jpg",
    "/images/ph_esperanza.jpg",
    "/images/ph_minna-no-ie.jpg",
    "/images/ph_kumamoto-tasaki-clinic.jpg",
    "/images/hadashinoie016-2048x1365.jpg.webp",
  ];
  const THUMBNAILS = [
    "/images/hero-img/img05.png",
    "/images/ph_takahiradai-no-ie.jpg",
    "/images/ph_esperanza.jpg",
    "/images/ph_minna-no-ie.jpg",
    "/images/ph_kumamoto-tasaki-clinic.jpg",
    "/images/hadashinoie016-2048x1365.jpg.webp",
  ];
  const [showNav, setShowNav] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          setShowNav(false); // 向下滾 → 隱藏
        } else {
          setShowNav(true); // 向上滾 → 顯示
        }

        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <ReactLenis root className="">
      <section className="section-hero w-full aspect-[500/500] md:aspect-[1024/576] xl:aspect-[1920/1000] overflow-hidden relative">
        {/* 背景圖片群組 */}
        {backgroundImages.map((bg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: i === currentIndex ? 1 : 0,
              scale: i === currentIndex ? 1.15 : 1, // 放大範圍加大
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" }, // 切換用淡入淡出
              scale: { duration: 20, ease: "linear" }, // 放大效果持續 20 秒
            }}
            className="absolute inset-0 bg-cover  bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          />
        ))}

        {/* 黑色遮罩 */}
        <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0 z-10" />

        {/* 文字區塊 */}
        <div className="hero-title  w-1/2 absolute left-[4%] top-[90%] z-20">
          <div className="text-center px-4">
            <GsapText
              text="服務流程"
              id="gsap-intro"
              fontSize="2rem"
              fontWeight="200"
              color="#fff"
              className="text-center tracking-widest !text-white  inline-block mb-0 h-auto"
            />
          </div>
          <div className="text-center px-4">
            <GsapText
              text="PROCESS"
              id="gsap-intro"
              fontSize="1.2rem"
              fontWeight="200"
              color="#fff"
              lineHeight="30px"
              className="text-center !text-white tracking-widest inline-block mb-0 h-auto"
            />
          </div>
        </div>
      </section>
      {/* <section className="flex lg:flex-row flex-col max-w-[1920px] mx-auto w-[95%]  mt-20">
        <div className=" w-full lg:w-1/2">
          <HeroSlider />
        </div>
        <div className=" w-full lg:w-1/2  pt-10">
          <div className="flex flex-col sticky top-4   items-center justify-center">
            <div className=" ">
              <b className="text-[1.2rem] tracking-widest ">OUR PROJECTS</b>
              <Image
                src="https://framerusercontent.com/images/BUDA0wz5WRVOSHMhAubzp9XbdM.jpg"
                placeholder="empty"
                loading="lazy"
                alt=""
                width="800"
                height="1000"
                className="w-full"
              ></Image>
              <div className="txt flex pt-2 flex-row">
                <div className="w-1/3">
                  <span className="text-[#333] text-[.9rem]">寬越室內設計</span>
                </div>
                <div className="w-1/3 flex items-end flex-col">
                  <b className="text-[#333] text-[.9rem]">實在的構築</b>
                  <span className="text-[#333] text-[.9rem]">建坪：200</span>
                </div>
                <div className="w-1/3 flex items-end flex-col">
                  <b className="text-[#333] text-[.9rem]">建築工法</b>
                  <span className="text-[#333] text-[.9rem]">建坪：200</span>
                  <span className="text-[#333] text-[.9rem]">建坪：200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <Timeline data={data01} />
      </section>
      <section className="py-[100px]">
        <div className="flex max-w-[1920px] mx-auto p-20 w-[95%] flex-col">
          <div className="title  sm:w-2/3 w-full lg:w-1/2">
            <div className="text-left px-4">
              <h2 className="text-left !text-[1.8rem] font-mode tracking-widest inline-block mb-0 h-auto">
                [免費提供設計圖兩次修改]
              </h2>
            </div>

            <p className="text-[.9rem] leading-loose tracking-widest">
              在寬越室內設計，我們始終相信，空間的價值始於格局的思考。
              從場域分析、動線規劃到細部機能配置，我們以多年的實戰經驗與設計美學，為每一位客戶量身打造最符合需求的空間藍圖。
              我們不僅重視動線的合理性與使用的便利性，更關注空間氛圍、光線流動與材質搭配的整體平衡。
              每一張平面設計圖，都是寬越對專業、細節與未來生活想像的深度詮釋。
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="m-8 w-full lg:w-1/2">
              <Image
                src="/images/服務流程/平面設計圖-寬越室內設計.jpg"
                alt=""
                placeholder="empty"
                loading="lazy"
                width={800}
                height={800}
                className="w-full"
              ></Image>
            </div>
            <div className="m-8 w-full  lg:w-1/2">
              <Image
                src="/images/服務流程/平面設計圖-2-寬越室內設計.jpg"
                alt=""
                placeholder="empty"
                loading="lazy"
                width={800}
                height={800}
                className="w-full"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <div className="content"></div>
    </ReactLenis>
  );
}
