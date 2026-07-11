import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProductGrid from "@/components/sections/ProductGrid";
import CTABand from "@/components/sections/CTABand";
import { PRODUCTS } from "@/lib/data/products";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Verawood's full range of European White Oak boards — eight finishes from pale Lume to smoked Fumo, engineered for stability and finished by hand.",
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: "Products — VERAWOOD Hardwood Flooring",
    description: "Eight European White Oak finishes, engineered for stability and finished by hand.",
    url: `${SITE_URL}/products`,
    images: [{ url: OG_IMAGE }],
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Every board, in hand."
        lede="Eight finishes of European White Oak, engineered for stability and brushed to raise the grain. Hover any board for full specifications."
        imagePlaceholder="BANNER · flat-lay of eight oak finishes fanned out, studio light, no props"
      />

      <section className="section collections" id="products" aria-labelledby="products-heading">
        <div className="shell">
          <SectionHeader
            eyebrow="The Range"
            title="Eight finishes, one standard."
            linkHref="/samples"
            linkLabel="Request a sample"
          />
          <p className="collections__lede reveal">
            Crafted from premium European White Oak for modern architecture.
          </p>
          <ProductGrid products={PRODUCTS} />
        </div>
      </section>

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
