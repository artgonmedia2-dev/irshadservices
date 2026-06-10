"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[App Error]", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="text-8xl font-display font-bold text-[#DC2626]/10 mb-4" aria-hidden="true">
          500
        </div>
        <h1 className="text-2xl font-display font-bold text-neutral-900 mb-3">
          Une erreur est survenue
        </h1>
        <p className="text-neutral-500 mb-8">
          Désolé pour la gêne. Réessayez dans quelques instants ou revenez à l&apos;accueil.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#004494] transition-colors"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border-2 border-neutral-200 text-neutral-700 px-5 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
