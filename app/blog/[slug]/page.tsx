import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import { BLOG_POSTS, BLOG_CATEGORIES, getBlogPost, getRelatedPosts } from "@/lib/blog-data";
import { COMPANY } from "@/lib/data";
import { Clock, MapPin, ArrowRight, Phone, Tag } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${COMPANY.url}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${COMPANY.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [COMPANY.name],
      locale: "fr_FR",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);
  const categoryInfo = BLOG_CATEGORIES[post.category];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url: `${COMPANY.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
      telephone: COMPANY.phoneTel,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: { "@type": "ImageObject", url: `${COMPANY.url}/logo.png` },
    },
    image: `${COMPANY.url}/og-image.jpg`,
    inLanguage: "fr-FR",
    keywords: post.tags.join(", "),
    articleSection: categoryInfo.label,
    ...(post.city && {
      contentLocation: {
        "@type": "Place",
        name: post.city,
        address: { "@type": "PostalAddress", addressLocality: post.city, addressCountry: "FR" },
      },
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: COMPANY.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${COMPANY.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${COMPANY.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-24 pb-10 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white truncate max-w-[200px]">{post.title}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryInfo.color}`}>
                {categoryInfo.label}
              </span>
              {post.city && (
                <span className="flex items-center gap-1 text-white/60 text-xs">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.city}
                </span>
              )}
              <span className="flex items-center gap-1 text-white/60 text-xs">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {post.readTime} min de lecture
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-white/80 text-base leading-relaxed">
              {post.excerpt}
            </p>

            <time
              dateTime={post.date}
              className="block mt-4 text-sm text-white/50"
            >
              Publié le{" "}
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {" "}par {COMPANY.name}
            </time>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Article body */}
              <div className="lg:col-span-2">
                <div
                  className="prose prose-neutral max-w-none
                    prose-headings:font-display prose-headings:font-bold prose-headings:text-neutral-900
                    prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
                    prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
                    prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-4
                    prose-ul:my-3 prose-li:text-neutral-700 prose-li:my-1
                    prose-ol:my-3
                    prose-strong:text-neutral-900
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-neutral-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="w-4 h-4 text-neutral-400" aria-hidden="true" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-5">
                {/* CTA Card */}
                <div className="bg-primary rounded-2xl p-6 text-white sticky top-24">
                  <p className="font-display font-bold text-lg mb-2">
                    Besoin d&apos;un artisan ?
                  </p>
                  <p className="text-white/80 text-sm mb-4">
                    Irshad Services intervient à Gennevilliers et secteur 92 en moins de 30 min.
                  </p>
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="flex items-center justify-center gap-2 bg-white text-primary py-3 rounded-xl font-semibold text-sm hover:bg-neutral-100 transition-colors mb-2"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {COMPANY.phone}
                  </a>
                  <Link
                    href="/devis"
                    className="flex items-center justify-center gap-2 bg-[#FF6B35] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#E55A2B] transition-colors"
                  >
                    Devis gratuit
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <p className="text-white/60 text-xs text-center mt-3">
                    Devis gratuit · 7j/7 · Réponse en 30 min
                  </p>
                </div>

                {/* Services links */}
                <div className="bg-neutral-50 rounded-2xl p-5">
                  <h3 className="font-display font-bold text-neutral-900 mb-3 text-sm">
                    Nos services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { href: "/plomberie", label: "Plomberie" },
                      { href: "/electricite", label: "Électricité" },
                      { href: "/chauffage", label: "Chauffage" },
                      { href: "/climatisation", label: "Climatisation" },
                      { href: "/services", label: "Rénovation & Carrelage" },
                    ].map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="flex items-center gap-2 text-sm text-neutral-700 hover:text-primary transition-colors"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="py-12 bg-neutral-50" aria-label="Articles similaires">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-display font-bold text-neutral-900 mb-6">
                Articles similaires
              </h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {related.map((relPost) => {
                  const relCategory = BLOG_CATEGORIES[relPost.category];
                  return (
                    <article key={relPost.id} className="bg-white rounded-xl p-5 border border-neutral-100 hover:shadow-md transition-shadow">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${relCategory.color}`}>
                        {relCategory.label}
                      </span>
                      <h3 className="text-sm font-display font-bold text-neutral-900 mt-2 mb-2 leading-snug hover:text-primary transition-colors">
                        <Link href={`/blog/${relPost.slug}`}>{relPost.title}</Link>
                      </h3>
                      <Link
                        href={`/blog/${relPost.slug}`}
                        className="flex items-center gap-1 text-primary text-xs font-semibold hover:gap-2 transition-all"
                      >
                        Lire <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className="py-6 bg-white text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            ← Retour au blog
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
