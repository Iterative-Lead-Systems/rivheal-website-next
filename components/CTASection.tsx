"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-primary border-0 overflow-hidden relative rounded-2xl shadow-elevated"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(0_0%_100%/0.1)_0%,_transparent_50%)]" />
          <div className="p-12 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Be Among the First
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Join our early access waitlist to be notified when RivHeal launches in your area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/home-care-waitlist"
                className="px-8 py-4 rounded-xl text-base font-semibold bg-gradient-warm text-primary-foreground hover:opacity-90 transition-opacity shadow-elevated"
              >
                Join the Waitlist
              </Link>
              <Link
                href="/request-demo"
                className="px-8 py-4 rounded-xl text-base font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-colors"
              >
                For Healthcare Providers
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
