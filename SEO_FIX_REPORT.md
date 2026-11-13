# SEO / AEO / GEO fix report: qualifiedleadsx.com

Run of the master prompt (`CLAUDE_CODE_SEO_AEO_GEO_PROMPT.md`), started 13 Nov 2026.
Every number below was measured by `scripts/seo-audit.mjs` (`npm run seo:audit`) or a script named
next to it. Nothing here is estimated.

## CONFIG used

| Key | Value | Source |
|---|---|---|
| DOMAIN | https://www.qualifiedleadsx.com (www canonical) | `lib/site.ts` |
| BRAND_NAME | QualifiedLeadsX | `lib/site.ts` |
| LEGAL_ENTITY + ADDRESS | Ecom Expertz LLC, 1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801, USA (registered address) | `lib/site.ts` |
| FOUNDER / AUTHOR | Gaurav Kapoor, Founder & Head of Acquisition, https://www.linkedin.com/in/gauravecom/ | owner (13 Nov) |
| FOUNDED_YEAR | 2022 | `lib/site.ts` |
| NICHE + ICP | Done-for-you client acquisition (Meta ads, funnels, AI follow-up, booked calls) for agency owners, high-ticket coaches, consultants and B2B service businesses doing $10K+/month | site copy |
| CORE OFFER + PRICE | Done-for-you client acquisition system; custom quoted (no public price) | owner (13 Nov) |
| PRIMARY CONVERSION | `/book-your-call` (form) then `/book-your-call/schedule` (Google Calendar) | site |
| STACK + HOST | Next.js 15 (App Router, static prerender) on Hostinger (LiteSpeed in front of Node) | repo |
| sameAs | facebook.com/qualifiedleadsx, instagram.com/qualifiedleadsx, linkedin.com/in/gauravecom, youtube.com/@QualifiedLeadsX | `lib/site.ts`, `lib/schema.ts` |
| SISTER SITES | none linked from this site (checked: no outbound links to other operator domains) | codebase search |
| MONEY KEYWORDS | high ticket lead generation, customer acquisition agency, lead generation agency, qualified lead generation services, appointment setting agency, meta ads agency, speed to lead, b2b lead generation, cost per booked call, outsourced sales closers | Search Console |

## Phase 0: baseline (live site, 13 Nov)

Files: `audit/baseline.json`, `audit/baseline.csv`.

| Metric | Baseline |
|---|---|
| URLs audited (sitemap + nav/footer) | 122 (121 indexable) |
| Non-200 / redirect chains / canonical issues | 0 / 0 / 0 |
| Average response time (from this server) | 384 ms |
| Titles outside 30-60 chars | 1 (`/book-your-call`, 28) |
| Descriptions outside 120-160 chars | 2 (two blog category pages) |
| Duplicate titles / descriptions | 0 / 0 |
| Pages with H1 count not 1 | 0 |
| JSON-LD parse errors / pages without JSON-LD | 0 / 0 |
| Images without alt | 0 |
| Pages without og:image | 71 |
| Orphan pages | 0 |
| Pages under 600 unique words of main content | 71 |
| Near-duplicate pairs (5-word shingles, Jaccard > 0.35) | 102 |
| Highest section average Jaccard | 0.324 (service-for-industry), 0.300 (compare), 0.295 (case studies) |
| llms.txt / llms-full.txt | 200 / 404 |

Bot access (top 20 URLs, 13 user agents): Chrome, Googlebot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
Claude-User, PerplexityBot, Perplexity-User, Google-Extended and CCBot get 200 with the same content.
**Bingbot 403, Applebot-Extended 403, GPTBot 429 on every URL** (Hostinger/LiteSpeed; robots.txt allows them).

### Top 20 problems (baseline)

1. Bingbot gets 403 on every URL (host bot protection). Bing feeds Copilot and ChatGPT search.
2. Applebot-Extended gets 403 on every URL.
3. GPTBot gets 429 on every URL.
4. 71 pages have no og:image (pages that set their own `openGraph` lose the default image).
5. llms-full.txt does not exist.
6. 71 pages have under 600 words of unique main content.
7. `/for/*`: 9 thin industry pages with no impressions in 90 days pair up above 0.40 similarity.
8. Thin service-for-industry pages: 6 of 12 still templated (Jaccard up to 0.46).
9. 5 Instagram-sourced case studies have under 300 unique words.
10. Blog: shared template blocks push 20 post pairs above 0.35 similarity.
11. Founder is "Gaurav" with no surname or author page; no single brand-facts source.
12. robots.txt does not list Claude-User, Perplexity-User or CCBot explicitly (they fall under `*`).
13. Canonical-host redirect is 308, not 301.
14. `/book-your-call` title is 28 characters.
15. Two category descriptions are under 120 characters.
16. Tracking: no `book_call`, `click_whatsapp`, `click_email`, `scroll_75` or `tool_used` events.
17. No session-recording tool (Microsoft Clarity).
18. 20 sitemap URLs not yet indexed by Google (URL Inspection, 12 Nov).
19. IndexNow key is rejected (UserForbiddedToAccessSite) because Bing's verifier is blocked by the host.
20. No `audit/geo_prompts.md` for tracking AI visibility.
