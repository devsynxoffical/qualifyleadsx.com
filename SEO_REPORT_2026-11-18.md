# QualifiedLeadsX SEO, AEO and GEO cycle: 18 Nov 2026

**Sources:**
- Google Search Console API (`dataState: all`; the latest day is 17 Nov)
- URL Inspection API (all 118 sitemap URLs)
- Lighthouse 12.2.1 (mobile)
- The production build
- A Playwright browser check

**Not used:**
- Third-party keyword volumes: OpenSEO has 28 credits left.
- AI-citation tracking.

No keyword metric in this report comes from anywhere except Search Console or the owner's Keyword Planner screenshots (16 Nov).

**Not repeated:**
- 16 Nov: diagnosis, "customer acquisition agency" ownership, PI page.
- 17 Nov: 23 titles, 6 descriptions, law-firm claims, llms profiles.

---

## 1. Performance baseline

| Window | Clicks | Impressions | Notes |
|---|---|---|---|
| "Last 90 days" (20 Aug – 17 Nov) | 8 | 584 | **Only 30 days of data exist.** The property's first data day is 19 Oct, so a 90-day view equals the 28–30-day view. |
| Last 28 days (21 Oct – 18 Nov), by page | 8 | 773 (page-level sum) | 83 pages, 109 queries, impression-weighted average position 36.5 |
| Last 5 days | 2 | 40 · 48 · 69 · 83 · 35 (17 Nov, partial) | 16 Nov (83) was the highest day so far; 17 Nov brought 2 clicks |

| Named-query impressions by position (28 days) | Value |
|---|---|
| 1–3 | 4 |
| 4–10 | 25 |
| 11–20 | 19 |
| 21+ | 303 |

Compared with 17 Nov: impressions are up (397 → 584 property total), clicks 6 → 8, and pages with impressions 73 → 83. Most impressions (86%) still sit beyond position 20.

## 2. Why rankings are weak (unchanged root causes, re-checked)

1. **No authority.** Bing shows 0 external linking pages. Competitors ranking for the main terms have 877–4,950 referring domains (OpenSEO, 16 Nov).
2. **The domain is about a month old in Google** (first data on 19 Oct).
3. **The same head terms still land on several pages.** "qualified lead generation services" now shows 4 URLs: / at 75, /b2b-lead-generation at 70, /lead-generation-agency at 89 and /for/b2b-services at 94. "high ticket lead generation" shows /blog 75, the strategies post 75 and the service page 55. The 16–17 Nov changes need 2–4 weeks before they can be judged, so these were not changed again today.
4. **Slow mobile homepage** (fixed today, section 3.2).

## 3. Implemented today (commit `40bb6f3`, deployed to `main`)

### 3.1 New content backed by Search Console demand
| New URL | Query evidence (GSC, 28 days) | What it is |
|---|---|---|
| `/tools/mer-calculator` | "marketing efficiency ratio calculator": pos 18, landing on the /tools hub | MER = revenue ÷ marketing spend, plus break-even MER = 1 ÷ gross margin. Comparison table of MER vs ROAS vs CAC. 5 FAQs. WebApplication + FAQPage + Breadcrumb schema. |
| `/tools/ad-frequency-calculator` | "ad frequency calculator": pos 10.5, landing on the /tools hub | Frequency = impressions ÷ reach, plus the impressions and budget needed for a target frequency. The default CPM is the site's own $24.50 benchmark, linked to its source. 4 FAQs. Same schema. |

- **Linking:** both appear in the /tools hub, the site-wide tools link list, related links (each with 2 guides and 2 services), the sitemap, IndexNow and `llms.txt`.
- **Accuracy:** only formulas are stated as fact. Neither page invents a "good MER" or "ideal frequency" benchmark; the FAQs explain why there is no universal number.
- **Rendered metadata, checked in the build:**
  - `/tools/mer-calculator`: "Marketing Efficiency Ratio (MER) Calculator" (43 characters), self-canonical, og:title, 1 H1, FAQPage.
  - `/tools/ad-frequency-calculator`: "Ad Frequency Calculator for Facebook & Meta Ads" (47 characters), same checks.

