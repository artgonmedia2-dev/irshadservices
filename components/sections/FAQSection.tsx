"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import Script from "next/script";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border border-neutral-100 rounded-xl overflow-hidden bg-white">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-neutral-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="font-semibold text-neutral-900 text-sm sm:text-base">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-6 pb-5 text-neutral-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 lg:py-28 bg-neutral-50" aria-labelledby="faq-title">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Questions fréquentes
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            id="faq-title"
            className="text-3xl sm:text-4xl font-display font-bold text-neutral-900"
          >
            Vous avez des questions ?
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="space-y-3"
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <AccordionItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
