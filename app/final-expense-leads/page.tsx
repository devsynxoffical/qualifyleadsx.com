import type { Metadata } from "next";
import { site, defaultOgImage } from "@/lib/site";
import { NicheLeadsPage } from "@/components/sections/NicheLeadsPage";
import { finalExpenseLeadsContent } from "@/lib/niche-content";

const PATH = "/final-expense-leads";
const TITLE = "Final Expense & Burial Insurance Leads (Exclusive)";
const DESCRIPTION =
  "Exclusive final expense and burial insurance leads from Meta ads: 2,440 leads at $7.79 each for one client. For agents, agencies and lead sellers.";

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
      eyebrow="For insurance agents, agencies and lead sellers"
      h1="Final Expense & Burial Insurance Leads"
      shortAnswer={
        <>
          QualifiedLeadsX generates <strong>exclusive final expense and burial insurance leads</strong> from Meta ads in your own ad account, with a qualifying form and follow-up within minutes. For a pay-per-lead client we generated 2,440 final expense leads at $7.79 each from $19,011.31 in one month.
        </>
      }
      stats={[{ value: "2,440", label: "Final expense leads" }, { value: "$7.79", label: "Cost per lead" }, { value: "$19,011", label: "Ad spend, one month" }, { value: "55", label: "Life insurance leads at ≈$18" }]}
      statsSource={(
        <>
          Source: published QualifiedLeadsX campaigns, listed in the results table below. Results vary by state, age band and budget.
        </>
      )}
      primaryCta="Book an insurance leads call"
      secondary={{ href: "/case-studies", label: "See all case studies" }}
      breadcrumb={[{ name: "Services", url: "/services" }, { name: "Final expense leads", url: "/final-expense-leads" }]}
      service={{ name: "Final expense and burial insurance lead generation", description: "Exclusive final expense and burial insurance leads from Meta ads run in the client's own ad account, with a qualifying form and follow-up within minutes.", audience: "Insurance agents, agencies and pay-per-lead sellers" }}
      content={finalExpenseLeadsContent}
      faqTitle="Final expense leads: frequently asked questions"
    />
  );
}
