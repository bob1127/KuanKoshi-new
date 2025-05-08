"use client";
// import { TransitionLink } from "../../components/utils/TransitionLink";
// import React from "react";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import LightBox from "../../components/LightBox/page";
import ParallaxImage from "../../components/ParallaxImage";
import { Timeline } from "@/components/ui/timeline";
import { EvervaultCard, Icon } from "../../components/ui/evervault-card";

import HeroSlider from "../../components/HeroSlider/page";
import { NumberTicker } from "../../../src/components/magicui/number-ticker";
import HoverExpand from "../../components/HoverExpand/page";
import { ReactLenis } from "@studio-freight/react-lenis";
import GsapText from "../../components/RevealText";

import { Carousel, Card } from "../../components/ui/apple-cards-carousel";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import InfiniteCarousel from "../../components/InfiniteScroll/page";
import "./page.css";
export default function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["full"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const data01 = [
    {
      title: "2024 年 3 月｜最新工程進度",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            第一階段：地下室工程完成（基礎結構已完工，進入地上層施作）
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/inasato71.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/RIMG6747.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 年 3 月｜最新工程進度",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            第一階段：地下室工程完成（基礎結構已完工，進入地上層施作）
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/inasato71.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/RIMG6747.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 年 3 月｜最新工程進度",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            第一階段：地下室工程完成（基礎結構已完工，進入地上層施作）
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2025/01/siozakisousuikan2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/inasato71.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://kakumagumi.com/cms/wp-content/uploads/2024/12/RIMG6747.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <ReactLenis root>
      <HeroSlider />
      <section className="section_main_building w-[95%] sm:w-[85%] lg:w-[60%] py-[100px] mx-auto flex flex-col justify-center items-center">
        <div>
          <div className="relative w-full">
            <div className="absolute w-full h-full">
              <div className="flex text-[2.3vmin] text-white w-full h-full justify-center items-center">
                YI YUAN BUILDING
              </div>
            </div>
            <img
              src="https://lifejam.co.jp/img_index/ph_choyo-seibu-public-housing.jpg"
              placeholder="empty"
              loading="lazy"
              width={1300}
              height={800}
              alt="project_building"
            ></img>
          </div>
          <div className="w-[25%] mt-5">
            <span className="text-[1.2vmin] font-light text-gray-600">
              買取型災害公営住宅 長陽西部団地
            </span>
            <br></br>
            <span className="text-[1.2vmin] font-light text-gray-600">
              minamiaso village, aso district, kumamoto 2019
            </span>
          </div>
        </div>
        <div className=" w-[95%]  mt-[50px] sm:w-[80%] 2xl:w-[900px] mx-auto">
          <div className="flex flex-col md:flex-row w-full ">
            <div className="w-full md:w-[80%] xl:w-[90%] p-8 items-center flex flex-col justify-center border-gray-400 border-b-1 border-r-1 ">
              {" "}
              <div className="flex flex-row justify-center items-center">
                <NumberTicker
                  value={103}
                  className="whitespace-pre-wrap flex justify-center text-8xl font-medium tracking-tighter text-black dark:text-white"
                />{" "}
                <div className="text-[40px] mx-2">-</div>
                <NumberTicker
                  value={132}
                  className="whitespace-pre-wrap flex justify-center text-8xl font-medium tracking-tighter text-black dark:text-white"
                />
                <div className="text-[1.3vmin] text-[#898989] mx-2">坪</div>
              </div>
              <div>
                <h4 className="text-[2vmin] font-bold">建坪</h4>
              </div>
            </div>
            <div className="w-full md:w-[50%] p-8 xl::w-[40%]  items-center flex flex-col justify-center border-gray-400 border-r-1 md:border-r-0 border-b-1 ">
              {" "}
              <div className="flex flex-row justify-center items-center">
                <NumberTicker
                  value={28}
                  className="whitespace-pre-wrap flex justify-center text-8xl font-medium tracking-tighter text-black dark:text-white"
                />{" "}
                <div className="text-[40px] mx-2">-</div>
                <NumberTicker
                  value={52}
                  className="whitespace-pre-wrap flex justify-center text-8xl font-medium tracking-tighter text-black dark:text-white"
                />
                <div className="text-[1.3vmin] text-[#898989] mx-2">坪</div>
              </div>
              <div>
                <h4 className="text-[2vmin] font-bold">地坪</h4>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[95%] sm:w-[80%] 2xl:w-[900px] mx-auto">
          <div className="flex w-full ">
            <div className="w-[25%] p-8 flex flex-col justify-center items-center border-gray-400 border-b-1 border-r-1">
              {" "}
              <NumberTicker
                value={15}
                className="whitespace-pre-wrap text-8xl font-medium tracking-tighter flex justify-center text-black dark:text-white"
              />{" "}
              <div>
                <h4 className="text-[2vmin] font-bold">戶數</h4>
              </div>
            </div>
            <div className="w-[35%] flex flex-col justify-center items-center border-gray-400 border-b-1 border-r-1">
              {" "}
              <NumberTicker
                value={535}
                className="whitespace-pre-wrap flex justify-center text-8xl font-medium tracking-tighter text-black dark:text-white"
              />
              <div>
                <h4 className="text-[2vmin] font-bold">基地面積</h4>
              </div>
            </div>
            <div className="w-[40%] p-8 items-center flex flex-col justify-center border-gray-400 border-b-1  ">
              {" "}
              <div className="flex flex-row justify-center items-center">
                <div className="text-[1.3vmin] mx-2">地上</div>
                <NumberTicker
                  value={6}
                  className="whitespace-pre-wrap flex justify-center text-8xl font-medium tracking-tighter text-black dark:text-white"
                />{" "}
                <div className="text-[1.3vmin] mx-2">層</div>
                <div className="text-[1.3vmin] ml-5">地下</div>
                <NumberTicker
                  value={1}
                  className="whitespace-pre-wrap flex justify-center text-8xl font-medium tracking-tighter text-black dark:text-white"
                />
                <div className="text-[1.3vmin] text-[#898989] mx-2">層</div>
              </div>
              <div>
                <h4 className="text-[2vmin] font-bold">樓層規劃</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full overflow-hidden ">
        <Timeline data={data01} />
      </div>
      <div className="bg-white ">
        <TextParallaxContent
          imgUrl="https://www.31sumai.com/content/dam/31sumai/mfr/F2471/top/main_img01.jpg"
          subheading="宜居"
          heading="坐落在13期的心臟."
          description="在富人區的心臟地帶，坐落著一座如詩如畫的豪墅，猶如隱匿於繁華中的藝術品。
這裡每一個角落，都洋溢著優雅與創意，流動著生活的靈感。開放式的設計，將自然光與恬靜的景觀融為一體，讓這座豪墅成為您藝術人生的一部分，帶您邁向夢想的明天。"
        >
          <ExampleContent />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl="https://www.31sumai.com/content/dam/31sumai/mfr/B2301/top/topimage_02.jpg"
          subheading="宜園建設"
          heading="為您打造無可
比擬的居住體驗"
          description="在宜園建設的每一個家中，空間規劃無不考量到居住者的需求與舒適。大面積的開放式設計，帶來豐富的自然光線，讓每個角落都充滿生機。廚房、衛浴的每一處細節，都選用頂級材質，無論是煮飯還是休息，都是一場享受。"
        ></TextParallaxContent>
      </div>

      <section className="w-full section_carousel h-full py-20">
        <Carousel items={cards} />
      </section>

      {/* <HoverExpand /> */}
    </ReactLenis>
  );
}
const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  description,
  subheading,
  heading,
  children,
}) => {
  return (
    <div>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy
          heading={heading}
          subheading={subheading}
          description={description}
        />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.99]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden "
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, description }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-[200vh] px-[5%] sm:px-[8%] lg:px-[10%] 2xl:px-[15%]  flex-col pb-[50vh] items-start justify-center text-white"
    >
      <p className="mb-2 text-center text-[2.3rem] md:mb-4 ">{subheading}</p>
      <p className="text-left  w-full lg:w-2/3 leading-relaxed font-bold text-[2rem] 2xl:text-[2.3rem]">
        {heading}
      </p>
      <p className="w-full lg:w-2/3 xl:w-1/2  text-[1rem] leading-loose mt-5">
        {description}
      </p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <section className="mx-auto pb-[100px]">
    <div className=" py-[50px] w-[80%] mx-auto  flex flex-col justify-center items-center">
      <h2 data-aos="fade-up" className="text-[2.2rem] text-center ">
        幸福生活，從宜園開始{" "}
        <p
          data-aos="fade-up"
          data-delay=".5s"
          className="mt-4 text-black text-[2rem]"
        >
          「宜園建設，築夢家園」
        </p>
      </h2>

      <p className=" text-[.9rem] mt-5 text-center w-[80%] md:w-[60%] 2xl:w-[50%] leading-relaxed text-black font-light">
        在喧囂的城市中，宜園建設秉持著「以人為本」的理念，打造的不僅是房子，而是您夢想中的家園。
        <br></br>
        我們重視每一個細節，從設計到施工，每一個角落都經過精心規劃，只為給您一個舒適、溫暖、安全的家。
      </p>
      <div className="mb-8 text-xl text-neutral-600 md:text-2xl"></div>
    </div>
    <section className="w-full section_lightbox overflow-hidden">
      <div className=" flex justify-center">
        <LightBox />
      </div>
    </section>
  </section>
);

// others data
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14  mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-medium font-sans max-w-3xl mx-auto">
              <span className="font-bold text-[20px] text-neutral-700 dark:text-neutral-200">
                臨近繁華，與自然共生
              </span>{" "}
              周邊環境方面，宜園建設為您精心選擇了理想的生活圈。社區周邊生活機能豐富，無論是超市、學校還是醫療機構，應有盡有。交通便捷，讓您無論是通勤還是外出，都能輕鬆迅速。
            </p>
            <Image
              src="https://hadashinoie.co.jp/app/wp-content/uploads/2024/05/2B3A0382-2048x1365.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://www.31sumai.com/content/dam/31sumai/mfr/F2471/top/main_img01.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://www.31sumai.com/content/dam/31sumai/mfr/X2114/top/top_img14.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://www.31sumai.com/content/dam/31sumai/mfr/F2241/top/main_gaikan.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://www.31sumai.com/content/dam/31sumai/mfr/B2223/top/img15.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://www.31sumai.com/content/dam/31sumai/mfr/B2307/floor_plan/btn_plan3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://hadashinoie.co.jp/app/wp-content/uploads/2024/06/20230121-2B3A0074-2048x1365.jpg",
    content: <DummyContent />,
  },
];
