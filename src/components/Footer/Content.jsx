"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Content() {
  useEffect(() => {
    document.body.classList.remove("page-transition");
    sessionStorage.removeItem("transitioning");
  }, []);

  return (
    <div
      id="dark-section"
      className="pt-20 sm:pt-[350px] h-full md:pt-[460px] xl:pt-[460px] 2xl:pt-[450px] bg-cover bg-no-repeat bg-left bg-[url('/images/hero-img/footer03.webp')] w-full px-[40px] lg:px-[150px] 2xl:px-[200px] pb-2"
    >
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="flex flex-col justify-end">
      <Nav />

      <div className="copy flex flex-col lg:flex-row border-b border-white pb-4">
        <div className="flex flex-col w-full lg:w-1/2 items-start justify-start">
          <h1 className="text-[2rem] text-gray-100 font-mode leading-[0.8]">
            Kuankoshi
          </h1>
          <p className="text-[.9rem] text-gray-200 font-light">
            Copyright © {new Date().getFullYear()} 寬越室內設計
          </p>
        </div>
        <div className="flex w-full lg:w-1/2 py-8 lg:py-0 justify-center sm:justify-start lg:justify-end flex-col items-center sm:items-start lg:items-end">
          <p className="text-[.9rem] text-gray-200 font-light">
            Design by 極客網頁設計
          </p>
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-200 font-mode">ABOUT</h3>
        <Link href="/about">
          <p className="text-gray-400 font-light text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            設計理念
          </p>
        </Link>
        <Link href="/ServiceProcess">
          <p className="text-gray-400 font-light text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            服務流程
          </p>
        </Link>
        <Link href="/qa">
          <p className="text-gray-400 font-light text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            裝修Q&A
          </p>
        </Link>
        <Link href="/news">
          <p className="text-gray-400 font-light text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            設計誌
          </p>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-200 font-mode">PROJECT</h3>
        <Link href="https://www.kuankoshi.com/project?cat=renovation-restoration">
          <p className="text-gray-400 font-light text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            老屋翻新
          </p>
        </Link>
        <Link href="https://www.kuankoshi.com/project?cat=special-offers">
          <p className="text-gray-400 font-light text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            優惠方案
          </p>
        </Link>
        <Link href="https://www.kuankoshi.com/project?cat=commercial-public">
          <p className="text-gray-400 font-light text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            商業空間
          </p>
        </Link>
      </div>
    </div>
  );
};
