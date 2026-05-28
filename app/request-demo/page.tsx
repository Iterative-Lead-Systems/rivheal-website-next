"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Building2, Users, Stethoscope } from "lucide-react";

const schema = z.object({
  hospitalName: z.string().min(2, "Hospital/clinic name is required"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  staffCount: z.string().min(1, "Please select an option"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const benefits = [
  "Live product walkthrough tailored to your facility",
  "Pricing personalised to your team size",
  "Implementation & onboarding roadmap",
  "No credit card or commitment required",
];

const staffOptions = [
  "1–10 (Small clinic)",
  "11–50 (Mid-size clinic)",
  "51–200 (Hospital)",
  "201–500 (Large hospital)",
  "500+ (Group / Teaching hospital)",
];

export default function RequestDemoPage() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      toast.success("Demo request received! Our team will reach you within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try emailing hello@rivheal.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              For Healthcare Providers
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Request a Free Demo
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              See how RivHeal can transform your hospital or clinic. Our team will walk you through a personalised demonstration.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Benefits sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground shadow-elevated">
                <h2 className="font-display font-semibold text-lg mb-5">What you get</h2>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-primary-foreground/80" />
                      <span className="text-primary-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Building2, label: "12+\nHospitals" },
                  { icon: Users, label: "50K+\nPatients" },
                  { icon: Stethoscope, label: "200+\nDoctors" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="bg-gradient-card border border-primary/10 rounded-xl p-3 text-center shadow-soft"
                  >
                    <Icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                    <p className="text-xs font-semibold text-foreground whitespace-pre-line">{label}</p>
                  </div>
                ))}
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-gradient-card border border-primary/20 rounded-2xl p-12 text-center shadow-soft">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    Request Received!
                  </h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    A member of our team will contact you within <strong>24 hours</strong> to schedule your personalised demo.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-gradient-card border border-primary/10 rounded-2xl p-8 shadow-soft space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Hospital / Clinic Name <span className="text-secondary">*</span>
                      </label>
                      <input
                        {...register("hospitalName")}
                        placeholder="Lagos Island General Hospital"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                      {errors.hospitalName && <p className="mt-1 text-xs text-secondary">{errors.hospitalName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Contact Person <span className="text-secondary">*</span>
                      </label>
                      <input
                        {...register("contactPerson")}
                        placeholder="Dr. Emeka Nwosu"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                      {errors.contactPerson && <p className="mt-1 text-xs text-secondary">{errors.contactPerson.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Work Email <span className="text-secondary">*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="emeka@hospital.ng"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                      {errors.email && <p className="mt-1 text-xs text-secondary">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone Number <span className="text-secondary">*</span>
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+234 801 000 0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-secondary">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Number of Doctors / Staff <span className="text-secondary">*</span>
                      </label>
                      <select
                        {...register("staffCount")}
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                        defaultValue=""
                      >
                        <option value="" disabled>Select range</option>
                        {staffOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      {errors.staffCount && <p className="mt-1 text-xs text-secondary">{errors.staffCount.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Anything specific you'd like to see?{" "}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="e.g. OPD queue management, lab integration, mobile patient app…"
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-soft disabled:opacity-60"
                  >
                    {submitting ? "Submitting…" : "Book My Free Demo →"}
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    No commitment. No credit card. A real person will follow up within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
