# Rollout (STEP 6) and weekly measurement (STEP 7)

Weeks run Monday to Friday. Week 1 started on Monday 9 November 2026. The exact pages and URLs for each week are in `reports/playbook-page-plan.csv`, in the "Build week" column.

## Week by week

| Week | Dates | Build | Pages |
|---|---|---|---|
| 1 | 9 to 13 Nov | **Done:** audit, sitemap split, robots.txt, llms.txt, related-links block on every page, titles under 60 characters, meta descriptions under 155, no keyword collisions, every page with 5+ internal links in | Foundation |
| 2 | 16 to 20 Nov | New /pricing. Upgrade the thin core pages to the core template: /crm-automation, /outsourced-sales-closers, /whatsapp-lead-nurture, /speed-to-lead, /lead-generation-agency, /high-ticket-lead-generation, /b2b-lead-generation, /vsl-funnels. Add pricing and industries sections to /meta-ads-agency and /appointment-setting. | 1 new, 10 upgraded |
| 3 | 23 to 27 Nov | /locations hub and 4 country pages (US, UK, Canada, Australia), once facts 1 to 4 are in. Upgrade the first 10 industry pages: /for/coaches, consultants, agencies, b2b-services, saas, financial-advisors, med-spas, law-firms, real-estate-investors, business-coaches. | 5 new, 10 upgraded |
| 4 | 30 Nov to 4 Dec | Upgrade the remaining 8 /for pages and the 8 /meta-ads-for pages. Build 2 tools: /tools/meta-ads-budget-calculator and /tools/close-rate-calculator. Expand the existing tools to 600+ words below the calculator. City pages only where fact 5 confirms real clients. | 2 new, 16+ upgraded |
| 5 | 7 to 11 Dec | Upgrade the 4 /appointment-setting-for pages. Build the 10 new service-for-industry pages, in batches of 5, once fact 16 is confirmed for each. | 10 new, 4 upgraded |
| 6 onward | From 14 Dec | 2 blog posts a week (the 8 planned posts first, then expand the thin posts), 2 to 3 tools a month (/tools/speed-to-lead-test, /tools/funnel-conversion-calculator, /tools/appointment-setter-commission-calculator), then expand whichever page type wins in STEP 7 | Ongoing |

Note on the date: weeks 4 to 6 fall in Q4, when Meta CPMs peak. This affects ad clients, not SEO, but holiday weeks slow content approvals. Plan human edits early.

## Daily routine while pages are going live

1. Publish the day's pages: merge to `main`, and Hostinger deploys.
2. Open each page with JavaScript off (`curl -s URL | grep "<h1"`, or view source) and check that the full text is in the HTML.
3. Request indexing in Search Console. The manual tool has a daily limit, so do hubs and core pages first. Or run `npm run index:google -- <urls>`; the Indexing API quota is 200 a day and is shared with the other project.
4. Ping IndexNow: `npm run index:now` (add the new URLs to `scripts/submit-indexnow.mjs`).
5. Add the new pages to `lib/related-links.ts` and to their hub page the same day. Location pages also need a "Where we work" group added to the service rules.
6. Log the URLs in the tracker, then run `npm run build && python3 -I scripts/playbook-audit.py && npm run seo:links`. The page must show "keep", with 5+ internal links in.

## Weekly measurement checklist (every Monday)

In **Search Console, Performance, last 7 days compared with the previous 7**:

- [ ] Filter pages containing `/locations/`: record impressions, clicks and average position
- [ ] Filter pages containing `-for-`, and separately `/for/`: same three numbers (industry pages)
- [ ] Filter pages containing `/tools/`, and separately `/benchmarks/`: same three numbers
- [ ] Filter pages containing `/blog/`: same three numbers
- [ ] Everything else (core): same three numbers
- [ ] Work out **impressions per page** for each type (impressions ÷ number of live pages of that type)

In **Search Console, Indexing, Pages, filtered by sitemap**:

- [ ] For sitemap-core.xml, sitemap-industries.xml, sitemap-locations.xml and sitemap-content.xml, record indexed vs not indexed
- [ ] If more than 20% of a group is "Crawled, currently not indexed", stop publishing that type. Add unique content to the existing pages first, because they are too similar.

Decide:

- [ ] **Expansion rule:** the page type with the most impressions per page gets the next batch. If locations win, add cities where fact 5 confirms clients. If industries win, add more service-for-industry pages.
- [ ] **Queries in positions 8 to 20:** in Performance, Queries, filter position > 7.9 and < 20.1. Add each relevant query as an H2 or FAQ question on the page that ranks for it, then request reindexing.
- [ ] **Cannibalisation:** if two URLs get impressions for the same query, pick one primary page and point the other to it with an internal link, or merge the two.
- [ ] Re-run `python3 -I scripts/playbook-audit.py`: "merge or differentiate", "shorten title", "shorten description" and "add links" must all be 0.

Track it here (one row per week):

| Week | Type | Live pages | Impressions | Clicks | Avg position | Impr per page | Indexed % | Crawled not indexed % |
|---|---|---|---|---|---|---|---|---|
