"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Entrez votre nom"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Précisez le sujet"),
  message: z.string().min(10, "Message trop court (10 caractères minimum)"),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  "Demande de devis",
  "Urgence plomberie",
  "Urgence électricité",
  "Chauffage / Climatisation",
  "Rénovation",
  "Autre",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setIsSuccess(true);
      reset();
    } catch {
      setError("Une erreur s'est produite. Veuillez réessayer ou nous appeler.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-[#00C853]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#00C853]" />
        </div>
        <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">Message envoyé !</h3>
        <p className="text-neutral-500 text-sm">Nous vous répondons sous 30 minutes.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-4 text-sm text-primary underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Nom complet <span className="text-[#DC2626]" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Jean Dupont"
            autoComplete="name"
            className="w-full border border-neutral-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          />
          {errors.name && <p className="text-[#DC2626] text-xs mt-1" role="alert">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            placeholder="06 12 34 56 78"
            autoComplete="tel"
            className="w-full border border-neutral-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Email <span className="text-[#DC2626]" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="jean.dupont@email.com"
          autoComplete="email"
          className="w-full border border-neutral-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
        />
        {errors.email && <p className="text-[#DC2626] text-xs mt-1" role="alert">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Sujet <span className="text-[#DC2626]" aria-hidden="true">*</span>
        </label>
        <select
          id="subject"
          {...register("subject")}
          className="w-full border border-neutral-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
        >
          <option value="">Sélectionnez un sujet</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.subject && <p className="text-[#DC2626] text-xs mt-1" role="alert">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Message <span className="text-[#DC2626]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Décrivez votre problème ou votre besoin..."
          rows={5}
          className="w-full border border-neutral-200 rounded-xl p-3 text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
        />
        {errors.message && <p className="text-[#DC2626] text-xs mt-1" role="alert">{errors.message.message}</p>}
      </div>

      {error && (
        <div className="p-3 bg-[#FEF2F2] border border-[#DC2626]/20 rounded-xl">
          <p className="text-[#DC2626] text-sm" role="alert">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl font-semibold hover:bg-[#004494] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}
