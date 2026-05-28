"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
      reset();
      toast.success("Message sent! We'll get back to you within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again or email hello@rivheal.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Page heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Questions, partnerships, or just a chat — our team in Lagos is ready.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-card border border-primary/10 rounded-2xl p-6 shadow-soft">
                <h2 className="font-display font-semibold text-foreground mb-5 text-lg">Contact Details</h2>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-muted-foreground mb-0.5">Email</p>
                      <a href="mailto:hello@rivheal.com" className="text-foreground hover:text-primary transition-colors font-medium">
                        hello@rivheal.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-muted-foreground mb-0.5">Phone</p>
                      <a href="tel:+2348000000000" className="text-foreground hover:text-primary transition-colors font-medium">
                        +234 800 000 0000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-muted-foreground mb-0.5">Location</p>
                      <span className="text-foreground font-medium">Lagos, Nigeria</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Looking to demo our EMR platform?</strong>{" "}
                  Use our{" "}
                  <a href="/request-demo" className="text-primary underline underline-offset-2 hover:opacity-80">
                    Request Demo
                  </a>{" "}
                  form for a faster response from our sales team.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-gradient-card border border-primary/20 rounded-2xl p-10 text-center shadow-soft">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">Message Received</h3>
                  <p className="text-muted-foreground mb-6">We&apos;ll respond within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium border border-primary/30 text-primary hover:bg-primary/5 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-gradient-card border border-primary/10 rounded-2xl p-8 shadow-soft space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name <span className="text-secondary">*</span>
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Amaka Okafor"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                      {errors.name && <p className="mt-1 text-xs text-secondary">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address <span className="text-secondary">*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="amaka@hospital.ng"
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      />
                      {errors.email && <p className="mt-1 text-xs text-secondary">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Organisation <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                      {...register("organization")}
                      placeholder="Lagos General Hospital"
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message <span className="text-secondary">*</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                    />
                    {errors.message && <p className="mt-1 text-xs text-secondary">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-soft disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
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
