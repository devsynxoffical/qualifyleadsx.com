# Why qualifiedleadsx.com is not performing: investigation, 19 Nov 2026

This investigation does not assume the existing SEO strategy is right, including the work done in my own sessions since 21 Oct.

**Data used**
- **Google Search Console:** API, `dataState: all`; the latest day is 18 Nov.
- **URL Inspection:** all 118 sitemap URLs, run on 18 Nov.
- **Bing Webmaster API.**
- **Google Business Profile:** API via Windsor.
- **Lighthouse.**
- **Git history:** every change made to the site.

**Not available**
- **GA4:** the Google Analytics Data API is disabled in Cloud project `contractorleads-502510` (error `SERVICE_DISABLED`), so visits and conversions cannot be read. The site does send a GA4 `generate_lead` event when the booking form is submitted. The data exists; it just cannot be read from here.
- **Third-party keyword volumes:** the OpenSEO account has 28 credits left.

Raw data is in `reports/rank-snapshots/` and `audit/`. The per-page table is in section 4.

---

## 1. Baseline, and why the requested comparisons are impossible

| Requested comparison | Result |
|---|---|
| Last 28 days (22 Oct – 18 Nov) | **678 impressions, 9 clicks, CTR 1.3%, average position 40.5** |
| Previous 28 days (24 Sep – 21 Oct) | **0**: Search Console has no data before 19 Oct |
| Last 3 months (19 Aug – 18 Nov) | Same as the last 28 days; all data falls after 19 Oct |
| Previous 3 months (19 May – 18 Aug) | **No data** |

The first commit in this repository is 21 Oct 2026, and Search Console starts on 19 Oct. **The site has a 30-day history.** The closest honest comparison is the first half against the second half:

| Period | Impressions | Clicks | Avg position | Days |
|---|---|---|---|---|
| 19 Oct – 3 Nov | 82 | 5 | 31.3 | 16 |
| 4 – 18 Nov | **596** | 4 | 41.8 | 15 |

- **Impressions rose about 7x.** Google started showing the site for more searches.
- **Average position got worse (31 → 42) and clicks did not rise.** The new impressions are for competitive commercial searches where the site sits on pages 5–10, where nobody clicks.
- **No conversion rate can be calculated.** 9 organic clicks in 28 days is far too few, and GA4 is unreadable. The Business Profile had **0 website clicks** in 29 days.

**Conversion is not the bottleneck today. Traffic is.** With about 9 visits a month from Google, even a perfect landing page produces about 0 leads.

## 2. Root causes, ranked by business impact

### #1 No authority: the site cannot rank for the commercial terms it targets
- **Evidence:**
  - Bing reports **0 external pages linking** to the site.
  - OpenSEO (16 Nov) shows the sites ranking for "customer acquisition agency" have **877 to 4,950 referring domains** (revnew, belkins, martal, ninjapromo).
  - **0 brand searches**: no one searches "QualifiedLeadsX".
  - Commercial queries average **position 67.0** (51 queries, 173 impressions, 1 click). Informational queries average 46.8.
- **Verdict on past work:** **we targeted the wrong keywords for this stage.** The homepage, /lead-generation-agency, /high-ticket-lead-generation and /b2b-lead-generation were all optimised for head terms such as "customer acquisition agency", "qualified lead generation services" and "high ticket lead generation". With no links, they sit at positions 52–89. On-page edits cannot move those pages to page 1.
- **What does rank:** specific, low-competition pages:

| Page or query | Position |
|---|---|
| /about | 2.9 |
| /benchmarks/close-rate | 3.7 |
| "facebook ads agency vs hiring an in-house media buyer" | 5.3 |
| /vsl-funnels | 5.6 |
| /meta-ads-agency (2 clicks) | 12.5 |

### #2 Constant rewriting: Google never sees a stable page
- **Evidence:** 188 commits in 30 days, up to 26 in one day (16 Nov). Metadata title rewrites in the last month:

| Page | Title rewrites |
|---|---|
| /lead-generation-agency | 6 (**3 on 16 Nov alone**) |
| / | 5 |
| /for/agencies | 5 |
| /for/coaches | 4 |
| /high-ticket-lead-generation | 3 |
| /b2b-lead-generation | 3 |

- **Two parties are editing the same pages:** my sessions (author "DEVSYNX"/"Claude") and the team's commits (author "devsynxoffical"). On 16 Nov, /lead-generation-agency went through three titles in one day: "Customer Acquisition Agency: Done-for-You Lead Gen" → "…Qualified Lead Generation Services" → "…for High-Ticket B2B: Done-for-You". **This is a process failure we caused, not a Google problem.**
- **Impact:** every rewrite makes Google re-evaluate the page, and no single version stays live long enough to judge.

