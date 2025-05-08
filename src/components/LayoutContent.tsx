"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./header/index.jsx";
import { TextGenerateEffect } from "./ui/text-generate-effect.jsx";

export default function LayoutContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  return (
    <>
      {!isHomePage && (
        <div className="w-[100vw] z-[9999999] left-0 top-0 fixed">
          <Header />
        </div>
      )}
      <main>{children}</main>
      {!isHomePage && (
        <footer className="pb-[150px] z-[-1] pt-[50px]  sm:pt-[100px] lg:pt-[200px] flex flex-col justify-center items-center bg-[#f4efe3]">
          <div
            className="top w-[85%] border md:mb-10 mb-0 flex border-black mx-auto"
            data-aos="fade-up"
          >
            <div className="w-1/2">
              <div className="navgation flex flex-col md:flex-row">
                <div>
                  <button className="relative text-[.9rem] bg-transparent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100">
                    關於我們
                  </button>
                </div>
                <div>
                  <button className="relative text-[.9rem] bg-transparent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100">
                    新案鑑賞
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
          <div
            className="w-[85%] flex flex-col md:flex-row mx-auto bottom"
            data-aos="fade-up"
          >
            <div className="w-full md:w-[55%] flex flex-col">
              <div className="flex flex-row items-center">
                <h2 className="font-extrabold text-[2.2rem] md:text-[4rem] text-nowrap mr-3">
                  Yi Yuan
                </h2>
                <TextGenerateEffect words="宜園建設" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-20" data-aos="fade-up">
            <p className="text-gray-400 font-light text-[.85rem]">
              . Design by 極客網頁設計Jeek
            </p>
          </div>
        </footer>
      )}
    </>
  );
}
