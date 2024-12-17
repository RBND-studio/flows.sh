/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [`https://${process.env.NEXT_PUBLIC_DOMAIN}/docs/sitemap.xml`],
  },
};
