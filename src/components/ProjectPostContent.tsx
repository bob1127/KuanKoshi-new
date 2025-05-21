"use client";

import { useState, useEffect } from "react";

export default function ProjectPostContent({
  html,
  title,
}: {
  html: string;
  title: string;
}) {
  const [popupImg, setPopupImg] = useState<string | null>(null);

  useEffect(() => {
    const container = document.querySelector(".post-content");
    if (!container) return;

    const images = container.querySelectorAll("img");
    let imgIndex = 1;

    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLImageElement;
      setPopupImg(target.getAttribute("src"));
    };

    images.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.removeEventListener("click", handleClick);
      img.addEventListener("click", handleClick);

      // ✅ 強化屬性
      img.setAttribute("loading", "lazy");
      img.setAttribute("decoding", "async");
      if (!img.getAttribute("width")) img.setAttribute("width", "800");
      if (!img.getAttribute("height")) img.setAttribute("height", "600");

      // ✅ 補 alt：專案名稱 + 圖片順序
      const altText = `${title} - 圖片${imgIndex}`;
      img.setAttribute("alt", altText);
      imgIndex++;

      // ✅ 套用 srcset
      const src = img.getAttribute("src");
      if (src) {
        const match = src.match(/(.*?)(-\d+x\d+)?(\.(webp|jpg|jpeg|png))/i);
        if (match) {
          const baseUrl = match[1];
          const ext = match[3];
          const original = `${baseUrl}${ext}`;
          const small = `${baseUrl}-300x300${ext}`;
          const medium = `${baseUrl}-768x768${ext}`;
          const large = `${baseUrl}-1024x1024${ext}`;

          img.setAttribute(
            "srcset",
            `${small} 300w, ${medium} 768w, ${large} 1024w, ${original} 2048w`
          );
          img.setAttribute(
            "sizes",
            "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
          );
        }
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("click", handleClick);
      });
    };
  }, [html, popupImg, title]);

  return (
    <>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

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
