"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { STATS, COMPANY } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const animate = (current: number) => {
      const elapsed = current - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString("fr-FR")}</span>;
}

export default function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="whyus-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Pourquoi nous choisir
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="whyus-title"
            className="text-3xl sm:text-4xl font-display font-bold text-neutral-900"
          >
            Pourquoi faire appel à {COMPANY.name} ?
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-primary/5 transition-colors"
            >
              <div className="font-display font-bold text-4xl lg:text-5xl text-[#FF6B35] mb-2 tabular-nums">
                <CountUp end={parseInt(stat.value)} />
                {stat.suffix}
              </div>
              <p className="text-neutral-500 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional value props */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Artisan certifié",
              desc: "Assurance décennale et responsabilité civile professionnelle. Travaux conformes aux normes en vigueur.",
            },
            {
              title: "Prix transparents",
              desc: "Devis détaillé avant intervention. Aucune mauvaise surprise sur la facture finale.",
            },
            {
              title: "Travail soigné",
              desc: "Chantier protégé, nettoyage après travaux. Respect de votre domicile garanti.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50"
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-display font-semibold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
