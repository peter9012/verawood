import { Resend } from "resend";

const RECIPIENT = "verawoodus@gmail.com";
const SENDER = "Verawood Samples <samples@verawoodus.com>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SamplesPayload {
  name: string;
  email: string;
  phone: string;
  species: string;
  address: string;
  city: string;
  postcode: string;
  message: string;
  trade: boolean;
  newsletter: boolean;
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

function buildEmailHtml(fields: SamplesPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#5b4d40;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;color:#2A201A;">${escapeHtml(value) || "—"}</td></tr>`;

  return `
    <div style="font-family:Georgia,serif;color:#2A201A;">
      <h2 style="font-weight:400;">New Sample Request</h2>
      <table cellpadding="0" cellspacing="0">
        ${row("Full Name", fields.name)}
        ${row("Email", fields.email)}
        ${row("Phone", fields.phone)}
        ${row("Species of Interest", fields.species)}
        ${row("Shipping Address", fields.address)}
        ${row("City", fields.city)}
        ${row("Postcode", fields.postcode)}
        ${row("Trade Professional", fields.trade ? "Yes" : "No")}
        ${row("Newsletter Signup", fields.newsletter ? "Yes" : "No")}
      </table>
      <p style="margin-top:16px;color:#5b4d40;">Project message:</p>
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
  const fields: SamplesPayload = {
    name: asString(raw.name),
    email: asString(raw.email),
    phone: asString(raw.phone),
    species: asString(raw.species),
    address: asString(raw.address),
    city: asString(raw.city),
    postcode: asString(raw.postcode),
    message: asString(raw.message),
    trade: raw.trade === true,
    newsletter: raw.newsletter === true,
  };

  if (!fields.name) {
    return Response.json({ error: "Name is required." }, { status: 400 });
  }
  if (!fields.email || !EMAIL_RE.test(fields.email)) {
    return Response.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!fields.address) {
    return Response.json({ error: "Shipping address is required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return Response.json({ error: "Unable to send request right now." }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: SENDER,
      to: RECIPIENT,
      replyTo: fields.email,
      subject: `New Verawood Sample Request — ${fields.name}`,
      html: buildEmailHtml(fields),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Unable to send request right now." }, { status: 500 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Samples email send failed:", err);
    return Response.json({ error: "Unable to send request right now." }, { status: 500 });
  }
}
