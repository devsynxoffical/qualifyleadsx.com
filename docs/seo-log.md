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
7. Homepage mobile TBT (~2.9 s from the 3D hero): static poster on mobile.
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
