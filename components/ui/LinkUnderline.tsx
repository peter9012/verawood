import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkUnderline({ href, children, className = "" }: Props) {
  return (
    <Link href={href} className={`link-underline${className ? ` ${className}` : ""}`}>
      {children} <span className="arr">→</span>
    </Link>
  );
}
