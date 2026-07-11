"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, FileText, Users, Stethoscope, Activity, Share2, CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Clock,
    title: "Smart Queue Management",
    description: "See real-time wait times and book appointments at the best times. AI predicts queues with 85%+ accuracy so you're never caught off guard.",
  },
  {
    icon: FileText,
    title: "Portable Medical Records",
    description: "Your health data follows you everywhere. Access your medical history across all hospitals and clinics in one secure place.",
  },
  {
    icon: Share2,
    title: "Improved Healthcare Access",
    description: "Smart appointment booking connects you with the right healthcare provider at the right time, removing barriers to care.",
  },
  {
    icon: Users,
    title: "Active Participant in Your Care",
    description: "Take control of your health journey. Track your care, understand your treatments, and make informed decisions about your health.",
  },
  {
    icon: Stethoscope,
    title: "Tele-Consultation",
    description: "Access quality healthcare from the comfort of your home. Connect with doctors via secure video consultations available 24/7.",
  },
  {
    icon: Activity,
    title: "AI Health Assistant",
    description: "Get symptom guidance and health insights in your language. Our AI assistant helps you understand your health and when to seek care.",
  },
];

export default function PatientExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Patient Experience
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Healthcare on Your Terms
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              RivHeal puts you at the center of your healthcare journey. Access quality care whenever and wherever you need it.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-gradient-card border border-primary/10 rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Why Choose Section */}
          <motion.div
            className="bg-gradient-card border border-primary/10 rounded-2xl p-8 md:p-12 mb-16 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              Why Patients Love RivHeal
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "No more wasted time in waiting rooms",
                "Your health data, secured and private",
                "Faster access to quality healthcare",
                "Available 24/7 for your needs",
                "Made for Nigerian patients",
                "Empower yourself with health knowledge",
              ].map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-primary rounded-2xl p-12 text-center shadow-elevated"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Transform Your Healthcare?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Join thousands of Nigerians who are taking control of their health with RivHeal.
            </p>
            <Link
              href="#join-waitlist"
              className="inline-block px-8 py-4 rounded-xl text-base font-semibold bg-gradient-warm text-primary-foreground hover:opacity-90 transition-opacity shadow-elevated"
            >
              Join the Waitlist Today →
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
