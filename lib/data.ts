import type { LucideIcon } from "lucide-react";
import {
  Target,
  FileText,
  Megaphone,
  Funnel,
  MessageSquare,
  CalendarCheck,
  CalendarCheck2,
  TrendingUp,
  BarChart3,
  PenTool,
  ShieldCheck,
  Database,
  BadgeCheck,
  Bot,
  Mail,
  Palette,
} from "lucide-react";

/* ============================================================
   Why most businesses never scale
   ============================================================ */
export const whyNotScale = [
  {
    title: "Ads without a funnel",
    body: "An agency runs your ads and calls it marketing. But raw clicks don't book premium clients - only a pre-sold journey does.",
    stat: "Clicks",
    statLabel: "Not clients",
  },
  {
    title: "Funnels nobody owns",
    body: "Somebody builds the landing page, somebody else runs the traffic. Nobody owns the full journey - so most leads go cold.",
    stat: "Broken",
    statLabel: "Handoffs between vendors",
  },
  {
    title: "Copy, but no follow-up",
    body: "Great copy can't qualify, nurture or book. Follow-up is where the deals are won - and in the fragmented way, it never happens.",
    stat: "$846K",
    statLabel: "Recorded from 235 clients, most closed after follow-up",
  },
  {
    title: "No one owns the journey",
    body: "The customer journey is split across agencies, freelancers and tools. When no single system owns it, nothing compounds.",
    stat: "0",
    statLabel: "Systems owning it all",
  },
] as const;

/* ============================================================
   What makes QLX different
   ============================================================ */
export const differentiators = [
  {
    icon: Funnel,
    title: "Complete Done-For-You Client Acquisition System",
    body: "We install every piece - offer positioning, Meta Ads, creatives, landing pages, CRM, AI automations, qualification and follow-up. Your only job is to close.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Lead Qualification & Multi-Validation Process",
    body: "A proprietary multi-validation process filters leads before they reach your calendar - lifting booking and show-up rates.",
  },
  {
    icon: Bot,
    title: "CRM + AI Follow-Up Automations Included",
    body: "Every lead automatically enters your CRM, nurtured by email, SMS, reminders and AI follow-up around the clock.",
  },
  {
    icon: Database,
    title: "Everything We Build Becomes Your Business Asset",
    body: "Everything we build becomes your business asset. No lock-ins, no hidden ownership, no dependence on another agency.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Focused Growth Strategy - Not Just More Leads",
    body: "Not just more leads - a growth strategy engineered around closed revenue, ROAS and predictable compounding.",
  },
  {
    icon: ShieldCheck,
    title: "90-Day Written Guarantee - Risk Reversed",
    body: "Everything is backed in writing. If we don't double your revenue within the next 90 days, we keep working at no management fee until we do.",
  },
  {
    icon: Target,
    title: "Dedicated Growth Partner - Not a Vendor",
    body: "You get a single point of contact managing your entire acquisition system. We act as your in-house growth team, fully invested in your results.",
  },
] as const;

/* ============================================================
   8-step client acquisition process
   ============================================================ */
export const acquisitionSteps: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Target,
    title: "Market Research & Customer Analysis",
    body: "We identify exactly who your ideal clients are and what makes them buy.",
  },
  {
    icon: FileText,
    title: "Offer Positioning",
    body: "We package and position your service so it stands out from competitors.",
  },
  {
    icon: Megaphone,
    title: "Messaging & Creative Development",
    body: "We create ad copy and creatives that attract premium buyers.",
  },
  {
    icon: Funnel,
    title: "Landing Pages & Sales Funnel",
    body: "We build high-converting landing pages and funnels that turn traffic into booked appointments.",
  },
  {
    icon: BarChart3,
    title: "Meta Ads Management",
    body: "We launch, manage and optimise your campaigns every day.",
  },
  {
    icon: MessageSquare,
    title: "CRM & AI Automations",
    body: "Every lead automatically enters your CRM with automated email, SMS, reminders and follow-up.",
  },
  {
    icon: ShieldCheck,
    title: "Lead Qualification",
    body: "Our proprietary multi-validation process filters leads before they reach your calendar - improving booking and show-up rates.",
  },
  {
    icon: CalendarCheck,
    title: "Close Premium Clients",
    body: "You simply attend the appointments and close the deals while our system works in the background.",
  },
] as const;

/* ============================================================
   Everything included
   ============================================================ */
