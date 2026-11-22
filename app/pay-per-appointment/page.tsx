import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Briefcase, CalendarCheck, Filter, HandCoins, PhoneCall, ShieldCheck, Target, Users } from "lucide-react";
import { site, defaultOgImage } from "@/lib/site";
import { RichLeadPage } from "@/components/landing/RichLeadPage";

/*
 * 20 Nov 2026, Gaurav Sir SEO Recovery Plan (P1: "pay per appointment lead generation" 390/mo KD 11,
 * "pay per lead companies" 140 KD 4; P2: "pay per lead" 590 KD 23).
 * Every cost-per-appointment figure is from a campaign published in lib/case-studies-data.ts.
 * Pricing is custom quoted (lib/brand-facts.ts); this page does not state a per-appointment price.
 */
const PATH = "/pay-per-appointment";
const TITLE = "Pay Per Appointment Lead Generation: Booked Sales Calls";
const DESCRIPTION =
  "Pay per appointment lead generation vs pay per lead: booked, qualified sales appointments. Published results from $4.81 to $45 per booked appointment.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["pay per appointment lead generation", "pay per lead companies", "pay per lead", "pay per appointment", "cost per booked appointment"],
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: { images: [defaultOgImage], title: TITLE, description: DESCRIPTION, url: `${site.url}${PATH}`, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const ig = (id: string) => `https://www.instagram.com/p/${id}/`;

export default function Page() {
  return (
    <RichLeadPage
      path={PATH}
      eyebrow="For coaches, consultants, advisors and service businesses"
      h1="Pay-Per-Appointment Lead Generation"
      shortAnswer={
        <>
          <strong className="text-fog">Pay per appointment lead generation</strong> means judging a campaign on booked, qualified sales appointments instead of raw leads. QualifiedLeadsX runs the ads, qualifies every lead, contacts them within minutes and books them on your calendar, then reports cost per booked appointment. In published campaigns that cost ranged from $4.81 to $45 per booked appointment.
        </>
      }
      heroPoints={[
        "Booked, qualified appointments on your calendar, not a spreadsheet of form fills",
        "Every lead qualified on the questions you set before it is booked",
        "Reminders by SMS, email and WhatsApp to protect the show rate",
        "Reported as cost per booked appointment, per show and per sale",
      ]}
      stats={[
        { value: "$4.81", label: "Lowest published cost per booked appointment" },
        { value: "453", label: "Appointments booked, NYC med spa" },
        { value: "140", label: "Appointments from $1,956, NJ HVAC" },
        { value: "337", label: "Appointments in 19 days, remodeling" },
      ]}
      statsSource={<>Source: the campaign screenshots below, each linked to its original post. Pricing is custom quoted. Results vary by offer, market and budget.</>}
      breadcrumb={[{ name: "Appointment setting", url: "/appointment-setting" }, { name: "Pay per appointment", url: PATH }]}
      service={{
        name: "Pay-per-appointment lead generation",
        description: "Lead generation measured on booked, qualified sales appointments: Meta ads, qualification, speed to lead, booking and reminders, reported as cost per booked appointment.",
        audience: "Coaches, consultants, financial advisors, insurance agents and service businesses",
      }}
      formNiche=""
      formTitle="Get a cost-per-appointment estimate for your offer"
      proof={{
        title: "Appointment campaigns we have run and published",
        intro: <>Screenshots from the clients&apos; Ads Manager and booking results, published at the time. Tap a card to see the full screenshot, or open the original post to check the numbers.</>,
        cards: [
          { img: "/case-studies/videos/DRRS7f-Eh_0.jpg", w: 1440, h: 1440, headline: "337 appointments in 19 days", where: "Kitchen remodeling, New York", metrics: [{ label: "Per appt", value: "$4.81" }, { label: "Appts", value: "337" }, { label: "Days", value: "19" }], source: ig("DRRS7f-Eh_0") },
          { img: "/case-studies/videos/C7v8CbIPJaJ.jpg", w: 1080, h: 1916, headline: "140 booked appointments, 12 installs", where: "HVAC company, New Jersey", metrics: [{ label: "Spend", value: "$1,956" }, { label: "Per appt", value: "$13.97" }, { label: "Revenue", value: "$38,400" }], source: ig("C7v8CbIPJaJ") },
          { img: "/case-studies/images/DM_Poo5z5hT.jpg", w: 1080, h: 1440, headline: "453 appointments, 247 clients", where: "Med spa, 3 NYC clinics", metrics: [{ label: "Spend", value: "$10,387" }, { label: "Per appt", value: "$22.93" }, { label: "Show rate", value: "67%" }], source: ig("DM_Poo5z5hT") },
          { img: "/case-studies/images/DGBOc58yWiq.jpg", w: 1321, h: 685, headline: "10 buyer appointments in 24 hours", where: "Luxury real estate", metrics: [{ label: "Spend", value: "$172.90" }, { label: "Per appt", value: "$17.29" }, { label: "Appts", value: "10" }], source: ig("DGBOc58yWiq") },
          { img: "/case-studies/videos/C7v8ZyxNAOa.jpg", w: 1080, h: 1916, headline: "125 booked appointments, $65,872 net", where: "HVAC company, Florida", metrics: [{ label: "Spend", value: "$5,628" }, { label: "Per appt", value: "$45" }, { label: "ROAS", value: "12.70" }], source: ig("C7v8ZyxNAOa") },
        ],
      }}
      funnel={{
        title: "From booked appointment to paying client",
        intro: <>A booked appointment is only worth something if the person shows up and buys. Published numbers for a med spa with three New York clinics:</>,
        steps: [
          { value: "$10,387", label: "Ad spend" },
          { value: "453", label: "Appointments booked", detail: "$22.93 per booked appointment" },
          { value: "303", label: "Showed up (67%)" },
          { value: "247", label: "Became paying clients", detail: "$42 in ads per paying client" },
        ],
        outcome: (
          <>
            <strong className="text-lime">$74,100 in revenue</strong> from $10,387 in ads. This is why we report cost per show and per client, not just cost per appointment. See the <Link href="/case-studies/nyc-med-spa-rf-microneedling-74k" className="text-lime underline-offset-2 hover:underline">full med spa case study</Link>.
          </>
        ),
      }}
      estimator={{ cplLow: 4.81, cplHigh: 45, unit: "booked appointments", sourceNote: "Uses the lowest ($4.81) and highest ($45) cost per booked appointment from the published campaigns on this page." }}
      process={{
        title: "How pay-per-appointment lead generation works",
        intro: <>Each step is built to turn ad spend into appointments that show up. It is the same system behind our <Link href="/appointment-setting" className="text-lime underline-offset-2 hover:underline">appointment setting services</Link>.</>,
        steps: [
          { icon: Target, title: "Ads for buyers, not browsers", text: "Meta ads and offers written for the people who buy your service, tested until cost per booked appointment, not cost per click, is lowest." },
          { icon: Filter, title: "Qualification before booking", text: "Budget, need, timeline and fit are asked in the form, so only qualified people can book." },
          { icon: PhoneCall, title: "Contact within minutes", text: <>Automatic call, SMS or <Link href="/whatsapp-lead-nurture" className="text-lime underline-offset-2 hover:underline">WhatsApp</Link> follow-up as soon as a lead arrives. See <Link href="/speed-to-lead" className="text-lime underline-offset-2 hover:underline">speed to lead</Link>.</> },
          { icon: CalendarCheck, title: "Booked on your calendar", text: "Qualified leads pick a time in your calendar, with confirmations and reminders before the call." },
          { icon: ShieldCheck, title: "Exclusive to you", text: "The ad account and every appointment are yours. Nothing is shared with or resold to competitors." },
          { icon: BarChart3, title: "Reported per appointment", text: "Cost per lead, per booked appointment, per show and per client, so budget follows sales." },
        ],
      }}
      qualifiers={{
        title: "What a booked appointment has already answered",
        intro: <>Questions are set with you for each offer. These are typical for coaches, consultants, advisors and service businesses.</>,
        questions: ["What do you need help with?", "Budget range", "Timeline to start", "Decision-maker?", "Current situation", "Location or service area", "Best time for a call"],
      }}
      comparison={{
        title: "Pay per lead companies vs pay-per-appointment",
        themLabel: "Typical pay per lead companies",
        them: ["You pay for every form fill, qualified or not", "Leads are often shared with other buyers", "Follow-up and booking are your problem", "No view of shows or sales"],
        us: ["Measured on booked, qualified appointments", "Exclusive leads from your own ad account", "Follow-up, booking and reminders done for you", "Reported down to cost per client"],
      }}
      audiences={{
        title: "Who pay-per-appointment lead generation is for",
        cards: [
          { icon: Users, title: "Coaches and consultants", text: <>Booked discovery calls with qualified prospects. See <Link href="/for/coaches" className="text-lime underline-offset-2 hover:underline">lead generation for coaches</Link> and <Link href="/for/consultants" className="text-lime underline-offset-2 hover:underline">consultants</Link>.</> },
          { icon: Briefcase, title: "Financial advisors and insurance agents", text: <>Appointments with prospects who match your client profile. See <Link href="/for/financial-advisors" className="text-lime underline-offset-2 hover:underline">financial advisors</Link> and <Link href="/for/insurance-agencies" className="text-lime underline-offset-2 hover:underline">insurance agents</Link>.</> },
          { icon: HandCoins, title: "Local and home service businesses", text: <>In-home estimates and consultations booked on your calendar, like the HVAC and remodeling campaigns above. See <Link href="/for/home-improvement" className="text-lime underline-offset-2 hover:underline">home improvement leads</Link> and <Link href="/hvac-leads" className="text-lime underline-offset-2 hover:underline">HVAC leads</Link>.</> },
        ],
      }}
      faqTitle="Pay per appointment lead generation: FAQ"
      faqs={[
        { q: "What is pay per appointment lead generation?", a: "It is lead generation measured on booked sales appointments instead of raw leads. The provider runs the ads, qualifies each lead, follows up and books the appointment on your calendar, and the campaign is judged on cost per booked appointment, show rate and sales." },
        { q: "How much does a booked appointment cost?", a: "In campaigns we have published, cost per booked appointment ranged from $4.81 (337 kitchen remodeling appointments in 19 days) to $45 (125 booked appointments for a Florida HVAC company that collected $65,872 net). A New Jersey HVAC company paid $13.97 per booked appointment and a three-clinic med spa $22.93. Your cost depends on the offer, market and qualification. Our fees are custom quoted." },
        { q: "Is pay per appointment better than pay per lead?", a: "For businesses that sell on a call, usually yes: a lead only has value once it is contacted, qualified and booked. Pay per lead is cheaper per unit, but you do the follow-up, and leads from pay per lead companies are often shared with other buyers." },
        { q: "How is this different from pay per lead companies?", a: "Pay per lead companies sell form fills, often to several buyers. We run the campaign in your own ad account, so every lead and appointment is exclusive, and we handle follow-up, booking and reminders." },
        { q: "Do you charge per appointment?", a: "Pricing is custom quoted for each offer and market. On the free strategy call we look at your offer and give you a realistic cost-per-appointment range based on campaigns like the ones on this page." },
        { q: "What happens if appointments don't show up?", a: "Show rate is tracked and worked on: confirmations, reminders by SMS, email and WhatsApp, and fast follow-up. For the three-clinic med spa, 67% of booked appointments showed up and 247 became paying clients." },
      ]}
      further={{
        title: "More on appointments and lead generation",
        links: [
          { href: "/appointment-setting", label: "Appointment setting services", text: "How we turn leads into qualified sales appointments." },
          { href: "/blog/buy-qualified-leads-vs-generating-your-own", label: "Buy leads or generate your own?", text: "What bought leads really cost compared with your own campaign." },
          { href: "/tools/cost-per-booked-call-calculator", label: "Cost per booked call calculator", text: "Work out what a booked appointment costs you today." },
          { href: "/benchmarks/show-rate", label: "Show rate benchmarks", text: "How many booked appointments actually show up." },
        ],
      }}
    />
  );
}
