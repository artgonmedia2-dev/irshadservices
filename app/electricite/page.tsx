import type { Metadata } from "next";
import { Zap } from "lucide-react";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Électricien à Gennevilliers — Rénovation & Dépannage | Irshad Services",
  description:
    "Électricien certifié à Gennevilliers (92230). Rénovation électrique, tableau électrique, mise aux normes. Devis gratuit, intervention rapide. ☎ 07 83 88 68 09",
  alternates: { canonical: `${COMPANY.url}/electricite` },
};

export default function ElectricitePage() {
  return (
    <ServicePageTemplate
      id="electricite"
      title="Électricité"
      breadcrumb="Électricité"
      h1="Électricien à Gennevilliers — Rénovation & Dépannage"
      description="Électricien certifié Gennevilliers. Rénovation électrique, tableau électrique, mise aux normes NF C 15-100. Devis gratuit, 7j/7."
      longDescription={`Irshad Services met à votre disposition des électriciens qualifiés pour tous vos travaux d'électricité à Gennevilliers (92230). De la mise aux normes de votre installation électrique à la rénovation complète, nous intervenons avec professionnalisme et rigueur.

Nos électriciens sont certifiés et maîtrisent la norme NF C 15-100 en vigueur. Que vous soyez propriétaire ou locataire, nous vous proposons des solutions adaptées à vos besoins et à votre budget.

En cas de panne électrique urgente, notre équipe intervient dans les plus brefs délais pour rétablir le courant et garantir votre sécurité.`}
      subServices={[
        "Mise aux normes NF C 15-100",
        "Remplacement tableau électrique",
        "Câblage et installation prises",
        "Rénovation électrique complète",
        "Dépannage panne électrique",
        "Installation éclairage LED",
        "Mise en place VMC",
        "Installation borne de recharge VE",
        "Pose disjoncteur différentiel",
        "Détection panne électrique",
        "Installation domotique",
        "Attestation de conformité",
      ]}
      features={[
        "Électriciens habilités B1V / BR",
        "Conformité NF C 15-100 garantie",
        "Attestation Consuel fournie si besoin",
        "Intervention urgente 7j/7",
        "Devis gratuit et transparent",
        "Garantie décennale sur les travaux",
      ]}
      Icon={Zap}
    />
  );
}
