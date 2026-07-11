import LinkUnderline from "@/components/ui/LinkUnderline";

interface Props {
  eyebrow: string;
  title: string;
  linkHref?: string;
  linkLabel?: string;
}

export default function SectionHeader({ eyebrow, title, linkHref, linkLabel }: Props) {
  return (
    <div className="sec-head reveal">
      <h2 className="sec-head__title">
        <span className="eyebrow">{eyebrow}</span>
        {title}
      </h2>
      {linkHref && linkLabel && (
        <LinkUnderline href={linkHref}>{linkLabel}</LinkUnderline>
      )}
    </div>
  );
}
