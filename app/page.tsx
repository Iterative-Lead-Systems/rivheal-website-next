import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Modules from "@/components/Modules";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
