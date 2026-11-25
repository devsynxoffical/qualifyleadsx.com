# Google Business Profile optimization: QualifiedLeadsX (25 Nov 2026)

- **Profile:** locations/6499443464649758122.
- **Place ID:** ChIJtXE6o-kDDTkRwAoeEcKo-7I.
- **Maps:** https://maps.google.com/maps?cid=12897087509369850560
- **Access used:** Windsor.ai Google Business Profile connector (write actions). Windsor data reads are paused on the free plan, and OpenSEO has no credits, so the audit below combines:
  - the changes logged on 16 and 18 Nov (docs/seo-log.md and the session record)
  - the site's own Business Profile data (lib/brand-facts.ts)
  - a live Google validation of the new description (accepted, nothing changed)

## 1. Audit: what is on the profile now

| Item | Current value | Problem |
|---|---|---|
| Business name | "Qualified LeadsX : Best Digital Marketing Agency in Delhi \| Online Advertising Agency" | Keyword-stuffed name. This breaks Google's guidelines (name must be the real-world name), risks a suspension, and does not match the website brand "QualifiedLeadsX". |
| Primary category | Advertising agency (gcid:advertising_agency) | Acceptable, but "Marketing agency" describes lead generation and appointment setting better. |
| Description (set 18 Nov) | Mentions "personal injury and MVA law firms" and "pay-per-lead agencies" | Out of lane since 20 Nov: legal leads moved to scalewithads.us. It does not mention the new positioning (lead generation and appointment setting, insurance agents, financial advisors) or the published proof. |
| Service items (11, set 18 Nov) | Include "MVA & Personal Injury Lead Generation", "Mass Tort Lead Generation" and "Final Expense & Burial Insurance Leads" | 2 items are out of lane. Missing: pay per appointment, financial advisors, coaches and consultants, real estate and mortgage. |
| Posts (6) | HVAC case study, Lead Conversion Rate Calculator, open-for-clients, MER calculator, MVA leads, final expense | The MVA post links to /mva-leads, which now 301s to /services: an off-lane post with a redirected link. |
| Photos | Logo, cover, 11 client-result screenshots, 3 training-call thumbnails | All 3 training thumbnails are roofing-themed ("Behind-the-scenes roofing team training", "Roofing leads strategy revealed", "Roofing agency client"). Roofing is no longer a QualifiedLeadsX service. |
| Appointment link | https://www.qualifiedleadsx.com/book-your-call | OK |
| Website | https://www.qualifiedleadsx.com/ (Search Console also shows a ?utm_source=google&utm_medium=organic&utm_campaign=gbp version) | OK; the UTM version lets GA4 separate profile visits. |
| Phone | +91 96256 95456 | OK, matches the site. |
| Address and hours | F-129 A, Mansarover Garden, New Delhi 110015; Mon to Sat 10:00 to 19:30 | OK, matches the site schema (ProfessionalService node) and the About page. |
| Reviews | Not readable (Windsor reads paused) | Review program in section 7. |

## 2. New business description (validated by Google, 746 of 750 characters)

> QualifiedLeadsX (Qualified LeadsX) is a done-for-you lead generation and appointment setting agency led by founder Gaurav Kapoor, with its team in New Delhi. We run the full system that turns ads into booked sales calls: Meta ads and creative, landing pages and VSL funnels, lead qualification, follow-up within minutes by call, SMS and WhatsApp, appointment setting and CRM automation. We work with coaches, consultants, financial advisors, insurance agents, agencies and service businesses in the US, UK, Canada, Australia and India. Published campaigns have booked appointments for $4.81 to $45 each, every engagement carries a 90-day written guarantee, and you keep your ad account, funnels and data. Book a free strategy call on our website.

Why each part is there:
- **Brand name and alternate spelling:** both appear, so "Qualified LeadsX" searches match the profile.
- **Keywords used naturally, with no stuffing:** lead generation, appointment setting, insurance agents, financial advisors, coaches.
- **GEO/AEO facts:** published numbers that AI tools can quote ($4.81 to $45, the 90-day guarantee).
- **Nothing that breaks the rules:** no URL in the text (Google rejects links in descriptions) and no em dashes.

