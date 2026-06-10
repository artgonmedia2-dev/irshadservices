"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { CITIES, COMPANY } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

const LeafletMap = dynamic(() => import("@/components/ui/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-neutral-100 rounded-2xl flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function MapSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="map-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Zone d&apos;intervention
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="map-title"
            className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4"
          >
            Intervention sur Gennevilliers et alentours
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-500 max-w-2xl mx-auto">
            Basés au {COMPANY.address}, nous intervenons dans un rayon de 15 km autour de Gennevilliers
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Cities list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-1"
          >
            <h3 className="font-display font-semibold text-neutral-900 mb-4 text-lg">
              Communes desservies
            </h3>
            <ul className="space-y-2">
              {CITIES.map((city) => (
                <motion.li key={city.name} variants={fadeInUp}>
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span className="text-sm font-medium text-neutral-700 group-hover:text-primary transition-colors">
                        {city.name}
                      </span>
                    </div>
                    {city.distance && (
                      <span className="text-xs text-neutral-400 font-medium">{city.distance}</span>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-sm text-neutral-600">
                Votre commune n&apos;est pas dans la liste ?{" "}
                <Link href="/contact" className="text-primary font-semibold hover:underline">
                  Contactez-nous
                </Link>{" "}
                pour vérifier si nous intervenons dans votre secteur.
              </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-2"
          >
            <LeafletMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
