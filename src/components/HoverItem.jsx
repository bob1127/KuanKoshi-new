"use client";

import { useState } from "react";
import Image from "next/image";
import GsapText from "../components/RevealText";

function HoverItem({
  imageUrl,
  text = "Built for Living.",
  fontSize = "1.4vmin",
  fontWeight = "200",
  color = "#fff",
  lineHeight = "60px",
  className = "",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative group w-[180px] sm:w-[220px] lg:w-[330px] h-[240px] sm:h-[300px] lg:h-[480px] mx-4 rounded-full overflow-hidden hover:scale-95 hover:shadow-md duration-400 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ✅ 將背景圖改為可 lazy load 的 Image */}
      <Image
        src={imageUrl}
        alt={text}
        fill
        sizes="(max-width: 768px) 180px, 330px"
        className="object-cover"
        loading="lazy"
      />

      {/* ✅ 遮罩 */}
      <div className="mask duration-400 group-hover:opacity-50 bg-[#333] absolute z-10 w-full h-full top-0 left-0 opacity-0"></div>

      {/* ✅ 滑入顯示文字 */}
      {hovered && (
        <div className="text flex absolute z-50 inset-0 items-center justify-center">
          <GsapText
            text={text}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
            lineHeight={lineHeight}
            className="text-center w-[60%] !text-[1.4rem] mx-auto leading-none !text-white tracking-widest inline-block mb-0 h-auto"
          />
        </div>
      )}
    </div>
  );
}

export default HoverItem;