### #3 Too many weak pages too early (113 new URLs in a month)
- **Evidence:** 123 URLs in the sitemap (10 at the start of the month). **39 URLs had 0 impressions** in 28 days, 18 are not indexed, and 80% of impressions come from 37 URLs.

| Page group | URLs | Impressions | URLs with 0 impressions | Indexed |
|---|---|---|---|---|
| Service × industry (/meta-ads-for-*, /appointment-setting-for-*) | 11 | **7** | 8 | 6 |
| Case studies | 14 | 14 | 9 | 11 |
| Industry pages (/for/*) | 14 | 135 | 5 | 11 |
| Blog posts and hubs | 37 | 279 | 3 | 36 |
| Tools | 12 | 107 | 4 (2 new) | 8 |

- **Verdict:** **the service × industry pages were unnecessary.** They repeat the /for/ industry pages and the core service pages:
  - /meta-ads-for-law-firms, /for/law-firms and /personal-injury-leads cover the same buyer.
  - Google has chosen not to index 5 of the 11, and the 11 together earned 7 impressions.
  - Case studies are proof that helps people convert, but they bring almost no search traffic.

### #4 The homepage sends visitors and authority to the wrong pages
- **Evidence from the homepage "industries" grid:**
  - "Insurance Agencies" links to **/for/insurance-agencies, which is set to noindex**. The real insurance proof is on /final-expense-leads (2,440 leads at $7.79).
  - "Personal Injury Law Firms" links to /for/law-firms, which is **not indexed**. The page with the proof (/personal-injury-leads) is indexed and has never been linked from the homepage.
  - The new pages with the strongest proof (/mva-leads, /final-expense-leads) get **no link from the homepage**, the strongest page on the site.

### #5 The market signals do not match
- **Evidence:** 277 of the named-query impressions are from the USA, at average position 64. The Business Profile, the office and the phone number are in Delhi.
- **Local Indian intent is already appearing:** "digital marketing agency in rajouri garden" (position 61), a few km from the Mansarover Garden office, and the Business Profile had 33 direction requests.
- **Verdict:** the content speaks to US high-ticket buyers, while the only local entity is in Delhi. Neither side is strong yet.

### #6 Technical: not the main cause, but real
- **Indexing:** 100 of 118 URLs indexed. Every not-indexed URL is "discovered" or "unknown"; there are no errors or blocks. That is a crawl-priority problem caused by low authority and too many weak pages.
- **Mobile homepage:** Lighthouse performance 52–60 (was 41–52), total blocking time 730–860 ms, around 3,300 DOM elements, 2.3 s of hydration.
- **No faults found:** 0 broken links, 0 schema errors, canonicals correct, robots.txt correct, sitemap correct.
- **AI crawlers:** spoofed GPTBot (429) and Applebot-Extended (403) are blocked by Hostinger's bot protection. Real GPTBot could not be tested from here.

### #7 Competitors (live SERPs, 16 Nov)
What ranks for our commercial targets:
- **Guides and list articles:** "What a customer acquisition agency does", "10 best … 2026".
- **Directory profiles:** Clutch, G2 and DesignRush.

The ranking sites have years of links, reviews and directory listings. Our pages are sales pages that compete on a different kind of intent.

## 3. What past work did and did not achieve

| Work | Verdict | Evidence |
|---|---|---|
| Schema, sitemaps, canonicals, robots, llms.txt | Worked (hygiene) | 0 errors; 100/118 indexed |
| Long-tail, data-led pages (benchmarks, comparisons, specific posts) | **Worked best** | Positions 2.9–12.5; 6 of 9 clicks |
| Head-term metadata optimisation (homepage, /lead-generation-agency etc.) | **Did not work yet; wrong target for a 0-link site** | Positions 52–89 after 3–6 rewrites |
| Service × industry pages | **Did not work** | 11 URLs, 7 impressions, 5 not indexed |
| Frequent title rewrites | **Harmful** | 6 rewrites on one page in a month, from two editors |
| Off-site authority | **Barely started** | 0 linking pages; Clutch, Crunchbase and Trustpilot profiles created 16–17 Nov |

## 4. Page-by-page recovery plan (top 20 by business impact)

"Hold" = no title, description or H1 changes until 14 Dec, so the 16–18 Nov versions can be measured.

| URL | 28-day data | Problem | Action | Validation |
|---|---|---|---|---|
| / | 86 impr, 2 clicks, pos 32 | Head-term title; links to noindex/unindexed pages | **Fix industry links now** (C1); hold title | Links point to indexed pages; GSC 28d on 14 Dec |
| /personal-injury-leads | indexed, 0 impr | Never linked from homepage | **Homepage link** (C1) | Impressions for "personal injury leads" by 14 Dec |
| /mva-leads | new, not yet inspected | No homepage link; 10 published proofs | **Homepage link** (C1); request indexing | Indexed; "mva leads" impressions |
| /final-expense-leads | new | Homepage "Insurance" tile points at a noindex page | **Repoint the tile** (C1) | Indexed; "final expense leads" impressions |
| /meta-ads-for-law-firms | unknown to Google, 0 impr | Third page for the same legal buyer | **301 → /personal-injury-leads** (C2) | Redirect 301; sitemap no longer lists it |
| /meta-ads-for-real-estate-investors | not indexed, 0 | Duplicates /for/real-estate-investors | **301 → /for/real-estate-investors** (C2) | Same |
| /meta-ads-for-course-creators | not indexed, 0 | Duplicates /for/course-creators | **301 → /for/course-creators** (C2) | Same |
| /appointment-setting-for-coaches | not indexed, 0 | Duplicates /for/coaches | **301 → /for/coaches** (C2) | Same |
| /appointment-setting-for-saas | not indexed, 0 | Duplicates /for/saas | **301 → /for/saas** (C2) | Same |
| /meta-ads-for-consultants, /meta-ads-for-saas, /appointment-setting-for-agencies | indexed, 0 impr | Probably the same problem | Review 14 Dec; merge if still 0 | GSC on 14 Dec |
| /lead-generation-agency | 25 impr, pos 52 | 6 title rewrites; head term | **Hold** | GSC on 14 Dec |
| /for/agencies | 69 impr, pos 60 | Ranks for the head term without a matching link profile | **Hold** | GSC on 14 Dec |
| /meta-ads-agency | 24 impr, **2 clicks**, pos 12.5 | Closest money page to page 1 | Internal links from relevant posts (next cycle) | Position < 10 |
| /blog/facebook-ads-agency-vs-in-house-media-buyer | 19 impr, pos 5.3, 0 clicks | Page 1, no clicks | Hold (retitled 17 Nov); watch CTR | CTR > 0 by 14 Dec |
| /benchmarks/close-rate | pos 3.7, 1 click | Already works | Link to /appointment-setting (next cycle) | Clicks |
| /benchmarks/cost-per-lead-by-industry | 20 impr, pos 25 | Med spa FAQ added 19 Nov | Hold | "med spa cost per lead" position |
| /tools/mer-calculator, /tools/ad-frequency-calculator | new | Queries still land on /tools | Wait for indexing | Indexed by 25 Nov |
| /for/law-firms | not indexed | Carried unsourced stats until 17 Nov | Keep as legal hub; linked to PI/MVA | Indexed by 14 Dec |
| /for/insurance-agencies | noindex | Linked from the homepage | Homepage link removed (C1) | – |
| Case studies (14) | 14 impr total | Proof assets, not SEO assets | No change; link from money pages | – |

## 5. What will actually grow the business (in order)

1. **Links and reviews (owner, highest impact).** Clutch and Trustpilot reviews from real clients; G2, DesignRush and GoodFirms listings; guest and podcast appearances (plan in `docs/backlink-plan-qualifiedleadsx.pdf`). **KPI:** referring domains (Bing) 0 → 15 by 31 Dec.
2. **Stop the churn (process, today).** One editor, one change log (`reports/recovery-tracker.csv`), and no title or description edits within 14 days of the last one. **KPI:** title rewrites per page in December ≤ 1.
3. **Focus on winnable, buyer-intent searches with proof.** Use niche lead pages (MVA, personal injury, final expense) and data-led pages (benchmarks, comparisons) instead of agency head terms. **KPI:** impressions and clicks on /mva-leads, /personal-injury-leads and /final-expense-leads.
4. **Measurement (owner, 5 minutes).** Turn on the Google Analytics Data API for project `contractorleads-502510`, add the service account as Viewer and send the GA4 property ID. **KPI:** a lead count from organic search becomes measurable.
5. **Local Business Profile (owner).** Rename to "QualifiedLeadsX", review Google's pending edits and collect reviews. "Digital marketing agency in rajouri garden" shows the local demand exists.
6. **Mobile hydration** (later; not the main cause).

## 6. Executed today (see `reports/recovery-tracker.csv`)
Kept small on purpose: three changes, each with a reason, a URL and a validation check.
- **C1:** homepage industry grid repointed to the indexed proof pages.
- **C2:** 5 unindexed, zero-impression service × industry pages consolidated with 301 redirects.
- **C3:** recovery tracker, and the 12-hourly routine updated to read it and enforce the no-churn rule.
