import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <div
      id="dark-section"
      className="relative h-[500px] sm:h-[500px] lg:h-[440px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative  h-[calc(100vh+500px)] sm:h-[calc(100vh+500px)] lg:h-[calc(100vh+440px)] -top-[100vh]">
        <div className=" h-[500px] sm:h-[800px] bottom-0 sticky top-[calc(100vh-500px)]  sm:top-[calc(100vh-800px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}
