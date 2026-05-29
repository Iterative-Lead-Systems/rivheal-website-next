"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, FileText, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Book appointments in under 3 minutes",
    accent: "primary",
  },
  {
    icon: Clock,
    title: "Live Queue",
    description: "Real-time wait time predictions",
    accent: "secondary",
  },
  {
    icon: FileText,
    title: "Digital Records",
    description: "Your health data, your control",
    accent: "secondary",
  },
  {
    icon: Users,
    title: "Family Health",
    description: "Manage your entire family's care",
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
            Healthcare Made{" "}
            <span className="text-secondary">Simple</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every feature designed around your needs.
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
