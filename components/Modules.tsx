"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const modules = [
  {
    title: "Patient Portal",
    description:
      "An online patient portal for appointment booking, real-time queue tracking, health guidance and access to digital medical records, all in one app.",
    badge: "AI-Powered Insights",
    image: "/images/solutions/patient-experience.png",
    alt: "Patient using the RivHeal online patient portal to book an appointment",
    accent: "bg-primary/10 text-primary",
    href: "/patient-portal",
    isClickable: true,
  },
  {
    title: "Hospital Admin",
    description:
      "Operational dashboards, resource management and analytics for healthcare facilities, built on top of your electronic medical records.",
    badge: "Smart Analytics",
    image: "/images/solutions/hospital-admin.png",
    alt: "Hospital administrator reviewing the RivHeal healthcare software dashboard on a desktop",
    accent: "bg-accent/10 text-accent",
    href: "/request-demo",
    isClickable: true,
  },
  {
    title: "Emergency Network",
    description:
      "ER capacity tracking and smart ambulance routing for critical care situations across Nigeria.",
    badge: "Predictive Intelligence",
    image: "/images/solutions/emergency-network.png",
    alt: "Emergency response team coordinating through the RivHeal emergency network",
    accent: "bg-secondary/10 text-secondary",
    isClickable: false,
    comingSoon: true,
  },
  {
    title: "Home Care",
    description:
      "On-demand healthcare at your doorstep with verified practitioners available 24/7.",
    image: "/images/solutions/home-care.png",
    alt: "Home care nurse visiting a patient at home through the RivHeal platform",
    accent: "bg-primary/10 text-primary",
    href: "/request-demo",
    isClickable: true,
  },
];

// Set `live: true` only for pages that exist, so you never link to a 404.
const emrFeatures = [
  {
    id: "emr",
    title: "EMR Software",
    description:
      "Manage patient records, consultations and clinical workflows with an electronic medical records system built for healthcare facilities.",
    href: "/emr",
    live: true,
  },
  {
    id: "patient-management",
    title: "Patient Management Software",
    description:
      "Manage patient registration, records and information securely with a patient management system your whole team can use.",
    href: "/features/patient-management",
    live: true,
  },
  {
    id: "consultation-management",
    title: "Consultation Management",
    description:
      "Record and manage patient consultations digitally, with clinical consultation records that are easy to find and share.",
    href: "/features/consultation-management",
    live: false,
  },
  {
    id: "pharmacy",
    title: "Pharmacy Management Software",
    description:
      "Manage prescriptions, medicines, pharmacy inventory and dispensing workflows in one hospital pharmacy system.",
    href: "/features/pharmacy",
    live: false,
  },
  {
    id: "laboratory",
    title: "Laboratory Management Software",
    description:
      "Manage laboratory requests, tests and results digitally with a lab management system connected to the patient record.",
    href: "/features/laboratory",
    live: false,
  },
  {
    id: "radiology",
    title: "Radiology Management Software",
    description:
      "Manage radiology requests, examinations and results with a digital radiology workflow and medical imaging management.",
    href: "/features/radiology",
    live: false,
  },
  {
    id: "dental",
    title: "Dental Management Software",
    description:
      "Manage dental patient records, consultations, treatment plans and odontogram charting for your dental clinic.",
    href: "/features/dental",
    live: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "RivHeal healthcare software modules",
  itemListElement: emrFeatures.map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: f.title,
      description: f.description,
      provider: {
        "@type": "Organization",
        name: "RivHeal",
        url: "https://rivheal.com",
      },
      areaServed: { "@type": "Country", name: "Nigeria" },
    },
  })),
};

function SolutionImage({
  src,
  alt,
  accent,
}: {
  src: string;
  alt: string;
  accent: string;
}) {
  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${accent} -z-0`}
      />
    </div>
  );
}

export default function Modules() {
  return (
    <section id="modules" className="py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Healthcare Software Solutions for Hospitals, Clinics and Patients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            RivHeal is EMR software that connects patients with the care they
            need. Manage electronic medical records, patient management,
            billing, pharmacy, laboratory and radiology in one platform.
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const cardContent = (
              <>
                <SolutionImage
                  src={module.image}
                  alt={module.alt}
                  accent={module.accent}
                />
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-display font-semibold text-foreground flex-1">
                    {module.title}
                  </h3>
                  {module.badge && (
                    <span className="inline-flex items-center px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold whitespace-nowrap">
                      ✨ {module.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {module.description}
                </p>
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

        {/* EMR features (text-only, keyword-rich) */}
        <div id="emr-features" className="mt-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              One EMR System for Every Healthcare Workflow
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From electronic health records to pharmacy, laboratory, radiology
              and dental, RivHeal gives your facility medical records management
              that works together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emrFeatures.map((f, index) => (
              <motion.div
                key={f.id}
                id={f.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-card border border-primary/10 rounded-2xl p-6 shadow-soft"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {f.description}
                </p>
                {f.live && (
                  <Link
                    href={f.href}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Learn more about {f.title.toLowerCase()} →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
