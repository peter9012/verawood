import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/collections/${product.id}`}
      className={`arrival${product.isFeature ? " arrival--feature" : ""} reveal`}
      data-delay={product.id === "lume" || product.id === "miele" || product.id === "noce" || product.id === "avena" ? "1" : undefined}
      aria-label={`View ${product.name} — product details`}
    >
      <div className="arrival__media">
        {product.image ? (
          <Image
            className="media"
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <MediaPlaceholder caption={product.imagePlaceholder} />
        )}
      </div>
      <div className="arrival__scrim" aria-hidden="true" />
      <div className="arrival__top">
        {/* {product.isNew && <span className="arrival__badge">New</span>} */}
        <h3 className="arrival__name">{product.name}</h3>
        {/* <span className="arrival__type">{product.type}</span> */}
      </div>
      {/* <div className="arrival__foot">
        <div className="arrival__spec">
          <span>European White Oak</span>
          <span>
            {product.specs.finish.includes("Wire") || product.specs.tone === "Natural" || product.specs.tone === "Warm" || product.specs.tone === "Smoked" || product.specs.tone === "Dark"
              ? "Wire Brushed"
              : "Brushed"}
          </span>
          <span>
            {product.specs.width.startsWith("9") ? '9.5"' : '7.5"'} Wide Plank
          </span>
        </div>
        <span className="arrival__cta">
          Explore <span className="arr">→</span>
        </span>
      </div> */}
    </Link>
  );
}
