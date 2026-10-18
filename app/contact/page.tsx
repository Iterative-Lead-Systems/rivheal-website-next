import type { Metadata } from "next";
import ContentPage from "@/domain/contact-content/ContactContent";

export const metadata: Metadata = {
  title: { absolute: "Contact RivHeal | Get in Touch" },
  description:
    "Contact RivHeal to learn more about our healthcare technology, discuss your needs, or reach our team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContentPage />;
}
