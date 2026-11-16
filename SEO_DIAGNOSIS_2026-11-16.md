# QualifiedLeadsX organic performance diagnosis (16 Nov 2026)

Scope: www.qualifiedleadsx.com. Every number here comes from Google Search Console (service-account API), the URL Inspection API, Bing Webmaster API, Lighthouse runs from this session, git history or live HTTP fetches. Items marked **[assumption]** are reasoned conclusions without direct data. Nothing here is estimated or made up.

Raw exports: `audit/gsc-baseline-2026-11-16/` (query, page, page+query, date, country, device CSVs).

---

## 1. The 3-month vs previous 3-month comparison is not possible

| Period | Clicks | Impressions | CTR | Avg position |
|---|---|---|---|---|
| 16 May – 14 Aug 2026 | **no data** (GSC returns zero rows) | – | – | – |
| 15 Aug – 13 Nov 2026 | 6 | 349 | 1.7% | 48.2 |

- **[verified]** The first day with any GSC data is **19 Oct 2026** (0 impressions that day). The first impression was on 22 Oct.
- **[verified]** The first commit in this repository is **21 Oct 2026**. The site in its current form is **26 days old**.
- So "the last 3 months" is really 24 days of data (22 Oct – 14 Nov), and there is no earlier period to compare it with.
- The trend inside those 24 days:

| Week | Impressions | Clicks |
|---|---|---|
| 22–28 Oct | 44 | 3 |
| 29 Oct – 4 Nov | 45 | 2 |
| 5–11 Nov | 192 | 1 |
| 12–14 Nov (3 days) | 116 | 0 |

- **[verified]** Daily impressions grew from 4–14 a day to 28–63 a day after 8 Nov.
- **[verified]** Clicks stayed at 0–1 a day because almost nothing ranks on page 1 (see section 3).

> Bottom line: the site isn't losing traffic. It is a 4-week-old site that Google is still placing. "Not meeting expectations" mostly reflects expectations that don't fit a new domain with no links. The fixable problems are below.

---

## 2. Root causes, ranked by impact

Symptoms (what you see) are kept separate from causes (why it happens).

| # | Root cause | Evidence | Impact | Fixable in code? |
|---|---|---|---|---|
| 1 | **No authority: no backlinks and no brand demand** | Bing `GetLinkCounts` lists 0 external linking pages. GSC shows 0 queries containing "qualifiedleadsx" in 24 days. A web search for "qualifiedleadsx" doesn't return the site. Google's own backlink report could not be read (the API has no backlinks endpoint). OpenSEO competitor data is in section 5: competitors have 877–4,950 referring domains. | Very high: caps every commercial ranking at page 5–10 | No, needs off-site work |
| 2 | **Site and domain age: Google is still testing positions** | Data starts 19 Oct. Impressions jumped 4x after 8 Nov. Positions move 30+ places week to week. | High, fades with time | No |
| 3 | **Head terms split across 2–3 pages (cannibalisation)** | "customer acquisition agency" (31 impressions, the biggest query): Google ranks `/for/agencies` at 76–84, but the homepage and `/lead-generation-agency` both had the term in their titles. `/for/agencies` had a "What is a customer acquisition agency?" FAQ and a "What a client acquisition agency does" heading, and linked the term to `/`. "qualified lead generation services": homepage at 81, `/lead-generation-agency` at 90, `/for/b2b-services` at 94. "high ticket lead generation": `/blog` hub at 75, the service page at 69, the blog post at 84. | High for the money terms | **Yes, fixed today (section 6)** |
| 4 | **Search intent mismatch on head terms** | The live top results for "customer acquisition agency" and "qualified lead generation services" are guides and listicles ("What they do & how to choose", "10 best … 2026") from clicksgeek, revnew, ninjapromo, belkins, callbox and singlegrain. The site answers them with sales pages. | Medium-high | Partly: definition and comparison content added to the owner page |
| 5 | **Too many pages, too fast, too many changes** | 117 sitemap URLs published in about 4 weeks. 49 have had zero impressions (11 case studies, 8 blogs, 5 tools, 5 `/for/` pages and 9 programmatic service-by-industry pages). 153 commits since 21 Oct. Homepage metadata changed on 10 different days; `/appointment-setting` has 17 commits. Five more SEO commits went to `main` on 16 Nov before this diagnosis. | Medium: Google has to re-evaluate pages constantly, and you can't tell which change did what | Process fix |
| 6 | **Homepage and core pages are slow on mobile** | Lighthouse mobile (lab, 16 Nov): homepage perf 41 (LCP 4.6 s, TBT 2,170 ms); `/lead-generation-agency` 62 (LCP 3.5 s, TBT 870 ms); `/for/agencies` 96; `/appointment-setting` 92. No field (CrUX) data: the PageSpeed API quota was used up, and **[assumption]** traffic is too low for CrUX anyway. | Low–medium (a tie-breaker, not why pages sit at 80) | Yes, see plan |
| 7 | **Wrong market mix** | 204 of 349 impressions are from the USA at an average position of 56. India gives 12 impressions at 22.6; Pakistan 10 at 1.2. Business Profile and address are in Delhi. | Low | No |

