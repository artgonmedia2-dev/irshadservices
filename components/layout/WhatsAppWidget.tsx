"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { useState } from "react";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-40 group"
      aria-label="Discuter sur WhatsApp"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          Discuter sur WhatsApp
          <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-neutral-900" />
        </div>
      )}

      {/* Button */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-whatsapp transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
      </div>
    </a>
  );
}
