"use client";
import { useRef, useEffect, useState } from "react";
// import "./photos.css";
import Marquee from "react-fast-marquee";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";
import GsapText from "../../components/RevealText/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedLink from "../../components/AnimatedLink";
gsap.registerPlugin(CustomEase);

const Photos = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgroundImages = [
    "/images/hero-img/img05.png",
    "/images/hero-img/img06.png",
    "/images/hero-img/img07.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <ReactLenis root>
      <div className="!bg-[#F1F1F1]">
        <section className="section-hero relative mt-[28vh]  h-[70vh]">
          <div className="white-section border rounded-tr-[60px] bg-[#F1F1F1] absolute top-[-90px] left-0 w-[88%] h-full z-10"></div>

          <section className="section-hero  w-full aspect-[500/500] relative z-30 h-full md:aspect-[1024/576] xl:aspect-[1920/700]  color-section">
            <div className="absolute left-1/2 bottom-[-110px] z-50 w-[200px] h-[200px] flex items-center justify-center transform -translate-x-1/2">
              {/* 旋轉的 SVG */}
              <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                  </defs>
                  <text fill="#EEFF1D" fontSize="12" fontWeight="bold">
                    <textPath href="#circlePath" startOffset="0">
                      設計靈感 • 美好生活 • 空間美學 • 設計靈感 • 美好生活 •
                      空間美學 •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* 中間白色圓圈 */}
              <div className="circle bg-[#F1F1F1] w-[100px] h-[100px] flex justify-center items-center text-[1.2rem] font-bold rounded-full z-10">
                Blog
              </div>
            </div>

            <style jsx>{`
              .animate-spin-slow {
                animation: spin 20s linear infinite;
              }
              @keyframes spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
            `}</style>

            <div className="absolute img-hero left-1/2 z-50 top-[-130px] -translate-x-1/2">
              <Image
                src="https://store-palette.com/assets/img/home/color_title.svg"
                alt="news-img"
                placeholder="empty"
                loading="lazy"
                width={1000}
                height={400}
                className="max-w-[300px] mb-5 w-[270px] mx-auto"
              ></Image>
              <div className="flex">
                <Image
                  src="https://store-palette.com/assets/img/home/color_illust_1.svg"
                  alt="news-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={400}
                  className="max-w-[150px] w-[90px]"
                ></Image>
                <Image
                  src="https://store-palette.com/assets/img/home/color_illust_2.svg"
                  alt="news-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={400}
                  className="max-w-[150px] w-[120px]"
                ></Image>
                <Image
                  src="https://store-palette.com/assets/img/home/color_illust_3.svg"
                  alt="news-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={400}
                  className="max-w-[150px] w-[90px]"
                ></Image>
                <Image
                  src="https://store-palette.com/assets/img/home/color_illust_4.svg"
                  alt="news-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1000}
                  height={400}
                  className="max-w-[150px] w-[90px]"
                ></Image>
              </div>
            </div>
            {/* 背景圖片群組 */}
            <div className="relative w-full h-full overflow-hidden">
              {backgroundImages.map((bg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: i === currentIndex ? 1 : 0, scale: 1 }}
                  animate={{
                    opacity: i === currentIndex ? 1 : 0,
                    scale: i === currentIndex ? 1.15 : 1,
                  }}
                  transition={{
                    opacity: { duration: 1.5, ease: "easeInOut" },
                    scale: { duration: 20, ease: "linear" },
                  }}
                  style={{
                    backgroundImage: `url(${bg})`,
                    zIndex: i === currentIndex ? 10 : 0,
                  }}
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                />
              ))}
            </div>

            {/* 黑色遮罩 */}
            <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0 z-10" />

            {/* 文字區塊 */}
            <div className="hero-title  w-1/2 absolute left-[4%] top-[90%] z-20">
              <div className="text-center px-4">
                <GsapText
                  text="最新消息"
                  id="gsap-intro"
                  fontSize="2.8rem"
                  fontWeight="200"
                  color="#fff"
                  lineHeight="60px"
                  className="text-center tracking-widest !text-white  inline-block mb-0 h-auto"
                />
              </div>
              <div className="text-center px-4">
                <GsapText
                  text="NEWS"
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
        </section>

        <section className="flex py-[140px] bg-custom-gradient">
          <div className="w-[30%]  flex items-center justify-end">
            <div className="card-text flex flex-col justify-center items-center">
              <h2 className="text-[9.5vmin] text-[#F1F1F1] rotate-[90deg] tracking-wide">
                IDEA
              </h2>
              <div className="project-amount text-white my-5 bg-black flex justify-center items-center rounded-full w-8 h-8">
                23
              </div>
              <span
                className="text-[1.4rem] text-[#F1F1F1] mt-10"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                }}
              >
                創意想法案件
              </span>
            </div>
          </div>
          <div className="w-[70%]  overflow-hidden">
            <Carousel items={cards} />
            <div className="pt-8">
              <span className="text-[.85rem] text-gray-400">
                界裡還有許多充滿趣味的店舗設計想法。使用海外材料和個性化的色彩設計的空間中，充滿了商店設計的靈感。
                <br></br>我們可以以輕鬆旅行的心情，去發現新的設計。
              </span>
            </div>
          </div>
        </section>
        <section className="section-grid-item mt-[10vh]  px-4 py-8">
          <div className="max-w-7xl w-[75%] mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-stretch">
            {/* LEFT */}
            <div className="h-full">
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl h-full w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-001
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      關於寬越設計的設計理念
                    </span>
                  </div>
                  <div className="relative w-full h-full min-h-[600px]">
                    <Image
                      src="/images/taiwan.png"
                      alt="card-img"
                      fill
                      className="object-cover group-hover:scale-125 duration-3000"
                    />
                  </div>
                </div>
              </AnimatedLink>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6 justify-between">
              {/* 第一張右卡片 */}
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-002
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      和風の木格子を使ったカフェ空間のブランディング
                    </span>
                  </div>
                  <Image
                    src="/images/hero-img/img05.png"
                    alt="card-img-2"
                    fill
                    className="object-cover group-hover:scale-125 duration-3000"
                  />
                </div>
              </AnimatedLink>
              {/* 第二張右卡片 */}
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-003
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      都會小巧面積內打造極簡與光感共存的甜點店
                    </span>
                  </div>
                  <Image
                    src="/images/hero-img/img06.png"
                    alt="card-img-3"
                    fill
                    className="object-cover group-hover:scale-125 duration-3000"
                  />
                </div>
              </AnimatedLink>
            </div>
          </div>

          <div className="max-w-7xl w-[75%] mx-auto grid grid-cols-1 mt-10 md:grid-cols-[2fr_3fr] gap-6 items-stretch">
            {/* LEFT */}

            {/* RIGHT */}
            <div className="flex flex-col gap-6 justify-between">
              {/* 第一張右卡片 */}
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-002
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      和風の木格子を使ったカフェ空間のブランディング
                    </span>
                  </div>
                  <Image
                    src="/images/news/468739557_122223967784031935_1974743144536883752_n.jpg"
                    alt="card-img-2"
                    fill
                    className="object-cover group-hover:scale-125 duration-3000"
                  />
                </div>
              </AnimatedLink>
              <AnimatedLink href="/KuankoshiNews">
                {/* 第二張右卡片 */}
                <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-003
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      都會小巧面積內打造極簡與光感共存的甜點店
                    </span>
                  </div>
                  <Image
                    src="/images/news/469007001_122223969848031935_3674403738594768543_n.jpg"
                    alt="card-img-3"
                    fill
                    className="object-cover group-hover:scale-125 duration-3000"
                  />
                </div>
              </AnimatedLink>
            </div>
            <div className="h-full">
              <AnimatedLink href="/KuankoshiNews">
                <div className="card-item group hover:shadow-xl h-full w-full border rounded-[40px] relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20 button-icon">
                    <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                    <h3 className="text-white text-[1.5rem] font-bold">
                      Blog-001
                    </h3>
                    <span className="text-xs font-light mt-2 text-white">
                      ショップの名前を建物のモチーフに美しく使ったベーカリーの店舗デザイン
                    </span>
                  </div>
                  <div className="relative w-full h-full min-h-[600px]">
                    <Image
                      src="/images/news/468999796_122223968204031935_5620093886499773914_n.jpg"
                      alt="card-img"
                      fill
                      className="object-cover group-hover:scale-125 duration-3000"
                    />
                  </div>
                </div>
              </AnimatedLink>
            </div>
          </div>
        </section>
        <div className="my-20">
          {!showMoreContent && (
            <div className="more w-[200px] flex justify-center items-center flex-col group mx-auto">
              <div
                className="next mx-2 bg-white rounded-full py-8 px-[80px] group-hover:bg-black duration-700 cursor-pointer"
                onClick={() => setShowMoreContent(true)}
              >
                <span className="tracking-widest flex justify-center items-center text-[.9rem] group-hover:text-white duration-500">
                  <span>MORE</span> <span>▼</span>
                </span>
              </div>
              <span className="text-[.9rem] text-gray-700 mt-4">
                10+ | 文章
              </span>
            </div>
          )}

          <AnimatePresence>
            {showMoreContent && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full w-full mx-auto my-10"
              >
                <section className="section-grid-item mt-[10vh]  px-4 py-8">
                  <div className="w-[75%] mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-stretch">
                    {/* LEFT */}
                    <div className="h-full">
                      <AnimatedLink href="/KuankoshiNews">
                        <div className="card-item group hover:shadow-xl h-full w-full border rounded-[40px] relative overflow-hidden">
                          <div className="absolute bottom-5 right-5 z-20 button-icon">
                            <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                          <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                          <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                            <h3 className="text-white text-[1.5rem] font-bold">
                              Blog-001
                            </h3>
                            <span className="text-xs font-light mt-2 text-white">
                              ショップの名前を建物のモチーフに美しく使ったベーカリーの店舗デザイン
                            </span>
                          </div>
                          <div className="relative w-full h-full min-h-[600px]">
                            <Image
                              src="https://kiiro-d.com/asset/uploads/2024/10/DSC6499-scaled.jpg"
                              alt="card-img"
                              fill
                              className="object-cover group-hover:scale-125 duration-3000"
                            />
                          </div>
                        </div>
                      </AnimatedLink>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-6 justify-between">
                      {/* 第一張右卡片 */}
                      <AnimatedLink href="/KuankoshiNews">
                        <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                          <div className="absolute bottom-5 right-5 z-20 button-icon">
                            <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                          <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                          <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                            <h3 className="text-white text-[1.5rem] font-bold">
                              Blog-002
                            </h3>
                            <span className="text-xs font-light mt-2 text-white">
                              和風の木格子を使ったカフェ空間のブランディング
                            </span>
                          </div>
                          <Image
                            src="https://kiiro-d.com/asset/uploads/2024/08/f1200ec2f253107006ed6ef9bd16a14f.png"
                            alt="card-img-2"
                            fill
                            className="object-cover group-hover:scale-125 duration-3000"
                          />
                        </div>
                      </AnimatedLink>
                      {/* 第二張右卡片 */}
                      <AnimatedLink href="/KuankoshiNews">
                        <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                          <div className="absolute bottom-5 right-5 z-20 button-icon">
                            <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                          <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                          <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                            <h3 className="text-white text-[1.5rem] font-bold">
                              Blog-003
                            </h3>
                            <span className="text-xs font-light mt-2 text-white">
                              都會小巧面積內打造極簡與光感共存的甜點店
                            </span>
                          </div>
                          <Image
                            src="https://kiiro-d.com/asset/uploads/2025/02/78ae4d9aaf549047b58f3b5bf1896236.jpg"
                            alt="card-img-3"
                            fill
                            className="object-cover group-hover:scale-125 duration-3000"
                          />
                        </div>
                      </AnimatedLink>
                    </div>
                  </div>

                  <div className="max-w-7xl w-[75%] mx-auto grid grid-cols-1 mt-10 md:grid-cols-[2fr_3fr] gap-6 items-stretch">
                    {/* LEFT */}

                    {/* RIGHT */}
                    <div className="flex flex-col gap-6 justify-between">
                      {/* 第一張右卡片 */}
                      <AnimatedLink href="/KuankoshiNews">
                        <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                          <div className="absolute bottom-5 right-5 z-20 button-icon">
                            <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                          <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                          <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                            <h3 className="text-white text-[1.5rem] font-bold">
                              Blog-002
                            </h3>
                            <span className="text-xs font-light mt-2 text-white">
                              和風の木格子を使ったカフェ空間のブランディング
                            </span>
                          </div>
                          <Image
                            src="https://kiiro-d.com/asset/uploads/2024/08/f1200ec2f253107006ed6ef9bd16a14f.png"
                            alt="card-img-2"
                            fill
                            className="object-cover group-hover:scale-125 duration-3000"
                          />
                        </div>
                      </AnimatedLink>
                      <AnimatedLink href="/KuankoshiNews">
                        {/* 第二張右卡片 */}
                        <div className="card-item group hover:shadow-xl aspect-square w-full border rounded-[40px] relative overflow-hidden">
                          <div className="absolute bottom-5 right-5 z-20 button-icon">
                            <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                          <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                          <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                            <h3 className="text-white text-[1.5rem] font-bold">
                              Blog-003
                            </h3>
                            <span className="text-xs font-light mt-2 text-white">
                              都會小巧面積內打造極簡與光感共存的甜點店
                            </span>
                          </div>
                          <Image
                            src="https://kiiro-d.com/asset/uploads/2025/02/78ae4d9aaf549047b58f3b5bf1896236.jpg"
                            alt="card-img-3"
                            fill
                            className="object-cover group-hover:scale-125 duration-3000"
                          />
                        </div>
                      </AnimatedLink>
                    </div>
                    <div className="h-full">
                      <AnimatedLink href="/KuankoshiNews">
                        <div className="card-item group hover:shadow-xl h-full w-full border rounded-[40px] relative overflow-hidden">
                          <div className="absolute bottom-5 right-5 z-20 button-icon">
                            <button class=" relative opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden  font-medium text-neutral-200 border border-white rounded-full px-4 py-2">
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
                          <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />
                          <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
                            <h3 className="text-white text-[1.5rem] font-bold">
                              Blog-001
                            </h3>
                            <span className="text-xs font-light mt-2 text-white">
                              ショップの名前を建物のモチーフに美しく使ったベーカリーの店舗デザイン
                            </span>
                          </div>
                          <div className="relative w-full h-full min-h-[600px]">
                            <Image
                              src="https://kiiro-d.com/asset/uploads/2024/10/DSC6499-scaled.jpg"
                              alt="card-img"
                              fill
                              className="object-cover group-hover:scale-125 duration-3000"
                            />
                          </div>
                        </div>
                      </AnimatedLink>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <section className="w-full pt-20 bg-custom-gradient section-content">
          <section className="mx-auto  max-w-[1920px]">
            <div className="flex w-[80%] flex-col md:flex-row h-full justify-center items-center mx-auto">
              <div className=" w-full md:w-1/2  pr-5 ">
                <GsapText
                  text="持續進化的空間設計"
                  id="gsap-intro"
                  fontSize="1.3rem"
                  fontWeight="800"
                  color="#fff"
                  className="text-left  tracking-widest inline-block mb-0 h-auto"
                />

                <p className="text-[.85rem]   tracking-widest leading-loose text-gray-100 ">
                  從玄關延伸至室內動線，以工業風吊燈串聯，搭配異材質元素與層次光源，
                  <br></br>營造出個性鮮明又富有活力的居家氛圍。
                </p>
              </div>
              <div className=" w-full md:w-1/2 flex mt-8 lg:mt-0  justify-center lg:justify-end items-center">
                <div className="max-w-[580px] ">
                  <Image
                    src="/images/taiwan.webp"
                    placeholder="empty"
                    loading="lazy"
                    alt=""
                    width={1500}
                    height={800}
                    className="w-full"
                  ></Image>
                </div>
              </div>
            </div>
          </section>

          <section className="section-footer mx-auto max-w-[1920px] ">
            <div className="mx-auto w-[80%] 2xl:w-[80%] py-20">
              <div className="top flex justify-between flex-col sm:flex-row">
                <h3 className="text-white text-center sm:text-left text-[1.8rem] font-bold">
                  KuanKshi
                </h3>
                <AnimatedLink href="/project">
                  <button class="group relative inline-flex text-[1rem] 2xl:text-[1.2rem] h-12 items-center justify-center  border-b-1 border-white px-6 font-medium text-neutral-100">
                    <span className="font-mode">More</span>
                    <div class="relative ml-1 h-5 w-5 overflow-hidden">
                      <div class="absolute transition-all duration-200 sm:group-hover:-translate-y-5 sm:group-hover:translate-x-4">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                        >
                          <path
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 -translate-x-4"
                        >
                          <path
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </AnimatedLink>
              </div>
              {/* <div className="middle flex  flex-col lg:flex-row">
              <div className=" w-full lg:w-[40%]">
                <div className="grid grid-cols-2">
                  <div className="flex py-8 flex-col">
                    <div className="flex flex-col">
                      <b className="text-gray-400 text-[.8rem]">新案件賞</b>
                      <span className="text-[.8rem] text-white mt-1">
                        新屋裝修
                      </span>
                      <span className="text-[.8rem] text-white mt-1">
                        老屋翻新
                      </span>
                    </div>
                    <div className="flex mt-8 flex-col">
                      <b className="text-gray-400 text-[.8rem]">NEWS</b>
                      <span className="text-[.8rem] text-white mt-1">
                        寬越設計案例
                      </span>
                      <span className="text-[.8rem] text-white mt-1">
                        預售屋
                      </span>
                    </div>
                  </div>
                  <div className="flex pl-8 py-8 flex-col">
                    <div className="flex flex-col">
                      <b className="text-gray-400 text-[.8rem]">新案件賞</b>
                      <span className="text-[.8rem] text-white mt-1">
                        辦公空間
                      </span>
                      <span className="text-[.8rem] text-white mt-1">
                        商業空間
                      </span>
                    </div>
                    <div className="flex mt-8 flex-col">
                      <b className="text-gray-400 text-[.8rem]">NEWS</b>
                      <span className="text-[.8rem] text-white mt-1">
                        寬越設計案例
                      </span>
                      <span className="text-[.8rem] text-white mt-1">
                        商務空間
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full lg:w-[60%] pb-5 flex justify-start lg:justify-end">
                <div className=" flex flex-col items-end justify-end">
                  <div className="flex flex-row items-center">
                    <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                      Public 2024 Building By
                    </span>
                    <span className="text-[.8rem]  text-white mt-1">
                      寬越設計案例
                    </span>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                      Public 2024 Building By
                    </span>
                    <span className="text-[.8rem]  text-white mt-1">
                      寬越設計案例
                    </span>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                      Public 2024 Building By
                    </span>
                    <span className="text-[.8rem] hover:border-b-1 border-white duration-500  text-white mt-1">
                      寬越設計案例
                    </span>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                      Website Sesign
                    </span>
                    <span className="text-[.8rem]  text-white mt-1">
                      極客網頁設計
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom mt-10 sm:mt-[10vh] pb-10 border-b-1 border-[#6f6f6f]">
              <div className="flex flex-row items-center mt-1">
                <span className="text-[.8rem] mr-2 mt-1 text-gray-400">
                  Website Sesign
                </span>
                <span className="text-[.95rem]  text-white mt-1">
                  極客網頁設計
                </span>
              </div>
            </div> */}
              <section className=" w-full mt-4">
                <span className="text-white text-[1.4rem] mb-2">PROJECT</span>
                <div className="flex  mx-auto   lg:w-full  w-full flex-wrap flex-row">
                  <AnimatedLink href="http://localhost:3000/project?cat=special-offers">
                    <div className=" w-[90%] md:w-[240px] 2xl:w-[340px]  group ">
                      <div className="img   mx-auto  sm:group-hover:h-[40vh] delay-75 duration-500  h-auto md:h-[33vh]  overflow-hidden">
                        <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                          <div className="image-container relative w-full h-full">
                            <Image
                              src="/images/7caded2d-785f-4ccd-aa41-2c98678ca2fb.png"
                              alt="About Image 1"
                              fill
                              className="object-cover sm:group-hover:scale-[1.05] duration-700"
                              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                            />
                            xs
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col px-3 py-4">
                        <div className="inline-block pb-4">
                          <button
                            role="link"
                            class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                          >
                            <button
                              role="link"
                              class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                            >
                              <b className="text-[.9rem] font-bold text-white">
                                {" "}
                                優惠方案案例
                              </b>
                            </button>
                          </button>
                        </div>
                        <span className="text-[.75rem] text-gray-100">
                          實際案例分享，透明預算內打造風格空間，兼顧設計感與實用性。
                        </span>
                        <span className="text-[.75rem] text-gray-100">
                          Taichung - 西屯
                        </span>
                      </div>
                    </div>
                  </AnimatedLink>
                  <AnimatedLink href="/about">
                    <div className=" w-[90%] md:w-[240px] 2xl:w-[340px]  group ">
                      <div className="img   mx-auto    h-auto md:h-[36vh] sm:group-hover:h-[44vh] delay-75 duration-500 overflow-hidden">
                        <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                          <div className="image-container relative w-full h-full">
                            <Image
                              src="/images/taiwan.webp"
                              alt="About Image 1"
                              fill
                              className="object-cover sm:group-hover:scale-[1.05] duration-700"
                              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                            />
                            xs
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col px-3 py-4">
                        <div className="inline-block pb-4">
                          <button
                            role="link"
                            class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                          >
                            <button
                              role="link"
                              class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                            >
                              <b className="text-[.9rem] font-bold text-white">
                                {" "}
                                設計理念
                              </b>
                            </button>
                          </button>
                        </div>
                        <span className="text-[.75rem] text-gray-100">
                          從生活出發，融合美感與機能，打造屬於你的舒適空間。
                        </span>
                        <span className="text-[.75rem] text-gray-100">
                          Taichung - 西屯
                        </span>
                      </div>
                    </div>
                  </AnimatedLink>
                  <AnimatedLink href="https://www.kuankoshi.com/project?cat=renovation-restoration">
                    <div className=" w-[90%] md:w-[240px] 2xl:w-[340px]  group ">
                      <div className="img   mx-auto    h-auto md:h-[26vh] sm:group-hover:h-[33vh] delay-75 duration-500 overflow-hidden">
                        <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                          <div className="image-container relative w-full h-full">
                            <Image
                              src="/images/a26ae4a7-fba6-4e16-b07f-1839b0add281.png"
                              alt="About Image 1"
                              fill
                              className="object-cover sm:group-hover:scale-[1.05] duration-700"
                              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                            />
                            xs
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col px-3 py-4">
                        <div className="inline-block pb-4">
                          <button
                            role="link"
                            class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                          >
                            <button
                              role="link"
                              class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                            >
                              <b className="text-[.9rem] font-bold text-white">
                                {" "}
                                老屋/舊屋翻新
                              </b>
                            </button>
                          </button>
                        </div>
                        <span className="text-[.75rem] text-gray-100">
                          結構重塑與格局優化，讓舊屋重獲新生，呈現嶄新生活樣貌。
                        </span>
                        <span className="text-[.75rem] text-gray-100">
                          Taichung - 西屯
                        </span>
                      </div>
                    </div>
                  </AnimatedLink>
                  <AnimatedLink href="/ServiceProcess">
                    <div className=" w-[90%] md:w-[240px] 2xl:w-[340px]  group ">
                      <div className="img   mx-auto    h-auto md:h-[30vh] sm:group-hover:h-[35vh] delay-75 duration-500 overflow-hidden">
                        <div className="animate-image-wrapper mx-auto relative w-full aspect-[4/5] md:h-full overflow-hidden ">
                          <div className="image-container relative w-full h-full">
                            <Image
                              src="https://i0.wp.com/draft.co.jp/wp-content/uploads/2024/11/ELLE-DECOR_2412_PCichiran.jpg?fit=1920%2C1280&quality=85&strip=all&ssl=1"
                              alt="About Image 1"
                              fill
                              className="object-cover sm:group-hover:scale-[1.05] duration-700"
                              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 550px, 85vw"
                            />
                            xs
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col px-3 py-4">
                        <div className="inline-block pb-4">
                          <button
                            role="link"
                            class="relative  !inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                          >
                            <button
                              role="link"
                              class="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] sm:group-hover:after:origin-bottom-left sm:group-hover:after:scale-x-100"
                            >
                              <b className="text-[.9rem] font-bold text-white">
                                {" "}
                                服務設計流程
                              </b>
                            </button>
                          </button>
                        </div>
                        <span className="text-[.75rem] text-gray-100">
                          從初談、丈量到完工，全流程專業陪伴，確保每一步都安心。
                        </span>
                        <span className="text-[.75rem] text-gray-100">
                          Taichung - 西屯
                        </span>
                      </div>
                    </div>
                  </AnimatedLink>
                </div>
              </section>
            </div>
          </section>
          <section className="relative ">
            <div className="bg-white mx-auto   max-w-[1400px] pt-10 w-[90%] lg:w-[78%] flex md:flex-row flex-col justify-center items-center">
              <div className="title w-full md:w-1/2 px-4 md:px-[9%] xl:px-[15%] h-full flex flex-col justify-between">
                <b className="text-bold tracking-widest text-[1.4rem]">
                  打造理想居所
                </b>
                <div>
                  <b className="text-[.9rem] tracking-widest leading-loose font-normal">
                    對於新婚小家庭或小資族，我們以聰明布局與細緻機能，讓有限空間也能兼顧舒適與收納。從溫馨客廳到未來育兒彈性規劃，寬越以專業設計，陪伴你們築起幸福起點。
                  </b>
                </div>
              </div>
              <div className=" w-full md:w-1/2 p-4 flex  justify-center items-center">
                <Image
                  src="/images/03-ADDＢ.webp"
                  alt=""
                  placeholder="empty"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full"
                ></Image>
              </div>
            </div>
          </section>
        </section>

        <div className="bg-white z-[99999999] py-10 bottom-section flex flex-col justify-center items-center">
          <Marquee>
            <div className="flex flex-row py-10 justify-center items-center">
              <div className="h-[1px] bg-black w-[50vw]"></div>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <p className="text-[3rem] mx-4">NEWS</p>
                <button class="group relative mr-3 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
                  <div class="transition duration-300 sm:group-hover:rotate-[360deg]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-neutral-200"
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
              <div className="h-[1px] bg-black w-[50vw]"></div>
            </div>
          </Marquee>

          <div className="flex bg-white flex-row justify-center items-center flex-wrap">
            <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('/images/商業空間.webp')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
              <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
                <p className="text-[.8rem] hidden sm:block">
                  打造吸睛又實用的品牌場域，讓空間成為說故事的第一站。
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                  <b className="text-[.8rem] mr-3 mt-4"> 商業空間</b>
                  <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                    <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                      <svg
                        width="10"
                        height="10"
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
                    <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
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
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('/images/建築老屋/舊屋翻新/001南屯郭S_250330_1.webp')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
              <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
                <p className="text-[.8rem] hidden sm:block">
                  讓老宅重拾光彩，透過設計賦予新生命，從舊時記憶走向嶄新未來。
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                  <b className="text-[.8rem] mr-3 mt-4"> 老屋翻新重建</b>
                  <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                    <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                      <svg
                        width="10"
                        height="10"
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
                    <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
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
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('/images/辦公空間.webp')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
              <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
                <p className="text-[.8rem] hidden sm:block">
                  設計出舒適與效率兼具的辦公場域，提升團隊氛圍與工作表現。
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                  <b className="text-[.8rem] mr-3 mt-4"> 辦公空間</b>
                  <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                    <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                      <svg
                        width="10"
                        height="10"
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
                    <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
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
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('/images/住家豪宅.webp')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
              <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
                <p className="text-[.8rem] hidden sm:block">
                  一寸細節都為生活而設計，專屬你的質感美宅從這裡開始。
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                  <b className="text-[.8rem] mr-3 mt-4"> 住家豪宅</b>
                  <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                    <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                      <svg
                        width="10"
                        height="10"
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
                    <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
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
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="news-item overflow-hidden group  m-1 sm:m-2 bg-[url('/images/taiwan.webp')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
              <div className="description absolute w-full bottom-0 h-[0%] opacity-0 sm:group-hover:opacity-100 duration-500 sm:group-hover:h-[40%] flex flex-col bg-white p-3">
                <p className="text-[.8rem] hidden sm:block">
                  用有限預算打造無限可能，小空間也能擁有風格與機能。
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                  <b className="text-[.8rem] mr-3 mt-4"> 小資專案</b>
                  <button class="group relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200">
                    <div class="translate-x-0 transition sm:group-hover:translate-x-[300%]">
                      <svg
                        width="10"
                        height="10"
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
                    <div class="absolute -translate-x-[300%] transition sm:group-hover:translate-x-0 duration-1000">
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
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Photos;

const DummyContent = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-medium font-sans max-w-3xl mx-auto">
        <span className="font-bold text-[20px] text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      )}
    </div>
  );
};

