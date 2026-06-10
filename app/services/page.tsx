import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tous nos services — Plomberie, Électricité, Chauffage | Irshad Services",
  description:
    "Découvrez tous les services d'Irshad Services : plomberie, électricité, chauffage, climatisation, carrelage, peinture et rénovation à Gennevilliers.",
  alternates: { canonical: `${COMPANY.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-24 pb-12 bg-primary" aria-label="Nos services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Services</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Tous nos services à Gennevilliers
            </h1>
            <p className="text-white/80 text-lg">
              Plomberie, électricité, chauffage, rénovation — une seule entreprise pour tous vos travaux
            </p>
          </div>
        </section>

        <section className="py-16 bg-neutral-50" aria-label="Liste des services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                const isUrgent = service.id === "urgence";
                return (
                  <Link
                    key={service.id}
                    href={service.slug}
                    className={`group block p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                      isUrgent
                        ? "bg-[#FEF2F2] border-[#DC2626]/20 hover:border-[#DC2626]"
                        : "bg-white border-neutral-100 hover:border-primary/30"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isUrgent ? "bg-[#DC2626]/10" : "bg-primary/10"
                    }`}>
                      <Icon className={`w-6 h-6 ${isUrgent ? "text-[#DC2626]" : "text-primary"}`} aria-hidden="true" />
                    </div>
                    <h2 className="font-display font-bold text-neutral-900 mb-2">{service.title}</h2>
                    <p className="text-neutral-500 text-sm mb-4 leading-relaxed">{service.shortDesc}</p>
                    <ul className="space-y-1 mb-5">
                      {service.features.slice(0, 3).map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-neutral-600">
                          <div className="w-1 h-1 rounded-full bg-primary" aria-hidden="true" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <span className={`inline-flex items-center gap-1 text-sm font-semibold ${
                      isUrgent ? "text-[#DC2626]" : "text-primary"
                    }`} aria-hidden="true">
                      En savoir plus
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-neutral-600 mb-4">Vous avez un projet qui ne correspond pas à nos services ?</p>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#004494] transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Parlez-nous de votre projet
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
