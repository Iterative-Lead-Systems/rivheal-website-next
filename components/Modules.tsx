"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const modules = [
  {
    title: "Patient Experience",
    description:
      "Appointment management, real-time queue tracking, health guidance, and digital medical records — all in one app.",
    image: "/images/solutions/patient-experience.png",
    alt: "Patient using RivHeal mobile app to book an appointment",
    accent: "bg-primary/10 text-primary",
    href: "/patient-experience",
    isClickable: true,
  },
  {
    title: "Hospital Admin",
    description:
      "Operational dashboards, resource management, and analytics for healthcare facilities.",
    image: "/images/solutions/hospital-admin.png",
    alt: "Hospital administrator reviewing RivHeal dashboard on a desktop",
    accent: "bg-accent/10 text-accent",
    href: "/request-demo",
    isClickable: true,
  },
  {
    title: "Emergency Network",
    description:
      "ER capacity tracking and smart ambulance routing for critical care situations across Nigeria.",
    image: "/images/solutions/emergency-network.png",
    alt: "Emergency response team coordinating via RivHeal emergency network",
    accent: "bg-secondary/10 text-secondary",
    isClickable: false,
    comingSoon: true,
  },
  {
    title: "Home Care",
    description:
      "On-demand healthcare at your doorstep with verified practitioners available 24/7.",
    image: "/images/solutions/home-care.png",
    alt: "Home care nurse visiting a patient at home through RivHeal platform",
    accent: "bg-primary/10 text-primary",
    href: "/home-care-waitlist",
    isClickable: true,
  },
];

function SolutionImage({ src, alt, accent }: { src: string; alt: string; accent: string }) {
  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        // Shows a styled placeholder while the real image loads or if it's missing
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      {/* Fallback shown under the image (visible when image fails/missing) */}
      <div className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${accent} -z-0`}>
        {/* TODO: Replace with a real image — see public/images/solutions/IMAGES_NEEDED.md */}
        {/* Image coming soon */}
      </div>
    </div>
  );
}

export default function Modules() {
  return (
    <section id="modules" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A complete ecosystem connecting patients with the care they need. For patients, hospitals, and emergency services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const cardContent = (
              <>
                <SolutionImage src={module.image} alt={module.alt} accent={module.accent} />
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {module.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
                {module.comingSoon && (
                  <div className="mt-4 inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                    Coming Soon
                  </div>
                )}
              </>
            );

            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-card border rounded-2xl p-6 shadow-soft transition-all group ${
                  module.isClickable
                    ? "border-primary/10 hover:border-primary/30 hover:shadow-elevated cursor-pointer"
                    : "border-primary/10 opacity-60 cursor-not-allowed"
                }`}
              >
                {module.isClickable ? (
                  <Link href={module.href!} className="block h-full">
                    {cardContent}
                  </Link>
                ) : (
                  <div className="h-full">{cardContent}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
