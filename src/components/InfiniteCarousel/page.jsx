"use client";
import "./page.css";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const slideData = [
  { title: "Field Unit", description: "Concept Art", img: "/assets/img1.jpeg" },
  {
    title: "Astral Convergence",
    description: "Soundscape",
    img: "/assets/img2.jpeg",
  },
  {
    title: "Eclipse Core",
    description: "Experimental Film",
    img: "/assets/img3.jpeg",
  },
  { title: "Luminous", description: "Editorial", img: "/assets/img4.jpeg" },
  { title: "Serenity", description: "Music Video", img: "/assets/img5.jpeg" },
  { title: "Nebula Point", description: "VFX", img: "/assets/img6.jpeg" },
  { title: "Horizon", description: "Set Design", img: "/assets/img7.jpeg" },
];

export default function InfiniteCarousel() {
  const totalSlides = slideData.length;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const mainImageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const counterRef = useRef(null);
  let lastScrollTime = 0;

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      if (isAnimating) return;

      const now = Date.now();
      if (now - lastScrollTime < 1000) return;
      lastScrollTime = now;

      const direction = e.deltaY > 0 ? "down" : "up";
      animateSlide(direction);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSlide, isAnimating]);

  const animateSlide = (direction) => {
    setIsAnimating(true);

    let nextSlide =
      direction === "down"
        ? (currentSlide % totalSlides) + 1
        : ((currentSlide - 2 + totalSlides) % totalSlides) + 1;

    const newTitle = slideData[nextSlide - 1].title;
    const newDesc = slideData[nextSlide - 1].description;
    const newImg = slideData[nextSlide - 1].img;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(nextSlide);
        setIsAnimating(false);
      },
    });

    tl.to(mainImageRef.current, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        mainImageRef.current.src = newImg;
      },
    })
      .to(mainImageRef.current, { opacity: 1, duration: 0.6 }, "+=0.1")
      .to(
        titleRef.current,
        { y: direction === "down" ? -50 : 50, opacity: 0, duration: 0.6 },
        0
      )
      .to(
        descRef.current,
        { y: direction === "down" ? -20 : 20, opacity: 0, duration: 0.6 },
        0
      )
      .to(counterRef.current, { opacity: 0, duration: 0.6 }, 0)
      .to(titleRef.current, {
        y: 0,
        textContent: newTitle,
        opacity: 1,
        duration: 0.6,
      })
      .to(descRef.current, {
        y: 0,
        textContent: newDesc,
        opacity: 1,
        duration: 0.6,
      })
      .to(counterRef.current, {
        textContent: nextSlide,
        opacity: 1,
        duration: 0.6,
      });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white z-10">
        <div className="text-xl font-bold">Codegrid</div>
        <div className="flex gap-6 text-lg">
          <p>Work</p>
          <p>Studio</p>
          <p>News</p>
          <p>Contact</p>
        </div>
      </nav>

      {/* Main Slide */}
      <div
        ref={sliderRef}
        className="absolute inset-0 flex justify-center items-center"
      >
        <img
          ref={mainImageRef}
          src={slideData[currentSlide - 1].img}
          className="w-full h-full object-cover transition-opacity duration-700"
          alt=""
        />
      </div>

      {/* Slide Content */}
      <div className="absolute bottom-16 left-16 text-white">
        <h1 ref={titleRef} className="text-4xl font-bold">
          {slideData[currentSlide - 1].title}
        </h1>
        <p ref={descRef} className="text-lg">
          {slideData[currentSlide - 1].description}
        </p>
      </div>

      {/* Footer Counter */}
      <footer className="absolute bottom-0 left-0 w-full flex justify-between items-center p-4 text-white">
        <p className="text-lg">All Projects</p>
        <div className="flex items-center gap-2 text-lg">
          <p ref={counterRef}>{currentSlide}</p>
          <p>/</p>
          <p>{totalSlides}</p>
        </div>
      </footer>
    </div>
  );
}
