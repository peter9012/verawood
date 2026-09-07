import { Resend } from "resend";

const RECIPIENT = "verawoodus@gmail.com";
const SENDER = "Verawood Contact <contact@verawoodus.com>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      default: return "&#39;";
    }
  });
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function buildEmailHtml(fields: ContactPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#5b4d40;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;color:#2A201A;">${escapeHtml(value) || "—"}</td></tr>`;

  return `
    <div style="font-family:Georgia,serif;color:#2A201A;">
      <h2 style="font-weight:400;">New Contact Message</h2>
      <table cellpadding="0" cellspacing="0">
        ${row("Full Name", fields.name)}
        ${row("Email", fields.email)}
        ${row("Phone", fields.phone)}
        ${row("Enquiry Type", fields.topic)}
      </table>
      <p style="margin-top:16px;color:#5b4d40;">Message:</p>
      <p style="white-space:pre-wrap;">${escapeHtml(fields.message) || "—"}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const fields: ContactPayload = {
    name: asString(raw.name),
    email: asString(raw.email),
    phone: asString(raw.phone),
    topic: asString(raw.topic),
    message: asString(raw.message),
  };

  if (!fields.name) {
    return Response.json({ error: "Name is required." }, { status: 400 });
  }
  if (!fields.email || !EMAIL_RE.test(fields.email)) {
    return Response.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!fields.message) {
    return Response.json({ error: "Message is required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return Response.json({ error: "Unable to send message right now." }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: SENDER,
      to: RECIPIENT,
      replyTo: fields.email,
      subject: `New Verawood Contact Message — ${fields.name}`,
      html: buildEmailHtml(fields),
    });

    if (error) {
      console.error("Resend contact error:", error);
      return Response.json({ error: "Unable to send message right now." }, { status: 500 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact email send failed:", err);
    return Response.json({ error: "Unable to send message right now." }, { status: 500 });
  }
}
