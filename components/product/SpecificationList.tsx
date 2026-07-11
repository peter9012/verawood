import type { Product } from "@/types";

interface Props {
  product: Product;
}

export default function SpecificationList({ product }: Props) {
  const { specs } = product;
  const rows: [string, string][] = [
    ["Color", specs.tone],
    ["Grade", specs.grade],
    ["Wear Layer", specs.wear],
    ["Width", specs.width],
    ["Thickness", specs.thickness],
    ["Length", specs.length],
    ["Species", specs.species],
    ["Texture", specs.texture],
    ["Finish", specs.finish],
    ["Install Method", specs.installMethod],
    ["Warranty", specs.warranty],
  ];

  return (
    <dl className="spec-list" aria-label={`${product.name} technical specifications`}>
      {rows.map(([label, value]) => (
        <div className="spec-list__row" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
