import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CraftGrid from "@/components/sections/CraftGrid";
import CTABand from "@/components/sections/CTABand";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "How Verawood approaches responsible sourcing, natural finishing, and building floors that last for generations rather than decades.",
  alternates: { canonical: `${SITE_URL}/sustainability` },
  openGraph: {
    title: "Sustainability — VERAWOOD Hardwood Flooring",
    description: "A forest you can return to. We work two regions, at a pace set by the trees.",
    url: `${SITE_URL}/sustainability`,
    images: [{ url: OG_IMAGE }],
  },
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="A forest you can return to."
        lede="We work two regions we know personally, at a pace set by the trees, not by demand. A floor that lasts decades is, in itself, a sustainability decision."
        imagePlaceholder="BANNER · aerial view of managed Burgundy forest, morning light through canopy"
      />

      <CraftGrid imagePlaceholder="SUSTAIN · forest floor in Burgundy, filtered light, moss and bark detail, no people">
        <span className="eyebrow reveal">Sourcing</span>
        <h2 className="reveal" data-delay="1">Two regions, known well.</h2>
        <p className="reveal" data-delay="2">
          We source exclusively from Burgundy and Piedmont — two regions we have worked continuously
          since 1974. We know the foresters by name, and they know our specifications. Neither region
          is anonymous, and neither is a commodity supplier.
        </p>
        <p className="reveal" data-delay="3">
          <em>
            [Placeholder: FSC/PEFC certification details and chain-of-custody information to be
            added once verified with sourcing partners.]
          </em>
        </p>
      </CraftGrid>

      <CraftGrid
        imagePlaceholder="SUSTAIN · close-up of natural hardwax oil being applied to a board, plant-based finish, warm studio light"
        reversed
        background="var(--paper-deep)"
      >
        <span className="eyebrow reveal">Finish &amp; Materials</span>
        <h2 className="reveal" data-delay="1">Natural oils, not plastic sealants.</h2>
        <p className="reveal" data-delay="2">
          Every Verawood board is finished with plant-based hardwax oils. Unlike polyurethane
          coatings, which form a plastic film on the surface and must be sanded off entirely to
          refinish, hardwax oil penetrates the wood fibres and can be re-applied spot by spot as the
          floor ages.
        </p>
        <p className="reveal" data-delay="3">
          <em>
            [Placeholder: VOC ratings and specific oil formulation certifications to be confirmed
            with finish supplier before publication.]
          </em>
        </p>
      </CraftGrid>

      <CraftGrid imagePlaceholder="SUSTAIN · aged Verawood floor in a lived-in home, warm afternoon light, showing natural patina">
        <span className="eyebrow reveal">Built to Last</span>
        <h2 className="reveal" data-delay="1">The most sustainable board is the one you never replace.</h2>
        <p className="reveal" data-delay="2">
          Quarter-sawing and slow drying produce a dimensionally stable board that resists cupping,
          gapping, and surface wear over decades of use. Our 4 mm sawn-cut wear layer means a
          Verawood floor can be re-sanded multiple times over its life, extending it well beyond the
          lifespan of engineered competitors with thin rotary-peeled veneers.
        </p>
        <p className="reveal" data-delay="3">
          A floor that lasts fifty years and is refinished twice has a lower environmental footprint
          than one replaced every fifteen — regardless of certification labels.
        </p>
      </CraftGrid>

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
