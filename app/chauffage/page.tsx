import type { Metadata } from "next";
import { Flame } from "lucide-react";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chauffagiste à Gennevilliers — Chaudière & Pompe à chaleur | Irshad Services",
  description:
    "Chauffagiste à Gennevilliers (92230). Installation et entretien chaudière, pompe à chaleur, radiateurs. Devis gratuit, intervention rapide. ☎ 07 83 88 68 09",
  alternates: { canonical: `${COMPANY.url}/chauffage` },
};

export default function ChauffagePage() {
  return (
    <ServicePageTemplate
      id="chauffage"
      title="Chauffage"
      breadcrumb="Chauffage"
      h1="Chauffagiste à Gennevilliers — Chaudière & Pompe à chaleur"
      description="Installation, entretien et réparation de systèmes de chauffage à Gennevilliers. Chaudière gaz, pompe à chaleur, radiateurs. Urgences 7j/7."
      longDescription={`Irshad Services, votre chauffagiste de confiance à Gennevilliers (92230), intervient pour tous vos besoins en chauffage. Froid en hiver ? Panne de chaudière ? Notre équipe qualifiée est disponible pour intervenir rapidement.

Nous sommes spécialisés dans l'installation et l'entretien de chaudières à condensation, de pompes à chaleur air/eau et air/air, ainsi que dans la maintenance de systèmes de chauffage existants.

Notre expertise couvre les marques Bosch, Saunier Duval, Atlantic, Daikin, Mitsubishi et toutes les marques courantes. Nous proposons également des contrats d'entretien annuel pour assurer la longévité de votre installation.`}
      subServices={[
        "Installation chaudière gaz condensation",
        "Installation pompe à chaleur air/eau",
        "Entretien annuel chaudière",
        "Réparation panne chaudière",
        "Remplacement chaudière ancienne",
        "Pose de radiateurs",
        "Équilibrage réseau de chauffage",
        "Installation plancher chauffant",
        "Remplacement vase d'expansion",
        "Vidange et désembouage circuit",
        "Installation thermostat connecté",
        "Diagnostic performance énergétique",
      ]}
      features={[
        "Intervention d'urgence en hiver 7j/7",
        "Certifié RGE Qualibat",
        "Éligible aux aides MaPrimeRénov",
        "Garantie pièces et main d'œuvre",
        "Contrat d'entretien disponible",
        "Marques : Bosch, Atlantic, Daikin...",
      ]}
      Icon={Flame}
    />
  );
}
