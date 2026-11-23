# Technical SEO audit: qualifiedleadsx.com (23 Nov 2026)

Scope: qualifiedleadsx.com only.

**Methods (all run on 23 Nov):**
- Live crawl of every sitemap URL and every page reachable through `<a href>` links in the raw HTML (125 pages).
- Google Search Console URL Inspection API on all 119 sitemap URLs.
- Search Console performance data for 26 Oct to 22 Nov.
- Chromium rendering of all 119 pages at phone size (390 px wide).
- Mobile Lighthouse on 8 key pages.

Status key: ✅ OK, ⚠️ needs attention, ❌ problem.

## Summary

| # | Check | Result | Status |
|---|---|---|---|
| 1 | Google indexing | 109 of 119 sitemap URLs indexed. 8 are "Discovered – currently not indexed", 2 are "URL is unknown to Google". None excluded, none "Crawled – not indexed" | ⚠️ |
| 2 | Canonical tags | All 119 pages have exactly one correct self-referencing canonical. Tracking parameters (?utm_…) point back to the clean URL. 2 calculators show an old canonical in Google from a crawl before the 7 Nov fix | ✅ (2 stale) |
| 3 | Robots and noindex | robots.txt allows everything except /api/. No important page is noindex. 6 deliberate noindex pages, none of them in the sitemap | ✅ |
| 4 | Sitemap | 119 URLs: all return 200, none redirect, all canonical and indexable. No indexable page is missing from it. Google read it on 21 Nov with 0 errors | ✅ |
| 5 | Internal links | No orphans, no broken links, no internal links to redirects. Every page is within 2 clicks of the homepage | ✅ |
| 6 | Rendering | 118 of 119 pages have their full main content in the raw HTML. Homepage: Google sees everything after rendering, but in the raw HTML 15 sections sit in hidden blocks after `</main>` | ⚠️ homepage |
| 7 | Duplicate content | No two pages substantially duplicate each other once the shared layout is removed. The 20 case-study pages share a template; one of them has little text of its own | ✅ / ⚠️ |
| 8 | Page quality | Thinnest pages listed below. Figures with no published source appear on about 20 pages | ⚠️ |
| 9 | Mobile and speed | 0 pages scroll sideways, 0 JavaScript errors, every H1 visible on mobile. Lighthouse scores 94–96 on 7 of 8 pages. Homepage 61 (LCP 4.3 s, TBT 730 ms) | ⚠️ homepage |
| 10 | Search performance | 1,061 impressions, 10 clicks, CTR 0.94%, average position 38.6. 456 of 615 query impressions are at position 51+ | ❌ positions |

## 1. Google indexing (URL Inspection, all 119 sitemap URLs)

- **Submitted and indexed:** 109. 109 were also indexed on 21 Nov, so nothing has changed since.
- **Discovered – currently not indexed (8).** Google knows these URLs but has not crawled them yet (no crawl date):
  - /crm-automation
  - /compare/meta-ads-vs-google-ads-high-ticket
  - /compare/done-for-you-vs-done-with-you-lead-generation
  - /case-studies/strategic-consulting-85k
  - /case-studies/b2b-technology-agency-71k
  - /tools/roas-calculator
  - /tools/ltv-cac-calculator
  - /benchmarks/meta-ads-cpm
- **URL is unknown to Google (2):**
  - /for/financial-advisors
  - /blog/scaling-from-100k-to-500k-coaching
- **Not found:** no "Excluded", no "Crawled – currently not indexed", no soft 404, no "Duplicate without user-selected canonical".
- **Why:** "Discovered, not crawled" on a new, low-authority domain usually means Google is limiting how often it crawls the site. The pages themselves are fine (200 status, correct canonical, internal links, in the sitemap).
  - Fix: internal links from strong pages, plus re-requests at your 20-a-day limit. These URLs can be sent again from 26 Nov (7-day rule).
- **Note:** the Search Console API reports "indexed: 0" per sitemap. That field is no longer filled in by the API and does not mean zero pages are indexed.

## 2. Canonical tags

- 119 of 119 pages have one canonical tag pointing to themselves.
- `?utm_source=` URLs return the clean canonical.
- Host and URL variants:
  - `http://` → `https://www` (301)
  - `https://qualifiedleadsx.com` → `https://www` (301)
  - a trailing slash → no slash (308)
- **Stale in Google:** /tools/cac-calculator and /tools/cost-per-booked-call-calculator. Google last crawled them on 6–7 Nov, when they declared the homepage as canonical (fixed 7 Nov, commit 0d4c44e).
  - Google already chose the correct canonical for both, and both are indexed.
  - Re-request both on 26 Nov so Google stores the corrected canonical.
