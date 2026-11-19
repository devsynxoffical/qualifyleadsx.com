# SEO / AEO / GEO work log

One entry per working session. Every item marked done was implemented, built and checked
(type check, lint, `npm run seo:validate`, `npm run seo:links`) before it was pushed.
"Live" means pushed to `main`; Hostinger deploys from `main`.

Daily metrics come from `npm run seo:daily` (Search Console) and are stored in
`reports/seo-tracking.csv`.

---

## 2026-11-10 (session 2)

**Data:** last 28 days: 351 impressions, 6 clicks, 57 pages and 51 queries with impressions,
3 queries on page 1. Last 7 days: 135 impressions, 1 click, average position 53.8.
91 of 112 sitemap URLs indexed (URL Inspection, 10 Nov).

**New queries found:** solar appointments cluster (6 queries, positions 48–95), virtual
assistant appointment setter cluster (4 queries, 45–80), "best practices for facebook ads
management for coaches" (61.5), "bid strategy calculator" (47.5).

**Done**
- `/for/solar-companies`: new section comparing bought vs exclusive solar appointments,
  two real solar campaign results, 5-step process, 3 FAQs; title "Solar Appointment
  Setting: Exclusive, Pre-Qualified Leads".
- `/compare/appointment-setter-vs-va`: "What is a virtual appointment setter?" answer,
  comparison table, when to use each, 2 FAQs; title "Appointment Setter vs Virtual
  Assistant (VA): Which to Hire".
- `/blog/meta-ads-for-coaches-guide`: "Best practices for Facebook ads management for
  coaches" section and matching FAQ.
- Removed visitor-facing "AEO Direct Answer" / "(AEO / GEO)" labels on 55 files; the
  answer blocks now read "Quick answer" (content and structured data unchanged).
- `scripts/seo-daily.mjs` (`npm run seo:daily`): daily Search Console tracking, new-query
  detection and striking-distance list.

---

## 2026-11-10 (session 3): Google Analytics 4

**Done**
- GA4 tag `G-QQLRYFBWPL` (stream "Qualifiedleadsx", ID 16314271000) on every page, loaded
  after the page is interactive.
- Lead events sent to GA4 (verified in a browser against the production build):
  `generate_lead` (form=booking) on booking-form submit, `generate_lead` (form=email_optin) on
  the email opt-in forms, `contact` (method=whatsapp) on WhatsApp clicks, `view_booking_form`
  when the booking form is shown. Meta Pixel events are unchanged.

**Owner actions**
- In GA4 → Admin → Events (after the first events arrive, up to 24 h), mark `generate_lead`
  and `contact` as **key events**.
- In GA4 → Admin → Property access management, add the tracking service account as
  **Viewer** so the daily session can report organic leads.
- Link GA4 to Search Console (Admin → Product links → Search Console links).

## 2026-11-11 (daily session)

**Data (Search Console):** last 28 days: 382 impressions (was 351), 6 clicks, 60 pages
(was 57), 54 queries (was 51), 4 on page 1 (was 3). Last 7 days: 148 impressions, 1 click,
average position 52.5. New queries: "speed to lead statistics" (88), "lead generation
calculator" (64), a Turkish SaaS lead-gen question (/for/saas, position 1).

**Indexing:** 35 URLs submitted to the Indexing API at 04:15 UTC; all rejected with 429
("Publish requests per day" already used by the shared Google Cloud project). A retry is
scheduled for 08:20 UTC, after the quota reset. **Retry at 08:21 UTC: 38 URLs submitted, 38 accepted, 0 failed**
(the 21 not-indexed sitemap URLs plus 17 new or updated pages from 10–11 Nov). Accepted means
Google received the crawl request; it is not confirmation of indexing.

**Done**
- New tool `/tools/meta-ads-bid-strategy-calculator` ("bid strategy calculator" query on
  /tools): cost cap per lead and per booked call, target and break-even cost per client,
  strategy recommendation from Meta's ~50 events/week learning threshold. Added to the tools
  hub, footer, related links, sitemap, IndexNow list and llms.txt. Maths checked by hand.
- `/meta-ads-for-law-firms` (239 → 633 unique words): four real MVA/PI results, intake
  process, 2 FAQs; title "Facebook Ads for Law Firms: Exclusive MVA & PI Leads".
