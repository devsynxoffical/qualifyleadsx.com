/**
 * US city and state lead generation pages (25 Nov 2026, Gaurav Sir City Page Plan, QLX rows).
 * URL: /lead-generation-agency/[slug]. Rules: no invented facts. Every local fact below comes from
 * an official US Census Bureau file (links in `sourceUrl`). Proof comes only from published
 * campaigns in lib/case-studies-data.ts; where a city has no local case study, the page says so
 * and uses national results. No LocalBusiness schema and no address: QLX has no office in these cities.
 */

export type LocationFact = { value: string; label: string; source: string; sourceUrl: string };
export type LocationProof = { headline: string; detail: string; href: string; local: boolean };
export type LocationService = { title: string; text: string; href: string; linkText: string };
export type LocationFaq = { q: string; a: string };

export type LocationPage = {
  slug: string;
  kind: "city" | "state";
  name: string; // "New York"
  region: string; // "NY" or "Florida"
  stateName: string;
  title: string; // <= 60 chars
  description: string; // < 155 chars
  h1: string;
  keywords: string[];
  intro: string;
  marketIntro: string;
  facts: LocationFact[];
  proofIntro: string;
  proof: LocationProof[];
  servicesIntro: string;
  whoFor: string;
  services: LocationService[];
  pricing: string;
  faqs: LocationFaq[];
  nearby: string;
  parent: { name: string; href: string };
  siblings: { name: string; href: string }[];
  children?: { name: string; href: string }[];
  industries: { name: string; href: string }[];
};

const POP_SRC = "U.S. Census Bureau, Vintage 2024 city and town population estimates";
const POP_URL = "https://www2.census.gov/programs-surveys/popest/datasets/2020-2024/cities/totals/sub-est2024.csv";
const CBP_SRC = "U.S. Census Bureau, County Business Patterns 2022 (county file)";
const CBP_URL = "https://www2.census.gov/programs-surveys/cbp/datasets/2022/cbp22co.zip";
const CBPST_SRC = "U.S. Census Bureau, County Business Patterns 2022 (state file)";
const CBPST_URL = "https://www2.census.gov/programs-surveys/cbp/datasets/2022/cbp22st.zip";
const POPST_SRC = "U.S. Census Bureau, Vintage 2024 population estimates";

const HUB = { name: "Lead generation agency (US)", href: "/lead-generation-agency" };
const ig = (id: string) => `https://www.instagram.com/p/${id}/`;

/* Published proof, reused across pages (all from lib/case-studies-data.ts). */
const P = {
  nycMedSpa: { headline: "453 appointments for a med spa with 3 New York clinics", detail: "$10,387 in Meta ads, $22.93 per booked appointment, 303 shows (67%), 247 paying clients and $74,100 in revenue.", href: "/case-studies/nyc-med-spa-rf-microneedling-74k" },
  nyRemodel: { headline: "337 kitchen remodeling appointments in 19 days in New York", detail: "Cold traffic, several ad angles tested quickly, $4.81 per booked appointment.", href: ig("DRRS7f-Eh_0") },
  flHvac: { headline: "$65,872 net cash collected for a Florida HVAC company", detail: "$5,628 in ads, 125 booked appointments at $45 each, ROAS 12.70.", href: "/case-studies/florida-hvac-65k-cash-collected" },
  txMortgage: { headline: "823 OTP-verified mortgage leads for a Texas client", detail: "$19,725 in ad spend at $23.97 per verified lead.", href: ig("DPgb2jLiczr") },
  txMortgageTest: { headline: "142 qualified mortgage leads in 11 days in Texas", detail: "Testing phase: $612 spent at $4.31 per lead.", href: ig("DOkz521En0b") },
  txRemodel: { headline: "542 remodeling leads in 30 days for a Texas client", detail: "$12,911 in ads at $23.82 per lead.", href: ig("DPbXMSAEkxX") },
  txRealEstate: { headline: "Texas real estate business scaled from $4K to $22K+ a month in ad spend", detail: "August: $23,363 spent for 1,046 leads at $22.34 per lead, after a July test of 247 leads at $16.48.", href: ig("DPHVugSEhxg") },
  txSolar: { headline: "300 OTP-verified solar leads in 10 days for a Texas client", detail: "$14.71 per lead at a $50 CPM.", href: ig("DXYzVttjusP") },
  finalExpense: { headline: "2,440 final expense leads in one month", detail: "$19,011 in spend at $7.79 per lead for a pay-per-lead insurance client.", href: "/for/insurance-agencies" },
  luxuryRE: { headline: "10 luxury real estate buyer appointments in 24 hours", detail: "$172.90 in ads, $17.29 per appointment.", href: "/pay-per-appointment" },
  njHvac: { headline: "140 booked HVAC appointments and 12 installs", detail: "$1,956 in ads at $13.97 per appointment, $38,400 collected.", href: "/hvac-leads" },
};
const local = (p: Omit<LocationProof, "local">): LocationProof => ({ ...p, local: true });
const national = (p: Omit<LocationProof, "local">): LocationProof => ({ ...p, local: false });

const PRICE_BASE =
  "You pay a monthly management fee plus your own ad spend, and the fee is quoted after a strategy call because it depends on the offer and the market. Published campaigns have booked appointments for between $4.81 and $45 each, and every engagement includes a 90-day written guarantee.";

