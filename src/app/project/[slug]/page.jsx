import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { Suspense } from "react";
import Categories from "../../../components/categories.jsx";
import AnimatedLink from "../../../components/AnimatedLink";
import HeroSlider from "../../../components/HeroSlideContact/page.jsx";
import HoverItem from "../../../components/HoverItem.jsx";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

async function getPost(slug) {
  const res = await fetch(
    `https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 5 } }
  );
  const posts = await res.json();
  const post = posts?.[0] || null;

  if (!post) return null;

  post.content.rendered = post.content.rendered.replace(
    /(<img[^>]+src="[^"]*?)(-\d{2,4}x\d{2,4})(\.[a-z]{3,4}")/g,
    "$1$3"
  );

  return post;
}

async function getRandomAdjacentPosts(currentSlug) {
  const res = await fetch(
    `https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?per_page=100&_embed`
  );
  const posts = await res.json();

  const others = posts.filter((p) => p.slug !== currentSlug);
  const shuffled = others.sort(() => 0.5 - Math.random());

  return {
    prev: shuffled[0] || null,
    next: shuffled[1] || null,
  };
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title.rendered.replace(/<[^>]+>/g, "")}｜寬越設計`,
    description:
      post.excerpt?.rendered?.replace(/<[^>]+>/g, "").trim() ||
      post.title?.rendered.replace(/<[^>]+>/g, "") ||
      "",
    openGraph: {
      title: `${post.title.rendered.replace(/<[^>]+>/g, "")}｜寬越設計`,
      description: post.excerpt?.rendered?.replace(/<[^>]+>/g, "").trim() || "",
      url: `https://inf.fjg.mybluehost.me/website_61ba641a/project/${params.slug}`,
      siteName: "寬越設計 Kuankoshi Design",
      images: [
        {
          url:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://inf.fjg.mybluehost.me/website_61ba641a/default-og.jpg",
          width: 1200,
          height: 630,
          alt: post.title.rendered.replace(/<[^>]+>/g, ""),
        },
      ],
      locale: "zh_TW",
      type: "article",
    },
  };
}

