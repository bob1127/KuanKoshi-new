"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // 支援中文字與英文
  let wordsArray = /[\u4e00-\u9fa5]/.test(words)
    ? words.split("")
    : words.split(" ");

  useEffect(() => {
    if (inView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(0.1), // 增加速度，中文字比較短小
        }
      );
    }
  }, [inView]);

  const renderWords = () => {
    return (
      <motion.div
        ref={scope}
        className="w-full flex flex-wrap sm:justify-start justify-center"
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
              display: "inline-block", // 確保中文字換行時不會壓縮
              marginRight: word === " " ? "0" : "5px", // 避免中文字太擠
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} ref={ref}>
      <div className="mt-4">
        <div className="text-[1.5rem] lg:text-[2rem] 2xl:text-[2.5rem] inline-block sm:2/3 w-[90%] lg:w-2/3 !text-[#46342a]">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
