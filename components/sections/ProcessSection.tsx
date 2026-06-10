"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROCESS_STEPS } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

const STEP_IMAGES = [
  "/images/process-contact.png",
  "/images/process-devis.jpg",
  "/images/process-intervention.jpg",
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-white/60 font-semibold text-sm uppercase tracking-widest mb-3">
            Simple et rapide
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="process-title"
            className="text-3xl sm:text-4xl font-display font-bold text-white"
          >
            Comment ça marche ?
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="flex flex-col"
                >
                  {/* Photo card */}
                  <div className="relative h-52 rounded-2xl overflow-hidden shadow-xl mb-6">
                    <Image
                      src={STEP_IMAGES[index]}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    {/* Blue overlay */}
                    <div className="absolute inset-0 bg-[#0056B3]/45" />

                    {/* Step number badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#FF6B35] text-white text-base font-bold font-display flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>

                    {/* Centred icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="text-center">
                    <h3 className="font-display font-bold text-white text-xl mb-3">{step.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
