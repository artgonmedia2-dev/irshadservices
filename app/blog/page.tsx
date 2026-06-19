import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";
import { COMPANY } from "@/lib/data";
import { Clock, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Conseils plomberie, électricité et rénovation à Gennevilliers",
  description:
    "Conseils d'experts en plomberie, électricité, chauffage et rénovation à Gennevilliers (92230). Articles pratiques, guides prix et astuces par Irshad Services.",
  alternates: {
    canonical: `${COMPANY.url}/blog`,
  },
  openGraph: {
    title: "Blog Irshad Services — Conseils travaux Gennevilliers",
    description:
      "Guides pratiques sur la plomberie, l'électricité, le chauffage et la rénovation à Gennevilliers et dans les Hauts-de-Seine.",
    url: `${COMPANY.url}/blog`,
    type: "website",
  },
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Irshad Services",
  description: "Conseils pratiques en plomberie, électricité, chauffage et rénovation à Gennevilliers.",
  url: `${COMPANY.url}/blog`,
  publisher: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
    url: COMPANY.url,
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${COMPANY.url}/blog/${post.slug}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: COMPANY.name },
  })),
};

export default function BlogPage() {
  const categories = Object.entries(BLOG_CATEGORIES);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-24 pb-12 bg-primary" aria-label="Blog Irshad Services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Blog</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Conseils & guides travaux à Gennevilliers
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Plomberie, électricité, chauffage, climatisation et rénovation — nos experts partagent leurs conseils pratiques pour les habitants de Gennevilliers et du secteur 92.
            </p>
          </div>
        </section>

        {/* Category filters */}
        <section className="py-6 bg-white border-b border-neutral-100" aria-label="Catégories">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-white">
                Tous les articles
              </span>
              {categories.map(([key, { label, color }]) => (
                <span key={key} className={`px-4 py-1.5 rounded-full text-sm font-medium ${color}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section className="py-16 bg-neutral-50" aria-label="Articles de blog">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => {
                const categoryInfo = BLOG_CATEGORIES[post.category];
                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow group"
                  >
                    {/* Card header */}
                    <div className="h-3 bg-primary" aria-hidden="true" />

                    <div className="p-6">
                      {/* Category + date */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryInfo.color}`}>
                          {categoryInfo.label}
                        </span>
                        <time
                          dateTime={post.date}
                          className="text-xs text-neutral-400"
                        >
                          {new Date(post.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                      </div>

                      {/* Title */}
                      <h2 className="text-base font-display font-bold text-neutral-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                        <div className="flex items-center gap-3 text-xs text-neutral-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            {post.readTime} min
                          </span>
                          {post.city && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                              {post.city}
                            </span>
                          )}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-1 text-primary text-xs font-semibold hover:gap-2 transition-all"
                          aria-label={`Lire l'article : ${post.title}`}
                        >
                          Lire
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary text-white text-center" aria-label="Demander un devis">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-display font-bold mb-3">
              Besoin d&apos;un professionnel à Gennevilliers ?
            </h2>
            <p className="text-white/80 mb-6">
              Irshad Services intervient en 30 minutes pour toutes vos urgences et travaux.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition-colors"
              >
                {COMPANY.phone}
              </a>
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#E55A2B] transition-colors"
              >
                Devis gratuit
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