### Ruled out (checked, not a cause)
- **Crawl blocking of Googlebot:** a Googlebot user agent gets 200. Earlier sessions reported "Bingbot 403". That was a user-agent check from this server, and the host blocks a fake bot UA coming from a non-Microsoft IP. Bing's own crawl stats show 77 2xx, 0 4xx, 0 5xx, 0 robots-blocked and **68 URLs in Bing's index**, so real Bingbot gets through. GPTBot (429) and Applebot-Extended (403) are still blocked for spoofed user agents; whether the real bots are blocked could not be verified from here.
- **Rendering:** pages are statically prerendered. Titles, H1s, body copy and JSON-LD are in the raw HTML (verified with curl).
- **Canonicals and redirects:** the canonical tags are self-referencing; the bare domain returns a 301 to www.
- **Schema:** `validate-schema.mjs` finds 0 missing required properties.
- **Indexing:** see section 4.

---

## 3. Underperforming queries and pages

**[verified]** 83% of impressions on named queries are at **position 51 or lower** (187 of 226). Only 20 impressions are in the top 10.

| Position | Impressions |
|---|---|
| 1–10 | 20 |
| 11–20 | 7 |
| 21–50 | 12 |
| 51+ | 187 |

### Commercial queries (all on page 5–10)
| Query | Impressions | Pos | Ranking page | Intended page | Why it underperforms |
|---|---|---|---|---|---|
| customer acquisition agency(ies) | 31 | 76–84 | /for/agencies | /lead-generation-agency | Cannibalisation (#3), listicle intent (#4), no authority (#1) |
| high ticket lead generation | 14 | 69–84 | /blog, the post, the service page | /high-ticket-lead-generation | 3 pages split the term; the blog hub outranks the service page |
| qualified lead generation services / company | 16 | 63–94 | /, /lead-generation-agency, /for/b2b-services | homepage (Google's pick) | Split; title of `/lead-generation-agency` claimed it |
| cost per qualified meeting | 11 | 83 | /benchmarks/cost-per-booked-call | same | No authority; wording "meeting" vs "booked call" |
| benchmark cac b2b | 9 | 74 | CAC blog | same | Up against SaaS benchmark sites with links (gripped, saashero, data-mania) |
| qualified appointment(s) | 9 | 90 | /appointment-setting | same | Weak relevance plus authority |
| speed to lead (statistics) | 11 | 84–90 | /speed-to-lead, the stats post | the stats post | The SERP is full of established SaaS vendors (Chili Piper, LeanData, Verse) |

### Where the site already ranks (protect these)
| Query or page | Pos |
|---|---|
| facebook ads agency vs hiring an in-house media buyer (11 impressions) | 4.3 |
| the closer matrix reviews (6) | 8.2 |
| /about | 2.1 |
| /benchmarks/close-rate | 4.1 |
| /meta-ads-agency | 7.7 |
| /blog/high-ticket-sales-training-framework | 15 |
| b2b roas | 14 |

Long-tail, specific comparison pages rank. Head terms don't. That pattern is what you'd expect when a domain has no authority yet.

---

## 4. Indexing

**[verified]** URL Inspection API, all 117 sitemap URLs, run on 16 Nov:

| Status | URLs |
|---|---|
| Submitted and indexed | **97** |
| Discovered, currently not indexed | 11 |
| URL is unknown to Google | 7 |
| Crawled, currently not indexed | 2 |

- **Canonicals:** Google's chosen canonical matches the declared one on every indexed URL (0 mismatches).
- **Discovered, not indexed (11):** Google knows about these but hasn't crawled them yet, which is typical crawl budget for a new, unlinked domain:
  - /appointment-setting-for-coaches, /appointment-setting-for-saas
  - /benchmarks/meta-ads-cpm
  - /compare/done-for-you-vs-done-with-you-lead-generation, /compare/meta-ads-vs-google-ads-high-ticket
  - /crm-automation
  - /for/home-improvement, /for/law-firms
  - /meta-ads-for-course-creators, /meta-ads-for-law-firms, /meta-ads-for-real-estate-investors
- **Unknown to Google (7):** mostly pages added in the last few days:
  - /blog/scaling-from-100k-to-500k-coaching
  - 3 case studies: b2b-technology-agency-71k, executive-consulting-150k, strategic-consulting-85k
  - /for/financial-advisors
  - /tools/ltv-cac-calculator, /tools/roas-calculator
- **Crawled, not indexed (2):**
  - /blog/how-to-qualify-leads (crawled 7 Nov): it had 2 impressions at position 4.5 earlier, so it was dropped from the index after a rewrite.
  - /tools/lead-conversion-rate-calculator (crawled 15 Nov, launched 14 Nov).
- **Indexed but invisible:** 30 of the 97 indexed URLs have had zero impressions.

Conclusion: indexing is **not** the main bottleneck. 83% of URLs are indexed. Indexed pages get no traffic because they rank too low, which is an authority problem. The not-indexed group is mostly programmatic service-by-industry pages and pages days old, which matches root causes #1 and #5.

---

## 5. Competitor gap (live SERPs, 16 Nov, US web search)

| Query | Who ranks | Page type | What they have that we don't |
|---|---|---|---|
| customer acquisition agency | clicksgeek, revnew, inbeat, ninjapromo, callbox, martal, M+C Saatchi | Guides and "Top 10 2026" lists | Definition, vs lead gen, how to choose, pricing, and years of links |
| qualified lead generation services | clicksgeek (6 URLs), teknicks, callbox, singlegrain, designrush | Listicles and service pages | Directory listings (DesignRush, Clutch), review counts |
| appointment setting for coaches/agencies | belkins, stealthagents, clutch profiles, agencybooked | Lists, Clutch profiles | **Clutch/G2 profiles with reviews**; pilot pricing shown |
| speed to lead statistics | chilipiper, leandata, regie, verse, amplemarket | Stats roundups | Original data, high-authority SaaS domains |
| b2b CAC benchmarks 2026 | gripped, visionary-marketing, saashero, data-mania | Benchmark reports | Dozens of pages on one topic, cited figures |

**[verified]** Directory and review profiles (Clutch, G2, DesignRush) rank directly for the commercial terms and also pass links. QualifiedLeadsX has none that this check could find.

### Backlink gap (OpenSEO / DataForSEO, pulled 16 Nov, scope: domain + subdomains)

| Domain | Referring domains | Backlinks | Domain rank | Ranks for |
|---|---|---|---|---|
| ninjapromo.io | 4,950 | 19,895 | 46 | customer acquisition agency (listicle) |
| martal.ca | 4,709 | 31,583 | 50 | customer acquisition agency |
| belkins.io | 3,226 | 18,439 | 50 | appointment setting agencies |
| revnew.com | 877 | 2,493 | 35 | customer acquisition agency guide |
| **qualifiedleadsx.com** | **not measured** (OpenSEO ran out of credits; Bing `GetLinkCounts` = 0 linking pages) | – | – | – |

- **[verified]** Even the weakest competitor on the page for "customer acquisition agency" (revnew) has **877 referring domains**. The gap is two to three orders of magnitude, which explains positions 76–84 better than any on-page factor.
- **[verified]** Their top referring domains are mostly **statistics and "best tools/agencies" aggregator sites**:
  - Statistics roundups: worldmetrics.org, zipdo.co, statpit.com, gaugius.com, wifitalents.com.
  - Agency and tool lists: oppalerts.com, alternative.to, prospeo.io, outboundagencyindex.com.
  - These sites cite pages with original numbers.
- **The QualifiedLeadsX equivalent:**
  - The pages with its own numbers are `/benchmarks/*`: cost per booked call, show rate, close rate and Meta CPM.
  - Pitching those to statistics roundups is the most direct link route available. This adds a P0 task to section 7.
- **Not measured:** QualifiedLeadsX's own referring domains in DataForSEO, clicksgeek.com and stealthagents.com (the credits ran out after ~118 credits per domain). Re-run when credits are added: `get_backlinks_overview` for those 3 targets.

---

## 6. Fixes implemented today (commit `eec85d4`, pushed to `main`)

Evidence-led: only the head-term cluster that GSC shows is split.

| URL | Change | Evidence |
|---|---|---|
| `/` | Title changed from "Customer Acquisition Agency for High-Ticket B2B" to **"QualifiedLeadsX: Qualified Lead Generation for High-Ticket B2B"**. Description aligned. Removed the head-term keywords and the FAQ question "What does a customer acquisition agency do?" (now "What does QualifiedLeadsX do?"). | Google ranks the homepage for "qualified …" queries (63–81) and never for "customer acquisition agency". The brand name in the title helps brand recognition (0 brand queries so far). |
| `/lead-generation-agency` | The single owner of "customer acquisition agency". Title: **"Customer Acquisition Agency for High-Ticket B2B: Done-for-You"**. H1 changed to match (it said "Lead Generation Agency"). New section "Customer acquisition agency vs lead generation agency" with a comparison table. New FAQs: "What is a customer acquisition agency?" and "…vs lead generation agency". | The site nav, footer and related links already send "Customer Acquisition Agency" anchors here. The SERP shows the guide-style intent (definition, vs, how to choose). |
| `/for/agencies` | Removed the generic "What is a customer acquisition agency?" FAQ (replaced with "How do marketing agencies get clients without referrals?"). Intro heading changed to "How marketing agencies win retainer clients predictably". In-text "customer acquisition agency" link now points to `/lead-generation-agency`, not `/`. | This page was getting the head term at 76–84 because it answered the generic definition. |

Verified in the build: titles, H1, the FAQPage JSON-LD (1 per page), 0 missing required schema properties, and no raw markdown in FAQ answers. Live deploy check: verified on the live site 16 Nov (new titles, H1 and the comparison section are served). Google was asked to recrawl all 3 URLs (Indexing API: 3 accepted).

Not changed, on purpose:
- Other page titles: no evidence that they're wrong.
- The 49 zero-impression pages: they are 3–4 weeks old, so it's too early to judge them; their next review is 14 Dec.
- Performance code: lab data only, and it isn't the main constraint.

---

## 7. Recovery plan (prioritised)

| Priority | Action | Owner | URLs / keywords | KPI (measure in GSC) |
|---|---|---|---|---|
| P0 | **Freeze metadata and URL changes on core pages until 14 Dec.** One person merges SEO changes, with one dated log entry per change. | Team | `/`, `/lead-generation-agency`, `/high-ticket-lead-generation`, `/appointment-setting`, `/for/*` | Each change can be traced to a GSC movement |
| P0 | **Earn the first 10–20 referring domains**: Clutch, G2, DesignRush, GoodFirms, Sortlist profiles with real client reviews; founder guest posts or podcasts (Gaurav Kapoor); the case-study clients linking back; the sister sites already owned (contractorleads.us, funnelsthatprint.com, etc.) linking only where the link is relevant. | Founder / ops | `/`, `/lead-generation-agency`, case studies | Referring domains (Bing Webmaster `GetLinkCounts`, GSC Links report): 0 → 15 by 31 Dec |
| P0 | **Build brand demand**: put "QualifiedLeadsX" in YouTube, LinkedIn and Instagram bios and video titles; keep the Business Profile active (posts weekly) | Marketing | Brand | Brand queries in GSC: 0 → ≥30 impressions a month by Jan |
| P0 | Pitch `/benchmarks/*` original numbers to statistics roundups (worldmetrics, zipdo, statpit, gaugius, wifitalents): the same sites that link to belkins, martal and ninjapromo | Founder / marketing | /benchmarks/cost-per-booked-call, /benchmarks/show-rate, /benchmarks/close-rate, /benchmarks/meta-ads-cpm | Referring domains to /benchmarks/* |
| P1 | Get onto the listicles that rank for "customer acquisition agency" and "qualified lead generation services": pitch the publishers (clicksgeek, ninjapromo, designrush lists) | Founder | Those SERPs | Count of listicle mentions |
| P1 | Watch the head-term consolidation | SEO | "customer acquisition agency" → `/lead-generation-agency` | Ranking URL switches from /for/agencies to /lead-generation-agency within 4 weeks; position under 50 by 31 Dec |
| P1 | Consolidate "high ticket lead generation": add a strong link from the `/blog` hub intro to `/high-ticket-lead-generation` **only if** `/blog` still outranks the service page on 30 Nov | SEO | /blog, /high-ticket-lead-generation | The service page becomes the ranking URL |
| P2 | Homepage mobile performance: defer the 3D hero (FlowWave) until interaction on mobile, or swap in a static poster; trim the DOM (~3,300 nodes) | Dev | `/`, `/lead-generation-agency` | Lighthouse mobile perf ≥70, TBT <600 ms |
| P2 | Grow the pages that already rank (pos 4–15): add internal links from service pages, and a TL;DR where missing | SEO | /blog/facebook-ads-agency-vs-in-house-media-buyer, /benchmarks/close-rate, /meta-ads-agency, /blog/high-ticket-sales-training-framework | Clicks from these pages > 0, CTR > 3% |
| P3 | Review the 49 zero-impression URLs on 14 Dec: noindex or merge any that still have 0 impressions **and** are thin or programmatic | SEO | Listed in `audit/gsc-baseline-2026-11-16/page.csv` (absent = 0) | Indexed-to-impression ratio |
| P3 | Decide the target market: US (current content) vs India (where the Business Profile is). Local Indian intent needs India-specific pages. | Founder | – | Share of impressions from the target country |

**No new pages are recommended right now.** The constraint is authority, not page count.

---

## 8. Baseline for tracking (snapshot, 22 Oct – 14 Nov 2026)

| Metric | Baseline | 31 Dec target |
|---|---|---|
| Clicks (24 days) | 6 | – |
| Impressions (24 days) | 349 (last 7 days, 8–14 Nov: 277) | ≥ 1,500 in a 28-day window |
| Avg position | 48.2 | < 40 |
| Named-query impressions in top 20 | 27 / 226 (12%) | > 25% |
| Pages with impressions | 68 / 117 | > 85 |
| Brand queries | 0 | ≥ 30 impressions |
| "customer acquisition agency" | /for/agencies, pos 76–84 | /lead-generation-agency, pos < 50 |
| "qualified lead generation services" | /, pos 81 | /, pos < 50 |
| "high ticket lead generation" | /blog pos 75 | /high-ticket-lead-generation, pos < 50 |
| Referring domains (Bing) | 0 | 15 |
| Bing indexed URLs | 68 | 100 |
| Google indexed (URL Inspection) | 97 / 117 | 105 |
| Lighthouse mobile perf (home / LGA) | 41 / 62 | 70 / 80 |

Re-pull with `scratchpad/gsc/gsc.mjs` using the same dimensions. Compare 28-day windows, not 3-month windows, until February.
