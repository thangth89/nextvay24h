/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://vay24h.pro.vn",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
};
