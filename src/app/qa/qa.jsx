"use client";

import { useRef } from "react";
import ScrollAnimate from "../../components/ScrollAnimation/page.jsx";
// import SvgImg from "../../components/SVGImage.jsx";
// import HeroSlider from "../../components/HeroSlideContact/page";
import { Accordion, AccordionItem } from "@heroui/react";
import Character from "../../components/TextOpacityScroll/Character.jsx";
import GsapText from "../../components/RevealText/index";
import MotionImage from "../../components/MotionImage.jsx";

import Swiper from "../../components/SwiperCarousel/SwiperCardFood.jsx";
import Image from "next/image";
// import HoverCard from "../../components/HoverCardBuild/index";
import gsap from "gsap";
// import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input.js";
// import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
// import ImageDistortion from "../../components/ImageDistortion/page.jsx";

const QaClient = () => {
  gsap.registerPlugin(CustomEase);

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
    <>
      {/* Hero 區塊 */}
      {/* <section className="section_hero">
        <HeroSlider />
      </section> */}
      <section>
        <div>
          <ScrollAnimate />
        </div>
      </section>
      {/* 輪播區 */}
      <section className="section-padding">
        <Swiper />
      </section>

      {/* 動畫區 */}

      {/* 室內設計問題 區 */}
      <section className="section-qa section-padding flex flex-col items-center justify-center">
        <div className="w-[90%] max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-center ">
          {/* 左邊字：標籤 */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <span className="text-[1rem] md:text-[1.2rem] text-gray-800 rotate-0 md:rotate-90">
              LIFE - DESIGN
            </span>
          </div>

          {/* 右邊主標 + 說明 */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
            <h2 className="text-[6vw] md:text-[2.4rem] leading-snug text-gray-900 font-normal">
              瞭解更多室內設計
              <br />
              相關問題
            </h2>
            <div className="line bg-black h-[1px] w-[80px] my-4"></div>
            <p className="text-gray-800 text-sm md:text-base font-light max-w-[400px]">
              想知道更多關於室內設計流程或者相關問題
            </p>
          </div>
        </div>

        {/* QA 卡片區塊 */}
        <div className="flex flex-col md:flex-row gap-6 mt-12 items-center justify-center w-full max-w-[1280px] px-4">
          {[
            {
              title1: "設計階段有哪些？",
              title2: "流程說明",
              tag: "設計流程",
              desc: "從丈量、平面規劃、3D 模擬到工程監工，各階段職責清楚明確。",
              img: "/images/taiwan.png",
            },
            {
              title1: "我可以修改設計嗎？",
              title2: "變更設計",
              tag: "合約範圍",
              desc: "在簽約與施工前都有設計修正空間，避免後續爭議與加價。",
              img: "/images/006-LINE_ALBUM_皇普熊S_250105_1.jpg",
            },
            {
              title1: "施工期要多久？",
              title2: "時間預估",
              tag: "工期問題",
              desc: "小坪數約需 1～2 個月，大坪數或複雜設計視情況而定。",
              img: "/images/472924349_122231002496031935_632063641721647926_n.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center w-full sm:w-[80%] md:w-[320px] overflow-hidden"
            >
              <div className="overflow-hidden w-full">
                <Image
                  src={item.img}
                  alt={`qa-item-${i}`}
                  width={1000}
                  height={2000}
                  className="w-full h-auto group-hover:scale-110 group-hover:rounded-[40px] transition-all duration-700"
                />
              </div>
              <div className="flex flex-col py-4 items-start w-full px-2">
                <span className="text-gray-600 text-sm">- {item.tag}</span>
                <button className="relative h-12 bg-transparent px-2 text-neutral-800 font-semibold">
                  <span className="relative inline-flex overflow-hidden">
                    <div className="translate-y-0 text-[1.1rem] skew-y-0 transition duration-500 group-hover:-translate-y-[119%] group-hover:skew-y-12">
                      {item.title1}
                    </div>
                    <div className="absolute text-[1.1rem] translate-y-[119%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      {item.title2}
                    </div>
                  </span>
                </button>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding px-4">
        <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 px-4">
            <div className="max-w-xl mx-auto">
              <GsapText
                text="我該什麼時候找設計師？買房前還是裝潢前？"
                id="gsap-intro"
                fontSize="20px"
                fontWeight="500"
                lineHeight="60px"
                className="!text-[22px] text-gray-600"
              />
              <Character
                className="text-sm md:text-base text-[#131313] text-left mt-4 leading-relaxed tracking-wide"
                paragraph="這是許多第一次裝修的人最常問的問題。如果你已經有心儀的房子，越早找設計師越好，最佳時機是看房階段或是簽約前後。"
              />
            </div>

            <div className="flex flex-wrap justify-start gap-2 mt-6 px-4">
              {["TEXT", "TEXT", "TEXT", "TEXT", "TEXT"].map((tag, index) => (
                <div
                  key={index}
                  className="border border-dashed border-black rounded-full px-4 py-1 text-sm hover:bg-black hover:text-white transition"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 flex justify-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-lg">
              <MotionImage
                src="/images/news/469002377_122223968186031935_6634981073683725167_n.jpg"
                alt=""
                width={800}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-xl flex flex-col-reverse md:flex-row items-center gap-12 mt-24">
          <div className="w-full md:w-1/2 px-4 flex justify-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-lg">
              <MotionImage
                src="/images/news/468922442_122223968246031935_7782019811319680252_n.jpg"
                alt=""
                width={800}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="max-w-xl mx-auto">
              <GsapText
                text="什麼是軟裝？"
                id="gsap-intro-2"
                fontSize="20px"
                fontWeight="500"
                lineHeight="60px"
                className="!text-[22px] text-gray-600"
              />
              <Character
                className="text-sm md:text-base text-[#131313] text-left mt-4 leading-relaxed tracking-wide"
                paragraph="軟裝指的是不動產結構之外、可替換的可移動家具與裝飾品，包含：沙發、床、窗簾、地毯、掛畫、燈具、抱枕、植栽等。"
              />
            </div>

            <div className="flex flex-wrap justify-start gap-2 mt-6 px-4">
              {["TEXT", "TEXT", "TEXT", "TEXT", "TEXT"].map((tag, index) => (
                <div
                  key={index}
                  className="border border-dashed border-black rounded-full px-4 py-1 text-sm hover:bg-black hover:text-white transition"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 問答展開區 */}
      <section className="question-section py-12 flex justify-end">
        <div className="bg-[#E1E3D9] flex flex-col md:flex-row w-[90%] max-w-[1920px] rounded-tl-[40px] rounded-bl-[40px] overflow-hidden">
          {/* QA 左邊 */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-normal mb-8">常見問題</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                title={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span>預算與報價相關</span>
                      <div className="bg-[#34894f] text-white rounded-full px-3 py-1 text-xs">
                        QA
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="text-gray-700 leading-relaxed space-y-4 text-sm mt-4">
                  <p>裝潢費用怎麼計算？</p>
                  <p>
                    依坪數、設計內容與材料等條件評估，一般每坪價格約落在 1.5
                    萬至 3 萬元，實際需依需求報價。
                  </p>
                  <p>有提供免費估價服務嗎？</p>
                  <p>
                    我們提供初步免費線上預估，正式丈量與規劃後會提供詳細報價單與時間表。
                  </p>
                  <p>設計費包含施工嗎？</p>
                  <p>
                    設計與施工可以分開報價，也可選擇整合方案，我們可依您需求彈性搭配。
                  </p>
                </div>
              </AccordionItem>

              {/* 第二題 */}
              <AccordionItem
                value="item-2"
                title={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span>風格選擇與溝通</span>
                      <div className="bg-[#34894f] text-white rounded-full px-3 py-1 text-xs">
                        QA
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="text-gray-700 leading-relaxed space-y-4 text-sm mt-4">
                  <p>我不知道自己喜歡什麼風格，怎麼辦？</p>
                  <p>
                    我們會透過風格圖卡、空間提問與喜好分析，協助您找到最合適的空間樣貌。
                  </p>
                  <p>設計風格會跟我提供的圖片一樣嗎？</p>
                  <p>
                    我們會以圖片作為參考，並依實際空間比例、預算與建材，進行符合您需求的客製化設計。
                  </p>
                </div>
              </AccordionItem>

              {/* 第三題 */}
              <AccordionItem
                value="item-3"
                title={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span>施工與工期問題</span>
                      <div className="bg-[#34894f] text-white rounded-full px-3 py-1 text-xs">
                        QA
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="text-gray-700 leading-relaxed space-y-4 text-sm mt-4">
                  <p>整體裝修會需要多久？</p>
                  <p>
                    一般小坪數住家（15~25坪）從施工到完工約需
                    1.5～2個月，視工程內容與配合度調整。
                  </p>
                  <p>施工會不會有粉塵、噪音？如何管理？</p>
                  <p>
                    會有，但我們會加裝粉塵布、指定施工時間、使用靜音工具，並派駐現場監工控管品質。
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>

          {/* 圖片右邊 */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-8">
            {/* <Image
              src="https://www.clasishome.jp/wp-content/themes/clasishome/assets/image/front-page/front-contact.jpg"
              alt="contact-img"
              width={800}
              height={1000}
              className="rounded-2xl"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default QaClient;
