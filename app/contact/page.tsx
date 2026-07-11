import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Verawood for trade enquiries, project consultations, or showroom visits. Piedmont & Burgundy, serving clients worldwide.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact — VERAWOOD Hardwood Flooring",
    description: "Trade enquiries, project consultations, and showroom visits — get in touch with Verawood.",
    url: `${SITE_URL}/contact`,
    images: [{ url: OG_IMAGE }],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your floor."
        lede="For trade enquiries, project consultations, or to book a showroom visit — we typically reply within one business day."
        imagePlaceholder="BANNER · showroom interior, oak floor samples mounted on a wall, soft daylight"
      />

      <section className="section" aria-labelledby="contact-heading">
        <div className="shell">
          <div className="contact-grid">
            <ContactForm />

            <div className="contact-info reveal" data-delay="1">
              <div className="contact-info__item">
                <h5>Showroom</h5>
                <p>
                  1100 Industrial Rd #17, San Carlos, CA 94070
                  <br />
                  {/* Beaune, Burgundy, France{" "} */}
                  {/* <em style={{ fontStyle: "italic", color: "var(--muted)" }}>[placeholder address]</em> */}
                </p>
              </div>
              <div className="contact-info__item">
                <h5>Trade &amp; Sales</h5>
                <a href="mailto:verawoodus@gmail.com">verawoodus@gmail.com</a>
                <a href="tel:+16508888171">
                  650-888-8171 {" "}
                  {/* <em style={{ fontStyle: "italic", color: "var(--muted)" }}>[placeholder]</em> */}
                </a>
                <a href="tel:+14159289381">
                  415-928-9381 {" "}
                  {/* <em style={{ fontStyle: "italic", color: "var(--muted)" }}>[placeholder]</em> */}
                </a>
              </div>
              {/* <div className="contact-info__item">
                <h5>Press</h5>
                <a href="mailto:press@verawood.example">press@verawood.example</a>
              </div> */}
              <div className="contact-info__item">
                <h5>Hours</h5>
                <p>
                  M–F 8:30am – 5pm | Sat 10am – 4:30pm
                  {/* <br />
                  Showroom visits by appointment */}
                </p>
              </div>
              <div className="contact-map">
                <MediaPlaceholder caption="MAP · showroom location pin, Beaune, Burgundy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
