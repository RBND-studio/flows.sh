/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://flows.sh",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://flows.sh/docs/sitemap.xml"],
  },
};
