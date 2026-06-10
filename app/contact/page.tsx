import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import ContactForm from "@/components/ui/ContactForm";
import OpenStatusBadge from "@/components/ui/OpenStatusBadge";
import ClientLeafletMap from "@/components/ui/ClientLeafletMap";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { COMPANY, SCHEDULE_LABELS, SCHEDULE } from "@/lib/data";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact — Plombier & Électricien Gennevilliers | Irshad Services",
  description:
    "Contactez Irshad Services pour vos travaux de plomberie et électricité à Gennevilliers. Formulaire en ligne, téléphone, WhatsApp. Urgences 7j/7.",
  alternates: { canonical: `${COMPANY.url}/contact` },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  telephone: COMPANY.phoneTel,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.lat,
    longitude: COMPANY.lng,
  },
};

const scheduleRows = [1, 2, 3, 4, 5, 6, 0].map((day) => ({
  day,
  label: SCHEDULE_LABELS[day],
  hours: SCHEDULE[day] ? `${SCHEDULE[day]!.open}h – ${SCHEDULE[day]!.close}h` : "Fermé",
}));

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Page header */}
        <section className="pt-24 pb-12 bg-primary" aria-label="En-tête de la page contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Contact</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Contactez Irshad Services
            </h1>
            <p className="text-white/80 text-lg">
              Plombier &amp; Électricien à Gennevilliers — Réponse garantie sous 30 minutes
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 bg-neutral-50" aria-label="Formulaire et coordonnées">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Contact form */}
              <div>
                <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                  Envoyer un message
                </h2>
                <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <ContactForm />
                </div>
              </div>

              {/* Right: Info + Map */}
              <div className="space-y-6">
                {/* Open status */}
                <OpenStatusBadge />

                {/* Contact info */}
                <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <h2 className="text-xl font-display font-bold text-neutral-900 mb-5">
                    Nos coordonnées
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href={`tel:${COMPANY.phoneTel}`}
                        className="flex items-start gap-4 group"
                        aria-label={`Appeler ${COMPANY.phone}`}
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400 font-medium">Téléphone</p>
                          <p className="font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                            {COMPANY.phone}
                          </p>
                          <p className="text-xs text-neutral-400">Urgences 7j/7</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href={COMPANY.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#E8FAF0" }}>
                          <MessageCircle className="w-5 h-5" style={{ color: "#25D366" }} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400 font-medium">WhatsApp</p>
                          <p className="font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                            {COMPANY.phone}
                          </p>
                          <p className="text-xs text-neutral-400">Envoyez des photos de votre problème</p>
                        </div>
                      </a>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 font-medium">Email</p>
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="font-semibold text-neutral-900 hover:text-primary transition-colors"
                        >
                          {COMPANY.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 font-medium">Adresse</p>
                        <p className="font-semibold text-neutral-900">
                          {COMPANY.address}
                          <br />
                          {COMPANY.postalCode} {COMPANY.city}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Schedule */}
                <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                    <h3 className="font-display font-bold text-neutral-900">Horaires</h3>
                  </div>
                  <table className="w-full text-sm" aria-label="Horaires d'ouverture">
                    <tbody className="divide-y divide-neutral-50">
                      {scheduleRows.map(({ day, label, hours }) => (
                        <tr key={day} className={day === new Date().getDay() ? "text-primary font-semibold" : ""}>
                          <td className="py-2 text-neutral-700">{label}</td>
                          <td className="py-2 text-right text-neutral-500">{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-3 text-xs text-neutral-400">
                    * Urgences disponibles en dehors des horaires sur le {COMPANY.phone}
                  </p>
                </div>

                {/* Map */}
                <div>
                  <ClientLeafletMap />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