export const locationPages: LocationPage[] = [
  {
    slug: "new-york-ny",
    kind: "city",
    name: "New York",
    region: "NY",
    stateName: "New York",
    title: "Lead Generation Agency in New York, NY | QualifiedLeadsX",
    description: "Lead generation agency for New York service businesses: Meta ads, lead qualification and booked sales appointments. Published NYC results. Book a call.",
    h1: "Lead Generation Agency in New York",
    keywords: ["lead generation agency new york", "lead generation nyc", "lead generation companies in new york", "b2b lead generation new york"],
    intro:
      "QualifiedLeadsX is a done-for-you lead generation agency for New York service businesses that sell on a call or a consultation: med spas, financial advisors, B2B firms, agencies and coaches across the five boroughs. We run the Meta ads, ask your qualifying questions in the form, contact every lead within minutes and book qualified prospects into your calendar. Published campaigns have booked appointments from $4.81 each, and campaigns usually start within the first weeks once the ads, funnel and follow-up are live.",
    marketIntro:
      "New York City counts more than 235,000 business establishments across its five boroughs, which is why buying shared leads rarely works here: the same prospect is often contacted by several firms. The official numbers show the size of the audience and of the competition.",
    facts: [
      { value: "8,478,072", label: "people living in New York City (July 2024 estimate; 8,805,594 at the 2020 census base)", source: POP_SRC, sourceUrl: POP_URL },
      { value: "235,147", label: "business establishments across the five borough counties (Bronx, Kings, New York, Queens and Richmond) in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
      { value: "3,869,139", label: "paid employees at those establishments in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
    ],
    proofIntro: "Two of our published campaigns ran in New York, so these results are local:",
    proof: [local(P.nycMedSpa), local(P.nyRemodel), national(P.finalExpense)],
    servicesIntro: "The services New York clients use most, based on the offers we run in the city:",
    whoFor:
      'New York clients tend to sell premium, appointment-based services: aesthetics clinics with several locations, wealth advisors with high minimums, and B2B firms selling to other New York companies. The common problem is not lead volume but lead quality, because the same prospect is contacted by several firms. We solve it with qualification questions inside the form, fast follow-up so you are first on the phone, and exclusive leads from your own ad account. If you sell in Manhattan only, or in Brooklyn and Queens, the ads run only there.',
    services: [
      { title: "Appointment setting for NYC sales teams", text: "Leads are called or messaged within minutes, qualified on budget and timing, and booked into your calendar with reminders.", href: "/appointment-setting", linkText: "Appointment setting services" },
      { title: "Med spa consultations", text: "The same system that booked 453 appointments for three New York clinics, built around your treatments and locations.", href: "/for/med-spas", linkText: "Lead generation for med spas" },
      { title: "Financial advisor meetings", text: "Educational ads and an asset-based survey, so Manhattan and Long Island advisors only meet people above their minimums.", href: "/for/financial-advisors", linkText: "Lead generation for financial advisors" },
      { title: "B2B lead generation in New York", text: "Qualified calls with decision makers for consultancies, agencies and B2B service firms selling five-figure contracts.", href: "/b2b-lead-generation", linkText: "B2B lead generation" },
    ],
    pricing: `${PRICE_BASE} In New York, ad costs are usually higher than the national average, so we judge campaigns on cost per booked appointment and cost per client, not on cost per click.`,
    faqs: [
      { q: "How much does a lead generation agency cost in New York?", a: "Expect a monthly management fee plus ad spend. Our fee is custom quoted. For reference, a New York med spa paid $22.93 per booked appointment and a New York remodeling client $4.81, both published with the ad spend shown." },
      { q: "Do you have results from New York?", a: "Yes. A med spa with three New York clinics booked 453 appointments from $10,387 in ads and gained 247 paying clients, and a New York kitchen remodeling client booked 337 appointments in 19 days." },
      { q: "Do you need an office in New York to run campaigns here?", a: "No. Campaigns are run remotely and targeted by ZIP code, borough or radius, with appointments booked in your Eastern Time calendar." },
      { q: "Can you target only certain boroughs?", a: "Yes. Ads can be limited to the boroughs, ZIP codes or suburbs you serve, for example Manhattan and Brooklyn only, or Long Island and Westchester." },
      { q: "Is lead generation in NYC exclusive?", a: "Yes. The campaign runs in an ad account in your name and every lead and appointment goes only to your business." },
      { q: 'How many leads can a New York business expect per month?', a: 'It depends on budget and offer, so we do not promise a fixed number. The NYC med spa above booked 453 appointments from $10,387 in ads; your strategy call gives you a realistic range before any spend.' },
    ],
    nearby: "Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Long Island, Westchester County and Jersey City across the Hudson.",
    parent: HUB,
    siblings: [{ name: "Miami", href: "/lead-generation-agency/miami-fl" }, { name: "Chicago", href: "/lead-generation-agency/chicago-il" }],
    industries: [{ name: "Med spas", href: "/for/med-spas" }, { name: "Financial advisors", href: "/for/financial-advisors" }],
  },
  {
    slug: "miami-fl",
    kind: "city",
    name: "Miami",
    region: "FL",
    stateName: "Florida",
    title: "Lead Generation Agency in Miami, FL | QualifiedLeadsX",
    description: "Lead generation agency in Miami for real estate, insurance and med spa businesses: qualified leads and booked appointments. Florida results. Book a call.",
    h1: "Lead Generation Agency in Miami",
    keywords: ["lead generation agency miami", "lead generation miami"],
    intro:
      "QualifiedLeadsX runs lead generation for Miami businesses that close on a call or a visit: real estate investors and agents, insurance agencies, med spas and home service companies in Miami-Dade. We build the Meta ads, qualify every lead with the questions you choose, follow up within minutes in English or Spanish copy you approve, and book qualified prospects into your calendar. Published campaigns have booked appointments from $4.81 to $45 each, and most campaigns start booking within the first weeks.",
    marketIntro:
      "The city of Miami has grown since the 2020 census, and Miami-Dade County counts close to 100,000 business establishments. More businesses means more competition for the same buyers, so qualification and speed matter more than volume.",
    facts: [
      { value: "487,014", label: "people living in the city of Miami (July 2024 estimate), up from 442,244 at the 2020 census base", source: POP_SRC, sourceUrl: POP_URL },
      { value: "95,916", label: "business establishments in Miami-Dade County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
      { value: "1,009,443", label: "paid employees in Miami-Dade County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
    ],
    proofIntro: "We have a published Florida result; the other examples are national campaigns run with the same system:",
    proof: [local(P.flHvac), national(P.luxuryRE), national(P.finalExpense)],
    servicesIntro: "What Miami businesses usually hire us for:",
    whoFor:
      'In Miami we mostly hear from three kinds of businesses: investors and agents who need motivated sellers or qualified buyers, insurance agencies that are tired of shared vendor leads, and aesthetics clinics that want booked consultations rather than form fills. Many serve bilingual clients, so the ads, questions and follow-up can run in English, Spanish or both. Campaigns can cover the city only or all of Miami-Dade, Broward and Palm Beach, and every lead is exclusive to you.',
    services: [
      { title: "Real estate investor leads", text: "Motivated seller leads and buyer appointments for investors and agents, qualified on timeline and property type.", href: "/for/real-estate-investors", linkText: "Lead generation for real estate investors" },
      { title: "Insurance leads for Miami agencies", text: "Exclusive leads from your own campaign, qualified on age, coverage and state, with calls booked for your agents.", href: "/for/insurance-agencies", linkText: "Lead generation for insurance agents" },
      { title: "Med spa and aesthetics bookings", text: "Consultations booked for treatments such as RF microneedling, with reminders to protect the show rate.", href: "/for/med-spas", linkText: "Lead generation for med spas" },
      { title: "Pay per appointment", text: "Campaigns judged on booked, qualified appointments rather than raw form fills.", href: "/pay-per-appointment", linkText: "Pay per appointment lead generation" },
    ],
    pricing: `${PRICE_BASE} For Miami real estate, a comparable luxury campaign booked 10 buyer appointments in 24 hours for $172.90 in ads.`,
    faqs: [
      { q: "What does a lead generation agency in Miami do?", a: "It runs the ads, captures and qualifies the leads, follows up quickly and books sales appointments for you. We handle all of it for Miami businesses, from the ad account to the reminder before each call." },
      { q: "Can you run Spanish-language ads in Miami?", a: "Yes, if your team can serve Spanish-speaking clients. You approve the copy, and the qualifying questions and follow-up messages are written in the same language." },
      { q: "Do you have Florida results?", a: "Yes. A Florida HVAC company collected $65,872 net from $5,628 in ads, with 125 booked appointments at $45 each." },
      { q: "How quickly can a Miami campaign start?", a: "Most campaigns start booking within the first weeks once the ads, funnel and follow-up are live. One luxury real estate campaign booked 10 buyer appointments in its first 24 hours." },
      { q: "Do you cover Fort Lauderdale and the rest of South Florida?", a: "Yes. Targeting can include Miami-Dade, Broward and Palm Beach counties or a radius around your office." },
      { q: 'Is Miami a good market for paid lead generation?', a: 'Yes, if the offer is strong. Miami-Dade has close to 100,000 business establishments, so competition for attention is high; that is why we qualify every lead and follow up within minutes instead of selling raw volume.' },
    ],
    nearby: "Miami Beach, Coral Gables, Doral, Hialeah, Kendall, Aventura and Fort Lauderdale to the north.",
    parent: { name: "Lead generation agency in Florida", href: "/lead-generation-agency/florida" },
    siblings: [{ name: "Tampa", href: "/lead-generation-agency/tampa-fl" }, { name: "New York", href: "/lead-generation-agency/new-york-ny" }],
    industries: [{ name: "Real estate investors", href: "/for/real-estate-investors" }, { name: "Insurance agents", href: "/for/insurance-agencies" }],
  },
  {
    slug: "chicago-il",
    kind: "city",
    name: "Chicago",
    region: "IL",
    stateName: "Illinois",
    title: "Lead Generation Agency in Chicago, IL | QualifiedLeadsX",
    description: "Lead generation company for Chicago B2B firms, consultants and advisors: qualified leads and booked sales calls with published results. Book a call.",
    h1: "Lead Generation Agency in Chicago",
    keywords: ["lead generation chicago", "lead generation company chicago", "lead generation agency chicago"],
    intro:
      "QualifiedLeadsX is a lead generation company for Chicago businesses that sell high-value services on a call: B2B firms, consultancies, financial advisors and agencies in Chicago and Cook County. We build the ads, the qualification form and the follow-up, then book only fit prospects into your calendar. Pricing is a custom management fee plus ad spend, our published campaigns have booked appointments for $4.81 to $45 each, and setup usually takes the first weeks.",
    marketIntro:
      "Cook County counts well over 100,000 business establishments, which makes Chicago a deep market for B2B selling and a crowded one for advertising. These are the official figures:",
    facts: [
      { value: "2,721,308", label: "people living in Chicago (July 2024 estimate; 2,748,331 at the 2020 census base)", source: POP_SRC, sourceUrl: POP_URL },
      { value: "134,846", label: "business establishments in Cook County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
      { value: "2,441,203", label: "paid employees in Cook County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
    ],
    proofIntro: "We have not published a Chicago case study yet, so these are national results from the same system:",
    proof: [national(P.nycMedSpa), national(P.txMortgage), national(P.finalExpense)],
    servicesIntro: "The services we would run for a Chicago business:",
    whoFor:
      'Chicago businesses that work with us usually sell to other businesses or to high-income households: consultancies and agencies selling five-figure retainers, B2B service companies, and financial advisors in the Loop and the North Shore. Long sales cycles are common, so we add an application step, qualify on budget, authority and timeline, and report cost per qualified call rather than cost per lead. The result is a smaller number of conversations with people who can actually buy.',
    services: [
      { title: "B2B lead generation", text: "Qualified sales calls with owners and decision makers for firms selling contracts worth $10,000 or more.", href: "/b2b-lead-generation", linkText: "B2B lead generation" },
      { title: "Consultant client acquisition", text: "Discovery calls with prospects who have answered budget and timing questions before booking.", href: "/for/consultants", linkText: "Lead generation for consultants" },
      { title: "Financial advisor meetings", text: "Asset-based qualification so advisors in the Loop and the suburbs meet prospects who fit their minimums.", href: "/for/financial-advisors", linkText: "Lead generation for financial advisors" },
      { title: "Appointment setting", text: "Every lead contacted in under 3 minutes and booked into your Central Time calendar.", href: "/appointment-setting", linkText: "Appointment setting services" },
    ],
    pricing: `${PRICE_BASE} For B2B offers we report cost per qualified call and cost per client, because a Chicago B2B deal is usually worth far more than the cost of a booked meeting.`,
    faqs: [
      { q: "How much does a lead generation company in Chicago cost?", a: "A monthly management fee, custom quoted, plus your ad spend. In our published campaigns booked appointments cost between $4.81 and $45 each, depending on industry and offer." },
      { q: "Do you have Chicago case studies?", a: "Not yet. Our published results come from New York, Florida, Texas and national campaigns, and we say so on this page rather than invent local numbers." },
      { q: "Do you do B2B lead generation in Chicago?", a: "Yes. We book qualified calls for B2B service firms, consultancies and agencies, with qualification on budget, authority and timeline." },
      { q: "Can you target the Chicago suburbs as well?", a: "Yes. Campaigns can cover Cook County, DuPage, Lake and Will counties or a radius you choose." },
      { q: "What time zone are appointments booked in?", a: "Your own. Chicago clients get appointments booked into a Central Time calendar with reminders by SMS, email and WhatsApp." },
      { q: 'How long does B2B lead generation take to work in Chicago?', a: 'Most campaigns book their first qualified calls within the first weeks. For long B2B sales cycles, judge the campaign on cost per qualified call and pipeline value after 60 to 90 days, which is also the window of our written guarantee.' },
    ],
    nearby: "The Loop, Evanston, Oak Park, Schaumburg, Naperville, Oak Brook and Joliet.",
    parent: HUB,
    siblings: [{ name: "New York", href: "/lead-generation-agency/new-york-ny" }, { name: "Denver", href: "/lead-generation-agency/denver-co" }],
    industries: [{ name: "Consultants", href: "/for/consultants" }, { name: "B2B service firms", href: "/for/b2b-services" }],
  },
  {
    slug: "atlanta-ga",
    kind: "city",
    name: "Atlanta",
    region: "GA",
    stateName: "Georgia",
    title: "Lead Generation Agency in Atlanta, GA | QualifiedLeadsX",
    description: "Lead generation company in Atlanta for coaches, agencies and insurance agents: qualified leads and booked appointments, published results. Book a call.",
    h1: "Lead Generation Agency in Atlanta",
    keywords: ["lead generation atlanta", "lead generation company atlanta", "lead generation agency atlanta"],
    intro:
      "QualifiedLeadsX is a done-for-you lead generation agency for Atlanta businesses that close on a sales call: coaches, marketing agencies, insurance agencies and service businesses in Fulton County and the wider metro. We run the ads, qualify each lead, follow up within minutes and book the right people into your calendar. You pay a custom-quoted management fee plus ad spend, our published campaigns have booked appointments for $4.81 to $45 each, and most start booking within the first weeks.",
    marketIntro:
      "Atlanta's city population has kept growing since 2020, and Fulton County alone counts tens of thousands of businesses. Official figures:",
    facts: [
      { value: "520,070", label: "people living in the city of Atlanta (July 2024 estimate), up from 498,792 at the 2020 census base", source: POP_SRC, sourceUrl: POP_URL },
      { value: "40,717", label: "business establishments in Fulton County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
      { value: "854,151", label: "paid employees in Fulton County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
    ],
    proofIntro: "We have not published an Atlanta case study yet, so these are national results from the same system:",
    proof: [national(P.finalExpense), national(P.nycMedSpa), national(P.njHvac)],
    servicesIntro: "The services we would run for an Atlanta business:",
    whoFor:
      'In Atlanta we see a mix of coaches and online educators, marketing and service agencies, and insurance agencies serving Georgia families. What they share is a sales call: someone has to talk to the prospect before money changes hands. We make sure that call is with the right person by asking the qualifying questions up front, then booking and reminding the prospect so the slot is not wasted. Campaigns can target the city, the Perimeter suburbs or all of Georgia.',
    services: [
      { title: "Coaching client acquisition", text: "Booked discovery calls for coaches, with low-ticket offers or applications that filter out browsers.", href: "/for/coaches", linkText: "Lead generation for coaches" },
      { title: "Insurance leads", text: "Exclusive final expense and life insurance leads from your own campaign; published final expense leads cost $7.79.", href: "/for/insurance-agencies", linkText: "Lead generation for insurance agents" },
      { title: "Agency client acquisition", text: "Qualified calls with business owners for Atlanta marketing and service agencies.", href: "/for/agencies", linkText: "Lead generation for agencies" },
      { title: "Pay per appointment", text: "Campaigns measured on booked, qualified appointments and reported per show and per sale.", href: "/pay-per-appointment", linkText: "Pay per appointment" },
    ],
    pricing: `${PRICE_BASE} For insurance agencies in Georgia, our published final expense campaign produced leads at $7.79 each, which helps set a realistic budget before launch.`,
    faqs: [
      { q: "What is the best lead generation company in Atlanta for a service business?", a: "Look for one that books qualified appointments rather than selling lists, publishes results with ad spend, contacts leads within minutes and reports cost per client. That is how we work." },
      { q: "Do you have Atlanta results?", a: "Not yet published. Our case studies come from New York, Florida, Texas and national campaigns, and the same system is used for Atlanta clients." },
      { q: "Can you generate insurance leads in Georgia?", a: "Yes, for agents licensed in Georgia. Leads come from your own campaign and are qualified on age band, coverage and timing." },
      { q: "Do you serve the Atlanta suburbs?", a: "Yes. Targeting can include Fulton, DeKalb, Cobb and Gwinnett counties or a radius around your office." },
      { q: "How fast do Atlanta campaigns start?", a: "Most campaigns start booking within the first weeks, once the ads, funnel and follow-up are live." },
      { q: 'Can you book calls for Atlanta coaches and course creators?', a: 'Yes. Coaches usually run either an application to a discovery call or a low-ticket offer first, and we build whichever fits. Our coaching guide shows the published coaching results we use as benchmarks.' },
    ],
    nearby: "Buckhead, Midtown, Decatur, Sandy Springs, Marietta, Alpharetta and Roswell.",
    parent: HUB,
    siblings: [{ name: "Tampa", href: "/lead-generation-agency/tampa-fl" }, { name: "Dallas", href: "/lead-generation-agency/dallas-tx" }],
    industries: [{ name: "Coaches", href: "/for/coaches" }, { name: "Insurance agents", href: "/for/insurance-agencies" }],
  },
  {
    slug: "denver-co",
    kind: "city",
    name: "Denver",
    region: "CO",
    stateName: "Colorado",
    title: "Lead Generation Agency in Denver, CO | QualifiedLeadsX",
    description: "Lead generation in Denver for SaaS, consultants and home service companies: qualified leads and booked sales appointments, published results. Book a call.",
    h1: "Lead Generation Agency in Denver",
    keywords: ["lead generation denver", "lead generation agency denver"],
    intro:
      "QualifiedLeadsX runs lead generation for Denver businesses that sell on a call or an in-home visit: B2B SaaS and service firms, consultants and home improvement companies across Denver and the Front Range. We build the Meta ads and qualification form, contact each lead within minutes and book qualified prospects into your Mountain Time calendar. The fee is custom quoted plus ad spend, published campaigns have booked appointments for $4.81 to $45 each, and setup takes the first weeks.",
    marketIntro:
      "Denver is a consolidated city and county, so the city and county business figures describe the same area. The official numbers:",
    facts: [
      { value: "729,019", label: "people living in Denver (July 2024 estimate), up from 715,513 at the 2020 census base", source: POP_SRC, sourceUrl: POP_URL },
      { value: "27,347", label: "business establishments in Denver County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
      { value: "478,263", label: "paid employees in Denver County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
    ],
    proofIntro: "We have not published a Denver case study yet, so these are national results from the same system:",
    proof: [national(P.njHvac), national(P.nyRemodel), national(P.txSolar)],
    servicesIntro: "The services we would run for a Denver business:",
    whoFor:
      'Denver clients are often B2B software and service companies, consultants, and home improvement firms working across the Front Range. Software and consulting buyers research before they talk, so those campaigns lean on proof and a short application. Home service campaigns are about speed: the homeowner who asks for an estimate is called within minutes and booked for a visit. Either way, the ads run in your account, the leads are yours, and reporting goes down to cost per sale.',
    services: [
      { title: "Lead generation for SaaS", text: "Demo and sales calls with qualified buyers for B2B software companies.", href: "/for/saas", linkText: "Lead generation for SaaS" },
      { title: "Consultant discovery calls", text: "Prospects answer budget and timeline questions before they can book.", href: "/for/consultants", linkText: "Lead generation for consultants" },
      { title: "Home improvement appointments", text: "In-home estimates booked for remodelers and HVAC companies; a comparable remodeling campaign booked appointments at $4.81.", href: "/for/home-improvement", linkText: "Home improvement leads" },
      { title: "Appointment setting", text: "Under 3-minute follow-up, booking and reminders, run for your team.", href: "/appointment-setting", linkText: "Appointment setting services" },
    ],
    pricing: `${PRICE_BASE} For Denver home service companies, the closest published examples are HVAC appointments at $13.97 and remodeling appointments at $4.81.`,
    faqs: [
      { q: "How much does lead generation cost in Denver?", a: "A custom-quoted management fee plus ad spend. Published campaigns have booked appointments for $4.81 to $45 each; your cost depends on your offer and service area." },
      { q: "Do you have Denver results?", a: "Not yet published. We show national results from the same system and will not invent local numbers." },
      { q: "Can you target Boulder and the rest of the Front Range?", a: "Yes. Campaigns can cover Denver, Aurora, Lakewood, Boulder and other areas you serve, by ZIP code or radius." },
      { q: "Do you generate leads for SaaS companies in Denver?", a: "Yes. For SaaS and B2B offers we book qualified demo or sales calls and report cost per qualified call and per customer." },
      { q: "Are the leads shared with other companies?", a: "No. The campaign runs in your ad account and every lead and appointment is exclusive to you." },
      { q: 'Do you work with Denver home service companies?', a: 'Yes, remodelers and HVAC companies in particular. Our closest published results are 337 remodeling appointments at $4.81 each and 140 HVAC appointments at $13.97, both national campaigns.' },
    ],
    nearby: "Aurora, Lakewood, Englewood, Littleton, Arvada, Westminster and Boulder.",
    parent: HUB,
    siblings: [{ name: "Chicago", href: "/lead-generation-agency/chicago-il" }, { name: "Dallas", href: "/lead-generation-agency/dallas-tx" }],
    industries: [{ name: "SaaS", href: "/for/saas" }, { name: "Home improvement", href: "/for/home-improvement" }],
  },
  {
    slug: "tampa-fl",
    kind: "city",
    name: "Tampa",
    region: "FL",
    stateName: "Florida",
    title: "Lead Generation Agency in Tampa, FL | QualifiedLeadsX",
    description: "Lead generation in Tampa for insurance agents, real estate investors and HVAC companies: qualified leads and booked appointments, with Florida results.",
    h1: "Lead Generation Agency in Tampa",
    keywords: ["lead generation tampa", "lead generation agency tampa"],
    intro:
      "QualifiedLeadsX runs lead generation for Tampa Bay businesses: insurance agencies selling final expense and life cover, real estate investors, and HVAC and home service companies in Hillsborough County and beyond. We run the ads, qualify every lead, follow up within minutes and book qualified people into your calendar. Pricing is a custom management fee plus ad spend, published campaigns booked appointments for $4.81 to $45 each, and campaigns usually start within the first weeks.",
    marketIntro:
      "Tampa has added close to 30,000 people since the 2020 census base, and Hillsborough County counts more than 42,000 business establishments. The official figures:",
    facts: [
      { value: "414,547", label: "people living in the city of Tampa (July 2024 estimate), up from 385,288 at the 2020 census base", source: POP_SRC, sourceUrl: POP_URL },
      { value: "42,366", label: "business establishments in Hillsborough County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
      { value: "656,872", label: "paid employees in Hillsborough County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
    ],
    proofIntro: "We have a published Florida result; the others are national campaigns run with the same system:",
    proof: [local(P.flHvac), national(P.finalExpense), national(P.njHvac)],
    servicesIntro: "What Tampa businesses usually hire us for:",
    whoFor:
      'Tampa Bay businesses that hire us are often insurance agents selling final expense and life cover to retirees, HVAC companies facing year-round cooling demand, and real estate investors working Hillsborough and Pinellas. Each needs something different: licensed-state targeting and compliance for insurance, ZIP-code targeting and same-day follow-up for HVAC, and seller motivation questions for investors. We set those rules with you before launch, so only the right leads reach your phone.',
    services: [
      { title: "Final expense leads", text: "Exclusive final expense leads from your own campaign; our published campaign produced 2,440 leads at $7.79.", href: "/final-expense-leads", linkText: "Final expense leads" },
      { title: "Insurance agent appointments", text: "Leads qualified on age band and coverage, with calls booked straight into your agents' calendars.", href: "/for/insurance-agencies", linkText: "Lead generation for insurance agents" },
      { title: "HVAC leads and installs", text: "Booked in-home visits for Tampa Bay HVAC companies, reported through to installs.", href: "/hvac-leads", linkText: "HVAC leads" },
      { title: "Real estate investor leads", text: "Motivated seller leads qualified on timeline and property condition.", href: "/for/real-estate-investors", linkText: "Lead generation for real estate investors" },
    ],
    pricing: `${PRICE_BASE} For Florida HVAC, a published campaign booked 125 appointments at $45 each and collected $65,872 net.`,
    faqs: [
      { q: "What does lead generation in Tampa cost?", a: "A custom-quoted management fee plus your ad spend. Published campaigns: final expense leads at $7.79, HVAC appointments at $13.97 to $45 and remodeling appointments at $4.81." },
      { q: "Do you have Florida results?", a: "Yes. A Florida HVAC company collected $65,872 net from $5,628 in ads, with 125 booked appointments." },
      { q: "Can you generate final expense leads in Tampa?", a: "Yes, for agents licensed in Florida. Leads are exclusive to your agency and can be booked as appointments." },
      { q: "Do you cover St. Petersburg and Clearwater?", a: "Yes. Targeting can include Hillsborough, Pinellas and Pasco counties or a radius around your office." },
      { q: "How soon will a Tampa campaign book appointments?", a: "Most campaigns start booking within the first weeks once the ads, funnel and follow-up are live." },
      { q: 'Can you run final expense campaigns only in Florida?', a: 'Yes. Insurance campaigns only target the states you are licensed in, and the qualifying questions can screen for age band, coverage amount and best time to call before a lead reaches your agents.' },
    ],
    nearby: "St. Petersburg, Clearwater, Brandon, Riverview, Wesley Chapel and Lakeland.",
    parent: { name: "Lead generation agency in Florida", href: "/lead-generation-agency/florida" },
    siblings: [{ name: "Miami", href: "/lead-generation-agency/miami-fl" }, { name: "Atlanta", href: "/lead-generation-agency/atlanta-ga" }],
    industries: [{ name: "Insurance agents", href: "/for/insurance-agencies" }, { name: "HVAC leads", href: "/hvac-leads" }],
  },
  {
    slug: "houston-tx",
    kind: "city",
    name: "Houston",
    region: "TX",
    stateName: "Texas",
    title: "Lead Generation Agency in Houston, TX | QualifiedLeadsX",
    description: "Lead generation in Houston for mortgage, real estate and home service companies: verified leads and booked appointments. Published Texas results.",
    h1: "Lead Generation Agency in Houston",
    keywords: ["lead generation houston", "lead generation agency houston"],
    intro:
      "QualifiedLeadsX runs lead generation for Houston businesses that sell on a call or an in-home visit: mortgage brokers and loan officers, real estate investors, and remodeling and solar companies across Harris County. We build the ads, verify and qualify every lead, follow up within minutes and book qualified prospects into your calendar. The fee is custom quoted plus ad spend, and we have published several Texas campaigns, including verified mortgage leads from $4.31 each.",
    marketIntro:
      "Houston has added about 90,000 people since the 2020 census base, and Harris County counts more than 100,000 business establishments. The official figures:",
    facts: [
      { value: "2,390,125", label: "people living in Houston (July 2024 estimate), up from 2,300,351 at the 2020 census base", source: POP_SRC, sourceUrl: POP_URL },
      { value: "109,874", label: "business establishments in Harris County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
      { value: "2,085,860", label: "paid employees in Harris County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
    ],
    proofIntro: "These campaigns ran for Texas clients (the posts name the state, not the city):",
    proof: [local(P.txMortgage), local(P.txRemodel), local(P.txSolar)],
    servicesIntro: "What Houston businesses usually hire us for:",
    whoFor:
      'Houston clients are usually mortgage brokers and loan officers, remodelers and solar installers working the suburbs, and real estate investors buying across Harris and Fort Bend counties. Most of their buyers fill in a form on a phone and expect a quick call, so speed decides who wins the deal. We verify phone numbers with a one-time code on lead-heavy campaigns, call within minutes, and book the appointment or transfer the lead straight to your team.',
    services: [
      { title: "Mortgage leads", text: "OTP-verified purchase and refinance leads; a Texas mortgage client received 823 verified leads at $23.97.", href: "/mortgage-leads", linkText: "Mortgage leads" },
      { title: "Home improvement appointments", text: "In-home estimates for remodelers; a Texas remodeling client got 542 leads in 30 days.", href: "/for/home-improvement", linkText: "Home improvement leads" },
      { title: "Real estate investor leads", text: "Motivated seller leads and appointments, qualified on timeline and property condition.", href: "/for/real-estate-investors", linkText: "Lead generation for real estate investors" },
      { title: "Pay per appointment", text: "Campaigns judged on booked, qualified appointments and cost per sale.", href: "/pay-per-appointment", linkText: "Pay per appointment" },
    ],
    pricing: `${PRICE_BASE} Published Texas lead costs range from $4.31 (mortgage, testing phase) to $23.97 (mortgage, at $19,725 spend).`,
    faqs: [
      { q: "How much does lead generation cost in Houston?", a: "A custom-quoted management fee plus ad spend. Published Texas campaigns: mortgage leads at $4.31 to $23.97, remodeling leads at $23.82 and solar leads at $14.71." },
      { q: "Do you have Texas results?", a: "Yes. A Texas mortgage client received 823 OTP-verified leads, a Texas remodeler 542 leads in 30 days and a Texas solar company 300 verified leads in 10 days." },
      { q: "Do you generate mortgage leads in Houston?", a: "Yes. Leads are verified by one-time code, qualified on loan type and timeline, and exclusive to your team." },
      { q: "Can you target Katy, Sugar Land and The Woodlands?", a: "Yes. Campaigns can cover Harris, Fort Bend and Montgomery counties or the ZIP codes you serve." },
      { q: "Are Houston leads exclusive?", a: "Yes. Every lead comes from a campaign run in your ad account and is never resold." },
      { q: 'What is OTP verification and why use it in Houston?', a: 'OTP means the lead confirms a one-time code sent to their phone before the form submits. It removes fake and mistyped numbers, which matters for mortgage and solar campaigns where your team calls every lead.' },
    ],
    nearby: "Katy, Sugar Land, The Woodlands, Pearland, Pasadena, Cypress and Spring.",
    parent: { name: "Lead generation agency in Texas", href: "/lead-generation-agency/texas" },
    siblings: [{ name: "Dallas", href: "/lead-generation-agency/dallas-tx" }, { name: "Tampa", href: "/lead-generation-agency/tampa-fl" }],
    industries: [{ name: "Mortgage leads", href: "/mortgage-leads" }, { name: "Real estate investors", href: "/for/real-estate-investors" }],
  },
  {
    slug: "dallas-tx",
    kind: "city",
    name: "Dallas",
    region: "TX",
    stateName: "Texas",
    title: "Lead Generation Agency in Dallas, TX | QualifiedLeadsX",
    description: "Lead generation in Dallas for mortgage, financial advisor and B2B firms: qualified leads and booked sales calls. Published Texas results. Book a call.",
    h1: "Lead Generation Agency in Dallas",
    keywords: ["lead generation dallas", "lead generation agency dallas"],
    intro:
      "QualifiedLeadsX is a lead generation agency for Dallas businesses that close on a call: mortgage teams, financial advisors, B2B service firms and real estate businesses in Dallas County and across the Metroplex. We run the ads, qualify every lead, contact it within minutes and book qualified prospects into your calendar. You pay a custom-quoted management fee plus ad spend, and our published Texas campaigns include a real estate business that scaled to more than $22,000 a month in ad spend.",
    marketIntro:
      "Dallas County employs more than 1.5 million people at about 70,000 business establishments. The official figures:",
    facts: [
      { value: "1,326,087", label: "people living in Dallas (July 2024 estimate), up from 1,304,345 at the 2020 census base", source: POP_SRC, sourceUrl: POP_URL },
      { value: "70,472", label: "business establishments in Dallas County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
      { value: "1,587,323", label: "paid employees in Dallas County in 2022", source: CBP_SRC, sourceUrl: CBP_URL },
    ],
    proofIntro: "These campaigns ran for Texas clients (the posts name the state, not the city):",
    proof: [local(P.txRealEstate), local(P.txMortgageTest), national(P.nycMedSpa)],
    servicesIntro: "What Dallas businesses usually hire us for:",
    whoFor:
      'In Dallas we mostly work with mortgage teams, financial advisors, B2B service firms and real estate businesses across the Metroplex. Several of our published Texas campaigns started small and scaled once the cost per lead held steady, which is the approach we take here too: a short test, then more budget behind what works. Advisors and B2B firms get an application step and qualification on assets or budget, so meetings are worth the time.',
    services: [
      { title: "Mortgage leads", text: "Verified purchase and refinance leads; a Texas client's test produced 142 leads in 11 days at $4.31.", href: "/mortgage-leads", linkText: "Mortgage leads" },
      { title: "Financial advisor meetings", text: "Educational ads and asset-based qualification for advisors in Dallas and the suburbs.", href: "/for/financial-advisors", linkText: "Lead generation for financial advisors" },
      { title: "B2B lead generation", text: "Qualified calls with decision makers for Dallas B2B service firms.", href: "/b2b-lead-generation", linkText: "B2B lead generation" },
      { title: "Appointment setting", text: "Every lead contacted in under 3 minutes and booked into your Central Time calendar.", href: "/appointment-setting", linkText: "Appointment setting services" },
    ],
    pricing: `${PRICE_BASE} A Texas real estate client kept its cost per lead between $16.48 and $22.34 while scaling from about $4,000 to over $22,000 a month in ad spend.`,
    faqs: [
      { q: "What does a lead generation agency in Dallas charge?", a: "A custom-quoted monthly management fee plus ad spend. Published Texas campaigns produced leads from $4.31 (mortgage) to $22.34 (real estate at scale)." },
      { q: "Do you have Dallas or Texas results?", a: "Texas, yes: a real estate business scaled past $22,000 a month in ad spend, and a mortgage client got 142 leads in 11 days at $4.31. We have not published a Dallas-only case study." },
      { q: "Do you cover Fort Worth and the whole Metroplex?", a: "Yes. Campaigns can include Dallas, Tarrant, Collin and Denton counties or a radius you choose." },
      { q: "Can you book appointments for financial advisors in Dallas?", a: "Yes. Prospects are filtered by investable assets, and ads and pages go through your compliance review before launch." },
      { q: "How long until a Dallas campaign starts booking?", a: "Most campaigns start booking within the first weeks once the ads, funnel and follow-up are live." },
      { q: 'Should a Dallas business start with a small test budget?', a: 'Usually yes. A Texas mortgage test produced 142 leads in 11 days on $612, and a Texas real estate client tested at about $4,000 a month before scaling past $22,000. A test shows real costs before you commit more budget.' },
    ],
    nearby: "Fort Worth, Plano, Frisco, Irving, Arlington, Richardson and McKinney.",
    parent: { name: "Lead generation agency in Texas", href: "/lead-generation-agency/texas" },
    siblings: [{ name: "Houston", href: "/lead-generation-agency/houston-tx" }, { name: "Atlanta", href: "/lead-generation-agency/atlanta-ga" }],
    industries: [{ name: "Mortgage leads", href: "/mortgage-leads" }, { name: "Financial advisors", href: "/for/financial-advisors" }],
  },
  {
    slug: "florida",
    kind: "state",
    name: "Florida",
    region: "Florida",
    stateName: "Florida",
    title: "Lead Generation Agency in Florida | QualifiedLeadsX",
    description: "Lead generation agency for Florida businesses: insurance, real estate, HVAC and med spa leads with booked appointments. Miami and Tampa pages.",
    h1: "Lead Generation Agency in Florida",
    keywords: ["lead generation agency florida", "lead generation companies in florida"],
    intro:
      "QualifiedLeadsX is a lead generation agency for Florida service businesses: insurance agencies, real estate investors, HVAC and home service companies, and med spas from Miami to Tampa Bay. We run the ads, qualify every lead, follow up within minutes and book qualified people into your calendar. Pricing is a custom management fee plus ad spend, and our published Florida HVAC campaign collected $65,872 net from $5,628 in ads.",
    marketIntro:
      "Florida has added more than 1.8 million people since the 2020 census base. The official state figures:",
    facts: [
      { value: "23,372,215", label: "people living in Florida (July 2024 estimate), up from 21,538,192 at the 2020 census base", source: POPST_SRC, sourceUrl: POP_URL },
      { value: "633,353", label: "business establishments in Florida in 2022", source: CBPST_SRC, sourceUrl: CBPST_URL },
      { value: "9,628,867", label: "paid employees at Florida establishments in 2022", source: CBPST_SRC, sourceUrl: CBPST_URL },
    ],
    proofIntro: "Our published Florida result, plus national campaigns that fit Florida's biggest service categories:",
    proof: [local(P.flHvac), national(P.finalExpense), national(P.luxuryRE)],
    servicesIntro: "What Florida businesses hire us for:",
    whoFor:
      "Florida's service economy is broad, but the businesses that hire us cluster around a few categories: insurance agencies licensed in the state, HVAC and home service companies, real estate investors, and med spas. Each campaign is built for its city or region, from South Florida to Tampa Bay, Orlando or Jacksonville, and every lead is exclusive to your business. Start with the Miami or Tampa page if you are based there, or book a call to plan a statewide campaign.",
    services: [
      { title: "Insurance and final expense leads", text: "Exclusive leads for Florida-licensed agents; published final expense leads at $7.79.", href: "/for/insurance-agencies", linkText: "Lead generation for insurance agents" },
      { title: "HVAC leads", text: "Booked in-home visits for HVAC companies, reported through to installs.", href: "/hvac-leads", linkText: "HVAC leads" },
      { title: "Real estate investor leads", text: "Motivated seller leads and buyer appointments across Florida markets.", href: "/for/real-estate-investors", linkText: "Lead generation for real estate investors" },
      { title: "Med spa bookings", text: "Consultations booked and reminded for aesthetics clinics.", href: "/for/med-spas", linkText: "Lead generation for med spas" },
    ],
    pricing: PRICE_BASE,
    faqs: [
      { q: "Which Florida cities do you work in?", a: "All of them. We have dedicated pages for Miami and Tampa, and campaigns can target any Florida city, county or ZIP code you serve." },
      { q: "Do you have Florida results?", a: "Yes. A Florida HVAC company collected $65,872 net from $5,628 in ads, with 125 booked appointments at $45 each." },
      { q: "Can you generate insurance leads for Florida agents?", a: "Yes. Leads come from your own campaign, only in the states you are licensed in, and are exclusive to your agency." },
      { q: "What do Florida lead generation companies charge?", a: "Most charge a retainer, a price per lead or a price per appointment. We charge a custom management fee plus ad spend and report cost per appointment and per sale." },
      { q: 'Can one campaign cover several Florida cities?', a: 'Yes. A single campaign can target several metros or the whole state, with separate ad sets per area so you can see the cost per appointment in each city.' },
    ],
    nearby: "Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale, St. Petersburg and the rest of the state.",
    parent: HUB,
    siblings: [{ name: "Texas", href: "/lead-generation-agency/texas" }],
    children: [{ name: "Miami", href: "/lead-generation-agency/miami-fl" }, { name: "Tampa", href: "/lead-generation-agency/tampa-fl" }],
    industries: [{ name: "Insurance agents", href: "/for/insurance-agencies" }, { name: "Real estate investors", href: "/for/real-estate-investors" }],
  },
  {
    slug: "texas",
    kind: "state",
    name: "Texas",
    region: "Texas",
    stateName: "Texas",
    title: "Lead Generation Agency in Texas | QualifiedLeadsX",
    description: "Lead generation agency for Texas businesses: mortgage, real estate, remodeling and solar leads with booked appointments. Houston and Dallas pages.",
    h1: "Lead Generation Agency in Texas",
    keywords: ["lead generation agency texas", "lead generation companies in texas"],
    intro:
      "QualifiedLeadsX runs lead generation for Texas businesses: mortgage teams, real estate investors, remodelers, solar companies and B2B service firms from Houston to Dallas-Fort Worth. We build the ads, verify and qualify every lead, follow up within minutes and book qualified prospects into your calendar. The fee is custom quoted plus ad spend, and Texas is where we have published the most campaigns.",
    marketIntro:
      "Texas has added more than two million people since the 2020 census base. The official state figures:",
    facts: [
      { value: "31,290,831", label: "people living in Texas (July 2024 estimate), up from 29,149,458 at the 2020 census base", source: POPST_SRC, sourceUrl: POP_URL },
      { value: "657,362", label: "business establishments in Texas in 2022", source: CBPST_SRC, sourceUrl: CBPST_URL },
      { value: "11,507,642", label: "paid employees at Texas establishments in 2022", source: CBPST_SRC, sourceUrl: CBPST_URL },
    ],
    proofIntro: "Published campaigns for Texas clients:",
    proof: [local(P.txMortgage), local(P.txRealEstate), local(P.txRemodel), local(P.txSolar)],
    servicesIntro: "What Texas businesses hire us for:",
    whoFor:
      "Texas is where we have published the most campaigns: mortgage, remodeling, solar and real estate clients, all with the ad spend shown. Businesses here often serve large metros with long drives between suburbs, so we target by ZIP code or radius and book appointments around your team's routes. Start with the Houston or Dallas page if you are based there, or book a call to plan a campaign for Austin, San Antonio or a statewide footprint.",
    services: [
      { title: "Mortgage leads", text: "OTP-verified purchase and refinance leads, from $4.31 per lead in a published Texas test.", href: "/mortgage-leads", linkText: "Mortgage leads" },
      { title: "Real estate investor leads", text: "Motivated seller leads; a Texas real estate client scaled past $22,000 a month in ad spend.", href: "/for/real-estate-investors", linkText: "Lead generation for real estate investors" },
      { title: "Home improvement appointments", text: "In-home estimates for remodelers and contractors.", href: "/for/home-improvement", linkText: "Home improvement leads" },
      { title: "B2B lead generation", text: "Qualified sales calls for Texas B2B service firms.", href: "/b2b-lead-generation", linkText: "B2B lead generation" },
    ],
    pricing: PRICE_BASE,
    faqs: [
      { q: "Which Texas cities do you cover?", a: "All of them. We have dedicated pages for Houston and Dallas, and campaigns can target Austin, San Antonio, Fort Worth or any ZIP code you serve." },
      { q: "Do you have Texas results?", a: "Yes, several: 823 verified mortgage leads, 542 remodeling leads in 30 days, 300 solar leads in 10 days, and a real estate business that scaled past $22,000 a month in ad spend." },
      { q: "Do you generate mortgage leads in Texas?", a: "Yes. Leads are verified by one-time code and qualified on loan type and timeline before they reach your loan officers." },
      { q: "What do Texas lead generation companies charge?", a: "Pricing models vary: retainers, per lead or per appointment. We charge a custom management fee plus ad spend and report cost per lead, appointment and sale." },
      { q: 'Can you target Austin and San Antonio too?', a: 'Yes. We do not have separate pages for them yet, but campaigns can target any Texas city, county or ZIP code you serve.' },
    ],
    nearby: "Houston, Dallas, Fort Worth, Austin, San Antonio, El Paso and the rest of the state.",
    parent: HUB,
    siblings: [{ name: "Florida", href: "/lead-generation-agency/florida" }],
    children: [{ name: "Houston", href: "/lead-generation-agency/houston-tx" }, { name: "Dallas", href: "/lead-generation-agency/dallas-tx" }],
    industries: [{ name: "Mortgage leads", href: "/mortgage-leads" }, { name: "Real estate investors", href: "/for/real-estate-investors" }],
  },
];

export const locationBySlug = (slug: string) => locationPages.find((l) => l.slug === slug);
export const cityPages = locationPages.filter((l) => l.kind === "city");
export const statePages = locationPages.filter((l) => l.kind === "state");
