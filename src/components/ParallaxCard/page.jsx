"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedLink from "../../components/AnimatedLink";

const Card = ({
  i,
  title,
  description,
  src,
  url,
  backgroundImage,
  progress,
  range,
  targetScale,
  total, // 新增 total prop
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
    smooth: 0.5,
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 3], {
    transition: { duration: 3, ease: "easeInOut" },
  });

  const isLast = i === total - 1;

  // 永遠執行 Hook（符合規則）
  const scaleMotion = useTransform(progress, range, [1, targetScale], {
    transition: { duration: 3, ease: "easeInOut" },
  });

  // 最後才決定是否要用固定值
  const scale = isLast ? 1 : scaleMotion;

  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.7], {
    transition: { duration: 3, ease: "easeInOut" },
  });

  return (
    <div ref={container} className={styles.cardContainer}>
      <AnimatedLink className="!w-[100vw]" href="/ServiceProcess">
        <motion.div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className={styles.card}
        >
          <motion.div
            className={styles.overlay}
            style={{
              opacity: overlayOpacity,
            }}
          />
          <div className={`${styles.body} group`}>
            <div className={styles.description}>
              <div className="absolute hover:opacity-85 duration-500 hover:scale-95 hover:shadow-xl shadow-white w-[110px] sm:w-[170px] sm:h-[170px] h-[110px] lg:w-[200px] lg:h-[200px] left-[10%] xl:left-[20%] top-[30%] sm:top-[40%] xl:top-10  z-50 bg-black opacity-45 border rounded-full ">
                <div className="flex justify-center items-center h-full w-full">
                  <button className=" relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full font-medium text-neutral-200">
                    <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <button className="group relative h-8 bg-transparent px-4 text-neutral-950">
                <span className="relative inline-flex overflow-hidden">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                    <h2>{title}</h2>
                  </div>
                  <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    <h2>{title}</h2>
                  </div>
                </span>
              </button>
              <p>{description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatedLink>
    </div>
  );
};

export default Card;
