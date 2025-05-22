"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import { motion } from "framer-motion";
import GsapText from "../RevealText/index";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundImages = [
    "/images/hero-img/首頁01.jpg",
    "/images/hero-img/首頁02.jpg",
    "/images/hero-img/首頁03.jpg",
    "/images/hero-img/首頁04.jpg",
    "/images/hero-img/首頁05.jpg",
  ];

  // 第一次進入網站時才顯示 loader 動畫
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowLoader(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      setShowHero(true); // 直接跳過 loader
    }
  }, []);

  // useEffect(() => {
  //   if (!showLoader) return;

  //   gsap.registerPlugin(CustomEase);
  //   CustomEase.create("hop", "0.9, 0, 0.1, 1");

  //   const tl = gsap.timeline({
  //     delay: 0.3,
  //     defaults: { ease: "hop" },
  //     onComplete: () => {
  //       setShowHero(true);
  //       setShowLoader(false);
  //     },
  //   });

  //   const counts = document.querySelectorAll(".count");
  //   counts.forEach((count, index) => {
  //     const digits = count.querySelectorAll(".digit h1");
  //     tl.to(digits, { y: "0%", duration: 1, stagger: 0.075 }, index * 1);
  //     if (index < counts.length) {
  //       tl.to(
  //         digits,
  //         { y: "-100%", duration: 1, stagger: 0.075 },
  //         index * 1 + 1
  //       );
  //     }
  //   });

  //   tl.to(".spinner", { opacity: 0, duration: 0.3 });
  //   tl.to(".word h1", { y: "0%", duration: 1 }, "<");
  //   tl.to(".divider", {
  //     scaleY: "100%",
  //     duration: 1,
  //     onComplete: () =>
  //       gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 }),
  //   });
  //   tl.to("#word-1 h1", { y: "100%", duration: 1, delay: 0.3 });
  //   tl.to("#word-2 h1", { y: "-100%", duration: 1 }, "<");
  //   tl.to(
  //     ".-div",
  //     {
  //       clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  //       duration: 1,
  //       stagger: 0.1,
  //     },
  //     "<"
  //   );
  // }, [showLoader]);

  // useEffect(() => {
  //   if (!showHero) return;
  //   const timer = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [showHero]);

  return (
    <>
      {/* {showLoader && (
        <div className="loader z-[9999999999] static">
          <div className="overlay">
            <div className="block-div"></div>
            <div className="block-div"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1 className="text-white">
                <span>寬越</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1 className="text-white">設計</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          <div className="counter">
            {["00", "27", "65", "98", "99"].map((pair, i) => (
              <div className="count" key={i}>
                {[...pair].map((num, j) => (
                  <div className="digit" key={j}>
                    <h1>{num}</h1>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )} */}

      {showHero && (
        <section className="section-hero w-full aspect-[500/500] sm:aspect-[500/400]  md:aspect-[1024/768] xl:aspect-[1920/1080] 2xl:aspect-[1920/1080]  overflow-hidden relative">
          {backgroundImages.map((bg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: i === currentIndex ? 1 : 0,
                scale: i === currentIndex ? 1.15 : 1,
              }}
              transition={{
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 20, ease: "linear" },
              }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url(${bg})` }}
            />
          ))}

          <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0 z-10" />

          <div className="hero-title w-1/2 absolute left-[4%] top-[90%] z-[10]">
            <div className="text-center px-4">
              <GsapText
                text="KuanKoshi"
                id="gsap-intro"
                fontSize="2.2rem"
                fontWeight="200"
                color="#fff"
                className="text-center !text-[2.2rem] 2xl:!text-[3rem] tracking-widest !text-gray-50 inline-block mb-0 h-auto"
              />
            </div>
            <div className="text-center px-4">
              <GsapText
                text="Interior Design,"
                id="gsap-intro"
                fontSize="1rem"
                fontWeight="200"
                color="#fff"
                lineHeight="30px"
                className="text-center !text-[1rem]  !2xl:text-[1.5rem] !text-gray-50 tracking-widest inline-block mb-0 h-auto"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
