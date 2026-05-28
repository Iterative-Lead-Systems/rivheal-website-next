import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing use of the RivHeal platform and website.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the RivHeal website at rivheal.com ("Site") or any RivHeal service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use our Site or Services.

These Terms constitute a binding agreement between you and RivHeal Technology Limited, a company incorporated in Nigeria ("RivHeal", "we", "us").`,
  },
  {
    title: "2. Description of Services",
    content: `RivHeal provides a digital health-management platform that includes:
- Patient appointment booking and queue management
- Digital medical records management
- Telemedicine video consultations
- Emergency network and ambulance coordination
- Homecare practitioner booking
- Hospital administration and EMR tools

The marketing website at rivheal.com provides information about our services. Actual service delivery occurs through licensed hospital and clinic deployments or the RivHeal patient mobile application.`,
  },
  {
    title: "3. Eligibility",
    content: `You must be at least 18 years old to use our Services or agree to these Terms on behalf of a minor. Healthcare providers and organisations using our EMR platform must be duly licensed under applicable Nigerian law.`,
  },
  {
    title: "4. Accounts",
    content: `Healthcare provider accounts are created by RivHeal following a successful demo and onboarding process. You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. Notify us immediately at security@rivheal.com if you suspect unauthorised access.`,
  },
  {
    title: "5. Acceptable Use",
    content: `You agree not to:
- Use the Services for any unlawful purpose or in violation of Nigerian law.
- Attempt to gain unauthorised access to any part of the platform.
- Transmit malware, viruses, or any harmful code.
- Scrape, copy, or redistribute platform content without written permission.
- Impersonate any person, healthcare provider, or RivHeal employee.
- Use the Services to store or transmit content that is defamatory, offensive, or violates third-party rights.`,
  },
  {
    title: "6. Healthcare Disclaimer",
    content: `**RivHeal is a technology platform, not a healthcare provider.** We facilitate connections between patients and licensed healthcare professionals but do not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions.

In an emergency, call Nigeria's emergency number (112) or go to your nearest hospital immediately — do not rely solely on the RivHeal platform.`,
  },
  {
    title: "7. Fees and Payment",
    content: `Pricing for hospital and clinic subscriptions is agreed during the onboarding process. Patient-side services may involve consultation fees set by the healthcare provider. All fees are quoted and charged in Nigerian Naira (NGN). Payments are processed by Flutterwave or Paystack under their respective terms.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content on this Site — including text, graphics, logos, software, and the RivHeal platform — is owned by or licensed to RivHeal Technology Limited and is protected by Nigerian and international intellectual property law. You may not reproduce or distribute our content without prior written consent.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `To the maximum extent permitted by Nigerian law, RivHeal shall not be liable for:
- Indirect, incidental, or consequential damages arising from your use of our Services.
- Loss of data, revenue, or profits.
- Any medical outcome resulting from decisions made based on information on the platform.

Our total aggregate liability shall not exceed the fees paid by you to RivHeal in the three months preceding the event giving rise to the claim.`,
  },
  {
    title: "10. Indemnification",
    content: `You agree to indemnify and hold harmless RivHeal and its officers, employees, and agents from and against any claims, damages, or expenses arising from your violation of these Terms or misuse of the Services.`,
  },
  {
    title: "11. Privacy",
    content: `Your use of our Services is also governed by our Privacy Policy at rivheal.com/privacy, which is incorporated into these Terms by reference.`,
  },
  {
    title: "12. Termination",
    content: `We may suspend or terminate your access to the Services immediately, without notice, if you breach these Terms. Upon termination, your right to use the Services ceases immediately. Provisions that by their nature should survive termination (including Sections 8, 9, 10) shall do so.`,
  },
  {
    title: "13. Governing Law",
    content: `These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute shall be submitted to the exclusive jurisdiction of the courts of Lagos State, Nigeria, unless otherwise required by law.`,
  },
  {
    title: "14. Changes to These Terms",
    content: `We may revise these Terms from time to time. We will provide at least 14 days' notice of material changes via email or in-app notification. Continued use after the effective date constitutes acceptance.`,
  },
  {
    title: "15. Contact",
    content: `RivHeal Technology Limited
Lagos, Nigeria
legal@rivheal.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-10">
            <h1 className="text-4xl font-display font-bold text-foreground mb-3">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: 1 January 2026 · Governed by Nigerian law</p>
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
