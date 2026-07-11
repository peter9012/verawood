"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LEFT, NAV_RIGHT, NAV_MOBILE } from "@/lib/data/nav";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const mastheadRef = useRef<HTMLElement>(null);

  // Become solid when the hero/page-hero scrolls out of view
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero, .page-hero");
    if (!hero) { setSolid(true); return; }

    const io = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  // Close nav when route changes
  useEffect(() => { setNavOpen(false); }, [pathname]);

  // Lock body scroll while nav is open
  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  // Escape key closes nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setNavOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const mastheadClass = [
    "masthead",
    solid ? "solid" : "",
    navOpen ? "nav-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={mastheadClass} ref={mastheadRef}>
        {/* Hamburger */}
        <button
          className="menu-btn"
          type="button"
          aria-label={navOpen ? "Close menu" : "Open menu"}
          aria-expanded={navOpen}
          aria-controls="mobileNav"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Left nav */}
        <nav className="nav nav--left" aria-label="Primary navigation">
          {NAV_LEFT.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Brandmark */}
        <Link className="brandmark" href="/" aria-label="Verawood — home">
          <Image
            className="brandmark__icon"
            src="/verawood-logo-white-4000.png"
            alt=""
            aria-hidden
            width={64}
            height={64}
            priority
          />
          <span className="brandmark__text">VERAWOOD</span>
        </Link>

        {/* Right nav */}
        <nav className="nav nav--right" aria-label="Secondary navigation">
          <span className="nav-set">
            {NAV_RIGHT.map(({ label, href }) => (
              <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
                {label}
              </Link>
            ))}
          </span>
          <Link className="samples" href="/samples">
            <span>Request Samples</span>
          </Link>
        </nav>
      </header>

      {/* Mobile nav overlay */}
      <nav
        className={`mobile-nav${navOpen ? " open" : ""}`}
        id="mobileNav"
        aria-hidden={!navOpen}
        aria-label="Mobile navigation"
      >
        <ul className="mobile-nav__list">
          {NAV_MOBILE.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setNavOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__foot">
          <Link className="btn" href="/samples" onClick={() => setNavOpen(false)}>
            Request Samples
          </Link>
        </div>
      </nav>
    </>
  );
}
