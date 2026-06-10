"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function MobileBottomBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{ boxShadow: "0 -2px 10px rgba(0,0,0,0.08)" }}
    >
      <a
        href={`tel:${COMPANY.phoneTel}`}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-white text-sm font-semibold active:opacity-90"
        aria-label={`Appeler Irshad Services au ${COMPANY.phone}`}
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        Appeler
      </a>
      <Link
        href="/devis"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#FF6B35] text-white text-sm font-semibold active:opacity-90"
      >
        Devis gratuit
      </Link>
    </div>
  );
}
