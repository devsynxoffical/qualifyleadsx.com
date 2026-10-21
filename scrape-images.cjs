/* eslint-disable @typescript-eslint/no-require-imports */

const https = require("https");
const fs = require("fs");
const path = require("path");

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

const PAGES = [
  "https://www.qualifiedleadsx.com/",
  "https://www.qualifiedleadsx.com/book-your-call/",
  "https://www.qualifiedleadsx.com/sample-page/",
  "https://www.qualifiedleadsx.com/booking-confirmation/",
  "https://www.qualifiedleadsx.com/congrats/",
  "https://www.qualifiedleadsx.com/solarscaling/",
];

const OUT = path.join(__dirname, "public", "images");

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { "User-Agent": UA }, timeout: 30000 },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          req.destroy();
          return resolve(get(res.headers.location));
        }
        if (res.statusCode !== 200) return reject(new Error(`${res.statusCode} ${url}`));
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      }
    );
    req.on("timeout", () => req.destroy(new Error(`timeout ${url}`)));
    req.on("error", reject);
  });
}

const IMG_RE = /https:\/\/www\.qualifiedleadsx\.com\/wp-content\/uploads\/[^"')\s\\]+/g;
const EXT = /\.(png|jpe?g|webp|gif|svg|ico)$/i;

function baseName(url) {
  const file = url.split("/").pop().split("?")[0];
  // strip -NNNxNNN suffixes (but keep -scaled, which is a real file)
  return file.replace(/-\d+x\d+\.(?=[a-z]+$)/i, ".");
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });

  const all = new Set();
  for (const page of PAGES) {
    try {
      const html = await get(page);
      let m;
      while ((m = IMG_RE.exec(html.toString()))) {
        if (EXT.test(m[0])) all.add(m[0]);
      }
    } catch (e) {
      console.log("PAGE FAIL", page, String(e));
    }
  }

  // Keep the largest variant per base name
  const best = new Map();
  for (const url of all) {
    const base = baseName(url);
    const isFull = /\.(png|jpe?g|webp|gif)$/i.test(base) && !/-\d+x\d+/.test(url.split("/").pop());
    const isScaled = /-scaled\./.test(url);
    const prev = best.get(base);
    const score = isScaled ? 2 : isFull ? 3 : 1;
    if (!prev || score > prev.score) {
      best.set(base, { url, score });
    }
  }

  console.log("Unique images to download:", best.size);

  let ok = 0;
  let fail = 0;
  const failures = [];
  await Promise.all(
    [...best.entries()].map(async ([base, { url }]) => {
      const file = path.join(OUT, base);
      if (fs.existsSync(file)) {
        ok++;
        return;
      }
      try {
        const buf = await get(url);
        fs.writeFileSync(file, buf);
        ok++;
        console.log("OK", url.split("/").pop());
      } catch (e) {
        fail++;
        failures.push(url);
        console.log("FAIL", url, String(e));
      }
    })
  );

  console.log(`\nDone. Downloaded ${ok}, failed ${fail}`);
  if (failures.length) console.log("Failures:", failures);
}

main();
