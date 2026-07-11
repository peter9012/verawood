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
        title="Where our floors come to rest."
        lede="A working record of the rooms our boards have shipped to — selected by architects and designers across three continents."
        imagePlaceholder="BANNER · aerial view of a serene interior, warm oak floor, diffused natural light"
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
        body="We'll send a curated box of full-size samples — graded, oiled, and labelled — anywhere in the world, at no cost to the trade."
        actions={[
          { label: "Request a Sample", href: "/samples", solid: true },
          { label: "View Collections", href: "/collections" },
        ]}
      />
    </>
  );
}
