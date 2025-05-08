"use client";

import {
  useEffect,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import Image from "next/image";
import MenuBar from "../MenuBar/MenuBar";
import { links, socials } from "./menuContent";
import AnimatedLink from "../AnimatedLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";

const Menu = ({ isDarkBg }) => {
  const init = useRef(false);
  const container = useRef();
  const menuRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useGSAP(
    () => {
      if (menuRef.current) {
        const menu = menuRef.current;
        const links = menu.querySelectorAll(".link h2");
        const socials = menu.querySelectorAll(".socials .line p");
        const menuContent = menu.querySelector(".menu-content");

        links.forEach((link) => {
          link.addEventListener("click", toggleMenu);
        });

        gsap.set(menu, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.set(links, { y: 120 });
        gsap.set(socials, { y: 30 });
        gsap.set(menuContent, { y: 40, opacity: 0 });

        init.current = true;
      }
    },
    { scope: container }
  );

  const animateMenu = useCallback((open) => {
    if (!menuRef.current) return;

    const menu = menuRef.current;
    const links = menu.querySelectorAll(".link h2");
    const socialsCols = menu.querySelectorAll(".socials .sub-col");
    const menuContent = menu.querySelector(".menu-content");

    setIsAnimating(true);

    if (open) {
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1,
        onStart: () => {
          menu.style.pointerEvents = "auto";
        },
        onComplete: () => setIsAnimating(false),
      });

      gsap.to(menuContent, {
        y: 0,
        opacity: 1,
        duration: 0.8, // 原本是 1，改短
        ease: "power4.out",
        delay: 0.4, // 原本 0.8，改早一點進入
      });
      if (window.innerWidth >= 768) {
        gsap.to(links, {
          y: -25,
          stagger: 0.05,
          delay: 0.6,
          duration: 0.6,
          ease: "power4.out",
        });
      } else {
        gsap.set(links, { y: 0 });
      }

      socialsCols.forEach((subCol) => {
        const socialCopy = subCol.querySelectorAll(".line p");
        gsap.to(socialCopy, {
          y: 0,
          stagger: 0.1,
          delay: 1.2,
          duration: 1,
          ease: "power4.out",
        });
      });
    } else {
      gsap.to(menuContent, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power4.in",
      });

      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "hop",
        duration: 1.5,
        delay: 0.25,
        onComplete: () => {
          menu.style.pointerEvents = "none";
          gsap.set(menu, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          });

          gsap.set(links, { y: 120 });
          socialsCols.forEach((subCol) => {
            const socialCopy = subCol.querySelectorAll(".line p");
            gsap.set(socialCopy, { y: 30 });
          });

          setIsAnimating(false);
        },
      });
    }
  }, []);

  useEffect(() => {
    if (init.current) {
      animateMenu(isOpen);
    }
  }, [isOpen, animateMenu]);

  const toggleMenu = useCallback(() => {
    if (!isAnimating) {
      setIsOpen((prev) => !prev);
    }
  }, [isAnimating]);

  const closeMenu = useCallback(() => {
    if (!isAnimating && isOpen) {
      setIsOpen(false);
    }
  }, [isAnimating, isOpen]);

  // ✅ 控制 pointerEvents，確保可以捲動
  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;

    if (isOpen) {
      menuEl.style.pointerEvents = "auto";
    } else {
      menuEl.style.pointerEvents = "none";
    }
  }, [isOpen]);

  return (
    <div ref={container}>
      <MenuBar
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        isDarkBg={isDarkBg}
      />

      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen py-20 flex bg-[#375E77] z-[3] overflow-y-auto"
        style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
      >
        <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col justify-center items-center menu-content">
          {/* Logo */}
          <div className="flex flex-col sm:flex-row sm:mt-[100px] mt-[20px] lg:mt-[130px] items-start md:items-center mb-0 sm:mb-12 px-6 w-full justify-start">
            <div className="flex items-center">
              <p className="text-white ml-4 text-[clamp(1.5rem,3vw,2.5rem)]">
                Kuankoshi
              </p>
            </div>
            <span className="text-[#d8d8d8] ml-0 mt-3 sm:mt-0 sm:ml-3 text-[clamp(0.7rem,2vw,1rem)] font-light">
              讓生活，在空間裡展開
            </span>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row  w-full py-2 sm:py-10 gap-y-0 sm:gap-y-8 px-6">
            {/* Links */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-6">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 9h4m0 0V5m0 4L4 4m15 5h-4m0 0V5m0 4 5-5M5 15h4m0 0v4m0-4-5 5m15-5h-4m0 0v4m0-4 5 5"
                  />
                </svg>
                <span className="text-white ml-3 text-[clamp(0.9rem,2vw,1.1rem)] tracking-wider">
                  CONTENT
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-6">
                {links.map((link, index) => (
                  <div className="link group text-left" key={index}>
                    <div className="link-wrapper h-[80px]  overflow-hidden relative">
                      <AnimatedLink
                        href={link.path}
                        className=" block  !bg-transparent !border-none p-2"
                      >
                        <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-normal group-hover:text-white duration-500  text-gray-200 sm:text-[#838383] translate-y-[120px] will-change-transform">
                          {link.label}
                          <br />
                          <span className=" block !bg-transparent ml-6 text-[clamp(0.7rem,1.8vw,0.9rem)] text-white">
                            {link.subtext}
                          </span>
                        </h2>
                      </AnimatedLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="w-full lg:w-1/2 flex flex-row lg:flex-col justify-end items-end lg:justify-center gap-4 mt-6">
              <AnimatedLink href="/contact">
                <Image
                  src="/images/about/spesial_banner_2-pc.png"
                  alt="menu-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1200}
                  height={700}
                  className="w-full sm:w-[45%] md:w-[48%] lg:w-[60%] hover:scale-95 rounded-md xl:rounded-2xl hover:shadow-xl  hover:border-2 hover:border-white  duration-700"
                />
              </AnimatedLink>
              <AnimatedLink href="/contact">
                <Image
                  src="/images/about/spesial_banner_2-pc.png"
                  alt="menu-img"
                  placeholder="empty"
                  loading="lazy"
                  width={1200}
                  height={700}
                  className="w-full sm:w-[45%] md:w-[48%] lg:w-[60%] hover:scale-95 rounded-md xl:rounded-2xl hover:shadow-xl hover:border-2 hover:border-white duration-700"
                />
              </AnimatedLink>
            </div>
          </div>

          {/* Socials */}
          <div className="w-full mt-10 px-6">
            <div className="socials flex sm:flex-row flex-col justify-between pb-8 footer   gap-6 w-full">
              <div className="flex  sub-col gap-4">
                {socials.map((social, index) => (
                  <div className="line" key={index}>
                    <p className="text-[clamp(1rem,1.8vw,1.2rem)] text-[var(--text-secondary)] translate-y-[80px] will-change-transform">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-[.9rem] hover:text-white duration-400"
                      >
                        {social.label}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <span className="text-[#fafafa] text-[.9rem]">
                  © 2025 Kuankoshi DESIGN co., ltd.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
