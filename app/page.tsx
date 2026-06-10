import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MapSection from "@/components/sections/MapSection";
import DevisSection from "@/components/sections/DevisSection";
import FAQSection from "@/components/sections/FAQSection";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Plombier & Électricien à Gennevilliers | Irshad Services — Devis Gratuit",
  description:
    "Irshad Services : plombier et électricien à Gennevilliers (92230). Devis gratuit, intervention rapide en 30 min, 7j/7. Chauffage, climatisation, rénovation. ☎ 07 83 88 68 09",
  alternates: {
    canonical: COMPANY.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <MapSection />
        <DevisSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
