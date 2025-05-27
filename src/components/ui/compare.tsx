"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { SparklesCore } from "./sparkles";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress =
        (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;
      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16);
    };
    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleInteraction = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderXPercent(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div
      ref={sliderRef}
      className={cn("w-[400px] h-[400px] overflow-hidden relative", className)}
      style={{
        cursor: slideMode === "drag" ? "grab" : "col-resize",
      }}
      onMouseMove={(e) =>
        (slideMode === "hover" || isDragging) && handleInteraction(e.clientX)
      }
      onMouseLeave={() => {
        setIsDragging(false);
        slideMode === "hover" && setSliderXPercent(initialSliderPercentage);
        startAutoplay();
      }}
      onMouseEnter={() => stopAutoplay()}
      onMouseDown={(e) => slideMode === "drag" && setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onTouchStart={(e) => handleInteraction(e.touches[0].clientX)}
      onTouchMove={(e) => handleInteraction(e.touches[0].clientX)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent via-indigo-500 to-transparent"
          style={{ left: `${sliderXPercent}%`, zIndex: 40 }}
          transition={{ duration: 0 }}
        >
          <div className="w-36 h-full absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 to-transparent z-20 opacity-50" />
          <div className="w-10 h-1/2 absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 to-transparent z-10 opacity-100" />
          <div className="w-10 h-3/4 absolute top-1/2 -translate-y-1/2 -right-10">
            <MemoizedSparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          {showHandlebar && (
            <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center">
              <IconDotsVertical className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 上層圖片（裁切左半） */}
      <div className="overflow-hidden w-full h-full absolute inset-0 z-20 pointer-events-none">
        {firstImage && (
          <motion.div
            className={cn("absolute inset-0", firstImageClassName)}
            style={{ clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` }}
            transition={{ duration: 0 }}
          >
            <img
              src={firstImage}
              alt="first image"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              width={1600}
              height={1200}
            />
          </motion.div>
        )}
      </div>

      {/* 下層圖片（整張） */}
      {secondImage && (
        <div className="absolute top-0 left-0 z-[19] w-full h-full">
          <img
            src={secondImage}
            alt="second image"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            width={1600}
            height={1200}
          />
        </div>
      )}
    </div>
  );
};

const MemoizedSparklesCore = React.memo(SparklesCore);
