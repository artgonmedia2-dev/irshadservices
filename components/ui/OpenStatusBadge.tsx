"use client";

import { useOpenStatus } from "@/lib/hooks";
import { Clock } from "lucide-react";

export default function OpenStatusBadge() {
  const { isOpen, nextOpenTime } = useOpenStatus();

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-2xl border-2 ${
        isOpen
          ? "bg-[#E6FAF0] border-[#00C853]/30"
          : "bg-[#FEF2F2] border-[#DC2626]/20"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className={`w-3 h-3 rounded-full shrink-0 ${isOpen ? "bg-[#00C853]" : "bg-[#DC2626]"}`} aria-hidden="true" />
      <div>
        <p className={`font-semibold text-sm ${isOpen ? "text-[#007A33]" : "text-[#991B1B]"}`}>
          {isOpen ? "Ouvert maintenant" : "Fermé actuellement"}
        </p>
        {!isOpen && nextOpenTime && (
          <p className="text-xs text-neutral-500 flex items-center gap-1 mt-0.5">
            <Clock className="w-3 h-3" aria-hidden="true" />
            Prochaine ouverture : {nextOpenTime}
          </p>
        )}
      </div>
    </div>
  );
}
