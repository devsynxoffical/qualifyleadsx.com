/* eslint-disable @typescript-eslint/no-require-imports */

const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();

  for (const viewport of [
    { name: "desktop", width: 1440, height: 900 },
    { name: "mobile", width: 390, height: 844 },
  ]) {
    const page = await browser.newPage({ viewport });
    const failed = [];
    page.on("requestfailed", (r) => {
      const err = r.failure()?.errorText || "";
      if (err.includes("ERR_ABORTED") && r.url().includes("/videos/")) return;
      failed.push(`FAIL ${r.url()} (${err})`);
    });
    page.on("response", (r) => {
      if (r.url().includes("/images/") && r.status() >= 400) failed.push(`${r.status()} ${r.url()}`);
    });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(3500);

    const audit = await page.evaluate(() => {
      const out = {};
      const doc = document.documentElement;
      out.scrollWidth = doc.scrollWidth;
      out.innerWidth = window.innerWidth;
      out.horizontalOverflow = doc.scrollWidth > window.innerWidth + 2;

      out.fonts = {
        sans: document.fonts.check("16px Inter"),
        display: document.fonts.check("16px Inter Tight"),
        mono: document.fonts.check("16px Geist Mono"),
      };
      out.bodyFont = getComputedStyle(document.body).fontFamily;
      out.h1Font = getComputedStyle(document.querySelector("h1")).fontFamily;

      const h1 = document.querySelector("h1");
      out.h1FontSize = h1 ? getComputedStyle(h1).fontSize : null;

      out.imagesOnPage = document.querySelectorAll("img").length;
      out.imagesLoaded = [...document.querySelectorAll("img")].filter(
        (i) => i.complete && i.naturalWidth > 0
      ).length;

      return out;
    });

    // scroll through the whole page to force lazy images
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        const step = () => {
          y += 700;
          window.scrollTo(0, y);
          if (y < document.body.scrollHeight) setTimeout(step, 120);
          else resolve();
        };
        step();
      });
    });
    await page.waitForTimeout(1500);

    const after = await page.evaluate(() => {
      const imgs = [...document.querySelectorAll("img")];
      return {
        imagesLoaded: imgs.filter((i) => i.complete && i.naturalWidth > 0).length,
        imagesBroken: imgs.filter((i) => i.complete && i.naturalWidth === 0).length,
        total: imgs.length,
      };
    });
    audit.afterScroll = after;
    audit.failedRequests = failed.slice(0, 12);
    console.log(viewport.name, JSON.stringify(audit, null, 1));
    await page.close();
  }
  await browser.close();
})();
