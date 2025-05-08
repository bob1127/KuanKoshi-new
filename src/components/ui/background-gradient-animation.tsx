"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "#f5f7fa", // 白色偏淺藍
  gradientBackgroundEnd = "#e3f2fd", // 更淡的藍色
  firstColor = "150, 200, 255", // 淡藍
  secondColor = "255, 170, 200", // 淡粉
  thirdColor = "200, 180, 255", // 淡紫
  fourthColor = "255, 220, 150", // 淡黃
  fifthColor = "180, 230, 255", // 淡青
  pointerColor = "140, 140, 255", // 較柔和的藍
  size = "80%",
  blendingValue = "overlay", // 改為 overlay 在白色背景較明顯
  children,

  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }
    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <div className={cn("", className)}>{children}</div>
      <div className="gradients-container h-full w-full blur-xl">
        {["first", "second", "third", "fourth", "fifth"].map((color, i) => (
          <div
            key={color}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--${color}-color),_0.7)_0,_rgba(var(--${color}-color),_0)_50%)_no-repeat]`,
              "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)]",
              `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              "opacity-90 blur-3xl",
              i === 0 ? "animate-first" : "",
              i === 1 ? "animate-second" : "",
              i === 2 ? "animate-third" : "",
              i === 3 ? "animate-fourth" : "",
              i === 4 ? "animate-fifth" : ""
            )}
          ></div>
        ))}

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.6)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              "[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2",
              "opacity-80 blur-2xl"
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
