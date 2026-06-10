import Link from "next/link";
import { Home, Phone, Search } from "lucide-react";
import { COMPANY } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-neutral-50 flex items-center justify-center py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="text-8xl font-display font-bold text-primary/10 mb-4" aria-hidden="true">
            404
          </div>
          <h1 className="text-2xl font-display font-bold text-neutral-900 mb-3">
            Page introuvable
          </h1>
          <p className="text-neutral-500 mb-8">
            La page que vous cherchez n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou consultez nos services.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#004494] transition-colors"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-neutral-200 text-neutral-700 px-5 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition-colors"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              Nos services
            </Link>
          </div>

          <div className="mt-10 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm">
            <p className="text-sm text-neutral-500 mb-2">Besoin d&apos;aide immédiate ?</p>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="flex items-center justify-center gap-2 text-primary font-bold"
              aria-label={`Appeler ${COMPANY.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
