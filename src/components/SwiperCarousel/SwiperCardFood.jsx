"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedLink from "../AnimatedLink";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "冬夏皆宜的設計格局.jpg",
  "裝潢前該知道的-寬越室內設計.jpg",
  "預算要如何抓才合理-寬越室內設計.jpg",
  "自己來還是交給專業設計.jpg",
].map((img) => `/images/qa/${img}`);

export default function ProjectSwiper() {
  return (
    <div className="relative">
      {/* Custom Arrows */}
      <div className="custom-prev absolute top-[45%] left-2 z-10 w-10 h-10 border border-black rounded-full flex items-center justify-center cursor-pointer bg-white">
        <span className="text-black text-xl">←</span>
      </div>
      <div className="custom-next absolute top-[45%] right-2 z-10 w-10 h-10 border border-black rounded-full flex items-center justify-center cursor-pointer bg-white">
        <span className="text-black text-xl">→</span>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 2.5 },
        }}
        onSwiper={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="px-4 mx-auto"
      >
        {images.map((imgUrl, idx) => (
          <SwiperSlide
            key={idx}
            className=" overflow-hidden group relative duration-1000"
          >
            <div className="title absolute top-5 left-5 z-[999]">
              <span className="text-white text-[.9rem]">
                Project-0{idx + 1}
              </span>
            </div>
            <div className="title absolute bottom-5 flex right-5 z-[999]">
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
            <AnimatedLink href="/KuankoshiProjectInner">
              <div className="absolute z-50 w-full h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
              <Card
                className="!rounded-none border-white pb-4 w-full h-[230px] md:h-[280px] lg:h-[320px] 2xl:h-[550px] max-h-[550px] border bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110"
                style={{ backgroundImage: `url('${imgUrl}')` }}
              >
                <CardBody className="flex relative flex-col h-full w-full px-0" />
              </Card>
            </AnimatedLink>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination mt-6 flex justify-center gap-2"></div>
    </div>
  );
}
