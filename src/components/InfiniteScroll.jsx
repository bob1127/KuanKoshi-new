// components/InfiniteCarousel.jsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

const slideTitles = [
  "Field Unit",
  "Astral Convergence",
  "Eclipse Core",
  "Luminous",
  "Serenity",
  "Nebula Point",
  "Horizon",
];

const slideDescriptions = [
  "Concept Art",
  "Soundscape",
  "Experimental Film",
  "Editorial",
  "Music Video",
  "VFX",
  "Set Design",
];

const totalSlides = 7;

const InfiniteCarousel = () => {
  const sliderRef = useRef(null);
  const mainImageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    CustomEase.create("custom", ".87,0,.13,1");

    let currentSlide = 1;
    let isAnimating = false;

    const animateSlide = () => {
      if (isAnimating) return;
      isAnimating = true;

      const slider = sliderRef.current;
      const mainImageContainer = mainImageRef.current;
      const titleContainer = titleRef.current;
      const descContainer = descRef.current;
      const counterContainer = counterRef.current;

      const currentSlideElement = slider.querySelector(".slide");
      const currentMain = mainImageContainer.querySelector(
        ".slide-main-img-wrapper"
      );
      const currentTitle = titleContainer.querySelector("h1");
      const currentDesc = descContainer.querySelector("p");
      const currentCounter = counterContainer.querySelector("p");

      currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;

      const imgSrc = `/assets/img${currentSlide}.jpeg`;

      const newSlide = document.createElement("div");
      newSlide.className = "slide absolute w-full h-full top-0 left-0";
      newSlide.innerHTML = `
        <div class='slide-bg-img w-full h-full absolute top-0 left-0'>
          <img src='${imgSrc}' alt='' class='w-full h-full object-cover'/>
        </div>
      `;
      slider.appendChild(newSlide);

      const newMain = document.createElement("div");
      newMain.className = "slide-main-img-wrapper absolute w-full h-full";
      newMain.innerHTML = `<img src='${imgSrc}' alt='' class='w-full h-full object-cover' />`;
      mainImageContainer.appendChild(newMain);

      const newTitle = document.createElement("h1");
      newTitle.textContent = slideTitles[currentSlide - 1];
      newTitle.className = "absolute text-white text-4xl font-light";
      gsap.set(newTitle, { y: -50 });
      titleContainer.appendChild(newTitle);

      const newDesc = document.createElement("p");
      newDesc.textContent = slideDescriptions[currentSlide - 1];
      newDesc.className = "absolute text-white text-lg font-light";
      gsap.set(newDesc, { y: -20 });
      descContainer.appendChild(newDesc);

      const newCounter = document.createElement("p");
      newCounter.textContent = currentSlide;
      newCounter.className = "absolute text-white text-base";
      gsap.set(newCounter, { y: -18 });
      counterContainer.appendChild(newCounter);

      const tl = gsap.timeline({
        onComplete: () => {
          currentSlideElement.remove();
          currentMain.remove();
          currentTitle.remove();
          currentDesc.remove();
          currentCounter.remove();
          isAnimating = false;
        },
      });

      tl.to(
        newSlide.querySelector(".slide-bg-img"),
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.25,
          ease: "custom",
        },
        0
      )
        .to(
          currentSlideElement.querySelector("img"),
          {
            scale: 1.5,
            y: "-100%",
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .fromTo(
          newMain,
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .fromTo(
          newMain.querySelector("img"),
          { y: "100%" },
          { y: "0%", duration: 1.25, ease: "custom" },
          0
        )
        .to(
          currentTitle,
          {
            y: 50,
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(newTitle, { y: 0, duration: 1.25, ease: "custom" }, 0)
        .to(
          currentDesc,
          {
            y: 20,
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(newDesc, { y: 0, duration: 1.25, ease: "custom" }, 0)
        .to(
          currentCounter,
          {
            y: 18,
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(newCounter, { y: 0, duration: 1.25, ease: "custom" }, 0);
    };

    const interval = setInterval(() => animateSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <nav className="fixed top-0 left-0 w-full p-12 flex justify-between items-center z-50">
        <p className="text-white">Codegrid</p>
        <div className="flex gap-8">
          <p>Work</p>
          <p>Studio</p>
          <p>News</p>
          <p>Contact</p>
        </div>
      </nav>

      <footer className="fixed bottom-0 left-0 w-full p-12 flex justify-between items-center z-50">
        <p>All Projects</p>
        <div className="flex items-center">
          <div className="count relative h-5 overflow-hidden" ref={counterRef}>
            <p className="absolute">1</p>
          </div>
          <p className="mx-1">/</p>
          <p>{totalSlides}</p>
        </div>
      </footer>

      <div ref={sliderRef} className="slider relative w-full h-full">
        <div className="slide absolute w-full h-full top-0 left-0">
          <div className="slide-bg-img w-full h-full absolute top-0 left-0">
            <img
              src="/assets/img1.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          ref={mainImageRef}
          className="slide-main-img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/2 z-20"
        >
          <div className="slide-main-img-wrapper absolute w-full h-full">
            <img
              src="/assets/img1.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="slide-copy absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 z-30">
          <div
            ref={titleRef}
            className="slide-title relative w-[500px] h-[50px] mb-3"
          >
            <h1 className="absolute text-white text-4xl font-light">
              Field Unit
            </h1>
          </div>
          <div
            ref={descRef}
            className="slide-description relative w-[500px] h-[20px]"
          >
            <p className="absolute text-white text-lg font-light">
              Concept Art
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
