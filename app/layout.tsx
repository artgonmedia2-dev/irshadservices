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
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  description:
    "Plomberie, électricité, chauffage et rénovation à Gennevilliers (92230). Intervention rapide 7j/7.",
  url: COMPANY.url,
  telephone: COMPANY.phoneTel,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    addressCountry: COMPANY.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.lat,
    longitude: COMPANY.lng,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday"], opens: "07:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "19:00" },
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: COMPANY.rating.toString(),
    reviewCount: COMPANY.reviewCount.toString(),
  },
  image: `${COMPANY.url}/og-image.jpg`,
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
