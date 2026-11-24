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

## 2026-11-19 14:13 IST: 12-hourly run #3
**Measured:** no new Search Console day since run #2 (latest still 18 Nov). 7 days: 488 impressions (+17 late data), 3 clicks, 64 pages, 79 queries, avg position 31.0 (was 33.8). Lost queries are the 7-day window moving, not drops. New HVAC queries ("hvac facebook ads cost" pos 29, "facebook ads for hvac contractors" pos 44) support the new /hvac-leads page. Bing: 74 indexed, 0 crawl issues. Bots: all 200.
**Tracker:** no rows due (first check 3 Dec).
**Changed:** nothing. No new data day, and today already shipped C1–C3 and N1–N3; more edits now would blur what caused any movement.
**Indexing:** all changed pages were already submitted to Google and Bing earlier today.

## 2026-11-19 evening: full index submission + URL Inspection
- Submitted all 121 sitemap URLs to the Google Indexing API (121 accepted) and 80 to Bing (daily limit; 41 left for 20 Nov). IndexNow returned 403 "UserForbiddedToAccessSite" although the key file is served correctly (likely Hostinger bot protection); Bing's own API worked.
- URL Inspection, all 121: 105 indexed (was 100 of 118), 10 unknown to Google, 6 discovered but not indexed. Unknown: /benchmarks/meta-ads-cpm, /blog/scaling-from-100k-to-500k-coaching, /case-studies/strategic-consulting-85k, /compare/done-for-you-vs-done-with-you-lead-generation, /compare/meta-ads-vs-google-ads-high-ticket, /for/home-improvement, /hvac-leads, /mortgage-leads, /roofing-leads, /tools/roas-calculator. Discovered: /case-studies/b2b-technology-agency-71k, /case-studies/executive-consulting-150k, /crm-automation, /for/financial-advisors, /for/law-firms, /tools/ltv-cac-calculator. Recheck 21 Nov.

Indexing submissions 2026-11-19 10:40 UTC: 121 URLs to Google (all sitemap URLs) and 80 to Bing. Owner rule from now on: max 20 pages in any 24 hours; next batch no earlier than the 21 Nov 14:13 IST run.

## 2026-11-20 02:13 IST: 12-hourly run #4
**Measured:** new partial Search Console day 19 Nov (25 impressions so far, 0 clicks). 7 days: 552 impressions (+64), 3 clicks, 65 pages, 84 queries, avg position 29.8 (was 31.0). 28 days: 990 impressions, 9 clicks, 127 queries, 9 on page 1.
- Up: "meta ads for hvac contractors" 77.8 → 68, "qualified b2b leads" 72.2 → 67.3, "qualified appointments" 82 → 74, "lead conversion rate" 91 → 86. Down: none.
- New: "agencies that optimize meta ads for booked consultations, not just leads" pos 2 on /meta-ads-agency; "how to calculate cost per result" pos 18; "real estate outbound lead generation service for investors" pos 54.
- Bing: 78 indexed (was 74), 0 crawl issues. Bots: Googlebot, OAI-SearchBot, PerplexityBot, ClaudeBot 200; spoofed Bingbot 403 and GPTBot 429 (Hostinger bot protection, unchanged).
**Tracker:** nothing due (first check 3 Dec).
**Changed:** nothing. Top striking-distance query ("facebook ads agency vs hiring an in-house media buyer", pos 5, 24 impressions, 0 clicks) already matches the page title exactly; 0 clicks from 24 impressions at pos 5 is within normal variation. Today's 6 changes need time before more edits.
**Indexing:** none sent (owner limit 20 per 24 hours; next batch allowed in the 21 Nov 14:13 IST run).

## 2026-11-20: SEO Recovery Plan (qualifiedleadsx.com part) live
Verified live: homepage title "Done-for-You Outsourced Lead Generation", one H1 (keyword line only); /appointment-setting, /pay-per-appointment, /for/insurance-agencies (now indexable), /for/financial-advisors, /for/coaches, /blog/how-to-get-coaching-clients all 200 with one H1. 301s live: /personal-injury-leads, /mva-leads, /mass-tort-leads, /for/law-firms, /meta-ads-for-law-firms -> /services; /roofing-leads -> /for/home-improvement. Sitemaps no longer list them. Tracker rows P1-P7. Indexing requests for the new pages wait for the 21 Nov 14:13 IST run (owner limit 20 per 24 hours).

