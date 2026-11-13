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

## Phase 12: before / after (live site, 13 Nov)

Files: `audit/baseline.*` (before), `audit/after.*` (after), `audit/lighthouse/*.json`.

| Metric | Before | After |
|---|---|---|
| URLs audited / indexable | 122 / 121 | 118 / 116 (3 merged with 301, 3 noindexed) |
| Bot access (13 user agents, top 20 URLs) | 10 of 13 get 200 | 10 of 13 get 200 (Bingbot 403, Applebot-Extended 403, GPTBot 429: host setting, see manual actions) |
| Avg response time from this server | 384 ms | 375 ms |
| Titles outside 30-60 / descriptions outside 120-160 | 1 / 2 | 0 / 0 |
| Duplicate titles / descriptions | 0 / 0 | 0 / 0 |
| Pages with JSON-LD errors | 0 | 0 |
| Images without alt | 0 | 0 |
| Pages without og:image | 71 | 0 |
| Orphan pages | 0 | 0 |
| Pages under 600 unique words | 71 | 66 |
| Near-duplicate pairs (Jaccard > 0.35) | 102 | 62 |
| Highest section average Jaccard | 0.324 | 0.302 (case studies; all sections under 0.35) |
| `/for/*` section average Jaccard | 0.220 (36 pairs) | 0.167 (6 pairs) |
| Service-for-industry average Jaccard | 0.324 (15 pairs) | 0.250 (0 pairs) |
| llms-full.txt | 404 | 200 (53 pages, 385 KB) |
| Money/content pages with a short answer block | 81 of 97 | 96 of 97 (only `/blog` hub lacks one) |
| Pages with 5+ visible FAQs | not measured | 51 of 97 |
| GA4 events | generate_lead, contact, view_booking_form | + click_whatsapp, click_email, click_phone, scroll_75, tool_used |

Lighthouse mobile (live, Lighthouse 12.2.1, simulated throttling):

| Page | Before perf / SEO | After perf / SEO | TBT before / after |
|---|---|---|---|
| / | 46 / 100 | 51 / 100 | 3,280 ms / 2,590 ms |
| /high-ticket-lead-generation | 88 / 100 | 86 / 100 | 140 ms / 180 ms (run-to-run noise) |
| /blog/buy-qualified-leads-vs-generating-your-own | 96 / 100 | 97 / 100 | 40 ms / 30 ms |
| /case-studies/b2b-agency-scaling-846k | 97 / 100 | 98 / 100 | 40 ms / 30 ms |

## Changes by phase (commits on `claude/qualified-leadx-seo-15g7kc`, fast-forwarded to `main`)

- **Phase 0** (`38391f6`): `scripts/seo-audit.mjs` (`npm run seo:audit`), baseline files.
- **Phases 1-2** (`ed7c1c4`, `7deac86`): robots.txt lists every search and AI bot; verification codes via env vars; bare domain to www is a single 301; `npm run index:now -- --all`; merged-page 301s in `middleware.ts` (the host ignores path redirects in `next.config.ts`).
- **Phases 3-4** (`29facbf`): Reveal animations use one IntersectionObserver instead of 164 ScrollTriggers (homepage TBT 3.28 s to 2.59 s live); default 1200x630 share image on every page; title/description lengths; `scripts/lighthouse.sh`.
- **Phases 5-7** (`3aba3cf`): `audit/programmatic_decisions.csv`; 3 merges, 3 noindexes; 5 thin service-for-industry pages upgraded with real case data; visible byline and real "Last updated" date on blog, case-study, comparison and benchmark pages; `lib/brand-facts.ts` single source; founder Gaurav Kapoor everywhere; `/about/gaurav-kapoor` (ProfilePage + Person); Organization schema reads brand facts (founder, address, WhatsApp contact point).
- **Phases 8-10** (`80ed63e`): short answer blocks on 15 money pages; `.short-answer` speakable selector; fifth FAQ on 5 core pages; `public/llms-full.txt` built after every `next build`; `llms.txt` updated; `audit/geo_prompts.md`; `components/analytics/SiteEvents.tsx` (events verified firing in a browser); Microsoft Clarity loader behind `NEXT_PUBLIC_CLARITY_ID`.
- Earlier the same day (`e0c566a`, `6fb224f` and before): 3 more thin pages upgraded, WebP gallery (48.2 MB to 3.6 MB), lighter 3D hero on phones.

Indexing: Google Indexing API accepted 21 of 21 changed URLs (plus 25 in the morning session); Bing received the same 21. Accepted means the request was received, not that pages are indexed.

## MANUAL ACTIONS FOR OWNER