const ProjectPage = async ({ params }) => {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  const { prev, next } = await getRandomAdjacentPosts(params.slug);

  return (
    <div className="py-12 w-full">
      <div className="py-12 w-full">
        {/* <Head>
        <title>{post.title.rendered}｜寬越設計</title>
        <meta
          name="description"
          content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
        />
      </Head> */}

        <section className="section-Hero-img w-full">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-0">
            <div className="bg-white w-full mt-20">
              <div className="p-4 md:p-10">
                <h1
                  className="text-xl sm:text-3xl tracking-widest mb-4"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-0 md:pb-[80px] xl:pb-[150px] flex flex-col lg:flex-row pt-8 border-t-1 border-gray-300 w-full">
          {/* 手機版：內容-資訊-分類(下拉) 排序 */}
          <div className="lg:hidden block order-1">
            <Suspense fallback={<div></div>}>
              <Categories />
            </Suspense>
          </div>

          <div className="w-full lg:w-[60%] order-1 lg:order-2 prose prose-neutral 2xl:px-[150px] px-4 md:px-[70px] [&_img]:my-8">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>

          <div className="w-full py-10 px-5 sm:px-0 lg:py-0 sm:w-[60%] mx-auto lg:w-[25%] pr-8 flex flex-col order-2 lg:order-3">
            <div>
              <span className="text-[.8rem]">
                寬越設計推出【小資專案】，主打
                50萬左右輕裝潢方案，由專業設計團隊為你量身打造專屬風格，從格局優化、收納規劃到氛圍營造，讓你的「家」既實用又有品味
              </span>
            </div>
            <div className="sticky my-4 top-24">
              <div className="flex px-4 flex-col border border-[#d7d7d7] bg-[#375E77]">
                <h2 className="article-side-project-title text-white text-[1rem] font-normal tracking-widest">
                  {post.title?.rendered?.replace(/<[^>]+>/g, "") || ""}
                </h2>
                <div className="feature">
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal text-white">
                      裝潢價格：
                    </b>
                    <span className="text-[.85rem] font-normal text-white">
                      {post.acf?.price
                        ? `約新台幣 ${Number(
                            post.acf.price
                          ).toLocaleString()} 元`
                        : ""}
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal text-white">
                      裝潢坪數：
                    </b>
                    <span className="text-[.85rem] font-normal text-white">
                      {post.acf?.size || ""}
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                    <b className="text-[.9rem] font-normal text-white">
                      施工日期：
                    </b>
                    <span className="text-[.85rem] font-normal text-white">
                      {post.acf?.date || ""}
                    </span>
                  </div>
                  <div className="border-t-1 py-4 px-1 flex justify-between items-start border-gray-400">
                    <b className="text-[.9rem] font-normal text-white">
                      特色：
                    </b>
                    <span className="text-[.85rem] w-3/4 text-white font-normal">
                      {post.acf?.feature || ""}
                    </span>
                  </div>
                </div>
              </div>

              <div className="small-viewer-project p-0 md:p-5">
                {/* 小圖保留 */}
              </div>
            </div>
          </div>

          {/* 桌機版分類側邊欄 */}
          <div className="hidden lg:block w-full lg:w-[15%] order-0">
            <div className="sticky pl-0 md:pl-5 top-0 md:top-24">
              <Suspense fallback={<div></div>}>
                <Categories />
              </Suspense>
            </div>
          </div>
        </section>

        <section className="mt-16 max-w-[1200px] mx-auto px-6 md:px-0">
          <div className="flex flex-col md:flex-row justify-between gap-6 border-t pt-8">
            {prev && (
              <div className="w-full md:w-1/2">
                <h3 className="text-sm text-gray-500">上一篇</h3>
                <AnimatedLink
                  href={`/project/${prev.slug}`}
                  className="text-lg font-bold block mt-2"
                >
                  {prev.title.rendered.replace(/<[^>]+>/g, "")}
                </AnimatedLink>
              </div>
            )}
            {next && (
              <div className="w-full md:w-1/2 text-right">
                <h3 className="text-sm text-gray-500">下一篇</h3>
                <AnimatedLink
                  href={`/project/${next.slug}`}
                  className="text-lg font-bold block mt-2"
                >
                  {next.title.rendered.replace(/<[^>]+>/g, "")}
                </AnimatedLink>
              </div>
            )}
          </div>
        </section>

        <section className="pb-[100px] ">
          <div className="title p-10">
            <h2 className="text-center text-[4vmin] font-bold">#SocialMedia</h2>
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
                imageUrl="hhttps://10per-komatsu.com/wp/wp-content/uploads/2024/09/house-in-miiri000-1.jpg"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2025/02/futabayama0000.jpg"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
              <HoverItem
                imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/08/house-in-mochida_00-1.jpg"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/07/house-s_000-1.jpg"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
              <HoverItem
                imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/06/house-in-mitaki000-2.jpg"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/02/houseY0000.jpg"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />

              <HoverItem
                imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2025/02/futabayama0000.jpg"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
              <HoverItem
                imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/08/house-in-mochida_00-1.jpg"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />

              <HoverItem
                imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/07/house-s_000-1.jpg"
                text="LIMITED DROP"
                fontSize="1.6rem"
                fontWeight="600"
                color="#e6e6e6"
                lineHeight="40px"
              />
              <HoverItem
                imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/06/house-in-mitaki000-2.jpg"
                text="Built for Living."
                fontSize="2rem"
                fontWeight="300"
                color="#ffffff"
                lineHeight="50px"
              />
            </div>
          </Marquee>
        </section>
        <section className="section-page-navgation w-full md:mt-14 max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row py-6 justify-between items-center">
            <div className="tag border rounded-full px-4 py-1 text-[.85rem] mb-4 md:mb-0">
              Categories
            </div>
            <span className="text-gray-600">Look More</span>
          </div>

          <div className="border-t border-gray-600 flex flex-col md:flex-row justify-between py-5 items-start md:items-center gap-6">
            <span className="text-[.9rem] text-gray-800 leading-relaxed">
              對許多小家庭、新婚夫妻或首次置產者來說，裝潢預算總是緊繃。但我們相信，美好的居住空間，不該被預算限制。
              <br className="hidden md:block" />
              助力品牌形象升級與業績成長。
            </span>

            <button className="group rotate-[-90deg] relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 shrink-0">
              <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