## 2026-11-20: Instagram case study reels
Owner sent 77 unique reels/posts. 70 were already on /case-studies with their videos. Added the 7 missing ones as video case studies (downloaded with yt-dlp, re-encoded H.264 720p, thumbnails): DfuDbu2S7qc (MVA agency DWY sessions), Dfrv-GDSHhw (credit repair 196 leads at $6.07), DfBrxnMy4Yf (15,538 home service leads at $10.64), DeObqYNSuH2 (353 solar leads at $10.32), DeMdVqDSMLy (hackathon 34,397 enquiries at $7.82), DeJ4e7Wy7g2 (roofing 101 leads at $8.95), DeCJICayIm1 (hackathon 27,169 enquiries at $7.59). Dd9D3rnSCMT (2,440 final expense leads) switched from a still image to its video. Video count updated 69 -> 77 (about, case studies, funnel proof, llms.txt).

## 2026-11-20 14:13 IST: 12-hourly run #5
**Measured:** latest Search Console day still 19 Nov (now 74 impressions, 0 clicks for that day). 7 days: 573 impressions (+21 late data), 3 clicks, 66 pages, 88 queries, avg position 29.3 (was 29.8). 28 days: 1,026 impressions, 8 clicks, 134 queries.
- Up: "facebook ads for coaches" 60 → 38 (/meta-ads-for-coaches), "virtual assistant appointment setter" 57.5 → 37, "qualified appointments" 74 → 69.3 (/appointment-setting), "qualified lead generation services" 73.3 → 68.8 (/), "customer acquisition agencies" 60.2 → 55.8. Down: none.
- New: "qualified appointment" pos 48.3 on /appointment-setting, "facebook ads for hvac companies" pos 34, "lead to customer rate calculator" pos 46. "mass tort leads" (72) and "tort leads" (66) were for /mass-tort-leads, which now 301s to /services (owner plan).
- Bing: 78 indexed, 0 crawl issues. Bots unchanged (Googlebot and AI search bots 200; spoofed Bingbot 403, GPTBot 429).
**Tracker:** nothing due (first check 3 Dec).
**Changed:** nothing in this run. Today's recovery-plan changes (P1–P7) and the 8 case-study videos need time; the video deploy (814e41c) was pushed 10 minutes before this run and is not live yet.
**Indexing:** none sent (owner limit; next batch in the 21 Nov 14:13 IST run, starting with the pages changed on 20 Nov).

## 2026-11-20: scroll stuck fix
Owner report: case study popup could not be scrolled. Cause: Lenis smooth scroll captured all wheel events, so scrollable panels inside popups never received them. Fix: Lenis allowNestedScroll + prevent for [data-lenis-prevent]/[role=dialog]; data-lenis-prevent and role=dialog on the case study modal, image lightbox and email opt-in popup; data-lenis-prevent on the mobile menu panel and the homepage stage-2 panel. Tested at 1366x768: popup panel and caption scroll (0 -> 186 and 0 -> 841 px), all 118 sitemap pages scroll with the mouse wheel (0 stuck), page scrolls after closing the case study popup, lightbox and mobile menu.

## 2026-11-20: case study detail pages redesigned
Owner report: /case-studies/<slug> pages were plain with no video or results. Rebuilt the template: video (or screenshot) beside the H1, accurate stat tiles and summary per named case (new stats/summary fields in lib/case-study-meta.ts, numbers copied from each post), breakdown, original post text (hashtags hidden), 6 more case studies with thumbnails, FAQ, lead form (source_page tagged). Removed invented numbers that appeared on every case page (82% show-up rate, <5 min, 178+ closed clients, "over 80% attendance", "12-minute VSL", "first 14 days").

## 2026-11-20: speed
Lighthouse mobile (live, before): / 65 (LCP 3.6 s, TBT 740 ms, 7.0 MB), /case-studies 84, case study page 95, /appointment-setting 90, /pay-per-appointment 94, /for/coaches 94, new coaching guide 96, /hvac-leads 95. Homepage cause: testimonial player preloaded a 6.4 MB hosted MP4 (index at end of file) on every visit; fixed by setting the video src only when play is pressed (homepage weight about 0.9 MB, 0 MP4 requests before play, plays on click). Below-the-fold homepage sections wrapped in separate Suspense boundaries to split hydration (local TBT avg about 810 -> 600 ms). Remaining: one about 700 ms React hydration task from the animated homepage sections; reducing it needs a bigger refactor.

Live after (20 Nov): / 69 and 74 (two runs; LCP 3.4/2.7 s, TBT 620/640 ms, 782 KB), /case-studies 89, /appointment-setting 94.

## 2026-11-20: header and footer redesign
Owner: footer looked messy (60+ links in long columns). New shared lib/menu.ts. Header: dropdowns for Services, Industries (two columns), Resources (tools, benchmarks, blog, comparisons, glossary) and Mastermind, each with View all; removed internal badges such as "1500+ Words"; Benchmarks/Tools/Blog moved under Resources. Footer: brand + contact + socials, four short columns (Services, Industries, Resources, Company) with View all, closed "Browse all pages" section keeping every page linked, legal links in the bottom bar. Link audit: 0 broken, 0 orphans.

