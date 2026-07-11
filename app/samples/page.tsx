import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import SamplesForm from "@/components/sections/SamplesForm";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Request Samples",
  description:
    "Request a curated box of full-size Verawood hardwood samples — graded, oiled, and labelled — shipped anywhere in the world at no cost to the trade.",
  alternates: { canonical: `${SITE_URL}/samples` },
  openGraph: {
    title: "Request Samples — VERAWOOD Hardwood Flooring",
    description: "A curated box of full-size hardwood samples, shipped anywhere in the world at no cost to the trade.",
    url: `${SITE_URL}/samples`,
    images: [{ url: OG_IMAGE }],
  },
};

export default function SamplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Request Samples"
        title="Hold the wood in your hands."
        lede="A curated box of full-size samples — graded, oiled, and labelled — shipped anywhere in the world at no cost to the trade."
        imagePlaceholder="BANNER · open sample box with labelled boards on a studio table"
      />

      <section className="section" aria-labelledby="samples-heading">
        <div className="shell">
          <SectionHeader eyebrow="Tell Us About Your Project" title="Request a sample box." />
          <SamplesForm />
        </div>
      </section>
    </>
  );
}
