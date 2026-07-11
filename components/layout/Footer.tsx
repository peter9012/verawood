import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/data/nav";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <Image
              className="footer__logo"
              src="/verawood-horiz.png"
              alt="Verawood"
              width={180}
              height={46}
            />
            <p>
              European hardwood floors for architects, designers, and the homes they imagine.
              Piedmont &amp; Burgundy, since 1974.
            </p>
            <NewsletterForm />
          </div>

          <div className="footer__col">
            <h5>Explore</h5>
            <ul>
              {FOOTER_LINKS.explore.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h5>Company</h5>
            <ul>
              {FOOTER_LINKS.company.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h5>Trade</h5>
            <ul>
              {FOOTER_LINKS.trade.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Verawood Atelier</span>
          <div className="legal">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            {/* <Link href="#">Trade Login</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
