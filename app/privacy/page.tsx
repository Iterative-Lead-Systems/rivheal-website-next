import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RivHeal collects, uses, and protects your personal and health data in compliance with Nigeria's NDPR.",
};

const sections = [
  {
    title: "1. Who We Are",
    content: `RivHeal Technology Limited ("RivHeal", "we", "us", "our") is a health-technology company incorporated in Nigeria, operating from Lagos, Nigeria. We provide a digital platform that connects patients, hospitals, and healthcare practitioners.

Contact: hello@rivheal.com`,
  },
  {
    title: "2. Data We Collect",
    content: `We collect only the information necessary to operate our services:

**Identity data:** Full name, date of birth, gender, National Identification Number (NIN) where required.

**Contact data:** Email address, phone number, physical address.

**Health data:** Medical history, diagnoses, prescriptions, lab results, vitals, and appointment records — only when you actively use our patient or provider services.

**Technical data:** IP address, browser type, device identifiers, usage logs, and cookies.

**Financial data:** Wallet transaction records. We do not store full card numbers; payments are processed by PCI-DSS-compliant third parties (Flutterwave / Paystack).`,
  },
  {
    title: "3. How We Use Your Data",
    content: `We process your data to:
- Provide appointment booking, queue management, telemedicine, and medical record services.
- Send appointment reminders and health notifications (with your consent).
- Improve platform performance and resolve technical issues.
- Comply with Nigerian health regulations and NDPR obligations.
- Respond to support requests.

We do **not** sell your personal or health data to third parties.`,
  },
  {
    title: "4. Legal Basis for Processing (NDPR)",
    content: `Under Nigeria's National Data Protection Regulation 2019 (NDPR) and the Nigeria Data Protection Act 2023, we process your data on the following grounds:
- **Consent** — for marketing communications and optional health data sharing.
- **Contract performance** — to deliver the services you requested.
- **Legal obligation** — to comply with healthcare and tax laws.
- **Legitimate interests** — for fraud prevention and platform security.`,
  },
  {
    title: "5. Data Sharing",
    content: `We share your data only with:
- **Healthcare providers** (hospitals, doctors, labs) directly involved in your care — and only to the extent necessary.
- **Payment processors** (Flutterwave, Paystack) for billing.
- **Cloud infrastructure providers** (AWS eu-west-2 / Cape Town region) under data processing agreements.
- **Regulatory authorities** when required by Nigerian law.

All third parties are contractually bound to process your data solely for specified purposes and to maintain appropriate security.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain personal data for as long as your account is active or as required by law. Medical records are retained for a minimum of 6 years in accordance with Nigerian healthcare regulations. You may request deletion of non-medical account data at any time (see Section 8).`,
  },
  {
    title: "7. Cookies",
    content: `We use essential cookies to keep you logged in and remember your preferences, and analytics cookies (anonymised) to understand how the platform is used. You can disable non-essential cookies in your browser settings without affecting core functionality.`,
  },
  {
    title: "8. Your Rights",
    content: `Under NDPR and NDPA 2023, you have the right to:
- **Access** a copy of the personal data we hold about you.
- **Correction** of inaccurate or incomplete data.
- **Erasure** ("right to be forgotten") for non-statutory data.
- **Portability** — receive your data in a structured, machine-readable format.
- **Objection** to processing based on legitimate interests.
- **Withdraw consent** at any time (without affecting prior lawful processing).

To exercise any right, email **privacy@rivheal.com**. We will respond within 30 days.`,
  },
  {
    title: "9. Security",
    content: `We protect your data using TLS encryption in transit, AES-256 encryption at rest, role-based access control, multi-factor authentication for staff, and regular third-party security audits. In the event of a data breach that poses a risk to you, we will notify the National Information Technology Development Agency (NITDA) and affected users within 72 hours.`,
  },
  {
    title: "10. Children",
    content: `Our services are not directed at children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with their data, contact privacy@rivheal.com and we will delete it promptly.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this policy to reflect changes in our services or legal requirements. We will notify you by email or in-app notification at least 14 days before material changes take effect. Continued use of our services after the effective date constitutes acceptance.`,
  },
  {
    title: "12. Contact & Complaints",
    content: `Data Protection Officer: privacy@rivheal.com
RivHeal Technology Limited, Lagos, Nigeria.

If you are unsatisfied with our response, you may lodge a complaint with NITDA (National Information Technology Development Agency) at nitda.gov.ng.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-10">
            <h1 className="text-4xl font-display font-bold text-foreground mb-3">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: 1 January 2026 · NDPR & NDPA 2023 compliant</p>
          </div>

          <div className="bg-gradient-card border border-primary/10 rounded-2xl shadow-soft divide-y divide-border">
            {sections.map((section) => (
              <div key={section.title} className="px-8 py-7">
                <h2 className="text-lg font-display font-semibold text-foreground mb-3">{section.title}</h2>
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content.split("**").map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="text-foreground font-semibold">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
