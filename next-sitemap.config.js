/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://kuankoshi.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: false, // ❌ 關閉預設 lastmod，因為你手動設定了
  transform: async (config, url) => {
    return {
      loc: decodeURI(url), // ✅ 中文路徑可讀性
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(), // ✅ 自訂 lastmod
    };
  },
  additionalPaths: async (config) => {
    const res = await fetch(
      'https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?per_page=100&_fields=slug'
    );
    const posts = await res.json();

    return posts.map((post) => ({
      loc: decodeURI(`/project/${post.slug}`),
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};
