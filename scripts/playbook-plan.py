#!/usr/bin/env python3
"""
Site Growth Playbook, STEP 2 + STEP 6: page plan.

Reads the production build for existing pages (H1, title, meta description,
unique words from reports/playbook-audit.csv) and adds the planned new pages.
Writes reports/playbook-page-plan.csv grouped by page type, in build order.

Run after the audit:  npm run build && python3 -I scripts/playbook-audit.py && python3 -I scripts/playbook-plan.py
"""
import csv
import html as H
import re

ROOT = ".next/server/app"
audit = {r["URL"]: r for r in csv.DictReader(open("reports/playbook-audit.csv", encoding="utf-8"))}


def built(url):
    f = f"{ROOT}/index.html" if url == "/" else f"{ROOT}{url}.html"
    s = open(f, encoding="utf-8").read()
    g = lambda rx: H.unescape(re.sub(r"<[^>]+>", "", m.group(1))).strip() if (m := re.search(rx, s, re.S)) else ""
    return {
        "h1": re.sub(r"\s+", " ", g(r"<h1\b[^>]*>(.*?)</h1>")),
        "title": g(r"<title>(.*?)</title>"),
        "meta": g(r'<meta name="description" content="([^"]*)"'),
    }


FILL = "[fill in]"
rows = []


def add(ptype, url, primary, secondary, hub, week, status, action, h1=None, title=None, meta=None, note=""):
    if status == "existing":
        b = built(url)
        h1, title, meta = h1 or b["h1"], title or b["title"], meta or b["meta"]
        uw = audit.get(url, {}).get("Unique words", "")
    else:
        uw = ""
    assert len(title) <= 60, (url, len(title), title)
    assert len(meta) <= 155, (url, len(meta), meta)
    rows.append([ptype, url, status, h1, title, len(title), meta, len(meta), primary, "; ".join(secondary), hub, week, uw, action, note])


# ---------------------------------------------------------------- core service
core = [
    ("/", "high-ticket lead generation agency", ["client acquisition agency", "done for you lead generation", "lead generation for high ticket offers"], "-", 1, "keep (home)"),
    ("/services", "lead generation services", ["client acquisition services", "b2b lead generation services"], "-", 1, "keep (hub)"),
    ("/lead-generation-agency", "done for you lead generation agency", ["lead generation agency", "outsourced lead generation", "lead gen agency pricing"], "/services", 2, "upgrade to core template (1,500+ words)"),
    ("/high-ticket-lead-generation", "high ticket lead generation", ["high ticket leads", "high ticket clients", "high ticket offer marketing"], "/services", 2, "upgrade to core template"),
    ("/b2b-lead-generation", "b2b lead generation agency", ["b2b lead generation services", "b2b appointment generation", "b2b demand generation agency"], "/services", 2, "upgrade to core template"),
    ("/meta-ads-agency", "meta ads agency", ["facebook ads agency", "instagram ads agency", "facebook ads management"], "/services", 2, "add pricing, FAQ to 5-8 (already 1,000+ unique words)"),
    ("/appointment-setting", "appointment setting agency", ["appointment setting services", "b2b appointment setting", "outsourced appointment setters"], "/services", 2, "add pricing + industries section"),
    ("/speed-to-lead", "speed to lead", ["lead response time", "ai lead follow up", "speed to lead software"], "/services", 2, "upgrade to core template"),
    ("/vsl-funnels", "vsl funnel agency", ["video sales letter funnel", "vsl funnel builder", "high ticket vsl"], "/services", 2, "upgrade to core template"),
    ("/whatsapp-lead-nurture", "whatsapp lead nurturing", ["whatsapp follow up automation", "whatsapp appointment reminders"], "/services", 2, "thin: upgrade to core template"),
    ("/crm-automation", "crm automation agency", ["sales pipeline automation", "gohighlevel automation", "crm setup for coaches"], "/services", 2, "thin: upgrade to core template"),
    ("/outsourced-sales-closers", "outsourced sales closers", ["remote high ticket closers", "commission only closers", "sales closer agency"], "/services", 2, "thin: upgrade to core template"),
]
for url, p, sec, hub, wk, act in core:
    add("core service", url, p, sec, hub, wk, "existing", act)
add("core service", "/pricing", "lead generation agency pricing", ["meta ads management cost", "done for you lead generation cost"], "/services", 2, "new", "build (custom quotes: show what drives price, ranges only if published)",
    h1="Pricing: Meta Ads Management and Full-Service Growth",
    title="Lead Generation Agency Pricing & Plans | QualifiedLeadsX™",
    meta="What our two plans include, what drives the quote and how the 90-day guarantee works. Book a free call for a custom quote.",
    note=f"price ranges {FILL}")