## 2026-11-20: footer, all links in dropdowns
Owner: footer should be very neat, everything in dropdown or hover. Footer is now brand row (logo, one line, Book call, socials, WhatsApp), one row of menus (Services, Industries, Resources, Case Studies, Mastermind, Company, Reviews, plus Related to this page when a page has related links) that open on hover on desktop and on tap on mobile (accordion), and a bottom bar with email and legal links. All links stay in the HTML (link audit 0 broken, 0 orphans).

## 2026-11-21 02:13 IST: 12-hourly run #6
**Measured:** new Search Console day 20 Nov (40 impressions, 0 clicks, partial). 7 days: 636 impressions (+63), 3 clicks, 71 pages (+5), 104 queries (+16), avg position 29.6. 28 days: 1,089 impressions, 8 clicks, 150 queries, 9 on page 1.
- Up: "hvac meta ads" 72.8 → 57.1, "lead conversion rate calculator" 77 → 68.8. Down: "metaadsagency.com" 79 → 84.7.
- New pages already showing: /mortgage-leads ("mortgage leads exclusive" pos 37, "qualified personal loan leads" 51, "refi leads" 64), so Google has picked it up. /tools/lead-conversion-rate-calculator now 53 impressions at pos 21.4.
- Mass tort queries ("buy mass tort leads" pos 38, "mass tort case leads" 53) still reach /mass-tort-leads, which now 301s to /services under the owner's recovery plan (topic owned by scalewithads.us).
- Bing: 78 indexed, 0 crawl issues.
**Tracker:** nothing due (first check 3 Dec).
**Changed:** nothing in this run; 20 Nov already shipped the recovery-plan pages, case study redesign, speed fix and new header/footer.
**Indexing:** none sent (owner limit; next batch in the 21 Nov 14:13 IST run).

## 2026-11-21 14:13 IST: 12-hourly run #7
**Measured:** Search Console day 20 Nov reached 117 impressions (best day so far; previous best 83). 7 days: 672 impressions, 3 clicks, 72 pages, 118 queries, avg position 28.2 (was 29.6). 28 days: 1,165 impressions, 8 clicks, 165 queries, 10 on page 1.
- Up: "lead conversion rate calculator" 68.8 → 52.4, "average cost per lead by industry" 70.8 → 62.7, "hvac meta ads" 57.1 → 50.3, "roas benchmarks by industry" 20.8 → 15. Down: none.
- New: "burial insurance leads" pos 28.3 (/final-expense-leads), "frequency formula meta" pos 11 (/tools/ad-frequency-calculator), "qualified mass tort leads" pos 19 (/mass-tort-leads, now redirected).
- Bing: 79 indexed, 0 crawl issues.
**URL Inspection (all 119 sitemap URLs):** 109 indexed (was 105 of 121 on 19 Nov), 9 discovered not indexed, 1 unknown. Newly indexed: /hvac-leads, /mortgage-leads, /for/home-improvement, /case-studies/executive-consulting-150k. New 20 Nov pages (/pay-per-appointment, /blog/how-to-get-coaching-clients, /for/insurance-agencies) already indexed. Still not indexed: /benchmarks/meta-ads-cpm, /case-studies/b2b-technology-agency-71k, /case-studies/strategic-consulting-85k, /compare/done-for-you-vs-done-with-you-lead-generation, /compare/meta-ads-vs-google-ads-high-ticket, /crm-automation, /for/financial-advisors, /tools/ltv-cac-calculator, /tools/roas-calculator, /blog/scaling-from-100k-to-500k-coaching.
**Changed:** nothing on the site (20 Nov changes need time).
Indexing submissions 2026-11-21 08:55 UTC: 20 URLs to Google (20 accepted) and Bing (20 accepted): / /appointment-setting /pay-per-appointment /for/insurance-agencies /for/financial-advisors /for/coaches /blog/how-to-get-coaching-clients /case-studies /case-studies/b2b-technology-agency-71k /case-studies/strategic-consulting-85k /case-studies/florida-hvac-65k-cash-collected /case-studies/nyc-med-spa-rf-microneedling-74k /case-studies/b2b-agency-scaling-846k /case-studies/med-spa-marketing-agency-639k /case-studies/high-ticket-coaching-203k /case-studies/digital-media-agency-157k /case-studies/executive-consulting-150k /case-studies/commercial-services-86k /case-studies/agency-backend-continuity-86k /case-studies/high-ticket-funnel-79k
Not resent (sent 19 Nov, unchanged since, 7-day rule): the unchanged not-indexed URLs above. Next batch allowed from the 22 Nov 14:13 IST run.

