import cheerio from 'cheerio';

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
