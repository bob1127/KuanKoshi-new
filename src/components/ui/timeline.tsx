"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "./text-generate-effec-home";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const data: TimelineEntry[] = [
  {
    title: "STEP1 會談・溝通",
    content: (
      <div className="w-full">
        <div className="tag bg-rose-500 mb-4 rounded-full text-white font-bold w-32 flex justify-center items-center px-4 py-2">
          FREE
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
          了解屋況，裝修需求、想法，預算考量，風格喜好等…
        </p>
        <Image
          src="/images/服務流程/服務流程-STEP1會談_溝通|寬越設計.png"
          alt="STEP1 會談_溝通"
          width={800}
          height={450}
          placeholder="empty"
          loading="lazy"
          className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "STEP2 現勘・丈量",
    content: (
      <div className="w-full">
        <div className="tag bg-rose-500 mb-4 rounded-full text-white font-bold w-32 flex justify-center items-center px-4 py-2">
          FREE
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
          環境勘查，丈量拍照，初步規劃想法討論。
        </p>
        <Image
          src="/images/服務流程/服務流程-STEP2現勘_丈量|寬越設計.png"
          alt="STEP2 現勘_丈量"
          width={800}
          height={450}
          placeholder="empty"
          loading="lazy"
          className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "STEP3 平面配置・初步估價",
    content: (
      <div className="w-full">
        <div className="tag bg-rose-500 mb-4 rounded-full text-white font-bold w-32 flex justify-center items-center px-4 py-2">
          FREE
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
          平面空間動線規劃，設計風格簡報，初步估價，規劃預算。
        </p>
        <Image
          src="/images/服務流程/服務流程-STEP3平面配置＿初步估價|寬越設計.png"
          alt="STEP3 平面配置初步估價"
          width={800}
          height={450}
          placeholder="empty"
          loading="lazy"
          className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "STEP4 設計合約",
    content: (
      <div className="w-full">
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
          確認配置及風格，進行設計合約之簽訂，繪製平面系統施工圖及3D模擬彩圖。
        </p>
        <Image
          src="/images/服務流程/服務流程-STEP4設計合約|寬越設計.png"
          alt="STEP4 設計合約"
          width={800}
          height={450}
          placeholder="empty"
          loading="lazy"
          className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "STEP5 細節討論・彩圖修正",
    content: (
      <div className="w-full">
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
          設計、建材細項討論， 空間氛圍、材質，配色調整。
        </p>
        <Image
          src="/images/服務流程/服務流程-STEP5細節討論＿彩圖修正|寬越設計.png"
          alt="STEP5 細節討論"
          width={800}
          height={450}
          placeholder="empty"
          loading="lazy"
          className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "STEP6 工程合約",
    content: (
      <div className="w-full">
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
          設計確定，進行工程合約之簽訂， 制定完工時間及收款方式。
        </p>
        <Image
          src="/images/服務流程/服務流程-STEP6工程合約|寬越設計.png"
          alt="STEP6 工程合約"
          width={800}
          height={450}
          placeholder="empty"
          loading="lazy"
          className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "STEP7 工程執行・交屋驗收",
    content: (
      <div className="w-full">
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
          依照工程進度施作， 完工後進行交屋驗收。
        </p>
        <Image
          src="/images/服務流程/服務流程-STEP7驗收交屋|寬越設計.png"
          alt="STEP7 工程執行"
          width={800}
          height={450}
          placeholder="empty"
          loading="lazy"
          className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "STEP8 完工保固",
    content: (
      <div className="w-full">
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
          提供一年維修保固，終身免費諮詢工程維修事宜及服務。
        </p>
        <Image
          src="/images/服務流程/服務流程-STEP8完工保固|寬越設計.png"
          alt="STEP8 完工保固"
          width={800}
          height={450}
          placeholder="empty"
          loading="lazy"
          className="rounded-2xl object-cover w-full h-[450px] shadow-lg"
        />
      </div>
    ),
  },
];

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full pt-[160px] dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="title flex justify-center flex-col items-center mx-auto w-[85%] sm:w-full">
          <TextGenerateEffect words="服務流程" />
          <p
            data-aos="fade-up-blur"
            data-aos-delay="1s"
            className="mt-4 text-center font-normal text-black text-sm max-w-sm"
          >
            感謝您對本建案的支持與關注！為了讓您即時掌握最新的施工進度，我們將定期更新工程狀況，確保施工品質與安全，敬請安心期待您的理想家園。
          </p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 w-10 rounded-full flex items-center justify-center">
                <div className="h-4 w-4 rounded-full " />
              </div>
              <h3 className="hidden md:inline-block text-xl md:pl-20 font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-14 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden inline-block text-xl mb-4 font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-green-500 via-green-700 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
