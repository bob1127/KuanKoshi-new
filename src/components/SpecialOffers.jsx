"use client";

import React, { useEffect, useState } from "react";
import AnimatedLink from "../components/AnimatedLink";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SpecialOffers() {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetch(
      "https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?per_page=100&_embed"
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((post) =>
          post._embedded["wp:term"][0]?.some(
            (cat) => cat.slug === "special-offers"
          )
        );
        setPosts(filtered);
        setTotalCount(filtered.length);
      });
  }, []);

  const extractFirstTwoImages = (htmlString) => {
    const matches = [...htmlString.matchAll(/<img[^>]+src="([^"]+\.webp)"/g)];
    return matches.slice(0, 2).map((match) => match[1]);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="w-full">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 lg:px-8">
        {posts.slice(0, visibleCount).map((post, index) => {
          const [img1, img2] = extractFirstTwoImages(post.content.rendered);
          const date = new Date(post.date).toLocaleDateString("zh-TW");

          return (
            <motion.div
              key={post.id}
              className="group flex flex-col w-full max-w-full overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="relative w-full aspect-[4.9/5] overflow-hidden">
                <AnimatedLink href={`/project/${post.slug}`}>
                  <div className="relative w-full h-full">
                    {img1 && (
                      <Image
                        src={img1}
                        alt={post.title.rendered}
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    {img2 && (
                      <Image
                        src={img2}
                        alt={`${post.title.rendered}-hover`}
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>
                </AnimatedLink>
              </div>

              <div className="mt-3 px-1">
                <h3 className="text-sm sm:text-base font-medium leading-tight mt-1 line-clamp-2">
                  {post.title.rendered.replace(/(<([^>]+)>)/gi, "")}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MORE 按鈕區塊 */}
      {visibleCount < totalCount && (
        <motion.div
          className="more w-[200px] flex justify-center items-center flex-col group mx-auto mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="next mx-2 bg-white border-2 border-gray-700 rounded-full py-8 px-[80px] group-hover:bg-black duration-700 cursor-pointer"
            onClick={handleShowMore}
          >
            <span className="tracking-widest flex justify-center items-center text-[.9rem] group-hover:text-white duration-500">
              <span>MORE</span> <span>▼</span>
            </span>
          </div>
          <span className="text-[1rem] text-gray-700 mt-4">
            {totalCount} + | 文章
          </span>
        </motion.div>
      )}
    </div>
  );
}