## 3. New service list (14 items, replaces the current 11)

| # | Service | Description (under 300 characters) |
|---|---|---|
| 1 | Digital marketing (Google service type) | Done-for-you client acquisition: Meta ads, funnels, lead qualification, follow-up and booked sales appointments for service businesses. |
| 2 | Lead Generation Agency Services | Done-for-you lead generation for coaches, consultants, advisors, insurance agents and service businesses, run in your own ad account so every lead is exclusive. |
| 3 | Appointment Setting Services | Every lead contacted within minutes by call, SMS and WhatsApp, qualified on your questions and booked into your calendar with reminders. 88.3% call show-up rate on our system. |
| 4 | Pay Per Appointment Lead Generation | Campaigns judged on booked, qualified appointments. Published campaigns booked appointments for $4.81 to $45 each, reported per show and per sale. |
| 5 | Meta Ads Management (Facebook and Instagram) | Ad creative, campaign setup, Conversions API tracking and daily optimisation, aimed at booked calls rather than cheap leads. |
| 6 | Lead Generation for Insurance Agents | Exclusive final expense and life insurance leads from your own campaign. Published: 2,440 final expense leads at $7.79 and life insurance leads at about $18. |
| 7 | Lead Generation for Financial Advisors | Educational, compliance-reviewed ads and a survey on investable assets, so advisors only meet prospects above their minimums. |
| 8 | Lead Generation for Coaches and Consultants | Booked discovery calls with prospects who answered budget and timing questions first. |
| 9 | Real Estate and Mortgage Leads | Motivated seller, buyer and OTP-verified mortgage leads. Published Texas mortgage campaign: 823 verified leads at $23.97. |
| 10 | B2B Lead Generation | Qualified sales calls with decision makers for B2B service firms selling contracts of $10,000 and up. |
| 11 | VSL Funnel Building | Video sales letter funnels and landing pages that pre-sell prospects before the sales call. |
| 12 | AI Speed to Lead Follow-Up | Automated SMS, WhatsApp and email replies to new leads within minutes, day and night. |
| 13 | CRM Automation | Pipelines, calendar booking, reminders and lead scoring set up in a CRM you own. |
| 14 | WhatsApp Lead Nurture | Pre-call WhatsApp confirmations, reminders and follow-up for high-ticket sales calls. |

- **Removed:** MVA and Personal Injury Lead Generation; Mass Tort Lead Generation (both scalewithads.us lane).
- **Merged:** "Final Expense and Burial Insurance Leads" into "Lead Generation for Insurance Agents".

## 4. Posts

### Remove
- **localPosts/2149140944383966234 (MVA leads):** off lane, and its link now redirects.

### Publish now (3 posts)

**Post 1, appointment setting**
- **CTA:** Book, to /appointment-setting
- **Photo:** NYC med spa result
- **Text:** "Appointment setting that turns leads into booked sales calls. For a med spa with three New York clinics, $10,387 in Meta ads booked 453 appointments at $22.93 each; 303 showed up and 247 became paying clients, with $74,100 in revenue. Every lead is contacted within minutes, qualified on your questions and booked into your calendar with reminders."

**Post 2, US city pages**
- **CTA:** Learn more, to /lead-generation-agency
- **Photo:** NY remodeling result
- **Text:** "Looking for a lead generation agency near you? QualifiedLeadsX works with service businesses across the US, with pages for New York, Miami, Chicago, Atlanta, Denver, Tampa, Houston, Dallas, Florida and Texas. Each page shows official Census market figures and our published results, including 337 New York remodeling appointments booked in 19 days at $4.81 each."

**Post 3, new guide**
- **CTA:** Learn more, to /blog/appointment-setting-vs-cold-calling
- **Photo:** cover
- **Text:** "Appointment setting vs cold calling: which books more sales calls? Our new guide compares who you contact, cost per booked appointment, show rate and when each approach fits. Published appointment setting campaigns booked calls for $4.81 to $45 each."

### 12-week calendar (1 post a week, all figures already published)

