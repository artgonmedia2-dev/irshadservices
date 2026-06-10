import { Droplet, Zap, Flame, Wind, Grid3X3, Paintbrush, Hammer, Phone, Clock, Shield, Star, MapPin, FileText, Wrench } from "lucide-react";

export const COMPANY = {
  name: "Irshad Services",
  phone: "07 83 88 68 09",
  phoneTel: "+33783886809",
  whatsapp: "https://wa.me/33783886809?text=Bonjour%2C%20je%20souhaite%20obtenir%20un%20devis%20pour...",
  email: "servicesirshad@gmail.com",
  address: "84 Avenue Chandon",
  city: "Gennevilliers",
  postalCode: "92230",
  country: "FR",
  lat: 48.925,
  lng: 2.294,
  rating: 4.5,
  reviewCount: 1200,
  experience: 10,
  interventionTime: "30 min",
  url: "https://irshadservices.fr",
  facebook: "#",
  instagram: "#",
  linkedin: "#",
};

export const SCHEDULE: Record<number, { open: number; close: number } | null> = {
  0: null,
  1: { open: 8, close: 18 },
  2: { open: 7, close: 18 },
  3: { open: 9, close: 19 },
  4: { open: 9, close: 19 },
  5: { open: 9, close: 19 },
  6: { open: 9, close: 19 },
};

export const SCHEDULE_LABELS: Record<number, string> = {
  0: "Dimanche",
  1: "Lundi",
  2: "Mardi",
  3: "Mercredi",
  4: "Jeudi",
  5: "Vendredi",
  6: "Samedi",
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: typeof Droplet;
  color: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: "plomberie",
    slug: "/plomberie",
    title: "Plomberie",
    shortDesc: "Dépannage, installation sanitaire, réparation de fuites",
    description: "Plombier professionnel à Gennevilliers, disponible rapidement pour tous vos travaux de plomberie.",
    icon: Droplet,
    color: "text-primary",
    features: ["Réparation fuite d'eau", "Débouchage canalisation", "Installation sanitaire", "Remplacement robinetterie"],
  },
  {
    id: "electricite",
    slug: "/electricite",
    title: "Électricité",
    shortDesc: "Rénovation électrique, mise aux normes, dépannage urgent",
    description: "Électricien certifié pour tous vos travaux d'installation et de rénovation électrique.",
    icon: Zap,
    color: "text-secondary",
    features: ["Tableau électrique", "Mise aux normes", "Rénovation électrique", "Dépannage urgent"],
  },
  {
    id: "chauffage",
    slug: "/chauffage",
    title: "Chauffage",
    shortDesc: "Installation chaudière, entretien, réparation",
    description: "Installation et entretien de systèmes de chauffage, chaudières et pompes à chaleur.",
    icon: Flame,
    color: "text-primary",
    features: ["Installation chaudière", "Entretien annuel", "Pompe à chaleur", "Réparation radiateurs"],
  },
  {
    id: "climatisation",
    slug: "/climatisation",
    title: "Climatisation",
    shortDesc: "Installation et entretien de climatiseurs",
    description: "Installation, entretien et réparation de systèmes de climatisation pour particuliers et professionnels.",
    icon: Wind,
    color: "text-primary-400",
    features: ["Installation clim", "Entretien annuel", "Réparation panne", "Multi-split"],
  },
  {
    id: "carrelage",
    slug: "/services",
    title: "Carrelage",
    shortDesc: "Pose de carrelage, faïence, sol et mur",
    description: "Pose de carrelage intérieur et extérieur, salle de bain, cuisine, terrasse.",
    icon: Grid3X3,
    color: "text-neutral-600",
    features: ["Carrelage sol", "Faïence mural", "Ragréage", "Joints"],
  },
  {
    id: "peinture",
    slug: "/services",
    title: "Peinture",
    shortDesc: "Travaux de peinture intérieure et décoration",
    description: "Peinture intérieure, ravalement façade, papier peint et finitions de qualité.",
    icon: Paintbrush,
    color: "text-secondary-400",
    features: ["Peinture intérieure", "Enduit mural", "Papier peint", "Finitions soignées"],
  },
  {
    id: "renovation",
    slug: "/services",
    title: "Rénovation",
    shortDesc: "Rénovation complète appartement et maison",
    description: "Prise en charge complète de votre projet de rénovation, de la conception à la finition.",
    icon: Hammer,
    color: "text-neutral-700",
    features: ["Rénovation complète", "Second œuvre", "Coordination travaux", "Garantie décennale"],
  },
  {
    id: "urgence",
    slug: "/contact",
    title: "Urgence 24h",
    shortDesc: "Intervention d'urgence 7j/7 en moins de 30 min",
    description: "Disponible 24h/24 et 7j/7 pour toutes les urgences plomberie et électricité.",
    icon: Phone,
    color: "text-urgent",
    features: ["Disponible 24h/24", "7j/7 y compris dimanches", "Intervention < 30 min", "Devis immédiat"],
  },
];

