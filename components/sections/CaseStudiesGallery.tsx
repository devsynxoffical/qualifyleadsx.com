"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  Video,
  Image as ImageIcon,
  BadgeCheck,
  Play,
  ZoomIn,
  Sparkles,
  ArrowUpRight,
  Layers,
  X,
  TrendingUp,
  DollarSign,
  Users,
} from "lucide-react";
import { caseStudiesData } from "@/lib/case-studies-data";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";

const CATEGORIES = [
  "All",
  "Videos & Reels",
  "Screenshots & Data",
  "Agency & B2B",
  "Home Services & Roofing",
  "Coaching & Summits",
  "Legal & MVA",
  "Auto & Detailing",
  "Insurance & Finance",
  "MedSpa & Aesthetics",
  "Solar & Energy",
] as const;

type SortOption = "impact" | "spend" | "volume" | "cpl";

export function CaseStudiesGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mediaTypeFilter, setMediaTypeFilter] = useState<"all" | "video" | "image">("all");
  const [sortBy, setSortBy] = useState<SortOption>("impact");
  const [visibleCount, setVisibleCount] = useState<number>(18);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalIndex, setModalIndex] = useState<number>(0);

  // Filtered and Sorted case studies (Big Numbers First by default)
  const filteredItems = useMemo(() => {
    const list = caseStudiesData.filter((item) => {
      // Media type filter
      if (mediaTypeFilter === "video" && item.type !== "video") return false;
      if (mediaTypeFilter === "image" && item.type !== "image") return false;

      // Category tab filter
      if (selectedCategory === "Videos & Reels" && item.type !== "video") return false;
      if (selectedCategory === "Screenshots & Data" && item.type !== "image") return false;
      if (
        selectedCategory !== "All" &&
        selectedCategory !== "Videos & Reels" &&
        selectedCategory !== "Screenshots & Data" &&
        item.category !== selectedCategory
      ) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchSubtitle = item.subtitle.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchCategory = item.category.toLowerCase().includes(q);
        const matchBigNum = item.bigNumber.toLowerCase().includes(q);
        const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchSubtitle && !matchDesc && !matchCategory && !matchBigNum && !matchTags) {
          return false;
        }
      }

      return true;
    });

    // Apply sorting
    if (sortBy === "impact") {
      return [...list].sort((a, b) => (b.impactScore || 0) - (a.impactScore || 0));
    } else if (sortBy === "spend") {
      return [...list].sort((a, b) => {
        const aHasDollar = a.bigNumber.includes("$");
        const bHasDollar = b.bigNumber.includes("$");
        if (aHasDollar && !bHasDollar) return -1;
        if (!aHasDollar && bHasDollar) return 1;
        return (b.impactScore || 0) - (a.impactScore || 0);
      });
    } else if (sortBy === "volume") {
      return [...list].sort((a, b) => {
        const aHasNum = /^\d/.test(a.bigNumber);
        const bHasNum = /^\d/.test(b.bigNumber);
        if (aHasNum && !bHasNum) return -1;
        if (!aHasNum && bHasNum) return 1;
        return (b.impactScore || 0) - (a.impactScore || 0);
      });
    }

    return list;
  }, [selectedCategory, searchQuery, mediaTypeFilter, sortBy]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const openModal = (indexInFiltered: number) => {
    setModalIndex(indexInFiltered);
    setModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Search & Filter Controls Bar */}
      <div className="mb-10 space-y-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-mist/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(18);
              }}
              placeholder="Search big numbers (e.g. $125k, $639k, 15,958, CPL, roofing, MVA)..."
              className="w-full rounded-2xl border border-line bg-panel/80 pl-11 pr-10 py-3 text-sm text-fog placeholder:text-mist/50 backdrop-blur-md focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full text-mist hover:text-fog hover:bg-white/10"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Quick Sort & Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Sort Toggle (Big Numbers First!) */}
            <div className="flex items-center gap-1 p-1 rounded-2xl border border-lime/30 bg-lime/5 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setSortBy("impact")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                  sortBy === "impact"
                    ? "bg-lime text-ink shadow-[0_0_15px_rgba(201,242,107,0.4)]"
                    : "text-mist hover:text-fog"
                }`}
                title="Sort by Biggest Numbers & Highest Revenue/Volume first"
              >
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Big Numbers First</span>
              </button>
              <button
                type="button"
                onClick={() => setSortBy("spend")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                  sortBy === "spend"
                    ? "bg-lime text-ink shadow-[0_0_15px_rgba(201,242,107,0.4)]"
                    : "text-mist hover:text-fog"
                }`}
              >
                <DollarSign className="h-3.5 w-3.5" />
                <span>Revenue/Spend</span>
              </button>
              <button
                type="button"
                onClick={() => setSortBy("volume")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                  sortBy === "volume"
                    ? "bg-lime text-ink shadow-[0_0_15px_rgba(201,242,107,0.4)]"
                    : "text-mist hover:text-fog"
                }`}
              >
                <Users className="h-3.5 w-3.5" />
                <span>Lead Volume</span>
              </button>
            </div>

            {/* Media Type Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-2xl border border-line bg-panel/60 backdrop-blur-md">
              <button
                type="button"
                onClick={() => {
                  setMediaTypeFilter("all");
                  setVisibleCount(18);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                  mediaTypeFilter === "all"
                    ? "bg-white/15 text-fog font-bold"
                    : "text-mist hover:text-fog"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5 text-lime" />
                All ({caseStudiesData.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  setMediaTypeFilter("video");
                  setVisibleCount(18);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                  mediaTypeFilter === "video"
                    ? "bg-white/15 text-fog font-bold"
                    : "text-mist hover:text-fog"
                }`}
              >
                <Video className="h-3.5 w-3.5 text-lime" />
                Reels ({caseStudiesData.filter((i) => i.type === "video").length})
              </button>
              <button
                type="button"
                onClick={() => {
                  setMediaTypeFilter("image");
                  setVisibleCount(18);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                  mediaTypeFilter === "image"
                    ? "bg-white/15 text-fog font-bold"
                    : "text-mist hover:text-fog"
                }`}
              >
                <ImageIcon className="h-3.5 w-3.5 text-lime" />
                Data ({caseStudiesData.filter((i) => i.type === "image").length})
              </button>
            </div>
          </div>
        </div>

        {/* Categories Horizontal Scroll Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(18);
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "border border-lime bg-lime text-ink font-bold shadow-[0_0_20px_rgba(201,242,107,0.3)]"
                    : "border border-line bg-panel/70 text-mist hover:border-lime/40 hover:text-fog"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-dim border-b border-line/50 pb-3">
          <span className="flex items-center gap-2">
            <span>
              Showing <strong className="text-lime">{displayedItems.length}</strong> of{" "}
              <strong>{filteredItems.length}</strong> case studies
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-lime/10 border border-lime/20 px-2 py-0.5 text-[10px] text-lime">
              ⚡ Sorted by Biggest Numbers First
            </span>
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-lime hover:underline flex items-center gap-1"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>

      {/* Grid of Case Studies */}
      {displayedItems.length === 0 ? (
        <div className="py-20 text-center rounded-3xl border border-line bg-panel">
          <p className="text-lg font-semibold text-fog">No matching case studies found</p>
          <p className="text-sm text-mist mt-1">Try adjusting your search query or category filters.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setMediaTypeFilter("all");
              setSortBy("impact");
            }}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2 text-xs font-bold text-ink hover:bg-lime-soft"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedItems.map((item, index) => {
            const isVideo = item.type === "video";

            return (
              <article
                key={item.id}
                onClick={() => openModal(index)}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-panel transition-all duration-500 hover:border-lime/60 hover:shadow-[0_20px_50px_rgba(201,242,107,0.18)] hover:-translate-y-2 cursor-pointer"
              >
                {/* 🌟 BIG NUMBERS FIRST HEADER STRIP 🌟 */}
                <div className="relative z-10 border-b border-lime/20 bg-gradient-to-r from-[#07190e] via-[#0b2616] to-[#07190e] p-4 sm:p-5 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-mist/70 font-semibold flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-lime" />
                      {item.bigNumberLabel || "Verified Output"}
                    </span>
                    <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-black text-lime tracking-tight drop-shadow-[0_0_20px_rgba(201,242,107,0.4)]">
                      {item.bigNumber}
                    </span>
                  </div>
                  
                  {/* Secondary metric tag if present */}
                  {item.metrics && item.metrics.length > 1 && (
                    <div className="text-right flex flex-col items-end">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-dim">
                        {item.metrics[1].label}
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-fog">
                        {item.metrics[1].value}
                      </span>
                    </div>
                  )}
                </div>

                {/* Media Preview Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-ink border-b border-line">
                  {isVideo ? (
                    <div className="relative h-full w-full">
                      {item.thumbnailSrc ? (
                        <Image
                          src={item.thumbnailSrc}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-panel to-ink flex items-center justify-center">
                          <Video className="h-12 w-12 text-lime/40" />
                        </div>
                      )}
                      {/* Video Play Overlay Badge */}
                      <div className="absolute inset-0 flex items-center justify-center bg-ink/30 backdrop-blur-[1px] transition-all group-hover:bg-ink/10">
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_25px_rgba(201,242,107,0.6)] transition-transform duration-300 group-hover:scale-110">
                          <Play className="ml-1 h-6 w-6 fill-current" />
                        </div>
                      </div>
                      {/* Video Tag */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-lime/30 bg-ink/85 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-lime backdrop-blur-md">
                        <Video className="h-3 w-3" />
                        Reel Breakdown
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        src={item.mediaSrc}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain object-center transition-transform duration-700 group-hover:scale-105 bg-[#050e08]"
                      />
                      {/* Zoom Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-ink/30 backdrop-blur-[2px]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_25px_rgba(201,242,107,0.5)] transition-transform duration-300 group-hover:scale-110">
                          <ZoomIn className="h-5 w-5" />
                        </div>
                      </div>
                      {/* Multi-image indicator if carousel */}
                      {item.mediaFiles && item.mediaFiles.length > 1 && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-white/20 bg-ink/85 px-2 py-0.5 font-mono text-[9px] font-bold text-fog backdrop-blur-md">
                          <Layers className="h-3 w-3 text-lime" />
                          {item.mediaFiles.length} slides
                        </div>
                      )}
                      {/* Data Proof Tag */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-ink/85 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-fog backdrop-blur-md">
                        <ImageIcon className="h-3 w-3 text-lime" />
                        Live Data Proof
                      </div>
                    </div>
                  )}

                  {/* Category Pill at Bottom of Media */}
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-lg bg-ink/90 border border-lime/30 px-2.5 py-1 font-mono text-[10px] font-bold text-lime backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content & Metrics Section */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    {/* Header line with Live status */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] text-lime font-bold">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verified Case Study
                      </span>
                      <span className="font-mono text-[10px] text-dim uppercase">
                        {isVideo ? "Video" : "Screenshot"}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-base sm:text-lg font-bold text-fog tracking-tight line-clamp-2 group-hover:text-lime transition-colors">
                      {item.title}
                    </h3>

                    {/* Description Snippet */}
                    <p className="mt-3 text-xs leading-relaxed text-mist line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Read / Watch CTA footer */}
                  <div className="mt-4 pt-3 border-t border-line flex items-center justify-between text-xs font-semibold text-fog group-hover:text-lime transition-colors">
                    <span className="inline-flex items-center gap-1">
                      {isVideo ? "Watch Reel & Full Breakdown" : "View Full Results & Breakdown"}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-lime" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Load More Button */}
      {visibleCount < filteredItems.length && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 18)}
            className="group relative inline-flex items-center gap-2 rounded-full border border-lime/40 bg-panel px-8 py-3.5 text-sm font-bold text-lime transition-all hover:bg-lime hover:text-ink hover:shadow-[0_0_30px_rgba(201,242,107,0.35)] hover:scale-105"
          >
            <span>Load More Case Studies</span>
            <span className="rounded-full bg-lime/15 px-2 py-0.5 font-mono text-xs group-hover:bg-ink/20">
              +{Math.min(18, filteredItems.length - visibleCount)}
            </span>
          </button>
          <p className="mt-2 text-xs font-mono text-dim">
            Showing {displayedItems.length} of {filteredItems.length} case studies
          </p>
        </div>
      )}

      {/* Case Study Modal Viewer */}
      <CaseStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        items={filteredItems}
        currentIndex={modalIndex}
        onNavigate={setModalIndex}
      />
    </div>
  );
}
