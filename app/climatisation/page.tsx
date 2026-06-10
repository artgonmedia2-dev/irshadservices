import type { Metadata } from "next";
import { Wind } from "lucide-react";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Climatisation à Gennevilliers — Installation & Entretien | Irshad Services",
  description:
    "Installation et entretien climatisation à Gennevilliers (92230). Climatiseurs réversibles, multi-split. Devis gratuit, pose rapide. ☎ 07 83 88 68 09",
  alternates: { canonical: `${COMPANY.url}/climatisation` },
};

export default function ClimatisationPage() {
  return (
    <ServicePageTemplate
      id="climatisation"
      title="Climatisation"
      breadcrumb="Climatisation"
      h1="Installation climatisation à Gennevilliers"
      description="Pose et entretien de climatiseurs réversibles à Gennevilliers. Daikin, Mitsubishi, Atlantic, LG. Devis gratuit et installation soignée."
      longDescription={`Irshad Services installe et entretient vos systèmes de climatisation à Gennevilliers (92230) et dans tout le département des Hauts-de-Seine. Nos techniciens certifiés interviennent pour l'installation, la maintenance et la réparation de tous types de climatiseurs.

Un climatiseur réversible vous permet de vous rafraîchir en été et de chauffer votre logement en hiver, le tout avec une consommation d'énergie réduite par rapport à un chauffage électrique classique.

Nous travaillons avec les meilleures marques du marché : Daikin, Mitsubishi Electric, Atlantic, LG, Samsung. Chaque installation est réalisée dans les règles de l'art, avec garantie constructeur et attestation d'entretien.`}
      subServices={[
        "Installation climatiseur monosplit",
        "Installation système multi-split",
        "Entretien annuel climatisation",
        "Réparation panne climatiseur",
        "Recharge gaz frigorigène",
        "Nettoyage unité intérieure",
        "Nettoyage unité extérieure",
        "Dépose / repose climatiseur",
        "Installation climatisation gainable",
        "Diagnostic performance",
        "Remplacement filtre",
        "Contrat de maintenance",
      ]}
      features={[
        "Techniciens certifiés manipulation fluides frigorigènes",
        "Marques : Daikin, Mitsubishi, Atlantic, LG",
        "Garantie installation 2 ans",
        "Financement disponible",
        "Aide CEE et subventions",
        "Pose soignée sans dégâts",
      ]}
      Icon={Wind}
    />
  );
}
