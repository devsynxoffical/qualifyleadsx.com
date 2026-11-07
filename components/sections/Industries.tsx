"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/data";

/** Industries that have a dedicated landing page link to it (homepage -> industry pages). */
const INDUSTRY_HREF: Record<string, string> = {
  "Digital Marketing Agencies": "/for/agencies",
  "Business Coaches": "/for/business-coaches",
  Consultants: "/for/consultants",
  "High-Ticket Service Providers": "/high-ticket-lead-generation",
  "B2B Companies": "/for/b2b-services",
  "Home Service Businesses": "/for/home-improvement",
  "Roofing Companies": "/for/home-improvement",
  "Kitchen & Bathroom Remodeling": "/for/home-improvement",
  "Solar Companies": "/for/solar-companies",
  "Personal Injury Law Firms": "/for/law-firms",
  "Medical Malpractice Attorneys": "/for/law-firms",
  "Med Spas & Aesthetic Clinics": "/for/med-spas",
  "Real Estate Companies": "/for/real-estate-investors",
  "Mortgage Brokers": "/for/financial-advisors",
  "Insurance Agencies": "/for/insurance-agencies",
  "Fitness Brands & Gyms": "/for/fitness-coaches",
};

const tileCls =
  "group flex items-center gap-3 rounded-2xl border border-line bg-panel/60 px-5 py-4 transition-colors duration-300 hover:border-lime/30 hover:bg-elevated";

export function Industries() {
  return (
    <Section id="industries" className="bg-ink">
      <SectionHeading
        eyebrow="Proven across niches"
        title={
          <>
            Lead generation agency for service based businesses:{" "}
            <em className="font-semibold not-italic text-lime">industries we work with.</em>
          </>
        }
        subtitle="The QualifiedLeadsX™ system is engineered per niche - same engine, different fuel. These are just some of the industries we've scaled."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industries.map((name, i) => (
          <Reveal key={name} delay={(i % 4) * 0.04} y={16}>
            {INDUSTRY_HREF[name] ? (
              <Link href={INDUSTRY_HREF[name]} className={tileCls}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="flex-1 text-sm font-medium text-mist transition-colors duration-300 group-hover:text-fog">
                  {name}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-dim transition-colors group-hover:text-lime" />
              </Link>
            ) : (
              <div className={tileCls}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-mist transition-colors duration-300 group-hover:text-fog">
                  {name}
                </span>
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/for"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime underline-offset-4 hover:underline"
        >
          See every industry playbook
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
