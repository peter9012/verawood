import type { Product } from "@/types";
import CTABand from "@/components/sections/CTABand";

interface Props {
  product: Product;
}

export default function CTASection({ product }: Props) {
  return (
    <CTABand
      eyebrow="Request Samples"
      title="Hold the wood in your hands."
      body={`We'll send a curated, full-size sample of ${product.name} — graded, oiled, and labelled — anywhere in the world, at no cost to the trade.`}
      actions={[
        { label: "Request Sample", href: "/samples", solid: true },
        { label: "Contact Us", href: "/contact" },
      ]}
    />
  );
}
