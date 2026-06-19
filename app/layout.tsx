import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/data";
import Script from "next/script";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "Plombier & Électricien à Gennevilliers | Irshad Services — Devis Gratuit",
    template: "%s | Irshad Services",
  },
  description:
    "Irshad Services : plomberie, électricité, chauffage et rénovation à Gennevilliers (92230). Devis gratuit, intervention rapide en 30 min. ☎ 07 83 88 68 09",
  keywords: [
    "plombier Gennevilliers",
    "électricien Gennevilliers",
    "dépannage plomberie 92230",
    "rénovation électricité Gennevilliers",
    "chauffage Gennevilliers",
    "climatisation Gennevilliers",
    "devis gratuit plomberie",
    "plombier Asnières-sur-Seine",
    "plombier Courbevoie",
    "plombier Levallois-Perret",
    "plombier Clichy",
    "électricien 92230",
    "artisan Hauts-de-Seine",
    "dépannage urgence plomberie nuit",
    "chauffagiste Gennevilliers",
  ],
  authors: [{ name: "Irshad Services" }],
  creator: "Irshad Services",
  publisher: "Irshad Services",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: "Plombier & Électricien à Gennevilliers | Irshad Services",
    description:
      "Plomberie, électricité, chauffage et rénovation à Gennevilliers. Devis gratuit, intervention en 30 min. 07 83 88 68 09",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Irshad Services — Plomberie & Électricité Gennevilliers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plombier & Électricien à Gennevilliers | Irshad Services",
    description:
      "Plomberie, électricité, chauffage et rénovation à Gennevilliers. Devis gratuit, intervention en 30 min.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "geo.region": "FR-92",
    "geo.placename": "Gennevilliers, Hauts-de-Seine",
    "geo.position": `${COMPANY.lat};${COMPANY.lng}`,
    "ICBM": `${COMPANY.lat}, ${COMPANY.lng}`,
    "DC.title": "Irshad Services — Plombier & Électricien Gennevilliers",
    "DC.subject": "Plomberie, Électricité, Chauffage, Climatisation, Rénovation",
    "DC.coverage": "Gennevilliers 92230, Asnières-sur-Seine, Courbevoie, Levallois-Perret, Clichy, La Garenne-Colombes, Villeneuve-la-Garenne",
    "DC.language": "fr",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "Plumber"],
  name: COMPANY.name,
  description:
    "Plomberie, électricité, chauffage, climatisation et rénovation à Gennevilliers (92230). Intervention rapide 7j/7, devis gratuit.",
  url: COMPANY.url,
  telephone: COMPANY.phoneTel,
  email: COMPANY.email,
  logo: `${COMPANY.url}/logo.png`,
  image: `${COMPANY.url}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    addressRegion: "Hauts-de-Seine",
    addressCountry: COMPANY.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.lat,
    longitude: COMPANY.lng,
  },
  areaServed: [
    { "@type": "City", name: "Gennevilliers", containedIn: { "@type": "State", name: "Hauts-de-Seine" } },
    { "@type": "City", name: "Asnières-sur-Seine" },
    { "@type": "City", name: "Courbevoie" },
    { "@type": "City", name: "Levallois-Perret" },
    { "@type": "City", name: "Clichy" },
    { "@type": "City", name: "La Garenne-Colombes" },
    { "@type": "City", name: "Villeneuve-la-Garenne" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: COMPANY.lat, longitude: COMPANY.lng },
    geoRadius: "15000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de plomberie, électricité et rénovation",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plomberie d'urgence", description: "Dépannage fuite d'eau, débouchage, installation sanitaire" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Électricité", description: "Mise aux normes, rénovation électrique, tableau électrique" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chauffage", description: "Installation chaudière, pompe à chaleur, entretien" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Climatisation", description: "Installation et entretien de climatiseurs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation complète", description: "Carrelage, peinture, rénovation appartement" } },
    ],
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday"], opens: "07:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "19:00" },
  ],
  currenciesAccepted: "EUR",
  paymentAccepted: "Espèces, Chèque, Virement bancaire, Carte bancaire",
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: COMPANY.rating.toString(),
    reviewCount: COMPANY.reviewCount.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    COMPANY.facebook,
    COMPANY.instagram,
    COMPANY.linkedin,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY.name,
  url: COMPANY.url,
  description: "Plombier, électricien, chauffagiste et artisan rénovation à Gennevilliers (92230) et communes voisines.",
  inLanguage: "fr-FR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${COMPANY.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
        <MobileBottomBar />
      </body>
    </html>
  );
}
