import Image from "next/image";
import type { PageHeroProps } from "@/types";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";

export default function PageHero({ eyebrow, title, lede, imagePlaceholder, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero" aria-label={title}>
      {image ? (
        <Image
          className="media"
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <MediaPlaceholder caption={imagePlaceholder} />
      )}
      <div className="page-hero__inner shell">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display">{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
}
