export const runtime = 'edge';
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().optional(),
  message: z.string().min(10),
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
      await transporter.sendMail({
        from,
        to: adminEmail,
        replyTo: data.email,
        subject: `[Contact] ${data.name}${data.organization ? ` — ${data.organization}` : ""}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Organisation: ${data.organization ?? "—"}`,
          "",
          `Message:\n${data.message}`,
        ].join("\n"),
      });
    } else {
      console.log("[CONTACT FORM]", JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data", issues: err.issues }, { status: 422 });
    }
    console.error("[/api/contact]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
