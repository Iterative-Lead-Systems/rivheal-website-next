export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  hospitalName: z.string().min(2),
  contactPerson: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  staffCount: z.string().min(1),
  message: z.string().optional(),
});

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.MAIL_HOST ?? "localhost",
    port: parseInt(process.env.MAIL_PORT ?? "1025", 10),
    secure: parseInt(process.env.MAIL_PORT ?? "1025", 10) === 465,
    auth: {
      user: process.env.MAIL_USER ?? "",
      pass: process.env.MAIL_PASSWORD ?? "",
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const adminEmail = process.env.ADMIN_EMAIL;
    const from = `${process.env.MAIL_FROM_NAME ?? "RivHeal"} <${process.env.MAIL_FROM ?? "noreply@rivheal.com"}>`;

    if (adminEmail && process.env.MAIL_HOST) {
      const transporter = createTransport();

      // Notify admin
      await transporter.sendMail({
        from,
        to: adminEmail,
        replyTo: data.email,
        subject: `[Demo Request] ${data.hospitalName} — ${data.staffCount}`,
        text: [
          `Hospital / Clinic: ${data.hospitalName}`,
          `Contact Person:    ${data.contactPerson}`,
          `Email:             ${data.email}`,
          `Phone:             ${data.phone}`,
          `Staff Count:       ${data.staffCount}`,
          "",
          `Notes:\n${data.message ?? "—"}`,
        ].join("\n"),
      });

      // Auto-reply to requester
      await transporter.sendMail({
        from,
        to: data.email,
        subject: "We received your demo request — RivHeal",
        text: [
          `Hi ${data.contactPerson},`,
          "",
          "Thank you for requesting a demo of RivHeal! A member of our team will reach out within 24 hours to schedule your personalised walkthrough.",
          "",
          "In the meantime, feel free to reply to this email with any questions.",
          "",
          "Warm regards,",
          "The RivHeal Team",
          "Lagos, Nigeria · hello@rivheal.com",
        ].join("\n"),
      });
    } else {
      console.log("[DEMO REQUEST]", JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data", issues: err.issues }, { status: 422 });
    }
    console.error("[/api/demo-request]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
