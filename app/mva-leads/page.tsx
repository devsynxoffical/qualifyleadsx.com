import type { Metadata } from "next";
import Link from "next/link";
import { site, defaultOgImage } from "@/lib/site";
import { NicheLeadsPage } from "@/components/sections/NicheLeadsPage";
import { mvaLeadsContent } from "@/lib/niche-content";

const PATH = "/mva-leads";
const TITLE = "MVA Leads: Exclusive, OTP-Verified Accident Leads";
const DESCRIPTION =
  "Exclusive MVA leads from fresh accidents, OTP-verified. Published campaigns: 8,810 leads at $7.61 and 6,275 at $4.38. For PI firms and PPL agencies.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: { images: [defaultOgImage], title: TITLE, description: DESCRIPTION, url: `${site.url}${PATH}`, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <NicheLeadsPage
      path={PATH}
      eyebrow="For personal injury firms and PPL agencies"
      h1="Exclusive, Verified MVA Leads"
      shortAnswer={
        <>
          QualifiedLeadsX generates <strong>exclusive MVA leads</strong> from Meta ads aimed at accidents in the last 30 days, qualifies and OTP-verifies them in the funnel, and contacts them within minutes. Published campaigns: 8,810 leads at $7.61 and 6,275 at $4.38.
        </>
      }
      stats={[{ value: "8,810", label: "MVA leads, one campaign" }, { value: "$7.61", label: "Cost per lead" }, { value: "$4.38", label: "Lowest published CPL" }, { value: "10", label: "Published MVA campaigns" }]}
      statsSource={(
        <>
          Source: <Link href="/case-studies/mva-personal-injury-leads-8810" className="text-lime underline underline-offset-2">MVA case study</Link> and the results table below. Results vary by state, verification and budget.
        </>
      )}
      primaryCta="Book an MVA strategy call"
      secondary={{ href: "/case-studies/mva-personal-injury-leads-8810", label: "Read the 8,810-lead case study" }}
      breadcrumb={[{ name: "Law firms", url: "/for/law-firms" }, { name: "MVA leads", url: "/mva-leads" }]}
      service={{ name: "MVA lead generation", description: "Exclusive, OTP-verified motor vehicle accident leads from Meta ads run in the client's own ad account, with in-funnel qualification and follow-up within minutes.", audience: "Personal injury law firms and pay-per-lead agencies" }}
      content={mvaLeadsContent}
      faqTitle="MVA leads: frequently asked questions"
    />
  );
}
