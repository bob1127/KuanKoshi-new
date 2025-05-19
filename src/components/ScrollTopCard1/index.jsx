"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // 動畫保持不變
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]); // 你原本應該是這樣的邏輯

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: "#fff", // 或你原本 color 值
          scale,
          top: 0,
        }}
        className={styles.card}
      >
        <div className="title flex items-center justify-center flex-col  w-[90%]  md:w-[60%] mx-auto">
          <p className="text-[.8rem]">About Us</p>
          <p className="text-[1.3rem] tracking-widest  text-left font-bold">
            寬越室內設計-KUANKOSHI DESIGN
          </p>
        </div>
        <div className="text-[.9rem] tracking-widest  w-[90%] md:w-[60%] mx-auto py-6 mt-6 border-gray-800 leading-loose text-gray-800 font-normal">
          <ul>
            <li className=" border-b-[.5px] border-gray-400 py-3">
              <div className="flex justify-between">
                <b className="text-[.85rem] font-mode">業界資歷</b>
                <span className="text-[.8rem]">30年</span>
              </div>
            </li>
            <li className=" border-b-[.5px] border-gray-400 py-3">
              <div className="flex justify-between">
                <b className="text-[.85rem] font-mode">業務範疇 </b>
                <span className="text-[.8rem]">
                  室內設計、空間規劃、老屋翻新、商業空間、<br></br>
                  系統櫃規劃、施工整合、自地自建
                </span>
              </div>
            </li>
            <li className=" border-b-[.5px] border-gray-400 py-3">
              <div className="flex justify-between">
                <b className="text-[.85rem] font-mode">設計理念 </b>
                <span className="text-[.8rem]">
                  人本設計 × 留白美學 × 材質細節 × 機能整合
                </span>
              </div>
            </li>
            <li className=" border-b-[.5px] border-gray-400 py-3">
              <div className="flex justify-between">
                <b className="text-[.85rem] font-mode">公司基地 </b>
                <span className="text-[.8rem]">
                  台中市西屯區市政北二路282號21樓-9
                </span>
              </div>
            </li>

            <li className=" border-b-[.5px] border-gray-400 py-3">
              <div className="flex justify-between">
                <b className="text-[.85rem] font-mode">合作施工夥伴 </b>
                <span className="text-[.8rem]">
                  系統櫃團隊、泥作、水電、油漆、<br></br>
                  木作專業技師團隊
                </span>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
