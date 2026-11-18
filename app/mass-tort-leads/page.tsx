import type { Metadata } from "next";
import { site, defaultOgImage } from "@/lib/site";
import { NicheLeadsPage } from "@/components/sections/NicheLeadsPage";
import { massTortLeadsContent } from "@/lib/niche-content";

const PATH = "/mass-tort-leads";
const TITLE = "Mass Tort Leads: Screened Claimants for Law Firms";
const DESCRIPTION =
  "Mass tort lead generation with tort-specific screening, OTP verification and fast intake follow-up, run in your firm's own Meta ad account.";

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
      eyebrow="For mass tort law firms and lead buyers"
      h1="Mass Tort Leads, Screened Before Intake"
      shortAnswer={
        <>
          QualifiedLeadsX runs <strong>mass tort lead generation</strong> in your firm&apos;s own ad account: Meta ads, a tort-specific screening questionnaire, OTP phone verification and follow-up within minutes, reported on cost per signed retainer. It uses the same intake system behind our MVA campaigns.
        </>
      }
      stats={undefined}
      statsSource={undefined}
      primaryCta="Book a mass tort strategy call"
      secondary={{ href: "/mva-leads", label: "See our MVA lead results" }}
      breadcrumb={[{ name: "Law firms", url: "/for/law-firms" }, { name: "Mass tort leads", url: "/mass-tort-leads" }]}
      service={{ name: "Mass tort lead generation", description: "Mass tort claimant acquisition with Meta ads, tort-specific screening, OTP verification and fast intake follow-up in the client firm's own ad account.", audience: "Mass tort law firms and pay-per-lead agencies" }}
      content={massTortLeadsContent}
      faqTitle="Mass tort leads: frequently asked questions"
    />
  );
}
