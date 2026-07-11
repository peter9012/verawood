import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";
import SectionHeader from "@/components/sections/SectionHeader";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";

interface Props {
  products: Product[];
}

export default function RelatedProducts({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <section className="section tone-compare" style={{ background: "var(--paper-deep)" }} aria-label="Compare tones">
      <div className="shell">
        <SectionHeader eyebrow="Compare Tones" title="See it in another light." linkHref="/products" linkLabel="View all boards" />
        <div className="tone-row">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/collections/${product.id}`}
              className="tone-card reveal"
              aria-label={`View ${product.name} — product details`}
            >
              <div className="tone-card__media">
                {product.image ? (
                  <Image
                    className="media"
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 700px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <MediaPlaceholder caption={product.imagePlaceholder} />
                )}
              </div>
              <span className="tone-card__name">{product.name}</span>
              <span className="tone-card__tone">{product.specs.tone}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