for url, p, sec, act in [
    ("/compare/meta-ads-vs-google-ads-high-ticket", "meta ads vs google ads for high ticket", ["facebook ads vs google ads b2b"], "keep"),
    ("/compare/done-for-you-vs-done-with-you-lead-generation", "done for you vs done with you", ["dfy vs dwy marketing"], "keep"),
    ("/compare/appointment-setter-vs-va", "appointment setter vs virtual assistant", ["appointment setter vs va"], "keep"),
    ("/compare/qualifiedleadsx-alternatives", "qualifiedleadsx alternatives", ["lead generation agency alternatives"], "keep"),
]:
    add("core service", url, p, sec, "/services", 2, "existing", act)

# ---------------------------------------------------------------- location
add("location", "/locations", "lead generation agency by country", ["remote lead generation agency"], "-", 3, "new", "build hub (lists only countries served)",
    h1="Where We Work: US, UK, Canada and Australia",
    title="Lead Generation Agency Locations We Serve | QualifiedLeadsX™",
    meta="We run Meta ads and appointment setting for clients in the US, UK, Canada and Australia, remotely. See each market and book a call.")
countries = [
    ("united-states", "United States", "USA", "lead generation agency usa", ["us lead generation agency", "american b2b lead generation"]),
    ("united-kingdom", "United Kingdom", "UK", "lead generation agency uk", ["uk b2b lead generation", "meta ads agency uk"]),
    ("canada", "Canada", "Canada", "lead generation agency canada", ["canadian b2b lead generation", "meta ads agency canada"]),
    ("australia", "Australia", "Australia", "lead generation agency australia", ["australian b2b lead generation", "meta ads agency australia"]),
]
for slug, name, short, p, sec in countries:
    add("location", f"/locations/{slug}", p, sec, "/locations", 3, "new", "build from location template (remote service; no office claim)",
        h1=f"Lead Generation Agency for {name} Businesses",
        title=f"Lead Generation Agency {short} | QualifiedLeadsX™",
        meta=f"Done-for-you Meta ads, funnels and appointment setting for {name} coaches, agencies and B2B firms. See results and book a free call.",
        note=f"local proof, time-zone coverage, currency pricing: {FILL}")
add("location", "/locations/[city]", "[service] in [city]", ["[service] near [city]"], "/locations/[country]", "4-5", "conditional",
    f"build ONLY for cities with real clients or results: {FILL}",
    h1="Lead Generation Agency in [City]", title="Lead Generation Agency in [City] | QualifiedLeadsX™",
    meta="Done-for-you Meta ads and appointment setting for [City] businesses. Real [City] results, pricing and FAQ. Book a free call.",
    note=f"city list {FILL}")

# ---------------------------------------------------------------- industry
add("industry", "/for", "lead generation by industry", ["industries we serve"], "-", 1, "existing", "keep (industries hub; URL kept, no redirect)")
first10 = ["coaches", "consultants", "agencies", "b2b-services", "saas", "financial-advisors", "med-spas", "law-firms", "real-estate-investors", "business-coaches"]
rest = ["executive-coaches", "fitness-coaches", "course-creators", "online-education", "insurance-agencies", "recruitment-agencies", "home-improvement", "solar-companies"]
label = lambda s: s.replace("-", " ").replace("saas", "SaaS").replace("b2b", "B2B")
for i, s in enumerate(first10 + rest):
    wk = 3 if i < 10 else 4
    add("industry", f"/for/{s}", f"lead generation for {label(s).lower()}", [f"{label(s).lower()} leads", f"how to get {label(s).lower()} clients", f"{label(s).lower()} marketing agency"],
        "/for", wk, "existing", "upgrade to industry template (1,000+ words, 40% unique)" if int(audit[f"/for/{s}"]["Unique words"]) < 600 else "add mistakes + FAQ sections")
meta_ads = ["coaches", "consultants", "financial-advisors", "med-spas", "real-estate-investors", "course-creators", "saas", "law-firms"]
for s in meta_ads:
    add("industry", f"/meta-ads-for-{s}", f"meta ads for {label(s).lower()}", [f"facebook ads for {label(s).lower()}", f"instagram ads for {label(s).lower()}"], "/meta-ads-agency", 4, "existing", "thin: upgrade to industry template")
