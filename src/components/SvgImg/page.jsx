"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Head from "next/head";
import Link from "next/link";
import "./page.css";

const Home = () => {
  useEffect(() => {
    gsap.from(".nav-container", {
      opacity: 0,
      y: -60,
      ease: "power3.inOut",
      delay: 0.5,
      duration: 2,
    });
    gsap.from(".hero > *", {
      opacity: 0,
      y: 60,
      ease: "power3.inOut",
      delay: 1,
      stagger: { amount: 0.5 },
      duration: 1,
    });
    gsap.from(".blob", {
      scale: 0,
      ease: "power3.inOut",
      delay: 1.5,
      stagger: { amount: 0.5 },
      duration: 2,
    });
    gsap.from(".bg-gradient", {
      scale: 0,
      ease: "power3.inOut",
      delay: 2,
      duration: 2,
    });
  }, []);

  return (
    <div className="bg-[#f4f0ea]">
      <div className="container mt-[300px]">
        <div className="bg-gradient">
          <svg
            viewBox="0 0 500 500"
            width="100%"
            id="blobSvg"
            filter="blur(20px)"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(248, 121, 21)" }}
                ></stop>
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(255, 201, 69)" }}
                ></stop>
              </linearGradient>
            </defs>
            <path id="blob" fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values="M421.63508,307.39005Q364.7801,364.7801..."
              ></animate>
            </path>
          </svg>
        </div>
        <div className="hero-container">
          <div className="hero">
            <h1>
              *The art <br /> inspired <br /> by your <br /> story.
            </h1>
            <div className="cta">
              <button>Write us a letter</button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              voluptates enim expedita, esse laboriosam veniam! Officiis, harum?
              Velit, mollitia vero.
            </p>
          </div>
        </div>
        <div className="blob-1 blob"></div>
        <div className="blob-2 blob"></div>
        <div className="blob-3 blob">+</div>
      </div>
    </div>
  );
};

export default Home;
