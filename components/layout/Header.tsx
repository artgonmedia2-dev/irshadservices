"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, SERVICES } from "@/lib/data";
import { useScrolled } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/contact", label: "Urgence 24h", isUrgent: true },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = SERVICES.filter((s) =>
  ["plomberie", "electricite", "chauffage", "climatisation"].includes(s.id)
);

export default function Header() {
  const scrolled = useScrolled(50);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
          : "bg-white/95 backdrop-blur-sm"
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Irshad Services — Retour à l'accueil"
          >
            <Image
              src="/logo.png"
              alt="Irshad Services"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <div key={link.href + link.label} className="relative">
                {link.hasDropdown ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      link.isUrgent
                        ? "text-[#DC2626] hover:bg-[#FEF2F2] font-semibold"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-neutral-100 overflow-hidden"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        role="menu"
                      >
                        {serviceLinks.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.id}
                              href={service.slug}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors group"
                              role="menuitem"
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                              </div>
                              <span className="text-sm font-medium text-neutral-700 group-hover:text-primary">
                                {service.title}
                              </span>
                            </Link>
                          );
                        })}
                        <div className="border-t border-neutral-100">
                          <Link
                            href="/services"
                            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            Voir tous les services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
              aria-label={`Appeler ${COMPANY.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {COMPANY.phone}
            </a>
            <Link
              href="/devis"
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#004494] transition-colors"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="flex items-center gap-1.5 bg-primary text-white px-3 py-2 rounded-lg text-sm font-semibold"
              aria-label="Appeler maintenant"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Appeler</span>
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-neutral-700" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-700" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" aria-label="Menu mobile">
              <Link
                href="/"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-primary/5 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                Accueil
              </Link>
              <div>
                <p className="px-4 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Services
                </p>
                {serviceLinks.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.id}
                      href={service.slug}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-neutral-600 hover:bg-primary/5 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                      {service.title}
                    </Link>
                  );
                })}
                <Link
                  href="/services"
                  className="block px-4 py-2.5 text-sm font-semibold text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Tous les services →
                </Link>
              </div>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-lg text-sm font-semibold text-[#DC2626] hover:bg-[#FEF2F2]"
                onClick={() => setMobileOpen(false)}
              >
                🚨 Urgence 24h
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-primary/5 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-neutral-100">
                <Link
                  href="/devis"
                  className="block bg-primary text-white text-center py-3 rounded-lg text-sm font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Obtenir mon devis gratuit
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
