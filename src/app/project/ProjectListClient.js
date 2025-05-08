// ProjectListClient.js
"use client";
import { Form, Input, Select, SelectItem, Checkbox, Button } from "@heroui/react";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Filter from "../../components/TabsFilter/Filter";
import AnimatedLink from "../../components/AnimatedLink";
import Swiper from "../../components/SwiperCarousel/SwiperCard";
import SwiperSingle from "../../components/SwiperCarousel/SwiperCardAbout";
import Image from "next/image";
import { Grid2X2, Grid } from "lucide-react";

export default function ProjectListClient({ posts, categories }) {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("cat");

  const [postsWithSlug, setPostsWithSlug] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [minSize, setMinSize] = useState("");
  const [maxSize, setMaxSize] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [columns, setColumns] = useState(2);
  const [viewMode, setViewMode] = useState("gallery");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    const transformed = posts.map((post) => {
      const categorySlugs = (post._embedded?.["wp:term"]?.[0] || []).map((cat) => cat.slug);
      return { ...post, categories_slug: categorySlugs };
    });
    setPostsWithSlug(transformed);
  }, [posts]);

  useEffect(() => {
    if (categoryFromUrl && activeCategory === "all") {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl, activeCategory]);

  const handleClearFilters = () => {
    setActiveCategory("all");
    setMinSize("");
    setMaxSize("");
    setMinPrice("");
    setMaxPrice("");
    setSortOption("default");
    setCurrentPage(1);
  };

  const sortedPosts = useMemo(() => {
    let result = [...postsWithSlug];

    if (activeCategory !== "all") {
      result = result.filter((post) => post.categories_slug.includes(activeCategory));
    }

    if (minSize || maxSize) {
      result = result.filter((post) => {
        const size = Number(post.acf?.size || 0);
        return (!minSize || size >= Number(minSize)) && (!maxSize || size <= Number(maxSize));
      });
    }

    if (minPrice || maxPrice) {
      result = result.filter((post) => {
        const price = Number(post.acf?.price || 0);
        return (!minPrice || price >= Number(minPrice)) && (!maxPrice || price <= Number(maxPrice));
      });
    }

    if (sortOption === "size-asc") {
      result.sort((a, b) => Number(a.acf?.size || 0) - Number(b.acf?.size || 0));
    } else if (sortOption === "size-desc") {
      result.sort((a, b) => Number(b.acf?.size || 0) - Number(a.acf?.size || 0));
    } else if (sortOption === "price-asc") {
      result.sort((a, b) => Number(a.acf?.price || 0) - Number(b.acf?.price || 0));
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => Number(b.acf?.price || 0) - Number(a.acf?.price || 0));
    }

    return result;
  }, [postsWithSlug, activeCategory, minSize, maxSize, minPrice, maxPrice, sortOption]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return sortedPosts.slice(start, end);
  }, [sortedPosts, currentPage]);

  if (!postsWithSlug.length) return <div className="text-center py-20">載入中...</div>;

  return (
    <div className="pt-[10vh]">
      <div className="mx-auto 2xl:w-[87%] w-[98%]">
        <div className="title w-[75%] mx-auto flex flex-col">
          <h1 className="text-[5rem] font-bold flex-col sm:flex-row flex items-center justify-between">
            WORKS.
            <div className=" text-[1rem] sm:text-[1.2rem] 2xl:text-[1.7rem] font-normal">案件實例</div>
          </h1>
        </div>
        <div className="mb-[100px]">
          <SwiperSingle />
        </div>
        <section className="categories-01 mx-auto">
          <div className="w-full px-0 mx-0 overflow-hidden">
            <Swiper />
          </div>
        </section>
      </div>

      <div className="max-w-[1920px] w-full md:w-[85%] mt-[10vh] px-6 lg:px-0 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">設計作品</h1>
          <div className="flex gap-2 ml-auto">
            <div className="sm:hidden flex gap-2">
              <button onClick={() => setColumns(1)} className={`p-2 rounded-md ${columns === 1 ? "bg-gray-300" : "bg-gray-100"}`}><Grid size={18} /></button>
              <button onClick={() => setColumns(2)} className={`p-2 rounded-md ${columns === 2 ? "bg-gray-300" : "bg-gray-100"}`}><Grid2X2 size={18} /></button>
            </div>
            <div className="hidden sm:flex gap-2">
              <button onClick={() => setViewMode("list") } className={`p-2 rounded-md ${viewMode === "list" ? "bg-gray-300" : "bg-gray-100"}`}><Grid size={18} /></button>
              <button onClick={() => setViewMode("gallery")} className={`p-2 rounded-md ${viewMode === "gallery" ? "bg-gray-300" : "bg-gray-100"}`}><Grid2X2 size={18} /></button>
            </div>
          </div>
        </div>

        <div className="App">
          <Filter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={categories}
            onClearFilters={handleClearFilters}
          />

          {/* 篩選表單 */}
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-6 text-sm">
            <div className="flex flex-col gap-2 w-full max-w-full sm:max-w-[300px]">
              <label className="text-sm font-medium text-gray-700">坪數區間</label>
              <div className="flex gap-2">
                <Input value={minSize} onChange={(e) => setMinSize(e.target.value)} placeholder="最小" size="sm" />
                <Input value={maxSize} onChange={(e) => setMaxSize(e.target.value)} placeholder="最大" size="sm" />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-full sm:max-w-[300px]">
              <label className="text-sm font-medium text-gray-700">價格區間</label>
              <div className="flex gap-2">
                <Input value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="最小" size="sm" />
                <Input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="最大" size="sm" />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-full sm:max-w-[300px]">
              <label className="text-sm font-medium text-gray-700">排序</label>
              <Select
                aria-label="排序"
                placeholder="請選擇排序方式"
                variant="flat"
                selectedKeys={[sortOption]}
                onSelectionChange={(keySet) => {
                  const selected = Array.from(keySet)[0];
                  setSortOption(selected);
                }}
              >
                <SelectItem key="default">預設</SelectItem>
                <SelectItem key="size-asc">坪數：小 → 大</SelectItem>
                <SelectItem key="size-desc">坪數：大 → 小</SelectItem>
                <SelectItem key="price-asc">價格：低 → 高</SelectItem>
                <SelectItem key="price-desc">價格：高 → 低</SelectItem>
              </Select>
            </div>

            <div className="flex items-end w-full max-w-full sm:max-w-[300px]">
              <Button variant="flat" size="sm" onClick={handleClearFilters} className="w-full">
                清除條件
              </Button>
            </div>
          </div>

          {/* 案例列表 */}
          <motion.div
            layout
            className={`grid gap-8 mt-10 ${
              columns === 1
                ? "grid-cols-1"
                : viewMode === "list"
                ? "grid-cols-1"
                : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            <AnimatePresence>
              {paginatedPosts.map((post) => {
                const rawImage = post.clean_featured_image || extractFirstGalleryImage(post.content?.rendered);
                const previewImage = rawImage || "/images/fallback.jpg";

                return (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      opacity: { duration: 0.4 },
                      layout: { type: "spring", stiffness: 300, damping: 30 },
                      scale: { type: "spring", stiffness: 300, damping: 30 },
                    }}
                  >
                    <AnimatedLink
                      href={`/project/${post.slug}`}
                      className={`group block ${viewMode === "list" ? "flex gap-6 items-center border-b-1 pb-4 border-gray-800" : ""}`}
                    >
                      <div className={`${viewMode === "list" ? "w-[10%] aspect-auto" : "aspect-[4/5] w-full"} overflow-hidden rounded-md bg-gray-100`}>
                        <Image
                          src={previewImage}
                          alt={post.title.rendered}
                          width={400}
                          height={500}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className={`${viewMode === "list" ? "w-[60%]" : "w-full"}`}>
                        <h2 className="mt-2 font-bold text-sm group-hover:text-neutral-700 transition">
                          {post.title.rendered.replace(/<[^>]+>/g, "")}
                        </h2>
                        {(post.acf?.size || post.acf?.price) && (
                          <div className="text-xs text-gray-600 mt-1 leading-snug">
                            {post.acf?.size && <div>坪數：{Number(post.acf.size)} 坪</div>}
                            {post.acf?.price && <div>價格：{Number(post.acf.price).toLocaleString()} 元</div>}
                          </div>
                        )}
                      </div>
                    </AnimatedLink>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* 分頁按鈕 */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: Math.ceil(sortedPosts.length / postsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === index + 1 ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function extractFirstGalleryImage(html) {
  if (!html) return null;
  const imgMatch = html.match(/<img[^>]+src=\"([^\">]+)\"/i);
  if (!imgMatch) return null;
  return imgMatch[1].replace(/-\d+x\d+(?=\.[a-z]{3,4}$)/, "");
}
