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
        body="Complimentary full-size samples for architects, interior designers, builders, and homeowners. Experience the true color, texture, and craftsmanship of every collection before making your selection."
        actions={[
          { label: "Request a Sample", href: "/samples", solid: true },
          { label: "View Collections", href: "/products" },
        ]}
        backgroundImage="/image/about/sample.jpg"
      />
  );
}
