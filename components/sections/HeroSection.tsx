"use client";

import { motion } from "framer-motion";
import { Phone, Star, ArrowRight, CheckCircle, Droplet, Zap, Flame, Shield } from "lucide-react";
import Image from "next/image";
import { COMPANY } from "@/lib/data";
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const scrollToDevis = () => {
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16 md:pt-20"
      aria-label="Présentation Irshad Services"
    >
      {/* ── Background photo ── */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* ── Blue overlay (keeps text readable) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, rgba(0,98,204,0.88) 0%, rgba(0,59,142,0.92) 50%, rgba(0,31,92,0.96) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,158,224,0.18) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        aria-hidden="true"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text content ── */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            {/* Service pills row */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: Droplet, label: "Plomberie" },
                { icon: Zap,     label: "Électricité" },
                { icon: Flame,   label: "Chauffage" },
                { icon: Shield,  label: "Urgences 24h" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white/80"
                >
                  <Icon className="w-3 h-3 text-white/60" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* Rating badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-1.5 mb-5">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white text-sm font-semibold">{COMPANY.rating}/5</span>
                <span className="text-white/50 text-xs">·</span>
                <span className="text-white/70 text-xs">{COMPANY.reviewCount.toLocaleString("fr-FR")} avis vérifiés</span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold text-white leading-[1.1] mb-4"
            >
              Plombier &amp; Électricien
              <br />
              <span className="relative inline-block">
                <span className="text-yellow-300">à Gennevilliers</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #FF6B35, #FF6B35aa)" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            {/* "30 min" tagline */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-6 bg-[#FF6B35]" aria-hidden="true" />
              <p className="text-xl sm:text-2xl font-semibold text-white/90 tracking-tight">
                Intervention en{" "}
                <span
                  className="font-extrabold text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #FF8C5A, #FF6B35)" }}
                >
                  30 min
                </span>
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="text-white/65 text-base mb-8 leading-relaxed">
              Devis gratuit &middot; Garantie 100&nbsp;% satisfaction &middot; 7j/7
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={scrollToDevis}
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-4 rounded-2xl font-bold text-base shadow-[0_4px_24px_rgba(255,255,255,0.22)] hover:shadow-[0_6px_32px_rgba(255,255,255,0.36)] transition-all duration-200 active:scale-[0.98]"
              >
                Obtenir mon devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="pulse-urgent inline-flex items-center justify-center gap-2 bg-[#DC2626] text-white px-7 py-4 rounded-2xl font-bold text-base shadow-[0_4px_20px_rgba(220,38,38,0.45)] hover:shadow-[0_6px_28px_rgba(220,38,38,0.6)] hover:bg-[#C81F1F] transition-all duration-200 active:scale-[0.98]"
                aria-label={`Urgence — Appeler le ${COMPANY.phone}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Urgence ? {COMPANY.phone}
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { value: "30 min", sub: "délai moyen", accent: "#FF6B35" },
                  { value: "7j/7",   sub: "disponible",  accent: "#00C853" },
                  { value: "10 ans", sub: "expérience",  accent: "#60A5FA" },
                ].map((s) => (
                  <div
                    key={s.sub}
                    className="flex flex-col items-center justify-center bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl py-3.5 px-2 gap-0.5"
                  >
                    <span className="font-extrabold text-lg leading-none" style={{ color: s.accent }}>
                      {s.value}
                    </span>
                    <span className="text-white/50 text-[11px] font-medium">{s.sub}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right: hero image — desktop only */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
            aria-hidden="true"
          >
            {/* Outer wrapper with room for floating chips on the right */}
            <div className="relative pr-14">

              {/* ── Floating stat chips (outside the photo, right edge) ── */}
              <div className="absolute top-10 right-0 z-20 flex flex-col gap-3">
                <div className="bg-[#FF6B35] text-white rounded-2xl px-4 py-3 shadow-xl text-center min-w-[72px]">
                  <p className="font-bold text-xl leading-none">7j/7</p>
                  <p className="text-[10px] text-white/80 mt-0.5 uppercase tracking-wide">urgences</p>
                </div>
                <div className="bg-white text-primary rounded-2xl px-4 py-3 shadow-xl text-center min-w-[72px]">
                  <p className="font-bold text-xl leading-none">30<span className="text-sm font-semibold">min</span></p>
                  <p className="text-[10px] text-neutral-400 mt-0.5 uppercase tracking-wide">délai</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-2xl px-4 py-3 shadow-xl text-center min-w-[72px]">
                  <p className="font-bold text-xl leading-none">10<span className="text-sm font-semibold">ans</span></p>
                  <p className="text-[10px] text-white/70 mt-0.5 uppercase tracking-wide">expérience</p>
                </div>
              </div>

              {/* ── Main photo ── */}
              <div className="relative h-[560px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/hero-bg.png"
                  alt="Technicien Irshad Services au travail — Gennevilliers"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(min-width: 1024px) 45vw, 0vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003370]/75 via-[#003370]/10 to-transparent" />

                {/* ── Bottom social-proof card ── */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/96 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    {/* Avatar stack */}
                    <div className="flex -space-x-2 shrink-0">
                      {["M", "S", "J", "F"].map((initial, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                          style={{ background: i % 2 === 0 ? "#0056B3" : "#FF6B35" }}
                        >
                          {initial}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                        ))}
                        <span className="text-xs font-bold text-neutral-900 ml-1">{COMPANY.rating}/5</span>
                      </div>
                      <p className="text-xs text-neutral-500 truncate">
                        +{COMPANY.reviewCount.toLocaleString("fr-FR")} clients satisfaits à Gennevilliers
                      </p>
                    </div>
                    <div className="shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#00C853]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glows */}
              <div className="absolute -top-6 -right-2 w-32 h-32 rounded-full bg-[#FF6B35]/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-2.5 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
