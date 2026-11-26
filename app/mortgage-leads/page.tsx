import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Filter, Home, Landmark, MessageSquare, PhoneCall, RefreshCw, ShieldCheck, Target } from "lucide-react";
import { site, defaultOgImage } from "@/lib/site";
import { RichLeadPage } from "@/components/landing/RichLeadPage";

/*
 * 19 Nov 2026. Every number is from a mortgage or refinance campaign
 * QualifiedLeadsX published (lib/case-studies-data.ts; Instagram posts linked
 * on each card). Five campaigns: 823 + 208 + 142 + 154 + 492 = 1,819 leads.
 */
const PATH = "/mortgage-leads";
const TITLE = "Mortgage Leads: Exclusive, OTP-Verified Borrower Leads";
const DESCRIPTION =
  "Exclusive OTP-verified mortgage and refinance leads from Meta ads in your own account. Published: 823 Texas leads at $23.97; 208 leads, 37 closings.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: { images: [defaultOgImage], title: TITLE, description: DESCRIPTION, url: `${site.url}${PATH}`, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const ig = (id: string) => `https://www.instagram.com/p/${id}/`;

export default function Page() {
  return (
    <RichLeadPage
      path={PATH}
      eyebrow="For loan officers, brokers and refinance teams"
      h1="Exclusive Mortgage Leads, Verified by the Borrower"
      shortAnswer={
        <>
          QualifiedLeadsX generates <strong className="text-fog">exclusive mortgage and refinance leads</strong> with Meta ads in your own ad account. Every borrower confirms a one-time code sent to their phone before the form is submitted, so you call real people who asked to hear from you, not a list shared with other lenders. In one 21-day campaign, 208 verified leads became 37 closings.
        </>
      }
      heroPoints={[
        "Exclusive: never sold to other lenders or portals",
        "OTP-verified phone number on every lead",
        "Filtered on purchase or refinance, property, timeline and state",
        "Run in Meta's financial-services ad category, approved by your compliance team",
      ]}
      stats={[
        { value: "37", label: "Closings from 208 leads in 21 days" },
        { value: "$9.2M", label: "Funded loans from that campaign" },
        { value: "823", label: "OTP-verified leads, Texas lender" },
        { value: "1,819", label: "Leads in 5 published campaigns" },
      ]}
      statsSource={<>Source: the campaign screenshots below, each linked to its original post. Results vary by state, product, rates and budget.</>}
      breadcrumb={[{ name: "Financial services", url: "/for/financial-advisors" }, { name: "Mortgage leads", url: PATH }]}
      service={{
        name: "Mortgage lead generation",
        description: "Exclusive, OTP-verified mortgage and refinance leads from Meta ads run in the lender's own ad account, with qualification and fast follow-up.",
        audience: "Loan officers, mortgage brokers and refinance companies",
      }}
      formNiche="Mortgage / Refinance"
      formTitle="Get a free mortgage lead plan for your states"
      proof={{
        title: "Mortgage and refinance campaigns we have published",
        intro: <>Screenshots from the clients&apos; Ads Manager, published at the time. Tap a card to see the full screenshot, or open the original post to check the numbers.</>,
        cards: [
          { img: "/case-studies/images/DLK01-8yVvj.jpg", w: 1440, h: 1818, headline: "208 leads, 37 closings in 21 days", where: "Mortgage client", metrics: [{ label: "Spend", value: "$5,300" }, { label: "CPL", value: "$25.48" }, { label: "Funded", value: "$9.2M" }], source: ig("DLK01-8yVvj") },
          { img: "/case-studies/videos/DPgb2jLiczr.jpg", w: 1440, h: 1440, headline: "823 OTP-verified mortgage leads", where: "Mortgage lender, Texas", metrics: [{ label: "Spend", value: "$19,725" }, { label: "CPL", value: "$23.97" }, { label: "Leads", value: "823" }], source: ig("DPgb2jLiczr") },
          { img: "/case-studies/images/DZcGABOkllj.jpg", w: 1440, h: 1076, headline: "154 OTP-verified refinance leads", where: "Refinance company, 9 days", metrics: [{ label: "CPL", value: "$14.58" }, { label: "Leads", value: "154" }, { label: "Days", value: "9" }], source: ig("DZcGABOkllj") },
          { img: "/case-studies/videos/DRRR-IHEpc-.jpg", w: 1440, h: 1440, headline: "492 mortgage registrations in 19 days", where: "Mortgage client", metrics: [{ label: "Spend", value: "$2,573" }, { label: "CPL", value: "$5.23" }, { label: "CTR", value: "1.72%" }], source: ig("DRRR-IHEpc-") },
          { img: "/case-studies/videos/DOkz521En0b.jpg", w: 1440, h: 1440, headline: "142 qualified leads in 11 days", where: "Mortgage lender, Texas (testing phase)", metrics: [{ label: "Spend", value: "$612" }, { label: "CPL", value: "$4.31" }, { label: "Days", value: "11" }], source: ig("DOkz521En0b") },
        ],
      }}
      funnel={{
        title: "From 208 verified leads to 37 closed loans",
        intro: <>Published results from a 21-day mortgage campaign where every lead verified their phone number before submitting.</>,
        steps: [
          { value: "$5,300", label: "Ad spend" },
          { value: "208", label: "OTP-verified leads", detail: "$25.48 per lead" },
          { value: "160+", label: "Real conversations" },
          { value: "37", label: "Closed loans" },
        ],
        outcome: (
          <>
            <strong className="text-lime">Over $9.2M in funded loans</strong> and more than $65,000 in commission from $5,300 in ads, as published by the client campaign.
          </>
        ),
      }}
      estimator={{ cplLow: 4.31, cplHigh: 25.48, unit: "mortgage leads", sourceNote: "Uses the lowest ($4.31) and highest ($25.48) cost per lead from the published mortgage campaigns on this page." }}
      process={{
        title: "How we generate verified mortgage leads",
        intro: <>Built for lending: compliant ad setup, strict verification and fast follow-up, all in your own ad account.</>,
        steps: [
          { icon: Landmark, title: "Compliant ad setup", text: "Meta requires mortgage and other credit ads to run in its special ad category for financial products, which limits age, gender and ZIP targeting. Your compliance team approves every ad and disclosure." },
          { icon: Target, title: "Offer and creative testing", text: "Purchase, refinance and rate-review angles tested against each other, with the budget moved to what produces conversations." },
          { icon: Filter, title: "Qualification in the form", text: "Purchase or refinance, property type, timeline, state and other loan variables, so you only call borrowers you can serve." },
          { icon: ShieldCheck, title: "OTP verification", text: "Every borrower confirms a code sent to their phone. No fake numbers and far fewer no-answers." },
          { icon: PhoneCall, title: "Called in minutes", text: <>Leads are contacted immediately by call or text. See <Link href="/speed-to-lead" className="text-lime underline-offset-2 hover:underline">speed to lead</Link>.</> },
          { icon: BarChart3, title: "Reported to closings", text: "Cost per lead, per conversation and per closed loan, so you judge the campaign on funded loans." },
        ],
      }}
      qualifiers={{
        title: "What a mortgage lead confirms before you call",
        intro: <>Questions are set with you for each product and state. These are typical for purchase and refinance campaigns.</>,
        questions: ["Purchase or refinance?", "Property type", "Do you own the property?", "Timeline", "State", "Estimated loan amount", "Phone verified by code"],
      }}
      comparison={{
        title: "Portal leads vs your own verified leads",
        themLabel: "Lead portals and shared lists",
        them: ["The same borrower is called by several lenders", "Recycled contacts and unverified numbers", "You can't change the offer or the questions", "Nothing stays with you when you stop"],
        us: ["Exclusive borrowers who asked to hear from you", "Phone verified by one-time code", "Offer and questions built for your products", "Ad account, pixel and data stay yours"],
      }}
      audiences={{
        title: "Mortgage leads for lenders and refinance teams",
        cards: [
          { icon: Home, title: "Loan officers and brokers", text: "Purchase and refinance borrowers in the states you are licensed in, like the Texas campaigns above." },
          { icon: RefreshCw, title: "Refinance companies", text: "Verified refinance leads instead of portal leads: 154 OTP-verified leads in 9 days at $14.58." },
          { icon: MessageSquare, title: "Teams that want conversations", text: "Leads that pick up: the 21-day campaign reached 160+ real conversations from 208 leads." },
        ],
      }}
      faqTitle="Mortgage leads: frequently asked questions"
      faqs={[
        { q: "How much do mortgage leads cost?", a: "In five mortgage and refinance campaigns we have published, cost per lead ranged from $4.31 (142 leads in 11 days for a Texas lender, in testing) to $25.48 (208 OTP-verified leads in 21 days). A Texas lender received 823 OTP-verified leads at $23.97. Cost depends on the product, the state, rates and the budget. Our management fee is custom quoted." },
        { q: "Are your mortgage leads exclusive?", a: "Yes. The ads run in an ad account in your name and every borrower goes only to you. We do not resell leads or share them with other lenders." },
        { q: "What does OTP-verified mean for mortgage leads?", a: "The borrower enters a one-time code sent to their phone before the form is submitted. It proves the number is real and that they asked to be contacted, which removes fake and mistyped numbers." },
        { q: "Do mortgage leads from Meta ads actually close?", a: "In one published 21-day campaign, 208 OTP-verified leads produced 160+ conversations and 37 closings, over $9.2M in funded loans and more than $65,000 in commission, from $5,300 in ads." },
        { q: "Are Meta mortgage ads compliant?", a: "Mortgage ads on Meta must run in the special ad category for financial products and services, which restricts targeting by age, gender and ZIP code. We build campaigns within those rules and your compliance team approves every ad and disclosure before it runs." },
        { q: "Do you generate refinance leads?", a: "Yes. For a refinance company we generated 154 OTP-verified leads in 9 days at $14.58 per lead." },
      ]}
      further={{
        title: "More for lenders and financial services",
        links: [
          { href: "/for/financial-advisors", label: "Financial advisor leads", text: "Lead generation for advisors and wealth managers." },
          { href: "/final-expense-leads", label: "Final expense leads", text: "Verified insurance leads with published campaign results." },
          { href: "/blog/buy-qualified-leads-vs-generating-your-own", label: "Buy leads or generate your own?", text: "What shared leads really cost compared with your own campaign." },
          { href: "/speed-to-lead", label: "Speed to lead", text: "Why the first lender to call usually wins the borrower." },
        ],
      }}
    />
  );
}
