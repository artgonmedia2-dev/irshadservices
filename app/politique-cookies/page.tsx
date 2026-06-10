import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique cookies | Irshad Services",
  description: "Politique d'utilisation des cookies sur irshadservices.fr.",
  robots: { index: true, follow: false },
};

export default function PolitiqueCookiesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-primary">Accueil</Link></li>
              <li>/</li>
              <li className="text-neutral-700">Politique cookies</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-display font-bold text-neutral-900 mb-8">
            Politique d&apos;utilisation des cookies
          </h1>

          <div className="space-y-8 text-neutral-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone lors de votre visite sur un site web. Il permet au site de mémoriser vos actions et préférences pendant une durée déterminée.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">Cookies utilisés sur ce site</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-700">Cookie</th>
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-700">Type</th>
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-700">Finalité</th>
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-neutral-700">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "irshad-devis-form", type: "Fonctionnel", purpose: "Sauvegarde temporaire du formulaire de devis", duration: "Session" },
                      { name: "_plausible", type: "Analytique", purpose: "Mesure d'audience anonyme (Plausible Analytics, sans cookie tiers)", duration: "Non applicable" },
                    ].map((row) => (
                      <tr key={row.name}>
                        <td className="p-3 border border-neutral-200 font-mono text-xs">{row.name}</td>
                        <td className="p-3 border border-neutral-200">{row.type}</td>
                        <td className="p-3 border border-neutral-200">{row.purpose}</td>
                        <td className="p-3 border border-neutral-200">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-3">Gestion des cookies</h2>
              <p>
                Vous pouvez à tout moment modifier vos préférences en matière de cookies en configurant votre navigateur. La plupart des navigateurs vous permettent de refuser les cookies ou d&apos;être alerté lorsqu&apos;un cookie est déposé.
              </p>
              <p className="mt-2">
                Note : Ce site utilise Plausible Analytics, une solution respectueuse de la vie privée qui ne dépose aucun cookie de traçage et ne collecte aucune donnée personnelle identifiable.
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
