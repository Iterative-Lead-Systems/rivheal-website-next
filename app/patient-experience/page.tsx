"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, FileText, Users, Stethoscope, Activity, Share2, CheckCircle, Smartphone, Calendar, AlertCircle, BookOpen, MessageSquare, Video, Heart } from "lucide-react";
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

          {/* Mobile App Showcase - World Class */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-12 justify-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center">
                See It in Action
              </h2>
            </div>

            {/* Screenshots Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  image: "/images/mobile-app/home_page.png",
                  title: "Dashboard",
                  description: "Quick access to all your healthcare tools in one place",
                },
                {
                  image: "/images/mobile-app/symptom-checker.png",
                  title: "Symptom Checker",
                  description: "Understand your symptoms and get guided to the right care",
                },
                {
                  image: "/images/mobile-app/chat-assistant.png",
                  title: "AI Health Assistant",
                  description: "Get answers to your health questions 24/7",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-card border border-primary/10 shadow-soft hover:shadow-elevated transition-all duration-300">
                    {/* Phone Frame */}
                    <div className="aspect-[9/19] overflow-hidden bg-black rounded-[40px] border-8 border-gray-900 relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    {/* Glass overlay on hover */}
                    <div className="absolute inset-0 rounded-[40px] border-8 border-gray-900 pointer-events-none group-hover:bg-black/5 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mt-5 mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Features Grid Below Screenshots */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
                What You Can Do
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { Icon: Calendar, title: "Book Appointments", desc: "In seconds, with real-time availability" },
                  { Icon: Clock, title: "Track Wait Times", desc: "Know exactly when to go" },
                  { Icon: FileText, title: "Medical Records", desc: "All your health data in one place" },
                  { Icon: AlertCircle, title: "Symptom Checker", desc: "Understand your health concerns" },
                  { Icon: Video, title: "Telemedicine", desc: "Connect with doctors remotely" },
                  { Icon: Heart, title: "Health Insights", desc: "Personalized wellness guidance" },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <feature.Icon size={20} className="text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CTA - Pre-launch */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Coming Soon
              </div>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                RivHeal is launching soon on iOS and Android. Join our waitlist to get early access and be notified when we launch.
              </p>
              <Link
                href="/home-care-waitlist"
                className="inline-block px-8 py-3 rounded-xl font-semibold bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Join Early Access Waitlist
              </Link>
            </div>
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
                "Book appointments and skip waiting in lines",
                "Check real-time wait times before you go",
                "Access medical records from all hospitals in one place",
                "Get symptom guidance instantly on your phone",
                "Connect with doctors for home consultations",
                "Track medication and wellness goals",
                "Emergency access available 24/7",
                "Your data is encrypted and private",
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
