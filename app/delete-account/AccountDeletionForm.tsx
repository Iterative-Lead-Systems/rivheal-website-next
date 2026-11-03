"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, ShieldAlert } from "lucide-react";

const schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(255),
  email: z
    .string()
    .trim()
    .email("Enter the email used for your RivHeal account"),
  reason: z
    .string()
    .trim()
    .max(2000, "Keep the reason under 2,000 characters")
    .optional(),
  acknowledgement: z.literal(true, {
    errorMap: () => ({
      message: "Confirm that you understand the deletion process",
    }),
  }),
});

type FormValues = z.infer<typeof schema>;

export default function AccountDeletionForm() {
  const [reference, setReference] = useState<string>();
  const [serverError, setServerError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setServerError(undefined);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/website/account-deletion-requests`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        },
      );
      if (!response.ok) throw new Error("Request failed");
      const result = (await response.json()) as { reference: string };
      setReference(result.reference);
    } catch {
      setServerError(
        "We could not submit your request right now. Please email privacy@rivheal.com from the address used for your RivHeal account.",
      );
    }
  };

  if (reference) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-gradient-card p-8 text-center shadow-soft">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h2 className="mb-2 font-display text-2xl font-semibold text-foreground">
          Request received
        </h2>
        <p className="mb-4 text-muted-foreground">
          We sent a confirmation to your account email. Our privacy team will
          verify your identity and respond within 30 days.
        </p>
        <p className="break-all rounded-xl bg-primary/5 px-4 py-3 text-sm text-foreground">
          Reference: <strong>{reference}</strong>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-primary/10 bg-gradient-card p-8 shadow-soft"
    >
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Full name
        </label>
        <input
          {...register("fullName")}
          autoComplete="name"
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-secondary">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          RivHeal account email
        </label>
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-secondary">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Reason{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          {...register("reason")}
          rows={4}
          className="w-full resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        {errors.reason && (
          <p className="mt-1 text-xs text-secondary">{errors.reason.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 rounded-xl bg-muted/40 p-4 text-sm text-muted-foreground">
        <input
          {...register("acknowledgement")}
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-input accent-primary"
        />
        <span>
          I understand RivHeal will verify my identity before processing this
          request and may retain medical, financial, fraud-prevention, or legal
          records where required by law.
        </span>
      </label>
      {errors.acknowledgement && (
        <p className="text-xs text-secondary">
          {errors.acknowledgement.message}
        </p>
      )}

      {serverError && (
        <div className="flex gap-3 rounded-xl border border-secondary/30 bg-secondary/5 p-4 text-sm text-foreground">
          <ShieldAlert className="h-5 w-5 shrink-0 text-secondary" />
          <p>{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting request…" : "Request account deletion"}
      </button>
    </form>
  );
}
