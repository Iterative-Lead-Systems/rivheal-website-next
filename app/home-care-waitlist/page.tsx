"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Heart, Clock, Users, Stethoscope } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  userType: z.enum(["patient", "medical_practitioner"], {
    errorMap: () => ({ message: "Please select a user type" }),
  }),
  reason: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const benefits = [
  "Early access to our platform launch",
  "Exclusive beta features and updates",
  "Direct input into product development",
  "Special pricing for early adopters",
];

const painPoints = [
  {
    icon: Clock,
    title: "Tired of waiting",
    description: "Hours spent in waiting rooms could be spent with loved ones",
  },
  {
    icon: Heart,
    title: "Care on your terms",
    description: "Receive quality healthcare at home when you need it most",
  },
  {
    icon: Users,
    title: "Seamless coordination",
    description: "Medical practitioners and patients in perfect sync",
  },
];

export default function HomeCareWaitlistPage() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const userType = watch("userType");

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/website/home-care-waitlist`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      toast.success("Welcome to the waitlist! Check your email for updates.");
    } catch {
      toast.error("Something went wrong. Please try emailing hello@rivheal.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Healthcare at Home, <span className="text-secondary">Without the Wait</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Say goodbye to endless waiting rooms. RivHeal Home Care brings quality healthcare directly to your doorstep—connecting patients with medical practitioners who care.
            </p>
          </div>

          {/* Problem Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {painPoints.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-gradient-card border border-primary/10 rounded-2xl p-6 text-center shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-10 mb-16">
            {/* Benefits sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 rounded-2xl p-8 text-white shadow-elevated border border-secondary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl">What You&apos;ll Get</h3>
                </div>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <span className="text-sm font-medium leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-gradient-card border border-secondary/20 rounded-2xl p-12 text-center shadow-soft">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    You&apos;re In!
                  </h3>
                  <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                    Thank you for joining the RivHeal Home Care waitlist. We&apos;ll email you with exclusive updates and launch details.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                    <Heart className="w-4 h-4" />
                    Watch your inbox
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-gradient-card border border-primary/10 rounded-2xl p-8 shadow-soft space-y-5"
                >
                  {/* User Type Selection */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-4">
                      Who are you? <span className="text-secondary">*</span>
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        {
                          value: "patient" as const,
                          label: "Patient",
                          icon: Heart,
                          description: "I need healthcare at home",
                        },
                        {
                          value: "medical_practitioner" as const,
                          label: "Medical Practitioner",
                          icon: Stethoscope,
                          description: "I want to provide care",
                        },
                      ].map(({ value, label, icon: Icon, description }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setValue("userType", value)}
                          className={`p-5 rounded-xl border-2 transition text-left font-medium cursor-pointer ${
                            userType === value
                              ? "border-primary bg-primary/10 shadow-md"
                              : "border-input bg-background hover:border-primary hover:bg-primary/5"
                          }`}
                        >
                          <Icon className={`w-6 h-6 mb-3 ${userType === value ? "text-primary" : "text-muted-foreground"}`} />
                          <p className="text-foreground font-semibold text-sm leading-tight">{label}</p>
                          <p className="text-xs text-muted-foreground mt-2">{description}</p>
                        </button>
                      ))}
                    </div>
                    <input
                      type="hidden"
                      {...register("userType")}
                    />
                    {errors.userType && (
                      <p className="mt-3 text-xs text-secondary font-medium">{errors.userType.message}</p>
                    )}
                  </div>

                  {/* Form Fields */}
                  <div className="grid sm:grid-cols-2 gap-5 pt-3">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name <span className="text-secondary">*</span>
                      </label>
                      <input
                        {...register("fullName")}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-secondary">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email <span className="text-secondary">*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-secondary">{errors.email.message}</p>
                      )}
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
                      {errors.phone && (
                        <p className="mt-1 text-xs text-secondary">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Tell us why you&apos;re interested{" "}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <textarea
                      {...register("reason")}
                      rows={3}
                      placeholder={
                        userType === "patient"
                          ? "e.g. I need home care services for elderly parent, post-surgery recovery…"
                          : "e.g. I want to provide home care services, I&apos;m interested in this platform…"
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || !userType}
                    className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all shadow-soft ${
                      userType
                        ? "bg-gradient-primary text-primary-foreground hover:opacity-90 cursor-pointer"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    {submitting ? "Joining…" : "Join the Waitlist →"}
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    We&apos;ll only email you with product updates—no spam, ever.
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