export type Stat = {
  value: string;
  label: string;
  suffix?: string;
};

export const STATS: Stat[] = [
  { value: "10", label: "Années d'expérience", suffix: "+" },
  { value: "1200", label: "Clients satisfaits", suffix: "+" },
  { value: "30", label: "Délai d'intervention", suffix: " min" },
  { value: "100", label: "Garantie satisfaction", suffix: "%" },
];

export type Step = {
  number: number;
  title: string;
  description: string;
  icon: typeof Phone;
};

export const PROCESS_STEPS: Step[] = [
  {
    number: 1,
    title: "Contactez-nous",
    description: "Par téléphone, WhatsApp ou formulaire en ligne. Disponibles 7j/7.",
    icon: Phone,
  },
  {
    number: 2,
    title: "Devis gratuit",
    description: "Estimation claire et transparente, sans engagement et sans surprise.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Intervention",
    description: "Rapide, propre et dans les normes. Garantie satisfaction 100%.",
    icon: Wrench,
  },
];

export type Testimonial = {
  id: number;
  name: string;
  city: string;
  rating: number;
  text: string;
  service: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mohammed B.",
    city: "Gennevilliers",
    rating: 5,
    text: "Intervention très rapide suite à une fuite d'eau importante. L'équipe est arrivée en moins de 30 minutes et a réglé le problème efficacement. Je recommande vivement !",
    service: "Plomberie d'urgence",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Sophie L.",
    city: "Asnières-sur-Seine",
    rating: 5,
    text: "Rénovation électrique complète de mon appartement. Travail soigné, équipe professionnelle et prix très compétitif. Le résultat est impeccable !",
    service: "Rénovation électrique",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Jean-Pierre M.",
    city: "Courbevoie",
    rating: 5,
    text: "Installation d'une climatisation réversible. Devis rapide, pose propre et sans tracas. Le technicien était très compétent et a tout expliqué clairement.",
    service: "Climatisation",
    avatar: "/images/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Fatima K.",
    city: "Levallois-Perret",
    rating: 4,
    text: "Remplacement de ma chaudière en urgence en plein hiver. Irshad Services a répondu présent rapidement. Très satisfaite de la qualité du travail.",
    service: "Chauffage",
    avatar: "/images/avatar-4.jpg",
  },
  {
    id: 5,
    name: "Thomas R.",
    city: "Clichy",
    rating: 5,
    text: "Débouchage de canalisation difficile. Ils ont trouvé le problème et tout réparé proprement. Tarifs honnêtes et equipe sympathique. À recommander !",
    service: "Plomberie",
    avatar: "/images/avatar-5.jpg",
  },
  {
    id: 6,
    name: "Nadia S.",
    city: "Villeneuve-la-Garenne",
    rating: 5,
    text: "Rénovation complète de ma salle de bain. Carrelage, plomberie, électricité — tout fait par la même équipe. Résultat magnifique, dans les délais annoncés !",
    service: "Rénovation",
    avatar: "/images/avatar-6.jpg",
  },
];

export type City = {
  name: string;
  lat: number;
  lng: number;
  slug: string;
  distance?: string;
};

