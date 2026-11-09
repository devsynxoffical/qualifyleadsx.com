#!/usr/bin/env python3
"""
Site Growth Playbook, STEP 1 audit.

Reads the production build (.next/server/app) and writes
reports/playbook-audit.csv with one row per URL:

  url, page_type, primary_keyword, unique_words, total_words, inbound_links,
  problems, action

Run:  npm run build && python3 -I scripts/playbook-audit.py
"""
import collections
import csv
import glob
import html as H
import itertools
import re
import sys

ROOT = ".next/server/app"
SITE = "https://www.qualifiedleadsx.com"
BRAND_RX = re.compile(r"qualified\s*leads\s*x|\bqlx\b", re.I)


def route_of(f):
    r = "/" + f[len(ROOT) + 1 : -5]
    return "/" if r == "/index" else r


def page_type(r):
    p = r.strip("/").split("/")
    if r == "/":
        return "core"
    if p[0] in ("privacy", "terms", "disclaimer", "about"):
        return "company/legal"
    if p[0] == "book-your-call":
        return "company/legal"
    if p[0] == "case-studies":
        return "company/legal (proof)"
    if p[0] == "locations":
        return "location"
    if p[0] == "for" or "-for-" in p[0]:
        return "industry"
    if p[0] in ("tools", "benchmarks"):
        return "free tool"
    if p[0] in ("blog", "glossary"):
        return "blog"
    return "core"


pages, heads, bodies = {}, {}, {}
for f in glob.glob(f"{ROOT}/**/*.html", recursive=True):
    r = route_of(f)
    if r.startswith("/_"):
        continue
    s = open(f, encoding="utf-8").read()
    heads[r] = s.split("</head>")[0]
    s = re.sub(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>", "", s)
    bodies[r] = s
    m = re.search(r"<main[\s\S]*?</main>", s)
    main = m.group(0) if m else s
    main = re.sub(r"<svg[\s\S]*?</svg>", "", main)
    blocks = []
    for part in re.split(r"</(?:p|h[1-6]|li|div|section|td|th|dd|dt|figcaption|span|a|button)>", main):
        t = re.sub(r"\s+", " ", H.unescape(re.sub(r"<[^>]+>", " ", part))).strip()
        if len(t.split()) >= 4:
            blocks.append(t)
    pages[r] = blocks

freq = collections.Counter(b for bl in pages.values() for b in set(bl))
boiler = {b for b, c in freq.items() if c >= 5}

inbound = collections.Counter()
for r, s in bodies.items():
    for h in set(re.findall(r'<a\b[^>]*?href="(/[^"#?]*)', s)):
        h = h.rstrip("/") or "/"
        if h != r:
            inbound[h] += 1


def meta(r, rx):
    m = re.search(rx, heads[r])
    return H.unescape(m.group(1)) if m else None


rows = []
for r in sorted(pages):
    title = meta(r, r"<title>([^<]*)</title>") or ""
    desc = meta(r, r'<meta name="description" content="([^"]*)"')
    canon = meta(r, r'<link rel="canonical" href="([^"]+)"')
    robots = meta(r, r'<meta name="robots" content="([^"]*)"') or ""
    h1 = len(re.findall(r"<h1\b", bodies[r]))
    uniq = sum(len(b.split()) for b in pages[r] if b not in boiler)
    total = sum(len(b.split()) for b in pages[r])
    kw = BRAND_RX.sub("", re.split(r"\s+[|–—]\s+|\s+-\s+", title)[0]).strip(" -|:")
    rows.append(dict(url=r, page_type=page_type(r), primary_keyword=kw, unique_words=uniq, total_words=total,
                     inbound_links=inbound[r], title=title, desc=desc, canon=canon, robots=robots, h1=h1))

# keyword collisions (same or near-same primary keyword on two indexable pages)
def toks(k):
    stop = {"for", "the", "and", "a", "to", "of", "in", "your", "how", "2026", "with", "vs", "&"}
    return {w for w in re.findall(r"[a-z0-9]+", k.lower()) if w not in stop}

indexable = [x for x in rows if "noindex" not in x["robots"] and (not x["canon"] or x["canon"].rstrip("/") == (SITE + x["url"]).rstrip("/"))]
# Pairs reviewed by hand: shared words, different search intent (tool vs data,
# agency page vs comparison). Not cannibalisation.
DIFFERENT_INTENT = {
    frozenset({"/benchmarks/cost-per-booked-call", "/tools/cost-per-booked-call-calculator"}),
    frozenset({"/meta-ads-agency", "/compare/meta-ads-vs-google-ads-high-ticket"}),
}
collide = collections.defaultdict(set)
for a, b in itertools.combinations(indexable, 2):
    if frozenset({a["url"], b["url"]}) in DIFFERENT_INTENT:
        continue
    A, B = toks(a["primary_keyword"]), toks(b["primary_keyword"])
    if len(A) >= 2 and len(B) >= 2 and len(A & B) / len(A | B) >= 0.6:
        collide[a["url"]].add(b["url"])
        collide[b["url"]].add(a["url"])

for x in rows:
    self_url = SITE + ("" if x["url"] == "/" else x["url"])
    p, act = [], []
    noindex = "noindex" in x["robots"]
    canon_else = x["canon"] and x["canon"].rstrip("/") != self_url.rstrip("/")
    if canon_else:
        p.append(f"canonical points to {x['canon'].replace(SITE, '')}")
    if noindex:
        p.append("noindex")
    if not noindex and not canon_else:
        if collide[x["url"]]:
            p.append("same keyword as " + ", ".join(sorted(collide[x["url"]])[:3]))
            act.append("merge or differentiate")
        if x["unique_words"] < 300 and x["page_type"] not in ("company/legal",):
            p.append(f"thin ({x['unique_words']} unique words)")
            act.append("improve")
        if x["inbound_links"] < 5:
            p.append(f"{x['inbound_links']} internal links in")
            act.append("add links")
        if len(x["title"]) > 60:
            p.append(f"title {len(x['title'])} chars")
            act.append("shorten title")
        if len(BRAND_RX.findall(x["title"])) > 1:
            p.append("brand twice in title")
            act.append("fix title")
        if not x["desc"]:
            p.append("no meta description")
            act.append("add description")
        if x["h1"] != 1:
            p.append(f"{x['h1']} H1s")
            act.append("fix H1")
    if noindex or canon_else:
        action = "keep (noindex)" if noindex else "keep (canonicalised)"
    else:
        action = " + ".join(dict.fromkeys(act)) if act else "keep"
    x["problems"] = "; ".join(p) or "none"
    x["action"] = action

out = "reports/playbook-audit.csv"
with open(out, "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh)
    w.writerow(["URL", "Page type", "Primary keyword", "Unique words", "Total words", "Internal links in", "Problems", "Action"])
    for x in rows:
        w.writerow([x["url"], x["page_type"], x["primary_keyword"], x["unique_words"], x["total_words"], x["inbound_links"], x["problems"], x["action"]])

c = collections.Counter(x["page_type"] for x in rows)
print(f"wrote {out}: {len(rows)} URLs")
print("by type:", dict(c))
idx = [x for x in rows if not x["action"].startswith("keep (")]
print("indexable:", len(idx), "| keep:", sum(1 for x in idx if x["action"] == "keep"))
for k in ["improve", "add links", "merge or differentiate", "shorten title", "fix title", "add description", "fix H1"]:
    print(f"  {k}: {sum(1 for x in idx if k in x['action'])}")
sys.exit(0)
