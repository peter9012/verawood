"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_SLIDES = [
  "/image/hero/hero-01.webp",
  "/image/hero/hero-02.webp",
  "/image/hero/hero-03.webp",
  "/image/hero/hero-04.webp",
  "/image/hero/hero-05.webp",
  "/image/hero/hero-06.webp",
];

const FADE_MS = 1800;
const VISIBLE_MS = 7200;
const CYCLE_MS = VISIBLE_MS + FADE_MS;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__media">
        {HERO_SLIDES.map((src, i) => (
          <Image
            key={src}
            className={`media hero__slide${i === active ? " is-active" : ""}`}
            src={src}
            alt={i === 0 ? "Cinematic living room with European oak floor and full-height glazing" : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            style={
              {
                objectFit: "cover",
                objectPosition: "50% 58%",
                "--hero-fade": `${FADE_MS}ms`,
                "--hero-cycle": `${CYCLE_MS}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="hero__inner shell">
        <div className="hero__content">
          <h1 className="display">
            Timeless Materials.
            <br />
            Exceptional Spaces.
          </h1>
          <p className="lede">
            The foundation of every remarkable home starts with the surface you live on every day.
          </p>
          <Link className="btn hero-btn" href="#collections">
            Explore Collections
          </Link>
        </div>
      </div>

      <span className="scroll-cue" aria-hidden="true">
        Scroll <i />
      </span>
    </section>
  );
}