- **Minor:** `http://qualifiedleadsx.com/...` takes 2 hops (http → https apex → www). One hop is better; this is a Hostinger setting.

## 3. Robots and noindex

- robots.txt allows all crawlers, including Googlebot, Bingbot, GPTBot, ClaudeBot and PerplexityBot, everywhere except /api/. The sitemap is declared.
- **Deliberate noindex (6):**
  - /privacy, /terms, /disclaimer
  - /book-your-call/schedule
  - /meta-ads-for-financial-advisors (duplicate topic of /for/financial-advisors)
  - /for/recruitment-agencies

  None of them are in the sitemap, and no important page is noindex. No X-Robots-Tag headers.
- **Server-level blocking, not robots.txt:** Hostinger's bot protection returns 403 to Bingbot and 429 to GPTBot.
  - Google is not affected.
  - Bing and ChatGPT crawling are affected, so the owner should allow both bots in hPanel.

## 4. Sitemap

- Sitemap index: /sitemap.xml lists sitemap-core.xml, sitemap-industries.xml and sitemap-content.xml, with 119 URLs in total.
- All 119 URLs return 200 with no redirect, canonical to themselves and indexable.
- **The sitemap matches the crawl exactly:**
  - no crawled indexable page is missing from it
  - none of the noindex pages are in it
- In Search Console: last read 21 Nov, 0 errors, 0 warnings.
- **To decide:** /case-studies/mva-personal-injury-leads-8810 is still in the sitemap and indexed, although the legal pages were removed on 20 Nov. This is one of the open owner decisions (keep or remove the MVA case study).

## 5. Internal links

- Starting from the homepage and following normal HTML links, the crawler found all 119 sitemap pages: 80 at depth 1 and 38 at depth 2.
- 0 orphans, 0 broken links, 0 links to redirected URLs.
- **Fewest inbound links (7–10 each):**
  - /blog/vsl-script-template-high-ticket
  - /case-studies/high-ticket-funnel-79k
  - /blog/speed-to-lead
  - /blog/b2b-sales-closer-job-description
  - /case-studies/agency-backend-continuity-86k
  - /blog/appointment-setter-compensation-models
  - /blog/how-to-get-coaching-clients
  - /blog/meta-ads-for-coaches-guide
  - /case-studies/strategic-consulting-85k

## 6. Rendering

- Chromium rendered all 119 pages at phone width: no load errors and no JavaScript errors.
- On 118 pages, the main text in the raw HTML matches the rendered page (at least 90% of it), so Google gets the content without needing JavaScript.
- **Homepage:**
  - The raw HTML contains all the text (4,136 words).
  - But the 15 below-the-fold sections are sent as `<div hidden>` blocks after `</main>` and moved into place by JavaScript. This comes from the `<Suspense>` wrappers added on 20 Nov to reduce Total Blocking Time.
  - Google renders JavaScript, so it sees the full page (3,477 words in rendered `<main>`).
  - Crawlers that don't run JavaScript see those sections as hidden. That includes some AI crawlers, and Bing in part.
  - The Suspense change did not reduce TBT (730 ms today).
  - Recommendation: remove the homepage `<Suspense>` wrappers, and reduce TBT in other ways (see 9).

## 7. Duplicate content

- **Method:** 5-word shingle comparison of the main text of all 119 pages, after removing text that repeats across 15% or more of pages (layout, CTAs, related links).
- **No page pair is a near-duplicate of another topic page.** The earlier overlap between blog posts (60%+ before cleaning) was shared template text, not copied articles.
- **Case studies:** /case-studies/agency-backend-continuity-86k shares about 65% of its remaining text with every other case study.
  - It has little text of its own, so its page is mostly the shared case-study template.
  - Adding its own summary and figures (from the original post) would make it distinct.
- **Already handled:** the topic overlap /meta-ads-for-financial-advisors vs /for/financial-advisors (noindex).

## 8. Page quality

**Least original text** (unique main text, shared layout removed; median page about 1,000+):