## 2026-11-21: Google Preferred Sources button
Owner request. components/ui/PreferredSourceButton.tsx links to https://www.google.com/preferences/source?q=qualifiedleadsx.com (new tab; Google blue #1a73e8, white text, G logo). Placed in the footer (every page) and after the conclusion of every blog post. Google only: no AI assistant (ChatGPT, Perplexity, Gemini apps, Claude) offers an equivalent setting.

## Run 8: 21 Nov 2026 20:44 UTC (02:13 IST run, no indexing by rule)
- GSC 7d: 711 impressions (+39 vs run 7), 4 clicks (+1), 74 pages, 124 queries (+6), avg position 29.1 (was 28.2). Latest day with data: 21 Nov (partial).
- New queries: "air conditioning leads" (pos 60.5, /hvac-leads), "home improvement contractor leads" (69, /for/home-improvement), "show up rate" (9, /tools/show-rate-calculator), consulting programs question (pos 1, /for/consultants).
- Striking distance: "facebook ads agency vs hiring an in-house media buyer" pos 5.0, 24 impr, 0 clicks. Title already matches the query exactly and was changed 17 Nov (14-day rule until 1 Dec), so no edit. Other striking queries have 1-6 impressions: too thin to justify a change.
- Bots: Googlebot, OAI-SearchBot, PerplexityBot, ClaudeBot 200; Bingbot 403 and GPTBot 429 (Hostinger bot protection, unchanged).
- Bing: 79 in index, crawled 40, 0 crawl issues, 8 impressions in 23 days; quota 80 today.
- Tracker: no check_on dates due (first due 3-4 Dec).
- Changes: none (no evidence-backed change available).
- Deploy: Preferred Sources commit b976ccb is on main but still not live at 20:45 UTC (Hostinger deploy stalled; owner asked to redeploy).

## Run 9: 22 Nov 2026 08:44 UTC (14:13 IST run)
- GSC: no new day since run 8 (latest 21 Nov: 84 impressions, 2 clicks). 28d: 1,259 impressions, 10 clicks, 99 pages, 190 queries, 12 on page 1. 7d impression-weighted avg position 29.6.
- Up: hvac meta ads 50.3 -> 41, air conditioning leads 60.5 -> 52, qualified appointments 67.8 -> 61.6, qualified b2b leads 64.2 -> 59.1. Down: how to get marketing qualified leads 15.7 -> 24.7, high ticket lead generation 53.8 -> 62.7 (1-3 impressions each).
- New: ~10 home improvement lead queries on /for/home-improvement (pos 63-81); insurance agent queries on /for/insurance-agencies (pos 44-70); marketing efficiency ratio (48) on /tools/mer-calculator.
- Bots unchanged: Bingbot 403, GPTBot 429; others 200. Bing: 86 in index, 0 crawl issues, 12 impressions in 24 days.
- Change P8: "home improvement leads" and "HVAC leads" links on /pay-per-appointment (live, verified 08:56 UTC). Tracker row P8, check 10 Dec.
- Preferred Sources button live (verified).
Indexing submissions 2026-11-22 08:56 UTC: Google 1 URL (1 accepted): /pay-per-appointment (changed today; all other sitemap URLs were sent 19 Nov, so the 7-day rule holds them until 26 Nov). Bing 20 URLs (accepted; never sent to Bing before, except the changed first one): /pay-per-appointment /hvac-leads /mortgage-leads /final-expense-leads /tools/lead-conversion-rate-calculator /tools/mer-calculator /tools/ad-frequency-calculator /about/gaurav-kapoor /blog/how-to-qualify-leads /blog/high-ticket-lead-generation-strategies /blog/meta-ads-for-coaches-guide /blog/scaling-from-100k-to-500k-coaching /blog/buy-qualified-leads-vs-generating-your-own /blog/cost-per-acquisition-vs-cost-per-lead /blog/how-to-increase-show-rate /blog/why-leads-dont-show-up /blog/vsl-script-template-high-ticket /blog/appointment-setter-compensation-models /blog/b2b-sales-closer-job-description /blog/meta-advantage-plus-for-b2b
- 22 Nov: plan steps 2-4 changes P9, P10, P11 (homepage topic links, Meta ads agency + qualified appointment setting links, lead to customer conversion rate paragraph) verified live. Changed URLs to submit to Google in the next 14:13 IST run: /, /tools/lead-conversion-rate-calculator, /blog/facebook-ads-agency-vs-in-house-media-buyer, /blog/how-to-hire-an-appointment-setter.

