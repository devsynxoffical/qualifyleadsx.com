"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { type BlogPost } from "@/lib/blog-data";
import { Clock, Calendar, Sparkles, BookOpen, Filter, ArrowRight } from "lucide-react";

interface BlogExplorerProps {
  initialPosts: BlogPost[];
}

const FIXED_CATEGORIES = [
  "All Articles",
  "Funnel Strategy",
  "Paid Advertising",
  "Lead Qualification",
  "Scaling & Economics",
];

export function BlogExplorer({ initialPosts }: BlogExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");

  // Dynamically include any new categories added to future blogs while preserving standard order
  const categories = useMemo(() => {
    const postCategories = initialPosts.map((p) => p.category).filter(Boolean);
    const extraCategories = postCategories.filter(
      (c) => !FIXED_CATEGORIES.some((fc) => fc.toLowerCase() === c.toLowerCase())
    );
    return [...FIXED_CATEGORIES, ...Array.from(new Set(extraCategories))];
  }, [initialPosts]);

  // Filter posts based on selected category (case-insensitive & trimmed)
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All Articles") {
      return initialPosts;
    }
    return initialPosts.filter(
      (post) => post.category?.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
    );
  }, [initialPosts, selectedCategory]);

  return (
    <>
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-6 sm:pt-40 sm:pb-8 overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,242,107,0.12),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 border border-lime/30 mb-6">
            <Sparkles className="w-4 h-4 text-lime" />
            <span>Research & Blueprints</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-fog max-w-4xl leading-[1.1]">
            Our <span className="text-lime">Blogs</span> & Scaling Guides
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-mist max-w-2xl leading-relaxed">
            Unfiltered frameworks, proven conversion economics, and operational playbooks derived from scaling over $150M+ in high-ticket client revenue.
          </p>

          {/* Clickable Interactive Category Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-lime text-ink font-bold shadow-[0_0_20px_rgba(201,242,107,0.35)] scale-105"
                      : "bg-panel border border-line text-mist hover:text-fog hover:border-lime/40"
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* AEO Fast Answer / Overview Card with guaranteed high-contrast styling */}
          <div className="mt-8 rounded-2xl border border-lime/30 bg-panel/80 p-6 backdrop-blur-md max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime font-bold mb-2">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
              <span>AEO Executive Summary</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-200" style={{ color: "#e2e8f0" }}>
              <strong style={{ color: "#ffffff" }}>QualifiedLeadsX™ Insights</strong> provides actionable educational blueprints for coaches, consultants, and agencies seeking predictable $100K+/month customer acquisition. Core focus areas include modern 12-minute VSL funnels, broad Meta ad creative targeting, and automated conditional lead qualification.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Articles Grid (RBO Architecture) */}
      <section className="pt-8 pb-16 sm:pt-10 sm:pb-20 bg-ink border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime font-bold">
                KNOWLEDGE VAULT
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-bold font-heading text-fog tracking-tight">
                LET&apos;S FIND OUT OUR LATEST ARTICLES
              </h2>
              <p className="mt-3 text-sm sm:text-base text-mist max-w-2xl">
                Deep dives into customer acquisition economics, automated qualification architectures, and performance media buying.
              </p>
            </div>

            {/* Current Active Category Pill indicator */}
            {selectedCategory !== "All Articles" && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-panel border border-lime/30 text-lime shrink-0">
                <Filter className="w-3.5 h-3.5" />
                <span>Category: <strong>{selectedCategory}</strong></span>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("All Articles")}
                  className="ml-1 text-mist hover:text-white underline cursor-pointer"
                >
                  Reset
                </button>
              </div>
            )}
          </div>

          {/* Cards Display / Empty State */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col h-full rounded-2xl bg-panel border border-line-strong overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-lime/60 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.9),0_0_35px_-10px_rgba(201,242,107,0.2)]"
                >
                  {/* Thumbnail Container */}
                  <Link
                    href={`/blog/${post.slug}`}
                    tabIndex={-1}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-ink block"
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />

                    {/* Category Badge - Clickable to filter */}
                    <div className="absolute top-4 left-4 z-10">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedCategory(post.category);
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-ink/85 backdrop-blur-md border border-lime/30 text-lime shadow-md hover:bg-lime hover:text-ink transition-colors cursor-pointer"
                      >
                        {post.category}
                      </button>
                    </div>

                    {/* Read Time Badge */}
                    <div className="absolute bottom-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-fog/90 bg-ink/75 backdrop-blur-md border border-white/10">
                        <Clock className="w-3 h-3 text-lime" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Post Title */}
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-fog group-hover:text-lime transition-colors duration-200 leading-snug line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      {/* Post Excerpt */}
                      <p className="mt-3 text-sm text-mist/90 leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    </div>

                    <div>
                      {/* CTA Read More Link */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-lime group-hover:gap-2.5 transition-all duration-200"
                      >
                        <span>Read More</span>
                        <span className="text-base leading-none">»</span>
                      </Link>

                      {/* Meta Data Footer */}
                      <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-dim">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-dim" />
                          {post.publishedAt}
                        </span>
                        <span className="flex items-center gap-1.5 text-fog font-medium">
                          <span className="h-5 w-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-[10px] text-lime font-bold">
                            Q
                          </span>
                          <span>QualifiedLeadsX™</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Clean high-contrast empty state for categories with no articles yet */
            <div className="rounded-2xl border border-line bg-panel/70 p-12 text-center max-w-xl mx-auto backdrop-blur-md">
              <div className="mx-auto w-14 h-14 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime mb-4">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-fog">
                No articles in &ldquo;{selectedCategory}&rdquo; yet
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed" style={{ color: "#cbd5e1" }}>
                Our growth team publishes new deep-dive blueprints weekly. This category will unlock shortly.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory("All Articles")}
                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-lime text-ink hover:brightness-110 transition-all cursor-pointer shadow-[0_0_20px_rgba(201,242,107,0.3)]"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
