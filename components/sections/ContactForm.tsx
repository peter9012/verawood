"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={`form reveal${sent ? " is-sent" : ""}`}
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
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
          <button className="btn btn--solid" type="submit">Send Message</button>
          <p className="form-note">We typically reply within one business day.</p>
        </div>
      </div>
      <div className="form__success" tabIndex={-1}>
        <h3 className="display">Message sent.</h3>
        <p>Thank you for reaching out — a member of our team will be in touch shortly.</p>
      </div>
    </form>
  );
}
