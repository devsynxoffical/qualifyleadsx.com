import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, CalendarCheck, Filter, MapPin, PhoneCall, ShieldCheck, Snowflake, Users, Wrench } from "lucide-react";
import { site, defaultOgImage } from "@/lib/site";
import { RichLeadPage } from "@/components/landing/RichLeadPage";

/*
 * 19 Nov 2026. Every number is from an HVAC campaign QualifiedLeadsX published
 * (lib/case-studies-data.ts; Instagram posts linked on each card; the Florida
 * campaign also has /case-studies/florida-hvac-65k-cash-collected).
 */
const PATH = "/hvac-leads";
const TITLE = "HVAC Leads: Exclusive Homeowner Leads and Appointments";
const DESCRIPTION =
  "Exclusive HVAC leads and booked appointments from Meta ads. Published: 140 appointments and 12 installs from $1,956 (19.6x ROAS); 630 verified leads at $23.09.";

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
      eyebrow="For HVAC installers and service companies"
      h1="HVAC Leads That Turn Into Booked Installs"
      shortAnswer={
        <>
          QualifiedLeadsX generates <strong className="text-fog">exclusive HVAC leads</strong> and booked appointments from Meta ads in your own ad account. Homeowners confirm they own the property, the age of their system and when they want the work done before you call. For a New Jersey HVAC company, $1,956 in ads produced 140 booked appointments, 12 installs and $38,400 in collected revenue.
        </>
      }
      heroPoints={[
        "Exclusive homeowner leads, never shared with other HVAC companies",
        "Qualified on ownership, system age, timeline and financing",
        "Booked into your calendar, with reminders to protect the show rate",
        "Reported down to cost per install, not just cost per lead",
      ]}
      stats={[
        { value: "19.6x", label: "Collected ROAS, New Jersey HVAC" },
        { value: "$163", label: "Ad cost per new installation" },
        { value: "630", label: "OTP-verified HVAC leads, one campaign" },
        { value: "$4.68", label: "Lowest published HVAC cost per lead" },
      ]}
      statsSource={
        <>
          Source: the campaign screenshots below and the <Link href="/case-studies/florida-hvac-65k-cash-collected" className="text-lime underline-offset-2 hover:underline">Florida HVAC case study</Link>. Results vary by market, season and budget.
        </>
      }
      breadcrumb={[{ name: "Home improvement", url: "/for/home-improvement" }, { name: "HVAC leads", url: PATH }]}
      service={{
        name: "HVAC lead generation",
        description: "Exclusive, pre-qualified HVAC homeowner leads and booked appointments from Meta ads run in the contractor's own ad account.",
        audience: "Residential HVAC installation and service companies",
      }}
      formNiche="HVAC"
      formTitle="Get a free HVAC lead plan for your service area"
      proof={{
        title: "HVAC campaigns we have run and published",
        intro: <>Screenshots from the clients&apos; Ads Manager, published at the time. Tap a card to see the full screenshot, or open the original post to check the numbers.</>,
        cards: [
          { img: "/case-studies/videos/C7v8CbIPJaJ.jpg", w: 1080, h: 1916, headline: "140 booked appointments, 12 installs", where: "HVAC company, New Jersey", metrics: [{ label: "Spend", value: "$1,956" }, { label: "Revenue", value: "$38,400" }, { label: "ROAS", value: "19.63" }], source: ig("C7v8CbIPJaJ") },
          { img: "/case-studies/videos/C7v8ZyxNAOa.jpg", w: 1080, h: 1916, headline: "$65,872 net cash collected", where: "HVAC company, Florida", metrics: [{ label: "Spend", value: "$5,628" }, { label: "Booked", value: "125" }, { label: "ROAS", value: "12.70" }], source: ig("C7v8ZyxNAOa") },
          { img: "/case-studies/videos/DQE0mllEvK1.jpg", w: 1440, h: 1440, headline: "630 OTP-verified HVAC leads", where: "HVAC client", metrics: [{ label: "Spend", value: "$14,548" }, { label: "CPL", value: "$23.09" }, { label: "Leads", value: "630" }], source: ig("DQE0mllEvK1") },
          { img: "/case-studies/videos/DQSRjEBknzz.jpg", w: 1440, h: 1440, headline: "326 HVAC leads in 26 days", where: "Competitive local market", metrics: [{ label: "CPL", value: "$4.68" }, { label: "CTR", value: "1.86%" }, { label: "Days", value: "26" }], source: ig("DQSRjEBknzz") },
          { img: "/case-studies/videos/DJRudsTSUX8.jpg", w: 1215, h: 2160, headline: "55 qualified leads in 5 days", where: "New HVAC client", metrics: [{ label: "Spend", value: "$606" }, { label: "CPL", value: "$11.02" }, { label: "Days", value: "5" }], source: ig("DJRudsTSUX8") },
        ],
      }}
      funnel={{
        title: "One HVAC campaign from ad spend to installs",
        intro: <>Published numbers for a New Jersey HVAC company. Each step is a real count from the campaign, so you can see where leads drop off and what an install cost.</>,
        steps: [
          { value: "$1,956", label: "Ad spend" },
          { value: "140", label: "Booked appointments", detail: "$13.97 per booked appointment" },
          { value: "74", label: "Connected calls (53% show)", detail: "$26.43 per connected call" },
          { value: "49", label: "Offers made", detail: "$39.91 per offer" },
          { value: "12", label: "New installations", detail: "$163 in ads per installation" },
        ],
        outcome: (
          <>
            <strong className="text-lime">$38,400 collected</strong> from 12 installs at $3,200 each: a collected ROAS of 19.63. A Florida HVAC company on the same system collected $65,872 net from $5,628 in ads (ROAS 12.70). <Link href="/case-studies/florida-hvac-65k-cash-collected" className="text-lime underline-offset-2 hover:underline">Read the Florida case study</Link>.
          </>
        ),
      }}
      estimator={{ cplLow: 4.68, cplHigh: 23.09, unit: "HVAC leads", sourceNote: "Uses the lowest ($4.68) and highest ($23.09) cost per lead from the published HVAC lead campaigns on this page." }}
      process={{
        title: "How we turn Meta ads into HVAC installs",
        intro: <>The process behind the campaigns above. Everything runs in your ad account and your calendar.</>,
        steps: [
          { icon: MapPin, title: "Serviceable ZIP codes only", text: "Narrow geo-targeting to the areas your technicians cover, aimed at homeowners." },
          { icon: Filter, title: "Pre-qualification in the form", text: "Ownership, system age, repair or replace in the next 30 days, and whether financing matters, asked before the lead is submitted." },
          { icon: ShieldCheck, title: "Phone verification", text: "On verified campaigns the homeowner confirms a one-time code, so your team only calls real numbers." },
          { icon: PhoneCall, title: "Called within minutes", text: <>An automatic call or text goes out as soon as the lead arrives. See <Link href="/speed-to-lead" className="text-lime underline-offset-2 hover:underline">speed to lead</Link>.</> },
          { icon: CalendarCheck, title: "Booked and reminded", text: <>Leads book a visit, then get reminders by SMS and <Link href="/whatsapp-lead-nurture" className="text-lime underline-offset-2 hover:underline">WhatsApp</Link> to protect the show rate.</> },
          { icon: BarChart3, title: "Tracked to the install", text: "Cost per booked appointment, per show, per offer and per installation, like the funnel above." },
        ],
      }}
      qualifiers={{
        title: "What an HVAC lead tells you before the first call",
        intro: <>These are the questions from the published 55-lead campaign. We adjust them to the jobs you want more of.</>,
        questions: ["Do you own the property?", "Age of your current system", "Replace or repair in the next 30 days?", "Is financing a consideration?", "Heating, cooling or both?", "ZIP code", "Best time to call"],
      }}
      comparison={{
        title: "Shared HVAC leads vs your own campaign",
        themLabel: "Shared lead vendors",
        them: ["The homeowner gets calls from several companies", "No control over the offer or targeting", "Priced per lead, with no view of installs", "Stop paying and nothing stays with you"],
        us: ["Exclusive leads and appointments", "Offer, targeting and ads built for your jobs", "Reported to cost per installation", "The ad account, pixel and data stay yours"],
      }}
      audiences={{
        title: "HVAC leads for installers, service companies and agencies",
        cards: [
          { icon: Snowflake, title: "Replacement and installation", text: "Homeowners with older systems who want to replace in the next 30 days: the jobs behind the 12 and 13 installs above." },
          { icon: Wrench, title: "Repair and service", text: "Repair leads that keep technicians busy between installs, filtered by ZIP code and urgency." },
          { icon: Users, title: "Agencies serving HVAC", text: "Run the same system for your HVAC clients, with verified leads and funnel reporting." },
        ],
      }}
      faqTitle="HVAC leads: frequently asked questions"
      faqs={[
        { q: "How much do HVAC leads cost?", a: "In the HVAC lead campaigns we have published, cost per lead ranged from $4.68 (326 leads in 26 days) to $23.09 (630 OTP-verified leads from $14,548). A new client paid $11.02 per lead for 55 qualified leads in 5 days. Your cost depends on the market, the season, the verification and the budget. Our management fee is custom quoted." },
        { q: "What does an HVAC install cost in ad spend?", a: "For a New Jersey HVAC company, $1,956 in ads produced 140 booked appointments, 74 connected calls, 49 offers and 12 installations: $163 in ads per installation, and $38,400 collected at $3,200 per install (ROAS 19.63)." },
        { q: "Are your HVAC leads exclusive?", a: "Yes. The ads run in an ad account in your name and every lead goes only to you. We do not resell or share leads." },
        { q: "How do you qualify HVAC leads?", a: "Inside the form: the homeowner confirms they own the property, the age of their current system, whether they want to replace or repair in the next 30 days, and whether financing matters. On verified campaigns they also confirm a one-time code sent to their phone." },
        { q: "Do you book appointments or only send leads?", a: "Both are possible. In the New Jersey and Florida campaigns leads were booked into appointments (140 and 125), followed up and reminded, and reported through to installs." },
        { q: "Do Meta ads work for HVAC companies?", a: "In our published campaigns they did: a Florida HVAC company collected $65,872 net from $5,628 in ads, and a New Jersey company collected $38,400 from $1,956. Results depend on the offer, the follow-up speed and the market." },
      ]}
      further={{
        title: "More for HVAC and home service companies",
        links: [
          { href: "/case-studies/florida-hvac-65k-cash-collected", label: "Florida HVAC case study", text: "$65,872 net cash collected, step by step." },
          { href: "/blog/facebook-ads-for-hvac-companies", label: "Facebook ads for HVAC", text: "Offers, targeting and budgets for HVAC Meta ads." },
          { href: "/roofing-leads", label: "Roofing leads", text: "5,246 roofing leads across nine published campaigns." },
          { href: "/tools/cost-per-booked-call-calculator", label: "Cost per booked call calculator", text: "Work out what a booked appointment costs you today." },
        ],
      }}
    />
  );
}
