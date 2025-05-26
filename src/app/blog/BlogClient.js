"use client";

import { useEffect, useState } from "react";
import AnimatedLink from "../../components/AnimatedLink";

export default function BlogListClient({ posts }) {
  const [postsWithImage, setPostsWithImage] = useState([]);

  useEffect(() => {
    const transformed = posts.map((post) => {
      const imgMatch = post.content?.rendered?.match(/<img[^>]+src="([^">]+)"/i);
      const firstImage = imgMatch ? imgMatch[1].replace(/-\d+x\d+(?=\.[a-z]{3,4}$)/, "") : null;
      return {
        ...post,
        previewImage: firstImage,
      };
    });
    setPostsWithImage(transformed);
  }, [posts]);

  return (
    <section className="section-grid-item mt-[10vh] px-4 py-8">
      <div className="w-[95%] max-w-[1920px] mx-auto">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:grid-cols-5 gap-3 items-stretch justify-between">
          {postsWithImage.map((post) => (
            <AnimatedLink href={`/blog/${post.slug}`} key={post.id}>
              <div className="card border border-gray-200 group overflow-hidden rounded-[25px] hover:shadow-2xl flex flex-col h-full">
                {/* 圖片區塊 */}
                <div className="card-title aspect-square w-full border relative overflow-hidden">
                  <div className="absolute bottom-5 right-5 z-20">
                    <button className="relative group-hover:opacity-100 opacity-0 duration-500 inline-flex h-12 w-12 items-center justify-center overflow-hidden font-medium text-neutral-200 border border-white rounded-full">
                      <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                          <path d="M8.146 3.146a.5.5 0 01.708 0l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L11.293 8H2.5a.5.5 0 010-1h8.793L8.146 3.854a.5.5 0 010-.708z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                          <path d="M8.146 3.146a.5.5 0 01.708 0l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L11.293 8H2.5a.5.5 0 010-1h8.793L8.146 3.854a.5.5 0 010-.708z" fill="currentColor" />
                        </svg>
                      </div>
                    </button>
                  </div>

                  <div className="mask z-10 opacity-20 absolute w-full h-full left-0 top-0 bg-black group-hover:opacity-50 duration-500" />

                  <div className="card-content duration-700 group-hover:opacity-100 opacity-100 sm:opacity-0 absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center px-4">
                    <h3
                      className="text-white text-[1.2rem] font-bold line-clamp-2 leading-snug"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <span className="text-xs font-light mt-2 text-white block">閱讀更多</span>
                  </div>

                  <img
                    src={post.previewImage || "/images/fallback.jpg"}
                    alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full absolute left-0 top-0 group-hover:scale-[1.16] duration-2000"
                  />
                </div>

                {/* 文字內容 */}
                <div className="card-content bg-white p-8 flex flex-col justify-between grow">
                  <div className="txt">
                    <p
                      className="font-bold text-[1rem] line-clamp-2 leading-snug"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div className="text-[14px] mt-4 line-clamp-3 leading-relaxed text-gray-700">
                      {post.excerpt.rendered.replace(/<[^>]+>/g, "")}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedLink>
          ))}
        </div>
      </div>
    </section>
  );
}
