import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import DevisForm from "@/components/ui/DevisForm";
import { Phone, Clock, Shield, Star } from "lucide-react";
import { COMPANY } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Devis gratuit plomberie & électricité — Gennevilliers | Irshad Services",
  description:
    "Demandez votre devis gratuit en ligne pour vos travaux de plomberie, électricité, chauffage ou rénovation à Gennevilliers. Réponse en 30 minutes.",
  alternates: { canonical: `${COMPANY.url}/devis` },
};

export default function DevisPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Header */}
        <section className="pt-24 pb-12 bg-primary" aria-label="En-tête">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Devis gratuit</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Devis gratuit plomberie &amp; électricité
            </h1>
            <p className="text-white/80 text-lg">
              Gennevilliers (92230) — Réponse garantie sous 30 minutes
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-neutral-50" aria-label="Formulaire de devis">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { icon: <Star className="w-5 h-5 text-yellow-400" />, label: "4.5/5 avis" },
                { icon: <Clock className="w-5 h-5 text-primary" />, label: "Réponse 30 min" },
                { icon: <Shield className="w-5 h-5 text-[#00C853]" />, label: "Sans engagement" },
                { icon: <Phone className="w-5 h-5 text-[#DC2626]" />, label: "7j/7" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm">
                  {item.icon}
                  <span className="text-sm font-medium text-neutral-700">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-5 gap-10">
              {/* Form */}
              <div className="lg:col-span-3">
                <DevisForm />
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-2 space-y-5">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="font-display font-bold text-neutral-900 mb-4">Besoin d&apos;aide ?</h2>
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{COMPANY.phone}</p>
                      <p className="text-xs text-neutral-500">Appel gratuit, réponse immédiate</p>
                    </div>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-neutral-900 mb-3">Ce qui est inclus</h3>
                  <ul className="space-y-2">
                    {[
                      "Visite de diagnostic gratuite",
                      "Devis détaillé par écrit",
                      "Explication des travaux",
                      "Délai d'intervention communiqué",
                      "Garantie sur les travaux",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C853]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
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
