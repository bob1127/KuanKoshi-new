"use client";

import { useState, useEffect } from "react";

export default function ProjectPostContent({ html }: { html: string }) {
  const [popupImg, setPopupImg] = useState<string | null>(null);

  // 每次 popup 關閉或 html 更新都重新掛載 click 事件
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
      img.removeEventListener("click", handleClick); // 確保不重複綁
      img.addEventListener("click", handleClick);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("click", handleClick);
      });
    };
  }, [html, popupImg]); // 👈 重點：popup 關閉時也重新觸發

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
              className="w-full h-auto max-h-[90vh]  2xl:max-h-[95vh] object-contain rounded shadow-2xl"
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
