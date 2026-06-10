/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://irshadservices.fr",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/devis/merci"] },
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/devis"),
    await config.transform(config, "/services"),
    await config.transform(config, "/plomberie"),
    await config.transform(config, "/electricite"),
    await config.transform(config, "/chauffage"),
    await config.transform(config, "/climatisation"),
  ],
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/services": 0.8,
      "/plomberie": 0.8,
      "/electricite": 0.8,
      "/chauffage": 0.8,
      "/climatisation": 0.8,
      "/devis": 0.7,
      "/contact": 0.6,
    };
    return {
      loc: path,
      changefreq: path === "/" || path.startsWith("/services") || ["/plomberie", "/electricite", "/chauffage", "/climatisation"].includes(path) ? "weekly" : "monthly",
      priority: priorities[path] ?? 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
