"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import ThreeDSlider from "../../components/3DSlider.jsx";
import AnimatedLink from "../../components/AnimatedLink";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Link from "next/link.js";
import { ContainerScroll } from "../../components/ui/container-scroll-animation.tsx";
import ShiftingCountdown from "../../components/ShiftingCountdown.jsx";
import EmblaCarousel from "../../components/EmblaCarousel07/EmblaCarousel";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import { Carousel } from "../../components/ui/carousel01";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import Marquee from "react-fast-marquee";
import { DragCloseDrawer } from "../../components/DragCloseDrawer";

export default function About() {
  const pathname = usePathname();
  const counterRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const heroImgRef = useRef(null);

  // Framer Motion 滾動動畫
  const { scrollYProgress } = useScroll();
  const fadeOut = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const slideLeft = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const slideRight = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    function splitTextIntoSpans(selector) {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
          .join("");
        element.innerHTML = splitText;
      });
    }
    splitTextIntoSpans(".header h1");

    function animateCounter() {
      let currentValue = 0;
      const updateInterval = 300;
      const maxDuration = 2000;
      const endValue = 100;
      const startTime = Date.now();

      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < maxDuration) {
          currentValue = Math.min(
            currentValue + Math.floor(Math.random() * 30) + 5,
            endValue
          );
          if (counterRef.current) counterRef.current.textContent = currentValue;
          setTimeout(updateCounter, updateInterval);
        } else {
          if (counterRef.current) counterRef.current.textContent = endValue;
          setTimeout(() => {
            gsap.to(counterRef.current, {
              y: -20,
              duration: 1,
              ease: "power3.inOut",
              onStart: revealLandingPage,
            });
          }, 500);
        }
      };
      updateCounter();
    }

    gsap.to(counterRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    });

    function revealLandingPage() {
      gsap.to(heroRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "hop",
        onStart: () => {
          gsap.to(heroRef.current, {
            transform: "translate(-50%, -50%) scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(overlayRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 2,
            delay: 0.5,
            ease: "hop",
          });

          gsap.to(heroImgRef.current, {
            transform: "scale(1)",
            duration: 2.25,
            ease: "power3.inOut",
            delay: 0.25,
          });

          gsap.to(".header h1 span", {
            y: 0,
            stagger: 0.1,
            duration: 2,
            ease: "power4.inOut",
            delay: 0.75,
            onComplete: () => {
              document.body.style.overflow = "auto";
            },
          });
        },
      });
    }
  }, []);
  useEffect(() => {
    // 如果不是重整進來，而是從其他頁進入 about 頁，才執行 reload
    const hasReloaded = sessionStorage.getItem("hasReloadedAboutPage");

    if (
      !hasReloaded &&
      document.referrer &&
      !document.referrer.includes(pathname)
    ) {
      sessionStorage.setItem("hasReloadedAboutPage", "true");
      window.location.reload();
    } else {
      sessionStorage.removeItem("hasReloadedAboutPage");
    }
  }, [pathname]);

  const placeholders = ["建案地點？", "房價房型?", "預約看房?"];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const slideData = [
    {
      title: "誠境二期",
      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery01.jpg",
    },
    {
      title: "誠境二期",
      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery05.jpg",
    },
    {
      title: "誠境二期",
      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_gallery02.jpg",
    },
    {
      title: "誠境二期",
      src: "https://www.hasegawa-kogyo.co.jp/lucano/img/sec_feature05.jpg",
    },
  ];
  const [isDay, setIsDay] = useState(true);

  const handleToggle = () => {
    setIsDay(!isDay);
  };
  return (
    <ReactLenis root>
      <div
        className="hero-img border mt-[10vh] border-black !static !h-[100vh]"
        ref={heroImgRef}
      >
        <section className="section-hero relative">
          <video
            className="absolute inset-0 w-[100vw] h-[100vh] object-cover z-[-1]"
            src="/videos/TMHD.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <motion.div
            style={{ opacity: fadeOut, x: slideLeft }}
            className="absolute top-[-160px] md:top-[-50px] 2xl:top-[-150px]  left-[-5%] 2xl:left-0 sm:w-[450px] w-[350px] xl:w-[600px] h-auto z-[1]"
          >
            <Image
              src="/images/—Pngtree—green trees branches and leaves_4877518.png"
              alt="Left Tree"
              width={600}
              height={600}
            />
          </motion.div>

          {/* 右側滑動圖片 */}
          <motion.div
            style={{ opacity: fadeOut, x: slideRight }}
            className="absolute top-0 lg:top-0 right-0 sm:w-[450px] w-[300px] xl:w-[600px] h-auto z-[1]"
          >
            <Image
              src="/images/—Pngtree—tree branch_5643252.png"
              alt="Right Tree"
              width={600}
              height={600}
            />
          </motion.div>
          <div className="grid group  place-content-center relative border border-blue-500 h-screen">
            <div className="absolute overflow-hidden hover:w-[300px] duration-400 rounded-full bg-white border-2 border-black w-[10vmin] h-[10vmin] z-[1] top-[20%] left-[20%] ">
              <DragCloseDrawer
                trigger={({ onClick }) => (
                  <button
                    onClick={onClick}
                    className="pr-4  flex justify-start items-center     pl-[1.5px] pt-[1.2px] group-hover:w-[560px]  "
                  >
                    <div className="text-white rounded-full  w-[9vmin] h-[9vmin] bg-[#5b8b5a] inline-flex  flex-col justify-center items-center hover:bg-[#487447]">
                      <span className="text-[.8rem]">一青隱</span>
                    </div>
                    <span className="text-[1.1rem] ml-4 group-hover:block group-hover:opacity-100   duration-300 delay-150 hidden opacity-0 font-normal tracking-widest">
                      實在的構築 - 宜園大院
                    </span>
                  </button>
                )}
              >
                <div className="w-[90%] pl-20 h-screen  py-[20px] relative  text-neutral-400 space-y-4">
                  <div className="w-[400px] h-[280px] absolute z-[-1] right-[-10%] top-[10%] ">
                    <Image
                      src="https://www.tokiomarinehd.com/purpose/images/top/materiality/bg_id_3.png"
                      alt=""
                      width={800}
                      height={800}
                      placeholder="empty"
                      className="w-full"
                      loading="lazy"
                    ></Image>
                  </div>
                  <div className="modal-inner-title  inline-flex flex-col">
                    <span className="font-bold text-4xl text-black">
                      PROJECT-01
                    </span>
                    <h2 className="text-[2rem] bg-white border-2 border-black py-2 px-4 inline-block font-bold text-neutral-900">
                      實在的構築-宜園大院
                    </h2>
                    <h3 className="text-[1.6rem] bg-white border-2 border-black inline-flex justify-center items-center py-2 px-4 tracking-widest font-bold text-black">
                      宜園大院
                    </h3>
                  </div>
                  <div>
                    <p className="text-[1rem] w-2/3 font-normal leading-loose tracking-widest">
                      在今天這個百歲壽命的時代，每個人都希望健康長壽，而隨著人口老化及先進醫療的普及，個人、家庭及社會的經濟負擔逐年加重。
                      作為一家提供非壽險和壽險疾病保障產品的保險公司，本集團的目標是運用積累的專業知識，提供高增值的產品和服務。
                      藉此，我們將為解決延長健康預期壽命和資產預期壽命等社會問題做出貢獻，並支持健康和充實的生活方式。
                    </p>
                  </div>
                </div>
              </DragCloseDrawer>
            </div>
            <div className="absolute overflow-hidden hover:w-[300px] duration-400 rounded-full bg-white border-2 border-black w-[10vmin] h-[10vmin] z-[1] top-[40%] left-[60%] ">
              <DragCloseDrawer
                trigger={({ onClick }) => (
                  <button
                    onClick={onClick}
                    className="pr-4  flex justify-start items-center     pl-[1.5px] pt-[1.2px] group-hover:w-[560px]  "
                  >
                    <div className="text-white rounded-full  w-[9vmin] h-[9vmin] bg-[#5b8b5a] inline-flex  flex-col justify-center items-center hover:bg-[#487447]">
                      <span>Yi Yuan</span>
                    </div>
                    <span className="text-[1.1rem] ml-4 group-hover:block group-hover:opacity-100   duration-300 delay-150 hidden opacity-0 font-normal tracking-widest">
                      實在的構築 - 宜園大院
                    </span>
                  </button>
                )}
              >
                <div className="w-[90%] pl-20 h-screen  py-[20px] relative  text-neutral-400 space-y-4">
                  <div className="w-[400px] h-[280px] absolute z-[-1] right-[-10%] top-[10%] ">
                    <Image
                      src="https://www.tokiomarinehd.com/purpose/images/top/materiality/bg_id_3.png"
                      alt=""
                      width={800}
                      height={800}
                      placeholder="empty"
                      className="w-full"
                      loading="lazy"
                    ></Image>
                  </div>
                  <div className="modal-inner-title  inline-flex flex-col">
                    <span className="font-bold text-4xl text-black">
                      PROJECT-01
                    </span>
                    <h2 className="text-4xl bg-white border-2 border-black py-2 px-4 inline-block font-bold text-neutral-900">
                      實在的構築-宜園大院
                    </h2>
                    <h3 className="text-[2.5rem] bg-white border-2 border-black inline-flex justify-center items-center py-2 px-4 tracking-widest font-bold text-black">
                      宜園大院
                    </h3>
                  </div>
                  <div>
                    <p className="text-[1rem] w-2/3 font-normal leading-loose tracking-widest">
                      在今天這個百歲壽命的時代，每個人都希望健康長壽，而隨著人口老化及先進醫療的普及，個人、家庭及社會的經濟負擔逐年加重。
                      作為一家提供非壽險和壽險疾病保障產品的保險公司，本集團的目標是運用積累的專業知識，提供高增值的產品和服務。
                      藉此，我們將為解決延長健康預期壽命和資產預期壽命等社會問題做出貢獻，並支持健康和充實的生活方式。
                    </p>
                  </div>
                </div>
              </DragCloseDrawer>
            </div>
          </div>
        </section>
      </div>
      <Marquee>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">YI-YUAN</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">BUILDING</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">CITY</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">HOME</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">ENVIROMENTS</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">YI-YUAN</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">BUILDING</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">CITY</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">HOME</h1>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold mx-5">ENVIROMENTS</h1>
        </div>
      </Marquee>
      <section className="py-20">
        <ThreeDSlider />
      </section>
      {/* <TextImageSlider /> */}
      <section>
        <Image
          src="/images/hot-sale/Growth-3.png"
          alt=""
          width={1000}
          height={500}
          placeholder="empty"
          loading="lazy"
          className="max-w-[800px] w-[90%] mx-auto"
        ></Image>
        <h2 className="text-[2.3rem] font-bold text-center">
          讓理想落地，從家的輪廓開始
        </h2>
        <div>
          <p className="text-[1rem] tracking-widest leading-relaxed w-[70%] text-center mx-auto mb-20">
            在宜園建設的心中，「家」不只是生活的空間，更是連結情感與希望的所在。
            我們以「明日城」為名，象徵著對未來的期待，對每一個家庭的祝福。
            <br></br>
            <br></br>
            這裡，是孩子成長的起點，是父母安心的港灣，也是鄰里彼此支持、互助共融的地方。
            宜園建設期盼打造的不僅是一座城市，而是一個讓人放鬆、安心、彼此信賴的生活圈。
            <br></br>
            明日城，代表著家的延伸，也承載著對下一代的愛與責任，將成為代代相傳的幸福基地。
          </p>
          <div></div>
        </div>
      </section>
      <section>
        <div className="flex  flex-col lg:flex-row">
          <div className=" w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex flex-col  p-10">
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-[2.2rem] font-bold ">建案完工時程</h3>
                <p className="text-center tracking-widest leading-loose ">
                  當您提交房產資訊時，我們將為您提供
                  獨家網站的優先訪問權，您可以在此處查看最新資訊和獨家平面圖。
                </p>
              </div>

              <ShiftingCountdown />
            </div>
          </div>
          <div className=" w-full lg:w-1/2 overflow-hidden ">
            <Marquee>
              <div className="w-full lg:h-[550px] h-[450px] 2xl:h-[700px] overflow-hidden">
                <Image
                  src="https://www.31sumai.com/content/dam/31sumai/mfr/H2302/top/mainv.png"
                  alt=""
                  placeholder="empty"
                  loading="lazy"
                  width={1400}
                  height={800}
                  className="w-full"
                ></Image>
              </div>
              <div className="w-full lg:h-[550px] h-[450px] 2xl:h-[700px] overflow-hidden">
                <Image
                  src="https://www.31sumai.com/content/dam/31sumai/mfr/B2223/top/add2.jpg"
                  alt=""
                  placeholder="empty"
                  loading="lazy"
                  width={1400}
                  height={800}
                  className="w-full"
                ></Image>
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  實在的構築 <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    宜園大院
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src="https://www.jgran.jp/nishiakashi/common/images/top/img_entry.jpg"
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto mt-[-240px] rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      <section className="section-banner relative text-center py-10">
        <div className="relative w-full h-screen">
          <motion.img
            key={isDay ? "day" : "night"}
            src={
              isDay
                ? "https://srl.tw/Dadaocheng/img/ss2025022618581832_slider_0.webp"
                : "https://srl.tw/Dadaocheng/img/ss2025022618581832_slider_1.webp"
            }
            alt={isDay ? "Daytime Scene" : "Nighttime Scene"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <button
              onClick={handleToggle}
              className="p-2 bg-gray-200 rounded-full"
            >
              {isDay ? (
                <SunIcon className="h-6 w-6 text-yellow-500" />
              ) : (
                <MoonIcon className="h-6 w-6 text-blue-500" />
              )}
            </button>
          </div>
        </div>

        {/*         
        <button
          onClick={toggleMode}
          className="absolute top-4 right-4 z-10 px-4 py-2 bg-white/90 hover:bg-white text-black font-semibold rounded-full shadow transition"
        >
          {isDay ? "切換為夜晚" : "切換為白天"}
        </button>

        {isDay ? (
          <Image
            src="https://srl.tw/Dadaocheng/img/ss2025022618581832_slider_0.webp"
            alt="白天場景"
            loading="lazy"
            placeholder="empty"
            width={2000}
            height={1080}
            className="w-full transition duration-700 ease-in-out"
          />
        ) : (
          <Image
            src="https://srl.tw/Dadaocheng/img/ss2025022618581832_slider_1.webp"
            alt="夜晚場景"
            loading="lazy"
            placeholder="empty"
            width={2000}
            height={1080}
            className="w-full transition duration-700 ease-in-out"
          />
        )} */}
      </section>

      <div className="py-8 lg:flex-row flex-col flex">
        <div className=" w-full lg:w-1/2 ">
          <div className="relative h-[400px] sm:h-[50vh] lg:h-[70vh] 2xl:h-[65vh] overflow-hidden w-full">
            <Carousel slides={slideData} />
          </div>
        </div>
        <div className="w-full pl-[5%] lg:w-1/2 flex pt-0 lg:pt-2 flex-col">
          <div className="flex flex-col">
            <h2 className="text-[2.3rem]">Story</h2>
            <p className="w-full lg:w-[70%] font-[.9rem] font-normal tracjing-widest leading-loose">
              自2005年事業開始以來，我們已經參與了3000多件的翻新案件。在客戶需求不斷變化的情況下，像是「買了新建的房子但想稍微自訂一下」、「買了翻新過的物件，但因為客廳過於簡單所以想加入一些個性」等，非全訂製，而是在預算內的隨意自訂需求正在增加。對於設備和格局並無不滿，但想要一些質感和個性。不需要過度講究細節，也希望能創造出讓人舒適而滿意的空間。這樣「想要稍微改善普通的東西」的心情，就是「模樣替」所回應的。
            </p>
          </div>
          <div className="flex border-gray-400 w-[80%] border-t-1 flex-col mt-20 py-6">
            建地面積：
          </div>
          <div className="flex border-gray-400 w-[80%] border-t-1 flex-col mt-2 py-6">
            樓層：
          </div>
          <div className="flex border-gray-400 w-[80%] border-t-1 flex-col mt-2 py-6">
            規劃：
          </div>
        </div>
      </div>
      <section className="section-info lg:h-[85vh] h-[85vh] sm:h-[100vh]">
        <div className="flex h-full ">
          <div className="w-[97%] p-5 lg:p-10 border flex flex-col lg:flex-row border-black h-full justify-center items-center relative">
            <div className="lg:w-1/2 mt-5 lg:mt-0 w-full  flex justify-center items-center 2xl:p-20">
              <Image
                data-aos="fade-left"
                alt=""
                width={1500}
                height={800}
                src="https://framerusercontent.com/images/Utxq4b6tZbHOYhRLOWQ2RvJRQ.jpg"
                className="w-full h-full border-4 border-black  rounded-tr-[50px] rounded-bl-[50px]"
              ></Image>
            </div>
            <div className="text flex justify-center items-center flex-col w-full lg:w-1/2">
              <h2 className="text-[2.3rem] font-extrabold ">DESIGN -</h2>
              <b>
                車站的新標誌。 擁有340套單位的大型住宅社區<br></br>
                ，在湛藍的天空下，猶如盛開的大花。
              </b>
            </div>
          </div>
          <div className="w-[3%] bg-[#5aa54d] h-full">
            <div className="txt">
              <b></b>
            </div>
          </div>
        </div>
      </section>
      <section className="section-info lg:h-[85vh] h-[85vh] sm:h-[100vh]">
        <div className="flex h-full">
          <div className="w-[3%] bg-[#5aa54d] h-full">
            <div className="txt">
              <b></b>
            </div>
          </div>
          <div className="w-[97%] p-5 lg:p-10 justify-center items-center border flex flex-col lg:flex-row border-black h-full relative">
            <div className="text flex justify-center items-center flex-col w-full lg:w-1/2">
              <h2 className="text-[2.3rem] font-extrabold ">DESIGN -</h2>
              <b>
                車站的新標誌。 擁有340套單位的大型住宅社區<br></br>
                ，在湛藍的天空下，猶如盛開的大花。
              </b>
            </div>
            <div className="w-full mt-5 lg:mt-0 lg:w-1/2 flex justify-center items-center 2xl:p-20">
              <Image
                data-aos="fade-left"
                alt=""
                width={1500}
                height={800}
                src="https://framerusercontent.com/images/Utxq4b6tZbHOYhRLOWQ2RvJRQ.jpg"
                className="w-full h-full border-4 border-black  rounded-tr-[50px] rounded-bl-[50px]"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="section-banner bg-[url('https://worldz.design/assets/images/image02.jpg?v=b17934f0')] bg-center bg-cover bg-no-repeat h-[80vh] w-full relative">
          <div className="absolute hidden md:block w-1/3 h-full  top-0 z-0 right-0 bg-gradient-to-l from-black to-transparent opacity-60"></div>
          <div className="absolute w-[110%] md:w-1/2 h-full  top-0 z-0 left-0 bg-gradient-to-r from-black to-transparent opacity-90 md:opacity-70"></div>

          <div className="absolute w-1/3 h-full   left-10   top-10 z-50">
            <Image
              src="https://storage.googleapis.com/studio-design-asset-files/projects/91aPgdndql/s-263x150_c507d293-450d-4c86-bbf0-dc4a7b16560a.svg"
              alt=""
              width={800}
              height={400}
              className="max-w-[400px] w-full"
              placeholder="empty"
            ></Image>
            <div>
              <Link href="#">
                <p className="text-[.8rem] mt-4 ml-4 tracking-normal hover:tracking-widest duration-300 text-white">
                  {" "}
                  ・ PROJECT - 更多新案銷售
                </p>
              </Link>
              <Link href="#">
                <p className="text-[.8rem] mt-4 ml-4 tracking-normal hover:tracking-widest duration-300 text-white">
                  {" "}
                  ・ ABOUT - 關於宜園建設
                </p>
              </Link>
              <Link href="#">
                <p className="text-[.8rem] mt-4 ml-4 tracking-normal hover:tracking-widest duration-300 text-white">
                  {" "}
                  ・ NEWS - 最新消息
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#71dd6f] py-2">
          <Marquee>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
            <span className="text-[1rem] font-bold mx-5">新案件賞！</span>
            <span className="text-[1rem] font-bold mx-5">最新建案消息！</span>
          </Marquee>
        </div>
      </section>

      <section className="section-CTA pt-20 flex flex-col justify-center items-center">
        <div>
          <p className="text-center font-extrabold">如有疑問，請聯絡 </p>
          <br></br>
          <p className="text-center font-extrabold">
            「J-GRAND CITY西明石塔西」專案籌備辦公室。
          </p>
        </div>
        <a className="flex mx-auto my-10" href="tel:0120-292-210">
          {/* <img
            className="w-[120px] h-[55px]"
            src="https://www.jgran.jp/nishiakashi/common/images/common/icon_tel.svg"
          ></img> */}
          <span className="tel__txt">
            <font className="font-bold text-[2.2rem]">
              <font className="font-bold text-[2.2rem]">0120-292-210</font>
            </font>
          </span>
        </a>
        <span className="text-[.8rem] mt-5">
          營業時間：10:30～17:30 （週三、週四、每月第二個週二公休 ※假日除外）
        </span>
      </section>
      <section className="section-two-banner py-20 flex flex-col justify-center items-center ">
        <div className="max-w-[1000px] flex justify-center md:px-[20px] ">
          <Image
            src="https://www.31sumai.com/content/dam/31sumai/mfr/H2302/top/btn_design.png"
            alt="banner"
            placeholder="empty"
            loading="lazy"
            width={1500}
            height={650}
            className="w-full"
          ></Image>
        </div>
        <div className="max-w-[1000px]  mt-10 flex justify-center md:px-[20px] ">
          <Image
            src="https://www.31sumai.com/content/dam/31sumai/mfr/H2302/top/btn_access.png"
            alt="banner"
            placeholder="empty"
            loading="lazy"
            width={1500}
            height={650}
            className="w-full"
          ></Image>
        </div>
      </section>
    </ReactLenis>
  );
}
