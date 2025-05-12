"use client";

import { useState, useEffect } from "react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardBody } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "../AnimatedLink";

import "swiper/css";
import "swiper/css/pagination";

export default function SwiperCardAbout() {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?per_page=20&_embed`
        );
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full m-0 p-0 items-start gap-8">
      {/* 左側：文字區 */}
      <div className="w-[90%] mx-auto lg:w-[35%] flex flex-col justify-start px-4 lg:px-8">
        <div className="txt flex flex-col">
          <span className="text-[.9rem] text-gray-800">
            用50萬左右就打造出屬於自己的高質感小宅
          </span>
          <div className="flex">
            <h2 className="text-[2.5rem] md:text-[4rem] mt-4 text-[#243629] font-normal border-b border-dashed border-black w-fit">
              小資專案
            </h2>
          </div>
          <p className="text-[1rem] text-[#333] mt-4 leading-relaxed">
            我們專注於小資族、小家庭、小坪數室內設計，提供輕裝潢、系統櫃設計到完整空間規劃，
            <br />
            讓每一個剛起步的新家庭，也能擁有舒適、實用又充滿溫度的生活空間。
          </p>
        </div>

        {/* 數字顯示在文字下方 */}
        <div className="count-project mt-4 items-center flex">
          <span className="mr-4 text-gray-600 text-[1.2rem]">PROJECT</span>
          <div className="flex items-center gap-1 text-gray-600 text-[1.2rem]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                {currentIndex}
              </motion.span>
            </AnimatePresence>
            <span className="text-[1.2rem]">/ {posts.length}</span>
          </div>
        </div>
      </div>

      {/* 右側：輪播區 */}
      <div className="w-full lg:w-[65%] px-4 lg:px-0">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1200}
          spaceBetween={16}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => {
            setCurrentIndex(((swiper.realIndex ?? 0) % posts.length) + 1);
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3.5 },
          }}
          className="m-0 p-0 !overflow-visible sm:!overflow-hidden"
        >
          {posts.map((post, idx) => {
            // 嘗試從內文中擷取第一張圖
            const match = post.content.rendered.match(
              /<img[^>]+src=\"([^\"]+)\"/
            );
            const imageUrl = match ? match[1] : "";
            return (
              <SwiperSlide
                key={post.id}
                className="mx-2 overflow-hidden group relative duration-1000 rounded-[50px]"
              >
                <div className="title absolute top-5 left-5 z-[999]">
                  <span className="text-white text-[.9rem]">
                    {post.title.rendered}
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
                  <button className="relative opacity-10 group-hover:opacity-100 duration-500 inline-flex h-12 w-20 items-center justify-center overflow-hidden rounded-full border font-medium text-neutral-200">
                    <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                      ➔
                    </div>
                    <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                      ➔
                    </div>
                  </button>
                </div>
                <AnimatedLink href={`/project/${post.slug}`}>
                  <div className="absolute z-50 w-full h-full inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
                  <Card
                    className="border-white rounded-[50px] pb-4 w-full h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[320px] max-h-[450px] border relative bg-no-repeat bg-center bg-cover shadow-none overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-110"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  >
                    <CardBody className="flex relative flex-col h-full w-full px-0"></CardBody>
                  </Card>
                </AnimatedLink>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
