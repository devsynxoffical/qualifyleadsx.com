#!/usr/bin/env node
/**
 * Bing Webmaster Tools API (read + submit) for www.qualifiedleadsx.com.
 *   BING_WEBMASTER_API_KEY=... node scripts/bing-webmaster.mjs status
 *   BING_WEBMASTER_API_KEY=... node scripts/bing-webmaster.mjs submit-sitemaps
 *   BING_WEBMASTER_API_KEY=... node scripts/bing-webmaster.mjs submit-urls <url> [url ...]
 * The key is never stored in the repository.
 */
const KEY = process.env.BING_WEBMASTER_API_KEY;
if (!KEY) { console.error("Set BING_WEBMASTER_API_KEY."); process.exit(1); }
const SITE = "https://www.qualifiedleadsx.com/";
const API = "https://ssl.bing.com/webmaster/api.svc/json";
const q = (m, extra = "") => fetch(`${API}/${m}?siteUrl=${encodeURIComponent(SITE)}&apikey=${KEY}${extra}`).then((r) => r.json()).then((j) => j.d);
const post = (m, body) => fetch(`${API}/${m}?apikey=${KEY}`, { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify(body) }).then(async (r) => ({ status: r.status, body: await r.text() }));
const day = (s) => (s ? new Date(Number(String(s).match(/-?\d+/)[0])).toISOString().slice(0, 10) : "-");
const [cmd, ...args] = process.argv.slice(2);

if (cmd === "status") {
  const [crawl, feeds, traffic, quota, issues] = await Promise.all([q("GetCrawlStats"), q("GetFeeds"), q("GetRankAndTrafficStats"), q("GetUrlSubmissionQuota"), q("GetCrawlIssues")]);
  const last = crawl.at(-1) ?? {};
  console.log(`Crawl (latest ${day(last.Date)}): in index ${last.InIndex}, crawled ${last.CrawledPages}, 2xx ${last.Code2xx}, 4xx ${last.Code4xx}, 5xx ${last.Code5xx}, other ${last.AllOtherCodes}, robots-blocked ${last.BlockedByRobotsTxt}`);
  for (const f of feeds) console.log(`Sitemap ${f.Url}: ${f.Status}, ${f.UrlCount} URLs, last crawled ${day(f.LastCrawled)}`);
  console.log(`Traffic: ${traffic.reduce((a, r) => a + r.Impressions, 0)} impressions, ${traffic.reduce((a, r) => a + r.Clicks, 0)} clicks (${traffic.length} days)`);
  console.log(`URL submission quota: ${quota.DailyQuota} today, ${quota.MonthlyQuota} this month`);
  console.log(`Crawl issues: ${issues.length}`);
} else if (cmd === "submit-sitemaps") {
  for (const f of ["sitemap.xml", "sitemap-core.xml", "sitemap-industries.xml", "sitemap-content.xml"]) {
    const r = await post("SubmitFeed", { siteUrl: SITE, feedUrl: SITE + f });
    console.log(`${r.status === 200 ? "OK  " : "FAIL"} ${f} ${r.status === 200 ? "" : r.body}`);
  }
} else if (cmd === "submit-urls") {
  const r = await post("SubmitUrlBatch", { siteUrl: SITE, urlList: args });
  console.log(r.status === 200 ? `OK  ${args.length} URLs submitted` : `FAIL ${r.status} ${r.body}`);
} else {
  console.log("Commands: status | submit-sitemaps | submit-urls <url...>");
}