## Run 10: 22 Nov 2026 20:44 UTC (02:13 IST run, no indexing by rule)
- GSC 7d: 748 impressions (+27), 5 clicks (+0), 74 pages, 149 queries (+12), avg position 30.4 (was 29.6). 22 Nov is partial (25 impressions so far). 28d: 1,286 impressions, 10 clicks, 201 queries, 13 on page 1.
- New: 7 insurance agent queries on /for/insurance-agencies (pos 41-61, incl. "lead generation for insurance agents" pos 41); 4 pay per appointment queries on /pay-per-appointment (pos 50-83). Both pages are 2 days old and already ranking for their target terms.
- Up: marketing efficiency ratio formula 79 -> 64. No queries down.
- /mass-tort-leads (301 to /services since 20 Nov) still shows 32 impressions; expected to fade as Google processes the redirect.
- Bots unchanged (Bingbot 403, GPTBot 429). Bing: 86 in index, 0 crawl issues.
- Tracker: nothing due (first 3-4 Dec). Changes: none this run (P9-P11 went live today; waiting for data).

## Run 11: 23 Nov 2026 08:44 UTC (14:13 IST run)
- GSC: 22 Nov = 174 impressions, 0 clicks (best day so far; previous best 117 on 20 Nov). 7d: 865 impressions (+117), 5 clicks, 200 queries (+51), avg position 34.6 (was 30.4; the drop is many new low-position queries). 28d: 1,440 impressions, 10 clicks, 255 queries, 13 on page 1.
- Up: buy coaching leads 98 -> 27.8 (/blog/how-to-get-coaching-clients), exclusive home improvement leads 81 -> 56, qualified lead generation company 32.5 -> 17 (/), refi leads 64 -> 52 (/mortgage-leads), lead conversion rate calculator 48 -> 42. Down: how to get marketing qualified leads 24.7 -> 46 (1 impr), burial insurance leads 28 -> 35, qualified appointment setting 47 -> 52.
- New: 58 queries, many home improvement and insurance agent terms on the new and rebuilt pages.
- Bots unchanged (Bingbot 403, GPTBot 429). Bing: 96 in index (+10), 0 crawl issues.
- URL Inspection re-run done today in the technical audit (reports/technical-seo-audit-2026-11-23.md): 109 of 119 indexed, unchanged since 21 Nov.
- Changes: none this run (P9-P11 went live 22 Nov; audit fixes wait for owner decision).
Indexing submissions 2026-11-23 08:57 UTC: Google 4 URLs (4 accepted, changed 22 Nov): / /tools/lead-conversion-rate-calculator /blog/facebook-ads-agency-vs-in-house-media-buyer /blog/how-to-hire-an-appointment-setter. Bing 13 URLs (accepted): the same 4 plus 9 never sent to Bing: /blog/category/funnel-strategy /blog/category/lead-qualification /blog/category/paid-advertising /blog/category/scaling-economics /blog/whatsapp-marketing-for-consultants /mastermind/7-days-paid-trial /mastermind/hidden-facebook-interest /mastermind/lto-funnel-scale /mastermind/personal-injury-facebook-ads. All sitemap URLs have now been sent to Bing at least once.

## 23 Nov 2026: Gaurav Sir SEO brief (CLAUDE_CODE_SEO_qualifiedleadsx_com.md + Keyword Volume Plan)
Rules followed: content and SEO elements only (no UI or layout changes, no sitewide footer links), no em dashes added (and existing ones removed on the pages touched), no new numbers except published case-study figures, no Google Indexing API.

Task 1 (near page 1), before -> after:
- /blog/facebook-ads-agency-vs-in-house-media-buyer (pos 5.0): H1 "Facebook Ads Agency vs In-House Media Buyer: Which Is Right for a High-Ticket Business in 2026?" -> "Facebook Ads Agency vs Hiring an In-House Media Buyer: Which Costs Less?"; description rewritten to lead with the two costs (for clicks); title kept (already the exact query). 5 FAQs already. New contextual links from 3 posts (Meta ads for coaches guide, Advantage+ for B2B, B2B ROAS).
- /tools/ad-frequency-calculator (10.5): 4 -> 5 FAQs (added "What is the frequency formula in Meta ads?"); new links from broad targeting post, Advantage+ for B2B, Meta ads for coaches guide. Title/H1 already contain the phrase.
- /blog/b2b-roas-benchmarks-qualified-appointment-generation (b2b roas 14.3, roas benchmarks by industry 20.8): H1 -> "B2B ROAS Benchmarks by Industry for High-Ticket Offers"; H2 -> "ROAS Benchmarks by Industry: Results From Our Published Case Studies"; direct answer rewritten from published case studies only (2.72 to 12.70); description rewritten; links from cost-per-acquisition, B2B CAC and scaling-coaching posts.
- /blog/how-to-qualify-leads (how to get marketing qualified leads 15.7): H1 -> "How to Qualify Leads and Get Marketing Qualified Leads"; direct answer rewritten for the query; new section "MQL vs SQL: When Does a Lead Go to Sales?"; FAQs 3 -> 5; removed unsourced "40%" and "30%+" FAQ claims and "close rates above 25%"; links from why-leads-dont-show-up, buy-qualified-leads post and the lead scoring template page.
- /blog/meta-ads-for-high-ticket-b2b-broad-targeting (18.5): title -> "Facebook Ads Targeting for High-Ticket Products"; H1 -> "Facebook Ads Targeting for High-Ticket Products and B2B Offers"; direct answer rewritten; removed unsourced "$50M+ spend", "30+ B2B verticals", "38% lower" and the unpublished lookalike CPL comparison (kept the published 2,064 registrations at $0.50 CPL); links from in-house post (existing), Meta ads for coaches guide and high-ticket strategies post.
- /tools/mer-calculator (marketing efficiency ratio calculator 24.7): title/H1 already contain the phrase, short answer and 5 FAQs present; new links from B2B ROAS, cost-per-acquisition and B2B CAC posts.
- "data mirage calculator" (18.0 on /tools): no page or topic on the site matches; nothing changed.