export const includedServices: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  { icon: PenTool, title: "Offer Positioning", body: "Your offer packaged and positioned to stand out from competitors." },
  { icon: Megaphone, title: "Messaging Strategy", body: "A clear message that speaks directly to your ideal client." },
  { icon: BarChart3, title: "Meta Ads", body: "Campaigns launched, managed and optimised on a daily basis." },
  { icon: Palette, title: "Ad Creatives", body: "Scroll-stopping creatives engineered to attract premium buyers." },
  { icon: FileText, title: "Landing Pages", body: "High-converting pages built around your specific offer." },
  { icon: Funnel, title: "Complete Sales Funnel", body: "The full journey from first click to booked appointment." },
  { icon: Database, title: "CRM Setup", body: "Every lead organised in one clean, automated pipeline." },
  { icon: Bot, title: "AI Automations", body: "AI-driven nurture and outreach that runs around the clock." },
  { icon: Mail, title: "Email Sequences", body: "Automated email follow-up that sells while you sleep." },
  { icon: MessageSquare, title: "SMS Follow-Up", body: "Text sequences that keep every lead warm and engaged." },
  { icon: CalendarCheck2, title: "Appointment Reminders", body: "Confirmations and reminders that protect your show rate." },
  { icon: ShieldCheck, title: "Lead Qualification System", body: "Multi-validation filtering before leads ever hit your calendar." },
  { icon: CalendarCheck, title: "Calendar Booking System", body: "A booking flow that syncs directly to your calendar." },
  { icon: TrendingUp, title: "Ongoing Optimisation", body: "Daily tweaks and scaling decisions based on real data." },
] as const;

/* ============================================================
   Ownership
   ============================================================ */
export const ownershipSteps = [
  {
    step: "01",
    title: "We build",
    body: "We construct the entire acquisition system - ads, funnel, automation, CRM, the lot.",
  },
  {
    step: "02",
    title: "Everything transfers",
    body: "From day one, every account, asset and audience is registered under your name.",
  },
  {
    step: "03",
    title: "You own it all",
    body: "When we part ways, the system stays with you. No hostage-holding. No exit fees.",
  },
] as const;

export const ownershipAssets = [
  "Landing Pages",
  "Sales Funnel",
  "CRM",
  "Automations",
  "Ad Creatives",
  "Copy",
  "Follow-Up Sequences",
  "Customer Data",
] as const;

/* ============================================================
   Industries we've worked with
   ============================================================ */
export const industries: string[] = [
  "Digital Marketing Agencies",
  "Business Coaches",
  "Consultants",
  "High-Ticket Service Providers",
  "B2B Companies",
  "Home Service Businesses",
  "Roofing Companies",
  "HVAC Companies",
  "Solar Companies",
  "Personal Injury Law Firms",
  "Medical Malpractice Attorneys",
  "Healthcare Practices",
  "Med Spas & Aesthetic Clinics",
  "Chiropractors",
  "Real Estate Companies",
  "Mortgage Brokers",
  "Insurance Agencies",
  "Fitness Brands & Gyms",
  "E-Commerce Brands",
  "Construction Companies",
  "Garage Door Companies",
  "Kitchen & Bathroom Remodeling",
  "Painting Companies",
  "Window & Door Companies",
  "Landscaping Businesses",
  "Pressure Washing Companies",
  "Car Detailing Businesses",
  "Pest Control Companies",
  "Plumbing Companies",
  "Electrical Companies",
  "Carpet Cleaning Companies",
  "Air Duct Cleaning Companies",
] as const;

/* ============================================================
   Comparison
   ============================================================ */
export const comparisonRows: {
  label: string;
  agency: string | boolean;
  qlx: string | boolean;
  highlight?: boolean;
}[] = [
  { label: "Runs ads", agency: "Yes", qlx: "Complete client acquisition system" },
  { label: "Delivers leads", agency: "Yes", qlx: "Premium client acquisition" },
  { label: "Follow-up", agency: "Limited", qlx: "AI follow-up" },
  { label: "CRM", agency: false, qlx: true },
  { label: "Automation", agency: false, qlx: true },
  { label: "Ownership", agency: false, qlx: true, highlight: true },
  { label: "Guarantee", agency: false, qlx: true, highlight: true },
] as const;

/* ============================================================
   FAQ
   ============================================================ */
