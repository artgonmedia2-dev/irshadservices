import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import { CITIES, COMPANY, SERVICES } from "@/lib/data";
import { Phone, ArrowRight, CheckCircle, MapPin, Clock, Star } from "lucide-react";

type CityData = {
  slug: string;
  name: string;
  postalCode: string;
  department: string;
  description: string;
  specificContent: string;
  lat: number;
  lng: number;
};

const CITY_DATA: CityData[] = [
  {
    slug: "gennevilliers",
    name: "Gennevilliers",
    postalCode: "92230",
    department: "Hauts-de-Seine",
    description:
      "Plombier, électricien et artisan rénovation à Gennevilliers (92230). Intervention rapide en 30 minutes, devis gratuit, disponible 7j/7.",
    specificContent:
      "Irshad Services est basé à Gennevilliers (84 Avenue Chandon, 92230). Nous intervenons en priorité sur toutes les communes de Gennevilliers pour vos travaux de plomberie, électricité, chauffage, climatisation, carrelage et peinture. Notre connaissance du tissu urbain de Gennevilliers — des Grésillons au Luth en passant par le centre-ville — nous permet d'intervenir rapidement dans tous les quartiers.",
    lat: 48.925,
    lng: 2.294,
  },
  {
    slug: "asnieres-sur-seine",
    name: "Asnières-sur-Seine",
    postalCode: "92600",
    department: "Hauts-de-Seine",
    description:
      "Plombier, électricien à Asnières-sur-Seine (92600). Dépannage urgent, rénovation, devis gratuit. Intervention en 30 min depuis Gennevilliers.",
    specificContent:
      "À seulement 2 km de notre base à Gennevilliers, Asnières-sur-Seine est l'une de nos zones d'intervention principale. Nous intervenons régulièrement dans les quartiers des Bourguignons, de la Plaine et du centre d'Asnières pour tous types de travaux. Les immeubles anciens du secteur nécessitent souvent une mise aux normes électrique et des rénovations de plomberie — notre spécialité.",
    lat: 48.912,
    lng: 2.284,
  },
  {
    slug: "courbevoie",
    name: "Courbevoie",
    postalCode: "92400",
    department: "Hauts-de-Seine",
    description:
      "Plombier, électricien à Courbevoie (92400). Intervention en 30 min, devis gratuit, 7j/7. Artisan qualifié Hauts-de-Seine.",
    specificContent:
      "Courbevoie, à 5 km de Gennevilliers, est une ville dynamique avec de nombreuses résidences et bureaux. Irshad Services intervient à Courbevoie pour tous vos travaux : plomberie dans les immeubles résidentiels, mise aux normes électriques, installation de climatisation pour les appartements et locaux professionnels du quartier des Fauvelles ou du centre-ville.",
    lat: 48.897,
    lng: 2.253,
  },
  {
    slug: "levallois-perret",
    name: "Levallois-Perret",
    postalCode: "92300",
    department: "Hauts-de-Seine",
    description:
      "Plombier, électricien à Levallois-Perret (92300). Dépannage, rénovation, devis gratuit. Artisan qualifié 92. ☎ 07 83 88 68 09",
    specificContent:
      "Levallois-Perret est l'une des villes les plus densément peuplées de France, avec de nombreux appartements haussmanniens et modernes. À 4 km de notre base, nous intervenons régulièrement à Levallois pour des rénovations de salles de bain, des mises aux normes électriques et des dépannages d'urgence. Notre temps d'intervention moyen à Levallois-Perret est de 25 minutes.",
    lat: 48.895,
    lng: 2.287,
  },
  {
    slug: "clichy",
    name: "Clichy",
    postalCode: "92110",
    department: "Hauts-de-Seine",
    description:
      "Plombier, électricien à Clichy (92110). Urgences 24h/24, devis gratuit, intervention rapide. Irshad Services à votre service.",
    specificContent:
      "Clichy, limitrophe de Paris (17ème), est à 3 km de notre agence de Gennevilliers. Nous connaissons bien les spécificités des logements clicynois — parfois anciens, nécessitant des mises aux normes ou des rénovations complètes. Notre équipe intervient dans les quartiers du Bac d'Asnières, de la Mairie de Clichy et du Victor Hugo pour tous types de travaux.",
    lat: 48.904,
    lng: 2.306,
  },
  {
    slug: "la-garenne-colombes",
    name: "La Garenne-Colombes",
    postalCode: "92250",
    department: "Hauts-de-Seine",
    description:
      "Plombier, électricien à La Garenne-Colombes (92250). Intervention rapide, devis gratuit, 7j/7. Artisan de confiance en Hauts-de-Seine.",
    specificContent:
      "La Garenne-Colombes, ville résidentielle calme à 6 km de Gennevilliers, compte de nombreuses maisons individuelles et petits immeubles. Irshad Services y intervient pour des rénovations complètes de maisons, des installations de chauffage et de climatisation, ainsi que pour des dépannages de plomberie et d'électricité.",
    lat: 48.906,
    lng: 2.247,
  },
  {
    slug: "villeneuve-la-garenne",
    name: "Villeneuve-la-Garenne",
    postalCode: "92390",
    department: "Hauts-de-Seine",
    description:
      "Plombier, électricien à Villeneuve-la-Garenne (92390). Intervention rapide depuis Gennevilliers. Devis gratuit. ☎ 07 83 88 68 09",
    specificContent:
      "Villeneuve-la-Garenne, juste au nord de Gennevilliers, est l'une de nos zones d'intervention les plus proches. Nous y intervenons pour des urgences plomberie, des installations de chaudière et de climatisation, ainsi que pour des rénovations complètes d'appartements et de maisons. Notre temps d'intervention à Villeneuve-la-Garenne est parmi les plus courts de notre zone.",
    lat: 48.938,
    lng: 2.327,
  },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CITY_DATA.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: `Plombier & Électricien à ${city.name} (${city.postalCode}) — Irshad Services`,
    description: city.description,
    alternates: { canonical: `${COMPANY.url}/villes/${city.slug}` },
    other: {
      "geo.region": `FR-92`,
      "geo.placename": city.name,
      "geo.position": `${city.lat};${city.lng}`,
      "ICBM": `${city.lat}, ${city.lng}`,
    },
    openGraph: {
      title: `Plombier & Électricien à ${city.name} — Irshad Services`,
      description: city.description,
      url: `${COMPANY.url}/villes/${city.slug}`,
      type: "website",
      locale: "fr_FR",
    },
  };
}

