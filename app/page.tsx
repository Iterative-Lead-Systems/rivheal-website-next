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
  title: "RivHeal | Healthcare Technology and Infrastructure",
  description:
    "Discover RivHeal, a healthcare technology platform building connected experiences for healthcare providers and patients.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RivHeal | Healthcare Technology and Infrastructure",
    description:
      "Discover RivHeal, a healthcare technology platform building connected experiences for healthcare providers and patients.",
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
