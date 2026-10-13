import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Modules from "@/components/Modules";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RivHeal | Electronic Medical Records and Patient Management",
  description:
    "RivHeal helps healthcare facilities manage patient records, consultations, billing, pharmacy, laboratory, radiology and other healthcare workflows in one platform.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RivHeal | Electronic Medical Records and Patient Management",
    description:
      "RivHeal helps healthcare facilities manage patient records, consultations, billing, pharmacy, laboratory, radiology and other healthcare workflows in one platform.",
    url: "/",
    siteName: "RivHeal",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <Hero />
      <TrustBar />
      <Modules />
      <Features />
      <Stats />
      <CTASection />
      <Footer />
    </div>
  );
}
