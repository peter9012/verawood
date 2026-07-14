import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CraftGrid from "@/components/sections/CraftGrid";
import CraftSteps from "@/components/sections/CraftSteps";
import CTABand from "@/components/sections/CTABand";
import { CRAFT_STEPS, PROCESS_STEPS } from "@/lib/data/collections";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Craftsmanship",
  description:
    "From forest to finish — how Verawood quarter-saws, air-dries, grades by eye, and hand-finishes every plank. The full eleven-step process.",
  alternates: { canonical: `${SITE_URL}/craftsmanship` },
  openGraph: {
    title: "Craftsmanship — VERAWOOD Hardwood Flooring",
    description: "From forest to finish, every plank passes through the same deliberate sequence.",
    url: `${SITE_URL}/craftsmanship`,
    images: [{ url: OG_IMAGE }],
  },
};

const STEP_IMAGES = [
  "CRAFT · logs stacked in the mill yard, early morning, mist, Burgundy",
  "CRAFT · boards stacked in open-sided drying shed, cross-sectional view, natural light",
  "CRAFT · close-up of craftsperson's hands examining a board surface, checking grain",
  "CRAFT · hands applying natural oil to a board surface, workshop bench, warm side light",
];

export default function CraftsmanshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Craftsmanship"
        title="Eleven hands, one board."
        lede="From forest to finish, every plank passes through the same deliberate sequence — unchanged since 1974 because it hasn't needed changing."
        imagePlaceholder="BANNER · craftsperson's workshop with boards on a bench, raking atelier light"
      />

      {PROCESS_STEPS.map((step, i) => (
        <CraftGrid
          key={step.number}
          imagePlaceholder={STEP_IMAGES[i]}
          reversed={i % 2 === 1}
          background={i % 2 === 1 ? "var(--paper-deep)" : undefined}
        >
          <span className="eyebrow reveal">{step.number}</span>
          <h2 className="reveal" data-delay="1">{step.title}</h2>
          <p className="reveal" data-delay="2">{step.description}</p>
          {/* On the last step, embed the 3-step summary */}
          {i === PROCESS_STEPS.length - 1 && (
            <CraftSteps steps={CRAFT_STEPS} delay={3} />
          )}
        </CraftGrid>
      ))}

      <CTABand
        eyebrow="Request Samples"
        title="Hold the wood in your hands."
        body="We'll send a curated box of full-size samples — graded, oiled, and labelled — anywhere in the world, at no cost to the trade."
        actions={[
          { label: "Request a Sample", href: "/samples", solid: true },
          { label: "View Collections", href: "/products" },
        ]}
      />
    </>
  );
}
