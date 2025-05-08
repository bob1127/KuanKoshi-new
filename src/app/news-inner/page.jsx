"use client";
// import { TransitionLink } from "../../components/utils/TransitionLink";
import EmblaCarousel from "../../components/EmblaCarousel07/EmblaCarousel";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
// import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Image from "next/image";
import GsapText from "../../components/RevealText";
// import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import React from "react";
import TextImageSlider from "../../components/TextImageSlider";
import { ReactLenis } from "@studio-freight/react-lenis";
import Marquee from "react-fast-marquee";
export default function About() {
  const placeholders = ["建案地點？", "房價房型?", "預約看房?"];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "業務人員",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
    },
    {
      id: 2,
      name: "John Doe",
      designation: "買屋看房",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image:
        "https://blogimg.goo.ne.jp/user_image/1c/fe/9641ac44fee5bb8525f467bac86d0fb9.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      designation: "詢問價格",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image:
        "https://thumb.ac-illust.com/56/56a7c15a78437570e11a8252b729f35f_t.jpeg",
    },
  ];

  const OPTIONS = {};

  // 這裡定義你的背景圖片
  const SLIDES = [
    "/images/news/動土典禮/DSCF5288.jpg",
    "/images/news/動土典禮/DSCF5268.jpg",
    "/images/news/動土典禮/DSCF5311.jpg",
    "/images/news/動土典禮/DSCF5351.jpg",
    "/images/news/動土典禮/DSCF5323.jpg",
    "/images/news/動土典禮/DSCF5388.jpg",
  ];
  const THUMBNAILS = [
    "/images/news/動土典禮/DSCF5288.jpg",
    "/images/news/動土典禮/DSCF5268.jpg",
    "/images/news/動土典禮/DSCF5311.jpg",
    "/images/news/動土典禮/DSCF5351.jpg",
    "/images/news/動土典禮/DSCF5323.jpg",
    "/images/news/動土典禮/DSCF5388.jpg",
  ];

  return (
    <ReactLenis root className="">
      <div className="flex lg:flex-row max-w-[1920px] mx-auto px-0 2xl:px-[200px] flex-col pt-[100px] bg-white ">
        <div className=" w-full lg:w-[75%]  flex-col justify-center items-center flex ">
          <EmblaCarousel
            slides={SLIDES}
            thumbnails={THUMBNAILS}
            options={OPTIONS}
          />
          <div className="title py-[40px] md:py-[50px] px-[30px] sm:px-[40px] lg:px-[80px]">
            <GsapText
              text="宜園建設【一青隱】"
              fontSize="6vmin"
              color="#000"
              fontWeight="900"
              className="!text-black"
              delay={0.3} // ✅ 延遲 0.3 秒動畫
            />
          </div>
          <div className="content  flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto px-[30px] sm:px-[40px] lg:px-[80px]">
            <p className="leading-relaxed">
              不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
              致邀，職住共生的青創企業家 成家滿意，創業更旺，2-3房共居新浪潮
              <br></br> <br></br>
              宜園建設【一青隱】 神隱青海│2-3房│含精裝修
              接待會館：漢口路一段69號（漢口國中正對面） 預約專線：04-2314-9066
            </p>
          </div>
          <div className="img p-[80px]">
            {" "}
            <img
              src="/images/news/動土典禮/DSCF5292.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="title py-[40px] md:py-[50px] px-[30px] sm:px-[40px] lg:px-[80px]">
            <GsapText
              text="向自然習作，美好新始，健康新序"
              fontSize="5.3vmin"
              color="#000"
              className="!text-black"
              delay={0.3} // ✅ 延遲 0.3 秒動畫
            />
          </div>
          <div className="content flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto px-[30px] sm:px-[40px] lg:px-[80px]">
            <p className="leading-relaxed">
              不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
              致邀，職住共生的青創企業家 成家滿意，創業更旺，2-3房共居新浪潮
              <br></br> <br></br>
              宜園建設【一青隱】 神隱青海│2-3房│含精裝修
              接待會館：漢口路一段69號（漢口國中正對面） 預約專線：04-2314-9066
            </p>
          </div>
          <Image
            src="/images/news/動土典禮/DSCF5351.jpg"
            alt=""
            width={800}
            height={1400}
            placeholder="empty"
            className="mt-5"
            loading="lazy"
          ></Image>
          {/* <TextImageSlider /> */}
          <div className=" pt-[50px] flex flex-col justify-center  items-center px-4">
            <h2 className="mb-10 sm:mb-20 text-[2rem] text-center  dark:text-white text-black">
              立即詢價 專人為您服務
            </h2>
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>

        <div className="right w-full lg:w-[25%]">
          <div className="wrap py-10 px-8 relative top-[50px] lg:sticky">
            <b className="text-[1.1rem] font-bold">建案名稱：一清隱</b>
            <div className="project-info mt-5">
              <div className="flex  items-center">
                <b className="text-[.95rem] font-bold">建坪：</b>
                <p className="text-[.95rem] font-normal">100-130</p>
              </div>
              <div className="flex  items-center">
                <b className="text-[.95rem] font-bold">格局：</b>
                <p className="text-[.95rem] font-normal">1/2/3房</p>
              </div>
              <div className="flex   flex-col items-start">
                <b className="text-[.95rem] font-bold">地點：</b>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3640.2223114352178!2d120.6552684753488!3d24.163934978390408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA5JzUwLjIiTiAxMjDCsDM5JzI4LjIiRQ!5e0!3m2!1szh-TW!2stw!4v1742104432576!5m2!1szh-TW!2stw"
                  className=" border-3 border-gray-200 max-w-[550px] h-[330px]"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-white z-[99999999] py-10 bottom-section flex flex-col justify-center items-center">
        <Marquee>
          <div className="flex flex-row py-10 justify-center items-center">
            <div className="h-[1px] bg-black w-[50vw]"></div>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <p className="text-[3rem] mx-4">NEWS</p>
              <button class="group relative mr-3 inline-flex h-12 w-12 items-center justify-center  rounded-full bg-neutral-950">
                <div class="transition duration-300 group-hover:rotate-[360deg]">
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
          <div className="news-item  group overflow-hidden  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center  rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
          <div className="news-item  group overflow-hidden  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center  rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
          <div className="news-item  group overflow-hidden  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center  rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
          <div className="news-item  group overflow-hidden  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center  rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
          <div className="news-item  group overflow-hidden  m-1 sm:m-2 bg-[url('https://commons-shop.karimoku.com/cdn/shop/files/15411_f.jpg?v=1731306525&width=750')] bg-no-repeat relative bg-cover bg-center w-[170px] sm:w-[230px] lg:w-[270px] h-[230px]  sm:h-[300px] lg:h-[340px]">
            <div className="description absolute w-full bottom-0 h-[0%] opacity-0 group-hover:opacity-100 duration-500 group-hover:h-[40%] flex flex-col bg-white p-3">
              <p className="text-[.8rem] hidden sm:block">
                不簡單的青海路，相遇不平凡的青世代 獻給，鍾情市中心的菁英家庭
                致邀，職住共生的青創企業家
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <b className="text-[.8rem] mr-3 mt-4">
                  {" "}
                  NEWS:神隱青海│2-3房│含精裝修{" "}
                </b>
                <button class="group relative inline-flex h-6 w-6 items-center justify-center  rounded-full bg-neutral-950 font-medium text-neutral-200">
                  <div class="translate-x-0 transition group-hover:translate-x-[300%]">
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
                  <div class="absolute -translate-x-[300%] transition group-hover:translate-x-0 duration-1000">
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
      <div className="content"></div>
    </ReactLenis>
  );
}