| Page | Unique words | Note |
|---|---|---|
| / | 217 | Most homepage text is shared sections; fine for a homepage |
| /about/gaurav-kapoor | 247 | Author page; could add verifiable background and links |
| /for/home-improvement | 261 | Also carries unsourced stats (82% sit rate, $18.5K, 5.8x), waiting on owner confirmation |
| /for/course-creators | 272 | Thin |
| /for/fitness-coaches | 273 | Thin; real fitness case studies exist and could be added |
| /blog/category/* (3) | 328–345 | Hub pages; acceptable |
| /benchmarks/close-rate, /benchmarks/meta-ads-cpm | 332–334 | close-rate ranks at position 3.4, so keep it short and answer-first |

**Figures with no published source** (not in lib/brand-facts.ts or the case studies):
- "$50M+ managed spend": benchmarks pages, about, services and others
- "125+ campaigns": /benchmarks
- "show rate 50% to over 82%": high-ticket strategies post
- "38% lower cost per booked call across 30+ verticals": broad targeting post

These appear in about 20 files. If they can't be backed up, they undermine trust (and E-E-A-T). They need owner confirmation or removal.

## 9. Mobile and speed

**Mobile layout:**
- 0 pages scroll sideways at 390 px, 0 tap-target clusters, H1 visible on every page.
- Some small labels inside `<p>` tags are 9–11 px (mono eyebrow labels on the service pages). Readable, but below the usual 12 px minimum.

**Mobile Lighthouse:**

| Page | Perf | A11y | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|
| / | 61 | 93 | 100 | 4.3 s | 730 ms | 0 |
| /appointment-setting | 94 | 89 | 100 | 2.3 s | 50 ms | 0 |
| /pay-per-appointment | 96 | 88 | 100 | 2.1 s | 40 ms | 0 |
| /for/insurance-agencies | 95 | 88 | 100 | 2.2 s | 50 ms | 0 |
| /blog/facebook-ads-agency-vs-in-house-media-buyer | 95 | 96 | 100 | 2.1 s | 50 ms | 0 |
| /case-studies/b2b-agency-scaling-846k | 95 | 95 | 100 | 2.2 s | 50 ms | 0 |
| /tools/lead-conversion-rate-calculator | 95 | 86 | 100 | 2.2 s | 50 ms | 0 |
| /benchmarks/close-rate | 95 | 87 | 100 | 2.2 s | 50 ms | 0 |

- **Server response is fast:** about 270–300 ms TTFB.
- **The homepage is the only slow page.** That's JavaScript work on load (the hero animation, smooth scroll, video and testimonial sections), not the server.
- Accessibility scores of 86–89 on the service pages are mostly contrast and label issues. They don't block indexing.

## 10. Search performance (Search Console, 26 Oct – 22 Nov)

**Totals:**
- 1,061 impressions, 10 clicks, CTR 0.94%, average position 38.6
- 204 queries, 99 pages with impressions, 8 pages with clicks

**By device:**
- Desktop: 878 impressions at position 40.4
- Mobile: 177 impressions at position 29.0

**By country:**
- USA: 654 impressions at position 46.5
- India: 88 at 15.2
- UK: 42 at 31.2
- Pakistan: 31 at 6.1
- Canada: 27 at 41.6

**Query impressions by position:**

| Positions 1–3 | 4–10 | 11–20 | 21–50 | 51+ |
|---|---|---|---|---|
| 8 | 36 | 32 | 83 | 456 |

- **The main problem is position, not indexing.** 74% of impressions are at position 51 or lower, where clicks almost never happen. Technically the site is sound, so what's missing is mostly authority (links, reviews, mentions). See reports/growth-plan-impressions-clicks-positions.md.
- **Best pages:**
  - /benchmarks/close-rate (position 3.4)
  - /about (2.5)
  - /benchmarks (6.3)
  - /benchmarks/cost-per-lead-by-industry (9.3)
  - /blog/facebook-ads-agency-vs-in-house-media-buyer (5–9)

## Recommended fixes, in priority order

1. **Homepage rendering:** remove the `<Suspense>` wrappers so all sections are in `<main>` in the raw HTML. Then reduce homepage TBT separately (load the hero animation and video sections later), and confirm with Lighthouse before and after.
2. **Unsourced figures:** confirm or remove "$50M+", "125+ campaigns", "82%", "38% / 30+ verticals" and the home-improvement stats ($18.5K, 5.8x, 82%). Owner decision.
3. **Indexing:**
   - Re-request the 10 not-indexed URLs and the 2 calculators with stale canonicals from 26 Nov, at 20 a day maximum.
   - Add internal links to them from strong indexed pages.
4. **Thin pages:** add real case-study figures to /for/fitness-coaches, /for/course-creators and /case-studies/agency-backend-continuity-86k.
5. **Hostinger (owner):**
   - Allow Bingbot and GPTBot in bot protection.
   - Make http apex redirect to https www in one hop.
6. **MVA case study:** keep it or remove it (owner decision).
