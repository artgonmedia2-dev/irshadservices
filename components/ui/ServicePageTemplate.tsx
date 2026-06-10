import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import DevisSection from "@/components/sections/DevisSection";
import type { LucideIcon } from "lucide-react";

type ServicePageProps = {
  id: string;
  title: string;
  h1: string;
  description: string;
  longDescription: string;
  features: string[];
  subServices: string[];
  Icon: LucideIcon;
  breadcrumb: string;
};

export default function ServicePageTemplate({
  id,
  title,
  h1,
  description,
  longDescription,
  features,
  subServices,
  Icon,
  breadcrumb,
}: ServicePageProps) {
  const otherServices = SERVICES.filter(
    (s) => s.id !== id && ["plomberie", "electricite", "chauffage", "climatisation"].includes(s.id)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phoneTel,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY.city,
        postalCode: COMPANY.postalCode,
        addressCountry: "FR",
      },
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: COMPANY.lat, longitude: COMPANY.lng },
      geoRadius: "15000",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-24 pb-16 bg-primary" aria-label={`Service ${title}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">{breadcrumb}</li>
              </ol>
            </nav>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3">
                  {h1}
                </h1>
                <p className="text-white/80 text-lg max-w-2xl">{description}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-neutral-100 transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {COMPANY.phone}
                  </a>
                  <a
                    href="#devis"
                    className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#E55A2B] transition-colors"
                  >
                    Devis gratuit
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white" aria-label="Description du service">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                  {title} à Gennevilliers par Irshad Services
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6 whitespace-pre-line">
                  {longDescription}
                </p>

                {/* Sub-services */}
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">
                  Nos prestations de {title.toLowerCase()}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {subServices.map((sub) => (
                    <li key={sub} className="flex items-start gap-2 p-3 rounded-xl bg-neutral-50">
                      <CheckCircle className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-sm text-neutral-700">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar */}
              <aside>
                {/* Key features */}
                <div className="bg-primary/5 rounded-2xl p-6 mb-5">
                  <h3 className="font-display font-bold text-neutral-900 mb-4">Pourquoi nous choisir ?</h3>
                  <ul className="space-y-3">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm text-neutral-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 text-center">
                  <p className="font-semibold text-neutral-900 mb-2">Besoin d&apos;une intervention ?</p>
                  <p className="text-sm text-neutral-500 mb-4">Devis gratuit en 30 minutes</p>
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#004494] transition-colors mb-2"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Appeler maintenant
                  </a>
                  <a
                    href="#devis"
                    className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-3 rounded-xl font-semibold text-sm hover:bg-primary/5 transition-colors"
                  >
                    Formulaire de devis
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-12 bg-neutral-50" aria-label="Autres services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-display font-bold text-neutral-900 mb-6">
              Nos autres services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {otherServices.map((service) => {
                const SIcon = service.icon;
                return (
                  <Link
                    key={service.id}
                    href={service.slug}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group border border-neutral-100"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <SIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <span className="font-medium text-neutral-800 group-hover:text-primary transition-colors text-sm">
                      {service.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Devis CTA */}
        <DevisSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
