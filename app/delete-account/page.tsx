import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccountDeletionForm from "./AccountDeletionForm";

export const metadata: Metadata = {
  title: "Request Account Deletion",
  description:
    "Request deletion of your RivHeal account and associated personal data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="px-4 pb-20 pt-28">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Delete your RivHeal account
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Submit this form using the email address associated with your
              RivHeal patient account. You do not need access to the mobile app
              to make a request.
            </p>
          </div>

          <div className="mb-8 space-y-4 rounded-2xl border border-primary/10 bg-background/70 p-6 text-sm leading-relaxed text-muted-foreground">
            <h2 className="font-display text-lg font-semibold text-foreground">
              What happens after you submit
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                We email you a request reference and verify your identity.
              </li>
              <li>
                We delete or anonymise your account, contact details,
                preferences, device tokens, and other data that is not required
                to be retained.
              </li>
              <li>
                Medical records, transaction records, security logs, and legal
                records may be retained for the period required by healthcare,
                financial, fraud-prevention, or other applicable laws. Retained
                data is restricted and is no longer used for ordinary account
                services or marketing.
              </li>
              <li>We respond to the request within 30 days.</li>
            </ol>
            <p>
              You can also request deletion by emailing{" "}
              <a
                className="font-medium text-primary underline"
                href="mailto:privacy@rivheal.com"
              >
                privacy@rivheal.com
              </a>{" "}
              from your account email.
            </p>
          </div>

          <AccountDeletionForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