Task 2 (keyword plan):
- appointment setting services, pay per appointment, lead generation for insurance agents: pages already target the keyword in title and H1 with 6+ FAQs (20 Nov); no change.
- lead scoring template: title -> "Lead Scoring Template: Free High-Ticket Scoring Rubric", H1 -> "Lead Scoring Template & High-Ticket Scoring Rubric", new description, downloadable CSV (/downloads/lead-scoring-template.csv), points explained, FAQs 3 -> 5, removed unsourced "125+ client acquisition funnels".
- lead generation calculator (/tools): title -> "Lead Generation Calculator & Free Marketing Tools", H1 same, description rewritten, quick answer now names which calculator to use, FAQs 3 -> 5.
- lead generation for financial advisors: replaced unsourced "15 to 35 discovery sessions monthly" FAQ with an honest answer; added "How does lead generation for financial advisors work?" (5 FAQs).
- how to get coaching clients: FAQs 4 -> 5 (published coaching results only); new links from Meta ads for coaches guide and scaling-coaching post.
- customer acquisition agency: homepage FAQ question -> "What does a customer acquisition agency like QualifiedLeadsX do?" (FAQ only; homepage changed within 7 days).
- marketing qualified leads: covered in Task 1.
- qualified lead generation services (P3): no change.

Task 3:
- Sitewide footer links to sister sites: none exist (checked code and live HTML); nothing to remove. No sitewide footer links added (owner instruction 23 Nov).
- Disavow: no backlink export available in this session (OpenSEO has no credits), so docs/disavow.txt was not created.

Verification: tsc, eslint (0 errors), next build, seo:validate PASS, seo:links PASS (link checker now accepts .csv files), playbook audit OK; every changed page checked locally at 390 px: 1 H1 containing the keyword, title <= 58 chars, description <= 155, FAQPage schema with 5+ questions, no horizontal overflow, no em dashes.
- 23 Nov: brief changes verified live (lead scoring CSV 200, new titles/H1s/sections on /tools, qualify-leads, B2B ROAS, broad targeting, in-house, financial advisors, ad frequency). Bing already received 13 URLs at 08:57 UTC today, so these 9 changed URLs go to Bing/IndexNow in the 24 Nov 14:13 IST run (20-a-day rule). Google: owner to request indexing manually (Indexing API no longer used).

## 23 Nov 2026: Gaurav Sir Page Content Plan (CLAUDE_CODE_CONTENT_qualifiedleadsx.md), 5 pages
Note (7-day rule): all five pages were edited in the last 7 days (20, 22 and 23 Nov). The changelog shows those edits were ours, implementing the same owner plan, so the full content plan was applied, not only FAQs and meta. Text only: no components, layout, classes, images, forms or section order changed. No em dashes. Only figures listed as published proof in the plan.

