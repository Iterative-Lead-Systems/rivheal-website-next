"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, FileText, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Appointment Booking",
    description: "Book appointments with available slots across hospitals. Get reminders and reschedule easily from your phone.",
    accent: "primary",
  },
  {
    icon: Clock,
    title: "Real-Time Queue Tracking",
    description: "See exactly how long before you'll be seen. Check in online and skip the front desk lines.",
    accent: "secondary",
  },
  {
    icon: FileText,
    title: "Portable Medical Records",
    description: "Access lab results, prescriptions, and medical history from any hospital or clinic in Nigeria.",
    accent: "secondary",
  },
  {
    icon: Users,
    title: "Health Guidance & Symptom Checker",
    description: "Understand your symptoms before you visit. Get guidance on which department to visit and how urgent your care is.",
    accent: "primary",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Built for Nigerian
            <span className="block text-secondary">Patients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Features designed around real healthcare challenges. Smarter. Faster. Simpler.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-soft ${
                  feature.accent === "secondary"
                    ? "bg-gradient-warm"
                    : "bg-gradient-primary"
                }`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
