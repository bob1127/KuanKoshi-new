"use client";
import GsapText from "../../components/RevealText/index";
import ThreeJs from "../../components/ThreeSlider/index";
import { projects } from "../../components/ParallaxCard/data";
import { TextGenerateEffect } from "../../components/ui/text-generate-effec-home";
import Card from "../../components/ParallaxCard/page";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      {/* <h1 className="mt-[20vh] ml-[20px] md:ml-[10%]  mb-[35px] lg:mb-[6px] text-[2.3rems] md:text-[3rem] xl:text-[5rem] font-normal text-gray-800"></h1> */}
      <div className="pt-[14vh] pl-[10%] 2xl:pl-[20%] mb-[5vmin]">
        <GsapText
          text="TENDER-宜安"
          id="gsap-intro"
          fontSize="2.8rem"
          fontWeight="500"
          color="#000"
          lineHeight="60px"
          className="text-center inline-block mb-0 h-auto "
        />
      </div>
      <ThreeJs />
      <main ref={container} className=" relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              total={projects.length} // ✅ 修正這裡
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
      <section>
        <div className="flex py-[10vh] flex-col lg:flex-row">
          <div className="w-1/2 flex justify-center">
            <div className=" w-full lg:w-[40%] mx-auto">
              <Image
                src="https://monarchitects.jp/wp-content/themes/mon/assets/images/top/philosophy-main@2x.jpg"
                placeholder="empty"
                loading="lazy"
                className="mx-auto"
                alt=""
                width={500}
                height={800}
              ></Image>
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <div className="description max-w-[600px] p-10">
              <TextGenerateEffect
                words="宜」—— 宜居美好，品質至上

"
              />

              <br></br>
              <p className="text-[.9rem] tracking-widest">
                宜園建設堅信，家不僅是住所，更是安身立命的港灣。我們致力於打造宜居空間，
                透過嚴謹的施工品質與細膩的設計，讓每一位住戶都能在這裡找到安心與幸福。
              </p>
              <p className="text-[.9rem] tracking-widest">
                <br></br>
                <br></br>
                社區所擁有的個性是一件藝術作品，為人們的生活注入新的脈動，創造出特別的瞬間。
              </p>
              <br></br>
              <br></br>
              <p className="text-[.9rem] tracking-widest">
                象徵著自然與人文的共融，我們將綠建築理念融入每一個案場，創造富含綠意、
                舒適宜人的生活環境，讓建築不僅是一座空間，而是一處與自然共存的理想家園。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex max-w-[1000px] mx-auto my-5 justify-center">
          <Image
            src="https://www.31sumai.com/content/dam/31sumai/mfr/H2302/top/btn_access.png"
            alt=""
            placeholder="empty"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full"
          ></Image>
        </div>
        <div className="flex max-w-[1000px] mx-auto my-5 justify-center">
          <Image
            src="https://www.31sumai.com/content/dam/31sumai/mfr/H2302/top/btn_design.png"
            alt=""
            placeholder="empty"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full"
          ></Image>
        </div>
      </section>
    </>
  );
}
