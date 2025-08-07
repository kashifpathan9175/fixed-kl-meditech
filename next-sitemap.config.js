/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.klmeditechindustries.com',
  generateRobotsTxt: true,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  // App Router fix: scan manually defined paths
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  // 👇 This is where you manually define the routes since `app/` doesn't auto-detect
  additionalPaths: async (config) => [
    {
      loc: `${config.siteUrl}/`, // 👈 Homepage
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
  ],
};
