"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <p
      style={{
        fontFamily: "var(--font-eyebrow)",
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--muted)",
        marginTop: 32,
      }}
    >
      Subscribed — thank you.
    </p>
  ) : (
    <form
      className="footer__news"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input type="email" placeholder="The Journal, by email" aria-label="Email for newsletter" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}
