import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales | Irshad Services",
  description: "Mentions légales du site irshadservices.fr — Irshad Services, plombier et électricien à Gennevilliers.",
  robots: { index: true, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
              <li>/</li>
              <li className="text-neutral-700">Mentions légales</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-display font-bold text-neutral-900 mb-8">Mentions légales</h1>

          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">1. Éditeur du site</h2>
              <p>
                <strong>Raison sociale :</strong> Irshad Services<br />
                <strong>Adresse :</strong> {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}<br />
                <strong>Téléphone :</strong> <a href={`tel:${COMPANY.phoneTel}`} className="text-primary">{COMPANY.phone}</a><br />
                <strong>Email :</strong> <a href={`mailto:${COMPANY.email}`} className="text-primary">{COMPANY.email}</a><br />
                <strong>Forme juridique :</strong> Entreprise individuelle<br />
                <strong>SIRET :</strong> [À compléter]<br />
                <strong>Numéro TVA :</strong> [À compléter]<br />
                <strong>Responsable de la publication :</strong> Irshad [Nom complet à compléter]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">2. Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                <strong>Hostinger International Ltd</strong><br />
                61 Lordou Vironos str., 6023 Larnaca, Chypre<br />
                Site web : <a href="https://www.hostinger.fr" className="text-primary" rel="noopener noreferrer" target="_blank">www.hostinger.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">3. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos, icônes, vidéos) est la propriété exclusive d&apos;Irshad Services ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation sans autorisation préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">4. Limitation de responsabilité</h2>
              <p>
                Irshad Services s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur ce site. Cependant, nous ne pouvons garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">5. Protection des données personnelles</h2>
              <p>
                Les données collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont jamais cédées à des tiers. Pour en savoir plus, consultez notre{" "}
                <Link href="/politique-confidentialite" className="text-primary underline">Politique de confidentialité</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">6. Droit applicable</h2>
              <p>
                Le présent site et les mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
