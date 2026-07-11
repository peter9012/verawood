import type { Product } from "@/types";
import Button from "@/components/ui/Button";

interface Props {
  product: Product;
}

export default function ProductInformation({ product }: Props) {
  return (
    <div className="pd-info">
      <span className="eyebrow no-rule">Collections</span>
      <h1 className="display">{product.name}</h1>
      {product.description && <p className="pd-info__desc">{product.description}</p>}
      <div className="pd-info__actions">
        <Button href="/samples" solid>
          Request Sample
        </Button>
        <Button href="/contact">Contact Us</Button>
      </div>
    </div>
  );
}
