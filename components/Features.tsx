"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, FileText, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "AI-Powered Booking",
    description: "Smart appointments with AI-predicted best times for you",
    accent: "primary",
  },
  {
    icon: Clock,
    title: "Live Queue Intelligence",
    description: "AI predicts wait times with 85%+ accuracy",
    accent: "secondary",
  },
  {
    icon: FileText,
    title: "Portable Medical Records",
    description: "Your health data, your control, across all hospitals",
    accent: "secondary",
  },
  {
    icon: Users,
    title: "AI Health Assistant",
    description: "24/7 symptom checker in your language",
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
            AI That{" "}
            <span className="text-secondary">Understands You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every feature powered by AI designed around your healthcare needs.
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
