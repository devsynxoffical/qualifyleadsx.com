#!/usr/bin/env node
/**
 * Submit all priority URLs to IndexNow (Bing, Copilot, Seznam, Yandex).
 */

const HOST = "www.qualifiedleadsx.com";
const KEY = "qlx2026indexnow8f7d9e4a3b2c1f0e";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/for`,
  `https://${HOST}/benchmarks`,
  `https://${HOST}/tools`,
  `https://${HOST}/tools/cac-calculator`,
  `https://${HOST}/tools/roas-calculator`,
  `https://${HOST}/tools/cost-per-booked-call-calculator`,
  `https://${HOST}/tools/show-rate-calculator`,
  `https://${HOST}/tools/ltv-cac-calculator`,
  `https://${HOST}/tools/lead-scoring-template`,
  `https://${HOST}/benchmarks/cost-per-booked-call`,
  `https://${HOST}/benchmarks/show-rate`,
  `https://${HOST}/benchmarks/cost-per-lead-by-industry`,
  `https://${HOST}/benchmarks/meta-ads-cpm`,
  `https://${HOST}/benchmarks/close-rate`,
  `https://${HOST}/high-ticket-lead-generation`,
  `https://${HOST}/speed-to-lead`,
  `https://${HOST}/vsl-funnels`,
  `https://${HOST}/whatsapp-lead-nurture`,
  `https://${HOST}/crm-automation`,
  `https://${HOST}/outsourced-sales-closers`,
  `https://${HOST}/b2b-lead-generation`,
  `https://${HOST}/for/saas`,
  `https://${HOST}/for/med-spas`,
  `https://${HOST}/for/financial-advisors`,
  `https://${HOST}/for/business-coaches`,
  `https://${HOST}/for/executive-coaches`,
  `https://${HOST}/for/fitness-coaches`,
  `https://${HOST}/for/course-creators`,
  `https://${HOST}/for/insurance-agencies`,
  `https://${HOST}/for/real-estate-investors`,
  `https://${HOST}/for/law-firms`,
  `https://${HOST}/for/home-improvement`,
  `https://${HOST}/for/solar-companies`,
  `https://${HOST}/for/recruitment-agencies`,
  `https://${HOST}/for/online-education`,
  `https://${HOST}/meta-ads-for-coaches`,
  `https://${HOST}/meta-ads-for-consultants`,
  `https://${HOST}/meta-ads-for-financial-advisors`,
  `https://${HOST}/meta-ads-for-med-spas`,
  `https://${HOST}/meta-ads-for-real-estate-investors`,
  `https://${HOST}/meta-ads-for-course-creators`,
  `https://${HOST}/meta-ads-for-saas`,
  `https://${HOST}/meta-ads-for-law-firms`,
  `https://${HOST}/appointment-setting-for-agencies`,
  `https://${HOST}/appointment-setting-for-saas`,
  `https://${HOST}/appointment-setting-for-coaches`,
  `https://${HOST}/appointment-setting-for-consultants`,
  `https://${HOST}/compare/meta-ads-vs-google-ads-high-ticket`,
  `https://${HOST}/compare/done-for-you-vs-done-with-you-lead-generation`,
  `https://${HOST}/compare/appointment-setter-vs-va`,
  `https://${HOST}/compare/qualifiedleadsx-alternatives`,
  `https://${HOST}/lead-generation-agency`,
  `https://${HOST}/for/b2b-services`,
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

