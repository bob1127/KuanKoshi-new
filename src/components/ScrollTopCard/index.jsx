"use client";

import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div
      ref={container}
      className="flex  items-center justify-center sticky top-0 w-full h-full px-4"
    >
      <motion.div
        style={{ scale, top: 0 }}
        className="relative flex flex-col top-[-25%] w-full max-w-[1000px] min-w-[320px] rounded-[25px] px-0 sm:px-10 py-10 bg-white transform-origin-top"
      >
        <h2 className="text-center text-[28px] font-bold">寬越室內設計</h2>

        <div className="flex flex-col w-full mx-auto md:w-[60%] mt-8 gap-6  md:gap-10">
          <div className="flex-1 leading-[1.8] tracking-[0.09em] text-gray-800  !text-[.8rem]">
            <p>
              寬越室內設計，立足台中，專注於住宅、商空、老屋翻新等空間設計與施工整合。我們相信設計不只是風格堆疊，更是日常生活的延伸與情感的投射。
              從空間的光影比例、材質語彙到動線的敘事鋪陳，寬越擅長將業主的生活樣貌、文化習慣，轉化為獨一無二的空間語言，使家不僅僅是建築，而是一種更貼近人心的存在。
              <br />
              <br />
              在每一次設計提案前，我們花時間聆聽、理解您的需求與偏好，透過多次溝通與空間模擬，為您打造專屬生活提案。從前期丈量、3D
              模型、施工圖繪製，到完工後的細節優化，我們陪您走過每一段空間蛻變的旅程。
            </p>
          </div>

          <div className="flex-1 relative rounded-[25px] overflow-hidden">
            <div className="w-full h-full">
              <Image
                src="/images/hero-img/footer.png"
                alt="company-img"
                width={600}
                height={1000}
                loading="lazy"
                placeholder="empty"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