### 3.2 Core Web Vitals: homepage on mobile
**Cause:** three.js (the 3D hero, about 600 KB of script) loaded and ran during page load. That accounted for about 1.1 s of main-thread work, on top of about 2.3 s of React hydration.

**Fix:**
- On screens 767 px wide or less, three.js is no longer requested during page load.
- A still of the hero's first frame (`public/images/hero-wave-mobile.webp`, 41 KB, taken from the live scene) shows behind the hero text.
- The live scene loads on the first scroll, touch, key press or wheel event.
- Desktop is unchanged.

**Browser check (Playwright, iPhone 13 profile, local production build):**
- No three.js request before any input; 1 after scrolling.
- The WebGL context is created after the scroll.
- 0 page errors.
- The hero looks the same as before. Screenshots compared before and after the first scroll.

| Lighthouse mobile, homepage | Performance | TBT | LCP |
|---|---|---|---|
| Live site before (18 Nov, 2 runs) | 46 / 52 | 2,510 / 1,320 ms | 4.0 / 3.7 s |
| Production build with fix (local, 2 runs) | 70 / 70 | 670 / 700 ms | 4.1 / 4.0 s |
| Live after deploy, without preload (2 runs) | 50 / 50 | 800 / 790 ms | 5.6 / 5.8 s |
| **Live after preload fix, commit 2 (3 runs)** | **56 / 52 / 60** | **730 / 860 / 810 ms** | **4.5 / 4.8 / 3.8 s** |

**A regression was caught and fixed the same day.** After the first deploy, the still image became the LCP element (PerformanceObserver on a Moto G4 profile with 4x CPU throttle: image painted at 4,020 ms, text at 2,940 ms). The browser was only finding the image through the stylesheet.

A mobile-only `<link rel="preload" fetchpriority="high">` in `<head>` fixed it. The same test now shows the image painting at 2,896 ms, together with the text (2,872 ms).

**Net live result:**
- Total blocking time fell by about 35–70% (from 1,320–2,510 ms to 730–860 ms).
- Performance score is up from 46–52 to 52–60.
- LCP is within run-to-run variance of before (3.8–4.8 s vs 3.7–4.0 s).

The 4–5 s LCP is mostly hydration and server distance, not the hero.

### 3.3 Metadata
Nine meta descriptions over 155 characters were trimmed: /about, /benchmarks, /blog, /blog/b2b-appointment-setting-vs-in-house-sdr-teams, /blog/high-ticket-lead-generation-strategies, /for/coaches, /for/real-estate-investors, /high-ticket-lead-generation and /meta-ads-agency.

Claims the site does not source were removed: "verified $150M+ proof", "Elite", "$32K+ average deal spreads", and "verified" in front of benchmarks.

The playbook audit now reports **0 descriptions over 155 characters**. Three titles remain at 61–62 characters on purpose: /, /lead-generation-agency and /speed-to-lead.

### 3.4 AEO and GEO
- **AEO:** both new tools open with a short answer to the exact question ("How do you calculate marketing efficiency ratio?", "How do you calculate ad frequency?"), followed by FAQ blocks.
- **GEO:**
  - The new pages state formulas that can be checked and cite the site's own CPM benchmark with a link.
  - `llms.txt` lists both tools.
  - The Organization schema already includes Clutch, Crunchbase, Trustpilot and the founder Person.
- **AI crawler access** (unchanged since 17 Nov):
  - Allowed: OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended.
  - Blocked by Hostinger's bot protection: GPTBot (429) and Applebot-Extended (403).
  - The test used spoofed user agents from this server, so it can't confirm how the real crawlers are treated.

## 4. Keywords targeted this cycle

| Keyword | Evidence | URL | Position before |
|---|---|---|---|
| marketing efficiency ratio calculator | GSC, 2 impressions | /tools/mer-calculator (new) | 18 (on /tools) |
| ad frequency calculator | GSC, 2 impressions | /tools/ad-frequency-calculator (new) | 10.5 (on /tools) |
| mer calculator, how to calculate marketing efficiency ratio, mer vs roas | Semantic variants of the above (no volume data) | /tools/mer-calculator | – |
| facebook ad frequency, how to calculate ad frequency | Semantic variants (no volume data) | /tools/ad-frequency-calculator | – |

