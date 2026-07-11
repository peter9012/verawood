import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/product/ProductDetail";
import { PRODUCTS } from "@/lib/data/products";
import { SITE_URL, OG_IMAGE } from "@/lib/siteConfig";
import type { Product } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.id }));
}

function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const description =
    product.description ??
    `${product.name} — ${product.specs.tone.toLowerCase()}-tone European White Oak, ${product.specs.width} wide, engineered and finished by hand.`;

  return {
    title: product.name,
    description,
    alternates: { canonical: `${SITE_URL}/collections/${product.id}` },
    openGraph: {
      title: `${product.name} — VERAWOOD Hardwood Flooring`,
      description,
      url: `${SITE_URL}/collections/${product.id}`,
      images: [{ url: product.image ? `${SITE_URL}${product.image}` : OG_IMAGE }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