const data = [
  {
    category: "建築老屋",
    title: "老屋翻新-外觀拉皮",
    src: "/images/blog/建築老屋/img01.png",
    content: (
      <div className="">
        <div className="p-8 ">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl font-bold mb-4">
              翻新35年老透天，打造現代俐落街景
            </h2>
            <p>從老舊磁磚屋到質感現代建築，一場建築的重生旅程。</p>
          </div>
          <Image
            src="/images/blog/建築老屋/img01.png"
            alt="AI Example"
            width={1500}
            height={800}
            className="mt-4  w-full md:w-[80%]   rounded-lg"
          />
        </div>
      </div>
    ),
  },
  {
    category: "建築老屋",
    title: "老屋翻新-外觀拉皮",
    src: "/images/blog/建築老屋/img01.png",
    content: (
      <div className="">
        <div className="p-8 ">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl font-bold mb-4">
              翻新35年老透天，打造現代俐落街景
            </h2>
            <p>從老舊磁磚屋到質感現代建築，一場建築的重生旅程。</p>
          </div>
          <Image
            src="/images/blog/建築老屋/img01.png"
            alt="AI Example"
            width={1500}
            height={800}
            className="mt-4  w-full md:w-[80%]   rounded-lg"
          />
        </div>
      </div>
    ),
  },
  {
    category: "建築老屋",
    title: "老屋翻新-外觀拉皮",
    src: "/images/blog/建築老屋/img01.png",
    content: (
      <div className="">
        <div className="p-8 ">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl font-bold mb-4">
              翻新35年老透天，打造現代俐落街景
            </h2>
            <p>從老舊磁磚屋到質感現代建築，一場建築的重生旅程。</p>
          </div>
          <Image
            src="/images/blog/建築老屋/img01.png"
            alt="AI Example"
            width={1500}
            height={800}
            className="mt-4  w-full md:w-[80%]   rounded-lg"
          />
        </div>
      </div>
    ),
  },
  {
    category: "建築老屋",
    title: "老屋翻新-外觀拉皮",
    src: "/images/blog/建築老屋/img01.png",
    content: (
      <div className="">
        <div className="p-8 ">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl font-bold mb-4">
              翻新35年老透天，打造現代俐落街景
            </h2>
            <p>從老舊磁磚屋到質感現代建築，一場建築的重生旅程。</p>
          </div>
          <Image
            src="/images/blog/建築老屋/img01.png"
            alt="AI Example"
            width={1500}
            height={800}
            className="mt-4  w-full md:w-[80%]   rounded-lg"
          />
        </div>
      </div>
    ),
  },
  {
    category: "建築老屋",
    title: "老屋翻新-外觀拉皮",
    src: "/images/blog/建築老屋/img01.png",
    content: (
      <div className="">
        <div className="p-8 ">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl font-bold mb-4">
              翻新35年老透天，打造現代俐落街景
            </h2>
            <p>從老舊磁磚屋到質感現代建築，一場建築的重生旅程。</p>
          </div>
          <Image
            src="/images/blog/建築老屋/img01.png"
            alt="AI Example"
            width={1500}
            height={800}
            className="mt-4  w-full md:w-[80%]   rounded-lg"
          />
        </div>
      </div>
    ),
  },
];
