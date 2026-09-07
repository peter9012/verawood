"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const data = new FormData(e.currentTarget);
    const payload = {
      name: data.get("name")?.toString().trim() ?? "",
      email: data.get("email")?.toString().trim() ?? "",
      phone: data.get("phone")?.toString().trim() ?? "",
      topic: data.get("topic")?.toString().trim() ?? "",
      message: data.get("message")?.toString().trim() ?? "",
    };

    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className={`form reveal${sent ? " is-sent" : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form__fields">
        <div className="form__row">
          <div className="field">
            <label htmlFor="c-name">Full Name</label>
            <input id="c-name" type="text" name="name" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" type="email" name="email" required autoComplete="email" />
          </div>
        </div>
        <div className="form__row">
          <div className="field">
            <label htmlFor="c-phone">Phone</label>
            <input id="c-phone" type="tel" name="phone" autoComplete="tel" />
          </div>
          <div className="field">
            <label htmlFor="c-topic">Enquiry Type</label>
            <select id="c-topic" name="topic">
              <option>General Enquiry</option>
              <option>Trade Account</option>
              <option>Project Consultation</option>
              <option>Showroom Visit</option>
              <option>Press</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="c-message">Message</label>
          <textarea
            id="c-message"
            name="message"
            required
            placeholder="Tell us a little about your project or question."
          />
        </div>
        <div className="form__actions">
          <button className="btn btn--solid" type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send Message"}
          </button>
          <p className="form-note">We typically reply within one business day.</p>
        </div>
        {error && (
          <p className="form-error" role="alert">
            We couldn&apos;t send your message. Please try again.
          </p>
        )}
      </div>
      <div className="form__success" tabIndex={-1}>
        <h3 className="display">Message sent.</h3>
        <p>Thank you for reaching out — a member of our team will be in touch shortly.</p>
      </div>
    </form>
  );
}
