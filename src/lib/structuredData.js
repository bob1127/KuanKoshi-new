import * as cheerio from "cheerio";

/**
 * 結構化資料：單一專案頁面（Product + Breadcrumb）
 */
export function getStructuredProjectData(post) {
  const $ = cheerio.load(post.content.rendered);
  const images = [];

  $("img").each((_, img) => {
    const src = $(img).attr("src");
    if (src) images.push(src);
  });

  const cleanTitle = post.title.rendered.replace(/<[^>]+>/g, "");
  const description = post.excerpt?.rendered
    ? cheerio.load(post.excerpt.rendered).text()
    : "寬越設計室內設計專案作品";

  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": cleanTitle,
      "image": images.slice(0, 5),
      "description": description,
      "brand": {
        "@type": "Organization",
        "name": "寬越設計",
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "TWD",
        "price": post.acf?.price || "1000000",
        "availability": "https://schema.org/InStock",
        "url": `https://www.kuankoshi.com/project/${post.slug}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "首頁",
          "item": "https://www.kuankoshi.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "作品案例",
          "item": "https://www.kuankoshi.com/project",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": cleanTitle,
          "item": `https://www.kuankoshi.com/project/${post.slug}`,
        },
      ],
    },
  ];
}

/**
 * 結構化資料：專案總覽頁（ItemList）
 */
export function getProjectListStructuredData(posts) {
  const items = posts
    .filter((post) => post.clean_featured_image)
    .map((post, index) => {
      const cleanTitle = post.title.rendered.replace(/<[^>]+>/g, "");
      return {
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.kuankoshi.com/project/${post.slug}`,
        "item": {
          "@type": "Product",
          "name": cleanTitle,
          "image": post.clean_featured_image,
          "description": "寬越設計室內設計專案作品",
          "brand": {
            "@type": "Organization",
            "name": "寬越設計",
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "TWD",
            "price": post.acf?.price || "1000000",
            "availability": "https://schema.org/InStock",
            "url": `https://www.kuankoshi.com/project/${post.slug}`,
          },
        },
      };
    });

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "寬越設計｜室內設計作品總覽",
    "itemListElement": items,
  };
}