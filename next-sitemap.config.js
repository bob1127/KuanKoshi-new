/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://kuankoshi.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const res = await fetch(
      'https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?per_page=100&_fields=slug'
    );
    const posts = await res.json();

    const paths = posts.map((post) => ({
      loc: `/project/${post.slug}`,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));

    return paths;
  },
};