const MAIN_SERVICES = SERVICES.filter((s) =>
  ["plomberie", "electricite", "chauffage", "climatisation"].includes(s.id)
);

export default async function VillePage({ params }: Props) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);
  if (!city) notFound();

  const cityBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: `${COMPANY.name} — ${city.name}`,
    description: city.description,
    url: `${COMPANY.url}/villes/${city.slug}`,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressRegion: city.department,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedIn: { "@type": "State", name: city.department },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.rating.toString(),
      reviewCount: COMPANY.reviewCount.toString(),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: COMPANY.url },
      { "@type": "ListItem", position: 2, name: "Zones d'intervention", item: `${COMPANY.url}/villes` },
      { "@type": "ListItem", position: 3, name: city.name, item: `${COMPANY.url}/villes/${city.slug}` },
    ],
  };

  const otherCities = CITY_DATA.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-24 pb-16 bg-primary" aria-label={`Services à ${city.name}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/contact" className="hover:text-white">Zones d&apos;intervention</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">{city.name}</li>
              </ol>
            </nav>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3">
                  Plombier & Électricien à {city.name}
                </h1>
                <p className="text-white/80 text-lg">
                  Irshad Services — artisan multi-métiers à {city.name} ({city.postalCode}), intervention en 30 min, devis gratuit.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-neutral-100 transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {COMPANY.phone}
              </a>
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#E55A2B] transition-colors"
              >
                Devis gratuit
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-6 bg-white border-b border-neutral-100" aria-label="Chiffres clés">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { value: "30 min", label: `Délai à ${city.name}` },
                { value: "7j/7", label: "Disponibilité" },
                { value: "Gratuit", label: "Devis" },
                { value: "100%", label: "Satisfaction garantie" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-display font-bold text-primary">{value}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white" aria-label={`Nos services à ${city.name}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                  Irshad Services à {city.name} ({city.postalCode})
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {city.specificContent}
                </p>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  Forts de plus de 10 ans d&apos;expérience et de 1 200 clients satisfaits dans les Hauts-de-Seine, nous intervenons à {city.name} pour tous vos travaux de plomberie, électricité, chauffage, climatisation, carrelage, peinture et rénovation complète. Un seul interlocuteur, un seul devis.
                </p>

                {/* Services */}
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">
                  Nos services à {city.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {MAIN_SERVICES.map((service) => {
                    const SIcon = service.icon;
                    return (
                      <Link
                        key={service.id}
                        href={service.slug}
                        className="flex items-start gap-4 p-4 rounded-xl border border-neutral-100 hover:border-primary/30 hover:shadow-sm transition-all group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                          <SIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900 group-hover:text-primary transition-colors text-sm">
                            {service.title} à {city.name}
                          </p>
                          <p className="text-xs text-neutral-500 mt-0.5">{service.shortDesc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Why us */}
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">
                  Pourquoi choisir Irshad Services à {city.name} ?
                </h3>
                <ul className="space-y-3">
                  {[
                    `Intervention en moins de 30 minutes à ${city.name}`,
                    "Devis gratuit et sans engagement",
                    "Artisans certifiés (RGE, Qualibat, NF C 15-100)",
                    "Disponible 7j/7, urgences 24h/24",
                    "Garantie satisfaction 100% sur tous les travaux",
                    "Décennale pour les gros travaux de rénovation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar */}
              <aside className="space-y-5">
                {/* CTA */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={`w-4 h-4 ${s <= 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-400/50 text-yellow-400/50"}`} aria-hidden="true" />
                    ))}
                    <span className="text-white/80 text-xs ml-1">4.5/5</span>
                  </div>
                  <p className="font-display font-bold text-lg mb-1">
                    Intervention à {city.name}
                  </p>
                  <p className="text-white/70 text-sm mb-4">
                    Disponible maintenant · Réponse en 30 min
                  </p>
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="flex items-center justify-center gap-2 bg-white text-primary py-3 rounded-xl font-semibold text-sm hover:bg-neutral-100 transition-colors mb-2"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Appeler maintenant
                  </a>
                  <Link
                    href="/devis"
                    className="flex items-center justify-center gap-2 bg-[#FF6B35] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#E55A2B] transition-colors"
                  >
                    Devis en ligne
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>

                {/* Hours */}
                <div className="bg-neutral-50 rounded-2xl p-5">
                  <h3 className="font-display font-bold text-neutral-900 mb-3 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                    Horaires à {city.name}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    <li className="flex justify-between"><span>Lundi</span><span className="font-medium">8h – 18h</span></li>
                    <li className="flex justify-between"><span>Mardi</span><span className="font-medium">7h – 18h</span></li>
                    <li className="flex justify-between"><span>Mer–Sam</span><span className="font-medium">9h – 19h</span></li>
                    <li className="flex justify-between"><span>Dimanche</span><span className="font-medium text-[#DC2626]">Urgences uniquement</span></li>
                  </ul>
                </div>

                {/* Other cities */}
                <div className="bg-neutral-50 rounded-2xl p-5">
                  <h3 className="font-display font-bold text-neutral-900 mb-3 text-sm">
                    Autres villes desservies
                  </h3>
                  <ul className="space-y-1.5">
                    {otherCities.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/villes/${c.slug}`}
                          className="flex items-center gap-2 text-sm text-neutral-700 hover:text-primary transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                          {c.name} ({c.postalCode})
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/contact" className="flex items-center gap-2 text-xs text-primary font-semibold mt-2 hover:underline">
                        Voir toutes nos zones →
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
