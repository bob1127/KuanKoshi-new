"use client";
import { Suspense } from "react";

import HomeSlider from "../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link.js";
import { ReactLenis } from "@studio-freight/react-lenis";
import HoverItem from "../../components/HoverItem.jsx";
import AnimatedLink from "../../components/AnimatedLink";
import gsap from "gsap";
import Categories from "../../components/categories.jsx";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

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

  return (
    <ReactLenis root>
      <div className="bg-[#E1E3D9]">
        <div className="policy  fixed z-50 left-[38%] bottom-8 bg-white rounded-lg shadow-md w-[350px] py-5">
          <div className="flex justify-center w-full items-center">
            <div className="w-3/4 pl-5">
              <b className="text-black text-[.85rem] tracking-widest">
                This website uses cookies.
              </b>
            </div>
            <div className="flex w-1/4 items-center">
              <b className="border-b-1 text-[.9rem] border-black">OK</b>
              <span className="font-extrabold px-5">
                <Image
                  className="w-[10px]"
                  src="/images/icon/close.png"
                  alt=" "
                  width={15}
                  height={15}
                  placeholder="empty"
                  loading="lazy"
                />
              </span>
            </div>
          </div>
        </div>
        <HomeSlider />

        <section className=" py-5 sm:py-[150px] flex flex-col lg:flex-row pt-8 mt-20  sm:pb-[80px]  border-t-1 border-gray-300 max-w-[1920px] mx-auto w-full px-4 sn:px-0  sm:w-[95%] 2xl::w-[88%] ">
          <div className=" w-full lg:w-[15%]">
            <div className="sticky pl-5 top-24  ">
              <Suspense fallback={<div></div>}>
                <Categories />
              </Suspense>
            </div>
          </div>

          <div className="flex w-full lg:w-[60%] flex-col">
            <div className="title flex justify-between pl-8"></div>
            <div className="  mx-auto px-4 md:px-10">
              <Image
                src="/images/474790076_122233773494031935_6963865975193128560_n.jpg"
                alt=""
                placeholder="empty"
                loading="eager"
                width={1500}
                height={800}
                className="w-screen"
              />
              <div className="text text-[.95rem] leading-loose mt-5">
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                <br></br>
                <br></br>
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                Designer
              </div>
              <Image
                src="/images/474790076_122233773494031935_6963865975193128560_n.jpg"
                alt=""
                placeholder="empty"
                loading="eager"
                width={1500}
                height={800}
                className="w-screen mt-8"
              />
              <div className="text text-[.95rem] leading-loose mt-5">
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                <br></br>
                <br></br>
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                Designer
              </div>
            </div>
          </div>
          <div className=" w-full py-10 px-5 sm:px-0 lg:py-0 sm:w-[60%] mx-auto lg:w-[25%] pr-8  flex flex-col">
            <div className="">
              <span className="text-[.8rem]">
                以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
                Designer
              </span>
            </div>
            <div className="sticky  my-4 top-24 ">
              <div className="flex  px-4 flex-col border border-[#d7d7d7] bg-[#375E77]">
                <h2 className="article-side-project-title text-white text-[1rem] font-normal tracking-widest">
                  326新成屋兩房57萬裝潢成家專案
                </h2>
                <div className="feature">
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal text-white">
                      裝潢價格：
                    </b>
                    <span className="text-[.85rem]  font-normal text-white">
                      約新台幣 180 萬元​
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal text-white">
                      裝潢坪數：
                    </b>
                    <span className="text-[.85rem] text-white font-normal text-white">
                      25 坪​
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal text-white">
                      施工日期：
                    </b>
                    <span className="text-[.85rem] font-normal text-white">
                      2024.05.04
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal text-white">
                      特色：
                    </b>
                    <br></br>
                    <span className="text-[.85rem] w-3/4 text-white font-normal text-white">
                      ​以白色與灰色為主色調，搭配木質地板，營造出簡約且溫馨的居家氛圍。​
                    </span>
                  </div>
                </div>
              </div>
              <div className="small-viewer-project p-5">
                <div className="flex flex-row justify-between my-3 ">
                  <div className="img w-1/2">
                    <Image
                      src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                      placeholder="empty"
                      loading="lazy"
                      alt="small-img"
                      width={400}
                      height={30}
                      className="w-full"
                    />
                  </div>

                  <div className="arrow w-1/2 flex flex-col justify-between p-4">
                    <div className="flex flex-col">
                      <b className="text-[.95rem]">Name</b>
                      <span className="text-[.8rem] leading-snug ">
                        {" "}
                        Lorem ipsum dolor consectetur
                      </span>
                    </div>
                    <b className="text-[.95rem] ">Go Project</b>
                  </div>
                </div>
                <div className="flex flex-row justify-between my-3 ">
                  <div className="img w-1/2">
                    <Image
                      src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                      placeholder="empty"
                      loading="lazy"
                      alt="small-img"
                      width={400}
                      height={30}
                      className="w-full"
                    />
                  </div>

                  <div className="arrow w-1/2 flex flex-col justify-between p-4">
                    <div className="flex flex-col">
                      <b className="text-[.95rem]">Name</b>
                      <span className="text-[.8rem] leading-snug ">
                        {" "}
                        Lorem ipsum dolor consectetur
                      </span>
                    </div>
                    <b className="text-[.95rem] ">Go Project</b>
                  </div>
                </div>
                <div className="flex flex-row justify-between my-3 ">
                  <div className="img w-1/2">
                    <Image
                      src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                      placeholder="empty"
                      loading="lazy"
                      alt="small-img"
                      width={400}
                      height={30}
                      className="w-full"
                    />
                  </div>

                  <div className="arrow w-1/2 flex flex-col justify-between p-4">
                    <div className="flex flex-col">
                      <b className="text-[.95rem]">Name</b>
                      <span className="text-[.8rem] leading-snug ">
                        {" "}
                        Lorem ipsum dolor consectetur
                      </span>
                    </div>
                    <b className="text-[.95rem] ">Go Project</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_navgation flex flex-row">
          <div className="flex w-full md:w-[80%] mx-auto">
            <div className="Navgation_Prev group hover:scale-[1.02] duration-400 w-1/2 px-8">
              <div className="flex flex-col justify-start items-start">
                <b className="text-[.9rem] tracking-wide w-3/4 text-left font-bold">
                  〈COGNOMEN〉 25AW “WORKER-MAN
                  ATHLETE”的預購活動將於下週末為期三天舉辦！！
                </b>
                <span className="text-[.8rem] mt-3">
                  Categories: 小資50萬裝潢方案
                </span>
                <button class="mt-4  relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                  <div class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                    <div class="absolute translate-x-0 opacity-0 transition group-hover:-translate-x-6 group-hover:opacity-100 rotate-180">
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

                    <span class="pl-6">Hover</span>
                    <div class=" absolute  right-0 translate-x-12 opacity-100 transition group-hover:translate-x-6 group-hover:opacity-0">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                      >
                        <path
                          d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="Navgation_Next hover:scale-[1.02] duration-400 w-1/2 group px-8">
              <div className="flex flex-col justify-end items-end">
                <b className="text-[.9rem]  w-3/4 text-right tracking-wide font-bold">
                  〈COGNOMEN〉 25AW “WORKER-MAN
                  ATHLETE”的預購活動將於下週末為期三天舉辦！！
                </b>
                <span className="text-[.8rem] mt-3">
                  Categories: 小資50萬裝潢方案
                </span>
                <button class="mt-4 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                  <div class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                    <div class="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                      >
                        <path
                          d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span class="pl-6">Hover</span>
                    <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
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
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="section-page-navgation w-full max-w-[1100px] mx-auto px-4">
          <div className="flex flex-col md:flex-row py-6 justify-between items-center">
            <div className="tag border rounded-full px-4 py-1 text-[.85rem] mb-4 md:mb-0">
              Categories
            </div>
            <span className="text-gray-600">Look More</span>
          </div>

          <div className="border-t border-gray-600 flex flex-col md:flex-row justify-between py-5 items-start md:items-center gap-6">
            <span className="text-[.9rem] text-gray-800 leading-relaxed">
              結合品牌精神與市場洞察，量身打造具吸引力與記憶點的商業空間，
              <br className="hidden md:block" />
              助力品牌形象升級與業績成長。
            </span>

            <button className="group rotate-[-90deg] relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 shrink-0">
              <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </section>

        <section className="pb-[100px] ">
          <div className="title p-10">
            <h2 className="text-center text-[4vmin] font-bold">#unevensnap</h2>
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61550958051323&sk=photos"
              className="icon flex justify-center items-center"
            >
              <div className="w-[1.6rem]  bg-center bg-cover bg-no-repeat h-[1.6rem] bg-[url('https://www.uneven.jp/images/icon_ig.svg')]"></div>
              <b className="ml-3 font-normal">INSTGRAM</b>
            </Link>
          </div>
          <Marquee>
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
            </div>
          </Marquee>
        </section>
      </div>
      {/* <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div> */}
    </ReactLenis>
  );
}