1. **Hostinger bot blocking (highest priority).** Bingbot and Applebot-Extended get 403 and GPTBot gets 429 on every URL, while robots.txt allows them. In hPanel open the website, then check the security / firewall / bot-protection settings (any "block AI bots", "bot protection" or rate-limit option) and allow these crawlers. If no setting exists, open a Hostinger support ticket: "LiteSpeed returns 403 to user agents containing bingbot, adidxbot and Applebot, and 429 to GPTBot, on www.qualifiedleadsx.com. Please allow verified search and AI crawlers." Then run Bing Webmaster Tools, URL Inspection, Live URL on the homepage.
2. **IndexNow.** After step 1, run `npm run index:now -- --all`. It currently fails with "UserForbiddedToAccessSite" because Bing's verifier is blocked too.
3. **Google Search Console.** Resubmit `/sitemap.xml`; on the Breadcrumbs report click "Validate fix" (the 8 errors are stale crawls; live pages are clean).
4. **Bing Webmaster Tools.** Optional: if you want meta-tag verification, set `NEXT_PUBLIC_BING_SITE_VERIFICATION` in the hosting environment.
5. **GA4.** Mark `generate_lead` and `contact` as key events; optionally `click_whatsapp`. A true `book_call` event is not possible with the current Google Calendar appointment page: it runs in a Google iframe that reports no confirmation to the site. To track confirmed bookings, switch to a booking tool that redirects to a thank-you URL or sends a postMessage (Calendly, Cal.com, GHL).
6. **Microsoft Clarity.** Create a free project and set `NEXT_PUBLIC_CLARITY_ID` in the hosting environment; the loader is already in the code.
7. **Disavow.** No backlink data was available in this session (OpenSEO credits exhausted), so no disavow file was made. Check GSC, Links, for spam domains before uploading anything.
8. **Content facts to confirm** (see next section).

## UNVERIFIED CLAIMS (on the site, not verifiable from this session)

Left in place and listed here for the owner to confirm, edit or remove:
- "$50M+ managed in Meta ads", "12+ years experience", "125+ documented case studies across 30+ niches, 69 video breakdowns" (About, llms.txt, schema).
- Organization `numberOfEmployees` 10 to 50.
- Mastermind hub: "$150M+ collective member revenue", "50 cap", "quarterly executive summits in Miami, Dubai and London".
- 7-day paid trial page: "112% ad spend recoup", "38% trial to high-ticket upgrade", "$420K".
- Outsourced closers page: "27.6% average close rate", "minimum $500K closed revenue" vetting, "14 days" onboarding.
- Appointment setting / speed to lead: "88.3% show-up rate", "391%" booking-rate increase, "30 to 50 calls a month".
- Benchmark figures (58.2% / 88.4% show rate etc.): presented as original data; the underlying dataset is not in the repo.
- Homepage: "Double your revenue within the next 90 days".
- **Removed:** blog author box line "Over $150M+ in client revenue scaled across North America, Europe, and the Middle East" (could not be verified and conflicted with other figures).

## Acceptance criteria

| Criterion | Status |
|---|---|
| All search and AI bots get 200 and the same content on the top 20 URLs | **Not met**: 10 of 13 pass; Bingbot, Applebot-Extended (403) and GPTBot (429) are blocked by the host (manual action 1) |
| One canonical host, single-hop redirects, consistent canonicals and sitemap | Met |
| 0 pages with JSON-LD errors; Organization/Person/Service/Article/FAQ/Breadcrumb where relevant | Met (live check; GSC shows stale errors pending recrawl) |
| 0 meaningful images without alt | Met |
| No sitemap section with average near-duplicate score above 0.35 | Met (highest 0.302) |
| Every money page has a short answer, question-led H2s, a visible FAQ and a primary CTA | **Partly met**: short answer 96/97, CTA 97/97, visible FAQ on all money pages but 5+ FAQs on 51/97, question-style H2 on 60/97 |
| llms.txt and llms-full.txt live and consistent with brand facts | Met |
| GA4 `book_call` and `generate_lead` fire in DebugView | **Partly met**: `generate_lead` fires on form submit (tested in a browser); `book_call` cannot be detected with Google Calendar (manual action 5) |
| Lighthouse mobile performance 80+ on home and main service page | **Partly met**: main service page 86; home 51. Blocker: the homepage design (3D WebGL hero, 3,300+ DOM elements, 66 KB HTML, 50 requests) costs about 2.6 s of main-thread time; reaching 80 needs a lighter mobile homepage, which changes the design and needs owner sign-off |

## 30 / 60 / 90 day plan

- **30 days:** owner fixes Hostinger bot blocking and IndexNow; GA4 key events; Clarity. Upgrade the remaining thin pages (fitness coaches, home improvement, law firms industry pages) and write breakdowns for the 5 Instagram case studies under 300 unique words. Bring every money page to 5+ FAQs and question-led H2s.
- **60 days:** decide on a lighter mobile homepage (static hero image on phones) to reach Lighthouse 80; replace the Google Calendar booking with a tool that confirms bookings (`book_call`); build 10 real profiles and mentions (Clutch, DesignRush, GoodFirms, Crunchbase, LinkedIn company page) and start expert-quote pitching with the benchmark data.
- **90 days:** refresh benchmarks with a dated methodology section; run the 30 GEO prompts monthly and record citations; upgrade or retire the 3 noindexed pages; re-run `npm run seo:audit` and compare with `audit/after.json`.

## Phase 11: off-site plan

- Disavow: none uploaded (no backlink data in this session); review GSC Links first.
- No paid, PBN or spam links found in the codebase or known to this session.
- 10 to 20 real mentions in 90 days: Google Business Profile only if eligible (the address is a registered address, not a public office, so probably not); Clutch, DesignRush, GoodFirms, Sortlist, Crunchbase, LinkedIn company page; 3 to 5 podcast guest spots (agency-owner and coaching shows); expert quotes via Source of Sources, Qwoted and Featured.com using `/benchmarks` data. Profile copy: `docs/growth-playbook/brand-profile-kit.md`.
- YouTube (@QualifiedLeadsX): link each video description to the matching site page; the site already lists the channel in sameAs.
- Reddit / Quora / LinkedIn: answer real questions with links to the benchmark and calculator pages only where they answer the question.