- `/meta-ads-for-med-spas` (230 → 490): two real results, best practices, FAQ.
- `/meta-ads-for-real-estate-investors` (227 → 510): two real results, seller offers,
  2 FAQs targeting "motivated seller leads"; title "Facebook Ads for Real Estate Investors:
  Seller Leads".

## 2026-11-11 (session 2: fresh audit + Bing Webmaster Tools)

**Google index audit (URL Inspection, all 119 sitemap URLs, ~08:40 UTC):** 98 indexed
(was 91/112 on 10 Nov), 17 "Discovered – not indexed", 4 unknown. All 7 pages published
10–11 Nov were indexed within ~24 h (both calculators, 3 case studies, 2 guides). No
canonical conflicts. 8 rich-result FAILs are pages last crawled before the 10 Nov breadcrumb
fix went live; they should clear on recrawl. 12 updated URLs submitted to the Indexing API
(12 accepted).

**Pages improved:** /for/real-estate-investors (225 → 573 unique words; owns "motivated seller
leads", "investor lead broker", "pre-qualified investor leads"); /meta-ads-for-real-estate-
investors refocused on Facebook ads + Meta Housing Special Ad Category; CPA vs CPL post
(330 → 731, title matches the query); lead-gen cost post (quick cost summary + FAQ);
high-ticket sales post (title); /benchmarks/close-rate (title/description lead with
numbers; position 3.5, 0 clicks); /meta-ads-agency (description no longer says
"guaranteed booked calls"); cost per booked call calculator ("cost per qualified meeting");
blog hub links to the service pages; breakdowns on the 3 unindexed case studies.

**Bing Webmaster Tools (API):** site verified; ~27 pages in Bing's index; 0 impressions;
sitemap last read 4 Nov with 29 URLs. Resubmitted sitemap.xml + 3 child sitemaps (Bing read
all four on 11 Nov: 36/31/52 URLs, Success). Submitted 100 priority URLs with SubmitUrlBatch
(daily quota 100 → 0). IndexNow rejects the key ("UserForbiddedToAccessSite") although the
key file is live.

**Crawler access check (`npm run seo:bots`):** Googlebot, OAI-SearchBot, PerplexityBot,
ClaudeBot and browsers get 200. Requests with a "bingbot" user agent get 403 from
Hostinger/LiteSpeed on every URL, and GPTBot gets 429. These tests come from a non-Microsoft
IP, so the 403 may be bot verification; Bing's real sitemap fetch succeeded today. Needs an
owner check (below).

**Tooling:** `npm run seo:bots` (crawler access), `npm run seo:bing` (Bing status / sitemap
and URL submission; key via BING_WEBMASTER_API_KEY, never committed). Node needs
`NODE_USE_ENV_PROXY=1` in this cloud environment. New personal environment
"qualifyleadsx.com" allows Bing, IndexNow, the live site and Google APIs.

**Owner actions**
- Bing Webmaster Tools → URL Inspection → "Live URL" on the homepage: confirm Bingbot gets 200.
- If it does not, or IndexNow keeps failing: in hPanel check the website's security / bot
  protection settings, or ask Hostinger support to allow verified Bingbot and Microsoft's
  IndexNow key verifier (evidence: LiteSpeed returns 403 to user agents containing
  "bingbot"/"adidxbot" on every URL, including robots.txt and the key file).
- Optional: GPTBot gets 429; allow it if you want OpenAI training crawls (ChatGPT search
  uses OAI-SearchBot, which is allowed).

## 2026-11-12 (daily session)

**Data (Search Console):** last 28 days: 423 impressions (was 382 on 11 Nov), 6 clicks, 62 pages
(was 60), 62 queries (was 54), 4 on page 1. Last 7 days: 177 impressions, 1 click, average
position 54.9. New queries (8): "cost per qualified meeting" (11 impressions, position 83, cost
per booked call calculator), "outsourced closers" (34), "speed to lead stats" (34), "speed to lead
study" (97), "speed to lead ai" (65), "med spa lead generation" (77), "meta ads coaching" (91),
"digital customer acquisition agency" (87). Striking distance: "the closer matrix reviews" (8.2),
"facebook ads targeting for high ticket products" (18.5), "b2b roas" (14.3); all three pages were
retitled 10–11 Nov, so left unchanged to let Google re-evaluate.

**Done (live, verified on www.qualifiedleadsx.com)**
- `/outsourced-sales-closers`: title "Outsourced Sales Closers: Commission-Based Closers"; new
  section on what outsourced closers do and when to hire them, outsourced vs in-house table,
  three checks before hiring, 2 FAQs. Only facts already on the page (10–15% commission,
  $3K–$25K offers, weekly call audits, 14-day onboarding).
- Cost per booked call calculator: title and H1 now include "Qualified Meeting"; quick answer
  defines cost per qualified meeting.
- Speed to lead statistics post: studies heading names HBR, MIT and InsideSales.com.
- New page (built 11 Nov at the owner's request): `/mastermind/personal-injury-facebook-ads`
  (Sniper Method mastermind with Vimeo video); description shortened to 148 characters.

**Indexing:** Google Indexing API: 27 submitted, 27 accepted (new mastermind page, mastermind
hub, today's 3 changed pages and the not-indexed sitemap URLs from the 11 Nov inspection). Bing:
27 URLs submitted. Accepted means the crawl request was received, not that the page is indexed.

**Checks:** Googlebot, OAI-SearchBot, PerplexityBot, ClaudeBot 200; Bingbot 403 and GPTBot 429
(unchanged, owner action below). Bing: sitemaps read 11 Nov, 0 impressions, 0 crawl issues.

## 2026-11-12 (session 2: full strategy pass)

Full report: `reports/QualifiedLeadsX_SEO_Strategy_Report_Nov_12_2026.html` (and .pdf).

**Index audit (URL Inspection, all 120 sitemap URLs):** 99 indexed (was 98/119), 12 "Discovered –
not indexed", 9 unknown (includes the PI mastermind page published 11 Nov). All 120 return 200
live. 8 rich-result FAILs and 3 calculator canonical mismatches are stale crawls (6–10 Nov,
before earlier fixes); verified clean live, recrawl requested.

**Done (live, verified)**
- Cannibalisation / wrong page: homepage now targets "client & customer acquisition agency"
  (23 impressions were landing on /for/agencies) with a new FAQ; /for/agencies links that phrase
  to the homepage. /lead-generation-agency owns "qualified lead generation services" and no longer
  says "30–50 calls guaranteed". /high-ticket-lead-generation title adds "Agency" and the blog hub
  links to it with the exact anchor. /appointment-setting title: "Qualified Appointments Booked".
- CAC benchmarks post description leads with its own figures; solar FAQ on preset residential
  appointments.
- New guide `/blog/buy-qualified-leads-vs-generating-your-own` for the "buy qualified/coaching
  leads, buy solar appointments, qualified b2b leads, investor lead broker" cluster (real
  campaign data only).
- Results gallery (ClientSuccess): 60 screenshots to WebP with width/height, 48.2 MB → 3.6 MB.
  Mobile full-scroll image bytes: homepage 9.8 → 1.6 MB, PI mastermind 9.3 → 1.2 MB.

**Indexing:** Google 15 more accepted (42 today in total), Bing 15 more (42 today).

**Backlog additions**
- Homepage mobile TBT 2.6 s (lab): profile and defer animated shader backgrounds and
  below-the-fold video on mobile without changing the design.
- Re-inspect the 8 rich-result pages and 3 calculators on 15–16 Nov.
- Check positions for customer acquisition agency / qualified lead generation services / high
  ticket lead generation in 7–10 days.

**Owner actions (authority):** Source of Sources, Qwoted, Featured.com and Help a B2B Writer for
expert-quote links using the /benchmarks data; agency/coaching podcast guesting; Clutch and
DesignRush profiles with 3–5 reviews.

## 2026-11-12 (session 3: homepage speed)

**Root cause (CPU profile, mobile, 4x CPU):** the WebGL hero (three.js with three post-processing
passes, two of them bloom) caused about 3.5 s of the homepage's ~4 s Total Blocking Time; with its
chunk blocked, TBT was ~0.56 s.

**Fix (live, verified):** on phones and low-core devices the hero renders at 1x pixel density,
at most 30 fps, and draws one fully faded-in frame on load; the animation loop starts on the first
scroll, touch or key press (the hero is scroll-driven). Unused shadow map removed. Desktop unchanged.

**Result (lab, live site):** TBT 3.5–5.2 s → 1.0–1.25 s (4x CPU). With slow 4G (cwv.cjs): LCP
2.7 s → 1.2 s, TBT 2.6 s → 1.1 s, CLS 0. Before/after screenshot:
`reports/screenshots/homepage-hero-before-after-mobile.png`.

## 2026-11-13 (daily session)

**Data (Search Console):** last 28 days: 448 impressions (was 423), 6 clicks, 65 pages (was 62),
66 queries (was 62), 5 on page 1 (was 4). Last 7 days: 194 impressions, 1 click, average position
55.7. New queries: "buy investor leads" (85.5), "meta ads for med spa" (79), "lead qualifying
services" (57), "qualified case studies" (7). Striking-distance pages unchanged (retitled 10–11 Nov).

**Bing:** 66 pages in Bing's index (was ~27 on 11 Nov); first Bing impression recorded. Bingbot user
agent still gets 403 from Hostinger in our test; GPTBot 429.

**Done (live, verified)**
- Thin service-for-industry pages upgraded with page-specific sections and 2 FAQs each, real case
  data only: `/appointment-setting-for-coaches` (321 → 433 unique words; coaching cases $203,941,
  $157,184, $150,348), `/appointment-setting-for-agencies` (300 → 384; $846K and $639K agency
  cases), `/meta-ads-for-saas` (312 → 409; AI SaaS 320 customers, $71,934 in 24 days, 2.78 ROAS).
  New titles on all three.
- `/meta-ads-for-med-spas`: title and H1 "Meta & Facebook Ads for Med Spas".
- `/for/real-estate-investors`: FAQ for "buy investor leads" and a link to the buying-leads guide.

**Indexing:** Google 25 submitted, 25 accepted (today's 5 pages + 20 not-indexed sitemap URLs from
the 12 Nov inspection). Bing: 25 submitted.

**Next:** remaining thin pages (meta-ads-for-coaches, -consultants, -course-creators,
-financial-advisors, appointment-setting-for-consultants, -saas); re-inspect all sitemap URLs on
15–16 Nov.

## 2026-11-13 (session 2: master SEO/AEO/GEO prompt)

Full report: `SEO_FIX_REPORT.md`. Baseline and after audits: `audit/baseline.*`, `audit/after.*`.
Done (live, verified): robots for all bots, single-hop 301s, OG image on every page (71 missing),
Reveal performance fix (home TBT 3.28 to 2.59 s live), 3 merges (301 via middleware) and 3 noindexes,
8 thin pages upgraded today, brand-facts source, founder Gaurav Kapoor + /about/gaurav-kapoor,
bylines and real updated dates, short answers on 15 money pages, llms-full.txt, GEO prompts,
5 new GA4 events. Indexing: Google 21 accepted, Bing 21 submitted.
Open: Hostinger blocks Bingbot/Applebot (403) and GPTBot (429); home Lighthouse 51; 46 pages under 5 FAQs.

## 2026-11-14 (daily session)

**Data (Search Console):** latest day 33 impressions (highest single day so far); last 7 days 233
impressions (was 194), 1 click; last 28 days 499 impressions (was 448), 6 clicks, 71 pages, 77
queries (was 66), 5 on page 1. New queries (11) include "hvac meta ads" (3), "lead conversion rate
calculator" (90), "roas benchmarks by industry" (38), "alternatives to qualified" (81).

**Done (live, verified)**
- New tool `/tools/lead-conversion-rate-calculator`: booking, show, close and lead-to-client
  rates, revenue per lead, weakest stage (compared only with the site's published 58.2% show rate
  and 24-31% close rate). Tested in a browser; added to tools hub, footer, related links, content
  sitemap, IndexNow list and llms.txt.
- B2B ROAS post: title "B2B ROAS Benchmarks by Industry (2026)" and a section of ROAS figures
  from published case studies, each linked (HVAC 12.70, med spa ~7.1x, LTO 3.32x, membership
  ~3.0x, AI SaaS 2.78, booking funnel 2.72).
- HVAC guide title: "Facebook & Meta Ads for HVAC Companies: Real Numbers".

**Indexing:** URL Inspection on all 117 sitemap URLs: 97 indexed (99/120 on 12 Nov; merged pages
removed), 12 discovered not indexed, 7 unknown. Newly indexed: /about/gaurav-kapoor,
/b2b-lead-generation, /blog/buy-qualified-leads-vs-generating-your-own,
/mastermind/personal-injury-facebook-ads. Rich-result FAILs: same 8 pages, all last crawled
6-10 Nov (before the fix). Google Indexing API: 4 accepted; Bing: 4 submitted.

**Owner actions unchanged:** Hostinger blocks Bingbot (403) and GPTBot (429); GSC "Validate fix"
on Breadcrumbs.

## 2026-11-15 (daily session)

**Data (Search Console):** latest day 44 impressions (new high); last 7 days 273 impressions (was
233), 1 click, average position 51.4 (was 54.8); last 28 days 553 impressions (was 499), 6 clicks,
73 pages, 87 queries (was 77), 8 on page 1 (was 5). New queries (10) include "how to get marketing
qualified leads" (position 6.7), "va appointment setter" (36), "appointment setting virtual
assistant" (60.5), "lead generation roi calculator" (94), "meta ads for hvac contractors" (91).

**Done (live, verified)**
- `/blog/how-to-qualify-leads`: title "How to Qualify Leads and Get Marketing Qualified Leads",
  new description; the 5-point checklist is now listed (budget, authority, need, timeline, fit);
  new section on getting MQLs and MQL vs SQL; 2 FAQs.
- `/compare/appointment-setter-vs-va`: FAQ "Should I hire a VA appointment setter?".
- `/tools`: ROAS calculator described as a lead generation ROI calculator.
- Commits are now authored by DEVSYNX with no Claude attribution (owner request, 14 Nov).

**Indexing:** Google Indexing API 23 accepted (3 changed pages + the 20 not-indexed sitemap URLs
from the 14 Nov inspection); Bing 23 submitted. Bing: 68 pages in index.

**Owner actions unchanged:** Hostinger blocks Bingbot (403) and GPTBot (429).

## Backlog (highest impact first)

1. Resubmit the 21 not-indexed URLs and the new URLs to the Indexing API (quota resets daily).
2. Done 11 Nov: bid strategy calculator. Next tool candidate: "lead generation calculator" (pos 64 on /tools).
3. Striking distance: /blog/high-ticket-sales-training-framework (8.2), broad targeting post
   (18.5), B2B ROAS post (14.3), /meta-ads-agency (8.2): CTR-focused titles and answer blocks.
4. Thin service-for-industry pages (meta-ads-for-*, appointment-setting-for-*): upgrade in
   batches of 3–5 using real case data.
5. Align booked-call cost on /blog/how-much-does-meta-ads-cost ($140–$280) with the
   benchmark pages ($90–$180).
6. The 10 original named case studies: add written breakdowns like the 3 published on 10 Nov.
7. Done 12 Nov: homepage mobile TBT (3D hero) cut to ~1 s.
8. New supporting guides only where a query cluster appears in Search Console.

## Needs the owner (cannot be done from the codebase)

- **Directory and citation profiles** (backlinks + AI-search mentions): Clutch, DesignRush,
  GoodFirms, Sortlist, G2 services, Crunchbase, LinkedIn company page. Copy is ready in
  `docs/growth-playbook/brand-profile-kit.md`.
- **Reviews** on Clutch / Google from 3–5 clients (needed before any review schema).
- **Google Analytics 4 access** for the tracking service account (Viewer), so organic leads
  and conversions can be tracked; Search Console covers impressions and clicks only.
- **Search Console:** resubmit `/sitemap.xml`; "Validate fix" on the Breadcrumbs report.
- **Bing Webmaster Tools:** add the site and submit the sitemap (feeds ChatGPT search and Copilot).
- **OpenSEO credits** (4 left) if keyword-volume, backlink or AI-visibility data is wanted.

## 2026-11-16: Google Business Profile (locations/6499443464649758122, via Windsor)
- Status: API reports OPEN; re-asserted OPEN. `has_google_updated=true`: Google-applied edits are waiting for the owner's review (likely source of the "Permanently closed" label).
- Updated: description (no URL), website https://www.qualifiedleadsx.com/, primary phone +91 96256 95456, 8 service items, appointment link /book-your-call.
- Photos uploaded from /gbp/: logo (profile), cover, 5 client-result screenshots (AT_WORK).
- 3 posts published: HVAC case study (Learn more), Lead Conversion Rate Calculator (Learn more), open-for-clients post (Book).
- Owner-only: review Google updates in the dashboard, remove keyword stuffing from the business name, add real office/team photos.

## 2026-11-16 (daily run, 08:44 UTC)
**Measured:** GSC last 28 days 620 impressions, 6 clicks, 80 pages, 97 queries, 8 on page 1; last 7 days 305 impressions, 1 click, avg position 47.9. 10 new queries (top: "marketing efficiency ratio calculator" pos 18 → /tools). Bing: 68 indexed, 0 crawl issues, 3 impressions in 18 days.
**Indexing:** Bing 23 URLs submitted (all not-indexed sitemap URLs + 3 changed pages). Google Indexing API 6 accepted today (plus 12 earlier today with the diagnosis).
**Done:** no page edits. Following SEO_DIAGNOSIS_2026-11-16.md: core-page metadata freeze until 14 Dec; striking-distance pages (b2b ROAS post, broad-targeting post) already have 5+ internal links.
**Backlog:** backlink plan (docs/backlink-plan-qualifiedleadsx.pdf, local only, PDFs are gitignored); re-check on 30 Nov whether /lead-generation-agency replaced /for/agencies for "customer acquisition agency"; /blog/how-to-qualify-leads is "crawled, not indexed" despite pos 9.6 for "how to get marketing qualified leads": resubmitted, do not rewrite again.
**Owner actions:** week 1 of the backlink plan (Clutch, G2, DesignRush, LinkedIn company page, Crunchbase, 5 review requests); decide the address rule (Wyoming vs Delhi).

## 2026-11-16 (PM): personal injury leads
**Demand (Keyword Planner, US, Nov 2025–Oct 2026, from the user):** personal injury leads 100–1K (3-month +900%), personal injury lead generation 100–1K, lead generation (for) personal injury 100–1K, personal injury leads for attorneys 10–100, personal injury leads for sale 10–100, personal injury lead generation companies 10–100. Credit repair leads / credit repair lead generation 100–1K each.
**Done:** new /personal-injury-leads (title "Personal Injury Leads: Exclusive MVA Lead Generation"). Only numbers from the MVA case study; answers "for sale" honestly (we don't resell leads). Linked from /for/law-firms, PI mastermind, MVA case study, law-firm related links, sitemap, llms.txt, llms-full.txt. Live (HTTP 200, verified). Google Indexing API 4 accepted, Bing 4 submitted.
**Not done, needs the owner:** credit repair leads page. The site has no credit repair client, campaign or result to build it on; waiting for real data.
**Flagged:** /for/law-firms and /meta-ads-for-law-firms show stats with no source on the site (3.8x pipeline growth, 83–84% show rate, "100% state bar compliant", "15 to 35 retainers monthly", "80% lower cost than Google"). Owner to confirm or remove.
**Seen:** a Clutch profile (clutch.co/profile/qualifiedleadsx) was added to schema sameAs, the footer and About page upstream.

## 2026-11-17: SEO/AEO/GEO cycle (see SEO_REPORT_2026-11-17.md)
**Done:**
- 23 titles shortened to 60 characters or fewer (keyword prefix kept).
- 6 descriptions trimmed to 155 characters or fewer.
- Unsourced law-firm stats replaced with the MVA case study figures.
- llms files list the Clutch, Crunchbase and Trustpilot profiles.
- PI page added to the footer.
- AEO question on the broad-targeting post matched to its query.

**Indexing:**
- Google Indexing API: 6 accepted, 23 got 429 (quota); resubmit 18 Nov.
- Bing: 29 accepted.
- /blog/how-to-qualify-leads is now indexed.
- 13 URLs discovered but not indexed, 7 unknown to Google, 1 crawled but not indexed.

**Backlog:**
- Resubmit the 23 URLs to Google on 18 Nov.
- Measure the 16–17 Nov changes on 30 Nov.
- Homepage mobile performance.

**Owner:**
- Clutch and Trustpilot reviews.
- Credit-repair results.
- Confirm the $50M+ and $150M+ claims.
- Address rule.

## 2026-11-17 (daily run, 08:44 UTC)
**Measured:** GSC latest day 16 Nov: 70 impressions. Last 7 days: 324 impressions, 0 clicks, avg position 43.3. Last 28 days: 715 impressions, 6 clicks, 81 pages, 103 queries. 6 new single-impression queries, including "facebook ads for personal injury law firms" at pos 63 on the PI mastermind. "how to get marketing qualified leads" is now at 15.7 (was 6.7–9.6) since the post was re-indexed.
**Indexing:** Google Indexing API accepted all 23 URLs that hit the quota earlier today.
**Done:** no further page edits; today's cycle (SEO_REPORT_2026-11-17.md) already changed 28 pages.

## 2026-11-18: SEO/AEO/GEO cycle (see SEO_REPORT_2026-11-18.md)
**Done:**
- New /tools/mer-calculator and /tools/ad-frequency-calculator (GSC demand: pos 18 and 10.5 on the /tools hub).
- Mobile homepage: three.js deferred to first input, plus a hero still and preload. Live: TBT 1,320–2,510 → 730–860 ms, perf 46–52 → 52–60.
- 9 descriptions trimmed (0 over 155 now).

**Indexing:**
- 100 of 118 indexed (up from 97); the PI page is indexed.
- Google: 29 accepted.
- Bing: 25 accepted (after a temporary 503).

**Backlog:**
- 30 Nov measurement.
- Homepage hydration: convert static sections to server components.
- 18 URLs not indexed: crawl budget, waiting on authority.

**Owner:**
- Reviews.
- Tool-directory submissions.
- GA4 Data API plus property ID.
- Credit-repair data.

## 2026-11-18 (PM): Google Business Profile + niche lead pages
**GBP (locations/6499443464649758122, via Windsor):**
- Description rewritten to include "QualifiedLeadsX (Qualified LeadsX)", the founder and the MVA/PI/final expense services.
- Service items: 11 (added MVA & PI leads, final expense & burial insurance leads, mass tort).
- 9 photos uploaded: 3 training-call thumbnails and 6 client-result screenshots.
- 3 posts: MER calculator, MVA leads (8,810 at $7.61), final expense (2,440 at $7.79). All PROCESSING at creation; the 16 Nov HVAC post was still PROCESSING on 18 Nov.

**Website ↔ GBP:**
- Organization/WebSite alternateName.
- ProfessionalService node for the Delhi office (hasMap to the Maps listing).
- About page "Find QualifiedLeadsX on Google" block with a review link.
- Footer and llms.txt link.

**New pages (live, verified):** /mva-leads, /final-expense-leads (covers burial insurance), /mass-tort-leads (no mass tort results yet, stated). /personal-injury-leads retitled.
**Indexing:** Google 6 accepted, Bing 6 accepted.

**Owner:**
- Rename the GBP to "QualifiedLeadsX".
- Review the pending Google updates.
- Collect reviews (review link on /about).
- Upload the 3 Facebook training videos as MP4 (facebook.com is blocked from this environment).
- Send real mass tort results.

## 2026-11-18 14:13 IST: 12-hourly run #1
**Measured:**
- Rank monitor vs the baseline taken 3 minutes earlier: no change. Search Console's latest day is still 17 Nov.
- GSC 7 days: 335 impressions, 2 clicks, avg position 39.3. 28 days: 778 impressions, 8 clicks, 83 pages, 110 queries.
- 7 new queries.
- Bing: 74 indexed, 1 4xx in its latest crawl, 0 crawl issues.
- Bots: OK except spoofed Bingbot (403) and GPTBot (429), which is Hostinger bot protection.

**Done:** no page changes or indexing requests; the 18 Nov cycle already did both today.

**Backlog (next run):**
- "meta ads budget calculator" (pos 63.5) and "meta ads calculator" (6 impressions, pos 55.3) land on /tools/meta-ads-bid-strategy-calculator instead of /tools/meta-ads-budget-calculator. Check whether the budget calculator answers "meta ads calculator" and how strongly the two link to each other.
- "med spa cost per lead benchmark" is at pos 17 on /benchmarks/cost-per-lead-by-industry: check the med spa row and answer.

## 2026-11-19 02:13 IST: 12-hourly run #2
**Measured (new GSC day: 18 Nov):**
- 7 days: 471 impressions (+104 vs run #1), 3 clicks (+1), 69 pages (+9), 82 queries (+7), avg position 33.8 (was 38.1).
- 28 days: 882 impressions, 9 clicks, 117 queries.
- Movers up: "facebook ads for coaches" 82 → 60, "virtual assistant appointment setter" 78 → 57.5, "meta ads for hvac contractors" 94.7 → 77.8.
- Movers down: "marketing efficiency ratio calculator" 18 → 24.7 (the new /tools/mer-calculator is not indexed yet; the query still lands on /tools), "qualified appointment setting" 39 → 45.5.
- New: "high ticket agency mastermind" (pos 19, /mastermind), "qlxcorp.com" (pos 10), "digital marketing agency in rajouri garden" (pos 61, homepage; local search near the Delhi office).
- Bing: 74 indexed, 0 crawl issues.

**Done:**
- FAQ "Is this a Meta ads calculator for Facebook and Instagram?" on /tools/meta-ads-budget-calculator (for "meta ads calculator", which lands on the bid strategy calculator).
- FAQ "What is a good cost per lead for a med spa?" on /benchmarks/cost-per-lead-by-industry (pos 17 query; existing $24–$52 figures).
- No title or description changes (14-day rule).

**Backlog:**
- Recheck on 21 Nov whether /tools/mer-calculator and /tools/ad-frequency-calculator are indexed and take over their queries from /tools.
- Full URL Inspection due 21 Nov.

## 2026-11-19 12:30 IST: performance investigation (owner request)
Full report: SEO_INVESTIGATION_2026-11-19.md. Change log with before metrics and checks: reports/recovery-tracker.csv.

**Baseline (Search Console, 22 Oct to 18 Nov):** 678 impressions, 9 clicks, CTR 1.3%, avg position 40.5. No earlier 28-day or 3-month period to compare (data starts 19 Oct). First half vs second half: impressions 82 → 596, clicks 5 → 4, position 31.3 → 41.8. GA4 data not accessible (Data API disabled).

**Biggest problems found:** no authority (0 linking pages, 0 brand searches), title churn (188 commits in 30 days; /lead-generation-agency retitled 6 times), 113 new URLs with 39 at 0 impressions, homepage industry tiles pointing at a noindex page and an unindexed page.

**Done:**
- C1: homepage industry tiles now point to /personal-injury-leads, /mva-leads and /final-expense-leads (indexed pages with published results) instead of /for/law-firms and the noindex /for/insurance-agencies.
- C2: 5 unindexed service × industry pages 301-redirected to the matching indexed page (meta-ads-for-law-firms, meta-ads-for-real-estate-investors, meta-ads-for-course-creators, appointment-setting-for-coaches, appointment-setting-for-saas); links and sitemap updated (118 URLs).
- C3: recovery tracker created; core pages on HOLD for title/description/H1 edits until 14 Dec.
- 12-hourly routine prompt updated to fill the tracker and respect the hold.

## 2026-11-19 PM: new lead pages (owner request: new SEO pages with full layout and lead capture)
Checked first whether new pages were justified. Customer acquisition agency, solar appointments and motivated seller leads already have pages (/lead-generation-agency, /for/solar-companies, /for/real-estate-investors), so new pages there would compete with them. Built pages only where published proof exists and no page did:
- /roofing-leads: 10 published roofing campaigns (5,246 leads across 9 lead campaigns, $4.27–$24 CPL).
- /hvac-leads: 6 published HVAC campaigns; GSC already shows HVAC queries landing on a blog post.
- /mortgage-leads: 5 published mortgage and refinance campaigns (208 leads → 37 closings).
New template components/landing/RichLeadPage.tsx: lead form beside the hero, screenshot proof cards with lightbox, funnel or CPL table, budget estimator, process cards, qualification chips, comparison, FAQ accordion, CTA. The form now tags each lead with its source page.
Homepage tiles: Roofing → /roofing-leads, HVAC (was unlinked) → /hvac-leads, Mortgage Brokers → /mortgage-leads. Footer, related links, sitemap, llms.txt and IndexNow list updated. Tracker rows N1–N3, F1.
