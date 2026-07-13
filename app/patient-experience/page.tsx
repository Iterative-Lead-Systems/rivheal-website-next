"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, FileText, Users, Stethoscope, Activity, Share2, CheckCircle, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Clock,
    title: "Smart Queue Management",
    description: "See real-time wait times and book appointments strategically. Know exactly when to go so you spend less time waiting in hospitals.",
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
    description: "Access quality healthcare from the comfort of your home. Connect with doctors via secure video consultations.",
  },
  {
    icon: Activity,
    title: "Health Insights",
    description: "Get symptom guidance and personalized health insights in your language. Understand your health better and when to seek professional care.",
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

          {/* Mobile App Showcase */}
          <motion.div
            className="bg-gradient-card border border-primary/10 rounded-2xl p-8 md:p-12 mb-16 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground">
                Experience It on Your Phone
              </h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Download the RivHeal app to start managing your healthcare in real-time. Available on iOS and Android.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Book Appointments", desc: "Find the best time to visit your healthcare provider" },
                { title: "Track Wait Times", desc: "Know exactly how long before you'll be seen" },
                { title: "Access Medical Records", desc: "Your health history across all hospitals" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-24 h-40 rounded-xl bg-muted mx-auto mb-4 flex items-center justify-center">
                    <div className="text-sm text-muted-foreground">
                      App screenshot
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-8">
              Replace screenshot placeholders with mobile app images. See <code>/public/images/MOBILE_APP_IMAGES.md</code> for details.
            </p>
          </motion.div>

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
              Be among the first Nigerians to experience a smarter, faster healthcare system. Join our waitlist for early access.
            </p>
            <Link
              href="/home-care-waitlist"
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
