#!/usr/bin/env bash
# Mobile Lighthouse for key pages. Usage: scripts/lighthouse.sh <label> [origin]
# Writes audit/lighthouse/<label>-<page>.json and prints a one-line summary per page.
set -u
LABEL=${1:-run}; ORIGIN=${2:-https://www.qualifiedleadsx.com}
CH=${CHROME_PATH:-/opt/pw-browsers/chromium}
mkdir -p audit/lighthouse
for u in / /high-ticket-lead-generation /blog/buy-qualified-leads-vs-generating-your-own /case-studies/b2b-agency-scaling-846k; do
  n=$(echo "$u" | sed 's|^/$|home|; s|^/||; s|/|_|g')
  CHROME_PATH=$CH timeout 300 npx -y lighthouse@12.2.1 "$ORIGIN$u" --quiet \
    --chrome-flags="--headless=new --no-sandbox" \
    --only-categories=performance,accessibility,best-practices,seo \
    --output=json --output-path="audit/lighthouse/$LABEL-$n.json" >/dev/null 2>"audit/lighthouse/$LABEL-$n.log"
  python3 -c "
import json,sys
d=json.load(open('audit/lighthouse/$LABEL-$n.json'));c=d['categories'];a=d['audits']
print('$u'.ljust(52), ' '.join(f\"{k[:4]}={round((v['score'] or 0)*100)}\" for k,v in c.items()), '| LCP',a['largest-contentful-paint']['displayValue'],'TBT',a['total-blocking-time']['displayValue'],'CLS',a['cumulative-layout-shift']['displayValue'],'TTFB',a['server-response-time']['displayValue'])" 2>/dev/null || echo "$u failed: $(tail -2 audit/lighthouse/$LABEL-$n.log)"
done
