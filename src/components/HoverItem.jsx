"use client";
import { useState } from "react";
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
      className={` w-[180px] sm:w-[220px]  lg:w-[330px] hover:scale-95  hover:shadow-md duration-400 mx-4 group overflow-hidden relative bg-center bg-cover bg-no-repeat sm:h-[300px] h-[240px] lg:h-[480px] rounded-full ${className}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mask duration-400 group-hover:opacity-50 bg-[#333] absolute z-10 w-full h-full top-0 left-0 opacity-0"></div>

      {hovered && (
        <div className="text flex absolute z-50 inset-0 items-center justify-center">
          <GsapText
            text={text}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
            lineHeight={lineHeight}
            className="text-center w-[60%] !text-[1.4rem] w- mx-auto leading-none !text-white tracking-widest inline-block mb-0 h-auto"
          />
        </div>
      )}
    </div>
  );
}

export default HoverItem;
