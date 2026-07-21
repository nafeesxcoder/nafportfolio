import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string, ip?: string) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    },
  );
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: Request) {
  try {
    const { name, mobile, email, service, budget, message, turnstileToken } =
      await req.json();

    // 1. Bot check
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Captcha verification required" },
        { status: 400 },
      );
    }
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const isHuman = await verifyTurnstile(turnstileToken, ip);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 },
      );
    }

    // 2. Field validation
    if (!name || !mobile || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 3. Email bhejo - ✅ Fixed with correct email and phone
    const { error } = await resend.emails.send({
      from: "Unique Web Layer <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "info@uniqueweblayer.com",
      replyTo: email,
      subject: `New Quote Request — ${service} (${name})`,
      html: `
        <div style="font-family:system-ui,Arial,sans-serif;max-width:600px;margin:auto;background:#0f0f17;border-radius:12px;overflow:hidden;border:1px solid #2a2a3a">
          <div style="background:linear-gradient(135deg,#7c3aed,#db2777);padding:24px 28px">
            <h2 style="margin:0;color:#fff;font-size:20px">📩 New Lead — Quote Request</h2>
            <p style="margin:4px 0 0;color:#f3e8ff;font-size:13px">Unique Web Layer</p>
          </div>
          <div style="padding:24px 28px;color:#e5e7eb;font-size:14px;line-height:1.7">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:6px 0;color:#9ca3af;width:130px">Name</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:6px 0;color:#9ca3af">Mobile</td><td style="padding:6px 0;font-weight:600">${mobile}</td></tr>
              <tr><td style="padding:6px 0;color:#9ca3af">Email</td><td style="padding:6px 0;font-weight:600">${email}</td></tr>
              <tr><td style="padding:6px 0;color:#9ca3af">Service</td><td style="padding:6px 0;font-weight:600">${service}</td></tr>
              <tr><td style="padding:6px 0;color:#9ca3af">Budget</td><td style="padding:6px 0;font-weight:600">${budget || "Not specified"}</td></tr>
            </table>
            <div style="margin-top:16px;padding:14px 16px;background:#1a1a26;border-left:3px solid #7c3aed;border-radius:8px">
              <p style="margin:0 0 4px;color:#9ca3af;font-size:12px">Message</p>
              <p style="margin:0;white-space:pre-wrap">${message}</p>
            </div>
            <div style="margin-top:20px;padding:12px 16px;background:#1a1a26;border-radius:8px;border:1px solid #2a2a3a">
              <p style="margin:0;color:#9ca3af;font-size:12px">📞 <strong style="color:#e5e7eb">+91 74092-33994</strong></p>
              <p style="margin:4px 0 0;color:#9ca3af;font-size:12px">✉️ <strong style="color:#e5e7eb">info@uniqueweblayer.com</strong></p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}