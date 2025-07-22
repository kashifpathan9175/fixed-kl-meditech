// next-sitemap.config.js

module.exports = {
  siteUrl:  process.env.NEXT_PUBLIC_SITE_URL || 'https://klmeditechindustries.com', // Use localhost until deployed
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
}
