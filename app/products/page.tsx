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
        title="Crafted for Exceptional Interiors."
        lede="A refined palette of handcrafted finishes inspired by modern architecture. Designed to complement exceptional interiors with effortless sophistication."
        image="/image/hero/product_hero_background.png"
      />

      <section className="section collections" id="products" aria-labelledby="products-heading">
        <div className="shell">
          <SectionHeader
            eyebrow="The Range"
            title="Eight finishes, one standard."
            linkHref="/samples"
            linkLabel="Request a sample"
          />
          {/* <p className="collections__lede reveal">
            Crafted from premium White Oak for modern architecture.
          </p> */}
          <ProductGrid products={PRODUCTS} />
        </div>
      </section>

      <CTABand
        eyebrow="Request Samples"
        title="Hold the wood in your hands."
        body="Complimentary full-size samples for architects, interior designers, builders, and homeowners. Experience the true color, texture, and craftsmanship of every collection before making your selection."
        actions={[
          { label: "Request a Sample", href: "/samples", solid: true },
          { label: "View Collections", href: "/products" },
        ]}
        backgroundImage="/image/about/sample.jpg"
      />
    </>
  );
}
