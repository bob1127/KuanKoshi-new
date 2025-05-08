"use client";

import HomeSlider from "../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "./about.scss";
import Link from "next/link.js";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";

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
                以高端國產品牌為主打的充滿高級感的時尚精品店
                ，營造出震撼感官的空間
              </h1>
            </div>
            <div className="flex ">
              <AnimatedLink href="/">
                <span className="text-[.85rem] text-gray-500">
                  Categoreies - 001
                </span>
              </AnimatedLink>
              <span className="mx-2 text-gray-500">|</span>
              <AnimatedLink href="">
                <span className="text-[.85rem] text-gray-500">
                  {" "}
                  以高端國產品牌為主打的充滿高級感的時尚精品店
                  ，營造出震撼感官的空間
                </span>
              </AnimatedLink>
            </div>
          </div>
          <section className=" border w-[85%] mx-auto rounded-[50px] section-news 2xl:aspect-[1920/800] aspect-[500/500] md:aspect-[1024/576]   lg:aspect-[1920/768]  relative overflow-hidden">
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
                  src="/images/小資專案/468661269_122223979160031935_3338016445612834353_n.jpg"
                  alt=""
                  fill
                  className="aspect-[1920/900] object"
                />
              </div>
            </div>
          </section>
          <section className="mt-[18vh] ">
            <div className="flex flex-row w-[80%]   mx-auto">
              <div className="stick-section flex justify-end relative  pt-[80px] w-[30%] h-200vh ">
                <div className="square sticky flex   pr-4 right-4 top-[90px] h-[100px]  ">
                  <span>IDEA PHOTO</span>
                </div>
              </div>
              <div className="content-section pt-[50px] flex justify-end w-[70%]">
                <div className="">
                  <div className="content">
                    <br></br>
                    <div className="w-[80%] ">
                      <div className="top-title flex justify-end">
                        <div className="w-1/2 flex flex-col">
                          <p className="tracking-widest content-normal">
                            2005年在名古屋市東區和泉地區開業，2011年搬遷至中部地區的文化、時尚中心名古屋市榮地區，以UNEVEN
                            GENERAL STORE為名重新開業。
                          </p>
                          <br></br>
                          <br></br>
                          <p className="tracking-widest content-normal">
                            透過進一步擴大活動空間並以國內品牌為中心，我們將能夠推廣超越各種類型和類別界限的各種風格的時尚。我們的目標是在體貼每位顧客的同時，透過溝通發現和提出新的風格。
                          </p>
                          <div className="flex items-center mt-10 justify-between">
                            <span className="text-[.9rem] mx-4 text-gray-700">
                              url
                            </span>
                            <div className="w-full group flex flex-row">
                              <Link className="w-full text-[.8rem]" href="">
                                <button
                                  role="link"
                                  class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-neutral-800 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0"
                                >
                                  <span className=" text-[.8rem] font-light">
                                    https://www.uneven.jp/images/about/shop_1.jpg?data=20241008
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
                      src="https://www.uneven.jp/images/about/shop_1.jpg?data=20241008"
                      alt=""
                      placeholder="empty"
                      loading="lazy"
                      width={800}
                      height={1100}
                      className="w-full max-w-[1200px]"
                    ></Image>
                    <Image
                      src="https://www.uneven.jp/images/about/shop_2.jpg"
                      alt=""
                      placeholder="empty"
                      loading="lazy"
                      width={800}
                      height={1100}
                      className="w-full mt-8 max-w-[1200px]"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-page-navgation w-[65%] mx-auto">
            <div className="flex py-6  justify-between">
              <div className="tag border rounded-full px-3 py-1 text-[.85rem]">
                Categories
              </div>
              <span className="text-gray-600">Look More</span>
            </div>
            <div className="border-t-1 flex justify-between border-gray-600 py-5">
              <span>
                結合品牌精神與市場洞察，量身打造具吸引力與記憶點的商業空間，
                <br></br>助力品牌形象升級與業績成長。
              </span>
              <button class="group rotate-[-90deg] relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
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
            <div className="flex justify-center">
              <AnimatedLink href="" className="group">
                <div className="prev  mx-2 bg-white rounded-full py-8 px-[80px] group-hover:bg-black duration-1000">
                  <span className="tracking-widest text-[.9rem] group-hover:text-white duration-700">
                    ← PREV
                  </span>
                </div>
              </AnimatedLink>
              <AnimatedLink
                href=""
                className="group flex flex-col justify-center items-center"
              >
                <div className="next mx-2 bg-white rounded-full py-8 px-[80px] group-hover:bg-black duration-1000">
                  <span className="tracking-widest text-[.9rem] group-hover:text-white duration-700">
                    MENU
                  </span>
                </div>
                <span className="text-[.9rem] text-gray-700 mt-4">
                  30+ | 案例
                </span>
              </AnimatedLink>
              <AnimatedLink href="" className="group">
                <div className="next mx-2 bg-white rounded-full py-8 px-[80px] group-hover:bg-black duration-1000">
                  <span className="tracking-widest text-[.9rem] group-hover:text-white duration-700">
                    NEXT →
                  </span>
                </div>
              </AnimatedLink>
            </div>
          </section>
          <section className="py-[150px] bg-[linear-gradient(to_bottom,white_50%,#36454f_50%)]">
            {/* <div className="title py-20">
              <h2 className="text-center text-[4rem] font-bold">#unevensnap</h2>
              <div className="icon flex justify-center items-center">
                <div className="w-[1.6rem]  bg-center bg-cover bg-no-repeat h-[1.6rem] bg-[url('https://www.uneven.jp/images/icon_ig.svg')]"></div>
                <b className="ml-3 font-normal">INSTGRAM</b>
              </div>
            </div> */}
            <div className="w-[100%] border overflow-hidden">
              <Carousel items={cards} />
            </div>
            {/* <Marquee>
              <div className="flex items-center">
                <HoverItem
                  imageUrl="hhttps://10per-komatsu.com/wp/wp-content/uploads/2024/09/house-in-miiri000-1.jpg"
                  text="Built for Living."
                  fontSize="2rem"
                  fontWeight="300"
                  color="#ffffff"
                  lineHeight="50px"
                />

                <HoverItem
                  imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2025/02/futabayama0000.jpg"
                  text="LIMITED DROP"
                  fontSize="1.6rem"
                  fontWeight="600"
                  color="#e6e6e6"
                  lineHeight="40px"
                />
                <HoverItem
                  imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/08/house-in-mochida_00-1.jpg"
                  text="Built for Living."
                  fontSize="2rem"
                  fontWeight="300"
                  color="#ffffff"
                  lineHeight="50px"
                />

                <HoverItem
                  imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/07/house-s_000-1.jpg"
                  text="LIMITED DROP"
                  fontSize="1.6rem"
                  fontWeight="600"
                  color="#e6e6e6"
                  lineHeight="40px"
                />
                <HoverItem
                  imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/06/house-in-mitaki000-2.jpg"
                  text="Built for Living."
                  fontSize="2rem"
                  fontWeight="300"
                  color="#ffffff"
                  lineHeight="50px"
                />

                <HoverItem
                  imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/02/houseY0000.jpg"
                  text="LIMITED DROP"
                  fontSize="1.6rem"
                  fontWeight="600"
                  color="#e6e6e6"
                  lineHeight="40px"
                />
              </div>
            </Marquee> */}
            {/* <div className="flex flex-col items-center py-20">
              <p className="text-white tracking-wide !font-light ">
                徵求你的UNEVEN時尚風格📸！！
              </p>
              <p className="text-white tracking-wide !font-light ">
                請在 Instagram 上標記「#unevensnap」的標籤來發佈🙏🏻
              </p>
              <p className="text-white tracking-wide !font-light ">
                由工作人员精选并刊登 ☺️
              </p>
            </div> */}
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
            </div>
          </section>
        </div>
        <section className="py-[20vh] ">
          <div className="item flex w-[80%] max-w-[1920px] mx-auto">
            <div className="w-1/2 flex flex-col  justify-center items-start">
              <div className="w-[100%] flex flex-col px-20 max-w-[800px] mx-auto">
                <Character
                  className="text-[clamp(16px,2.3vmin,24px)] text-[#131313] leading-relaxed tracking-wide w-full max-w-[700px] mx-auto break-words text-center"
                  paragraph="下週4月9日(三)起將舉辦〈TENDER PERSON〉的25AW “SOMETHING JUST LIKE THIS”預訂會。"
                />

                <GsapText
                  text="2025年3月21日"
                  id="gsap-intro"
                  fontSize=".9rem"
                  fontWeight="500"
                  color=""
                  lineHeight="60px"
                  className="text-[.9rem] text-gray-600"
                />
              </div>

              <div className="tag w-[80%] mx-auto px-20 mt-8 flex flex-wrap">
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <div className="w-full h-full overflow-hidden ">
                <MotionImage
                  src="https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-10-pc.webp"
                  alt=""
                  width={800}
                  height={1200}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="item mt-[150px] flex w-[80%] max-w-[1920px] mx-auto">
            <div className="w-1/2 flex justify-center items-center">
              <div className="w-full h-full overflow-hidden ">
                <MotionImage
                  src="https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-13-pc.webp"
                  alt=""
                  width={800}
                  height={1200}
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col  justify-center items-start">
              <div className="w-[100%] flex flex-col px-20 max-w-[800px] mx-auto">
                <Character
                  className="text-[clamp(16px,2.3vmin,24px)] text-[#131313] leading-relaxed tracking-wide w-full max-w-[700px] mx-auto break-words text-center"
                  paragraph="下週4月9日(三)起將舉辦〈TENDER PERSON〉的25AW “SOMETHING JUST LIKE THIS”預訂會。"
                />

                <GsapText
                  text="2025年3月21日"
                  id="gsap-intro"
                  fontSize=".9rem"
                  fontWeight="500"
                  color=""
                  lineHeight="60px"
                  className="text-[.9rem] text-gray-600"
                />
              </div>

              <div className="tag w-[80%] mx-auto px-20 mt-8 flex flex-wrap">
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
                <div className="border m-1 duration-300 hover:bg-black hover:text-white border-dashed border-black rounded-full px-4 py-[1px] text-[.9rem] ">
                  TEXT
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
