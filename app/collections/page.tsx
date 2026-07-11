import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProjectTile from "@/components/sections/ProjectTile";
import CraftGrid from "@/components/sections/CraftGrid";
import CraftSteps from "@/components/sections/CraftSteps";
import CTABand from "@/components/sections/CTABand";
import LinkUnderline from "@/components/ui/LinkUnderline";
import { COLLECTIONS, WOOD_GUIDE_STEPS } from "@/lib/data/collections";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore Verawood's hardwood collections — European White Oak, French Walnut, and Smoked Ash — quarter-sawn, air-dried, and hand-finished for architectural interiors.",
  alternates: { canonical: `${SITE_URL}/collections` },
  openGraph: {
    title: "Collections — VERAWOOD Hardwood Flooring",
    description: "Three timbers, one philosophy. Explore Verawood's European White Oak, French Walnut, and Smoked Ash collections.",
    url: `${SITE_URL}/collections`,
    images: [{ url: OG_IMAGE }],
  },
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Considered, by species."
        lede="Three timbers, one philosophy: quarter-sawn for stability, air-dried for two seasons, and finished by hand. Each collection ages rather than wears."
        imagePlaceholder="BANNER · overhead detail of three wood tones side by side — oak, walnut, ash — raking light, no props"
      />

      {/* Collections grid */}
      <section className="section projects" aria-labelledby="collections-heading">
        <div className="shell">
          <SectionHeader
            eyebrow="The Collections"
            title="Three woods. Infinite rooms."
            linkHref="/products"
            linkLabel="View all boards"
          />
          <div className="proj-row proj-row--3">
            {COLLECTIONS.map((c, i) => (
              <ProjectTile
                key={c.id}
                project={{
                  id: c.id,
                  title: c.title,
                  caption: c.description,
                  imagePlaceholder: c.imagePlaceholder,
                  href: c.href,
                  linkLabel: c.linkLabel,
                }}
                delay={i > 0 ? i : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wood guide */}
      <CraftGrid imagePlaceholder="CRAFT · stacked plank samples across all three collections, atelier table, daylight">
        <span className="eyebrow reveal">Choosing a Wood</span>
        <h2 className="reveal" data-delay="1">Every room asks for a different grain.</h2>
        <p className="reveal" data-delay="2">
          Oak forgives a busy household and brightens north-facing rooms. Walnut grounds a space and
          rewards low, warm lighting. Ash reads cool and architectural, especially against stone or
          concrete. We&apos;ll talk through light, traffic, and palette before a single board ships.
        </p>
        <CraftSteps steps={WOOD_GUIDE_STEPS} delay={3} />
        <LinkUnderline href="/craftsmanship" className="craft__more reveal">
          How every board is made
        </LinkUnderline>
      </CraftGrid>

      <CTABand
        eyebrow="Request Samples"
        title="Hold the wood in your hands."
        body="We'll send a curated box of full-size samples — graded, oiled, and labelled — anywhere in the world, at no cost to the trade."
        actions={[
          { label: "Request a Sample", href: "/samples", solid: true },
          { label: "View All Boards", href: "/products" },
        ]}
      />
    </>
  );
}
