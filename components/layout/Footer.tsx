import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/data";

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const usefulLinks = [
  { href: "/", label: "Accueil" },
  { href: "/devis", label: "Devis gratuit" },
  { href: "/services", label: "Nos services" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Confidentialité" },
];

const serviceLinks = SERVICES.slice(0, 7);

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + Description */}
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="Irshad Services">
              <div className="bg-white rounded-xl px-3 py-2 inline-flex">
                <Image
                  src="/logo.png"
                  alt="Irshad Services"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Plomberie, électricité, chauffage et rénovation à Gennevilliers. Votre artisan de confiance depuis 10 ans.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.facebook}
                className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook Irshad Services"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookIcon />
              </a>
              <a
                href={COMPANY.instagram}
                className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram Irshad Services"
                rel="noopener noreferrer"
                target="_blank"
              >
                <InstagramIcon />
              </a>
              <a
                href={COMPANY.linkedin}
                className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn Irshad Services"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-neutral-300 mb-4">
              Nos Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.slug}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-neutral-300 mb-4">
              Liens utiles
            </h3>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-neutral-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="flex items-start gap-3 text-sm text-neutral-400 hover:text-white transition-colors"
                  aria-label={`Appeler ${COMPANY.phone}`}
                >
                  <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.postalCode} {COMPANY.city}
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-neutral-800 rounded-xl">
              <p className="text-xs text-neutral-300 font-semibold mb-1">Horaires</p>
              <p className="text-xs text-neutral-400">Lun 8h-18h | Mar 7h-18h</p>
              <p className="text-xs text-neutral-400">Mer-Sam 9h-19h</p>
              <p className="text-xs text-neutral-500">Dimanche : urgences uniquement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © 2026 Irshad Services — Tous droits réservés
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {[
              { href: "/mentions-legales", label: "Mentions légales" },
              { href: "/politique-confidentialite", label: "Confidentialité" },
              { href: "/politique-cookies", label: "Cookies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
