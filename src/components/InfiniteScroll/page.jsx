// components/InfiniteCarousel.jsx
"use client";

import { useEffect } from "react";
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

const InfiniteCarousel = () => {
  useEffect(() => {
    CustomEase.create("custom", "M0.8,0 C0.9,0.05 0.98,0.3 1,1");

    const totalSlides = 7;
    let currentSlide = 1;
    let isAnimating = false;
    let scrollAllowed = true;
    let lastScrollTime = 0;

    function createSlide(slideNumber, direction) {
      const slide = document.createElement("div");
      slide.className = "slide absolute top-0 left-0 w-full h-full";

      const slideBgImg = document.createElement("div");
      slideBgImg.className =
        "slide-bg-img absolute top-0 left-0 w-full h-full will-change-transform";
      slideBgImg.style.clipPath =
        direction === "down"
          ? "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

      const img = document.createElement("img");
      img.src = `/assets/img${slideNumber}.jpeg`;
      img.alt = "";
      img.className = "w-full h-full object-cover will-change-transform";

      slideBgImg.appendChild(img);
      slide.appendChild(slideBgImg);

      return slide;
    }

    function createMainImageWrapper(slideNumber, direction) {
      const wrapper = document.createElement("div");
      wrapper.className =
        "slide-main-img-wrapper absolute top-0 left-0 w-full h-full will-change-transform";
      wrapper.style.clipPath =
        direction === "down"
          ? "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
          : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

      const img = document.createElement("img");
      img.src = `/assets/img${slideNumber}.jpeg`;
      img.alt = "";
      img.className = "w-full h-full object-cover will-change-transform";

      wrapper.appendChild(img);

      return wrapper;
    }

    function createTextElements(slideNumber, direction) {
      const newTitle = document.createElement("h1");
      newTitle.textContent = slideTitles[slideNumber - 1];
      newTitle.className =
        "absolute text-white text-4xl font-light will-change-transform";
      gsap.set(newTitle, { y: direction === "down" ? 50 : -50 });

      const newDescription = document.createElement("p");
      newDescription.textContent = slideDescriptions[slideNumber - 1];
      newDescription.className =
        "absolute text-white text-lg font-light will-change-transform";
      gsap.set(newDescription, { y: direction === "down" ? 20 : -20 });

      const newCounter = document.createElement("p");
      newCounter.textContent = slideNumber;
      newCounter.className =
        "absolute text-white text-base will-change-transform";
      gsap.set(newCounter, { y: direction === "down" ? 18 : -18 });

      return { newTitle, newDescription, newCounter };
    }

    function animateSlide(direction) {
      if (isAnimating || !scrollAllowed) return;
      isAnimating = true;
      scrollAllowed = false;

      const slider = document.querySelector(".slider");
      const currentSlideElement = slider.querySelector(".slide");
      const mainImageContainer = document.querySelector(".slide-main-img");
      const currentMainWrapper = mainImageContainer.querySelector(
        ".slide-main-img-wrapper"
      );

      const titleContainer = document.querySelector(".slide-title");
      const descriptionContainer = document.querySelector(".slide-description");
      const counterContainer = document.querySelector(".count");

      const currentTitle = titleContainer.querySelector("h1");
      const currentDescription = descriptionContainer.querySelector("p");
      const currentCounter = counterContainer.querySelector("p");

      currentSlide =
        direction === "down"
          ? currentSlide === totalSlides
            ? 1
            : currentSlide + 1
          : currentSlide === 1
          ? totalSlides
          : currentSlide - 1;

      const newSlide = createSlide(currentSlide, direction);
      const newMainWrapper = createMainImageWrapper(currentSlide, direction);
      const { newTitle, newDescription, newCounter } = createTextElements(
        currentSlide,
        direction
      );

      slider.appendChild(newSlide);
      mainImageContainer.appendChild(newMainWrapper);
      titleContainer.appendChild(newTitle);
      descriptionContainer.appendChild(newDescription);
      counterContainer.appendChild(newCounter);

      gsap.set(newMainWrapper.querySelector("img"), {
        y: direction === "down" ? "-50%" : "50%",
      });

      const tl = gsap.timeline({
        onComplete: () => {
          [
            currentSlideElement,
            currentMainWrapper,
            currentTitle,
            currentDescription,
            currentCounter,
          ].forEach((el) => el?.remove());

          isAnimating = false;
          setTimeout(() => {
            scrollAllowed = true;
            lastScrollTime = Date.now();
          }, 100);
        },
      });

      tl.to(
        newSlide.querySelector(".slide-bg-img"),
        {
          clipPath:
            direction === "down"
              ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
              : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.25,
          ease: "custom",
        },
        0
      )
        .to(
          currentSlideElement.querySelector("img"),
          {
            scale: 1.5,
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(
          newMainWrapper,
          {
            clipPath:
              direction === "down"
                ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                : "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(
          currentMainWrapper.querySelector("img"),
          {
            y: direction === "down" ? "50%" : "-50%",
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(
          newMainWrapper.querySelector("img"),
          {
            y: "0%",
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(
          currentTitle,
          {
            y: direction === "down" ? -50 : 50,
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(
          newTitle,
          {
            y: 0,
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(
          currentDescription,
          {
            y: direction === "down" ? -20 : 20,
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(
          newDescription,
          {
            y: 0,
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(
          currentCounter,
          {
            y: direction === "down" ? -18 : 18,
            duration: 1.25,
            ease: "custom",
          },
          0
        )
        .to(
          newCounter,
          {
            y: 0,
            duration: 1.25,
            ease: "custom",
          },
          0
        );
    }

    const interval = setInterval(() => animateSlide("down"), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider relative w-screen h-screen overflow-hidden">
      <nav className="fixed top-0 left-0 w-screen p-12 flex justify-between items-center z-20">
        <p className="text-white text-sm font-light">Codegrid</p>
        <div className="flex gap-8 text-white text-sm font-light">
          <p>Work</p>
          <p>Studio</p>
          <p>News</p>
          <p>Contact</p>
        </div>
      </nav>

      <footer className="fixed bottom-0 left-0 w-screen p-12 flex justify-between items-center z-20">
        <p className="text-white text-sm font-light">All Projects</p>
        <div className="slider-counter flex text-white text-sm font-light opacity-35">
          <div className="count relative h-[18px] w-6 overflow-hidden">
            <p className="absolute transform translate-y-0 text-base leading-none">
              1
            </p>
          </div>
          <p>/</p>
          <p>7</p>
        </div>
      </footer>

      <div className="slide absolute top-0 left-0 w-full h-full">
        <div className="slide-bg-img absolute top-0 left-0 w-full h-full">
          <img
            src="/assets/img1.jpeg"
            alt=""
            className="w-full h-full object-cover will-change-transform"
          />
        </div>
      </div>

      <div className="slide-main-img absolute top-1/2 left-1/2 w-1/4 h-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
        <div className="slide-main-img-wrapper absolute w-full h-full">
          <img
            src="/assets/img1.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="slide-copy absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        <div className="slide-title relative w-[500px] h-[50px] mb-3">
          <h1 className="absolute text-4xl font-light leading-none">
            Field Unit
          </h1>
        </div>
        <div className="slide-description relative w-[500px] h-[20px]">
          <p className="absolute text-lg font-light leading-none">
            Concept Art
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
