import * as cheerio from 'cheerio';


export function getStructuredProjectData(post) {
  const $ = cheerio.load(post.content.rendered);
  const imageObjects = [];

  $('img').each((_, img) => {
    const src = $(img).attr('src');
    if (src) {
      imageObjects.push({
        "@type": "ImageObject",
        "contentUrl": src,
        "description": post.title.rendered.replace(/<[^>]+>/g, ""),
      });
    }
  });

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": post.title.rendered.replace(/<[^>]+>/g, ""),
    "description": "寬越設計室內設計專案作品",
    "creator": {
      "@type": "Organization",
      "name": "寬越設計"
    },
    "image": imageObjects,
    "datePublished": post.date,
    "dateModified": post.modified
  };
}

export function getProjectListStructuredData(posts) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "設計作品一覽｜寬越設計",
    "description": "瀏覽寬越設計的室內設計作品，包括老屋翻新、新成屋裝潢與商業空間設計。",
    "hasPart": posts.map((post) => {
      return {
        "@type": "CreativeWork",
        "name": post.title.rendered.replace(/<[^>]+>/g, ""),
        "url": `https://kuankoshi.com/project/${post.slug}`,
        "datePublished": post.date,
        "dateModified": post.modified,
        "image": post.clean_featured_image || null,
      };
    }).filter(item => item.image !== null)
  };
}
