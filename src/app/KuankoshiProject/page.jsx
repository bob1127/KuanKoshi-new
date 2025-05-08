"use client";
// import { TransitionLink } from "../../components/utils/TransitionLink";

import ThreeDSlider from "../../components/3DSlider.jsx";
import "./about.css";
import InfiniteScroll from "../../components/InfiniteScroll/page.jsx";
import GsapText from "../../components/RevealText/index";
import HomeSlider from "../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

import { ReactLenis } from "@studio-freight/react-lenis";

import gsap from "gsap";
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
      <div className="">
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
                ></Image>
              </span>
            </div>
          </div>
        </div>
        <HomeSlider />

        <section className="py-[150px] flex pt-8 mt-20 pb-[80px]  border-t-1 border-gray-300 w-full ">
          <div className="w-[20%]">
            <div className="sticky pl-5 top-24 border border-black">
              <b>categories</b>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">All</p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
              <p className="text-[.95rem] mt-3 font-bold tracking-wider">
                Project
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="title flex justify-between pl-8">
              <div className="w-[20%]">
                <h1 className="text-[1.5rem]">PROJECTS</h1>
              </div>
              <div className="w-[80%]">
                <form action="">
                  <input type="text" />
                </form>
              </div>
            </div>
            <div className="  mx-auto pl-8 gap-4  grid lg:grid-cols-4  lg:w-full   ">
              <div className="w-[240px]  group">
                <div className="img   mx-auto   delay-75 duration-500  h-auto md:h-[240px]  overflow-hidden">
                  <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="overlay absolute inset-0 bg-[#dbd8d5] z-10"></div>
                    <div className="image-container relative w-full h-full">
                      <Image
                        src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-[1.05] duration-700"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </div>
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
                        <b className="text-[.9rem] font-bold">
                          {" "}
                          「A&D Awards 2024」受賞
                        </b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">
                    太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                  </span>
                  <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                </div>
              </div>

              <div className="w-[240px]  group">
                <div className="img   mx-auto   delay-75 duration-500  h-auto md:h-[240px]  overflow-hidden">
                  <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="overlay absolute inset-0 bg-[#dbd8d5] z-10"></div>
                    <div className="image-container relative w-full h-full">
                      <Image
                        src="/images/485767723_122244233402031935_483224666731407580_n.jpg"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-[1.05] duration-700"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </div>
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
                        <b className="text-[.9rem] font-bold">
                          {" "}
                          「A&D Awards 2024」受賞
                        </b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">
                    太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                  </span>
                  <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                </div>
              </div>
              <div className="w-[240px]  group">
                <div className="img   mx-auto   delay-75 duration-500  h-auto md:h-[240px]  overflow-hidden">
                  <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="overlay absolute inset-0 bg-[#dbd8d5] z-10"></div>
                    <div className="image-container relative w-full h-full">
                      <Image
                        src="/images/487559687_122246363834031935_814797758569969340_n.jpg"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-[1.05] duration-700"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </div>
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
                        <b className="text-[.9rem] font-bold">
                          {" "}
                          「A&D Awards 2024」受賞
                        </b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">
                    太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                  </span>
                  <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                </div>
              </div>

              <div className="w-[240px]  group">
                <div className="img   mx-auto   delay-75 duration-500  h-auto md:h-[240px]  overflow-hidden">
                  <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="overlay absolute inset-0 bg-[#dbd8d5] z-10"></div>
                    <div className="image-container relative w-full h-full">
                      <Image
                        src="/images/484833238_122244233678031935_7184528512722488542_n.jpg"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-[1.05] duration-700"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </div>
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
                        <b className="text-[.9rem] font-bold">
                          {" "}
                          「A&D Awards 2024」受賞
                        </b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">
                    太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                  </span>
                  <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                </div>
              </div>
              <div className="w-[240px]  group">
                <div className="img   mx-auto   delay-75 duration-500  h-auto md:h-[240px]  overflow-hidden">
                  <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="overlay absolute inset-0 bg-[#dbd8d5] z-10"></div>
                    <div className="image-container relative w-full h-full">
                      <Image
                        src="/images/474790076_122233773494031935_6963865975193128560_n.jpg"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-[1.05] duration-700"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </div>
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
                        <b className="text-[.9rem] font-bold">
                          {" "}
                          「A&D Awards 2024」受賞
                        </b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">
                    太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                  </span>
                  <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                </div>
              </div>

              <div className="w-[240px]  group">
                <div className="img   mx-auto   delay-75 duration-500  h-auto md:h-[240px]  overflow-hidden">
                  <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="overlay absolute inset-0 bg-[#dbd8d5] z-10"></div>
                    <div className="image-container relative w-full h-full">
                      <Image
                        src="/images/472718957_122231002604031935_2324224183243721735_n.jpg"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-[1.05] duration-700"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </div>
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
                        <b className="text-[.9rem] font-bold">
                          {" "}
                          「A&D Awards 2024」受賞
                        </b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">
                    太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                  </span>
                  <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                </div>
              </div>
              <div className="w-[240px]  group">
                <div className="img   mx-auto   delay-75 duration-500  h-auto md:h-[240px]  overflow-hidden">
                  <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="overlay absolute inset-0 bg-[#dbd8d5] z-10"></div>
                    <div className="image-container relative w-full h-full">
                      <Image
                        src="/images/472387888_122230804730031935_7221128610464034445_n.jpg"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-[1.05] duration-700"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </div>
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
                        <b className="text-[.9rem] font-bold">
                          {" "}
                          「A&D Awards 2024」受賞
                        </b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">
                    太陽印刷製造 InnoValley 在最佳工作場所類別中獲得了最高獎項。
                  </span>
                  <span className="text-[.75rem]">Taichung - 2025.03.23</span>
                </div>
              </div>

              <div className="w-[240px]  group">
                <div className="img   mx-auto   delay-75 duration-500  h-auto md:h-[240px]  overflow-hidden">
                  <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                    <div className="overlay absolute inset-0 bg-[#dbd8d5] z-10"></div>
                    <div className="image-container relative w-full h-full">
                      <Image
                        src="/images/472495274_122230804592031935_3466603781315337606_n.jpg"
                        alt="About Image 1"
                        fill
                        className="object-cover group-hover:scale-[1.05] duration-700"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                      />
                      xs
                    </div>
                  </div>
                </div>
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
                        <b className="text-[.9rem] font-bold">
                          {" "}
                          「A&D Awards 2024」受賞
                        </b>
                      </button>
                    </button>
                  </div>
                  <span className="text-[.75rem]">
                    太陽印刷製造 InnoValley
                    diosjoijogidfog在最佳工作場所類別中獲得了最高獎項。
                  </span>
                  <span className="text-[.75rem]">Taichung - 2025.03.23</span>
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
