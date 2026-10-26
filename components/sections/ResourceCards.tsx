import Image from "next/image";
import type { Resource } from "@/types";
import SectionHeader from "@/components/sections/SectionHeader";
import LinkUnderline from "@/components/ui/LinkUnderline";
import PdfPreviewButton from "@/components/ui/PdfPreviewButton";

interface Props {
  eyebrow: string;
  title: string;
  lede?: string;
  resources: Resource[];
}

export default function ResourceCards({ eyebrow, title, lede, resources }: Props) {
  return (
    <section className="section resources" id="resources" aria-labelledby="resources-heading">
      <div className="shell">
        <SectionHeader id="resources-heading" eyebrow={eyebrow} title={title} />
        {lede && <p className="resources__lede reveal">{lede}</p>}

        <ul className="resources__grid">
          {resources.map((r, i) => (
            <li key={r.id} className="resource-card reveal" data-delay={i > 0 ? i : undefined}>
              <div className="resource-card__media">
                <Image
                  className="media"
                  src={r.image}
                  alt={r.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="resource-card__body">
                <h3 className="resource-card__title">{r.title}</h3>
                <p className="resource-card__desc">{r.description}</p>
                <ResourceAction action={r.action} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ResourceAction({ action }: { action: Resource["action"] }) {
  const className = "link-underline resource-card__link";
  const pdfLabel = (
    <>
      {action.label} <span className="resource-card__fmt">PDF</span> <span className="arr">→</span>
    </>
  );

  switch (action.type) {
    case "link":
      return (
        <LinkUnderline href={action.href} className="resource-card__link">
          {action.label}
        </LinkUnderline>
      );
    case "pdf":
      return (
        <a
          className={className}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={action.ariaLabel ?? action.label}
        >
          {pdfLabel}
        </a>
      );
    case "pdf-preview":
      return (
        <PdfPreviewButton
          className={className}
          title={action.previewTitle}
          src={action.href}
          downloadName={action.downloadName}
        >
          {pdfLabel}
        </PdfPreviewButton>
      );
  }
}
