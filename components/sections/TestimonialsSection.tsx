"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { TESTIMONIALS, COMPANY } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note: ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-200"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4500);
    return () => clearInterval(intervalRef.current ?? undefined);
  }, [isPaused, total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    return [current, (current + 1) % total, (current + 2) % total];
  };

  return (
    <section className="py-20 lg:py-28 bg-neutral-50 overflow-hidden" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Témoignages
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="testimonials-title"
            className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4"
          >
            Ce que disent nos clients
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-neutral-600 font-semibold">
              {COMPANY.rating}/5 sur {COMPANY.reviewCount.toLocaleString("fr-FR")} avis vérifiés
            </span>
          </motion.div>
        </motion.div>

        {/* Desktop: 3 visible */}
        <div
          className="hidden lg:grid grid-cols-3 gap-6 mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {getVisible().map((idx) => {
            const t = TESTIMONIALS[idx];
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col"
              >
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 text-neutral-600 text-sm leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-neutral-900">{t.name}</p>
                    <p className="text-xs text-neutral-400">
                      {t.city} · {t.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: 1 visible */}
        <div className="lg:hidden mb-6">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <StarRating rating={TESTIMONIALS[current].rating} />
            <blockquote className="mt-4 text-neutral-600 text-sm leading-relaxed">
              &ldquo;{TESTIMONIALS[current].text}&rdquo;
            </blockquote>
            <div className="mt-5 flex items-center gap-3 pt-4 border-t border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                {TESTIMONIALS[current].name[0]}
              </div>
              <div>
                <p className="font-semibold text-sm text-neutral-900">{TESTIMONIALS[current].name}</p>
                <p className="text-xs text-neutral-400">
                  {TESTIMONIALS[current].city} · {TESTIMONIALS[current].service}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <a
            href="https://www.google.com/maps/search/Irshad+Services+Gennevilliers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Lire tous les avis sur Google
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
