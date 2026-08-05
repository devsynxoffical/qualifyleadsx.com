import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Earnings Disclaimer",
  description: "Earnings disclaimer for QualifiedLeadsX™ results.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Earnings Disclaimer" updated="January 2026">
      <h2>No Guaranteed Results</h2>
      <p>
        The client results shown on {site.url}, including revenue figures and case studies, are
        examples of what specific clients have achieved. They are not typical results, and they do
        not represent a promise or guarantee of earnings.
      </p>

      <h2>Results Vary</h2>
      <p>
        Every business is different. Outcomes depend on factors including your offer, niche,
        market conditions, sales ability and execution. Your results may differ materially from
        those shown.
      </p>

      <h2>Nothing Here Is Financial Advice</h2>
      <p>
        Nothing on this website constitutes professional, financial or legal advice. You should
        make your own assessment before making any business or financial decision.
      </p>

      <h2>Questions</h2>
      <p>
        Questions about this disclaimer? Contact us at {site.email}.
      </p>
    </LegalPage>
  );
}
