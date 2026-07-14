import Link from "next/link";
import type { Product } from "@/types";
import { PRODUCTS } from "@/lib/data/products";
import CraftGrid from "@/components/sections/CraftGrid";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import ImageGallery from "./ImageGallery";
import ProductGallery from "./ProductGallery";
import ProductInformation from "./ProductInformation";
import SpecificationList from "./SpecificationList";
import DocumentationList from "./DocumentationList";
import RelatedProducts from "./RelatedProducts";
import CTASection from "./CTASection";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const images = product.images ?? (product.image ? [product.image] : []);
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      {/* Hero: gallery + product information */}
      <section className="pd-hero" aria-label={`${product.name} overview`}>
        <div className="shell">
          <Link href="/collections" className="pd-back">
            <span aria-hidden="true">←</span> All Collections
          </Link>

          <div className="pd-hero__grid">
            {product.gallery && product.gallery.length > 0 ? (
              <ProductGallery images={product.gallery} productName={product.name} />
            ) : images.length > 0 ? (
              <ImageGallery images={images} alt={product.name} />
            ) : (
              <div className="pd-gallery">
                <div className="pd-gallery__main">
                  <MediaPlaceholder caption={product.imagePlaceholder} />
                </div>
              </div>
            )}
            <ProductInformation product={product} />
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section pd-specs" aria-labelledby="pd-specs-heading">
        <div className="shell">
          <h2 id="pd-specs-heading" className="pd-specs__heading">
            Product Specifications
          </h2>
          <SpecificationList product={product} />
        </div>
      </section>

      {/* Natural Color Variation */}
      <CraftGrid
        image={product.image}
        imageAlt={`${product.name} — close detail of grain and colour variation`}
        imagePlaceholder={product.imagePlaceholder}
        background="var(--paper-deep)"
      >
        <span className="eyebrow no-rule">Good to Know</span>
        <h2>Natural Color Variation</h2>
        <p>
          This collection has color tones ranging from light to dark. Wood is a natural product with
          inherent color, texture, and grain that may not be fully represented in this sample or room
          scene. Actual color and grain pattern may vary — please consult your sales representative.
        </p>
      </CraftGrid>

      {/* Certifications */}
      <section className="section pd-certs" aria-labelledby="pd-certs-heading">
        <div className="shell">
          <h2 id="pd-certs-heading" className="pd-certs__heading">
            Certifications
          </h2>
          <ul className="pd-certs__list">
            <li>
              <span aria-hidden="true">✓</span> TSCA Title VI Compliant
            </li>
            <li>
              <span aria-hidden="true">✓</span> CARB Phase 2 Compliant
            </li>
          </ul>
          <Link href="/about#certs" className="link-underline pd-certs__link">
            Full compliance details <span className="arr">→</span>
          </Link>
        </div>
      </section>

      <DocumentationList product={product} />

      <RelatedProducts products={related} />

      <CTASection product={product} />
    </>
  );
}
