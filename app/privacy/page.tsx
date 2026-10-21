import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How QualifiedLeadsX™ collects, uses and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="January 2026">
      <h2>1. Information We Collect</h2>
      <p>
        When you use our website or book a call, we may collect your name, email address, phone
        number and any details you choose to share about your business. We also collect standard
        analytics data such as pages visited, device type and referral source.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your information to respond to enquiries, schedule strategy calls, deliver the
        services you request, improve our website, and - where you have consented - send relevant
        updates about QualifiedLeadsX™.
      </p>

      <h2>3. Cookies &amp; Tracking</h2>
      <p>
        Our site uses cookies and pixels (including Meta and analytics tools) to understand how
        visitors interact with the site and to measure marketing performance. You can disable
        cookies in your browser settings at any time.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We never sell your personal data. We share information only with trusted service providers
        (such as scheduling, email and payment platforms) who process data on our behalf under
        strict confidentiality obligations.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We apply reasonable technical and organisational measures to protect your data against
        unauthorised access, alteration or loss.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data at any time by
        emailing {site.email}. We will respond within 30 days.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about this policy? Contact us at {site.email}.
      </p>
    </LegalPage>
  );
}
