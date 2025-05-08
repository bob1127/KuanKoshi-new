"use client";
import { useRef } from "react";
import "./page.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

// ✅ 自定義輪播內容
const slides = [
  {
    type: "video",
    src: "/videos/hero.mp4",
  },
  {
    type: "image",
    src: "/images/hero02.jpg",
  },
  {
    type: "image",
    src: "/images/hero01.jpg",
  },
  {
    type: "image",
    src: "/images/hero03.jpg",
  },
];

const Photos = () => {
  const sliderImagesRef = useRef(null);
  const counterRef = useRef(null);
  const titlesRef = useRef(null);
  const indicatorsRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(
    () => {
      CustomEase.create(
        "hop2",
        "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
      );

      let currentImg = 1;
      const totalSlides = slides.length;
      let indicatorRotation = 0;

      function updateCounterAndTitlePosition() {
        const counterY =
          -(counterRef.current.clientHeight / totalSlides) * (currentImg - 1);
        const titleY =
          -(titlesRef.current.clientHeight / totalSlides) * (currentImg - 1);

        gsap.to(counterRef.current, {
          y: counterY,
          duration: 1,
          ease: "hop2",
        });

        gsap.to(titlesRef.current, {
          y: titleY,
          duration: 1,
          ease: "hop2",
        });
      }

      function animateSlide(direction) {
        const currentSlide = sliderImagesRef.current.lastElementChild;
        const slideImg = document.createElement("div");
        slideImg.classList.add("img");

        const currentSlideData = slides[currentImg - 1];
        let slideMedia;

        if (currentSlideData.type === "video") {
          slideMedia = document.createElement("video");
          slideMedia.src = currentSlideData.src;
          slideMedia.autoplay = true;
          slideMedia.loop = true;
          slideMedia.muted = true;
          slideMedia.playsInline = true;
          slideMedia.className = "w-[100vw] h-screen object-cover";
        } else {
          slideMedia = document.createElement("img");
          slideMedia.src = currentSlideData.src;
          slideMedia.className = "w-[100vw] h-screen object-cover";
        }

        gsap.set(slideMedia, {
          x: direction === "left" ? -500 : 500,
          scale: 1,
          opacity: 0.5,
          transformOrigin: "center center",
        });

        slideImg.appendChild(slideMedia);
        sliderImagesRef.current.appendChild(slideImg);

        const tl = gsap.timeline();

        tl.to(currentSlide.querySelector("img, video"), {
          x: direction === "left" ? 500 : -500,
          duration: 1.5,
          ease: "hop2",
        })
          .fromTo(
            slideImg,
            {
              clipPath:
                direction === "left"
                  ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                  : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.5,
              ease: "hop2",
            },
            0
          )
          .to(
            slideMedia,
            {
              x: 0,
              scale: 1.2,
              opacity: 1,
              duration: 1.5,
              ease: "hop2",
            },
            0
          )
          .call(() => cleanupSlides(), null, 1.5);

        indicatorRotation += direction === "left" ? -90 : 90;
        gsap.to(indicatorsRef.current.children, {
          rotate: indicatorRotation,
          duration: 1,
          ease: "hop2",
        });
      }

      function cleanupSlides() {
        const imgElements = sliderImagesRef.current.querySelectorAll(".img");
        if (imgElements.length > totalSlides) {
          gsap.to(imgElements[0], {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              imgElements[0].remove();
            },
          });
        }
      }

      function nextSlide() {
        currentImg = currentImg < totalSlides ? currentImg + 1 : 1;
        animateSlide("right");
        updateCounterAndTitlePosition();
      }

      const autoSlideInterval = setInterval(nextSlide, 6000); // 每6秒

      function handleClick(event) {
        const sliderWidth = sliderRef.current.clientWidth;
        const clickPosition = event.clientX;

        if (clickPosition < sliderWidth / 2 && currentImg !== 1) {
          currentImg--;
          animateSlide("left");
        } else if (
          clickPosition > sliderWidth / 2 &&
          currentImg !== totalSlides
        ) {
          currentImg++;
          animateSlide("right");
        }

        updateCounterAndTitlePosition();
      }

      sliderRef.current.addEventListener("click", handleClick);

      return () => {
        sliderRef.current?.removeEventListener("click", handleClick);
        clearInterval(autoSlideInterval);
      };
    },
    { scope: sliderRef }
  );

  return (
    <>
      <div className="slider  " ref={sliderRef}>
        <div className="absolute z-10 top-0  left-0 w-full h-full bg-[#000] opacity-25"></div>

        <div>
          <div>
            <video
              src="https://www.clasishome.jp/wp-content/themes/clasishome/assets/movie/front_firstview-movie.mp4?ver2.0"
              autoPlay
              loop
              muted
              playsInline
              className="w-[100vw] h-screen object-cover"
            ></video>
          </div>
        </div>

        <div className="slider-title">
          {/* <div className="slider-title-wrapper" ref={titlesRef}>
            <p>寬越室內設計</p>
            <p>Above The Canvas</p>
            <p>Harmony in Every Note</p>
            <p>Redefining Imagination</p>
          </div> */}
        </div>

        {/* ✅ 原本的 bottom-info 保留不動 */}
        <div className="msak left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute bg-black opacity-40 z-10  w-full h-full"></div>
        <div className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-screen z-20 ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-[5.5vmin] font-extrabold">
              關於設計的大小事
            </h1>
            <p className="text-white text-xs  text-center text-[1.2rem] w-[80%] mx-auto max-w-[1000px]">
              無論是裝修預算、設計流程、施工工期或售後服務，<br></br>
              這裡彙整了最常見的客戶疑問，幫助你更安心踏出第一步。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
