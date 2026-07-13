import Image from "next/image";
import type { CTAAction } from "@/types";
import Button from "@/components/ui/Button";

interface Props {
  eyebrow?: string;
  title: string;
  body?: string;
  actions: CTAAction[];
  /** Public path to a photo rendered full-bleed behind the content, with a dark overlay for legibility */
  backgroundImage?: string;
}

export default function CTABand({ eyebrow, title, body, actions, backgroundImage }: Props) {
  return (
    <section className="section cta" aria-labelledby="cta-heading">
      {backgroundImage && (
        <>
          <Image className="media" src={backgroundImage} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div className="cta__scrim" aria-hidden="true" />
        </>
      )}
      <div className="shell">
        {eyebrow && (
          <span className="eyebrow no-rule cta__eyebrow reveal">{eyebrow}</span>
        )}
        <h2 id="cta-heading" className="reveal" data-delay="1">
          {title}
        </h2>
        {body && (
          <p className="reveal" data-delay="2">
            {body}
          </p>
        )}
        <div className="cta__actions reveal" data-delay="3">
          {actions.map(({ label, href, solid }) => (
            <Button key={href} href={href} solid={solid}>
              {label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
