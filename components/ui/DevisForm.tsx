"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Droplet, Zap, Flame, Wind, Grid3X3, Paintbrush, Hammer, HelpCircle, ArrowRight, ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import { WORK_TYPES } from "@/lib/data";

const workTypeIcons: Record<string, React.ReactNode> = {
  plomberie: <Droplet className="w-4 h-4" aria-hidden="true" />,
  electricite: <Zap className="w-4 h-4" aria-hidden="true" />,
  chauffage: <Flame className="w-4 h-4" aria-hidden="true" />,
  climatisation: <Wind className="w-4 h-4" aria-hidden="true" />,
  carrelage: <Grid3X3 className="w-4 h-4" aria-hidden="true" />,
  peinture: <Paintbrush className="w-4 h-4" aria-hidden="true" />,
  renovation: <Hammer className="w-4 h-4" aria-hidden="true" />,
  autre: <HelpCircle className="w-4 h-4" aria-hidden="true" />,
};

const step1Schema = z.object({
  workTypes: z.array(z.string()).min(1, "Sélectionnez au moins un type de travaux"),
  otherDetails: z.string().optional(),
});

const step2Schema = z.object({
  description: z.string().min(20, "Décrivez votre projet en au moins 20 caractères").max(1000),
  isUrgent: z.boolean(),
  preferredDate: z.string().optional(),
});

