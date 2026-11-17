# QualifiedLeadsX SEO, AEO and GEO cycle: 17 Nov 2026

**Data sources:** Google Search Console API (property `https://www.qualifiedleadsx.com/`; the latest day available is 14 Nov), URL Inspection API (all sitemap URLs), Bing Webmaster API, a live crawl of all 120 URLs with `scripts/seo-audit.mjs`, the production build, and Google Keyword Planner figures supplied by the owner.

**Not available this cycle:**
- **Third-party keyword volumes:** OpenSEO has 28 credits left, so no volumes were pulled. Every keyword metric below comes from Search Console or the owner's Keyword Planner screenshots.
- **AI citation tracking.**

Raw files:
- `audit/2026-11-17.json` and `.csv`: page-level crawl.
- `audit/gsc-baseline-2026-11-16/`: Search Console exports.
- `reports/playbook-audit.csv`: per-page action list.

---

## 1. Baseline (before this cycle)

| Metric | Value | Source |
|---|---|---|
| Search Console window | 19 Oct – 14 Nov 2026 (first data 19 Oct) | GSC |
| Clicks / impressions | 6 / 397 (CTR 1.5%) | GSC |
| Impression-weighted average position | 37.9 | GSC, page dimension |
| Pages with impressions / queries | 73 / 87 | GSC |
| Named-query impressions by position | 1–10: 26 · 11–20: 10 · 21–30: 1 · 31+: 217 | GSC |
| Brand-name queries | 0 | GSC |
| Sitemap URLs / indexable | 118 / 118 (2 noindex pages correctly left out of the sitemap) | Crawl |
| Google indexed (16 Nov) | 97 of 117 | URL Inspection |
| Bing indexed | 68 | Bing API |
| Titles over 60 characters | 26 | Crawl |
| Descriptions over 160 characters | 6 | Crawl |
| Duplicate titles / descriptions / missing H1 / canonical issues / images without alt / missing OG | 0 / 0 / 0 / 0 / 0 / 0 | Crawl |
| Broken internal links / orphan pages | 0 / 0 | `seo:links` |
| Lighthouse mobile performance (lab, 16 Nov) | Home 41 · /lead-generation-agency 62 · /for/agencies 96 · /appointment-setting 92 | Lighthouse 12.2.1 |

## 2. Why rankings are weak (root causes, in order of impact)

Unchanged since the 16 Nov diagnosis (`SEO_DIAGNOSIS_2026-11-16.md`) and confirmed again by today's data:

1. **No authority.**
   - 0 external linking pages in Bing.
   - Competitors ranking for the main terms have 877–4,950 referring domains (OpenSEO, 16 Nov).
   - 85% of named-query impressions sit at position 31 or lower.
2. **The site is about 4 weeks old.**
   - Google is still testing where pages belong.
   - Between 19 Oct–7 Nov and 8–14 Nov, impressions rose but average positions fell on several pages: `/` 5.4 → 52.3, `/for/agencies` 34.5 → 77.6, `/for/coaches` 15.9 → 36.8, `/for/consultants` 7.2 → 32.
   - The same pages started appearing for broader, more competitive queries. This is a change in query mix, not a penalty. **[inference from the query data]**
3. **Some pages lost all impressions after 7 Nov:**
   - /blog/high-ticket-sales-training-framework (11 impressions, pos 15.4)
   - /blog/b2b-roas-benchmarks-qualified-appointment-generation (4, pos 13.2)
   - /blog/high-ticket-sales-how-to-get-high-ticket-clients (5, pos 16.4)
   - /mastermind/hidden-facebook-interest (7, pos 20.3)

   Their index status is in section 6.
4. **The same head terms are still split across pages:**
   - "high ticket lead generation": /blog 75 · strategies post 84 · service page 55
   - "qualified lead generation services": / 81 · /lead-generation-agency 90 · /for/b2b-services 94
5. **Truncated titles and unsourced claims (fixed today, section 3).** These hurt CTR and the trust signals AI search uses.

## 3. Changes made today (commit `28a32e8`, deployed to `main`)

### Metadata

Shortened 23 titles that Google truncates. The first words, where the keyword sits, stay the same. Only the parenthetical tail was cut.

