import type { Product } from "@/types";

interface Props {
  product: Product;
}

/**
 * Renders nothing until a product has real PDF files in /public — see
 * ProductDocument in types/index.ts. Add entries to a product's
 * `documents` array in lib/data/products.ts once files exist; no other
 * code needs to change. Rendered inline inside the Product Specifications
 * section (see ProductDetail.tsx) so it reads as the final spec row.
 */
export default function DocumentationList({ product }: Props) {
  if (!product.documents || product.documents.length === 0) return null;

  return (
    <div className="spec-docs">
      {product.documents.map((doc) => (
        <a
          key={doc.href}
          href={doc.href}
          target="_blank"
          rel="noopener noreferrer"
          className="spec-docs__row"
          aria-label={doc.ariaLabel ?? doc.label}
        >
          <span className="spec-docs__label">
            {doc.label}
            {doc.meta && <span className="spec-docs__meta">{doc.meta}</span>}
          </span>
          <span className="spec-docs__action">
            View PDF <span aria-hidden="true">↗</span>
          </span>
        </a>
      ))}
    </div>
  );
}
