/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://kuankoshi.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, url) => {
    return {
      loc: decodeURI(url), // ✅ 保持中文路徑
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const res = await fetch(
      'https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?per_page=100&_fields=slug'
    );
    const posts = await res.json();

    const paths = posts.map((post) => ({
      loc: decodeURI(`/project/${post.slug}`), // ✅ 同樣加 decodeURI
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));

    return paths;
  },
};
