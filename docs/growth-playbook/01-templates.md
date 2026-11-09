# QualifiedLeadsX page templates (Site Growth Playbook, STEP 3)

These are the five page templates filled in for QualifiedLeadsX. Every page built from them must be at least 40% unique. A page that only swaps the city or industry name is a doorway page: do not publish it.

Facts every template can use (all already on the live site):

- Done-for-you client acquisition: Meta ads, funnels, CRM, AI follow-up and appointment setting
- $50M+ managed in Meta ads, 12+ years of experience, 125+ documented case studies across 30+ niches
- Two plans, both custom quotes: Meta Ads Management, and Full-Service Growth
- 90-day written guarantee: if the agreed milestones are not reached in 90 days, work continues with no management fee until they are
- Clients own the ad account, funnels, CRM, automations, creatives and data
- Remote service in the United States, United Kingdom, Canada and Australia
- Registered address: Ecom Expertz LLC, Sheridan, Wyoming. There are no local offices.
- Founder: Gaurav, Founder and Head of Acquisition

Anything else is written as **[fill in]** and listed in `07-fill-in-facts.md`.

Shared rules for every template:

- One H1, which holds the primary keyword
- Title of 60 characters or fewer: keyword first, then " | QualifiedLeadsX™" when it fits
- Meta description of 155 characters or fewer, ending in a call to action
- Text is server-rendered, so it shows with JavaScript off
- The related-links block is added automatically above the footer by `lib/related-links.ts`

---

## 1. Location page: `/locations/[country]` (and `/locations/[city]` only where real)

**Scope rule.** QualifiedLeadsX works remotely and has no local office anywhere. The four country pages are allowed because the business serves those countries. A city page is allowed only when there is a real client or result from that city **[fill in]**. Never add `LocalBusiness` schema or an address on these pages.

| Block | Content for QualifiedLeadsX |
|---|---|
| H1 | Lead Generation Agency for [Country] Businesses |
| Opening, 60 to 80 words | Who does done-for-you lead generation for [country] coaches, agencies and B2B firms, and how it is priced: a custom quote after a free call. Name QualifiedLeadsX. |
| H2: Why [Country] businesses choose QualifiedLeadsX | 3 to 4 points, at least one specific to the market: time-zone coverage **[fill in]**, currency and billing **[fill in]**, ad rules (for example UK FCA wording for financial services, Australian AHPRA rules for health clinics), and Meta CPM in that market from `/benchmarks/meta-ads-cpm` |
| H2: Lead generation for [Country] industries | 4 to 6 industry pages that are common in that market, each linked |
| H2: Results | A real case study from that country **[fill in]**. Otherwise use the closest case study, labelled "Result from a client outside [country]". |
| H2: How we work and pricing | The 4 steps from the Process section, and the two plans. No price unless one is published **[fill in]**. |
| H2: Other markets we serve | Links to the other three country pages and to `/locations` |
| H2: FAQ | 4 to 6 questions, answered in 2 to 3 sentences each |
| CTA | Book a free 30-minute strategy call |
| Length | 900 to 1,500 words |
| Schema | `Service` with `areaServed` set to the country, `FAQPage`, `BreadcrumbList` |

## 2. Industry page: `/for/[industry]`, `/meta-ads-for-[industry]`, `/appointment-setting-for-[industry]`

The existing URL patterns stay as they are. `/for` is the industries hub, so there are no redirects.

| Block | Content for QualifiedLeadsX |
|---|---|
| H1 | [Service] for [Industry], for example "Meta Ads for Agencies" |
| Opening, 60 to 80 words | The main acquisition problem this industry has, and how the service fixes it |
| H2: Why [industry] need [service] | 3 to 5 industry-specific reasons. Numbers come from `/benchmarks` or a named source. |
| H2: What we do for [industry] | The service in 4 to 6 steps, adapted to the industry's sales cycle |
| H2: Opportunities [industry] should target | Offers, angles, audiences and keywords specific to the industry |
| H2: Results | A case study from this industry, or the closest one, clearly labelled |
| H2: Mistakes [industry] make | 3 to 5 points |
| H2: FAQ | 4 to 6 questions |
| CTA plus related links | Automatic |
| Length | 1,000 to 1,800 words |
| Schema | `Service` with `audience` set to a `BusinessAudience` for the industry, `FAQPage`, `BreadcrumbList` |

## 3. Core service page: `/[service]` and `/pricing`

| Block | Content for QualifiedLeadsX |
|---|---|
| H1 | Service name with the main keyword, for example "Appointment Setting Agency" |
| Opening, under 80 words | What the service is, who it is for, and the main result |
| H2: What's included | Bullet list of deliverables |
| H2: How it works | Numbered steps: strategy call, build, launch, optimize |
| H2: Pricing or packages | The two plans and what drives the quote. Ranges only if published **[fill in]**. |
| H2: Results and case studies | 2 to 3 linked case studies |
| H2: Who it's for | Links to 4 or more industry pages |
| H2: Where we work | The four countries, linked to `/locations` |
| H2: FAQ | 5 to 8 questions |
| CTA plus related links | Automatic |
| Length | 1,500 to 2,500 words |
| Schema | `Service`, `OfferCatalog` (the plans, with no price unless one is published), `FAQPage`, `BreadcrumbList`. Add `AggregateRating` only with real, verifiable reviews **[fill in]**. |

## 4. Free tool page: `/tools/[tool]`

| Block | Content for QualifiedLeadsX |
|---|---|
| H1 | Free [Tool Name] |
| Top of page | The working calculator, with no sign-up. Default values come from the matching benchmark page. |
| H2: How to use the [tool] | 3 to 5 steps |
| H2: What the results mean | Ranges compared with `/benchmarks` |
| H2: How to fix common issues | Each fix links to the matching service page |
| H2: FAQ | 4 to 6 questions |
| CTA plus related links | Automatic: other tools, 2 services, 2 guides |
| Length | 600 to 1,200 words below the tool |
| Schema | `WebApplication` with `offers.price` set to 0, `FAQPage`, `BreadcrumbList` |

## 5. Blog post: `/blog/[topic]`

| Block | Content for QualifiedLeadsX |
|---|---|
| H1 | The question or topic keyword |
| First paragraph | A 40 to 60 word direct answer |
| H2s | One sub-question each, with tables and lists where they help |
| Links | At least 3 descriptive links to core service, industry or tool pages |
| End of post | FAQ, author box (Gaurav, or another real named author **[fill in]**), published and updated dates |
| Length | 1,200 to 2,500 words |
| Schema | `BlogPosting`, `FAQPage`, `BreadcrumbList` (already generated by `app/blog/[slug]/page.tsx`) |
| Topic rule | Every post supports at least one page in the plan. The "supports" column in `reports/playbook-page-plan.csv` names it. |
