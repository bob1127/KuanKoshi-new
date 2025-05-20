"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";

export default function ProjectPostContent({ html }: { html: string }) {
  const [popupImg, setPopupImg] = useState<string | null>(null);

  useEffect(() => {
    const container = document.querySelector(".post-content");
    if (!container) return;

    const images = container.querySelectorAll("img");

    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLImageElement;
      setPopupImg(target.getAttribute("src"));
    };

    images.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.removeEventListener("click", handleClick);
      img.addEventListener("click", handleClick);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("click", handleClick);
      });
    };
  }, [html]); // 🔁 popupImg 改為 html，避免重複 re-render 造成 reload

  const content = parse(html, {
    replace: (domNode: any) => {
      if (domNode.name === "img" && domNode.attribs?.src) {
        const { src, alt = "" } = domNode.attribs;

        const match = src.match(/(.*?)(-\d+x\d+)?(\.(webp|jpg|jpeg|png))/i);
        if (!match) return;

        const baseUrl = match[1];
        const ext = match[3];
        const originalSrc = `${baseUrl}${ext}`;

        return (
          <div
            style={{
              aspectRatio: "4 / 3",
              position: "relative",
              width: "100%",
              margin: "1rem auto",
            }}
          >
            <Image
              src={originalSrc}
              alt={alt}
              fill
              quality={5}
              sizes="(max-width: 768px) 100vw, 60vw"
              style={{ objectFit: "cover", cursor: "zoom-in" }}
              onClick={() => setPopupImg(originalSrc)}
            />
          </div>
        );
      }
    },
  });

  return (
    <>
      <div className="post-content">{content}</div>

      {popupImg && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
          onClick={() => setPopupImg(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <img
              src={popupImg}
              alt="popup"
              className="w-full h-auto max-h-[90vh] 2xl:max-h-[95vh] object-contain rounded shadow-2xl"
            />
            <button
              className="absolute top-3 right-3 text-white text-3xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setPopupImg(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
