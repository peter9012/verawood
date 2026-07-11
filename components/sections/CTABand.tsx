import type { CTAAction } from "@/types";
import Button from "@/components/ui/Button";

interface Props {
  eyebrow?: string;
  title: string;
  body?: string;
  actions: CTAAction[];
}

export default function CTABand({ eyebrow, title, body, actions }: Props) {
  return (
    <section className="section cta" aria-labelledby="cta-heading">
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