- / : title "Done-for-You Outsourced Lead Generation | QualifiedLeadsX" -> "Done-for-You Lead Generation and Appointments | QLX" (the plan's "| QualifiedLeadsX" version is 63 characters, over the 60 limit, so the short brand used on the other plan pages was used); description -> plan text, trimmed to 151 characters ("We run the ads" -> "We run ads", "book sales appointments" -> "book appointments"); H1 "...for High-Ticket Offers" -> "...for Service Businesses"; system panel, "Why most lead generation agencies fail", "What makes QualifiedLeadsX different" (subtitle; the section has 7 cards, the plan has 4 points, so the points went into the section intro and the 7 cards were kept), results intro, industries intro replaced with plan copy; 18 FAQs replaced by the plan's 6 (FAQPage schema reads the same data); links to /appointment-setting, /pay-per-appointment, /for/insurance-agencies, /for/financial-advisors.
- /appointment-setting: title "Appointment Setting Services: Qualified Sales Appointments" -> "Appointment Setting Services That Book Sales Calls | QLX"; description and OG/Twitter -> plan text; H1 "...Book Qualified Sales Appointments" -> "...Book Qualified Sales Calls"; "What our appointment setting services include" intro, "Why 5 Minutes..." intro and the 4 tier cards (Intent, Budget, Timing, Authority) replaced; plan sections "How appointment setting is priced" and "What good appointment setting looks like in numbers" do not exist as sections, so their copy went into the existing summary box and the "Real Client Calendars" intro; removed the unconfirmed "30 to 50 sales-ready appointments every month" promise (hero subtitle and summary box) per the plan's check note; Velocify named next to 58.2%; 9 FAQs (6 + 3 deep-dive) replaced by the plan's 6; links to /pay-per-appointment, /, /for/insurance-agencies.
- /pay-per-appointment: title -> "Pay Per Appointment Lead Generation | QualifiedLeadsX"; description and H1 -> plan text; proof and funnel intros replaced; 6 process steps rewritten to the plan's 5 steps (the 6th card, "Exclusive to you", kept to avoid removing an item); comparison and audience cards rewritten with the plan copy split across the existing 4+4 items and 3 cards; FAQs replaced (6); links to /appointment-setting, /for/insurance-agencies, /.
- /for/insurance-agencies: title -> "Lead Generation for Insurance Agents: Exclusive Leads | QLX"; description and H1 -> plan text; proof, cost and process intros replaced; comparison (4+4) and audience cards (3) rewritten; FAQs replaced (6); Service schema already has areaServed United States; links to /pay-per-appointment, /for/financial-advisors, /appointment-setting.
- /for/financial-advisors: title unchanged (already the plan title); description (incl. OG and Service schema) and H1 -> plan text; quick answer, "Engineered For Fiduciary Wealth Advisors" intro and "Explore Cross-Industry Case Studies" intro replaced; FAQs replaced (5); links to /for/insurance-agencies, /appointment-setting, /.

Verification: tsc, eslint (0 errors), next build, seo:validate PASS, seo:links PASS, playbook audit OK; each page checked locally at 390 px: one H1 (exact plan text), title 51-59 characters, description 144-154, FAQPage schema 5-6 questions matching the visible FAQs, no horizontal overflow, no em dashes, no "30 to 50" promise.
Open for owner: the "30-50 booked calls a month" promise still appears on /high-ticket-lead-generation (title and description), /services and /meta-ads-agency (outside this plan).
- 23 Nov: Page Content Plan changes verified live on all 5 pages (new H1s and FAQs present).

## Run 12: 23 Nov 2026 20:44 UTC (02:13 IST run, no indexing by rule)
- GSC 7d: 996 impressions (+131), 6 clicks (+1), 223 queries (+23), avg position 35.9 (was 34.6; more new low-position queries). 28d: 1,571 impressions, 11 clicks, 277 queries, 13 on page 1. 23 Nov partial (62 impressions so far).
- Up: pay per appointment lead generation 85.5 -> 70.8, insurance appointment setting services 62 -> 52.5, meta ads calculator 55 -> 50, lead conversion rate 84.5 -> 79.3, exclusive home improvement leads 56 -> 53.
- Down: insurance leads for agents 33 -> 51 (4 impr), insurance lead generation 43 -> 57.5, high ticket lead generation 10 -> 18 (3 impr), lead generation for consultants 53 -> 64. Small samples; /for/insurance-agencies copy changed today, Google has not recrawled it yet.
- /mass-tort-leads (301 since 20 Nov) still shows 12+ impressions for mass tort queries; expected to fade.
- Bots unchanged (Bingbot 403, GPTBot 429). Bing: 96 in index, 0 crawl issues.
- Changes: none this run (14 pages changed on 23 Nov; waiting for recrawl). Fixed earlier tonight on owner request: testimonial video thumbnails (commit da2f5a0, live).

## Run 13: 24 Nov 2026 08:44 UTC (14:13 IST run)
- GSC: 23 Nov = 253 impressions, 4 clicks (best day so far; previous best 174 on 22 Nov). 7d: 1,102 impressions (+106), 10 clicks (+4), 238 queries, avg position 35.8. 28d: 1,759 impressions, 15 clicks, 301 queries, 15 on page 1.
- Up: ad frequency calculator 10.5 -> 2 (on /tools), meta ads calculator 50 -> 30.5, meta ads for hvac contractors 50 -> 28, cost per lead by industry 69 -> 39.5, burial insurance leads 35 -> 28.5, pay per appointment lead generation 71 -> 65, lead scoring template 64 -> 60 (13 impr), qualified b2b leads 55.5 -> 51, buy insurance leads 82 -> 71.
- Bots unchanged (Bingbot 403, GPTBot 429). Bing: 98 in index (+2), 0 crawl issues.
- Changes: none this run (14 pages changed 23 Nov; waiting for recrawl).
Indexing submissions 2026-11-24 08:44 UTC: Bing 20 URLs (accepted): / /appointment-setting /pay-per-appointment /for/insurance-agencies /for/financial-advisors /tools /tools/lead-scoring-template /tools/ad-frequency-calculator /blog/facebook-ads-agency-vs-in-house-media-buyer /blog/b2b-roas-benchmarks-qualified-appointment-generation /blog/how-to-qualify-leads /blog/meta-ads-for-high-ticket-b2b-broad-targeting /blog/how-to-get-coaching-clients /blog/meta-ads-for-coaches-guide /blog/meta-advantage-plus-for-b2b /blog/cost-per-acquisition-vs-cost-per-lead /blog/b2b-client-acquisition-cost-cac-benchmarks-2026 /blog/scaling-from-100k-to-500k-coaching /blog/why-leads-dont-show-up /blog/buy-qualified-leads-vs-generating-your-own. IndexNow (same 20, direct POST): HTTP 403 UserForbiddedToAccessSite (key file check fails, most likely Hostinger bot protection blocking the IndexNow fetcher). Google Indexing API not used; owner to request indexing manually in Search Console. Not yet sent to Bing (cap reached): /blog/high-ticket-lead-generation-strategies.

## 24 Nov 2026: Gaurav Sir AEO/GEO plan (CLAUDE_CODE_AEO_GEO_gaurav.md), qualifiedleadsx.com section only
Scope: qualifiedleadsx.com only (owner instruction 23 Nov: work only on this site). 7-day rule applied: the 5 content-plan pages were edited 23 Nov, so only FAQs changed on them today; body items are scheduled for 1 Dec.
- New guide /blog/appointment-setting-vs-cold-calling (target "appointment setting vs cold calling"): answer box, comparison table, cost per booked appointment table (published cases only), "does appointment setting work" section with the med spa case, 5 numbered steps, 6 FAQs with FAQPage schema, named author (Gaurav Kapoor), links to /appointment-setting, /pay-per-appointment, /. Linked from 3 related guides (in-house SDR, setter compensation, speed to lead statistics).
- Blog renderer: optional comparison table per section (structural support the plan asks for; uses existing table styling).
- /appointment-setting FAQs 6 -> 8: "What are the best appointment setting services?" (criteria list) and "Does appointment setting work?" (med spa: 453 appointments, 247 clients).
- /for/insurance-agencies FAQs 6 -> 7: "How do insurance agents get leads?" ($7.79 and about $18 per lead).
- llms.txt: published-results key facts line; new guide and MQL guide added to "Most important guides".
- audit/geo_prompts.md: 6 GEO prompts from the plan, baseline all zeros (24 Nov), monthly tracking table.
- Already in place (checked): robots.txt allows GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot; Organization schema with sameAs (Clutch, Crunchbase, Trustpilot, Sortlist, Agency Spotter, GBP, Facebook, Instagram, YouTube); llms.txt and llms-full.txt; one brand description sentence.
- Scheduled for 1 Dec (after the 7-day window): "In short" answer with one published figure at the top of /, /appointment-setting, /pay-per-appointment, /for/insurance-agencies, /for/financial-advisors; "Key facts" blocks; "Cost per appointment by industry" table on /pay-per-appointment; in-house vs outsourced vs pay-per-appointment cost table on /appointment-setting; steps blocks on the insurance and advisor pages.
- Owner decision: the plan's cost table lists MVA $19.62, but MVA was moved to the sister sites on 20 Nov; it will be left out unless the owner says otherwise.
- Not possible here: disavow upload (needs the backlink export), Clutch/G2 profiles, Reddit answers, monthly prompt checks in ChatGPT/Gemini/Perplexity (manual).
Verification: tsc, eslint 0 errors, build, seo:validate PASS, seo:links PASS, playbook audit OK; new guide and both pages checked locally at 390 px (one H1, title 53-59, description 144-147, FAQPage 6-8 questions, no overflow, no em dashes).
- 24 Nov: AEO/GEO changes verified live (new guide /blog/appointment-setting-vs-cold-calling, new FAQs on /appointment-setting). Guide goes to Bing in the 25 Nov 14:13 IST run (20-a-day cap used today).
