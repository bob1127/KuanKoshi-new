"use client";
import { useRef, useEffect, useState } from "react";
// import "./photos.css";
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
        <section className="section-hero relative mt-[28vh] h-[70vh]">
          <div className="white-section border rounded-tr-[60px] bg-[#F1F1F1] absolute top-[-90px] left-0 w-[88%] h-full z-10"></div>

          <section className="section-hero w-full aspect-[500/500] relative z-30 h-full md:aspect-[1024/576] xl:aspect-[1920/700]  color-section">
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

            <div className="absolute img-hero left-1/2 z-50 top-[-150px] -translate-x-1/2">
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
                  text="寬越設計."
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
                  text="KuanKshi"
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

        <section className="flex py-[140px] bg-[#375E77]">
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
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">
            翻新35年老透天，打造現代俐落街景
          </h2>
          <p>從老舊磁磚屋到質感現代建築，一場建築的重生旅程。</p>
          <Image
            src="/images/blog/建築老屋/img01.png"
            alt="AI Example"
            width={500}
            height={300}
            className="mt-4 rounded-lg"
          />
        </div>
      </div>
    ),
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