const step3Schema = z.object({
  name: z.string().min(2, "Entrez votre nom complet"),
  phone: z.string().regex(/^(?:\+33|0)[1-9](?:[0-9]{8})$/, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  address: z.string().min(5, "Entrez votre adresse complète"),
  rgpd: z.literal(true, "Vous devez accepter la politique de confidentialité"),
});

type FormData = z.infer<typeof step1Schema> & z.infer<typeof step2Schema> & z.infer<typeof step3Schema>;

const LS_KEY = "irshad-devis-form";
const today = new Date().toISOString().split("T")[0];

export default function DevisForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const step1 = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: { workTypes: [], otherDetails: "" },
  });

  const step2 = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: { description: "", isUrgent: false, preferredDate: "" },
  });

  const step3 = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema),
    defaultValues: { name: "", phone: "", email: "", address: "", rgpd: undefined },
  });

  // Restore from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved) {
        const data = JSON.parse(saved) as Partial<FormData>;
        setFormData(data);
        if (data.workTypes) step1.setValue("workTypes", data.workTypes);
        if (data.description) step2.setValue("description", data.description);
      }
    } catch {}
  }, []);

  const saveToLS = (data: Partial<FormData>) => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ ...formData, ...data }));
    } catch {}
  };

  const onStep1Submit = (data: z.infer<typeof step1Schema>) => {
    const merged = { ...formData, ...data };
    setFormData(merged);
    saveToLS(merged);
    setStep(2);
  };

  const onStep2Submit = (data: z.infer<typeof step2Schema>) => {
    const merged = { ...formData, ...data };
    setFormData(merged);
    saveToLS(merged);
    setStep(3);
  };

  const onStep3Submit = async (data: z.infer<typeof step3Schema>) => {
    setIsSubmitting(true);
    setError(null);
    const fullData = { ...formData, ...data };

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullData),
      });

      if (!response.ok) throw new Error("Erreur lors de l'envoi");

      localStorage.removeItem(LS_KEY);
      setIsSuccess(true);
    } catch {
      setError("Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedWorkTypes = step1.watch("workTypes") ?? [];

  const toggleWorkType = (id: string) => {
    const current = watchedWorkTypes;
    const updated = current.includes(id)
      ? current.filter((t) => t !== id)
      : [...current, id];
    step1.setValue("workTypes", updated, { shouldValidate: true });
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-[#00C853]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#00C853]" />
        </div>
        <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">Demande envoyée !</h3>
        <p className="text-neutral-500 text-sm">
          Nous vous rappelons sous 30 minutes. Merci de votre confiance !
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress bar */}
      <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-neutral-500">Étape {step}/3</span>
          <span className="text-xs text-neutral-400">
            {step === 1 && "Type de travaux"}
            {step === 2 && "Détails du projet"}
            {step === 3 && "Vos coordonnées"}
          </span>
        </div>
        <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={3}
            role="progressbar"
          />
        </div>
      </div>

      <div className="p-6">
        {/* Step 1 */}
        {step === 1 && (
          <form onSubmit={step1.handleSubmit(onStep1Submit)} noValidate>
            <h3 className="font-display font-bold text-lg text-neutral-900 mb-5">
              Quel type de travaux ?
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {WORK_TYPES.map((wt) => {
                const isSelected = watchedWorkTypes.includes(wt.id);
                return (
                  <button
                    key={wt.id}
                    type="button"
                    onClick={() => toggleWorkType(wt.id)}
                    className={`flex items-center gap-2 p-3 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-primary/5 border-primary text-primary"
                        : "bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span className={isSelected ? "text-primary" : "text-neutral-400"}>
                      {workTypeIcons[wt.id]}
                    </span>
                    {wt.label}
                  </button>
                );
              })}
            </div>
            {step1.formState.errors.workTypes && (
              <p className="text-[#DC2626] text-xs mt-1 mb-3" role="alert">
                {step1.formState.errors.workTypes.message}
              </p>
            )}
            {watchedWorkTypes.includes("autre") && (
              <textarea
                {...step1.register("otherDetails")}
                placeholder="Précisez votre besoin..."
                className="w-full border border-neutral-200 rounded-xl p-3 text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                rows={2}
              />
            )}
            <button
              type="submit"
              className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-[#004494] transition-colors"
            >
              Suivant
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={step2.handleSubmit(onStep2Submit)} noValidate>
            <h3 className="font-display font-bold text-lg text-neutral-900 mb-5">
              Décrivez votre projet
            </h3>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Description <span className="text-[#DC2626]" aria-hidden="true">*</span>
              </label>
              <textarea
                id="description"
                {...step2.register("description")}
                placeholder="Exemple : Fuite sous l'évier de la cuisine, eau qui coule depuis ce matin..."
                className="w-full border border-neutral-200 rounded-xl p-3 text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                rows={4}
              />
              {step2.formState.errors.description && (
                <p className="text-[#DC2626] text-xs mt-1" role="alert">
                  {step2.formState.errors.description.message}
                </p>
              )}
            </div>

            <div className="mb-4 flex items-center gap-3">
              <input
                type="checkbox"
                id="isUrgent"
                {...step2.register("isUrgent")}
                className="w-4 h-4 rounded accent-primary"
              />
              <label htmlFor="isUrgent" className="text-sm font-medium text-neutral-700 cursor-pointer">
                🚨 C&apos;est une urgence
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="preferredDate" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Date souhaitée (optionnel)
              </label>
              <input
                type="date"
                id="preferredDate"
                {...step2.register("preferredDate")}
                min={today}
                className="w-full border border-neutral-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-neutral-200 text-neutral-700 font-medium text-sm hover:bg-neutral-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Retour
              </button>
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#004494] transition-colors"
              >
                Suivant
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <form onSubmit={step3.handleSubmit(onStep3Submit)} noValidate>
            <h3 className="font-display font-bold text-lg text-neutral-900 mb-5">
              Vos coordonnées
            </h3>

            <div className="space-y-3 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Nom complet <span className="text-[#DC2626]" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...step3.register("name")}
                  placeholder="Jean Dupont"
                  autoComplete="name"
                  className="w-full border border-neutral-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                {step3.formState.errors.name && (
                  <p className="text-[#DC2626] text-xs mt-1" role="alert">
                    {step3.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Téléphone <span className="text-[#DC2626]" aria-hidden="true">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...step3.register("phone")}
                  placeholder="06 12 34 56 78"
                  autoComplete="tel"
                  className="w-full border border-neutral-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                {step3.formState.errors.phone && (
                  <p className="text-[#DC2626] text-xs mt-1" role="alert">
                    {step3.formState.errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email <span className="text-[#DC2626]" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...step3.register("email")}
                  placeholder="jean.dupont@email.com"
                  autoComplete="email"
                  className="w-full border border-neutral-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                {step3.formState.errors.email && (
                  <p className="text-[#DC2626] text-xs mt-1" role="alert">
                    {step3.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                  Adresse d&apos;intervention <span className="text-[#DC2626]" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  {...step3.register("address")}
                  placeholder="15 rue de la Paix, 92230 Gennevilliers"
                  autoComplete="street-address"
                  className="w-full border border-neutral-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                {step3.formState.errors.address && (
                  <p className="text-[#DC2626] text-xs mt-1" role="alert">
                    {step3.formState.errors.address.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="rgpd"
                  {...step3.register("rgpd")}
                  className="w-4 h-4 mt-0.5 rounded accent-primary"
                />
                <label htmlFor="rgpd" className="text-xs text-neutral-500 cursor-pointer leading-relaxed">
                  J&apos;accepte que mes données soient utilisées pour me recontacter.{" "}
                  <a href="/politique-confidentialite" className="text-primary underline">
                    Politique de confidentialité
                  </a>
                </label>
              </div>
              {step3.formState.errors.rgpd && (
                <p className="text-[#DC2626] text-xs mt-1" role="alert">
                  {step3.formState.errors.rgpd.message}
                </p>
              )}
            </div>

            {error && (
              <div className="mb-4 p-3 bg-[#FEF2F2] border border-[#DC2626]/20 rounded-xl">
                <p className="text-[#DC2626] text-sm" role="alert">{error}</p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-neutral-200 text-neutral-700 font-medium text-sm hover:bg-neutral-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Retour
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 bg-[#FF6B35] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#E55A2B] transition-colors disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer ma demande de devis"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
