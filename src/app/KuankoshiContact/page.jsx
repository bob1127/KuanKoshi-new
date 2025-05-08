"use client";

import HomeSlider from "../../components/HeroSliderHome/page.jsx";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "./about.scss";
import Link from "next/link.js";
import { ReactLenis } from "@studio-freight/react-lenis";

import Character from "../../components/TextOpacityScroll/Character";
// import GsapText from "../../components/RevealText/index";
import HoverItem from "../../components/HoverItem.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const initGSAPAnimations = () => {
      const ctx = gsap.context(() => {
        const images = document.querySelectorAll(".animate-image-wrapper");

        images.forEach((image, i) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "top center",
              toggleActions: "play none none none",
              id: "imageReveal-" + i,
            },
          });

          tl.fromTo(
            image.querySelector(".overlay"),
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 0.7,
              ease: "power2.inOut",
            }
          )
            .to(image.querySelector(".overlay"), {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              duration: 0.7,
              ease: "power2.inOut",
            })
            .fromTo(
              image.querySelector(".image-container"),
              {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              },
              {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1.5,
                ease: "power3.inOut",
              },
              "-=0.5"
            );
        });

        ScrollTrigger.refresh();
      }, containerRef);

      return ctx; // return so we can revert later
    };

    let ctx;

    const onTransitionComplete = () => {
      ctx = initGSAPAnimations();
    };

    window.addEventListener("pageTransitionComplete", onTransitionComplete);

    // fallback: 若不是從 transition link 進來，直接初始化
    if (!sessionStorage.getItem("transitioning")) {
      ctx = initGSAPAnimations();
    } else {
      sessionStorage.removeItem("transitioning"); // 清除 flag
    }

    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener(
        "pageTransitionComplete",
        onTransitionComplete
      );
    };

    return () => ctx.revert(); // 👈 自動 kill 清理範圍內動畫
  }, []);
  const [hovered, setHovered] = useState(false);
  const words = paragraph.split(" ");
  return (
    <ReactLenis root>
      <div className="">
        <section className="section_hero relative overflow-hidden mt-[40px]   lg:mt-[70px]">
          <HomeSlider />
        </section>

        <section className="mt-[18vh] mx-auto max-w-[1920px]">
          <div className="flex flex-row  mx-auto">
            <div className="stick-section relative  w-[40%] h-200vh border border-black">
              <div className="square sticky inline-block  ml-[18%] pr-[8%] top-[90px]  border">
                <b>室內設計工作室</b>
                <p className="mt-3 text-[.9rem] text-gray-500">
                  市政北二路282號21樓之9, <br></br>
                  Taichung, Taiwan
                </p>
                <ul className="mt-3 text-gray-500">
                  <li className="text-[.9rem]">電話：0927 886 699</li>
                  <li className="text-[.9rem]">營業時間：12:00-20:00</li>
                  <li className="text-[.9rem]">休息日：不定期</li>
                </ul>
              </div>
            </div>
            <div className="content-section pt-[50px] w-[60%]">
              <div className="">
                <div className="content">
                  <h2 className="text-[3.2rem] w-[80%] font-normal">
                    以高端國產品牌為主打的充滿高級感的時尚精品店
                    ，營造出震撼感官的空間
                  </h2>
                  <br></br>
                  <div className="w-[80%]">
                    <p className="tracking-widest">
                      2005年在名古屋市東區和泉地區開業，2011年搬遷至中部地區的文化、時尚中心名古屋市榮地區，以UNEVEN
                      GENERAL STORE為名重新開業。
                    </p>
                    <br></br>
                    <br></br>
                    <p className="tracking-widest">
                      透過進一步擴大活動空間並以國內品牌為中心，我們將能夠推廣超越各種類型和類別界限的各種風格的時尚。我們的目標是在體貼每位顧客的同時，透過溝通發現和提出新的風格。
                    </p>
                    <br></br>
                  </div>
                  <Image
                    src="https://www.uneven.jp/images/about/shop_1.jpg?data=20241008"
                    alt=""
                    placeholder="empty"
                    loading="lazy"
                    width={800}
                    height={1100}
                    className="w-full max-w-[1200px]"
                  ></Image>
                  <Image
                    src="https://www.uneven.jp/images/about/shop_2.jpg"
                    alt=""
                    placeholder="empty"
                    loading="lazy"
                    width={800}
                    height={1100}
                    className="w-full mt-8 max-w-[1200px]"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[150px] bg-[linear-gradient(to_bottom,white_50%,#36454f_50%)]">
          <div className="title py-20">
            <h2 className="text-center text-[4rem] font-bold">#unevensnap</h2>
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61550958051323&sk=photos"
              className="icon flex justify-center items-center"
            >
              <div className="w-[1.6rem]  bg-center bg-cover bg-no-repeat h-[1.6rem] bg-[url('https://www.uneven.jp/images/icon_ig.svg')]"></div>
              <b className="ml-3 font-normal">INSTGRAM</b>
            </Link>
          </div>
          <Marquee>
            <div className="flex items-center">
              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/484998795_122244445484031935_2425130562929710773_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OiFqhslMemgQ7kNvwEkcG9B&_nc_oc=Adnfxsr0DIao3NHRzP8FmCgT6v7LPZMCCKg8kbXnr_7dFiutR2Adr7DMTF2fPgmndJM&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=rNM79x4aGbYij46UWcsneg&oh=00_AfGffcIOQ3BrMS_47kPAwUJqAcljzRFzYJHMiYhco-vJGg&oe=67FD39FF"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/486824855_122245695716031935_3372241001376026295_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FV3ny9KMdEIQ7kNvwFrX63k&_nc_oc=AdnZpwA1MHZFWrPzBRK_gXqlflr8fZwNPcm3nqzTlubjmS1ijh7pNC0RaWEj3YObkm0&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=qtbrRO4eIPcLtoMHumsqoA&oh=00_AfEmBpLBntpirpGa5aq8qplmD46w9N_hhOIYw-BZ13hH1g&oe=67FD1572"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/485146224_122244233498031935_8273150089111007875_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Wt_EWOjKlt8Q7kNvwHa4yT8&_nc_oc=AdlpTqa69T7cL940i7mH9FflU7nSCibN3EjcCE5wN7hp4cSuLgYeYXBG6X3UYwcQs1A&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=Nx_FPSH-jdQbGZgMsCw1cQ&oh=00_AfGJgpxaG2U_wZ1ZsHpQTt5o5NnqlW157zHcNFyTCxQ8SQ&oe=67FD221D"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/485059714_122244233276031935_4983623517156943623_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eUgXFHuavPIQ7kNvwFZV766&_nc_oc=AdkOMbV2qXEbxhGN6iDiVdbwJ5vnYTiwkW3RdPS-g9OPlyrLBq91oLwTebkFTx6TmSE&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=vuAhcpquSB-klaqME8rb2A&oh=00_AfHP4w8BXjHL8yNkfmNRQugB0Bc_BiRfXe7RSy38EewJkQ&oe=67FD0C5B"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
              <HoverItem
                imageUrl="https://scontent.frmq7-1.fna.fbcdn.net/v/t39.30808-6/481764862_122241462854031935_2469569084975822180_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pXdyfboWx8IQ7kNvwEZPt9c&_nc_oc=AdmLIi2BSEcrjft-VRsXPEQ1WxKnfFqubeJP8xVa7LoxKBZI7mCY9kgOHuo5gLeLvTM&_nc_zt=23&_nc_ht=scontent.frmq7-1.fna&_nc_gid=YhlYNgGLdqFOajk9j2ZfxA&oh=00_AfEKf88HEUdU2d4Ps3zlzRwn4SD-5JaKvuZ52cEqgpY_-Q&oe=67FD0E59"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://www.uneven.jp/images/about/shop_7.jpg"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
            </div>
          </Marquee>
          <div className="flex flex-col items-center py-20">
            <p className="text-white tracking-wide !font-light ">
              徵求你的UNEVEN時尚風格📸！！
            </p>
            <p className="text-white tracking-wide !font-light ">
              請在 Instagram 上標記「#unevensnap」的標籤來發佈🙏🏻
            </p>
            <p className="text-white tracking-wide !font-light ">
              由工作人员精选并刊登 ☺️
            </p>
          </div>
          <div className="flex flex-col mt-8 items-center">
            <div className="line mx-auto w-[150px] bg-white h-[1.5px] rounded-full"></div>
            <h2 className="text-center text-white text-[4rem] font-bold">
              KUANKOSHI
            </h2>
            <span className="text-[.9rem] text-center font-normal text-gray-100">
              寬越設計
            </span>
          </div>
          <div className="flex flex-row py-20">
            <div className="w-1/2 flex items-center">
              <div className="p-10 txt w-[80%] mx-auto">
                <b className="text-white text-[2rem]">
                  古着と物差し展〈TREDICI〉
                </b>
                <p className="text-gray-100">
                  〈Touareg SilverSecond
                  TouchMARIEOHIRA〉／ひめごとや〈Sasquatchfabrix.〉／in_sight
                  01〈URU TOKYO〉／Creator First〈Midorikawa〉／KEEP CALM AND
                  MAKE PEACE〈COGNOMEN〉
                </p>
              </div>
            </div>
            <div className="flex justify-center w-1/2 items-center">
              <Image
                src="https://www.uneven.jp/images/map.svg"
                alt=""
                placeholder="empty"
                loading="lazy"
                width={800}
                height={800}
                className="max-w-[800px] w-[70%] mx-auto"
              ></Image>
            </div>
          </div>
        </section>
      </div>
      <section className="py-[20vh] bg-black">
        <Character paragraph={paragraph} />
        <div style={{ height: "100vh" }}></div>
      </section>
      {/* <div className="w-full h-full py-20">
        <Carousel items={cards} />
      </div> */}
    </ReactLenis>
  );
}
