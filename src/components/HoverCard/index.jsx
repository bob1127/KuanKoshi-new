import { useEffect } from "react";
import gsap from "gsap";
import "./page.css";
import AnimatedLink from "../AnimatedLink";

const items = [
  {
    id: 1,
    imgSrc:
      "https://niwahouzing.com/wp-content/uploads/2024/10/aba1dd9afd994bc383f5259806be7bb4-17.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc:
      "https://niwahouzing.com/wp-content/uploads/2024/10/aba1dd9afd994bc383f5259806be7bb4-20.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc:
      "https://niwahouzing.com/wp-content/uploads/2024/10/bee585f7a27f9e02a7042435dd3a63ee.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc:
      "https://niwahouzing.com/wp-content/uploads/2024/10/aba1dd9afd994bc383f5259806be7bb4-19.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc:
      "https://niwahouzing.com/wp-content/uploads/2024/10/aba1dd9afd994bc383f5259806be7bb4-14-scaled.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
  {
    id: 1,
    imgSrc:
      "https://niwahouzing.com/wp-content/uploads/2024/10/6929b940e4802cf13960acbb172247c2-18.jpg",
    number: "動土典禮",
    textLeft: "活動照片",
    textRight: "active",
    bottomLeft: "紀錄",
  },
];

const Codegrid = () => {
  useEffect(() => {
    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("mouseenter", function () {
        gsap.set(this.querySelectorAll("span"), { opacity: 0 });
        gsap.to(this.querySelectorAll("span"), {
          opacity: 1,
          duration: 0.075,
          stagger: {
            from: "random",
            each: 0.02,
          },
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", function () {
        gsap.to(this.querySelectorAll("span"), {
          opacity: 0,
          duration: 0.075,
          stagger: {
            from: "random",
            each: 0.02,
          },
          ease: "power2.in",
        });
      });
    });
  }, []);

  return (
    <div className="items">
      {items.map(({ id, imgSrc, number, textLeft, textRight, bottomLeft }) => (
        <div className="item-wrapper flex flex-wrap " key={id}>
          <div className="item ">
            <div className="item-img">
              <img src={imgSrc} alt="" />
            </div>

            <div className="item-copy">
              <div className="item-copy-1">
                <div className="shape">
                  <div id="number">
                    {[...number].map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                  </div>
                  <div className="text-right">
                    {[...textRight].map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="item-copy-2">
                <div className="shape">
                  <div>
                    {[...textLeft].map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                  </div>
                  <div className="text-right">
                    {[...bottomLeft].map((char, idx) => (
                      <span key={idx}>{char}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom p-2  flex flex-col  ">
            <div className="date font-normal text-[14px] text-gray-600 mt-2">
              日期：2025/01/01
            </div>
            <div className="link mt-1">
              <AnimatedLink href="/news-inner">
                <button
                  role="link"
                  class="relative font-extrabold text-[1rem] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  慶祝宜園大院 動土典禮活動紀錄
                </button>
              </AnimatedLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Codegrid;