| Page | Before | After |
|---|---|---|
| /vsl-funnels | VSL Funnel Agency: High-Ticket Video Sales Letter Funnels ($3K–$25K Deals) | VSL Funnel Agency: High-Ticket Video Sales Letter Funnels |
| /appointment-setting | B2B Appointment Setting Agency: 30–50 Qualified Sales Calls Monthly | B2B Appointment Setting Agency: 30–50 Sales Calls a Month |
| /compare/qualifiedleadsx-alternatives | Top QualifiedLeadsX Alternatives: Lead Gen Agencies Comparison (2026) | QualifiedLeadsX Alternatives: Lead Gen Agencies Compared |
| /mastermind | AI Client Acquisition Mastermind for Agency Owners & Coaches ($100K–$500K/Mo) | AI Client Acquisition Mastermind for Agency Owners & Coaches |
| /about | About QualifiedLeadsX: $50M+ Meta Ads Managed \| Gaurav Kapoor | About QualifiedLeadsX: $50M+ Meta Ads Managed |
| /for/med-spas | …High-Ticket Booking Agency ($3K–$10K Packages) | Med Spa Lead Generation: High-Ticket Booking Agency |
| /for/coaches | …Client Acquisition Funnels ($5K–$25K Offers) | Lead Generation for Coaches: Client Acquisition Funnels |
| /for/consultants | …B2B Client Acquisition System ($10K+ Retainers) | Lead Generation for Consultants: B2B Client Acquisition |
| /for/agencies | …Client Acquisition System ($5K–$25K Retainers) | Lead Generation for Agencies: Win More Retainer Clients |
| /meta-ads-for-coaches | Facebook Ads for Coaches: Best Practices & Client Acquisition ($5K–$25K) | Facebook Ads for Coaches: Management Best Practices (matches the query "best practices for facebook ads management for coaches") |
| /benchmarks | …2026 ($50M+ Data Breakdown) | B2B & High-Ticket Marketing Benchmarks 2026 |
| /tools/cac-calculator | …Benchmarks \| QualifiedLeadsX | B2B CAC Calculator & Acquisition Benchmarks |
| /blog | …Blog: Scaling Guides & Frameworks | B2B Client Acquisition & Meta Ads Blog |
| 10 blog posts | e.g. "Facebook Ads Agency vs Hiring an In-House Media Buyer: 2026 Cost & ROI Comparison" (81) | "Facebook Ads Agency vs Hiring an In-House Media Buyer" (53; exact match for its pos 4–12 query) |

The other 9 blog titles are listed in `git show 28a32e8 -- lib/blog-data.ts`.

Trimmed 6 descriptions to 155 characters or fewer: /lead-generation-agency, /b2b-lead-generation, /appointment-setting, /for/consultants, /for/agencies and /tools/cac-calculator. While doing so I removed claims the site cannot support:
- "Top customer acquisition agencies"
- "20–40 vetted discovery meetings"
- "88%+ show-up rate" from a meta description. 88.4% does appear on /benchmarks/show-rate as the site's own benchmark, so it was left there.

Left at 61–62 characters on purpose: `/`, `/lead-generation-agency` and `/speed-to-lead`. The first two were changed on 16 Nov to fix cannibalisation, and changing them again would reset that test.

### GEO: factual accuracy
- On `/for/law-firms` and `/meta-ads-for-law-firms` I removed claims with no source anywhere on the site:
  - "100% State Bar Ethics Compliant" (a legal-risk claim)
  - "3.8x pipeline growth"
  - "15 to 35 retainers monthly"
  - "80% lower cost than Google PPC"
  - "300%" retention and conversion lifts
- In their place: the MVA case study figures (8,810 leads, $7.61 per lead) and plain statements.
- `llms.txt` and `llms-full.txt` now list the third-party profiles already in the Organization schema (Clutch, Crunchbase, Trustpilot) and the founder's LinkedIn. This lets AI systems confirm the entity.

### AEO
- The summary question on /blog/meta-ads-for-high-ticket-b2b-broad-targeting is now "How should you target Facebook ads for high-ticket products and B2B offers?". It matches the query the post ranks for ("facebook ads targeting for high ticket products", position 18.5).
- Already in place and not redone:
  - Short-answer blocks (51 pages)
  - FAQPage markup (108)
  - Speakable markup (36)
  - Question-style H2s (57)
  - aeoSummary on every post

### Internal links
- `/personal-injury-leads` (new on 16 Nov, 4 inbound links) is now linked from the site-wide footer.

