"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LightBox from "../../components/LightBox/page";
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
        <div className="py-[150px]">
          <LightBox />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
