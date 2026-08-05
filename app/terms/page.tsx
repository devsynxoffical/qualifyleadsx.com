import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of QualifiedLeadsX™ services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="January 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing {site.url} or engaging with QualifiedLeadsX™ services, you agree to these
        Terms of Service. If you do not agree, please do not use our services.
      </p>

      <h2>2. Services</h2>
      <p>
        QualifiedLeadsX™ provides done-for-you client acquisition services, including funnel
        build, traffic management, automation and reporting, as scoped in your engagement
        agreement.
      </p>

      <h2>3. Ownership of Assets</h2>
      <p>
        All accounts, pixels, audiences, funnels, lists and campaign assets created during an
        engagement are registered in the client&apos;s name and remain the client&apos;s property.
        No hostage-holding applies.
      </p>

      <h2>4. Guarantee</h2>
      <p>
        Certain engagements include a written 90-day guarantee. Specific terms are set out in your
        engagement agreement. Results are not guaranteed outcomes of income and vary by business.
      </p>

      <h2>5. Payment</h2>
      <p>
        Fees are due as set out in your engagement agreement. Late or failed payments may result in
        suspension of services.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, QualifiedLeadsX™ shall not be liable for indirect,
        incidental or consequential damages arising from use of our services.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about these terms? Contact us at {site.email}.
      </p>
    </LegalPage>
  );
}