for s in ["agencies", "saas", "coaches", "consultants"]:
    add("industry", f"/appointment-setting-for-{s}", f"appointment setting for {label(s).lower()}", [f"{label(s).lower()} appointment setters", f"book more calls for {label(s).lower()}"], "/appointment-setting", 5, "existing", "thin: upgrade to industry template")
new_combos = [("meta-ads", "agencies"), ("meta-ads", "b2b-services"), ("meta-ads", "business-coaches"), ("meta-ads", "executive-coaches"), ("meta-ads", "insurance-agencies"),
              ("appointment-setting", "financial-advisors"), ("appointment-setting", "med-spas"), ("appointment-setting", "law-firms"), ("appointment-setting", "real-estate-investors"), ("appointment-setting", "b2b-services")]
for svc, s in new_combos:
    nice = "Meta Ads" if svc == "meta-ads" else "Appointment Setting"
    t = f"{nice} for {label(s).title().replace('B2B', 'B2B').replace('Saas', 'SaaS')}"
    title = f"{t} | QualifiedLeadsX™" if len(t) + 19 <= 60 else t
    add("industry", f"/{svc}-for-{s}", f"{nice.lower()} for {label(s).lower()}", [f"{'facebook ads' if svc == 'meta-ads' else 'appointment setters'} for {label(s).lower()}"],
        "/meta-ads-agency" if svc == "meta-ads" else "/appointment-setting", 5, "new", "build from industry template",
        h1=t, title=title, meta=f"How we run {nice.lower()} for {label(s).lower()}: what works, real results, common mistakes and FAQ. Book a free strategy call.",
        note=f"confirm this industry is served + matching case study {FILL}")

# ---------------------------------------------------------------- free tools
for url, p, sec in [
    ("/tools", "free marketing calculators", ["lead generation calculators"]),
    ("/tools/cac-calculator", "cac calculator", ["customer acquisition cost calculator"]),
    ("/tools/roas-calculator", "roas calculator", ["break even roas calculator"]),
    ("/tools/cost-per-booked-call-calculator", "cost per booked call calculator", ["cost per appointment calculator"]),
    ("/tools/show-rate-calculator", "show rate calculator", ["no show rate calculator"]),
    ("/tools/ltv-cac-calculator", "ltv to cac calculator", ["ltv cac ratio calculator"]),
    ("/tools/lead-scoring-template", "lead scoring template", ["lead scoring model example"]),
    ("/benchmarks", "lead generation benchmarks 2026", ["marketing benchmarks"]),
    ("/benchmarks/cost-per-lead-by-industry", "cost per lead by industry", ["average cost per lead"]),
    ("/benchmarks/cost-per-booked-call", "cost per booked call benchmarks", ["average cost per appointment"]),
    ("/benchmarks/meta-ads-cpm", "meta ads cpm 2026", ["facebook ads cpm by industry"]),
    ("/benchmarks/close-rate", "average sales close rate", ["high ticket close rate"]),
    ("/benchmarks/show-rate", "average show rate for sales calls", ["appointment show up rate"]),
]:
    act = "keep (hub)" if url in ("/tools", "/benchmarks") else "add how-to-use, results, fix-issues, FAQ sections (600+ words below tool)"
    add("free tool", url, p, sec, "/tools" if url.startswith("/tools/") else ("/benchmarks" if url.startswith("/benchmarks/") else "-"), 1 if "hub" in act else 4, "existing", act)
new_tools = [
    ("meta-ads-budget-calculator", "Free Meta Ads Budget Calculator", "facebook ads budget calculator", ["how much to spend on facebook ads"], 4, "Meta Ads Budget Calculator (Free) | QualifiedLeadsX™",
     "Enter your target calls and close rate to get the monthly Meta ads budget you need. Free, no sign-up. Then book a call to plan it."),
    ("close-rate-calculator", "Free Sales Close Rate Calculator", "close rate calculator", ["sales close rate formula"], 4, "Sales Close Rate Calculator (Free) | QualifiedLeadsX™",
     "Work out your close rate and what it means for cost per client in seconds. Free, no sign-up. Compare it to 2026 benchmarks."),
    ("speed-to-lead-test", "Free Speed to Lead Test", "speed to lead test", ["lead response time test"], 6, "Speed to Lead Test: How Fast Do You Reply?",
     "Log how fast your team replies to new leads and see how many booked calls you lose. Free, no sign-up. Fix it with AI follow-up."),
    ("funnel-conversion-calculator", "Free Funnel Conversion Rate Calculator", "funnel conversion rate calculator", ["vsl funnel conversion rate"], 7, "Funnel Conversion Rate Calculator | QualifiedLeadsX™",
     "Enter clicks, opt-ins, bookings and sales to find the leak in your funnel. Free, no sign-up. See benchmarks for each step."),
    ("appointment-setter-commission-calculator", "Free Appointment Setter Commission Calculator", "appointment setter commission calculator", ["appointment setter pay"], 8, "Appointment Setter Commission Calculator | QualifiedLeadsX™",
     "Model base pay, per-call and commission plans for appointment setters and see cost per booked call. Free, no sign-up."),
]
for slug, h1, p, sec, wk, title, meta in new_tools:
    add("free tool", f"/tools/{slug}", p, sec, "/tools", wk, "new", "build from tool template", h1=h1, title=title, meta=meta)

