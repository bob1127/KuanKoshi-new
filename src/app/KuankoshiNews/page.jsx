"use client";

import HomeSlider from "../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "./about.scss";
import Link from "next/link.js";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";
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
import ParallaxImage from "../../components/ParallaxImage.jsx";
import { ReactLenis } from "@studio-freight/react-lenis";
import GsapText from "../../components/RevealText/index";
import HoverItem from "../../components/HoverItem.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import Character from "../../components/TextOpacityScroll/Character.jsx";
import MotionImage from "../../components/MotionImage.jsx";
import AnimatedLink from "../../components/AnimatedLink";
const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const titles = Array.from(document.querySelectorAll(".paragraph-title"));
    titles.forEach((title, index) => {
      title.id = `section-${index}`;
    });
    setSections(
      titles.map((el, index) => ({
        id: `section-${index}`,
        text: el.innerText,
      }))
    );
  }, []);
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
              <h1 className="text-[2.5rem] text-gray-800">
                2025室內設計預算怎麼抓？
              </h1>
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
          <section className=" border w-[96%] md:w-[85%] mx-auto rounded-[50px] section-news 2xl:aspect-[1920/800] aspect-[500/500] md:aspect-[1024/576]   lg:aspect-[1920/768]  relative overflow-hidden">
            <div className="mask bg-[#000] absolute opacity-35 w-full h-full top-0 left-0 z-30"></div>
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
                  <div className="tag px-3 py-1 rounded-[20px] border border-white text-white flex justify-center items-center mx-2 text-[.8rem]">
                    新案件賞
                  </div>
                  <div className="tag px-3 py-1 rounded-[20px] border border-white text-white flex justify-center items-center mx-2 text-[.8rem]">
                    新案件賞
                  </div>
                  <div className="tag px-3 py-1 rounded-[20px] border border-white text-white flex justify-center items-center mx-2 text-[.8rem]">
                    新案件賞
                  </div>
                  <div className="tag px-3 py-1 rounded-[20px] border border-white text-white flex justify-center items-center mx-2 text-[.8rem]">
                    新案件賞
                  </div>
                </div>
              </div>
            </div>
            <div className="portrait-container overflow-hidden">
              <div className="img mt-8">
                <ParallaxImage
                  src="/images/hadashinoie016-2048x1365.jpg.webp"
                  alt=""
                  fill
                  className=" aspect-[500/500] md:aspect-[1024/768] lg:aspect-[1920/900] object"
                />
              </div>
            </div>
          </section>
          <section className=" mt-[10px] md:mt-[10vh] lg:mt-[15vh] ">
            <div className="flex flex-col lg:flex-row w-[95%] md:w-[80%]   mx-auto">
              <div className="stick-section  justify-start bg-white lg:bg-transparent p-8 lg:p-0   lg:justify-end relative  flex   pt-[80px] w-full sm:w-[85%]  lg:w-[30%]  ">
                <div className="square sticky flex  flex-col  right-4  pr-0 lg:pr-[15%] top-2 lg:top-[90px] h-auto lg:h-[100px]  ">
                  <span className="font-bold">IDEA DESIGN</span>
                  <ul className="space-y-2 text-sm mt-4 text-gray-700">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => {
                            const el = document.getElementById(section.id);
                            if (el)
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                          }}
                          className="hover:underline transition"
                        >
                          {section.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="content-section pt-[10px] md:pt-[50px] flex justify-end w-[95%] md:w-[88%] lg:w-[70%]">
                <div className="">
                  <div className="content">
                    <br></br>
                    <div className="w-[100%] ">
                      <div className="top-title flex justify-start">
                        <div className=" w-full md:w-[80%] flex flex-col">
                          <h2 className="paragraph-title ">
                            室內設計預算怎麼抓才合理？
                          </h2>
                          <p className="tracking-widest content-normal">
                            在我們諮詢案件中，近年來最多客戶提問的問題之一就是：「室內設計預算到底要抓多少？」這個問題沒有絕對的答案，但根據我們多年協助屋主規劃預算的經驗，確實能提供一個有依據、有彈性的參考方向。
                          </p>
                          <br></br>
                          <br></br>
                          <p className="tracking-widest content-normal">
                            不論你是買了新成屋、準備翻新老宅，或是針對局部空間進行改善，這篇文章將從
                            行情價格、預算規劃、費用配置
                            到我們實際協助客戶的案例，全方位帶你掌握 2025
                            室內裝修費用的真實狀況。
                          </p>
                          <div className="flex items-center mt-10 ">
                            <span className="text-[.9rem] mx-4 text-gray-700">
                              其他相關：
                            </span>
                            <div className="w-full group flex flex-row">
                              <Link className="w-full text-[.8rem]" href="">
                                <button
                                  role="link"
                                  class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-neutral-800 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0"
                                >
                                  <span className=" text-[.8rem] font-light">
                                    https://www.kuankoshi.com
                                  </span>
                                </button>
                              </Link>
                              <button class=" relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                                <div class="translate-x-0 transition group-hover:translate-x-[300%]">
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                  >
                                    <path
                                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                      fill="currentColor"
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                  >
                                    <path
                                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                      fill="currentColor"
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br></br>
                    </div>
                    <Image
                      src="/images/blog/006-20250224-109.jpg"
                      alt=""
                      placeholder="empty"
                      loading="lazy"
                      width={800}
                      height={1100}
                      unoptimized
                      onClick={() => setIndex(1)} // ← 對應上面 slides[1]
                      className="w-full max-w-[1200px] cursor-zoom-in"
                    ></Image>
                    <div className="paragraph">
                      <section className="px-6 py-12 max-w-5xl mx-auto">
                        <h2 className=" paragraph-title ">
                          室內設計預算評估指南
                        </h2>

                        <div className="space-y-6">
                          <div className="text-lg leading-relaxed">
                            <p className="mb-2">
                              在我們實際執行的案件中，我們習慣先幫業主釐清三個核心問題：
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>
                                你的房子是 <strong>新成屋、老屋</strong>，還是{" "}
                                <strong>局部整修</strong>？
                              </li>
                              <li>
                                你期待的風格與材質屬於{" "}
                                <strong>入門、中階</strong> 還是{" "}
                                <strong>高端</strong>？
                              </li>
                              <li>
                                是否有 <strong>家具電器與軟裝</strong>{" "}
                                一併納入預算內？
                              </li>
                            </ul>
                            <p className="mt-4">
                              根據這三點，再估算出一個大約的「每坪裝潢費用」。以下是我們根據
                              2024~2025 最新市場資料整理出的參考值：
                            </p>
                          </div>

                          <div className="overflow-x-auto">
                            <table className="min-w-full table-auto border border-gray-300">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th className="px-4 py-3 border-b text-left font-medium">
                                    預算等級
                                  </th>
                                  <th className="px-4 py-3 border-b text-left font-medium">
                                    每坪價格（新台幣）
                                  </th>
                                  <th className="px-4 py-3 border-b text-left font-medium">
                                    屋主類型說明
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="even:bg-gray-50">
                                  <td className="px-4 py-3 border-b">
                                    基礎裝修
                                  </td>
                                  <td className="px-4 py-3 border-b">
                                    1.8~2.5 萬/坪
                                  </td>
                                  <td className="px-4 py-3 border-b">
                                    小資族、出租用途
                                  </td>
                                </tr>
                                <tr className="even:bg-gray-50">
                                  <td className="px-4 py-3 border-b">
                                    中階設計
                                  </td>
                                  <td className="px-4 py-3 border-b">
                                    3~4.5 萬/坪
                                  </td>
                                  <td className="px-4 py-3 border-b">
                                    多數自住型屋主選擇
                                  </td>
                                </tr>
                                <tr className="even:bg-gray-50">
                                  <td className="px-4 py-3 border-b">
                                    高端訂製
                                  </td>
                                  <td className="px-4 py-3 border-b">
                                    5 萬以上/坪
                                  </td>
                                  <td className="px-4 py-3 border-b">
                                    注重設計細節與材質品質者
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>
                    </div>
                    <Image
                      src="/images/blog/001-20250317-74.jpg"
                      alt=""
                      placeholder="empty"
                      loading="lazy"
                      width={800}
                      height={1100}
                      unoptimized
                      onClick={() => setIndex(2)}
                      className="w-full mt-8 max-w-[1200px] cursor-zoom-in"
                    ></Image>
                    <section className="px-6 py-12 max-w-5xl mx-auto">
                      <h2 className=" paragraph-title ">
                        室內裝潢預算組成：別只看設計費
                      </h2>

                      <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                          很多屋主會將重點放在「設計費多少錢」，但我們實務中更常見的是：
                          <strong>
                            超支常常是發生在水電、木作與額外選配項目
                          </strong>
                          。
                        </p>
                        <p>
                          以下是我們協助 30
                          坪住宅進行全室設計案的預算分配範例（總預算約 NT$150
                          萬）：
                        </p>

                        <div className="overflow-x-auto">
                          <table className="min-w-full table-auto border border-gray-300">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-4 py-3 border-b text-left font-medium">
                                  預算項目
                                </th>
                                <th className="px-4 py-3 border-b text-left font-medium">
                                  百分比
                                </th>
                                <th className="px-4 py-3 border-b text-left font-medium">
                                  金額估算
                                </th>
                                <th className="px-4 py-3 border-b text-left font-medium">
                                  備註
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">
                                  設計與監工費
                                </td>
                                <td className="px-4 py-3 border-b">10%</td>
                                <td className="px-4 py-3 border-b">15 萬元</td>
                                <td className="px-4 py-3 border-b">
                                  含 3D、平面、材質選樣等
                                </td>
                              </tr>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">
                                  水電與泥作工程
                                </td>
                                <td className="px-4 py-3 border-b">25%</td>
                                <td className="px-4 py-3 border-b">
                                  37.5 萬元
                                </td>
                                <td className="px-4 py-3 border-b">
                                  老屋需更新線路成本更高
                                </td>
                              </tr>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">
                                  木作與系統櫃
                                </td>
                                <td className="px-4 py-3 border-b">35%</td>
                                <td className="px-4 py-3 border-b">
                                  52.5 萬元
                                </td>
                                <td className="px-4 py-3 border-b">
                                  包含櫃體、床頭牆、電視牆等
                                </td>
                              </tr>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">
                                  地坪與天花工程
                                </td>
                                <td className="px-4 py-3 border-b">15%</td>
                                <td className="px-4 py-3 border-b">
                                  22.5 萬元
                                </td>
                                <td className="px-4 py-3 border-b">
                                  木地板、油漆、天花造型等
                                </td>
                              </tr>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">
                                  設備與燈具
                                </td>
                                <td className="px-4 py-3 border-b">10%</td>
                                <td className="px-4 py-3 border-b">15 萬元</td>
                                <td className="px-4 py-3 border-b">
                                  燈具、冷氣、熱水器等
                                </td>
                              </tr>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">備用金</td>
                                <td className="px-4 py-3 border-b">5%</td>
                                <td className="px-4 py-3 border-b">7.5 萬元</td>
                                <td className="px-4 py-3 border-b">
                                  彈性使用，避免預算爆表
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>
                    <div className="flex">
                      <Image
                        src="/images/blog/006-20250317.jpg"
                        alt=""
                        placeholder="empty"
                        loading="lazy"
                        unoptimized
                        width={800}
                        height={1100}
                        onClick={() => setIndex(3)}
                        className="w-full m-3 cursor-zoom-in"
                      ></Image>
                    </div>
                    <section className="px-6 py-12 max-w-4xl mx-auto">
                      <h2 className=" paragraph-title ">
                        親身案例分享：如何從 100 萬預算做到高質感？
                      </h2>

                      <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                          在台北市內湖，我們曾協助一對夫妻進行{" "}
                          <strong>22 坪中古屋</strong> 的翻修。
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                          <li>原始屋況老舊，有漏水痕跡與老舊電線</li>
                          <li>
                            屋主預算為 <strong>100 萬</strong>，希望風格{" "}
                            <strong>簡約日系</strong>
                          </li>
                        </ul>

                        <p>透過以下方式，我們成功讓整體設計兼顧美感與機能：</p>

                        <ul className="list-disc pl-6 space-y-2">
                          <li>
                            系統櫃取代大部分木作，<strong>節省 15% 成本</strong>
                          </li>
                          <li>
                            使用防水超耐磨地板，
                            <strong>節省拆除磁磚的費用與工期</strong>
                          </li>
                          <li>
                            廚具與衛浴選擇國產 <strong>高 CP 值品牌</strong>
                            ，取代進口
                          </li>
                          <li>
                            預留 <strong>5 萬元備用預算</strong>，最終{" "}
                            <strong>無追加費用</strong>
                          </li>
                        </ul>

                        <p>
                          這類成功的規劃，來自於前期與屋主的{" "}
                          <strong>充分溝通</strong>， 以及設計師對{" "}
                          <strong>市場材料與工法</strong> 的掌握。
                        </p>
                      </div>
                    </section>
                    <section className="px-6 py-12 max-w-4xl mx-auto">
                      <h2 className=" paragraph-title ">
                        2025 裝潢行情參考價（根據我們與同業統計）
                      </h2>

                      <div className="space-y-6 text-lg leading-relaxed">
                        <div className="overflow-x-auto">
                          <table className="min-w-full table-auto border border-gray-300">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-4 py-3 border-b text-left font-medium">
                                  房屋坪數
                                </th>
                                <th className="px-4 py-3 border-b text-left font-medium">
                                  裝潢費用範圍（設計＋工程）
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">10 坪</td>
                                <td className="px-4 py-3 border-b">
                                  約 NT$ 30~50 萬
                                </td>
                              </tr>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">20 坪</td>
                                <td className="px-4 py-3 border-b">
                                  約 NT$ 70~100 萬
                                </td>
                              </tr>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">30 坪</td>
                                <td className="px-4 py-3 border-b">
                                  約 NT$ 120~180 萬
                                </td>
                              </tr>
                              <tr className="even:bg-gray-50">
                                <td className="px-4 py-3 border-b">
                                  40 坪以上
                                </td>
                                <td className="px-4 py-3 border-b">
                                  NT$ 200 萬起（視風格與項目）
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <p className="text-sm text-gray-600">
                          註：以上金額為實務範圍估算，細項仍須依照現場屋況、客製程度與地區差異做微調。
                        </p>
                      </div>
                    </section>
                    <Image
                      src="/images/blog/469720578_122225453222031935_8767653310245579018_n.jpg"
                      alt=""
                      placeholder="empty"
                      loading="lazy"
                      width={800}
                      unoptimized
                      height={1100}
                      onClick={() => setIndex(4)}
                      className="w-full m-3 cursor-zoom-in"
                    ></Image>
                    <Image
                      src="/images/blog/250105_8.jpg"
                      alt=""
                      placeholder="empty"
                      loading="lazy"
                      unoptimized
                      width={800}
                      onClick={() => setIndex(5)}
                      height={1100}
                      className="w-full m-3 cursor-zoom-in"
                    ></Image>
                  </div>
                </div>
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

            <AnimatedLink href="" className="group flex flex-col items-center ">
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
            {/*            
            <div className="flex flex-col mt-8 items-center">
              <div className="line mx-auto w-[150px] bg-white h-[1.5px] rounded-full"></div>
              <h2 className="text-center text-white text-[4rem] font-bold">
                KUANKOSHI
              </h2>
              <span className="text-[.9rem] text-center font-normal text-gray-100">
                寬越設計
              </span>
            </div>
            <div className="flex flex-row py-20">
              <div className="w-1/2 flex items-center">
                <div className="p-10 txt w-[80%] mx-auto">
                  <b className="text-white text-[2rem]">
                    市政北二路282號21樓之9, Taichung, Taiwan
                  </b>
                  <p className="text-gray-100">0927-886-699</p>
                  <p className="text-gray-100">kuankoshi@gmail.com</p>
                </div>
              </div>
              <div className="flex justify-center w-1/2 items-center">
                <Image
                  src="/images/about/公司環境01.jpg"
                  alt=""
                  placeholder="empty"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="max-w-[800px] w-[70%] mx-auto"
                ></Image>
              </div>
            </div> */}
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
