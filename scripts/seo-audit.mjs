#!/usr/bin/env node
/**
 * Full-site SEO / AEO / GEO audit against a live (or local) origin.
 *
 *   npm run seo:audit                         # https://www.qualifiedleadsx.com -> audit/baseline.*
 *   npm run seo:audit -- --origin http://localhost:3100 --out audit/after
 *
 * For every sitemap URL plus nav/footer links it records status, redirect chain,
 * response time, title/description (+ length), canonical, robots meta, X-Robots-Tag,
 * H1 count, H2 list, server-rendered main-content word count (and words not shared
 * with other pages), JSON-LD @types and parse errors, images and images without alt,
 * internal links in/out, OG/Twitter tags, hreflang and lang. It also checks robots.txt,
 * sitemaps and llms files, fetches the top URLs with 13 user agents, scores
 * near-duplicates per sitemap section (5-word shingles, Jaccard) and lists orphans and
 * thin pages. No dependencies; Node 20+ (in this cloud environment set NODE_USE_ENV_PROXY=1).
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : def;
};
const ORIGIN = arg("origin", "https://www.qualifiedleadsx.com").replace(/\/$/, "");
const CANON = "https://www.qualifiedleadsx.com";
const OUT = arg("out", "audit/baseline");
const CONCURRENCY = Number(arg("concurrency", "3"));
const TOP = Number(arg("top", "20"));
const CHROME_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const BOT_UAS = {
  Chrome: CHROME_UA,
  Googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  Bingbot: "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
  GPTBot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.2; +https://openai.com/gptbot",
  "OAI-SearchBot": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot",
  "ChatGPT-User": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot",
  ClaudeBot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)",
  "Claude-User": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Claude-User/1.0; +Claude-User@anthropic.com)",
  PerplexityBot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)",
  "Perplexity-User": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Perplexity-User/1.0; +https://perplexity.ai/perplexity-user)",
  "Google-Extended": "Mozilla/5.0 (compatible; Google-Extended)",
  "Applebot-Extended": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 (Applebot-Extended/0.1)",
  CCBot: "CCBot/2.0 (https://commoncrawl.org/faq/)",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
const text = (html) => decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i"));
  return m ? decode(m[2] ?? m[3] ?? "") : null;
};
const toPath = (u) => {
  try {
    const x = new URL(u, CANON);
    if (x.origin !== CANON && x.origin !== ORIGIN) return null;
    return (x.pathname.replace(/\/+$/, "") || "/");
  } catch {
    return null;
  }
};

async function get(url, ua = CHROME_UA, follow = true) {
  const chain = [];
  let cur = url;
  const t0 = Date.now();
  for (let hop = 0; hop < 6; hop++) {
    let r;
    try {
      r = await fetch(cur, { redirect: "manual", headers: { "User-Agent": ua, Accept: "text/html,*/*" } });
    } catch (e) {
      return { status: 0, error: String(e.cause?.code || e.message), chain, ms: Date.now() - t0 };
    }
    if (follow && r.status >= 300 && r.status < 400 && r.headers.get("location")) {
      chain.push(`${r.status} ${cur}`);
      cur = new URL(r.headers.get("location"), cur).href;
      continue;
    }
    const body = await r.text();
    return { status: r.status, url: cur, chain, ms: Date.now() - t0, headers: r.headers, body };
  }
  return { status: -1, error: "too many redirects", chain, ms: Date.now() - t0 };
}

async function pool(items, fn, n = CONCURRENCY) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const k = i++;
        out[k] = await fn(items[k], k);
        await sleep(120);
      }
    })
  );
  return out;
}

