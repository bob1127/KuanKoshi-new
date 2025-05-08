"use client";
import React, { useRef, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const lerp = (start, end, factor) => start + (end - start) * factor;

const ParallaxImage = ({ src, alt, className = "" }) => {
  const imageRef = useRef(null);
  const bounds = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef(null);

  const updateBounds = () => {
    if (!imageRef.current || !imageRef.current.complete) return;
    const rect = imageRef.current.getBoundingClientRect();
    bounds.current = {
      top: rect.top + window.scrollY,
      bottom: rect.bottom + window.scrollY,
    };
  };

  useEffect(() => {
    const handleImageLoad = () => {
      updateBounds();
    };

    if (imageRef.current) {
      if (imageRef.current.complete) {
        updateBounds();
      } else {
        imageRef.current.addEventListener("load", handleImageLoad);
      }
    }

    window.addEventListener("resize", updateBounds);

    const animate = () => {
      if (imageRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );
        imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.5)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      imageRef.current?.removeEventListener("load", handleImageLoad);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useLenis(({ scroll }) => {
    if (!bounds.current) return;
    const relativeScroll = scroll - bounds.current.top;
    targetTranslateY.current = relativeScroll * 0.2;
  });

  return (
    <img ref={imageRef} src={src} alt={alt} className={`w-full ${className}`} />
  );
};

export default ParallaxImage;
