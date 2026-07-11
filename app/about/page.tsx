import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CraftGrid from "@/components/sections/CraftGrid";
import SectionHeader from "@/components/sections/SectionHeader";
import CraftSteps from "@/components/sections/CraftSteps";
import Certifications from "@/components/sections/Certifications";
import CTABand from "@/components/sections/CTABand";
import LinkUnderline from "@/components/ui/LinkUnderline";
import { COMMITMENTS } from "@/lib/data/collections";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Since 1974, Verawood has sourced and finished European hardwood flooring from Piedmont and Burgundy — family-run, architect-trusted, built to age rather than wear.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About — VERAWOOD Hardwood Flooring",
    description: "Family-run since 1974, Verawood sources and finishes European hardwood flooring from Piedmont and Burgundy.",
    url: `${SITE_URL}/about`,
    images: [{ url: OG_IMAGE }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Made by nature. Refined by hand."
        lede="Verawood began as a single sawmill in Burgundy. Three generations later, we still grade every board by eye before it leaves our hands."
        imagePlaceholder="BANNER · black-and-white archival-style photo of the original Burgundy sawmill"
      />

      {/* Story */}
      <CraftGrid imagePlaceholder="ABOUT · founder's portrait or family group, atelier setting, warm natural light">
        <span className="eyebrow reveal">Our Story</span>
        <h2 className="reveal" data-delay="1">A trade passed down, not franchised out.</h2>
        <p className="reveal" data-delay="2">
          Verawood was founded in 1974 in the forests of Burgundy, where the first generation of our
          family began quarter-sawing oak for local cabinetmakers. What started as a single mill grew,
          slowly and deliberately, into a flooring house trusted by architects across Europe and,
          later, abroad — without ever opening a factory we couldn&apos;t walk through ourselves.
        </p>
        <p className="reveal" data-delay="3">
          Today we work two regions: Burgundy for our European White Oak, and the Piedmont groves for
          the walnut used in our most considered interiors. Every board is still graded by eye, and
          every finish is still mixed and applied by hand in small batches — a constraint we&apos;ve
          kept by choice, not necessity.
        </p>
      </CraftGrid>

      {/* Certifications & Compliance */}
      <Certifications />

      {/* Values */}
      {/* <section className="section craft" style={{ background: "var(--paper-deep)" }}>
        <div className="shell">
          <SectionHeader
            eyebrow="What We Hold To"
            title="Four commitments, unchanged since 1974."
          />
          <CraftSteps steps={COMMITMENTS} columns={4} delay={1} />
          <LinkUnderline href="/craftsmanship" className="craft__more reveal">
            See how a board is made
          </LinkUnderline>
        </div>
      </section> */}

      <CTABand
        eyebrow="Request Samples"
        title="Hold the wood in your hands."
        body="We'll send a curated box of full-size samples — graded, oiled, and labelled — anywhere in the world, at no cost to the trade."
        actions={[
          { label: "Request a Sample", href: "/samples", solid: true },
          { label: "View Collections", href: "/collections" },
        ]}
      />
    </>
  );
}