export const faqCategories = ["All", "The System", "Pricing", "Ownership", "Onboarding"] as const;

export const faqs: {
  q: string;
  a: string;
  category: (typeof faqCategories)[number];
}[] = [
  {
    q: "Who is this for?",
    a: "Agency owners, coaches, high-ticket service providers and B2B founders already generating $10,000+/month. If you're below that, this system isn't the right fit for you yet.",
    category: "The System",
  },
  {
    q: "Is this completely done-for-you?",
    a: "Yes. We handle offer positioning, Meta Ads, ad creatives, landing pages, CRM, AI automations, lead qualification and follow-up. Your only job is to show up for the calls and close premium clients.",
    category: "The System",
  },
  {
    q: "Do I own everything?",
    a: "Yes - written into the engagement. Landing pages, funnels, CRM, automations, ad creatives, copy, follow-up sequences and customer data all become your business assets. No lock-ins, no hidden ownership.",
    category: "Ownership",
  },
  {
    q: "How long does implementation take?",
    a: "Most systems are live within weeks. You'll start seeing traffic and booked appointments during implementation - you don't wait 90 days just to get started.",
    category: "Onboarding",
  },
  {
    q: "What industries do you work with?",
    a: "Digital marketing agencies, coaches, consultants, B2B companies, home services, legal, healthcare, real estate, mortgage, insurance, fitness, e-commerce, construction and more - 30+ niches and counting.",
    category: "The System",
  },
  {
    q: "What happens on the strategy call?",
    a: "We audit your offer, traffic and numbers, show you the exact system we'd install for your niche, and lay out what it takes to double your revenue in 90 days. No pressure, no obligation.",
    category: "Onboarding",
  },
  {
    q: "How is this different from a marketing agency?",
    a: "Agencies run ads and hand you leads. We build and operate a complete client acquisition ecosystem - from the first click to a qualified client on your calendar - and back it with a written guarantee.",
    category: "The System",
  },
  {
    q: "What's included?",
    a: "Offer positioning, messaging, Meta Ads, creatives, landing pages, complete sales funnel, CRM, AI automations, email sequences, SMS follow-up, appointment reminders, lead qualification, calendar booking and ongoing optimisation.",
    category: "The System",
  },
  {
    q: "How much does a lead generation agency cost?",
    a: "Most agencies charge a monthly management fee, a fee per lead or call, or a mix, plus your own ad spend. QualifiedLeadsX quotes each engagement after the strategy call, based on your niche, ad budget and funnel scope, and charges no management fee after day 90 if the agreed milestones are not met.",
    category: "Pricing",
  },
  {
    q: "Are lead generation companies worth it?",
    a: "They are worth it when you can close the calls and your offer is priced high enough to cover the cost of acquisition. That is why we only work with businesses already doing $10,000+ a month.",
    category: "The System",
  },
  {
    q: "What does a lead generation agency do?",
    a: "It finds, attracts and qualifies potential buyers for you. We go further than leads: we build the offer, the Meta ads, the funnel, the CRM and the AI follow-up, and we deliver booked, qualified sales calls.",
    category: "The System",
  },
  {
    q: "Do you work with B2B companies?",
    a: "Yes. B2B service companies, consultants and agencies are a core group. We use Meta ads with B2B-specific qualification questions and calendar booking instead of cold outreach.",
    category: "The System",
  },
  {
    q: "Do you run Google ads or LinkedIn ads?",
    a: "Our system is built on Meta ads (Facebook and Instagram) because that is where we have managed $50M+ in spend. We tell you on the strategy call if your offer needs a different channel.",
    category: "The System",
  },
] as const;

/* ============================================================
   Testimonials (floating cards / footer)
   ============================================================ */
export const testimonials = [
  {
    quote:
      "I had zero audience and zero outreach. The system built my entire pipeline from scratch. $38K a month and climbing.",
    name: "Daniel",
    role: "Business Coach",
  },
  {
    quote: "My lead cost dropped to $3 in an over-saturated industry. Closed a $1.5K deal in the first month.",
    name: "Edgar",
    role: "Sales Coach",
  },
  {
    quote: "The most legitimate system I've used to scale past $100K/month. It just works.",
    name: "Charles",
    role: "Executive Coach",
  },
  {
    quote: "By the time I get on the call they already know the value. They're ready to buy.",
    name: "Alexander",
    role: "Business Consultant",
  },
] as const;
