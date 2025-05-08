"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import "./about.css";
import TextScroll from "../../components/TextScroll/page";
import React, { useState } from "react";
import Image from "next/image";
import GsapText from "../../components/RevealText/index";

export default function About() {
  return (
    <ReactLenis root>
      {/* <TextScroll /> */}
      <div className="max-w-[1920px] mx-auto">
        <section className="section-hero pt-[18vh]">
          <div className=" mx-auto w-[98%]">
            <GsapText
              text="宜融"
              id="gsap-intro"
              fontSize="2.3rem"
              fontWeight="500"
              color="#000"
              className="text-center inline-block mb-0 h-auto "
            />
          </div>
          <div className="mx-auto w-[98%]">
            <div className="title">
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-center items-center">
                  <GsapText
                    text="Thinking"
                    id="gsap-intro"
                    fontSize="1.8rem"
                    fontWeight="500"
                    color="#000"
                    className="text-center inline-block mb-0 h-auto "
                  />{" "}
                  <span className="mx-3">/</span>
                  <GsapText
                    text="建築思維"
                    id="gsap-intro"
                    fontSize="1.8rem"
                    fontWeight="500"
                    color="#333"
                    className="text-center inline-block mb-0 h-auto "
                  />
                </div>
                <p className="max-w-[500px] mb-10 leading-loose tracking-widest">
                  為實現客戶的夢想，我們始終重視對話。我們傾聽每一位客戶的需求，
                  並根據個別的生活方式提供建議，共同建造理想的居所。透過共同的努力，我們提供安穩與滿足。
                </p>
              </div>
            </div>
            <div className="img w-full overflow-hidden ">
              <Image
                alt="建築思維"
                src="https://niwahouzing.com/wp-content/themes/niwa/assets/images/about/img-about-head_pc.avif"
                width={2500}
                height={900}
                className=" w-full  object-cover"
                placeholder="empty"
                loading="eager"
              />
            </div>
          </div>
        </section>
        <section className="description py-[10vh]">
          <div className="flex flex-col xl:flex-row">
            <div className="w-full mx-auto lg:w-[30%] p-10">
              <GsapText
                text="宜融實在的構築"
                id="gsap-intro"
                fontSize="2.3rem"
                fontWeight="500"
                color="#000"
                className="text-center inline-block mb-0 h-auto "
              />
            </div>
            <div className="w-full mx-auto lg:w-[70%] flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 p-4 sm:p-6 xl:p-10">
                <p className="leading-loose text-[.9rem] text-gray-700 max-w-full sm:max-w-[85%] tracking-widest">
                  在宜園建設，我們始終相信——建築，不只是空間的堆砌，更是生活的承載與夢想的實現。
                  <br />
                  <br />
                  我們的建築思維，從來不是追求表面形式的華麗，而是深耕每一寸土地、傾聽每一位居住者的聲音，將「人」、「空間」、「環境」三者融合為一體。從規劃設計到施工細節，我們堅持每一棟建築都要具備永續性、機能性與美學價值。
                  <br />
                  <br />
                  我們思考的不只是現在，而是未來。宜園建設積極導入綠建築理念與智慧化系統，打造與自然共生、與城市共榮的住宅環境。每一道光影流動、每一個空間轉角，都承載著我們對「宜居生活」的理想藍圖。建築，是一種態度。我們用心構築的不只是房子，而是一個能讓人安心生活、世代傳承的家。
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col p-4 sm:p-6 xl:p-10">
                <p className="leading-loose text-gray-700 max-w-full sm:max-w-[85%] tracking-widest text-[.9rem]">
                  我們始終致力於提供高品質的施工，並承諾提供可靠的服務。從使用的材料到施工方法，我們不斷追求細節，努力每天都能交付令客戶滿意的住屋。基於至今所建立的信任和實績，我們希望能夠持續發展，成為對社區有所貢獻的企業。我們將客戶之間的信任關係放在首位，並希望能建立長久的夥伴關係。最後，若想與我們共同打造理想的住家，請隨時與我們聯繫。真正任性的你，正是我們能提供幫助的對象。我們全體員工衷心期待您的來臨。
                </p>
                <div className="img mt-8">
                  <Image
                    src="https://niwahouzing.com/wp-content/uploads/2024/10/6ac2397867767a902ce2217f0a58282f-18.jpg"
                    alt="內文圖片"
                    width={2500}
                    height={900}
                    priority={true}
                    className="group-hover:scale-110 duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_content sm:w-[80%] w-[85%] xl:w-[60%] mx-auto ">
          <div className="title sm:py-[20px] py-0  border-b-1 border-gray-300">
            <h1 className="font-normal text-[2rem]">
              「不熱也不冷」 世界標準的房子。
            </h1>
            <p>
              被動設計是指最大限度地利用太陽、風等自然能源，創造舒適節能的居住環境的設計思想和設計方法。
            </p>
          </div>
          <div className="border-b-1 border-gray-300 py-[20px] my-5 ">
            <GsapText
              text="被動設計的特點"
              id="gsap-intro"
              fontSize="2.3rem"
              fontWeight="500"
              color="#000"
              className="text-center inline-block mb-0 h-auto "
            />
            <div className="flex flex-col sm:flex-row gap-5">
              <div className=" w-full sm:w-1/2">
                <Image
                  src="/images/feature-passive-design01.png"
                  alt="被動設計1"
                  width={900}
                  height={550}
                  className="w-full"
                  placeholder="empty"
                  loading="lazy"
                />
              </div>
              <div className=" w-full sm:w-1/2">
                <Image
                  src="/images/feature-passive-design02.png"
                  alt="被動設計2"
                  width={900}
                  height={550}
                  placeholder="empty"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="py-[20px] lg:py-[100px] my-5 border-b-1 border-gray-300">
            <GsapText
              text="高氣密、高隔熱"
              id="gsap-intro"
              fontSize="2.3rem"
              fontWeight="500"
              color="#000"
              className="text-center inline-block mb-0 h-auto "
            />
            <div>
              <Image
                src="/images/feature-passive-design03.png"
                alt="高氣密高隔熱"
                width={1700}
                height={550}
                className="w-full"
                placeholder="empty"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
