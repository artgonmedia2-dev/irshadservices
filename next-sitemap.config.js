/** @type {import('next-sitemap').IConfig} */

const BLOG_SLUGS = [
  "deboucher-canalisation-gennevilliers",
  "fuite-eau-urgence-asnieres-sur-seine",
  "mise-aux-normes-electriques-gennevilliers",
  "chaudiere-gaz-panne-hiver-gennevilliers",
  "climatisation-reversible-gennevilliers",
  "renovation-appartement-gennevilliers",
  "maprimenov-2025-ile-de-france",
  "plombier-urgence-nuit-gennevilliers",
  "borne-recharge-voiture-electrique-gennevilliers",
  "travaux-location-locataire-proprietaire",
];

const CITY_SLUGS = [
  "gennevilliers",
  "asnieres-sur-seine",
  "courbevoie",
  "levallois-perret",
  "clichy",
  "la-garenne-colombes",
  "villeneuve-la-garenne",
];

module.exports = {
  siteUrl: "https://irshadservices.fr",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/devis/merci"] },
    ],
    additionalSitemaps: ["https://irshadservices.fr/sitemap.xml"],
  },
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async (config) => {
    const staticPaths = [
      "/",
      "/contact",
      "/devis",
      "/services",
      "/plomberie",
      "/electricite",
      "/chauffage",
      "/climatisation",
      "/blog",
    ];

    const blogPaths = BLOG_SLUGS.map((slug) => `/blog/${slug}`);
    const cityPaths = CITY_SLUGS.map((slug) => `/villes/${slug}`);

    const allPaths = [...staticPaths, ...blogPaths, ...cityPaths];

    return Promise.all(allPaths.map((path) => config.transform(config, path)));
  },
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/services": 0.8,
      "/plomberie": 0.8,
      "/electricite": 0.8,
      "/chauffage": 0.8,
      "/climatisation": 0.8,
      "/blog": 0.8,
      "/devis": 0.7,
      "/contact": 0.6,
    };

    let priority = priorities[path] ?? 0.6;
    let changefreq = "monthly";

    if (path === "/" || ["/services", "/plomberie", "/electricite", "/chauffage", "/climatisation", "/blog"].includes(path)) {
      changefreq = "weekly";
    }

    if (path.startsWith("/blog/")) {
      priority = 0.7;
      changefreq = "monthly";
    }

    if (path.startsWith("/villes/")) {
      priority = 0.75;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
