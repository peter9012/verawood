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
        title="Made for timeless spaces"
        lede="Verawood creates premium engineered hardwood flooring for architects, interior designers, builders, and discerning homeowners. Every collection is selected for exceptional beauty, lasting performance, and the ability to elevate modern living."
        imagePlaceholder="BANNER · black-and-white archival-style photo of the original Burgundy sawmill"
        video="/image/about/about.mp4"
      />

      {/* Story */}
      <CraftGrid
        imagePlaceholder="ABOUT · founder's portrait or family group, atelier setting, warm natural light"
        video="/image/about/story.mp4"
      >
        <span className="eyebrow reveal">Our Story</span>
        <h2 className="reveal" data-delay="1">Every remarkable space begins beneath your feet</h2>
        <p className="reveal" data-delay="2">
          Our collections bring together carefully selected hardwood, premium construction, and sophisticated finishes to create floors that are timeless, durable, and naturally beautiful. Designed for architects, interior designers, builders, and discerning homeowners, every collection reflects our commitment to quality without compromise.
        </p>
        <p className="reveal" data-delay="3">
          We believe the finest materials don&apos;t compete for attention—they quietly elevate every room they become part of.
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
        body="Complimentary full-size samples for architects, interior designers, builders, and homeowners. Experience the true color, texture, and craftsmanship of every collection before making your selection."
        actions={[
          { label: "Request a Sample", href: "/samples", solid: true },
          { label: "View Collections", href: "/collections" },
        ]}
        backgroundImage="/image/about/sample.jpg"
      />
    </>
  );
}
