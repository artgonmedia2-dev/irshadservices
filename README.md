# Irshad Services — Site web

Site vitrine professionnel pour Irshad Services, plombier & électricien à Gennevilliers (92230).

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript strict
- **Styling** : Tailwind CSS v4
- **UI Components** : shadcn/ui
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Formulaires** : React Hook Form + Zod v4
- **Email** : Resend (simulation sans clé API)
- **Carte** : React-Leaflet + OpenStreetMap
- **SEO** : Next.js Metadata API, Schema.org, next-sitemap

## Installation

```bash
cd irshadservices
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000

## Configuration

Éditez `.env.local` et renseignez vos clés :

```env
# Resend pour les emails (https://resend.com)
RESEND_API_KEY=re_votre_cle_api

# URL de production
NEXT_PUBLIC_SITE_URL=https://irshadservices.fr
```

**Sans clé Resend**, les formulaires fonctionnent en mode simulation (données loggées en console).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil avec toutes les sections |
| `/services` | Hub de tous les services |
| `/plomberie` | Page service plomberie |
| `/electricite` | Page service électricité |
| `/chauffage` | Page service chauffage |
| `/climatisation` | Page service climatisation |
| `/contact` | Page contact avec formulaire et carte |
| `/devis` | Formulaire de devis multi-étapes |
| `/devis/merci` | Page de confirmation après devis |
| `/mentions-legales` | Mentions légales |
| `/politique-confidentialite` | Politique de confidentialité |
| `/politique-cookies` | Politique cookies |

## Scripts

```bash
npm run dev        # Démarrage en développement
npm run build      # Build de production + génération sitemap
npm run start      # Démarrage en production
npm run lint       # Vérification ESLint
```

## Structure des fichiers

```
irshadservices/
├── app/
│   ├── layout.tsx              # Layout racine (fonts, schema.org, metadata)
│   ├── page.tsx                # Page d'accueil
│   ├── not-found.tsx           # Page 404 custom
│   ├── error.tsx               # Page 500 custom
│   ├── contact/page.tsx
│   ├── devis/page.tsx + merci/page.tsx
│   ├── services/page.tsx
│   ├── plomberie/page.tsx
│   ├── electricite/page.tsx
│   ├── chauffage/page.tsx
│   ├── climatisation/page.tsx
│   ├── mentions-legales/page.tsx
│   ├── politique-confidentialite/page.tsx
│   ├── politique-cookies/page.tsx
│   └── api/
│       ├── devis/route.ts      # API email devis
│       └── contact/route.ts    # API email contact
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation sticky avec dropdown
│   │   ├── Footer.tsx          # Footer 4 colonnes
│   │   └── WhatsAppWidget.tsx  # Widget WhatsApp flottant
│   ├── sections/               # Sections home page
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── MapSection.tsx
│   │   ├── DevisSection.tsx
│   │   └── FAQSection.tsx
│   └── ui/
│       ├── DevisForm.tsx       # Formulaire multi-étapes 3 étapes
│       ├── ContactForm.tsx
│       ├── LeafletMap.tsx      # Carte interactive
│       ├── ClientLeafletMap.tsx
│       ├── OpenStatusBadge.tsx # Badge ouvert/fermé dynamique
│       └── ServicePageTemplate.tsx
└── lib/
    ├── data.ts                 # Toutes les données statiques
    ├── animations.ts           # Variantes Framer Motion réutilisables
    ├── hooks.ts                # useOpenStatus, useScrolled, useCountUp
    └── utils.ts                # cn() utility
```

## Déploiement sur Hostinger

1. Build : `npm run build`
2. Uploader le dossier `.next/`, `public/`, `package.json` sur Hostinger
3. Configurer les variables d'environnement dans le panel Hostinger
4. Installer les dépendances : `npm install --production`
5. Démarrer : `npm run start`
6. Pointer le domaine `irshadservices.fr` vers le serveur

## Activer les emails (Resend)

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier le domaine `irshadservices.fr`
3. Obtenir la clé API et la mettre dans `.env.local` : `RESEND_API_KEY=re_xxx`
4. Redémarrer l'application

## TODO Scope 2

- [ ] Pages villes (Asnières, Courbevoie, Levallois, Clichy...)
- [ ] Blog complet avec CMS (Sanity.io)
- [ ] Système d'avis Google intégré
- [ ] Page réalisations / portfolio avec lightbox
- [ ] Plausible Analytics intégration
- [ ] Back-office pour gérer les devis

## Informations client

| | |
|--|--|
| **Téléphone** | 07 83 88 68 09 |
| **Email** | servicesirshad@gmail.com |
| **Adresse** | 84 Avenue Chandon, 92230 Gennevilliers |
| **Horaires** | Lun 8h-18h, Mar 7h-18h, Mer-Sam 9h-19h |
