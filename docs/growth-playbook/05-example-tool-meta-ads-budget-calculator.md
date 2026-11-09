# Example page: free tool (draft, not published)

- **URL:** /tools/meta-ads-budget-calculator
- **Title (52 chars):** Meta Ads Budget Calculator (Free) | QualifiedLeadsX™
- **Meta (130 chars):** Enter your target calls and close rate to get the monthly Meta ads budget you need. Free, no sign-up. Then book a call to plan it.
- **Primary keyword:** facebook ads budget calculator
- **Secondary keywords:** how much to spend on facebook ads, meta ads budget calculator
- **Hub:** /tools
- **Schema:** WebApplication (applicationCategory "BusinessApplication", offers price 0), FAQPage, BreadcrumbList
- **Build:** same pattern as `app/tools/cost-per-booked-call-calculator` (client component for the calculator, server-rendered text below it, metadata in `layout.tsx`)

## Calculator specification

Inputs (defaults in brackets, taken from the live benchmark pages):

1. New clients wanted per month (4)
2. Close rate on booked calls, % (25; setter-qualified calls close at 24% to 31% for $5K to $10K offers)
3. Show rate, % (70) [fill in: confirm default against /benchmarks/show-rate]
4. Cost per booked call, $ (130; the benchmark is $90 to $180)

Outputs:

- Calls to book = clients ÷ close rate ÷ show rate
- Monthly ad budget = calls to book × cost per booked call
- Daily budget = monthly ÷ 30.4
- A plain-language line: "To close 4 clients a month you need about 23 booked calls and $2,990 in ad spend."

---

# Free Meta Ads Budget Calculator

*[Working calculator here, usable without sign-up]*

## How to use the Meta ads budget calculator

1. **Enter the number of new clients you want each month.** Use a number your team can actually deliver.
2. **Enter your close rate on sales calls.** Take it from your CRM: deals won divided by calls held over the last 90 days. If you don't know it, keep the default.
3. **Enter your show rate.** This is calls held divided by calls booked.
4. **Enter your cost per booked call.** If you have never run ads, use the default from our [cost per booked call benchmarks](/benchmarks/cost-per-booked-call).
5. **Read the result.** The calculator shows the calls you need and the monthly and daily Meta budget to get them.

## What the results mean

**The budget is a starting point, not a cap.** In the first 2 to 4 weeks, Meta is still learning and your cost per booked call is usually higher than the benchmark. Plan for that.

**Small budgets struggle to exit learning.** Meta needs roughly 50 optimization events per ad set per week to stabilize. If your budget only buys a handful of booked calls a month, optimize for an earlier event, such as a submitted application, and qualify after the lead comes in.

**Close rate moves the budget more than ad costs do.** Going from a 15% to a 30% close rate halves the calls you need, and so halves the budget. That is why qualification and follow-up matter as much as the ads.

**Q4 costs more.** CPMs in October to December run about $36.80 to $54.20, against $18.40 to $24.80 in Q1 ([Meta ads CPM benchmarks](/benchmarks/meta-ads-cpm)). Add 30% to 50% to a Q4 budget.

## How to fix common issues

- **Budget too high for your margins?** Raise your close rate first. Pre-call qualification and a short VSL homework step usually lift it. See [appointment setting](/appointment-setting).
- **Cost per booked call above $200?** The funnel is usually the problem, not the ads. Check landing page conversion and application drop-off. See [VSL funnels](/vsl-funnels).
- **Lots of bookings, few shows?** Reply in under 5 minutes and send reminders by SMS and WhatsApp. See [speed to lead](/speed-to-lead) and the [show rate calculator](/tools/show-rate-calculator).
- **Not sure the numbers work at all?** Check your unit economics with the [LTV to CAC calculator](/tools/ltv-cac-calculator).

## FAQ

**How much should I spend on Facebook ads per month?**
Work backwards from the clients you want. With a 25% close rate, a 70% show rate and a $130 cost per booked call, 4 new clients need about 23 booked calls, or roughly $3,000 a month. This calculator does that maths for your numbers.

**What is a good daily budget for Meta ads for a high-ticket offer?**
Most high-ticket lead generation campaigns need at least $[fill in] a day to collect enough data. Below that, results stay noisy for months.

**Is Facebook ads budget the same as Meta ads budget?**
Yes. Meta Ads Manager runs Facebook, Instagram, Messenger and Audience Network from one budget.

**Does this calculator include your agency fee?**
No. It only estimates ad spend, which you pay directly to Meta. See [pricing](/pricing) for how our fee works.

**Where do the default numbers come from?**
From our 2026 benchmarks, which aggregate more than $50M in managed Meta ad spend across 125+ client accounts. Replace them with your own numbers when you have them.

**[Call to action]** Want us to sanity-check your budget? Book a free 30-minute strategy call. → /book-your-call#book

*(Related links are added automatically: all other tools, 2 matching services and 2 guides.)*