Watched but not changed: "facebook ads agency vs hiring an in-house media buyer" (pos 5.1, 17 impressions, 0 clicks). Its title and summary were aligned on 16–17 Nov.

## 5. Technical and indexing audit

**URL Inspection API, all 118 sitemap URLs (18 Nov; run with retries, 0 fetch errors):**

| Status | 16 Nov | 18 Nov |
|---|---|---|
| Submitted and indexed | 97 | **100** |
| Discovered, currently not indexed | 13 | 11 |
| URL is unknown to Google | 6 | 7 |
| Crawled, currently not indexed | 2 | 0 |

- **Newly indexed since 16 Nov:** /personal-injury-leads (crawled 17 Nov), /blog/how-to-qualify-leads and /tools/lead-conversion-rate-calculator.
- **Canonicals:** 0 mismatches between Google's chosen canonical and the declared one.
- **Still not indexed (18):**
  - /appointment-setting-for-coaches and /appointment-setting-for-saas
  - /benchmarks/meta-ads-cpm
  - /blog/scaling-from-100k-to-500k-coaching
  - 3 case studies (b2b-technology-agency-71k, executive-consulting-150k, strategic-consulting-85k)
  - 2 comparison pages
  - /crm-automation
  - /for/financial-advisors, /for/home-improvement and /for/law-firms
  - /meta-ads-for-course-creators, /meta-ads-for-law-firms and /meta-ads-for-real-estate-investors
  - /tools/ltv-cac-calculator and /tools/roas-calculator
- **A few pages moved backwards** in the API, from "discovered" to "unknown" (e.g. /meta-ads-for-law-firms). Google reports this when it drops a discovered URL from its crawl queue. None of these pages has an error, block or noindex.
- **Most likely cause** (my inference): Google is rationing crawl on a new domain with no external links. The programmatic service-by-industry pages and the newest pages are waiting in the queue.

**Recrawl requests (18 Nov):**
- **Google Indexing API:** 29 accepted, 0 failed. That covers the 2 new tools, the 10 pages with changed descriptions, the homepage and 16 of the 18 not-indexed URLs.
- **Bing:** the first submission got a temporary 503 from Bing's service; the retry was accepted (25 URLs).
- Accepted does not mean indexed. Google documents its Indexing API only for job-posting and livestream pages.

**Live checks after deploy:**
- **New tools:** /tools/mer-calculator and /tools/ad-frequency-calculator return the new titles, self-canonicals and FAQPage schema.
- **Sitemaps:** both tools are in the live sitemaps.
- **Homepage:** the preload tag is served.

**Other checks today:**
- `seo:validate`: 0 missing required schema properties.
- `seo:links`: 0 broken links and 0 orphan pages across 120 indexable pages.
- `playbook-audit`: no keyword collisions, at least 5 internal links into every page.
- Sitemap: the 2 new tools were added.
- robots.txt unchanged.

## 6. Backlink and authority opportunities (new this cycle)
The two new calculators can be submitted to free-tool directories:
- [Product Hunt](https://www.producthunt.com/)
- [AlternativeTo](https://alternativeto.net/)
- [SaaSHub](https://www.saashub.com/)

They can also be offered to "marketing calculators" roundups. These are owner actions. The full plan is in `docs/backlink-plan-qualifiedleadsx.pdf`.

## 7. Next priorities
1. **30 Nov measurement:** use 28-day windows for the 16–18 Nov changes: the head-term owner for "customer acquisition agency", CTR on the 23 retitled pages, and whether the PI page and the 2 new tools rank.
2. **Mobile hydration** (about 2.3 s): the homepage renders 3,300+ DOM nodes and around 20 client sections. The next step is converting static sections (TrustBar, Process, Industries and similar) to server components.
3. **Owner:**
   - Clutch and Trustpilot reviews.
   - Tool-directory submissions.
   - Real credit-repair results.
   - GA4 access: enable the Analytics Data API in Cloud project `contractorleads-502510` and send the property ID.
