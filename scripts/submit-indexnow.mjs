#!/usr/bin/env node
/**
 * Submit all priority URLs to IndexNow (Bing, Copilot, Seznam, Yandex).
 */

const HOST = "www.qualifiedleadsx.com";
const KEY = "qlx2026indexnow8f7d9e4a3b2c1f0e";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/case-studies`,
  `https://${HOST}/book-your-call`,
  `https://${HOST}/meta-ads-agency`,
  `https://${HOST}/appointment-setting`,
  `https://${HOST}/for/coaches`,
  `https://${HOST}/for/consultants`,
  `https://${HOST}/for/agencies`,
  `https://${HOST}/about`,
  `https://${HOST}/blog`,
  `https://${HOST}/blog/category/funnel-strategy`,
  `https://${HOST}/blog/category/paid-advertising`,
  `https://${HOST}/blog/category/lead-qualification`,
  `https://${HOST}/blog/category/scaling-economics`
];

async function submitIndexNow() {
  console.log(`Submitting ${URLS.length} URLs to IndexNow API for ${HOST}...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow Response: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log("SUCCESS: URLs submitted to IndexNow (Bing & Search Partners)!");
    } else {
      const text = await res.text();
      console.log("Response Body:", text);
    }
  } catch (err) {
    console.error("IndexNow submission error:", err.message);
  }
}

submitIndexNow();