# ---------------------------------------------------------------- blog
add("blog", "/blog", "high ticket client acquisition blog", ["lead generation blog"], "-", 1, "existing", "keep (hub)")
for url, r in audit.items():
    if url.startswith("/blog/") and not url.startswith("/blog/category/") and not r["Action"].startswith("keep ("):
        act = "keep" if r["Action"] == "keep" else ("thin: expand to 1,200+ words, 40-60 word answer first, 3+ links" if "improve" in r["Action"] else r["Action"])
        kw = re.split(r"[:(]| \| ", r["Primary keyword"])[0].strip().lower()
        add("blog", url, kw, [], "/blog", 6 if "thin" in act else "-", "existing", act)
new_posts = [
    ("how-to-hire-an-appointment-setter", "How to Hire an Appointment Setter (2026 Guide)", "how to hire an appointment setter", "/appointment-setting, /compare/appointment-setter-vs-va", 6),
    ("pay-per-appointment-vs-retainer", "Pay Per Appointment vs Retainer: Which Is Better?", "pay per appointment lead generation", "/pricing, /lead-generation-agency", 6),
    ("how-to-get-financial-advisor-clients-online", "How to Get Financial Advisor Clients Online", "how to get financial advisor clients", "/for/financial-advisors, /meta-ads-for-financial-advisors", 7),
    ("facebook-ad-examples-high-ticket-offers", "Facebook Ad Examples for High-Ticket Offers", "high ticket facebook ad examples", "/meta-ads-agency, /vsl-funnels", 7),
    ("gohighlevel-pipeline-setup-for-coaches", "GoHighLevel Pipeline Setup for Coaches", "gohighlevel pipeline setup", "/crm-automation, /for/coaches", 8),
    ("in-house-closers-vs-outsourced-sales-team", "In-House Closers vs an Outsourced Sales Team", "outsourced sales team vs in house", "/outsourced-sales-closers, /benchmarks/close-rate", 8),
    ("how-much-should-a-med-spa-spend-on-ads", "How Much Should a Med Spa Spend on Ads?", "med spa advertising budget", "/meta-ads-for-med-spas, /tools/meta-ads-budget-calculator", 9),
    ("linkedin-vs-meta-ads-for-consultants", "LinkedIn vs Meta Ads for Consultants", "linkedin vs facebook ads for consultants", "/for/consultants, /meta-ads-for-consultants", 9),
]
for slug, h1, p, supports, wk in new_posts:
    title = f"{h1} | QualifiedLeadsX™" if len(h1) + 19 <= 60 else h1
    add("blog", f"/blog/{slug}", p, [], "/blog", wk, "new", "write from blog template (supports: " + supports + ")",
        h1=h1, title=title, meta=f"{h1.rstrip('?.')}: a direct answer, the numbers, and a step-by-step plan. Read the guide, then book a free strategy call."[:155],
        note=f"author, sources and first-hand data {FILL}")

# primary keyword uniqueness check
seen = {}
for r in rows:
    k = r[8]
    assert k not in seen or k.startswith("["), ("same primary keyword", k, seen.get(k), r[1])
    seen[k] = r[1]

order = ["core service", "location", "industry", "free tool", "blog"]
rows.sort(key=lambda r: (order.index(r[0]), 99 if str(r[11]) in ("-",) else int(str(r[11]).split("-")[0])))
with open("reports/playbook-page-plan.csv", "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh)
    w.writerow(["Page type", "URL", "Status", "H1", "Title tag", "Title chars", "Meta description", "Meta chars", "Primary keyword", "Secondary keywords", "Hub", "Build week", "Unique words now", "Action", "Facts needed"])
    w.writerows(rows)
import collections
print("rows:", len(rows), dict(collections.Counter((r[0], r[2]) for r in rows)))
