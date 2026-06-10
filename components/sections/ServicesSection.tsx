"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

const SERVICE_IMAGES: Record<string, string> = {
  plomberie:    "/images/service-plomberie.jpg",
  electricite:  "/images/service-electricite.webp",
  chauffage:    "/images/service-chauffage.jpg",
  climatisation:"/images/service-climatisation.webp",
  carrelage:    "/images/service-carrelage.jpg",
  peinture:     "/images/service-peinture.jpg",
  renovation:   "/images/service-renovation.webp",
  urgence:      "/images/service-urgence.png",
};

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Ce que nous faisons
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="services-title"
            className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4"
          >
            Nos services de plomberie &amp; électricité
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Des artisans qualifiés pour tous vos travaux à Gennevilliers et environs
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isUrgent = service.id === "urgence";
            const imgSrc = SERVICE_IMAGES[service.id] ?? `https://picsum.photos/seed/${service.id}/400/300`;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
              >
                <Link
                  href={service.slug}
                  className={`group flex flex-col rounded-2xl border-2 transition-all duration-200 h-full overflow-hidden ${
                    isUrgent
                      ? "bg-[#FEF2F2] border-[#DC2626]/20 hover:border-[#DC2626] hover:shadow-[0_8px_30px_rgba(220,38,38,0.12)]"
                      : "bg-white border-neutral-100 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,86,179,0.08)]"
                  }`}
                  aria-label={`${service.title} — En savoir plus`}
                >
                  {/* Image thumbnail */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {isUrgent && (
                      <div className="absolute inset-0 bg-[#DC2626]/25" />
                    )}
                    {/* Icon badge over image */}
                    <div
                      className={`absolute bottom-2 right-2 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg ${
                        isUrgent ? "bg-[#DC2626]" : "bg-primary"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 lg:p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-neutral-900 mb-1.5 text-sm sm:text-base">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
                      {service.shortDesc}
                    </p>

                    {/* Link */}
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${
                        isUrgent ? "text-[#DC2626]" : "text-primary"
                      }`}
                      aria-hidden="true"
                    >
                      En savoir plus
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
