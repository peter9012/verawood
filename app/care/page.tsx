import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CareBlock from "@/components/sections/CareBlock";
import CTABand from "@/components/sections/CTABand";
import type { CareItem } from "@/lib/data/care";
import {
  CARE_UPDATED,
  CLEANING_DO,
  CLEANING_AVOID,
  CLIMATE,
  SCRATCH_PREVENTION,
  SPILL_STEPS,
  SEASONAL,
  PROFESSIONAL,
} from "@/lib/data/care";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Care & Maintenance",
  description:
    "How to clean, protect, and maintain Verawood engineered hardwood floors — daily cleaning, humidity and temperature, scratch prevention, spills, and seasonal care.",
  alternates: { canonical: `${SITE_URL}/care` },
  openGraph: {
    title: "Care & Maintenance — VERAWOOD Hardwood Flooring",
    description: "Simple care habits to keep your Verawood floors looking beautiful for years.",
    url: `${SITE_URL}/care`,
    images: [{ url: OG_IMAGE }],
  },
};

function CareList({
  items,
  ordered,
  headingLevel: Heading = "h3",
}: {
  items: CareItem[];
  ordered?: boolean;
  /** h4 when the list sits under an h3 label (e.g. "What to do") */
  headingLevel?: "h3" | "h4";
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`care-list${ordered ? " care-list--ordered" : ""}`}>
      {items.map((item) => (
        <li key={item.title} className="care-list__item">
          <Heading className="care-list__title">{item.title}</Heading>
          <p className="care-list__body">{item.body}</p>
        </li>
      ))}
    </Tag>
  );
}

export default function CarePage() {
  return (
    <>
      <PageHero
        eyebrow="Care & Maintenance"
        title="A floor that lasts begins with simple care."
        lede="A few consistent habits keep your Verawood floor beautiful for years: gentle cleaning, a stable indoor climate, and protection from grit and moisture."
        image="/image/hero/hero-05.webp"
        imageAlt="Open living room and kitchen with light oak flooring in warm evening light"
      />

      <div className="section care">
        <div className="shell">
          <p className="care__updated reveal">Updated {CARE_UPDATED}</p>

          <CareBlock
            id="cleaning"
            number="01"
            title="Daily and weekly cleaning"
            intro="Consistent, gentle cleaning is the foundation of floor care. The goal is to remove grit before it can act as an abrasive against the finish."
          >
            <div className="care-split">
              <div>
                <h3 className="care-split__label">What to do</h3>
                <CareList items={CLEANING_DO} headingLevel="h4" />
              </div>
              <div>
                <h3 className="care-split__label care-split__label--avoid">What to avoid</h3>
                <CareList items={CLEANING_AVOID} headingLevel="h4" />
              </div>
            </div>
          </CareBlock>

          <CareBlock
            id="climate"
            number="02"
            title="Humidity and temperature"
            intro="Wood responds to the air around it. A stable indoor environment is one of the most important — and most overlooked — parts of floor care."
          >
            <div className="care-table-wrap">
              <table className="care-table">
                <thead>
                  <tr>
                    <th scope="col">Condition</th>
                    <th scope="col">Recommended range</th>
                    <th scope="col">Outside the range</th>
                  </tr>
                </thead>
                <tbody>
                  {CLIMATE.map((row) => (
                    <tr key={row.condition}>
                      <th scope="row">{row.condition}</th>
                      <td className="care-table__range">{row.range}</td>
                      <td>{row.outside}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="care-note">
              <span className="care-note__label">Good to know</span>
              Engineered hardwood is more dimensionally stable than solid hardwood, which makes it well
              suited to climates with large seasonal swings, radiant heat, and below-grade rooms.
            </p>
          </CareBlock>

          <CareBlock
            id="scratches"
            number="03"
            title="Preventing scratches"
            intro="Most scratches are avoidable with a few simple habits and protective measures."
          >
            <CareList items={SCRATCH_PREVENTION} />
          </CareBlock>

          <CareBlock
            id="spills"
            number="04"
            title="When spills happen"
            intro="Respond quickly, before moisture can work through the finish and into the wood."
          >
            <CareList items={SPILL_STEPS} ordered />
          </CareBlock>

          <CareBlock
            id="seasonal"
            number="05"
            title="Seasonal care"
            intro="Indoor conditions shift through the year, and your floor benefits from a little seasonal attention."
          >
            <div className="care-split">
              {SEASONAL.map(({ season, items }) => (
                <div key={season}>
                  <h3 className="care-split__label">{season}</h3>
                  <CareList items={items} headingLevel="h4" />
                </div>
              ))}
            </div>
          </CareBlock>

          <CareBlock
            id="professional"
            number="06"
            title="When to call a professional"
            intro="Some work is best left to an experienced flooring contractor."
          >
            <CareList items={PROFESSIONAL} />
          </CareBlock>
        </div>
      </div>

      <CTABand
        eyebrow="Floor Care Support"
        title="Questions about your floor?"
        body="Our team is happy to help with cleaning products, climate questions, or anything that doesn't look quite right."
        actions={[
          { label: "Contact Us", href: "/contact", solid: true },
          { label: "View Collections", href: "/products" },
        ]}
        backgroundImage="/image/about/sample.jpg"
      />
    </>
  );
}
