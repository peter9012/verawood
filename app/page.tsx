import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProductGrid from "@/components/sections/ProductGrid";
import ProjectFeature from "@/components/sections/ProjectFeature";
import ProjectTile from "@/components/sections/ProjectTile";
import CraftGrid from "@/components/sections/CraftGrid";
import CraftSteps from "@/components/sections/CraftSteps";
import CTABand from "@/components/sections/CTABand";
import LinkUnderline from "@/components/ui/LinkUnderline";
import { PRODUCTS } from "@/lib/data/products";
import { FEATURE_PROJECT, HOME_PROJECTS } from "@/lib/data/projects";
import { CRAFT_STEPS } from "@/lib/data/collections";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: "Premium European hardwood flooring for architects, designers, and discerning homes, since 1974.",
    url: SITE_URL,
    images: [{ url: OG_IMAGE }],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* New Arrivals */}
      <section className="section collections" id="collections" aria-labelledby="arrivals-heading">
        <div className="shell">
          <SectionHeader
            eyebrow="Hot Selling Products"
            title="Discover What's New"
            linkHref="/products"
            linkLabel="View all collections"
          />
          <p className="collections__lede reveal">
            Designed for contemporary architecture and timeless interiors.
          </p>
          <ProductGrid products={PRODUCTS} />
        </div>
      </section>

      {/* Projects */}
      <section className="section projects" id="projects" aria-labelledby="projects-heading">
        <div className="shell">
          <SectionHeader
            eyebrow="Architecture"
            title="Where our floors come to rest."
            linkHref="/gallery"
            linkLabel="All projects"
          />
          <ProjectFeature project={FEATURE_PROJECT} />
          <div className="proj-row">
            {HOME_PROJECTS.map((p, i) => (
              <ProjectTile key={p.id} project={p} delay={i === 1 ? 1 : undefined} />
            ))}
          </div>
        </div>
      </section>

      {/* Craft */}
      <CraftGrid
        imagePlaceholder="CRAFT · hands planing a board in the atelier, sawdust in light, monochrome warmth"
        image="/image/home/dance.png"
      >
        <span className="eyebrow reveal">The Making</span>
        <h2 className="reveal" data-delay="1">
          Crafted with precision. Designed to endure.
        </h2>
        <p className="reveal" data-delay="2">
          Every Verawood floor is thoughtfully crafted using premium hardwood, precision-engineered construction, and refined finishing techniques. Every detail—from species selection to surface texture—is designed to deliver lasting beauty, stability, and performance for modern living.
        </p>
        <CraftSteps steps={CRAFT_STEPS} delay={3} />
        {/* <LinkUnderline href="/craftsmanship" className="craft__more reveal">
          The full process
        </LinkUnderline> */}
      </CraftGrid>

      {/* CTA */}
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
