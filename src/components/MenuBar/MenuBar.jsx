"use client";

import React from "react";
import Link from "next/link";
import "./MenuBar.css";
import Image from "next/image";
import MenuBtn from "../MenuBtn/MenuBtn";
import AnimatedLink from "../AnimatedLink";

const MenuBar = ({ isOpen, toggleMenu, closeMenu }) => {
  const navItems = [
    { label: "設計理念", href: "/about" },
    { label: "空間案例", href: "/project" },
    { label: "聯繫我們", href: "/contact" },
    { label: "服務流程", href: "/ServiceProcess" },
    { label: "裝修Q&A", href: "/qa" },
    { label: "設計誌", href: "/news" },
  ];

  return (
    <div className="menu-bar  py-0 my-0 bg-white flex items-center justify-between fixed top-0 left-0 w-full px-0 md:px-8 2xl:px-10  z-10">
      {/* Logo區 */}
      <div className="flex items-center cursor-pointer" onClick={closeMenu}>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/company-logo-2.webp"
            alt="logo"
            width={65}
            height={65}
            priority
            unoptimized // ✅ 關閉 Next.js 圖片優化，避免首次延遲
            className="w-[65px] h-auto"
          />
          <span className="ml-2 font-mode !textblack text-base md:text-lg">
            寬越設計
          </span>
        </Link>
      </div>

      {/* 導覽列 */}
      <div className="hidden md:flex gap-6 items-center">
        {navItems.map(({ label, href }) => (
          <AnimatedLink href={href} key={label}>
            <button
              className={`group relative font-medium  flex items-center justify-center`}
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] font-mode text-sm md:text-base group-hover:skew-y-12 !text-black  flex items-center">
                  {label}
                </div>
                <div className="absolute font-mode text-sm md:text-base translate-y-[110%] skew-y-12 transition duration-500 !text-black  group-hover:translate-y-0 group-hover:skew-y-0  flex items-center">
                  {label}
                </div>
              </span>
            </button>
          </AnimatedLink>
        ))}
      </div>

      {/* Menu 按鈕 */}
      {/* Menu 按鈕 */}
      <div className="flex">
        <div className="flex mr-4">
          <Link
            className="hidden sm:block"
            href="https://line.me/ti/p/5vNeu3b_5f"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              className="mx-2 w-[35px] h-[35px]  2xl:w-[45px] 2xl:h-[45px]"
            >
              <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61550958051323"
            target="_blank"
            className="hidden sm:block"
          >
            <svg
              className="mx-2 w-[35px] h-[35px]  2xl:w-[45px] 2xl:h-[45px]"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
            >
              <path d="M44,24H4c0,0.338,0,1.662,0,2c0,11.028,8.972,20,20,20s20-8.972,20-20C44,25.662,44,24.338,44,24z"></path>
              <circle cx="24" cy="24" r="19" fill="#fff"></circle>
              <path d="M24,44C12.972,44,4,35.028,4,24S12.972,4,24,4s20,8.972,20,20S35.028,44,24,44z M24,6C14.075,6,6,14.075,6,24	s8.075,18,18,18s18-8.075,18-18S33.925,6,24,6z"></path>
              <path d="M26.573,29.038h4.921l0.765-4.993h-5.686V21.31c0-2.078,0.675-3.913,2.618-3.913h3.122v-4.363	c-0.549-0.072-1.709-0.234-3.895-0.234c-4.579,0-7.26,2.411-7.26,7.917v3.329h-4.696v4.993h4.696v13.728	C22.093,42.901,23.028,43,24,43c0.873,0,1.727-0.081,2.573-0.198V29.038z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.100.com.tw/11283"
            target="_blank"
            className="hidden sm:block"
          >
            <Image
              src="https://visualpharm.com/assets/861/100-595b40b75ba036ed117d4e17.svg"
              alt="icon"
              width={100}
              height={100}
              className="w-[35px] h-[35px]  2xl:w-[45px] 2xl:h-[45px] mx-2"
            />
          </Link>
        </div>
        <div className="ml-8 mr-0">
          <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
