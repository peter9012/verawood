import Image from "next/image";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";

interface Props {
  imagePlaceholder: string;
  /** Public path to a real photo — takes priority over imagePlaceholder when set */
  image?: string;
  imageAlt?: string;
  /** If true, image appears on the right */
  reversed?: boolean;
  /** Optional background override (e.g. var(--paper-deep)) */
  background?: string;
  children: React.ReactNode;
}

export default function CraftGrid({ imagePlaceholder, image, imageAlt, reversed, background, children }: Props) {
  const gridStyle = reversed
    ? { gridTemplateColumns: "0.95fr 1.05fr" }
    : undefined;

  const media = (
    <div className="craft__media reveal">
      {image ? (
        <Image className="media" src={image} alt={imageAlt ?? ""} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
      ) : (
        <MediaPlaceholder caption={imagePlaceholder} />
      )}
    </div>
  );

  return (
    <section
      className="section craft"
      style={background ? { background } : undefined}
    >
      <div className="shell">
        <div className="craft__grid" style={gridStyle}>
          {reversed ? (
            <>
              <div className="craft__body">{children}</div>
              {media}
            </>
          ) : (
            <>
              {media}
              <div className="craft__body">{children}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
