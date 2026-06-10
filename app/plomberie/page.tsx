import type { Metadata } from "next";
import { Droplet } from "lucide-react";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Plombier à Gennevilliers — Dépannage & Installation | Irshad Services",
  description:
    "Plombier professionnel à Gennevilliers (92230). Dépannage fuite d'eau, débouchage, installation sanitaire. Devis gratuit, intervention en 30 min. ☎ 07 83 88 68 09",
  alternates: { canonical: `${COMPANY.url}/plomberie` },
};

export default function PlomberiePage() {
  return (
    <ServicePageTemplate
      id="plomberie"
      title="Plomberie"
      breadcrumb="Plomberie"
      h1="Plombier à Gennevilliers — Intervention en 30 min"
      description="Plombier certifié à Gennevilliers, disponible 7j/7 pour tous vos dépannages et installations sanitaires. Devis gratuit et intervention rapide."
      longDescription={`Irshad Services est votre plombier de confiance à Gennevilliers (92230) et dans les communes environnantes. Forts de plus de 10 ans d'expérience, nos artisans qualifiés interviennent rapidement pour résoudre tous vos problèmes de plomberie.

Que ce soit pour une fuite d'eau urgente, un débouchage de canalisation, le remplacement d'un chauffe-eau ou la rénovation complète de votre salle de bain, nous apportons des solutions durables et conformes aux normes en vigueur.

Nous intervenons sur Gennevilliers, Asnières-sur-Seine, Courbevoie, Levallois-Perret, Clichy et toutes les communes dans un rayon de 15 km.`}
      subServices={[
        "Réparation fuite d'eau urgente",
        "Débouchage canalisation",
        "Remplacement chauffe-eau",
        "Installation sanitaire complète",
        "Rénovation salle de bain",
        "Détection fuite non destructive",
        "Remplacement robinetterie",
        "Pose baignoire / douche",
        "Installation WC suspendu",
        "Dégorgement fosse septique",
        "Mise en conformité réseau",
        "Pose compteur d'eau",
      ]}
      features={[
        "Intervention en moins de 30 minutes sur Gennevilliers",
        "Disponible 7j/7 y compris week-end et jours fériés",
        "Devis gratuit et sans engagement",
        "Artisan certifié, assurance RC professionnelle",
        "Travaux conformes aux normes DTU",
        "Garantie satisfaction 100%",
      ]}
      Icon={Droplet}
    />
  );
}