export const CITIES: City[] = [
  { name: "Gennevilliers", lat: 48.925, lng: 2.294, slug: "gennevilliers", distance: "0 km" },
  { name: "Asnières-sur-Seine", lat: 48.912, lng: 2.284, slug: "asnieres-sur-seine", distance: "2 km" },
  { name: "Courbevoie", lat: 48.897, lng: 2.253, slug: "courbevoie", distance: "5 km" },
  { name: "Levallois-Perret", lat: 48.895, lng: 2.287, slug: "levallois-perret", distance: "4 km" },
  { name: "Clichy", lat: 48.904, lng: 2.306, slug: "clichy", distance: "3 km" },
  { name: "La Garenne-Colombes", lat: 48.906, lng: 2.247, slug: "la-garenne-colombes", distance: "6 km" },
  { name: "Villeneuve-la-Garenne", lat: 48.938, lng: 2.327, slug: "villeneuve-la-garenne", distance: "5 km" },
];

export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quels types de travaux réalisez-vous ?",
    answer: "Irshad Services intervient sur tous les travaux de plomberie (fuites, débouchage, installation sanitaire), d'électricité (tableau électrique, rénovation, dépannage), de chauffage (chaudière, pompe à chaleur), de climatisation, de carrelage, de peinture et de rénovation complète.",
    category: "général",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer: "Oui, le devis est entièrement gratuit et sans engagement. Nous vous proposons une estimation claire et transparente avant de commencer les travaux, sans aucuns frais de déplacement pour établir ce devis.",
    category: "devis",
  },
  {
    question: "Dans quel délai intervenez-vous en urgence ?",
    answer: "Pour les urgences (fuite d'eau, panne électrique, chauffage en hiver), nous intervenons généralement en moins de 30 minutes sur Gennevilliers et les communes voisines. Nous sommes disponibles 7j/7 y compris les dimanches et jours fériés.",
    category: "urgence",
  },
  {
    question: "Quelles sont vos garanties ?",
    answer: "Nous offrons une garantie satisfaction 100% sur tous nos travaux. Nos interventions sont couvertes par notre assurance responsabilité civile professionnelle. Pour les gros travaux, nous intervenons avec garantie décennale.",
    category: "garanties",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs varient selon la nature des travaux. Nous pratiquons des prix compétitifs et transparents. Chaque intervention fait l'objet d'un devis gratuit préalable. Aucune mauvaise surprise sur la facture finale.",
    category: "tarifs",
  },
  {
    question: "Intervenez-vous en dehors de Gennevilliers ?",
    answer: "Oui, nous intervenons dans un rayon de 15 km autour de Gennevilliers : Asnières-sur-Seine, Courbevoie, Levallois-Perret, Clichy, La Garenne-Colombes, Villeneuve-la-Garenne et les communes environnantes.",
    category: "zones",
  },
  {
    question: "Puis-je vous contacter par WhatsApp ?",
    answer: "Oui ! Vous pouvez nous contacter directement par WhatsApp au 07 83 88 68 09. C'est souvent le moyen le plus rapide pour nous envoyer des photos de votre problème et obtenir une réponse rapide.",
    category: "contact",
  },
  {
    question: "Travaillez-vous le week-end ?",
    answer: "Oui, nous travaillons du lundi au samedi. Le samedi de 9h à 19h. Pour les urgences uniquement, nous pouvons intervenir le dimanche. Nos horaires standards sont : Lundi 8h-18h, Mardi 7h-18h, Mercredi au Samedi 9h-19h.",
    category: "horaires",
  },
];

export const WORK_TYPES = [
  { id: "plomberie", label: "Plomberie", icon: "Droplet" },
  { id: "electricite", label: "Électricité", icon: "Zap" },
  { id: "chauffage", label: "Chauffage", icon: "Flame" },
  { id: "climatisation", label: "Climatisation", icon: "Wind" },
  { id: "carrelage", label: "Carrelage", icon: "Grid3X3" },
  { id: "peinture", label: "Peinture", icon: "Paintbrush" },
  { id: "renovation", label: "Rénovation complète", icon: "Hammer" },
  { id: "autre", label: "Autre", icon: "HelpCircle" },
];
