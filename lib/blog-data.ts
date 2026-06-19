export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "plomberie" | "electricite" | "chauffage" | "climatisation" | "renovation" | "conseils";
  categoryLabel: string;
  date: string;
  readTime: number;
  excerpt: string;
  tags: string[];
  city?: string;
  content: string;
};

export const BLOG_CATEGORIES = {
  plomberie: { label: "Plomberie", color: "bg-blue-100 text-blue-800" },
  electricite: { label: "Électricité", color: "bg-yellow-100 text-yellow-800" },
  chauffage: { label: "Chauffage", color: "bg-orange-100 text-orange-800" },
  climatisation: { label: "Climatisation", color: "bg-cyan-100 text-cyan-800" },
  renovation: { label: "Rénovation", color: "bg-purple-100 text-purple-800" },
  conseils: { label: "Conseils pratiques", color: "bg-green-100 text-green-800" },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "deboucher-canalisation-gennevilliers",
    title: "Comment déboucher une canalisation à Gennevilliers : guide complet",
    metaTitle: "Déboucher canalisation Gennevilliers — Guide & Prix 2025",
    metaDescription:
      "Canalisation bouchée à Gennevilliers ? Découvrez les causes, les solutions DIY et quand appeler un plombier. Devis gratuit, intervention en 30 min. ☎ 07 83 88 68 09",
    category: "plomberie",
    categoryLabel: "Plomberie",
    date: "2025-06-10",
    readTime: 5,
    city: "Gennevilliers",
    excerpt:
      "Une canalisation bouchée à Gennevilliers peut rapidement devenir un cauchemar. Entre odeurs désagréables, eaux stagnantes et risques de dégâts des eaux, il faut agir vite. Voici les solutions efficaces pour déboucher vos canalisations, des gestes simples aux interventions professionnelles.",
    tags: ["débouchage", "canalisation", "plomberie", "Gennevilliers", "urgence"],
    content: `
<p><strong>Une canalisation bouchée à Gennevilliers</strong> est l'une des urgences plomberie les plus fréquentes que nous traitons au quotidien. Odeurs nauséabondes, évacuation lente, eaux stagnantes dans la baignoire ou le lavabo — ces signaux d'alarme ne doivent pas être ignorés.</p>

<h2>Les causes les plus fréquentes d'une canalisation bouchée</h2>
<p>À Gennevilliers et dans les communes voisines comme Asnières-sur-Seine ou Clichy, les canalisations sont souvent anciennes. Plusieurs facteurs favorisent les bouchons :</p>
<ul>
  <li><strong>Accumulation de graisses</strong> dans les canalisations de cuisine</li>
  <li><strong>Cheveux et résidus de savon</strong> dans les siphons de salle de bain</li>
  <li><strong>Calcaire</strong> qui réduit progressivement le diamètre des tuyaux (eau très calcaire en Île-de-France)</li>
  <li><strong>Papiers et lingettes</strong> jetés dans les WC</li>
  <li><strong>Racines d'arbres</strong> qui infiltrent les canalisations extérieures</li>
</ul>

<h2>Solutions DIY à essayer en premier</h2>
<p>Avant d'appeler un plombier à Gennevilliers, tentez ces gestes simples :</p>
<ul>
  <li><strong>La ventouse</strong> : efficace pour les bouchons superficiels dans lavabo ou WC</li>
  <li><strong>Le furet manuel</strong> : pour atteindre les bouchons plus profonds</li>
  <li><strong>Eau bouillante + bicarbonate + vinaigre blanc</strong> : dissout les dépôts graisseux</li>
  <li><strong>Produit déboucheur enzymatique</strong> : respectueux des canalisations et de l'environnement</li>
</ul>
<p>Attention : évitez les produits chimiques agressifs (soude caustique) qui peuvent endommager vos tuyaux en PVC et sont dangereux.</p>

<h2>Quand appeler un plombier professionnel à Gennevilliers ?</h2>
<p>Si les solutions DIY échouent, ou si vous constatez un refoulement dans plusieurs points d'eau simultanément, il s'agit probablement d'un bouchon dans le collecteur principal. C'est le signe qu'il faut appeler un plombier.</p>
<p>Irshad Services intervient à Gennevilliers (92230) et dans toutes les communes du secteur — <strong>Asnières-sur-Seine, Courbevoie, Levallois-Perret, Clichy</strong> — en moins de 30 minutes pour déboucher vos canalisations avec du matériel professionnel : furet électrique, nettoyage haute pression, caméra d'inspection.</p>

<h2>Prévention : comment éviter les bouchons ?</h2>
<p>Pour éviter de rappeler un plombier trop souvent, adoptez ces habitudes simples :</p>
<ul>
  <li>Installez des crépines sur tous vos siphons</li>
  <li>Ne versez jamais de graisses dans l'évier</li>
  <li>Faites couler de l'eau chaude après chaque vaisselle grasse</li>
  <li>Planifiez un entretien préventif annuel de vos canalisations</li>
</ul>
<p><strong>Besoin d'un débouchage urgent à Gennevilliers ?</strong> Contactez Irshad Services au <strong>07 83 88 68 09</strong> — devis gratuit, intervention en 30 minutes, 7j/7.</p>
`,
  },
  {
    id: 2,
    slug: "fuite-eau-urgence-asnieres-sur-seine",
    title: "Fuite d'eau urgente à Asnières-sur-Seine : que faire immédiatement ?",
    metaTitle: "Fuite d'eau urgente Asnières-sur-Seine — Plombier 30 min",
    metaDescription:
      "Fuite d'eau à Asnières-sur-Seine ? Coupez l'eau et appelez Irshad Services. Intervention en 30 min, devis gratuit, 7j/7. ☎ 07 83 88 68 09",
    category: "plomberie",
    categoryLabel: "Plomberie",
    date: "2025-06-08",
    readTime: 4,
    city: "Asnières-sur-Seine",
    excerpt:
      "Une fuite d'eau à Asnières-sur-Seine peut causer des dégâts considérables en quelques heures. Coupez l'eau générale, protégez vos affaires, et appelez un plombier d'urgence. Voici les bons réflexes à adopter pour limiter les dommages avant l'arrivée du technicien.",
    tags: ["fuite d'eau", "urgence", "plomberie", "Asnières-sur-Seine", "dégâts des eaux"],
    content: `
<p><strong>Une fuite d'eau à Asnières-sur-Seine</strong> est une urgence qui ne pardonne pas. En quelques heures, l'eau peut infiltrer les planchers, endommager les murs et déclencher un sinistre chez vos voisins du dessous. Voici les gestes qui font la différence.</p>

<h2>Les premiers gestes en cas de fuite d'eau</h2>
<p>Dès que vous constatez une fuite, agissez dans cet ordre :</p>
<ul>
  <li><strong>1. Coupez l'eau</strong> au robinet d'arrêt général (sous l'évier ou dans le couloir de l'immeuble)</li>
  <li><strong>2. Coupez l'électricité</strong> si l'eau est proche d'une installation électrique</li>
  <li><strong>3. Protégez vos affaires</strong> : déplacez meubles, appareils électroniques, documents importants</li>
  <li><strong>4. Éponger et ventiler</strong> pour limiter l'humidité</li>
  <li><strong>5. Appelez votre plombier d'urgence</strong> et votre assureur</li>
</ul>

<h2>Où se trouve le robinet d'arrêt général ?</h2>
<p>À Asnières-sur-Seine, comme dans la plupart des logements en Île-de-France, le robinet d'arrêt général se trouve généralement :</p>
<ul>
  <li>Sous l'évier de cuisine</li>
  <li>Dans un placard technique ou local compteur</li>
  <li>Dans la cave ou le sous-sol pour les maisons individuelles</li>
  <li>Dans le couloir commun de l'immeuble (demandez au gardien)</li>
</ul>
<p>Repérez-le dès maintenant, avant toute urgence !</p>

<h2>Types de fuites et leur gravité</h2>
<p>Toutes les fuites ne sont pas égales. Un joint de robinet qui goutte peut attendre quelques jours, mais une rupture de canalisation encastrée ou un tuyau d'alimentation qui lâche sous pression nécessite une intervention immédiate.</p>
<p><strong>Signes d'une fuite cachée</strong> à Asnières-sur-Seine : compteur d'eau qui tourne robinets fermés, taches d'humidité sur les murs, parquet qui gondole, facture d'eau anormalement haute.</p>

<h2>Irshad Services : plombier d'urgence à Asnières-sur-Seine</h2>
<p>Irshad Services intervient à Asnières-sur-Seine et dans tout le secteur en <strong>moins de 30 minutes</strong>. Notre équipe est équipée pour localiser et réparer toutes les fuites : fuites apparentes, fuites encastrées, détection non destructive par caméra thermique.</p>
<p>Appelez le <strong>07 83 88 68 09</strong> ou envoyez une photo sur WhatsApp — disponibles 7j/7 pour toutes les urgences plomberie.</p>
`,
  },
  {
    id: 3,
    slug: "mise-aux-normes-electriques-gennevilliers",
    title: "Mise aux normes électriques à Gennevilliers : ce qu'il faut savoir en 2025",
    metaTitle: "Mise aux normes électriques Gennevilliers — Électricien 92230",
    metaDescription:
      "Mise aux normes NF C 15-100 à Gennevilliers. Electricien certifié, devis gratuit, certificat Consuel. Protégez votre logement. ☎ 07 83 88 68 09",
    category: "electricite",
    categoryLabel: "Électricité",
    date: "2025-06-05",
    readTime: 6,
    city: "Gennevilliers",
    excerpt:
      "L'installation électrique de votre logement à Gennevilliers date d'avant 1990 ? Elle est probablement non conforme à la norme NF C 15-100 et peut représenter un risque incendie. La mise aux normes est obligatoire lors d'une vente immobilière et fortement recommandée pour votre sécurité.",
    tags: ["électricité", "mise aux normes", "NF C 15-100", "Gennevilliers", "Consuel", "sécurité"],
    content: `
<p><strong>La mise aux normes électriques à Gennevilliers</strong> concerne des milliers de logements construits avant 1990, dont les installations n'ont jamais été modernisées. Une installation vétuste est la première cause d'incendie domestique en France. Voici tout ce que vous devez savoir.</p>

<h2>La norme NF C 15-100 : qu'est-ce que c'est ?</h2>
<p>La norme NF C 15-100 est le référentiel français pour les installations électriques dans les logements. Elle définit les règles de sécurité obligatoires : nombre de prises par pièce, protection différentielle, mise à la terre, tableau électrique conforme, etc.</p>
<p>Une installation conforme à cette norme protège votre logement contre les <strong>courts-circuits, surtensions et risques d'électrocution</strong>.</p>

<h2>Votre installation est-elle aux normes ?</h2>
<p>Voici les signes qui indiquent une installation électrique à remettre aux normes à Gennevilliers :</p>
<ul>
  <li>Fils en aluminium ou anciens fils sous gaine noire</li>
  <li>Absence de prise de terre (prises à 2 trous uniquement)</li>
  <li>Tableau électrique avec fusibles à cartouche (pas de disjoncteurs modernes)</li>
  <li>Absence de protection différentielle 30 mA dans la salle de bain</li>
  <li>Moins de 2 circuits spécialisés pour la cuisine</li>
  <li>Fils apparents ou gainages endommagés</li>
</ul>

<h2>Coût de la mise aux normes électriques à Gennevilliers</h2>
<p>Le budget varie selon l'état de votre installation et la surface du logement :</p>
<ul>
  <li><strong>Appartement T2 (45 m²)</strong> : 2 500 € à 4 000 €</li>
  <li><strong>Appartement T3 (65 m²)</strong> : 3 500 € à 6 000 €</li>
  <li><strong>Maison (100 m²)</strong> : 6 000 € à 12 000 €</li>
</ul>
<p>Ces prix incluent la fourniture, la pose et le certificat Consuel. Des aides comme MaPrimeRénov peuvent financer une partie des travaux.</p>

<h2>Le certificat Consuel</h2>
<p>Après les travaux, notre électricien vous remet les documents nécessaires pour obtenir le <strong>certificat Consuel</strong> (attestation de conformité), indispensable si vous vendez votre logement ou si vous avez fait de gros travaux électriques.</p>
<p>Irshad Services intervient à Gennevilliers, Asnières-sur-Seine, Courbevoie et Levallois-Perret. Devis gratuit et sans engagement au <strong>07 83 88 68 09</strong>.</p>
`,
  },
  {
    id: 4,
    slug: "chaudiere-gaz-panne-hiver-gennevilliers",
    title: "Chaudière gaz en panne en hiver à Gennevilliers : que faire ?",
    metaTitle: "Chaudière en panne Gennevilliers — Chauffagiste Urgence 92230",
    metaDescription:
      "Chaudière gaz en panne à Gennevilliers en hiver ? Irshad Services intervient en 30 min. Dépannage, remplacement, devis gratuit. ☎ 07 83 88 68 09",
    category: "chauffage",
    categoryLabel: "Chauffage",
    date: "2025-06-03",
    readTime: 5,
    city: "Gennevilliers",
    excerpt:
      "La panne de chaudière en plein hiver à Gennevilliers est une urgence absolue, surtout avec des enfants ou des personnes âgées. Voici les vérifications à faire avant d'appeler le chauffagiste, et comment Irshad Services peut vous dépanner rapidement.",
    tags: ["chaudière", "panne", "chauffage", "urgence", "Gennevilliers", "hiver"],
    content: `
<p><strong>La panne de chaudière gaz en hiver à Gennevilliers</strong> est le scénario que redoute tout propriétaire. Sans chauffage ni eau chaude, la situation devient vite critique, surtout par temps de gel. Avant de paniquer, voici les vérifications à effectuer.</p>

<h2>Vérifications rapides avant d'appeler un chauffagiste</h2>
<p>Dans 30 % des cas, la panne de chaudière à Gennevilliers a une cause simple que vous pouvez résoudre vous-même :</p>
<ul>
  <li><strong>Vérifiez la pression</strong> : le manomètre doit indiquer entre 1 et 1,5 bar. Si elle est trop basse, faites l'appoint d'eau</li>
  <li><strong>Redémarrez la chaudière</strong> : appuyez sur le bouton reset (généralement rouge)</li>
  <li><strong>Vérifiez le disjoncteur</strong> : la chaudière a son propre disjoncteur au tableau électrique</li>
  <li><strong>Contrôlez l'alimentation gaz</strong> : vérifiez que d'autres appareils à gaz fonctionnent</li>
  <li><strong>Lisez le code d'erreur</strong> : les chaudières modernes affichent un code sur leur écran — notez-le avant d'appeler</li>
</ul>

<h2>Codes d'erreur courants des chaudières</h2>
<p>Les marques les plus répandues à Gennevilliers (Saunier Duval, Vaillant, De Dietrich, Atlantic) utilisent des codes d'erreur standardisés :</p>
<ul>
  <li><strong>F22 / E22</strong> : pression eau trop basse — faites l'appoint</li>
  <li><strong>F28 / E28</strong> : défaut allumage — appelez un chauffagiste</li>
  <li><strong>F75</strong> : problème de pompe — intervention professionnelle requise</li>
</ul>

<h2>Réparer ou remplacer votre chaudière ?</h2>
<p>Si votre chaudière a plus de 15 ans et que les réparations s'accumulent, il peut être plus économique de la remplacer. Les nouvelles chaudières à condensation offrent un rendement de 109% et peuvent réduire votre facture de gaz de <strong>25 à 30%</strong>.</p>
<p>De plus, des aides comme <strong>MaPrimeRénov</strong> peuvent couvrir jusqu'à 40% du coût d'installation d'une nouvelle chaudière à condensation à Gennevilliers.</p>

<h2>Irshad Services : chauffagiste d'urgence à Gennevilliers</h2>
<p>Notre équipe intervient en <strong>moins de 30 minutes</strong> à Gennevilliers, Villeneuve-la-Garenne, Clichy et dans tout le secteur. Nous dépannons toutes marques de chaudières et proposons des solutions de remplacement adaptées à votre budget.</p>
<p>Urgence chauffage : <strong>07 83 88 68 09</strong> — disponible 7j/7.</p>
`,
  },
  {
    id: 5,
    slug: "climatisation-reversible-gennevilliers",
    title: "Climatisation réversible à Gennevilliers : installation, prix et aides 2025",
    metaTitle: "Climatisation réversible Gennevilliers — Installation & Prix 2025",
    metaDescription:
      "Installer une climatisation réversible à Gennevilliers (92230). Prix, marques, aides disponibles. Technicien certifié, devis gratuit. ☎ 07 83 88 68 09",
    category: "climatisation",
    categoryLabel: "Climatisation",
    date: "2025-05-28",
    readTime: 6,
    city: "Gennevilliers",
    excerpt:
      "La climatisation réversible est la solution idéale pour les appartements de Gennevilliers : elle rafraîchit en été et chauffe en hiver, en consommant 3 fois moins d'énergie qu'un convecteur électrique. Découvrez les prix, les marques recommandées et les aides disponibles en 2025.",
    tags: ["climatisation", "réversible", "pompe à chaleur", "Gennevilliers", "installation", "2025"],
    content: `
<p><strong>La climatisation réversible à Gennevilliers</strong> connaît un succès grandissant. Avec les étés de plus en plus chauds en Île-de-France, de nombreux habitants des Hauts-de-Seine cherchent à climatiser leur logement tout en maîtrisant leur facture d'énergie.</p>

<h2>Climatisation réversible : comment ça fonctionne ?</h2>
<p>Un climatiseur réversible (aussi appelé pompe à chaleur air-air) fonctionne sur le principe de transfert thermique :</p>
<ul>
  <li><strong>En été</strong> : il capte la chaleur intérieure et la rejette à l'extérieur — refroidissement</li>
  <li><strong>En hiver</strong> : il capte les calories de l'air extérieur (même par temps froid) et les diffuse à l'intérieur — chauffage</li>
</ul>
<p>Son <strong>COP (Coefficient de Performance)</strong> est de 3 à 5 : pour 1 kWh électrique consommé, il produit 3 à 5 kWh de chaleur ou de froid. C'est bien plus économique qu'un radiateur électrique classique.</p>

<h2>Prix d'installation à Gennevilliers en 2025</h2>
<p>Le coût d'installation d'une climatisation réversible à Gennevilliers varie selon la puissance et la marque :</p>
<ul>
  <li><strong>Monosplit 2,5 kW</strong> (chambre ou bureau) : 1 200 € à 1 800 € posé</li>
  <li><strong>Monosplit 3,5 kW</strong> (séjour T2) : 1 500 € à 2 200 € posé</li>
  <li><strong>Monosplit 5 kW</strong> (grand séjour) : 1 800 € à 2 800 € posé</li>
  <li><strong>Multi-split 2 pièces</strong> : 2 500 € à 4 000 € posé</li>
</ul>

<h2>Quelles marques choisir à Gennevilliers ?</h2>
<p>Irshad Services installe et entretient les grandes marques du marché :</p>
<ul>
  <li><strong>Daikin</strong> : référence japonaise, fiabilité maximale, garantie 5 ans</li>
  <li><strong>Mitsubishi Electric</strong> : très silencieux, idéal pour les chambres</li>
  <li><strong>Atlantic</strong> : marque française, excellent rapport qualité/prix</li>
  <li><strong>LG</strong> : bonne gamme entrée de gamme, nombreuses aides disponibles</li>
</ul>

<h2>Aides et subventions disponibles en 2025</h2>
<p>À Gennevilliers et dans les Hauts-de-Seine, plusieurs aides peuvent réduire le coût de votre climatisation réversible :</p>
<ul>
  <li><strong>CEE (Certificats d'Économie d'Énergie)</strong> : prime versée directement par les fournisseurs d'énergie</li>
  <li><strong>TVA à 5,5%</strong> si l'équipement remplace un chauffage existant dans un logement de plus de 2 ans</li>
</ul>
<p>Contactez Irshad Services au <strong>07 83 88 68 09</strong> — nos techniciens certifiés réalisent une étude personnalisée et vous accompagnent dans les démarches d'aides. Devis gratuit.</p>
`,
  },
  {
    id: 6,
    slug: "renovation-appartement-gennevilliers",
    title: "Rénovation appartement à Gennevilliers : par où commencer et quel budget ?",
    metaTitle: "Rénovation appartement Gennevilliers — Devis Gratuit 2025",
    metaDescription:
      "Rénover votre appartement à Gennevilliers (92230) ? Guide complet : étapes, budget, artisans. Irshad Services gère tous les corps de métier. ☎ 07 83 88 68 09",
    category: "renovation",
    categoryLabel: "Rénovation",
    date: "2025-05-20",
    readTime: 7,
    city: "Gennevilliers",
    excerpt:
      "Rénover un appartement à Gennevilliers nécessite une bonne organisation et un budget bien défini. Que vous souhaitiez rénover une pièce ou l'intégralité de votre logement, voici les étapes clés, les prix moyens en 2025, et comment confier vos travaux à un seul artisan de confiance.",
    tags: ["rénovation", "appartement", "Gennevilliers", "budget", "travaux", "artisan"],
    content: `
<p><strong>La rénovation d'un appartement à Gennevilliers</strong> est un projet qui demande une bonne préparation. Que vous achetiez un bien à rénover ou que vous souhaitiez moderniser votre logement actuel, voici le guide complet pour réussir votre projet.</p>

<h2>Les étapes d'une rénovation réussie à Gennevilliers</h2>
<p>Une rénovation bien organisée suit un ordre logique des travaux :</p>
<ol>
  <li><strong>Démolition et dépose</strong> : cloisons, anciens revêtements, équipements à remplacer</li>
  <li><strong>Gros œuvre</strong> : création d'ouvertures, reprises structurelles si nécessaire</li>
  <li><strong>Électricité</strong> : mise aux normes NF C 15-100, nouveau tableau, câblage</li>
  <li><strong>Plomberie</strong> : réseaux d'alimentation et d'évacuation, sanitaires</li>
  <li><strong>Chauffage</strong> : installation ou remplacement du système de chauffage</li>
  <li><strong>Isolation</strong> : cloisons, doublages thermiques et acoustiques</li>
  <li><strong>Carrelage</strong> : pose au sol et en mural (cuisine, salle de bain)</li>
  <li><strong>Peinture et finitions</strong> : enduits, peinture, papier peint</li>
</ol>

<h2>Budget rénovation appartement à Gennevilliers en 2025</h2>
<p>Les prix pratiqués à Gennevilliers et dans les Hauts-de-Seine (92) :</p>
<ul>
  <li><strong>Rénovation légère</strong> (peinture, sols) : 200 à 400 €/m²</li>
  <li><strong>Rénovation intermédiaire</strong> (cuisine, salle de bain) : 400 à 800 €/m²</li>
  <li><strong>Rénovation complète</strong> (tout corps de métier) : 800 à 1 500 €/m²</li>
</ul>
<p>Pour un T2 de 45 m² entièrement rénové, comptez entre <strong>18 000 € et 45 000 €</strong> selon le niveau de prestations souhaité.</p>

<h2>L'avantage de l'artisan multi-services à Gennevilliers</h2>
<p>Irshad Services est un artisan multi-métiers : plomberie, électricité, carrelage, peinture, rénovation complète. Travailler avec un seul interlocuteur pour votre rénovation à Gennevilliers présente de nombreux avantages :</p>
<ul>
  <li><strong>Un seul devis</strong> pour tous les corps de métier</li>
  <li><strong>Coordination optimale</strong> des différentes interventions</li>
  <li><strong>Délais maîtrisés</strong> sans dépendance entre artisans</li>
  <li><strong>Responsabilité unique</strong> en cas de problème</li>
</ul>
<p>Demandez votre devis gratuit pour votre rénovation à Gennevilliers au <strong>07 83 88 68 09</strong> ou via WhatsApp — nous vous répondons en 30 minutes.</p>
`,
  },
  {
    id: 7,
    slug: "maprimenov-2025-ile-de-france",
    title: "MaPrimeRénov 2025 en Île-de-France : les aides pour rénover à Gennevilliers",
    metaTitle: "MaPrimeRénov 2025 Île-de-France — Aides Rénovation Gennevilliers",
    metaDescription:
      "Tout savoir sur MaPrimeRénov 2025 à Gennevilliers et en Île-de-France. Conditions, montants, travaux éligibles. Irshad Services vous accompagne. ☎ 07 83 88 68 09",
    category: "conseils",
    categoryLabel: "Conseils pratiques",
    date: "2025-05-15",
    readTime: 6,
    excerpt:
      "MaPrimeRénov est l'aide principale de l'État pour financer vos travaux de rénovation énergétique à Gennevilliers. En 2025, le dispositif a été simplifié et renforcé. Découvrez comment en bénéficier pour votre logement dans les Hauts-de-Seine.",
    tags: ["MaPrimeRénov", "aides", "rénovation énergétique", "Île-de-France", "2025", "Gennevilliers"],
    content: `
<p><strong>MaPrimeRénov est l'aide de l'État la plus importante</strong> pour financer vos travaux de rénovation énergétique à Gennevilliers et dans toute l'Île-de-France. En 2025, le dispositif a été restructuré pour mieux cibler les rénovations performantes.</p>

<h2>Qui peut bénéficier de MaPrimeRénov à Gennevilliers ?</h2>
<p>MaPrimeRénov est ouverte à tous les propriétaires occupants et bailleurs pour les logements de plus de 15 ans. Le montant de l'aide dépend de votre revenu fiscal de référence, selon 4 catégories :</p>
<ul>
  <li><strong>Ménages très modestes</strong> (bleu) : jusqu'à 90% des travaux financés</li>
  <li><strong>Ménages modestes</strong> (jaune) : jusqu'à 75% des travaux financés</li>
  <li><strong>Ménages intermédiaires</strong> (violet) : jusqu'à 60% des travaux financés</li>
  <li><strong>Ménages aisés</strong> (rose) : jusqu'à 40% des travaux financés</li>
</ul>

<h2>Quels travaux sont éligibles en 2025 ?</h2>
<p>Les travaux éligibles à MaPrimeRénov à Gennevilliers incluent :</p>
<ul>
  <li><strong>Chauffage</strong> : pompe à chaleur air-eau, chaudière biomasse, chauffe-eau thermodynamique</li>
  <li><strong>Isolation</strong> : combles, murs, planchers bas</li>
  <li><strong>Ventilation</strong> : VMC double flux</li>
  <li><strong>Fenêtres</strong> : remplacement double vitrage</li>
</ul>
<p>Attention : depuis 2024, les chaudières gaz, même à condensation, ne sont plus éligibles à MaPrimeRénov.</p>

<h2>Comment faire la demande depuis Gennevilliers ?</h2>
<ol>
  <li>Créez votre compte sur maprimerenov.gouv.fr</li>
  <li>Faites réaliser un devis par un artisan <strong>RGE (Reconnu Garant de l'Environnement)</strong></li>
  <li>Déposez votre dossier en ligne avant de commencer les travaux</li>
  <li>Recevez votre accord et lancez les travaux</li>
  <li>Transmettez les factures pour recevoir le versement</li>
</ol>

<h2>Irshad Services : artisan RGE à Gennevilliers</h2>
<p>Irshad Services est certifié RGE pour les travaux de chauffage et de climatisation. Nos devis sont acceptés pour les demandes MaPrimeRénov. Nous vous accompagnons dans toutes vos démarches administratives.</p>
<p>Contactez-nous au <strong>07 83 88 68 09</strong> pour une étude personnalisée de votre éligibilité aux aides disponibles à Gennevilliers.</p>
`,
  },
  {
    id: 8,
    slug: "plombier-urgence-nuit-gennevilliers",
    title: "Plombier urgence nuit à Gennevilliers : intervention 24h/24",
    metaTitle: "Plombier urgence nuit Gennevilliers — 07 83 88 68 09 — 24h/24",
    metaDescription:
      "Plombier urgence nuit à Gennevilliers et secteur 92. Fuite, canalisation bouchée, WC débordant. Intervention rapide 24h/24. ☎ 07 83 88 68 09",
    category: "plomberie",
    categoryLabel: "Plomberie",
    date: "2025-05-10",
    readTime: 4,
    city: "Gennevilliers",
    excerpt:
      "Une urgence plomberie ne prévient pas. La nuit, un tuyau qui éclate ou des WC qui débordent peuvent causer des dégâts majeurs. Irshad Services assure les urgences plomberie de nuit à Gennevilliers et dans tout le secteur du 92.",
    tags: ["plombier urgence", "nuit", "24h/24", "Gennevilliers", "dépannage", "week-end"],
    content: `
<p><strong>Les urgences plomberie n'ont pas d'horaires.</strong> La nuit, le week-end ou un jour férié, une fuite d'eau importante ou des WC bouchés peuvent rapidement créer des dégâts des eaux chez vous et chez vos voisins. Irshad Services assure les urgences plomberie 24h/24 à Gennevilliers.</p>

<h2>Quels types d'urgences plomberie traitons-nous la nuit ?</h2>
<p>À Gennevilliers et dans les communes environnantes, notre équipe intervient en urgence de nuit pour :</p>
<ul>
  <li><strong>Fuite d'eau abondante</strong> : rupture de canalisation, flexible d'alimentation cassé</li>
  <li><strong>WC bouchés ou débordants</strong> : refoulement des eaux usées</li>
  <li><strong>Canalisation bouchée</strong> avec refoulement général</li>
  <li><strong>Chauffe-eau qui fuit</strong> et inonde la buanderie ou un local</li>
  <li><strong>Robinetterie défectueuse</strong> impossible à couper</li>
  <li><strong>Dégâts des eaux</strong> depuis l'appartement du dessus</li>
</ul>

<h2>Que faire en attendant l'intervention du plombier ?</h2>
<p>Pour limiter les dégâts en attendant notre arrivée à Gennevilliers :</p>
<ul>
  <li>Coupez le robinet d'arrêt général de votre logement</li>
  <li>Coupez le disjoncteur différentiel si de l'eau est proche du tableau électrique</li>
  <li>Éponger autant que possible et placez des serviettes</li>
  <li>Photographiez les dégâts pour votre assurance</li>
  <li>Prévenez votre gardien ou syndic si vous êtes en immeuble</li>
</ul>

<h2>Nos tarifs nuit et week-end à Gennevilliers</h2>
<p>Irshad Services pratique une tarification transparente, même pour les interventions de nuit et le week-end à Gennevilliers. Le devis vous est communiqué avant toute intervention. Nous acceptons les règlements par carte bancaire, espèces ou virement.</p>
<p><strong>Pas de mauvaise surprise :</strong> le prix convenu est le prix payé.</p>

<h2>Zone d'intervention urgence nuit</h2>
<p>Nous intervenons en urgence de nuit sur toute la zone : <strong>Gennevilliers, Asnières-sur-Seine, Villeneuve-la-Garenne, Clichy, Courbevoie, Levallois-Perret, La Garenne-Colombes</strong> et les communes voisines dans un rayon de 15 km.</p>
<p>Urgence plomberie nuit : <strong>07 83 88 68 09</strong> — réponse immédiate, intervention sous 30 minutes.</p>
`,
  },
  {
    id: 9,
    slug: "borne-recharge-voiture-electrique-gennevilliers",
    title: "Borne de recharge voiture électrique à Gennevilliers : installation à domicile",
    metaTitle: "Borne recharge voiture électrique Gennevilliers — Électricien 92230",
    metaDescription:
      "Installer une borne de recharge IRVE à Gennevilliers. Aides disponibles, prix, délais. Électricien certifié IRVE. Devis gratuit. ☎ 07 83 88 68 09",
    category: "electricite",
    categoryLabel: "Électricité",
    date: "2025-05-05",
    readTime: 5,
    city: "Gennevilliers",
    excerpt:
      "Vous venez d'acheter un véhicule électrique à Gennevilliers ? L'installation d'une borne de recharge à domicile est la solution la plus pratique et la plus économique. Découvrez les modèles disponibles, les aides de l'État et le coût d'installation dans le 92.",
    tags: ["borne recharge", "voiture électrique", "IRVE", "Gennevilliers", "électricien", "aide"],
    content: `
<p><strong>L'installation d'une borne de recharge à domicile à Gennevilliers</strong> est devenue un service de plus en plus demandé. Avec la multiplication des véhicules électriques dans les Hauts-de-Seine, charger sa voiture à la maison est à la fois plus pratique et moins cher qu'utiliser les bornes publiques.</p>

<h2>Borne de recharge : les différents types</h2>
<p>Il existe deux grandes catégories de solutions pour recharger votre véhicule électrique à domicile à Gennevilliers :</p>
<ul>
  <li><strong>Prise renforcée (Green'Up)</strong> : rechargement en 8-12h, investissement minimal (150-300 €), idéale si vous roulez peu</li>
  <li><strong>Wallbox (borne murale)</strong> : rechargement en 2-4h selon la puissance (3,7 à 22 kW), confort optimal, prix 400-1 200 €</li>
</ul>

<h2>Prix d'installation à Gennevilliers en 2025</h2>
<p>Le coût total d'installation d'une borne de recharge à Gennevilliers (fourniture + pose) :</p>
<ul>
  <li><strong>Prise renforcée</strong> : 300 à 600 € (installation simple dans un garage)</li>
  <li><strong>Wallbox 7,4 kW</strong> : 800 à 1 500 € (le plus courant)</li>
  <li><strong>Wallbox 22 kW</strong> : 1 200 à 2 500 € (si votre véhicule le supporte)</li>
</ul>
<p>Le prix peut augmenter si des travaux électriques supplémentaires sont nécessaires (renforcement du tableau, tirage de câble).</p>

<h2>L'aide gouvernementale Advenir</h2>
<p>En 2025, le programme <strong>Advenir</strong> propose des subventions pour l'installation de bornes de recharge dans les parkings résidentiels :</p>
<ul>
  <li>Jusqu'à <strong>50% du coût</strong> pour les résidences collectives</li>
  <li>Plafond de 960 € par point de charge</li>
  <li>Déductible des charges de copropriété</li>
</ul>

<h2>La certification IRVE : obligatoire à Gennevilliers</h2>
<p>Pour bénéficier des aides et garantir la conformité de votre installation, l'électricien doit être certifié <strong>IRVE (Infrastructure de Recharge pour Véhicules Électriques)</strong>. Irshad Services dispose de cette certification et réalise les installations dans les règles de l'art à Gennevilliers et dans les Hauts-de-Seine.</p>
<p>Devis gratuit pour votre borne de recharge : <strong>07 83 88 68 09</strong>.</p>
`,
  },
  {
    id: 10,
    slug: "travaux-location-locataire-proprietaire",
    title: "Travaux en location à Gennevilliers : qui paie quoi selon la loi ?",
    metaTitle: "Travaux location locataire propriétaire — Guide juridique 2025",
    metaDescription:
      "Qui paie les travaux en location à Gennevilliers ? Répartition légale entre locataire et propriétaire. Plomberie, électricité, chauffage. Guide complet 2025.",
    category: "conseils",
    categoryLabel: "Conseils pratiques",
    date: "2025-04-28",
    readTime: 6,
    excerpt:
      "Un robinet qui fuit, une chaudière en panne ou une canalisation bouchée à Gennevilliers : en location, savoir qui doit payer les réparations évite les conflits. Voici la répartition légale entre locataire et propriétaire selon la loi ALUR et les décrets en vigueur.",
    tags: ["location", "travaux", "locataire", "propriétaire", "loi", "Gennevilliers", "réparations"],
    content: `
<p><strong>La question de la répartition des travaux en location à Gennevilliers</strong> est source de nombreux conflits entre locataires et propriétaires. Pourtant, la loi est claire : le décret du 26 août 1987 et la loi ALUR définissent précisément qui paie quoi.</p>

<h2>Ce que paie le locataire : les réparations locatives</h2>
<p>Le locataire est responsable des <strong>menues réparations et de l'entretien courant</strong> du logement :</p>
<ul>
  <li><strong>Plomberie</strong> : remplacement joints et clapets de robinetterie, entretien siphons et canalisations accessibles, débouchage (sauf obstruction due à un défaut de la canalisation), remplacement flotteur des WC</li>
  <li><strong>Électricité</strong> : remplacement ampoules, fusibles, petits appareillages (prises, interrupteurs cassés par négligence)</li>
  <li><strong>Chauffage</strong> : entretien annuel de la chaudière individuelle, remplacement piles thermostat</li>
</ul>

<h2>Ce que paie le propriétaire : les grosses réparations</h2>
<p>Le propriétaire prend en charge les <strong>réparations importantes</strong> liées à la vétusté ou aux éléments structurels :</p>
<ul>
  <li><strong>Plomberie</strong> : remplacement chauffe-eau, réparation canalisations encastrées, remplacement robinetterie vétuste</li>
  <li><strong>Électricité</strong> : remplacement tableau électrique, mise aux normes, réfection complète de l'installation</li>
  <li><strong>Chauffage</strong> : remplacement chaudière, réfection réseau de chauffage</li>
  <li><strong>Toiture, structure, humidité</strong> : toujours à la charge du propriétaire</li>
</ul>

<h2>Le cas des urgences à Gennevilliers</h2>
<p>En cas d'urgence (fuite importante, panne de chauffage en hiver), le locataire doit d'abord tenter de joindre le propriétaire. Si le propriétaire est injoignable, le locataire peut faire intervenir un plombier en urgence à Gennevilliers et se faire rembourser — à condition de conserver toutes les factures.</p>

<h2>En résumé : le principe de la vétusté</h2>
<p>La règle générale est simple : si une panne ou une réparation est due à l'<strong>usure normale du temps</strong>, c'est au propriétaire de payer. Si elle est due à un <strong>mauvais usage ou une négligence</strong> du locataire, c'est au locataire de payer.</p>
<p>En cas de doute, Irshad Services peut intervenir en urgence à Gennevilliers et établir un diagnostic clair sur l'origine de la panne. <strong>07 83 88 68 09</strong>.</p>
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getRelatedPosts(currentSlug: string, category: BlogPost["category"], limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, limit);
}
