"use client";
import {
  useScroll,
  useTransform,
  useMotionTemplate,
  motion,
} from "framer-motion";
import { useRef } from "react";

export default function MotionImage({ src, alt, className, width, height }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // 開始到中心的區段觸發動畫
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const blurValue = useTransform(scrollYProgress, [0, 1], [10, 0]);

  // ✅ 這裡正確地把數字變成 CSS 字串
  const blur = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        filter: blur,
      }}
      className={className}
    >
      <img src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
}
