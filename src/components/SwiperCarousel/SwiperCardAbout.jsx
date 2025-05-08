"use client";

import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardBody } from "@nextui-org/react";
import AnimatedLink from "../AnimatedLink";
import { useRef, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperCardAbout() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.swiperClick = (index) => {
        const swiperInstance = document.querySelector(".swiper").swiper;
        setTimeout(() => {
          swiperInstance.slideToLoop(index);
        }, 400); // 小延遲
      };
    }
  }, []);

  return (
    <div className="w-[98%] mx-auto m-0 p-0">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={2000}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" onclick="swiperClick(${index})"></span>`;
          },
        }}
        className="rounded-[40px] overflow-hidden"
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-color": "#fff",
          "--swiper-transition-timing-function":
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
        }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide
            key={item}
            className="overflow-hidden group relative duration-1000"
          >
            <AnimatedLink href="/KuankoshiProjectInner">
              <div className="absolute z-50 w-full h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card className="border-white pb-4 w-full h-[500px] md:h-[580px] lg:h-[600px] 2xl:h-[600px] max-h-[850px] border bg-[url('https://store-palette.com/wp/wp-content/uploads/2020/01/3505-.jpg')] relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110">
                <CardBody className="flex relative flex-col h-full w-full px-0">
                  <div className="title absolute top-5 left-5 z-[999]">
                    <span className="text-white text-[.9rem]">
                      Project-0{item}
                    </span>
                  </div>
                  <div className="title absolute bottom-5 right-5 flex z-[999]">
                    <button className="relative h-12 rounded-full bg-transparent px-4 group-hover:text-white text-neutral-950">
                      <span className="relative inline-flex overflow-hidden">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                          View More
                        </div>
                        <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          View More
                        </div>
                      </span>
                    </button>
                  </div>
                </CardBody>
              </Card>
            </AnimatedLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
