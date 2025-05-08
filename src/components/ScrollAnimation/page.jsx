"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ScrollAnimation.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedLink from "../AnimatedLink";
gsap.registerPlugin(ScrollTrigger);

const InfiniteScroll = () => {
  const scrollerRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current || !borderRef.current) return;

    const scroller = scrollerRef.current;
    const sections = scroller.querySelectorAll(`.${styles.section}`);
    const totalWidth = Array.from(sections).reduce(
      (acc, section) => acc + section.offsetWidth,
      0
    );

    const factor = window.innerWidth < 768 ? 1.5 : 1; // 手機螢幕加長 scroll 區間

    const animation = gsap.to(scroller, {
      x: () => `-${totalWidth - window.innerWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: () => `+=${totalWidth * factor}`,
        pin: true,
        scrub: 1,
        onEnter: () => {
          gsap.to(borderRef.current, {
            opacity: 1,
            borderWidth: "23px",
            duration: 0.3,
          });
        },
        onLeave: () => {
          gsap.to(borderRef.current, { opacity: 0, duration: 0.5 });
        },
        onEnterBack: () => {
          gsap.to(borderRef.current, {
            opacity: 1,
            borderWidth: "23px",
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(borderRef.current, { opacity: 0, duration: 0.5 });
        },
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* 黑色邊框＋四邊跑馬燈文字 */}
      <div ref={borderRef} className={styles.borderFrame}>
        <div className={`${styles.marquee} ${styles.top}`}>
          <span>WELCOME TO THE FUTURE • WELCOME TO THE FUTURE • </span>
        </div>
        <div className={`${styles.marquee} ${styles.right}`}>
          <span>WELCOME TO THE FUTURE • WELCOME TO THE FUTURE • </span>
        </div>
        <div className={`${styles.marquee} ${styles.bottom}`}>
          <span>WELCOME TO THE FUTURE • WELCOME TO THE FUTURE • </span>
        </div>
        <div className={`${styles.marquee} ${styles.left}`}>
          <span>WELCOME TO THE FUTURE • WELCOME TO THE FUTURE • </span>
        </div>
      </div>

      {/* 水平滾動區域 */}
      <div className={styles.horizontalScroller} ref={scrollerRef}>
        {/* Section 1 */}
        <section className={styles.section}>
          <div className="man-02 absolute w-screen sm:w-auto top-1/2 h-auto left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative group">
              <div>
                <Image
                  src="/images/qa/full-frame-title.png"
                  placeholder="empty"
                  alt="women-01"
                  width={400}
                  height={550}
                  className="max-w-[830px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className={styles.section}>
          <div className="man-01 absolute left-[10%] z-10 bottom-0">
            <div className="relative group">
              <div className="img">
                <Image
                  src="/images/qa/man-01.png"
                  placeholder="empty"
                  alt="man-01"
                  width={400}
                  height={550}
                  className="w-[210px] group-hover:scale-105 duration-500 group-hover:shadow-xl"
                />
              </div>
              <div className="chat-box absolute z-10 top-[-5%] right-[-10%]">
                <Image
                  src="/images/qa/qa-icon-01.png"
                  placeholder="empty"
                  alt="qa-icon-01"
                  width={400}
                  height={550}
                  className="w-[110px] group-hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>

          <div className="man-02 absolute left-[34%] z-10 bottom-0">
            <AnimatedLink href="project">
              <div className="relative group">
                <div className="img">
                  <Image
                    src="/images/qa/man-02.png"
                    placeholder="empty"
                    alt="man-02"
                    width={400}
                    height={550}
                    className="w-[140px] group-hover:scale-105 duration-500 group-hover:shadow-xl"
                  />
                </div>
                <div className="chat-box absolute z-10 top-[-15%] right-[-20%]">
                  <Image
                    src="/images/qa/qa-icon-02.png"
                    placeholder="empty"
                    alt="qa-icon-02"
                    width={400}
                    height={550}
                    className="w-[110px] group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </AnimatedLink>
          </div>

          <div className="man-02 absolute right-[31%] z-10 bottom-0">
            <div className="relative group">
              <div className="img">
                <Image
                  src="/images/qa/women-01.png"
                  placeholder="empty"
                  alt="women-01"
                  width={400}
                  height={550}
                  className="w-[230px] group-hover:scale-105 duration-500 group-hover:shadow-xl"
                />
              </div>
              <div className="chat-box absolute z-10 top-[-15%] right-[-20%]">
                <Image
                  src="/images/qa/qa-icon-02.png"
                  placeholder="empty"
                  alt="qa-icon-02"
                  width={400}
                  height={550}
                  className="w-[110px] group-hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>

          <div className="man-02 absolute top-[9%] left-[8%] z-10">
            <div className="relative group">
              <div className="img">
                <Image
                  src="/images/qa/Growth-9.png"
                  placeholder="empty"
                  alt="growth-9"
                  width={400}
                  height={550}
                  className="w-[330px] group-hover:scale-105 duration-500 group-hover:shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* 背景大圖 */}
          <Image
            src="/images/qa/full-frame-interior.png"
            alt="full-frame-interior"
            placeholder="empty"
            loading="lazy"
            width={4500}
            height={1000}
            className="w-full h-full"
          />
        </section>
      </div>
    </div>
  );
};

export default InfiniteScroll;