| Week | Topic | Proof | Link |
|---|---|---|---|
| 1 Dec | Pay per appointment | $4.81 to $45 per booked appointment | /pay-per-appointment |
| 8 Dec | Insurance agents | 2,440 final expense leads at $7.79 | /for/insurance-agencies |
| 15 Dec | Financial advisors | Asset-based qualification, compliance review | /for/financial-advisors |
| 22 Dec | Free tool | Lead scoring template (CSV download) | /tools/lead-scoring-template |
| 29 Dec | Texas | 823 verified mortgage leads at $23.97 | /lead-generation-agency/texas |
| 5 Jan | Show rate | 88.3% call show-up rate, SMS and WhatsApp reminders | /appointment-setting |
| 12 Jan | Florida | $65,872 net for a Florida HVAC company | /lead-generation-agency/florida |
| 19 Jan | Coaches | Coaching results from the guide | /blog/how-to-get-coaching-clients |
| 26 Jan | Free tool | Lead generation calculator hub | /tools |
| 2 Feb | New York | 453 med spa appointments, 247 clients | /lead-generation-agency/new-york-ny |
| 9 Feb | Marketing qualified leads | MQL vs SQL guide | /blog/how-to-qualify-leads |
| 16 Feb | Guarantee | 90-day written guarantee | / |

## 5. Photos

- **Delete (roofing, off lane):**
  - media/CIABIhDIx6N_LZwycoMOVZ8uN1kV
  - media/CIABIhD2mhnBGQTN7yX3r-ao0tBr
  - media/CIABIhA-oyQZ220Xn7_js88IJQAJ
- **Add as AT_WORK** (published results in the current lane):
  - /case-studies/images/DM_Poo5z5hT.jpg (NYC med spa, 453 appointments)
  - /case-studies/videos/DRRS7f-Eh_0.jpg (NY remodeling, 337 appointments)
  - /case-studies/images/Dd9D3rnSCMT.jpg (2,440 final expense leads)
  - /case-studies/videos/DJFKW2si8E7.jpg (55 life insurance leads)
- **Still missing:** real team and office photos (TEAMS, INTERIOR). Google weighs real photos of the business more than screenshots.

## 6. Name and categories (dashboard only, not available through the API)

- **Name:** "QualifiedLeadsX", the real-world brand used on the website, invoices and every directory profile. Removing the keyword-stuffed suffix lowers suspension risk, and "Qualified LeadsX" searches still match through the description and the website.
- **Primary category:** keep "Advertising agency", or switch to "Marketing agency" (a category change can trigger re-verification, so do it only from the dashboard and only once).
- **Additional categories to add:**
  - Internet marketing service
  - Marketing consultant
  - Business development service

## 7. Review program

1. **Review link (already on /about):** https://search.google.com/local/writereview?placeid=ChIJtXE6o-kDDTkRwAoeEcKo-7I
2. **Who to ask:** clients with a published result. Ask right after a milestone, such as the first 50 booked appointments or the first closed client.
3. **Request message:**
   > Hi [Name], thanks for working with us on [campaign]. If the results helped, would you leave a short Google review about what changed? It takes a minute: [review link]. Thank you, Gaurav
4. **Reply templates:**
   - Positive: "Thank you, [Name]. Glad the [booked appointments / lower cost per lead] made a difference. Looking forward to the next quarter."
   - Neutral or negative: "Thank you for the feedback, [Name]. We'd like to understand what went wrong; please email hello@qualifiedleadsx.com so we can fix it."
5. **Rules:** never offer incentives for reviews, never write reviews for clients, and reply to every review within 48 hours.

## 8. Website and profile consistency (checked)

- **Organization schema:**
  - `sameAs` includes the Maps link.
  - A `ProfessionalService` node (#office-delhi) carries the same name, address, phone and hours, with `hasMap` set.
- **About page:** a "Find QualifiedLeadsX on Google" block with the address, hours and review link.
- **Name, address and phone:** identical on the site schema, the About page and the profile.

## 9. How to measure

- **Monthly, once Windsor reads are available again:**
  - Profile impressions (Search and Maps)
  - Website clicks, call clicks and booking clicks
  - The search terms people used to find the profile
- **GA4:** sessions with utm_campaign=gbp.
- **Search Console:** clicks on the ?utm_campaign=gbp landing URL.
