import { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudiesGallery } from "@/components/sections/CaseStudiesGallery";
import { CTABanner } from "@/components/ui/CTABanner";
import { Guarantee } from "@/components/sections/Guarantee";
import { Testimonials } from "@/components/sections/Testimonials";
import { ShieldCheck, TrendingUp, Users, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "125+ Real Client Case Studies & Results | QualifiedLeadsX™",
  description:
    "Explore 125+ verified scaling case studies, video breakdowns, Meta Ads ad account dashboards, and client revenue proof across 30+ high-ticket industries.",
};

const caseStudiesStats = [
  { value: "$150M+", label: "Client Revenue Scaled", icon: TrendingUp },
  { value: "125+", label: "Documented Case Studies", icon: ShieldCheck },
  { value: "69", label: "Live Video Breakdowns", icon: Video },
  { value: "30+", label: "Industries & Niches Proven", icon: Users },
];

export default function CaseStudiesPage() {
  return (
    <main id="main" className="min-h-screen bg-ink text-fog">
      <AnnouncementBar />
      <Nav />

      {/* Case Studies Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-ink">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-lime/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-mint/5 blur-[120px]" />

        <div className="container-x relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">
                125+ Verified Client Case Studies
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-fog max-w-5xl mx-auto leading-[1.1]">
              The numbers don&apos;t lie.{" "}
              <span className="text-gradient-lime">Here is the proof.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-mist leading-relaxed font-sans">
              Real ad spend, verified cost per lead, revenue dashboards, and live video breakdowns
              from funnels we&apos;ve installed across 30+ high-ticket niches. Every single case study
              uses the exact QualifiedLeadsX™ client acquisition engine.
            </p>
          </Reveal>

          {/* Stats Bar */}
          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {caseStudiesStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-3xl border border-line bg-panel/90 backdrop-blur-md transition-all hover:border-lime/40"
                  >
                    <Icon className="h-5 w-5 text-lime mb-2" />
                    <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-lime tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-mist/70 mt-1">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Gallery Section */}
      <Section className="bg-ink pt-4">
        <CaseStudiesGallery />
      </Section>

      {/* Bottom CTA Banner */}
      <CTABanner
        compact={false}
        eyebrow="Scale Your Acquisition"
        title={
          <>
            Ready to become our next{" "}
            <em className="font-semibold not-italic text-lime">7-figure case study?</em>
          </>
        }
      />

      {/* Guarantee Section */}
      <Guarantee />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </main>
  );
}