function analyse(html) {
  const head = html.match(/<head[\s\S]*?<\/head>/i)?.[0] ?? html;
  const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
  const metaBy = (k, v) => metas.find((t) => (attr(t, k) || "").toLowerCase() === v);
  const title = decode((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim());
  const desc = attr(metaBy("name", "description") || "", "content");
  const canonical = attr(head.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0] || "", "href");
  const robots = attr(metaBy("name", "robots") || "", "content");
  const og = Object.fromEntries(["og:title", "og:description", "og:image", "og:url", "og:type"].map((k) => [k, attr(metaBy("property", k) || "", "content")]));
  const tw = Object.fromEntries(["twitter:card", "twitter:title", "twitter:image"].map((k) => [k, attr(metaBy("name", k) || "", "content")]));
  const hreflang = [...head.matchAll(/<link\b[^>]*hreflang=["']([^"']+)["'][^>]*>/gi)].map((m) => m[1]);
  const lang = attr(html.match(/<html\b[^>]*>/i)?.[0] || "", "lang");
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => text(m[1]));
  const h2 = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => text(m[1]));
  const ld = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  const types = new Set();
  let ldErrors = 0;
  const walk = (o) => {
    if (Array.isArray(o)) return o.forEach(walk);
    if (o && typeof o === "object") {
      if (o["@type"]) [].concat(o["@type"]).forEach((t) => types.add(t));
      Object.values(o).forEach(walk);
    }
  };
  for (const s of ld) {
    try {
      walk(JSON.parse(s));
    } catch {
      ldErrors++;
    }
  }
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const noAlt = imgs.filter((t) => attr(t, "alt") === null).length;
  const emptyAlt = imgs.filter((t) => attr(t, "alt") === "").length;
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? html;
  // Drop the footer and the related-links block from "main" so boilerplate isn't counted.
  const mainClean = main.replace(/<footer[\s\S]*?<\/footer>/gi, " ").replace(/<nav\b[\s\S]*?<\/nav>/gi, " ");
  const mainText = text(mainClean);
  const words = mainText.toLowerCase().match(/[a-z0-9$%][a-z0-9$%'.-]*/g) || [];
  const links = [...html.matchAll(/<a\b[^>]*href=["']([^"'#][^"']*)["'][^>]*>/gi)].map((m) => m[1]);
  const internal = [...new Set(links.map(toPath).filter(Boolean))];
  const external = [...new Set(links.filter((h) => /^https?:/.test(h) && !h.startsWith(CANON) && !h.startsWith(ORIGIN)).map((h) => new URL(h).hostname))];
  return { title, titleLen: title.length, desc, descLen: desc ? desc.length : 0, canonical, robots, og, tw, hreflang, lang, h1, h2, ldTypes: [...types], ldErrors, images: imgs.length, imagesNoAlt: noAlt, imagesEmptyAlt: emptyAlt, words, wordCount: words.length, internal, external };
}

const shingles = (words, k = 5) => {
  const s = new Set();
  for (let i = 0; i + k <= words.length; i++) s.add(words.slice(i, i + k).join(" "));
  return s;
};
const jaccard = (a, b) => {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  for (const x of small) if (big.has(x)) inter++;
  return inter / (a.size + b.size - inter);
};
const section = (p) => {
  if (p === "/") return "home";
  const seg = p.split("/")[1];
  if (/^meta-ads-for-|^appointment-setting-for-/.test(seg)) return "service-for-industry";
  return seg;
};

async function main() {
  const report = { origin: ORIGIN, generatedAt: new Date().toISOString() };

  // Site files
  const files = {};
  for (const f of ["/robots.txt", "/sitemap.xml", "/sitemap-core.xml", "/sitemap-industries.xml", "/sitemap-content.xml", "/llms.txt", "/llms-full.txt"]) {
    const r = await get(ORIGIN + f);
    files[f] = { status: r.status, bytes: r.body?.length ?? 0, contentType: r.headers?.get("content-type") ?? null };
    if (f === "/robots.txt") files[f].body = r.body;
  }
  report.files = files;

  // URL list: sitemap + nav/footer links from the homepage
  const sm = [];
  for (const f of ["/sitemap-core.xml", "/sitemap-industries.xml", "/sitemap-content.xml"]) {
    const r = await get(ORIGIN + f);
    for (const m of (r.body || "").matchAll(/<loc>([^<]+)<\/loc>/g)) sm.push(toPath(m[1]));
  }
  const home = await get(ORIGIN + "/");
  const navFooter = analyse(home.body || "").internal;
  const paths = [...new Set([...sm.filter(Boolean), ...navFooter])].filter((p) => !/\.(xml|txt|png|jpg|webp|pdf)$/.test(p));
  const inSitemap = new Set(sm);

  const pages = await pool(paths, async (p) => {
    const r = await get(ORIGIN + p);
    const base = { path: p, inSitemap: inSitemap.has(p), status: r.status, redirectChain: r.chain, ms: r.ms, xRobotsTag: r.headers?.get("x-robots-tag") ?? null, error: r.error ?? null };
    if (r.status !== 200 || !r.body) return base;
    return { ...base, ...analyse(r.body) };
  });

  // Internal links in, orphans
  const inbound = Object.fromEntries(paths.map((p) => [p, 0]));
  for (const pg of pages) for (const l of pg.internal || []) if (l in inbound && l !== pg.path) inbound[l]++;
  for (const pg of pages) pg.linksIn = inbound[pg.path] ?? 0;

  // Boilerplate-aware unique words: tokens covered only by shingles that appear on <= 2 pages
  const sh = new Map(pages.map((pg) => [pg.path, shingles(pg.words || [])]));
  const freq = new Map();
  for (const s of sh.values()) for (const x of s) freq.set(x, (freq.get(x) || 0) + 1);
  for (const pg of pages) {
    const w = pg.words || [];
    const covered = new Array(w.length).fill(false);
    for (let i = 0; i + 5 <= w.length; i++) if ((freq.get(w.slice(i, i + 5).join(" ")) || 0) <= 2) for (let j = i; j < i + 5; j++) covered[j] = true;
    pg.uniqueWords = covered.filter(Boolean).length;
  }

  // Near-duplicates per section (indexable 200 pages only)
  const dupPairs = [];
  const sectionStats = {};
  const indexable = pages.filter((pg) => pg.status === 200 && !(pg.robots || "").includes("noindex"));
  const bySec = {};
  for (const pg of indexable) (bySec[section(pg.path)] ||= []).push(pg);
  for (const [sec, list] of Object.entries(bySec)) {
    let sum = 0, n = 0;
    for (let i = 0; i < list.length; i++)
      for (let j = i + 1; j < list.length; j++) {
        const s = jaccard(sh.get(list[i].path), sh.get(list[j].path));
        sum += s; n++;
        if (s > 0.35) dupPairs.push({ section: sec, a: list[i].path, b: list[j].path, jaccard: +s.toFixed(3) });
      }
    sectionStats[sec] = { pages: list.length, avgJaccard: n ? +(sum / n).toFixed(3) : 0, maxPairs: dupPairs.filter((d) => d.section === sec).length };
  }

  // Bot access on top URLs (sitemap order, homepage first)
  const top = ["/", ...sm.filter((p) => p && p !== "/")].slice(0, TOP);
  const bots = {};
  for (const [name, ua] of Object.entries(BOT_UAS)) {
    const res = await pool(top, async (p) => {
      const r = await get(ORIGIN + p, ua);
      const words = r.body ? analyse(r.body).wordCount : 0;
      return { path: p, status: r.status, words };
    }, 2);
    bots[name] = res;
  }
  const chromeWords = Object.fromEntries(bots.Chrome.map((r) => [r.path, r.words]));
  const botSummary = Object.fromEntries(
    Object.entries(bots).map(([name, res]) => {
      const non200 = res.filter((r) => r.status !== 200).map((r) => `${r.path}:${r.status}`);
      const diff = res.filter((r) => r.status === 200 && Math.abs(r.words - (chromeWords[r.path] || 0)) > Math.max(30, 0.05 * (chromeWords[r.path] || 0))).map((r) => r.path);
      return [name, { ok: res.filter((r) => r.status === 200).length, of: res.length, non200, differentContent: diff }];
    })
  );

  // Summaries
  const ok = pages.filter((pg) => pg.status === 200);
  const dupTitles = Object.entries(ok.reduce((a, pg) => ((a[pg.title] ||= []).push(pg.path), a), {})).filter(([, v]) => v.length > 1);
  const dupDescs = Object.entries(ok.reduce((a, pg) => ((a[pg.desc] ||= []).push(pg.path), a), {})).filter(([k, v]) => k && v.length > 1);
  const summary = {
    urls: pages.length,
    indexable: indexable.length,
    non200: pages.filter((pg) => pg.status !== 200).map((pg) => `${pg.path}:${pg.status}`),
    redirectChains: pages.filter((pg) => pg.redirectChain?.length > 1).map((pg) => pg.path),
    avgResponseMs: Math.round(ok.reduce((a, pg) => a + pg.ms, 0) / Math.max(1, ok.length)),
    titleOutOfRange: ok.filter((pg) => pg.titleLen < 30 || pg.titleLen > 60).map((pg) => `${pg.path} (${pg.titleLen})`),
    descOutOfRange: ok.filter((pg) => pg.descLen < 120 || pg.descLen > 160).map((pg) => `${pg.path} (${pg.descLen})`),
    duplicateTitles: dupTitles,
    duplicateDescriptions: dupDescs,
    h1Not1: ok.filter((pg) => pg.h1.length !== 1).map((pg) => `${pg.path} (${pg.h1.length})`),
    canonicalIssues: ok.filter((pg) => !pg.canonical || toPath(pg.canonical) !== pg.path || !pg.canonical.startsWith(CANON)).map((pg) => `${pg.path} -> ${pg.canonical}`),
    noindex: ok.filter((pg) => (pg.robots || "").includes("noindex") || (pg.xRobotsTag || "").includes("noindex")).map((pg) => pg.path),
    jsonLdErrors: ok.filter((pg) => pg.ldErrors).map((pg) => pg.path),
    noJsonLd: ok.filter((pg) => !pg.ldTypes.length).map((pg) => pg.path),
    imagesWithoutAlt: ok.reduce((a, pg) => a + pg.imagesNoAlt, 0),
    pagesWithImagesWithoutAlt: ok.filter((pg) => pg.imagesNoAlt).map((pg) => `${pg.path} (${pg.imagesNoAlt})`),
    missingOg: ok.filter((pg) => !pg.og["og:title"] || !pg.og["og:image"]).map((pg) => pg.path),
    missingTwitter: ok.filter((pg) => !pg.tw["twitter:card"]).map((pg) => pg.path),
    orphans: ok.filter((pg) => pg.inSitemap && pg.linksIn === 0).map((pg) => pg.path),
    thin: ok.filter((pg) => !(pg.robots || "").includes("noindex") && pg.uniqueWords < 600).map((pg) => `${pg.path} (${pg.uniqueWords} unique / ${pg.wordCount} total)`),
    nearDuplicatePairs: dupPairs.length,
    sections: sectionStats,
    bots: botSummary,
  };
  report.summary = summary;
  report.nearDuplicates = dupPairs.sort((a, b) => b.jaccard - a.jaccard);
  report.pages = pages.map(({ words, internal, ...rest }) => ({ ...rest, linksOut: (internal || []).length }));

  mkdirSync(dirname(OUT) || ".", { recursive: true });
  writeFileSync(`${OUT}.json`, JSON.stringify(report, null, 1));
  const cols = ["path", "inSitemap", "status", "ms", "titleLen", "descLen", "canonical", "robots", "xRobotsTag", "h1Count", "h2Count", "wordCount", "uniqueWords", "ldTypes", "ldErrors", "images", "imagesNoAlt", "linksIn", "linksOut", "ogImage", "twitterCard", "lang", "title"];
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const rows = report.pages.map((pg) => [pg.path, pg.inSitemap, pg.status, pg.ms, pg.titleLen, pg.descLen, pg.canonical, pg.robots, pg.xRobotsTag, pg.h1?.length, pg.h2?.length, pg.wordCount, pg.uniqueWords, (pg.ldTypes || []).join("|"), pg.ldErrors, pg.images, pg.imagesNoAlt, pg.linksIn, pg.linksOut, pg.og?.["og:image"], pg.tw?.["twitter:card"], pg.lang, pg.title].map(esc).join(","));
  writeFileSync(`${OUT}.csv`, [cols.join(","), ...rows].join("\n"));

  const s = summary;
  console.log(`Audit of ${ORIGIN}: ${s.urls} URLs (${s.indexable} indexable), avg response ${s.avgResponseMs} ms`);
  console.log(`non-200: ${s.non200.length} | redirect chains: ${s.redirectChains.length} | canonical issues: ${s.canonicalIssues.length} | noindex: ${s.noindex.length}`);
  console.log(`titles out of 30-60: ${s.titleOutOfRange.length} | descriptions out of 120-160: ${s.descOutOfRange.length} | duplicate titles: ${s.duplicateTitles.length} | duplicate descriptions: ${s.duplicateDescriptions.length} | H1 != 1: ${s.h1Not1.length}`);
  console.log(`JSON-LD errors: ${s.jsonLdErrors.length} | no JSON-LD: ${s.noJsonLd.length} | images without alt: ${s.imagesWithoutAlt} | missing OG: ${s.missingOg.length} | missing Twitter: ${s.missingTwitter.length}`);
  console.log(`orphans: ${s.orphans.length} | thin (<600 unique words): ${s.thin.length} | near-duplicate pairs (>0.35): ${s.nearDuplicatePairs}`);
  console.log("sections:", JSON.stringify(s.sections));
  for (const [n, b] of Object.entries(s.bots)) console.log(`  ${n.padEnd(18)} ${b.ok}/${b.of} 200${b.non200.length ? "  non-200: " + b.non200.slice(0, 3).join(" ") : ""}${b.differentContent.length ? "  different content: " + b.differentContent.length : ""}`);
  console.log(`Wrote ${OUT}.json and ${OUT}.csv`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
