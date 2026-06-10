"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import DevisForm from "@/components/ui/DevisForm";

export default function DevisSection() {
  return (
    <section
      id="devis"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0056B3 0%, #003370 100%)" }}
      aria-labelledby="devis-title"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-white"
          >
            <motion.p variants={fadeInUp} className="text-white/60 font-semibold text-sm uppercase tracking-widest mb-3">
              Gratuit &amp; Sans engagement
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              id="devis-title"
              className="text-3xl sm:text-4xl font-display font-bold mb-4"
            >
              Besoin d&apos;un devis gratuit ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8">
              Décrivez votre projet, nous vous rappelons sous 30 minutes
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              {[
                "Devis gratuit et sans engagement",
                "Réponse en moins de 30 minutes",
                "Artisan certifié et assuré",
                "Intervention rapide 7j/7",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00C853] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-white/80 text-sm mb-3">C&apos;est une urgence ?</p>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="flex items-center gap-3 group"
                aria-label={`Appeler en urgence : ${COMPANY.phone}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#DC2626] flex items-center justify-center shrink-0 pulse-urgent">
                  <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg group-hover:text-yellow-300 transition-colors">
                    {COMPANY.phone}
                  </p>
                  <p className="text-white/60 text-xs">Disponible 7j/7 — Intervention &lt; 30 min</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <DevisForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
