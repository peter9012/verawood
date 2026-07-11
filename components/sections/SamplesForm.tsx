"use client";

import { useState } from "react";

export default function SamplesForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={`form reveal${sent ? " is-sent" : ""}`}
      data-delay="1"
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      noValidate
    >
      <div className="form__fields">
        <div className="form__row">
          <div className="field">
            <label htmlFor="s-name">Full Name</label>
            <input id="s-name" type="text" name="name" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="s-email">Email</label>
            <input id="s-email" type="email" name="email" required autoComplete="email" />
          </div>
        </div>
        <div className="form__row">
          <div className="field">
            <label htmlFor="s-phone">Phone</label>
            <input id="s-phone" type="tel" name="phone" autoComplete="tel" />
          </div>
          <div className="field">
            <label htmlFor="s-species">Species of Interest</label>
            <select id="s-species" name="species">
              <option value="">Not sure yet</option>
              <option>European White Oak</option>
              <option>French Walnut</option>
              <option>Smoked Ash</option>
              <option>All three</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="s-address">Shipping Address</label>
          <input id="s-address" type="text" name="address" required autoComplete="street-address" />
        </div>
        <div className="form__row">
          <div className="field">
            <label htmlFor="s-city">City</label>
            <input id="s-city" type="text" name="city" autoComplete="address-level2" />
          </div>
          <div className="field">
            <label htmlFor="s-postcode">Postcode</label>
            <input id="s-postcode" type="text" name="postcode" autoComplete="postal-code" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="s-message">Tell us about your project</label>
          <textarea
            id="s-message"
            name="message"
            placeholder="Room size, timeline, palette — whatever helps us point you to the right finish."
          />
        </div>
        <div className="checks">
          <label className="check">
            <input type="checkbox" name="trade" /> I&apos;m ordering as a trade professional
          </label>
          <label className="check">
            <input type="checkbox" name="newsletter" /> Send me The Journal by email
          </label>
        </div>
        <div className="form__actions">
          <button className="btn btn--solid" type="submit">Request My Samples</button>
          <p className="form-note">Sample boxes ship within 5–7 business days, anywhere in the world.</p>
        </div>
      </div>
      <div className="form__success" tabIndex={-1}>
        <h3 className="display">Request received.</h3>
        <p>
          Thank you — your sample box request has been noted. A member of our team will follow up
          by email to confirm shipping details.
        </p>
      </div>
    </form>
  );
}
