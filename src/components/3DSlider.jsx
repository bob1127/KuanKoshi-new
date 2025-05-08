"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    src: "/images/小資專案/469076948_122223966266031935_4434481575489001954_n.jpg",
    alt: "日常生活新站點",
  },
  {
    src: "/images/小資專案/407454_0.jpg",
    alt: "每天散步逛街都是樂趣",
  },
  {
    src: "/images/小資專案/469720578_122225453222031935_8767653310245579018_n.jpg",
    alt: "我們將創建一個城鎮中的每個人都能享受的廣場。",
  },
  {
    src: "/images/小資專案/469120903_122223965966031935_3027154932930762522_n.jpg",
    alt: "日常生活新站點",
  },
  {
    src: "/images/小資專案/006-20250224-109.jpg",
    alt: "每天散步逛街都是樂趣",
  },
  {
    src: "/images/小資專案/006-20250317寬越設計-12.jpg",
    alt: "我們將創建一個城鎮中的每個人都能享受的廣場。",
  },
];

export default function Swiper3DComponent() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full relative py-10">
      {/* Navigation buttons */}
      {/* <div
        ref={prevRef}
        className="swiper-button-prev !text-black !left-2 md:!left-8 z-10"
      ></div>
      <div
        ref={nextRef}
        className="swiper-button-next !text-black !right-2 md:!right-8 z-10"
      ></div> */}

      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={{ clickable: true }}
        // navigation={{
        //   prevEl: prevRef.current,
        //   nextEl: nextRef.current,
        // }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-[50vh] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
