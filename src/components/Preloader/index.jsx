"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Image from "next/image";
import GsapText from "../../components/RevealText/index";
import { motion, AnimatePresence } from "framer-motion";

import { BsCart, BsArrowRight } from "react-icons/bs";
import HeroSlider from "../HeroSlider/page";
export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  // 判斷是否第一次載入網站
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowLoader(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      setShowLoader(false);
    }
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const backgroundImages = [
    "/images/hero-img/006-八展首富_231221_8_0.jpg",
    "/images/hero-img/007-八展首富_231221_2_0.jpg",
    "/images/hero-img/002八展首富_231221_3_0.jpg",
    "/images/hero-img/LINE_ALBUM_八展首富_231221_7_0.jpg",
    "/images/hero-img/468947784_122223976550031935_8836870033944229922_n_0.jpg",
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex); // 保留上一張索引
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "業務人員",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image: "/images/hero-img/img01.png",
    },
    {
      id: 2,
      name: "John Doe",
      designation: "買屋看房",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image: "/images/hero-img/img05.png",
    },
    {
      id: 3,
      name: "John Doe",
      designation: "詢問價格",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image: "/images/hero-img/img06.png",
    },
    {
      id: 4,
      name: "John Doe",
      designation: "詢問價格",
      qrCodeImage:
        "https://thumb.ac-illust.com/bd/bd2c033b5a0f028d5d0a5f63223c0781_t.jpeg",
      image: "/images/hero-img/img07.png",
    },
  ];
  const initGSAPAnimations = () => {
    const ctx = gsap.context(() => {
      const images = document.querySelectorAll(".animate-image-wrapper");

      images.forEach((image, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none none",
            id: "imageReveal-" + i,
          },
        });

        tl.fromTo(
          image.querySelector(".overlay"),
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.7,
            ease: "power2.inOut",
          }
        )
          .to(image.querySelector(".overlay"), {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: 0.7,
            ease: "power2.inOut",
          })
          .fromTo(
            image.querySelector(".image-container"),
            {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.5,
              ease: "power3.inOut",
            },
            "-=0.5"
          );
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return ctx; // return so we can revert later
  };

  const OPTIONS = {};

  // 這裡定義你的背景圖片
  const SLIDES = [
    "/images/hero-img/img05.png",
    "/images/ph_takahiradai-no-ie.jpg",
    "/images/ph_esperanza.jpg",
    "/images/ph_minna-no-ie.jpg",
    "/images/ph_kumamoto-tasaki-clinic.jpg",
    "/images/hadashinoie016-2048x1365.jpg.webp",
  ];
  const THUMBNAILS = [
    "/images/hero-img/img05.png",
    "/images/ph_takahiradai-no-ie.jpg",
    "/images/ph_esperanza.jpg",
    "/images/ph_minna-no-ie.jpg",
    "/images/ph_kumamoto-tasaki-clinic.jpg",
    "/images/hadashinoie016-2048x1365.jpg.webp",
  ];
  const [showNav, setShowNav] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          setShowNav(false); // 向下滾 → 隱藏
        } else {
          setShowNav(true); // 向上滾 → 顯示
        }

        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    const counts = document.querySelectorAll(".count");

    counts.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");

      tl.to(
        digits,
        {
          y: "0%",
          duration: 1,
          stagger: 0.075,
        },
        index * 1
      );

      if (index < counts.length) {
        tl.to(
          digits,
          {
            y: "-100%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1 + 1
        );
      }
    });

    tl.to(".spinner", {
      opacity: 0,
      duration: 0.3,
    });

    tl.to(
      ".word h1",
      {
        y: "0%",
        duration: 1,
      },
      "<"
    );

    tl.to(".divider", {
      scaleY: "100%",
      duration: 1,
      onComplete: () =>
        gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 }),
    });

    tl.to("#word-1 h1", {
      y: "100%",
      duration: 1,
      delay: 0.3,
    });

    tl.to(
      "#word-2 h1",
      {
        y: "-100%",
        duration: 1,
      },
      "<"
    );

    tl.to(
      ".preloader-block",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        delay: 0.75,
        onStart: () =>
          gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" }),
      },
      "<"
    );

    tl.to(
      [".nav", ".line h1", ".line p"],
      {
        y: "0%",
        duration: 1.5,
        stagger: 0.2,
      },
      "<"
    );

    tl.to(
      [".cta", ".cta-icon"],
      {
        scale: 1,
        duration: 1.5,
        stagger: 0.75,
        delay: 0.75,
      },
      "<"
    );

    tl.to(
      ".cta-label p",
      {
        y: "0%",
        duration: 1.5,
        delay: 0.5,
      },
      "<"
    );
    tl.to(".loader", {
      opacity: 0,
      duration: 0.1,
      pointerEvents: "none",
      onComplete: () => {
        const loader = document.querySelector(".loader");
        if (loader) loader.style.display = "none";
      },
    });
  });

  return (
    <>
      {showLoader && (
        <div className="loader ">
          <div className="overlay">
            <div className="preloader-block "></div>
            <div className="preloader-block "></div>
          </div>

          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span className="text-gray-700">寬越</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1 className="text-gray-700">設計</h1>
            </div>
          </div>

          <div className="divider"></div>

          <div className="spinner-container">
            <div className="spinner"></div>
          </div>

          <div className="counter">
            <div className="count">
              <div className="digit">
                <h1 className="text-gray-900">0</h1>
              </div>
              <div className="digit">
                <h1 className="text-gray-900">0</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1 className="text-gray-900">2</h1>
              </div>
              <div className="digit">
                <h1 className="text-gray-900">7</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1 className="text-gray-900">6</h1>
              </div>
              <div className="digit">
                <h1 className="text-gray-900">5</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1 className="text-gray-900">9</h1>
              </div>
              <div className="digit">
                <h1 className="text-gray-900">8</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1 className="text-gray-900">9</h1>
              </div>
              <div className="digit">
                <h1 className="text-gray-900">9</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="hero-img">
          <Image src="/hero-img.jpg" alt="KindRoot Hero Image" fill priority />
        </div>

        <div className="nav">
          {/* <div className="logo">
            <a href="#">KindRoot</a>
          </div>
          <div className="nav-links">
            <a href="#">Rituals</a>
            <a href="#">Our Roots</a>
            <a href="#">Lookbook</a>
            <a href="#">Stories</a>
          </div>
          <div className="btn">
            <a href="#">
              <BsCart size={20} />
            </a>
          </div> */}
        </div>

        <div className="header">
          <div className="hero-copy">
            <div
              id="dark-section"
              className="
    absolute w-full 
    h-[65vh] 
    sm:h-auto sm:aspect-[4/3] sm:min-h-[75vh]
    md:aspect-[16/9] md:min-h-[80vh] 
    lg:aspect-[2/1] lg:min-h-[85vh] 
    overflow-hidden 
    top-0 left-0 z-[1]"
            >
              <section className="section-hero w-full aspect-[500/700] sm:aspect-[500/700]  md:aspect-[1024/920] xl:aspect-[1920/1400] 2xl:aspect-[1920/1080]  overflow-hidden relative">
                {/* 背景圖片群組 */}
                {backgroundImages.map((bg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: i === currentIndex ? 1 : 0,
                      scale: i === currentIndex ? 1.15 : 1, // 放大範圍加大
                    }}
                    transition={{
                      opacity: { duration: 1.5, ease: "easeInOut" }, // 切換用淡入淡出
                      scale: { duration: 20, ease: "linear" }, // 放大效果持續 20 秒
                    }}
                    className="absolute inset-0 bg-cover  bg-center bg-no-repeat z-0"
                    style={{
                      backgroundImage: `url(${bg})`,
                    }}
                  />
                ))}

                {/* 黑色遮罩 */}
                <div className="bg-black opacity-40 w-full h-full absolute top-0 left-0 z-10" />

                {/* 文字區塊 */}
                {/* <div className="hero-title  w-1/2 absolute left-[4%] top-[90%] z-20">
                  <div className="text-center px-4">
                    <GsapText
                      text="寬越設計."
                      id="gsap-intro"
                      fontSize="2.8rem"
                      fontWeight="200"
                      color="#fff"
                      className="text-center tracking-widest !text-gray-900  inline-block mb-0 h-auto"
                    />
                  </div>
                  <div className="text-center px-4">
                    <GsapText
                      text="KuanKshi"
                      id="gsap-intro"
                      fontSize="1.2rem"
                      fontWeight="200"
                      color="#fff"
                      lineHeight="30px"
                      className="text-center !text-gray-900 tracking-widest inline-block mb-0 h-auto"
                    />
                  </div>
                </div> */}
              </section>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full px-4">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <GsapText
                    text="kuankoshi"
                    id="hero-title-1"
                    className="block !text-white !text-[clamp(1.8rem,5vw,3rem)] font-medium leading-tight"
                  />
                  <GsapText
                    text="Interior Design,"
                    id="hero-title-2"
                    className="block !text-white !text-[clamp(.9rem,2vw,1.2rem)] font-light leading-tight"
                  />
                </div>

                {/* 可選第二行文字 */}
                {/* <h2 className="text-white text-[clamp(1rem,2.5vw,1.5rem)] font-light leading-snug">
      帶著愉悅的心 <span>圓滿您的居家生活</span>
    </h2> */}
              </div>
            </div>
          </div>
          {/* <div className="line">
            <p>Skincare that stays true to nature and to you</p>
          </div> */}
        </div>
        {/* 
        <div className="cta">
          <div className="cta-label">
            <p>View all products</p>
          </div>
          <div className="cta-icon">
            <BsArrowRight size={20} />
          </div>
        </div> */}
      </div>
    </>
  );
}
