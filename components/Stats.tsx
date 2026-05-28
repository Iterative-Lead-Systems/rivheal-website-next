"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10M+", label: "Patient Interactions" },
  { value: "120M", label: "Hours Saved" },
  { value: "50%", label: "Faster Emergency Care" },
  { value: "500K+", label: "Underserved Reached" },
];

export default function Stats() {
  return (
    <section id="impact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our 5-Year Vision
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Aligned with SDG 3: Good Health &amp; Well-being
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
