import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
export default function ScrollAnimationComponent() {
  useEffect(() => {
    const transitioning = sessionStorage.getItem("transitioning");
    if (transitioning === "true") {
      sessionStorage.removeItem("transitioning");
      setTimeout(() => {
        window.dispatchEvent(new Event("pageTransitionComplete"));
      }, 100); // 避免還沒 mount 完
    }
    if (window.innerWidth >= 900) {
      const lenis = new Lenis();
      const videoContainer = document.querySelector(".video-container-desktop");
      const videoTitleElements = document.querySelectorAll(".video-title p");

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      const breakpoints = [
        { maxWidth: 1000, translateY: -135, movMultiplier: 450 },
        { maxWidth: 1100, translateY: -130, movMultiplier: 500 },
        { maxWidth: 1200, translateY: -125, movMultiplier: 550 },
        { maxWidth: 1300, translateY: -120, movMultiplier: 600 },
      ];

      const getInitialValues = () => {
        const width = window.innerWidth;

        for (const bp of breakpoints) {
          if (width <= bp.maxWidth) {
            return {
              translateY: bp.translateY,
              movementMultiplier: bp.movMultiplier,
            };
          }
        }

        return {
          translateY: -105,
          movementMultiplier: 650,
        };
      };

      const initialValues = getInitialValues();

      const animationState = {
        scrollProgress: 0,
        initialTranslateY: initialValues.translateY,
        currentTranslateY: initialValues.translateY,
        movementMultiplier: initialValues.movementMultiplier,
        scale: 0.25,
        fontSize: 80,
        gap: 2,
        targetMouseX: 0,
        currentMouseX: 0,
      };

      window.addEventListener("resize", () => {
        const newValues = getInitialValues();
        animationState.initialTranslateY = newValues.translateY;
        animationState.movementMultiplier = newValues.movementMultiplier;

        if (animationState.scrollProgress === 0) {
          animationState.currentTranslateY = newValues.translateY;
        }
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".intro",
          start: "top bottom",
          end: "top 10%",
          scrub: true,
          onUpdate: (self) => {
            animationState.scrollProgress = self.progress;

            animationState.currentTranslateY = gsap.utils.interpolate(
              animationState.initialTranslateY,
              0,
              animationState.scrollProgress
            );

            animationState.scale = gsap.utils.interpolate(
              0.25,
              1,
              animationState.scrollProgress
            );

            animationState.gap = gsap.utils.interpolate(
              2,
              1,
              animationState.scrollProgress
            );

            if (animationState.scrollProgress <= 0.4) {
              const firstPartProgress = animationState.scrollProgress / 0.4;
              animationState.fontSize = gsap.utils.interpolate(
                80,
                40,
                firstPartProgress
              );
            } else {
              const secondPartProgress =
                (animationState.scrollProgress - 0.4) / 0.6;
              animationState.fontSize = gsap.utils.interpolate(
                40,
                20,
                secondPartProgress
              );
            }
          },
        },
      });

      document.addEventListener("mousemove", (e) => {
        animationState.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      });

      const animate = () => {
        if (window.innerWidth < 900) return;

        const {
          scale,
          targetMouseX,
          currentMouseX,
          currentTranslateY,
          fontSize,
          gap,
          movementMultiplier,
        } = animationState;

        const scaledMovementMultiplier = (1 - scale) * movementMultiplier;

        const maxHorizontalMovement =
          scale < 0.95 ? targetMouseX * scaledMovementMultiplier : 0;

        animationState.currentMouseX = gsap.utils.interpolate(
          currentMouseX,
          maxHorizontalMovement,
          0.05
        );

        videoContainer.style.transform = `translateY(${currentTranslateY}%) translateX(${animationState.currentMouseX}px) scale(${scale})`;

        videoContainer.style.gap = `${gap}em`;

        videoTitleElements.forEach((element) => {
          element.style.fontSize = `${fontSize}px`;
        });

        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <div className="overflow-x-hidden font-sans text-[#1a1a1a] bg-[#e3e3db]">
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between mix-blend-difference z-20 text-white text-[20px] font-medium">
        <div className="logo">
          <a href="#">誠境二期</a>
        </div>
        <div className="links flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Videos</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="hero w-full h-[100svh] p-10 pt-16 flex flex-col justify-between">
        <h1 className="relative -left-[0.05em] uppercase font-medium text-[20vw] tracking-[-0.04em] leading-none">
          Yi Yuan
        </h1>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[40% w-full] px-10">
            <h3 className="text-[#1e1e21]  text-[3rem]">EARTH-宜融</h3>
            <p className="text-[1.1rem]   font-medium">
              實在心，實在本事  宜 在情深緣長的土地 
            </p>
          </div>
          <div className="w-full lg:w-[60%]  flex justify-center">
            <Marquee>
              <div className="img w-[160px] lg:w-[220px] mx-6 rounded-lg overflow-hidden">
                <Image
                  src="https://niwahouzing.com/wp-content/uploads/2024/10/6ac2397867767a902ce2217f0a58282f-18.jpg"
                  placeholder="empty"
                  loading="eager"
                  width={500}
                  height={300}
                  alt=""
                ></Image>
              </div>
              <div className="img w-[160px] lg:w-[220px] mx-6 rounded-lg overflow-hidden">
                <Image
                  src="https://niwahouzing.com/wp-content/uploads/2024/10/6ac2397867767a902ce2217f0a58282f-18.jpg"
                  placeholder="empty"
                  loading="eager"
                  width={500}
                  height={300}
                  alt=""
                ></Image>
              </div>
              <div className="img w-[160px] lg:w-[220px] mx-6 rounded-lg overflow-hidden">
                <Image
                  src="https://niwahouzing.com/wp-content/uploads/2024/10/6ac2397867767a902ce2217f0a58282f-18.jpg"
                  placeholder="empty"
                  loading="eager"
                  width={500}
                  height={300}
                  alt=""
                ></Image>
              </div>
              <div className="img w-[160px] lg:w-[220px] mx-6 rounded-lg overflow-hidden">
                <Image
                  src="https://niwahouzing.com/wp-content/uploads/2024/10/6ac2397867767a902ce2217f0a58282f-18.jpg"
                  placeholder="empty"
                  loading="eager"
                  width={500}
                  height={300}
                  alt=""
                ></Image>
              </div>
              <div className="img w-[160px] lg:w-[220px] mx-6 rounded-lg overflow-hidden">
                <Image
                  src="https://niwahouzing.com/wp-content/uploads/2024/10/6ac2397867767a902ce2217f0a58282f-18.jpg"
                  placeholder="empty"
                  loading="eager"
                  width={500}
                  height={300}
                  alt=""
                ></Image>
              </div>
            </Marquee>
          </div>
        </div>
        <div className="hero-copy flex justify-between items-end">
          <p className="text-[1.1rem]  ml-8 font-medium">(Scroll)</p>
        </div>
      </section>

      <section className="intro w-full h-[100svh] p-10">
        <div
          className="video-container-desktop relative flex flex-col gap-[2em] z-[99] will-change-transform"
          style={{ transform: "translateY(-105%) scale(0.25)" }}
        >
          <div className="video-preview relative w-full aspect-[16/9] rounded-3xl bg-[#b9b9b3] overflow-hidden">
            <div className="video-wrapper absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/BLisA8zYphs?si=Zq2u4RlEJzcZJHHD"
                frameBorder="0"
                auto
                allow="autoplay; fullscreen"
                referrerPolicy="no-referrer"
                loading="lazy"
                title="Codegrid video"
                className="absolute top-0 left-0 w-full h-full rounded-3xl pointer-events-none"
              ></iframe>
            </div>
          </div>
          <div className="video-title">
            <p className="text-[78px] text-gray-800 font-medium relative">
              PROJECT-YI YUAN
            </p>
            <p className="text-[78px] text-gray-800 font-medium relative">
              2023 - 2024
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-[20vh] pt-[20vh] w-full p-10 flex justify-center flex-col items-center">
        <div>
          <h2>建設未來，創造無限可能</h2>
          <p></p>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className=" w-full lg:w-1/2">
            <div className="mt-10 relative">
              <div className="absolute top-[25%]  left-[20%] z-[9]">
                {" "}
                <Popover
                  showArrow
                  backdrop="opaque"
                  classNames={{
                    base: [
                      // arrow color
                      "before:bg-default-200",
                    ],
                    content: [
                      "py-3 px-4 border border-default-200",
                      "bg-gradient-to-br from-white to-default-300",
                      "dark:from-default-100 dark:to-default-50",
                    ],
                  }}
                  placement="right"
                >
                  <PopoverTrigger>
                    <Button className="!bg-[#8A9A5B] !text-[.8rem] !rounded-full !text-white">
                      樓層結構
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    {(titleProps) => (
                      <div className="p-5 ">
                        <div className="w-full flex flex-col max-w-[530px]">
                          <h3
                            className="text-[1.1rem] font-bold"
                            {...titleProps}
                          >
                            專案結構
                          </h3>
                          <div className="text-tiny mt-3">
                            本建案採用鋼筋混凝土結構，確保整體穩固耐震。
                            每層樓經過精密設計，包含主結構樑柱、樓板與剪
                            力牆，提升安全性與耐久度。樓層高度與空間規劃
                            符合居住與使用需求，並考量採光與通風，打造
                            舒適宜居的環境。
                          </div>
                        </div>
                        <Image
                          src="https://niwahouzing.com/wp-content/uploads/2024/10/f6f77a1616e27fc34eb1a81aa7dc6262-17.jpg"
                          placeholder="empty"
                          alt=""
                          className="rounded-lg my-5"
                          width={500}
                          height={400}
                          loading="lazy"
                        ></Image>
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
              </div>
              <div className="absolute top-[40%]  left-[40%] z-[9]">
                {" "}
                <Popover
                  showArrow
                  backdrop="opaque"
                  classNames={{
                    base: [
                      // arrow color
                      "before:bg-default-200",
                    ],
                    content: [
                      "py-3 px-4 border border-default-200",
                      "bg-gradient-to-br from-white to-default-300",
                      "dark:from-default-100 dark:to-default-50",
                    ],
                  }}
                  placement="right"
                >
                  <PopoverTrigger>
                    <Button className="!bg-[#8A9A5B] !text-[.8rem] !rounded-full !text-white">
                      樓層結構
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    {(titleProps) => (
                      <div className="p-5 ">
                        <div className="w-full flex flex-col max-w-[530px]">
                          <h3
                            className="text-[1.1rem] font-bold"
                            {...titleProps}
                          >
                            專案結構
                          </h3>
                          <div className="text-tiny mt-3">
                            本建案採用鋼筋混凝土結構，確保整體穩固耐震。
                            每層樓經過精密設計，包含主結構樑柱、樓板與剪
                            力牆，提升安全性與耐久度。樓層高度與空間規劃
                            符合居住與使用需求，並考量採光與通風，打造
                            舒適宜居的環境。
                          </div>
                        </div>
                        <Image
                          src="https://niwahouzing.com/wp-content/uploads/2024/10/f6f77a1616e27fc34eb1a81aa7dc6262-17.jpg"
                          placeholder="empty"
                          alt=""
                          className="rounded-lg my-5"
                          width={500}
                          height={400}
                          loading="lazy"
                        ></Image>
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full">
                <Image
                  src="/images/building-01.jpg"
                  alt=""
                  width={1800}
                  height={2500}
                  loading="lazy"
                  placeholder="empty"
                ></Image>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-1/2  p-3 sm:p-5 lg:p-10">
            <div className="p-5">
              <p className="text-[.95rem] leading-loose tracking-widest">
                歡迎來到
                [公司名稱]，我們是一家專注於提供高品質建築和建設解決方案的公司。自成立以來，我們一直秉持著「品質至上、誠信經營」的宗旨，致力於打造出符合客戶需求並超越期待的建設作品。無論是住宅、商業大樓、公共設施還是特殊工程，我們都堅持以專業、創新和卓越的工藝來完成每一個項目。
              </p>
              <button class="group  relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 border-neutral-200 bg-white font-medium">
                <div class="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                  聯絡我們
                </div>
                <div class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                  <span class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#8A9A5B] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                  <span class="z-10">CONTACT</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
