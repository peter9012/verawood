import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTABand from "@/components/sections/CTABand";
import { GALLERY_PROJECTS } from "@/lib/data/projects";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A working record of the rooms our boards have shipped to — selected interiors by architects and designers across three continents.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Gallery — VERAWOOD Hardwood Flooring",
    description: "Selected interiors by architects and designers across three continents.",
    url: `${SITE_URL}/gallery`,
    images: [{ url: OG_IMAGE }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Spaces That Endure."
        lede="From private residences to boutique hospitality, explore how Verawood brings warmth, texture, and timeless craftsmanship to exceptional interiors around the world."
        image="/image/hero/gallery_hero.png"
      />

      <section className="section projects" aria-labelledby="gallery-heading">
        <div className="shell">
          <SectionHeader
            eyebrow="Selected Interiors"
            title="Six rooms, three continents."
            linkHref="/samples"
            linkLabel="Start your own project"
          />
          <GalleryGrid projects={GALLERY_PROJECTS} />
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
