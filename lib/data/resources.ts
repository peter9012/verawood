import type { Resource } from "@/types";
import { INSTALLATION_GUIDE, WARRANTY_DOCUMENT } from "@/lib/data/documents";

/** Home page Resources cards. */
export const RESOURCES: Resource[] = [
  {
    id: "installation",
    title: "Installation",
    description: "Prepare your space and find the guidance you need for a successful installation.",
    image: "/image/resources/installation.png",
    imageAlt: "Installer kneeling to fit oak planks into place, with a mallet and a stack of boards nearby",
    action: {
      type: "pdf",
      label: "Download Installation Guide",
      href: INSTALLATION_GUIDE.href,
      ariaLabel: "Download Installation Guide (PDF, opens in a new tab)",
    },
  },
  {
    id: "care",
    title: "Care & Maintenance",
    description: "Simple care tips to keep your Verawood floors looking beautiful.",
    image: "/image/resources/care.png",
    imageAlt: "Person dry-mopping a sunlit oak floor with a microfiber mop in a calm living room",
    action: { type: "link", label: "Explore Floor Care", href: "/care" },
  },
  {
    id: "warranty",
    title: "Warranty",
    description: "Review warranty coverage, terms, and conditions for your Verawood flooring.",
    image: "/image/resources/warranty.png",
    imageAlt: "Verawood warranty booklet resting on a sunlit oak floor beside a knit throw and a potted plant",
    action: {
      type: "pdf-preview",
      label: "View Warranty",
      href: WARRANTY_DOCUMENT.href,
      previewTitle: WARRANTY_DOCUMENT.label,
      downloadName: "verawood-warranty.pdf",
    },
  },
];
