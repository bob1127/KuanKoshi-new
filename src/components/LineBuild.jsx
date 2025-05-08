"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

export default function MissionSection() {
  const [height, setHeight] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });
  const router = useRouter();

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setHeight(containerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      setIsActive(true);
    }
  }, [inView]);

  const handleLinkClick = (e) => {
    e.preventDefault();
    // 模擬 pageTransition
    console.log("Page Transition 開始");
    // 可加入動畫 / 狀態切換
    router.push("/mission");
  };

  return (
    <div
      ref={containerRef}
      className="relative z-30 col-span-full row-span-full px-7 pt-var [--pt-var:438] pb-var [--pb-var:174] sm:px-0 sm:pt-fluid-var sm:[--pt-fluid-var:438] sm:pb-fluid-var sm:[--pb-fluid-var:238] sm:col-[3/7]"
    >
      <hgroup
        ref={inViewRef}
        className={`anime-title-section ${isActive ? "is-active" : ""}`}
      >
        <p className="--label text-en-headline-m overflow-hidden">
          <span className="--no-gradient-label">Mission</span>
        </p>
        <h2 className="--sub text-ja-label-m mt-fluid-3">私たちのミッション</h2>
      </hgroup>

      <h3 className="text-ja-headline-l mt-fluid-8">
        もっといい
        <br />
        「当たり前」をつくる
      </h3>

      <p className="text-ja-body-m mt-2 mb-7 sm:mt-fluid-4 sm:mb-fluid-12">
        日々の暮らしには、不便・非効率がありながらも、
        <br />
        過去の延長で「当たり前」と
        <br />
        受け入れてしまっていることが溢れています。
        <br />
        私たちは、デジタルの力で
        <br />
        この「当たり前」をアップデートすることで、
        <br />
        もっといい未来をつくっていきます。
      </p>

      <button
        onClick={handleLinkClick}
        onMouseEnter={() => console.log("rollEnter")}
        onMouseLeave={() => console.log("rollLeave")}
        className="anime-link-button relative inline-flex items-center justify-between h-fluid-var p-fluid-var pl-fluid-var rounded-full border border-[var(--border--default)] min-w-fluid-var gap-x-fluid-12 bg-[var(--bg--default)] text-[var(--text--default)] [--p-fluid-var:8] [--pl-fluid-var:24] [--h-fluid-var:64] [--min-w-fluid-var:170] [--border--default:var(--color-gray)] [--bg--default:var(--color-white)] [--bg--hovered:var(--color-white)] [--text--default:var(--color-primary)] [--text--hovered:var(--color-primary)]"
      >
        <span className="text-ja-button-m">私たちについて</span>
        <span className="relative grid place-content-center rounded-full aspect-square h-full text-[var(--icon--default)] [--icon--default:var(--color-primary)] [--icon--hovered:var(--color-white)]">
          <span className="--icon-bg absolute block size-full rounded-full inset-0 bg-[var(--icon-bg--default)] [--icon-bg--default:var(--color-light-gray)] [--icon-bg--hovered:var(--color-primary)]"></span>
          <span className="relative size-fluid-3.5 overflow-hidden">
            <svg
              viewBox="0 0 24 24"
              className="--arrow --before size-full isolate"
            >
              <use xlinkHref="#svg-arrow-right" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="--arrow --after text-white absolute inset-0 z-10 isolate"
            >
              <use xlinkHref="#svg-arrow-right" />
            </svg>
          </span>
        </span>
        <svg className="--line absolute -top-px -left-px size-[calc(100%+2px)] z-10 !max-w-none !overflow-visible pointer-events-none">
          <rect
            ry="50%"
            className="absolute top-0 left-0 size-full fill-transparent stroke-primary [stroke-width:2]"
          />
        </svg>
      </button>
    </div>
  );
}
