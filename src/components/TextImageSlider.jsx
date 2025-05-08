"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import GsapText from "./RevealText/index";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    src: "https://10per-komatsu.com/wp/wp-content/uploads/2025/03/top06.jpg",
    alt: "日常生活新站點",
    title: "生活新基地",
    text: "在這裡，我們打造全新的生活空間，讓每個人都能自在生活、安心成長。",
  },
  {
    src: "https://10per-komatsu.com/wp/wp-content/uploads/2025/03/top02.jpg",
    alt: "每天散步逛街都是樂趣",
    title: "街角的快樂",
    text: "無論是日常散步，還是放學後的小冒險，這裡都充滿樂趣。",
  },
  {
    src: "https://10per-komatsu.com/wp/wp-content/uploads/2025/03/top07.jpg",
    alt: "共享廣場",
    title: "我們的共享空間",
    text: "我們設計了一個每個人都能參與的公共空間，共享、美好、共融。",
  },
];

export default function SwiperGSAPReveal() {
  const slidesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const animateSlide = (index) => {
    const el = slidesRef.current[index];
    if (!el) return;

    const image = el.querySelector(".image-block");
    gsap.set(image, { height: 0 });
    gsap.to(image, {
      height: "100%",
      duration: 1.2,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    animateSlide(0);
  }, []);

  return (
    <div className="w-full relative bg-white">
      {/* 顯示目前頁數 / 總頁數 */}
      <div className="text-center py-4 text-black text-sm font-medium tracking-widest">
        {activeIndex + 1} / {slides.length}
      </div>

      {/* Swiper 主要內容 */}
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={false}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setActiveIndex(realIndex);
          animateSlide(realIndex);
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col md:flex-row items-center justify-center px-4 py-16 max-w-6xl mx-auto"
              ref={(el) => (slidesRef.current[index] = el)}
            >
              {/* 左側文字區塊 */}
              <div className="md:w-1/2 px-10 text-center md:text-left mb-8 md:mb-0 text-block">
                <GsapText
                  key={activeIndex} // 確保動畫重新觸發
                  text={slide.title}
                  fontSize="5.3vmin"
                  color="#000"
                  className="!text-black"
                  delay={0.3} // ✅ 延遲 0.3 秒動畫
                />
                <p className="text-xs sm:text-base text-gray-700 w-2/3 mx-auto sm:mx-0">
                  {slide.text}
                </p>
              </div>

              {/* 右側圖片區塊 */}
              <div className="md:w-1/2 px-4 overflow-hidden">
                <div
                  className="image-block rounded-lg w-full shadow-lg overflow-hidden"
                  style={{ height: 0 }}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Timebar 動畫效果 CSS */}
    </div>
  );
}
