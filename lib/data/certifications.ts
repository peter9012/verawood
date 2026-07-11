import type { Certification } from "@/types";

/**
 * TODO: Add verified CA Section 01350 test report before publishing this claim.
 * Once VERAWOOD holds a current, valid CA Section 01350 test report:
 *   1. Set the "ca-01350" entry's status to "confirmed".
 *   2. Add the compliance sentence to its body array.
 *   3. Remove pendingNote.
 * A certificateHref/certificateLabel pair may be added to any entry once a
 * real certificate PDF exists in /public.
 */
export const CERTIFICATIONS: Certification[] = [
  {
    id: "lacey-act",
    title: "Lacey Act Compliant",
    status: "confirmed",
    body: [
      "The Lacey Act makes it unlawful to import, export, transport, sell, or acquire plant materials that were harvested or traded in violation of U.S. or foreign law.",
      "It stands as one of the principal safeguards against illegal logging and the unlawful timber trade, and requires formal declarations — species, country of harvest, and product composition — for many imported plant materials.",
      "VERAWOOD sources and imports every collection in accordance with applicable Lacey Act requirements.",
    ],
  },
  {
    id: "carb-tsca",
    title: "CARB Phase 2 & EPA TSCA Title VI Compliant",
    status: "confirmed",
    body: [
      "The California Air Resources Board's Phase 2 rule and the U.S. EPA's TSCA Title VI set formaldehyde-emission limits for composite wood products, including hardwood plywood, medium-density fiberboard, and particleboard.",
      "Both regulations govern the composite wood components used within engineered flooring construction, rather than flooring as a finished product category.",
      "Applicable VERAWOOD engineered flooring built with regulated composite wood components meets the formaldehyde-emission requirements of CARB Phase 2 and EPA TSCA Title VI.",
    ],
  },
  {
    id: "ca-01350",
    title: "Beyond CARB & TSCA: CA Section 01350",
    status: "draft",
    body: [
      "CARB Phase 2 and EPA TSCA Title VI address the regulated composite wood components inside a product. California Section 01350 looks further, evaluating emissions from the finished product as a whole — formaldehyde alongside a broader range of volatile organic compounds.",
      "It has become a recognized benchmark for low-emitting materials and can support indoor environmental quality credit in green building programs such as LEED.",
    ],
    pendingNote:
      "Independent CA Section 01350 test verification for VERAWOOD engineered flooring is currently underway. This page will be updated once results are confirmed.",
  },
];
