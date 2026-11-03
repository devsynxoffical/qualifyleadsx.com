#!/usr/bin/env node
/**
 * Ask Google to (re)crawl site URLs via the Indexing API.
 *
 * Setup (one time):
 *   1. Enable "Web Search Indexing API" on the Google Cloud project that owns the
 *      service account.
 *   2. In Google Search Console, add the service account email as an OWNER of the
 *      https://www.qualifiedleadsx.com/ property (Settings -> Users and permissions).
 *   3. Save the service-account JSON somewhere outside the repo, e.g.
 *      ~/.secrets/google-indexer.json (never commit it).
 *
 * Usage:
 *   GOOGLE_APPLICATION_CREDENTIALS=~/.secrets/google-indexer.json npm run index:google
 *   GOOGLE_APPLICATION_CREDENTIALS=... node scripts/request-indexing.mjs https://www.qualifiedleadsx.com/blog/some-post
 *
 * With no URL arguments it reads every <loc> from the live sitemap.
 * Quota: 200 publish requests per day per project by default.
 */
import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";

const SITE = "https://www.qualifiedleadsx.com";
const SCOPE = "https://www.googleapis.com/auth/indexing";
const ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";

function loadCredentials() {
  const path = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const inline = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!path && !inline) {
    console.error(
      "Set GOOGLE_APPLICATION_CREDENTIALS to the service-account JSON file path (or GOOGLE_SERVICE_ACCOUNT_JSON to its contents)."
    );
    process.exit(1);
  }
  const raw = inline ?? readFileSync(path.replace(/^~/, process.env.HOME ?? ""), "utf8");
  const creds = JSON.parse(raw);
  if (!creds.client_email || !creds.private_key) {
    console.error("Credentials JSON is missing client_email or private_key.");
    process.exit(1);
  }
  return creds;
}

function b64url(input) {
  return Buffer.from(input).toString("base64url");
}

async function getAccessToken(creds) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: creds.client_email,
      scope: SCOPE,
      aud: creds.token_uri ?? "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = signer.sign(creds.private_key, "base64url");
  const assertion = `${header}.${claims}.${signature}`;

  const res = await fetch(creds.token_uri ?? "https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Token request failed: ${res.status} ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function urlsFromSitemap() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not fetch sitemap: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const creds = loadCredentials();
  const urls = process.argv.slice(2).length ? process.argv.slice(2) : await urlsFromSitemap();
  if (!urls.length) {
    console.error("No URLs to submit.");
    process.exit(1);
  }
  console.log(`Requesting indexing for ${urls.length} URL(s) as ${creds.client_email}\n`);

  const token = await getAccessToken(creds);
  let ok = 0;
  let failed = 0;

  for (const url of urls) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    });
    const body = await res.json().catch(() => ({}));
    if (res.ok) {
      ok += 1;
      console.log(`OK    ${url}`);
    } else {
      failed += 1;
      const msg = body?.error?.message ?? res.statusText;
      console.log(`FAIL  ${url}\n      ${res.status} ${msg}`);
    }
  }

  console.log(`\nDone. ${ok} accepted, ${failed} failed.`);
  if (failed) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
