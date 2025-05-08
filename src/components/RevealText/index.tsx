"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapTextProps {
  text: string;
  id?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  className?: string;
}

const GsapText: React.FC<GsapTextProps> = ({
  text,
  id = "gsap-text",
  fontSize, // 由內部決定，不從 props 傳入
  fontWeight = "normal",
  color = "#000",
  className = "",
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "chars" });

    gsap.set(split.chars, { y: 150 });

    gsap.to(split.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 0,
      stagger: 0.03,
      duration: 1.2,
      ease: "power3.out",
    });

    return () => {
      split.revert();
    };
  }, [text, id]);

  return (
    <p
      ref={textRef}
      id={id}
      className={`leading-tight tracking-wide ${className}`}
      style={{
        fontSize: "clamp(1.5rem, 5vw, 3rem)", // ⭐ 新增 clamp 自適應大小
        fontWeight,
        color,
        lineHeight: "1.2em",
        textTransform: "uppercase",
        fontFamily: "'ResourceHanRoundedCN-Heavy', sans-serif",
        overflow: "hidden",
      }}
    >
      {text}
    </p>
  );
};

export default GsapText;
