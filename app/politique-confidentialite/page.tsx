import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Irshad Services",
  description: "Politique de confidentialité et protection des données personnelles — Irshad Services.",
  robots: { index: true, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
              <li>/</li>
              <li className="text-neutral-700">Politique de confidentialité</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-display font-bold text-neutral-900 mb-8">
            Politique de confidentialité
          </h1>

          <div className="space-y-8 text-neutral-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">1. Responsable du traitement</h2>
              <p>
                Irshad Services, {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}.<br />
                Contact DPO : <a href={`mailto:${COMPANY.email}`} className="text-primary">{COMPANY.email}</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">2. Données collectées</h2>
              <p>Nous collectons les données suivantes lorsque vous utilisez nos formulaires :</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale d&apos;intervention</li>
                <li>Description de votre projet ou problème</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">3. Finalités du traitement</h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Répondre à vos demandes de devis ou de contact</li>
                <li>Vous recontacter par téléphone ou email</li>
                <li>Améliorer nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">4. Base légale</h2>
              <p>
                Le traitement de vos données est fondé sur votre consentement (art. 6.1.a RGPD) et sur l&apos;exécution d&apos;un contrat ou de mesures précontractuelles (art. 6.1.b RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">5. Conservation des données</h2>
              <p>
                Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact, sauf obligation légale contraire.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">6. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;)</li>
                <li>Droit d&apos;opposition au traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit de retirer votre consentement à tout moment</li>
              </ul>
              <p className="mt-2">
                Pour exercer vos droits, contactez-nous à{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary">{COMPANY.email}</a>.
                Vous pouvez également introduire une réclamation auprès de la CNIL.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">7. Cookies</h2>
              <p>
                Ce site utilise des cookies techniques nécessaires à son fonctionnement. Pour plus d&apos;informations, consultez notre{" "}
                <Link href="/politique-cookies" className="text-primary underline">Politique cookies</Link>.
              </p>
            </section>

            <p className="text-sm text-neutral-400 pt-4 border-t border-neutral-100">
              Dernière mise à jour : juin 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
