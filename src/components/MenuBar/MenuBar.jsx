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
    { label: "客戶提問", href: "/qa" },
    { label: "設計誌", href: "/news" },
  ];

  return (
    <div className="menu-bar  py-0 my-0 bg-white flex items-center justify-between fixed top-0 left-0 w-full px-0 md:px-8 2xl:px-10  z-10">
      {/* Logo區 */}
      <div className="flex items-center cursor-pointer" onClick={closeMenu}>
        <AnimatedLink href="/" className={`flex items-center `}>
          <Image
            src="/images/logo/company-logo.jpg"
            alt="logo"
            placeholder="empty"
            loading="eager"
            width={50}
            height={50}
            className="w-[40px] md:w-[70px] h-auto"
          />
          <span className="ml-2 !textblack text-base md:text-lg">寬越設計</span>
        </AnimatedLink>
      </div>

      {/* 導覽列 */}
      <div className="hidden md:flex gap-6 items-center">
        {navItems.map(({ label, href }) => (
          <AnimatedLink href={href} key={label}>
            <button
              className={`group relative font-medium  flex items-center justify-center`}
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] font-normal text-sm md:text-base group-hover:skew-y-12 !text-black  flex items-center">
                  {label}
                </div>
                <div className="absolute font-normal text-sm md:text-base translate-y-[110%] skew-y-12 transition duration-500 !text-black  group-hover:translate-y-0 group-hover:skew-y-0  flex items-center">
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
            href="https://www.instagram.com/kk0927886699"
            target="_blank"
          >
            <svg
              className="mx-2 w-[35px] h-[35px]  2xl:w-[45px] 2xl:h-[45px]"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
            >
              <path d="M17,43h14c5.523,0,10-4.477,10-10v-2H7v2C7,38.523,11.477,43,17,43z"></path>
              <path
                fill="#fff"
                d="M32,40H16c-4.418,0-8-3.582-8-8V16c0-4.418,3.582-8,8-8h16c4.418,0,8,3.582,8,8v16	C40,36.418,36.418,40,32,40z"
              ></path>
              <path d="M32,41H16c-4.962,0-9-4.038-9-9V16c0-4.962,4.038-9,9-9h16c4.962,0,9,4.038,9,9v16C41,36.962,36.962,41,32,41z M16,9	c-3.86,0-7,3.14-7,7v16c0,3.86,3.14,7,7,7h16c3.86,0,7-3.14,7-7V16c0-3.86-3.14-7-7-7H16z"></path>
              <path d="M24,15c-4.962,0-9,4.038-9,9s4.038,9,9,9s9-4.038,9-9S28.962,15,24,15z M24,31c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7	S27.86,31,24,31z"></path>
              <circle cx="33.5" cy="14.5" r="1.5"></circle>
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
        <div className="ml-8 mr-5">
          <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
