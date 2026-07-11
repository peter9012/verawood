import type { Product } from "@/types";

interface Props {
  product: Product;
}

/**
 * Renders nothing until a product has real PDF files in /public — see
 * ProductDocument in types/index.ts. Add entries to a product's
 * `documents` array in lib/data/products.ts once files exist; no other
 * code needs to change.
 */
export default function DocumentationList({ product }: Props) {
  if (!product.documents || product.documents.length === 0) return null;

  return (
    <div className="pd-docs">
      <h2 className="pd-docs__heading">Documentation</h2>
      <ul className="pd-docs__list">
        {product.documents.map((doc) => (
          <li key={doc.href} className="pd-docs__row">
            <a
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download ${doc.label} for ${product.name} (opens PDF in a new tab)`}
            >
              <span>
                {doc.label} <span className="pd-docs__ext">.pdf</span>
              </span>
              <span aria-hidden="true" className="pd-docs__icon">
                ↓
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
