import { useEffect } from "react";
import gsap from "gsap";
import "./page.css";
import AnimatedLink from "../AnimatedLink";
const items = [
  {
    id: 1,
    imgSrc:
      "https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-10-pc.webp",
    number: "宜園大院",

    bottomLeft: "宜園建設，打造理想生活空間",
  },
  {
    id: 2,
    imgSrc:
      "https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-02-pc.webp",
    number: "一青隱",

    bottomLeft: "宜園建設，打造理想生活空間",
  },
  {
    id: 3,
    imgSrc:
      "https://motherhaus-sauna.com/sys/wp-content/themes/motherbase/assets/img/top/service-05-pc.webp",
    number: "誠境二期",

    bottomLeft: "宜園建設，打造理想生活空間",
  },
];

const Codegrid = () => {
  return (
    <div className="items">
      {items.map(({ id, imgSrc, number, bottomLeft }) => (
        <div className="item-wrapper flex flex-wrap " key={id}>
          <AnimatedLink href="/project-inner01">
            <div className="item mt-8 sm:mt-0">
              <div className="item-img">
                <img src={imgSrc} alt="" />
              </div>
              <div className="item-copy">
                <div className="item-copy-2">
                  <div className="shape text-white"></div>
                </div>
                <div className="item-copy-1">
                  <div className="shape flex flex-col items-start">
                    <div className="text-left w-[85%] text-[.9rem] lg:text-[1.2rem] text-white">
                      {[...bottomLeft].map((char, idx) => (
                        <span key={idx}>{char}</span>
                      ))}
                    </div>
                    <div
                      id="number"
                      className="text-white text-[16px] flex justify-center items-center"
                    >
                      <p className="text-[16px] text-white mr-4 font-light">
                        {" "}
                        project
                      </p>
                      {[...number].map((char, idx) => (
                        <span
                          className="text-[1.3rem] lg:text-[1.7rem] 2xl:text-[2.3vmin]"
                          key={idx}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom px-10  py-2 flex flex-col  ">
              <div className="date font-normal text-[14px] text-gray-600 mt-5">
                日期：2025/01/01
              </div>
              <div className="link mt-5">
                <button
                  role="link"
                  class="relative font-extrabold text-[18px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  宜園建設，打造理想生活空間
                </button>
              </div>
            </div>
          </AnimatedLink>
        </div>
      ))}
    </div>
  );
};

export default Codegrid;
