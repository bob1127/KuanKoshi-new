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
      <div
        ref={sliderRef}
        className="relative w-full aspect-[16/9] min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[85vh] overflow-hidden"
      >
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-25"></div>

        <div className="absolute inset-0">
          <video
            src="https://www.clasishome.jp/wp-content/themes/clasishome/assets/movie/front_firstview-movie.mp4?ver2.0"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>

        {/* ✅ 原本的 bottom-info 保留不動 */}
        <div className="bottom-info hidden sm:block absolute w-screen z-50 bottom-8">
          <div className="flex w-full ">
            <div className="w-1/4  flex justify-center items-center">
              <b className="text-white font-bold ">+SHIFT NOGIZAKA</b>
            </div>
            <div className="w-1/4 flex flex-col items-center">
              <span className="text-gray-400 text-[.75rem]">Category</span>
              <span className="text-white mt-2 text-[.75rem]">Category</span>
              <span className="text-white  text-[.75rem]">Category</span>
              <span className="text-white  text-[.75rem]">Category</span>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-center">
              <div className="flex flex-col ">
                <span className="text-gray-300 text-[.75rem]">Location</span>
                <span className="text-white text-[.75rem]">
                  Taiwan,Taichung
                </span>
                <span className="text-white text-[.75rem] ">2025.03.24 </span>
              </div>
            </div>
            <div className="w-1/4 flex justify-center items-center">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden font-medium">
                <div className="inline-flex h-12 translate-y-0 items-center justify-center  px-6 text-neutral-50 transition group-hover:-translate-y-[150%]">
                  Hover me
                </div>
                <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-white px-6 text-black transition duration-300 group-hover:translate-y-0">
                  Hover me
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="slider-counter ">
          <div
            className="counter"
            ref={counterRef}
            style={{ overflow: "hidden", height: "20px" }}
          >
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
          <div>
            <p>&mdash;</p>
          </div>
          <div>
            <p>{slides.length}</p>
          </div>
        </div>

        <div className="slider-indicators" ref={indicatorsRef}>
          <p>+</p>
          <p>+</p>
        </div>
      </div>
    </>
  );
};

export default Photos;
