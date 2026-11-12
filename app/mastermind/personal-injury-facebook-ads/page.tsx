import type { Metadata } from "next";
import Link from "next/link";
import { Crosshair, Users, Filter, Car, Shuffle, Search, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { founder, orgRef, publisherOrg, imageObject, faqPage, webPageNode, videoDate, WEBSITE_ID } from "@/lib/schema";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { VimeoPlayer } from "@/components/ui/VimeoPlayer";
import { TrustBar } from "@/components/sections/TrustBar";
import { ClientSuccess } from "@/components/sections/ClientSuccess";
import { Training } from "@/components/sections/Training";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqAccordion } from "@/components/sections/FAQ";
import { UFSquareMarquee } from "@/components/sections/UFSquareMarquee";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

const PATH = "/mastermind/personal-injury-facebook-ads";
const VIMEO_ID = "1245761641";
const POSTER = "/images/mastermind/personal-injury-sniper-method.jpg";
const VIDEO_TITLE = "Personal Injury Lead Generation: Sniper Method Mastermind";
const DESCRIPTION =
  "Sniper Method mastermind for PI law firms and agencies: find hidden Facebook audiences for car, motorcycle, 18-wheeler and rideshare accident cases.";

export const metadata: Metadata = {
  title: "Facebook Ads for Personal Injury Lawyers: Sniper Method",
  description: DESCRIPTION,
  keywords: [
    "facebook ads for personal injury lawyers",
    "personal injury lead generation",
    "facebook ads for personal injury law firms",
    "personal injury facebook targeting",
    "car accident leads facebook ads",
    "mva leads",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: "Sniper Method Mastermind: Facebook Ads for Personal Injury | QualifiedLeadsX™",
    description: DESCRIPTION,
    url: PATH,
    type: "website",
    images: [{ url: POSTER, width: 1280, height: 720, alt: VIDEO_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sniper Method Mastermind: Facebook Ads for Personal Injury",
    description: DESCRIPTION,
  },
};

const lessons = [
  { icon: Crosshair, title: "The Sniper Method", body: "Uncover hidden Facebook interest-targeting opportunities that most advertisers overlook." },
  { icon: Users, title: "Untapped Audiences", body: "Discover new audience segments beyond conventional Facebook interests." },
  { icon: Filter, title: "Up to 50% Narrower Targeting", body: "Learn how to eliminate irrelevant interests and build more focused audiences." },
  { icon: Car, title: "Accident-Victim Audience Research", body: "Explore targeting opportunities across car, motorcycle, 18-wheeler, and rideshare accidents." },
  { icon: Shuffle, title: "Cross-Niche Application", body: "Apply this research methodology across different personal injury campaigns." },
  { icon: Search, title: "Competitive Audience Research", body: "Discover new opportunities instead of repeatedly targeting the same audiences as everyone else." },
];

const benefits = [
  "Generate more relevant potential case inquiries.",
  "Discover new audience segments.",
  "Reduce wasted ad spend on irrelevant targeting.",
  "Build more focused advertising campaigns.",
  "Gain a competitive advantage in crowded personal injury markets.",
];

const faqs = [
  {
    q: "What is the Sniper Method?",
    a: "The Sniper Method is our audience research process for Facebook and Instagram ads. Instead of targeting the same broad legal and insurance interests every other firm uses, it finds hidden interest-targeting opportunities connected to the people most likely to need a personal injury attorney, then removes irrelevant interests so the audience stays focused.",
  },
  {
    q: "Who is this mastermind for?",
    a: "Personal injury law firms, agency owners, and agencies running Facebook ads for attorneys. It is useful whether you run your own firm's campaigns or manage campaigns for several firms.",
  },
  {
    q: "Which personal injury case types does it cover?",
    a: "Car accidents, motorcycle accidents, 18-wheeler and truck accidents, and rideshare accidents, plus how to apply the same research method to other personal injury campaigns.",
  },
  {
    q: "How long is the mastermind?",
    a: "The recording is 1 hour 33 minutes. You can watch it on this page.",
  },
  {
    q: "Can Facebook ads for personal injury use interest targeting?",
    a: "Yes. Legal services are not one of Meta's Special Ad Categories (housing, employment, credit, and social issues, elections or politics), so detailed interest targeting is available. Ads still have to follow Meta's advertising standards and your state bar's attorney advertising rules.",
  },
  {
    q: "Will this guarantee lower advertising costs?",
    a: "No. Narrower, more relevant targeting can lower cost per lead (in some campaigns by up to 50%), but results depend on your market, offer, creative, intake speed and budget.",
  },
  {
    q: "Can your team run our Facebook ads instead?",
    a: "Yes. If you'd rather have experts handle audience research, campaigns and optimization, book a call and we'll discuss your campaigns. See our Meta ads service for law firms for how we work.",
  },
];

export default function PersonalInjuryMastermindPage() {
  const pageUrl = `${site.url}${PATH}`;
  const webPage = webPageNode({ path: PATH, name: "Sniper Method Mastermind: Facebook Ads for Personal Injury", description: DESCRIPTION, dateModified: "2026-11-11", primaryImage: POSTER });
  const video = {
    "@type": "VideoObject",
    "@id": `${pageUrl}#video`,
    name: VIDEO_TITLE,
    description:
      "A 1-hour 33-minute mastermind on finding hidden Facebook audiences for personal injury cases (car, motorcycle, 18-wheeler and rideshare accidents) with the Sniper Method.",
    thumbnailUrl: `${site.url}${POSTER}`,
    uploadDate: videoDate("2026-11-11"),
    duration: "PT1H33M56S",
    embedUrl: `https://player.vimeo.com/video/${VIMEO_ID}`,
    url: pageUrl,
    inLanguage: "en-US",
    isFamilyFriendly: true,
    publisher: orgRef,
  };
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${pageUrl}#course`,
    name: "Sniper Method Mastermind: Facebook Ads for Personal Injury",
    description: DESCRIPTION,
    url: pageUrl,
    provider: orgRef,
    publisher: publisherOrg,
    instructor: founder,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    image: [imageObject(POSTER)],
    teaches: lessons.map((l) => l.title),
    video,
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage(`${pageUrl}#faq`, faqs)) }} />
      <BreadcrumbJsonLd
        items={[
          { name: "Mastermind", url: "/mastermind" },
          { name: "Personal Injury Sniper Method", url: PATH },
        ]}
      />
      <AnnouncementBar />
      <Nav />

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-ink pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(201,242,107,0.10),transparent)]" />
        <div className="container-x relative z-10 flex w-full flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow justify-center">Sniper Method mastermind</span>
          </Reveal>
          <h1 className="mt-4 max-w-5xl text-balance text-[clamp(1.4rem,3.6vw,3.1rem)] font-bold leading-[1.12] tracking-[-0.03em] text-fog">
            Discover Hidden Facebook Audiences That Can Help You Generate More{" "}
            <em className="text-gradient-lime not-italic">Qualified Personal Injury Cases</em> at Up to 50% Lower Advertising Costs.
          </h1>

          {/* Section 2: Mastermind video, directly under the headline */}
          <Reveal delay={0.05} y={24} className="w-full">
            <div id="video" className="mx-auto mt-6 max-w-4xl scroll-mt-28 sm:mt-8">
              <VimeoPlayer videoId={VIMEO_ID} title={VIDEO_TITLE} poster={POSTER} durationLabel="1:33:56" />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-lime">
                Watch the exclusive Sniper Method Mastermind
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 max-w-3xl text-pretty text-[0.85rem] leading-relaxed text-mist sm:mt-4 sm:text-base">
              Whether you&apos;re targeting car accidents, motorcycle accidents, 18-wheeler accidents, rideshare accidents, or other personal injury cases, discover our exclusive Sniper Method to uncover untapped Facebook audiences.
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-pretty text-[0.8rem] font-medium text-fog sm:mt-3 sm:text-sm">
              An exclusive 1-hour 33-minute mastermind for personal injury law firms, agency owners, and agencies running ads for attorneys.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-5 flex flex-col items-center gap-3 sm:mt-6 sm:flex-row sm:gap-4">
              <Button href={site.bookCallUrl} size="lg" icon="up-right" ariaLabel="Let's Discuss Your Campaigns">
                Let&apos;s Discuss Your Campaigns
              </Button>
              <Button href="#discover" variant="outline" size="lg">
                What You&apos;ll Discover
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.3} className="w-full">
            <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {[
                ["1h 33m", "Mastermind"],
                ["4", "Accident case types"],
                ["6", "Core lessons"],
              ].map(([v, l]) => (
                <li key={l} className="bg-panel px-4 py-4">
                  <span className="block font-mono text-2xl font-bold text-lime sm:text-3xl">{v}</span>
                  <span className="mt-1 block text-[11px] uppercase tracking-wider text-mist">{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <TrustBar />

      {/* Section 3: What you'll discover */}
      <Section id="discover" className="relative overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,242,107,0.06),transparent)]" />
        <SectionHeading
          eyebrow="What you'll discover"
          title={
            <>
              Inside this{" "}
              <em className="font-semibold not-italic text-lime">exclusive mastermind.</em>
            </>
          }
        />
        <ol className="relative z-10 mx-auto grid max-w-6xl list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((l, i) => {
            const Icon = l.icon;
            return (
              <li key={l.title} className="h-full">
                <Reveal delay={(i % 3) * 0.06} y={24} className="h-full">
                  <article className="group flex h-full flex-col rounded-3xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-lime/30 hover:bg-elevated">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-ink/60 text-lime transition-all duration-300 group-hover:border-lime/40 group-hover:bg-lime/10">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-sm font-bold text-lime/70">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-fog">{l.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-mist">{l.body}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Section 4: Why this matters */}
      <Section id="why" className="bg-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal y={20}>
            <span className="eyebrow">Why this matters</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
              Stop targeting the same audiences as{" "}
              <em className="font-semibold not-italic text-lime">every other personal injury agency.</em>
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-mist">
              Whether you operate a personal injury law firm or manage Facebook Ads for attorneys, finding untapped audience opportunities can help you:
            </p>
            <p className="mt-5 text-sm leading-relaxed text-mist">
              See it in practice in our{" "}
              <Link href="/case-studies/mva-personal-injury-leads-8810" className="text-lime underline underline-offset-2">MVA case study (8,810 leads at $7.61)</Link>{" "}
              and our{" "}
              <Link href="/meta-ads-for-law-firms" className="text-lime underline underline-offset-2">Facebook ads service for law firms</Link>.
            </p>
          </Reveal>
          <Reveal y={20} delay={0.1}>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-2xl border border-line bg-panel px-5 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                  <span className="text-[0.95rem] leading-relaxed text-fog">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Section 5: Our results (real client screenshots) */}
      <ClientSuccess
        eyebrow="Our results"
        title={
          <>
            We don&apos;t just talk about advertising.{" "}
            <em className="font-semibold not-italic text-lime">We deliver results.</em>
          </>
        }
        subtitle="Explore the real advertising performance and client results generated through our campaign strategies."
      />

      {/* Training videos: same section as the homepage */}
      <Training />

      <Testimonials />

      <FaqAccordion
        items={faqs}
        eyebrow="Questions, answered"
        title={
          <>
            Sniper Method Mastermind <em className="font-semibold not-italic text-lime">FAQ.</em>
          </>
        }
        subtitle="Straight answers about the mastermind and our personal injury campaigns."
        ctaLabel="Let's Discuss Your Campaigns"
      />

      {/* Section 6: Want us to run your ads? */}
      <div className="py-12 sm:py-16">
        <CTABanner
          eyebrow="Want us to run your ads?"
          title={
            <>
              Want our team to generate{" "}
              <em className="font-semibold not-italic text-lime">qualified personal injury leads</em> for you?
            </>
          }
          description="If you'd rather have experts handle your Facebook Ads, audience research, and campaign optimization, our team can help. Let us take care of your advertising while you focus on growing your law firm or agency."
          ctaLabel="Let's Discuss Your Campaigns"
          notes={["Personal injury & MVA campaigns", "Law firms and agencies"]}
        />
      </div>

      {/* Live client call recordings: same strip as the homepage */}
      <UFSquareMarquee />

      <Footer />
    </main>
  );
}
