import React from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import AnimatedLink from "../AnimatedLink";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
export default function Content() {
  // ✅ 修正卡住滾動的 bug：每次進入頁面都清除 .page-transition
  useEffect(() => {
    document.body.classList.remove("page-transition");
    sessionStorage.removeItem("transitioning"); // 順便清除狀態
  }, []);
  const placeholders = [
    "理想的家，該具備哪些元素？",
    "選擇房子時，你最在意什麼？",
    "如何找到兼具品質與舒適的住宅？",
    "買房是投資還是生活選擇？",
    "未來的家，會是什麼模樣？",
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div
      id="dark-section"
      className="pb-2  pt-20 sm:pt-[300px] md:pt-[360px] xl:pt-[380px] 2xl:pt-[350px] bg-[url('/images/hero-img/footer03.png')] bg-left bg-no-repeat bg-cover py-8 2xl:px-[200px] lg:px-[150px] px-[40px] h-full  w-full flex flex-col justify-center"
    >
      <Section2 />
      <div className=" md:w-1/2 max-w-[900px] flex justify-start"></div>
      {/* <Marquee className="mb-12">
        <div className="flex justify-center items-center">
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[5.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
          <b className="text-[4.3vmin] mr-3 font-normal text-gray-50">
            YI YUAN BUILDING DESIGN
          </b>
        </div>
      </Marquee> */}
    </div>
  );
}

const Section2 = () => {
  const placeholders = [
    "理想的家，該具備哪些元素？",
    "選擇房子時，你最在意什麼？",
    "如何找到兼具品質與舒適的住宅？",
    "買房是投資還是生活選擇？",
    "未來的家，會是什麼模樣？",
  ];
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex justify-end flex-col">
      <Nav />

      <div className="copy flex  flex-col lg:flex-row  border-b-1 border-white pb-4">
        <div className="flex flex-col w-full lg:w-1/2  items-start justify-start">
          <h1 className="text-[2rem] text-gray-100 leading-[0.8] mt-10">
            Kuankoshi
          </h1>
          {/* <p className="text-[.9rem] text-gray-200 font-light">
            Copyright © 2023︎ Ait Design Inc.
          </p> */}
          <p className="text-[.9rem] text-gray-200 font-light">
            Copyright © {new Date().getFullYear()} 寬越室內設計
          </p>
        </div>
        <div className="flex w-full lg:w-1/2 py-8 lg:py-0 justify-center sm:justify-start lg:justify-end   flex-col items-center sm:items-start lg:items-end">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
          ;
          <p className="text-[.9rem] text-gray-200 font-light">
            {" "}
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
        <h3 className="mb-2 uppercase text-gray-200">ABOUT</h3>
        <AnimatedLink href="/about">
          <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            設計理念
          </p>
        </AnimatedLink>
        <AnimatedLink href="/ServiceProcess">
          <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            服務流程
          </p>
        </AnimatedLink>
        <AnimatedLink href="/qa">
          <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            客戶提問
          </p>
        </AnimatedLink>
        <AnimatedLink href="/news">
          <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            設計誌
          </p>
        </AnimatedLink>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-gray-200">PROJECT</h3>
        <AnimatedLink href="https://www.kuankoshi.com/project?cat=renovation-restoration">
          <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            老屋翻新
          </p>
        </AnimatedLink>
        <AnimatedLink href="https://www.kuankoshi.com/project?cat=special-offers">
          <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            小資專案
          </p>
        </AnimatedLink>
        <AnimatedLink href="https://www.kuankoshi.com/project?cat=commercial-public">
          <p className="text-gray-400 font-light  text-[.85rem] hover:text-gray-300 duration-500 hover:font-bold">
            商業空間
          </p>
        </AnimatedLink>
      </div>
    </div>
  );
};
