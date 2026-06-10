import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Phone, MessageCircle, Home } from "lucide-react";
import { COMPANY } from "@/lib/data";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Demande de devis envoyée | Irshad Services",
  description: "Votre demande de devis a bien été reçue. Nous vous contactons sous 30 minutes.",
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-neutral-50 flex items-center justify-center py-20 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 bg-[#00C853]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#00C853]" aria-hidden="true" />
          </div>

          <h1 className="text-3xl font-display font-bold text-neutral-900 mb-3">
            Demande reçue !
          </h1>
          <p className="text-neutral-500 text-lg mb-8">
            Merci pour votre confiance. Nous vous rappelons sous{" "}
            <strong className="text-primary">30 minutes</strong> pour discuter de votre projet.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8 space-y-4">
            <h2 className="font-semibold text-neutral-900">En attendant…</h2>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="flex items-center gap-3 p-4 border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              <div className="text-left">
                <p className="font-semibold text-primary">{COMPANY.phone}</p>
                <p className="text-xs text-neutral-500">Vous pouvez aussi nous appeler directement</p>
              </div>
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#25D366]/20 rounded-xl hover:bg-[#E8FAF0] transition-colors"
            >
              <MessageCircle className="w-5 h-5" style={{ color: "#25D366" }} aria-hidden="true" />
              <div className="text-left">
                <p className="font-semibold" style={{ color: "#25D366" }}>WhatsApp</p>
                <p className="text-xs text-neutral-500">Envoyez des photos de votre problème</p>
              </div>
            </a>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
