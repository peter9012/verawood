import type { Collection, CraftStep } from "@/types";

export const COLLECTIONS: Collection[] = [
  {
    id: "european-white-oak",
    title: "European White Oak",
    description:
      "Our founding material, quarter-sawn from Burgundy forests since 1974. Pale, warm, and endlessly architectural.",
    imagePlaceholder: "COLLECTION · European White Oak — pale, sunlit room, wide board detail",
    href: "/products",
    linkLabel: "View oak boards",
  },
  {
    id: "french-walnut",
    title: "French Walnut",
    description:
      "Deep, chocolate-toned heartwood from managed Piedmont groves. Reserved for our most considered interiors.",
    imagePlaceholder:
      "COLLECTION · French Walnut — dark chocolate tone, dining room, dusk light",
    href: "/samples",
    linkLabel: "Request a sample",
  },
  {
    id: "smoked-ash",
    title: "Smoked Ash",
    description:
      "Fumed in small batches for a cool, graphite cast — a quieter alternative to traditional dark stains.",
    imagePlaceholder:
      "COLLECTION · Smoked Ash — cool grey-graphite tone, minimalist interior, fog light",
    href: "/samples",
    linkLabel: "Request a sample",
  },
];

/** Three-step wood guide on collections page */
export const WOOD_GUIDE_STEPS: CraftStep[] = [
  {
    number: "01",
    title: "Oak",
    description: "Bright rooms, busy households, timeless resale value.",
  },
  {
    number: "02",
    title: "Walnut",
    description: "Formal rooms, warm low light, quiet luxury.",
  },
  {
    number: "03",
    title: "Ash",
    description: "Minimalist interiors, cool palettes, modern builds.",
  },
];

/** Four-step craftsmanship summary (home + craftsmanship pages) */
export const CRAFT_STEPS: CraftStep[] = [
  {
    number: "01",
    title: "Carefully Selected",
    description: "Every collection begins with hardwood chosen for its natural beauty, grain consistency, and structural quality.",
  },
  {
    number: "02",
    title: "Precision Crafted",
    description: "Advanced engineered construction provides exceptional stability and long-term durability.",
  },
  {
    number: "03",
    title: "Refined by Hand",
    description: "Textures and finishes are applied to highlight the authentic character of every plank.",
  },
];

/** Four commitments on About page */
export const COMMITMENTS: CraftStep[] = [
  { number: "01", title: "Slow by design", description: "Two-season air-drying before kiln, every time." },
  { number: "02", title: "Graded by eye", description: "No board ships without a human inspection." },
  { number: "03", title: "Finished by hand", description: "Natural oils, mixed and applied in small batches." },
  { number: "04", title: "Two regions, known well", description: "Burgundy oak, Piedmont walnut — no anonymous sourcing." },
];

/** Four process steps on Craftsmanship page */
export const PROCESS_STEPS: CraftStep[] = [
  {
    number: "Step One",
    title: "Quarter-sawn",
    description:
      "Every log is quarter-sawn — cut radially, so the growth rings run at 60–90° to the face. It's slower and more wasteful than flat-sawing, but the resulting board is dimensionally stable, shows tighter grain, and resists cupping. We've done it this way since 1974.",
  },
  {
    number: "Step Two",
    title: "Air-dried for two seasons",
    description:
      "After milling, boards are stacked in open-sided sheds and left to breathe for two full growing seasons before kiln. Rushing this step with heat alone locks stress into the wood; slow air-drying releases it. The kiln brings moisture content to the final target. This is the step most mills skip.",
  },
  {
    number: "Step Three",
    title: "Graded by eye",
    description:
      "No automated grading. Every board is assessed by a craftsperson for knot character, colour consistency, and surface integrity. Boards that don't meet our standard are set aside — not sold under a secondary label. Our graders have been with us, on average, over a decade.",
  },
  {
    number: "Step Four",
    title: "Finished by hand",
    description:
      "We finish with natural hardwax oils — plant-based, breathable, repairable. No polyurethane, no plastic seal. The oil penetrates the surface rather than sitting on top of it, which means the board can be re-oiled spot by spot as it ages, and never needs sanding back to bare wood.",
  },
];
