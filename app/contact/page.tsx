import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";
import Image from "next/image";

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
        title="Every Exceptional Home Starts Here."
        lede="Whether you're specifying a luxury residence, designing a boutique hospitality space, or selecting flooring for your own home, our team is here to help."
        image="/image/hero/contact_hero.png"
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
                  <Image
                    src="/image/hero/showroom_hero.png"
                    alt="VERAWOOD showroom"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    style={{ objectFit: "cover" }}
                  />           
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