### Content
- No new pages this cycle.
- The only new demand found was in the owner's Keyword Planner data:
  - "personal injury leads" was covered on 16 Nov.
  - "credit repair leads" (100–1K searches a month) has no client result on the site, so a page would be thin or made up. It is on hold until the owner provides real data.

## 4. Keywords targeted (evidence-based)

| Keyword | Evidence | Page | Current pos |
|---|---|---|---|
| customer acquisition agency | GSC 31 impressions | /lead-generation-agency (owner page since 16 Nov) | /for/agencies 76–84 (before the fix) |
| qualified lead generation services / company | GSC 16 impressions | / | 63–81 |
| high ticket lead generation | GSC 14 impressions | /high-ticket-lead-generation | 55 (service page), 75 (/blog) |
| facebook ads agency vs hiring an in-house media buyer | GSC 16 impressions | /blog/facebook-ads-agency-vs-in-house-media-buyer | 4–12 |
| how to get marketing qualified leads | GSC 5 impressions | /blog/how-to-qualify-leads | 6.7–9.6 |
| facebook ads targeting for high ticket products | GSC 4 impressions | broad-targeting post | 18.5 |
| best practices for facebook ads management for coaches | GSC 5 impressions | /meta-ads-for-coaches, /blog/meta-ads-for-coaches-guide | 58 |
| personal injury leads (+ lead generation, for attorneys, for sale) | Keyword Planner 100–1K | /personal-injury-leads | not yet in GSC |
| credit repair leads | Keyword Planner 100–1K | none (no facts) | – |

## 5. Technical audit

- **Status codes:** all 120 crawled URLs return 200, with no redirect chains.
- **Canonicals:** self-referencing everywhere.
- **Duplicates:** 0 duplicate titles or descriptions. One H1 per page.
- **Sitemap:** split into 4 files (sitemap index plus core, industries and content). Noindex pages are excluded, and `lastmod` is generated from file changes.
- **robots.txt:** lists 16 user agents, all allowed.
- **Rendering:** static HTML contains the title, H1, body and JSON-LD.
- **Crawler access** (spoofed user agents from this server):
  - **Get through:** Googlebot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended and CCBot all get 200.
  - **Blocked at the host:** Bingbot (403), GPTBot (429) and Applebot-Extended (403) are blocked by Hostinger's bot protection.
  - Bing's own crawl data shows real Bingbot getting through: 68 indexed, 0 errors. Real GPTBot and Applebot could not be tested from here.
- **Schema:** 0 missing required properties (`npm run seo:validate`).
- **Core Web Vitals:**
  - No field (CrUX) data: the PageSpeed API quota was used up on 16 Nov.
  - Lab results: the homepage scores 41 on mobile (LCP 4.6 s, TBT 2,170 ms), driven by the 3D hero and DOM size; this was not changed today. Other money pages score 62–96.
- **Thin-content flags** (fewer than 600 unique words): mostly case studies, tools and benchmark pages. These are data pages by design and were not padded.

## 6. Indexing

INDEXING

## 7. Remaining opportunities and the next cycle (from 24 Nov)

1. **Authority (biggest lever):**
   - Clutch, Crunchbase and Trustpilot profiles now exist. Next is client reviews on Clutch and Trustpilot.
   - Then G2, DesignRush, a LinkedIn company page, and pitches to statistics roundups for `/benchmarks/*` (see `docs/backlink-plan-qualifiedleadsx.pdf`).
   - **KPI:** referring domains in Bing, from 0 to 15 by 31 Dec.
2. **Pages that lost impressions after 7 Nov** (section 2.3): if any are still indexed, leave them alone. Pages change rank often in a site's first months, and rewriting them resets Google's evaluation.
3. **Measure the 16–17 Nov changes on 30 Nov, using the same 28-day windows:**
   - Did /lead-generation-agency replace /for/agencies for "customer acquisition agency"?
   - CTR on the 23 retitled pages.
   - Whether /personal-injury-leads appears in GSC.
4. **Homepage mobile performance:** load the 3D hero only after the user interacts. **KPI:** Lighthouse mobile ≥ 70, TBT under 600 ms.
5. **Owner decisions:**
   - Real credit-repair results, so that page can be built.
   - Confirmation of the remaining site-wide brand claims, e.g. "$50M+ managed spend" and "$150M+ pipeline", which have no on-site source.
   - Which address to use on directories.
6. **AI citation tracking:** needs OpenSEO credits (an AI-visibility run) or manual prompt checks. There is no evidence yet of AI citations.
