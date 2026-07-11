import type { Product } from "@/types";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="arrivals">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
