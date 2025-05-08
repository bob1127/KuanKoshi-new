"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
const HeroComponent = () => {
  const heroRef = useRef(null);
  const blobsRef = useRef([]);
  const blobsRef02 = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 60,
        ease: "power3.inOut",
        delay: 1,
        duration: 1,
        stagger: 0.2,
      });

      gsap.from(blobsRef.current, {
        scale: 0,
        ease: "power3.inOut",
        delay: 1.5,
        duration: 2,
        stagger: 0.3,
      });
      gsap.from(blobsRef02.current, {
        scale: 0,
        ease: "power3.inOut",
        delay: 2.5,
        duration: 2.5,
        stagger: 0.4,
      });
      gsap.from(bgRef.current, {
        scale: 0,
        ease: "power3.inOut",
        delay: 2,
        duration: 2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full my-[100px] 2xl:w-[70%] mx-auto">
      {/* 左邊綠色漸層 Blob */}
      <div
        ref={(el) => (blobsRef02.current[0] = el)}
        className="absolute top-[-45%] md:top-[-27%] left-[-48%] md:left-[-10%] w-[100vmin] h-[100vmin]"
      >
        <svg
          viewBox="0 0 450 450"
          width="1000"
          height="1000"
          className="absolute"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A9A5B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path fill="url(#gradient1)" transform="translate(0,0)">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M421.6,307.3Q364.7,364.7,307.3,427.4Q250,490,191.6,428.3Q133.3,366.6,70.9,308.3Q8.4,250,54.2,174.9Q99.9,99.9,174.9,81.4Q250,63,330.6,75.8Q411.3,88.6,444.9,169.3Q478.4,250,421.6,307.3Z;
                M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;
                M408.2,332.6Q415.2,415.2,332.6,434.7Q250,454.1,179.3,422.7Q108.6,391.3,65.8,320.6Q23,250,63.2,176.7Q103.4,103.4,176.7,63Q250,22.5,311.8,74.4Q373.7,126.2,387.4,188.1Q401.2,250,408.2,332.6Z;
                M421.6,307.3Q364.7,364.7,307.3,427.4Q250,490,191.6,428.3Q133.3,366.6,70.9,308.3Q8.4,250,54.2,174.9Q99.9,99.9,174.9,81.4Q250,63,330.6,75.8Q411.3,88.6,444.9,169.3Q478.4,250,421.6,307.3Z;
              "
            />
          </path>
        </svg>
      </div>

      {/* 右邊深綠漸層 Blob */}
      <div
        ref={(el) => (blobsRef.current[0] = el)}
        className="absolute top-[-35%] right-[15%] w-[100vmin] h-[100vmin]"
      >
        <svg
          viewBox="0 0 470 470"
          width="1200"
          height="1200"
          className="absolute"
        >
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#8A9A5B" />
            </linearGradient>
          </defs>
          <path fill="url(#gradient2)" transform="translate(0,0)">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M421.6,307.3Q364.7,364.7,307.3,427.4Q250,490,191.6,428.3Q133.3,366.6,70.9,308.3Q8.4,250,54.2,174.9Q99.9,99.9,174.9,81.4Q250,63,330.6,75.8Q411.3,88.6,444.9,169.3Q478.4,250,421.6,307.3Z;
                M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;
                M408.2,332.6Q415.2,415.2,332.6,434.7Q250,454.1,179.3,422.7Q108.6,391.3,65.8,320.6Q23,250,63.2,176.7Q103.4,103.4,176.7,63Q250,22.5,311.8,74.4Q373.7,126.2,387.4,188.1Q401.2,250,408.2,332.6Z;
                M421.6,307.3Q364.7,364.7,307.3,427.4Q250,490,191.6,428.3Q133.3,366.6,70.9,308.3Q8.4,250,54.2,174.9Q99.9,99.9,174.9,81.4Q250,63,330.6,75.8Q411.3,88.6,444.9,169.3Q478.4,250,421.6,307.3Z;
              "
            />
          </path>
        </svg>
      </div>

      {/* 中間內容區 */}
      <div
        ref={bgRef}
        className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0"
      ></div>

      <div className="hero-container relative z-10 w-full">
        <div
          ref={heroRef}
          className="hero h-auto justify-center items-center max-w-[80%] mx-auto flex flex-col  text-center py-16"
        >
          {/* 這裡可以放標題、按鈕、描述文字 */}
          <div className="flex flex-col  items-start justify-start border border-black">
            <h1 className="text-4xl font-bold mb-4 text-white">
              綠意盎然的未來
            </h1>
            <p className="text-white/80">
              我們基於自己的專有基礎設施數據開發並提供多種服務，支援房地產業務的整個營運。
            </p>
            <div className="max-w-[1000px]">
              <Image
                src="/images/about/about-01.jpg"
                placeholder="empty"
                alt=""
                loading="lazy"
                width={1500}
                height={850}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
