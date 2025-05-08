"use client";
import { useMotionValue } from "motion/react";
import React from "react";
import { useMotionTemplate, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  text,
  backgroundImage,
  hoverBackgroundImage,
  className,
}: {
  text?: string;
  backgroundImage?: string;
  hoverBackgroundImage?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card group rounded-3xl w-full relative overflow-hidden flex items-center justify-center h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          hoverBackgroundImage={hoverBackgroundImage}
        />
        <div className="relative z-10 hidden duration-1000 group-hover:flex items-center justify-center">
          <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="text-[.9rem] text-white z-20">project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, hoverBackgroundImage }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      className="absolute inset-0 rounded-2xl bg-cover bg-center opacity-0   group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
      style={{
        ...style,
        backgroundImage: `url(${hoverBackgroundImage})`,
      }}
    />
  );
}
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
