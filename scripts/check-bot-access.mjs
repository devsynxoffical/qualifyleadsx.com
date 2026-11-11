#!/usr/bin/env node
/**
 * Checks that search-engine and AI crawlers can fetch key URLs on the live site.
 *   node scripts/check-bot-access.mjs
 * A host-level rule (Hostinger/LiteSpeed) blocked every "bingbot" request with
 * 403 in Nov 2026; this catches that kind of regression. Note: requests come
 * from a non-crawler IP, so a 403 here can also mean anti-spoofing; confirm
 * with Bing Webmaster Tools (GetUrlInfo / URL inspection) before acting.
 */
const SITE = "https://www.qualifiedleadsx.com";
const PATHS = ["/", "/robots.txt", "/sitemap.xml", "/llms.txt", "/qlx2026indexnow8f7d9e4a3b2c1f0e.txt"];
const AGENTS = {
  Googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  Bingbot: "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
  GPTBot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.1; +https://openai.com/gptbot",
  "OAI-SearchBot": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot",
  PerplexityBot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)",
  ClaudeBot: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)",
  Browser: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
};
let bad = 0;
for (const [name, ua] of Object.entries(AGENTS)) {
  const codes = [];
  for (const p of PATHS) {
    try {
      const r = await fetch(SITE + p, { headers: { "User-Agent": ua }, redirect: "manual" });
      codes.push(r.status);
    } catch (e) {
      codes.push("ERR");
    }
  }
  const ok = codes.every((c) => c === 200);
  if (!ok) bad++;
  console.log(`${ok ? "OK  " : "FAIL"} ${name.padEnd(14)} ${codes.join(" ")}`);
}
console.log(`\nPaths: ${PATHS.join(" ")}`);
process.exit(bad ? 1 : 0);
