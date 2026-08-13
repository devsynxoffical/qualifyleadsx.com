import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: "Mastermind | QualifiedLeadsX™",
  description: "Join the exclusive QualifiedLeadsX™ Mastermind.",
};

export default function MastermindPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-ink selection:bg-lime/30 selection:text-lime">
      <Nav />
      <div className="flex flex-1 flex-col items-center justify-center pt-32 pb-24 text-center px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
            By Invitation Only
          </div>
          
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.03em] text-fog sm:text-6xl lg:text-7xl">
            The <em className="text-lime not-italic">Mastermind</em>
          </h1>
          
          <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-mist">
            An exclusive collective of high-ticket coaches, consultants, and agency owners scaling beyond $100K/month. Share insights, strategies, and connect with elite operators.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={site.bookCallUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink shadow-[0_0_50px_-12px_var(--color-lime)] transition-all hover:scale-105 hover:bg-lime-soft"
            >
              Apply to Join
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
