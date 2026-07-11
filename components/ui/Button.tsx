import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  solid?: boolean;
  className?: string;
}

export default function Button({ href, children, solid, className = "" }: Props) {
  const cls = ["btn", solid ? "btn--solid" : "", className].filter(Boolean).join(" ");
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
