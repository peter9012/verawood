"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  const hasThumbs = images.length > 1;

  const step = (delta: number) => {
    setActive((i) => (i + delta + images.length) % images.length);
  };

  return (
    <div
      className="pd-gallery"
      onKeyDown={(e) => {
        if (!hasThumbs) return;
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
    >
      <div className="pd-gallery__main">
        <Image
          key={images[active]}
          className="media"
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {hasThumbs && (
        <ul className="pd-gallery__thumbs" role="list">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                className={`pd-gallery__thumb${i === active ? " is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-current={i === active}
                aria-label={`Show image ${i + 1} of ${images.length} for ${alt}`}
              >
                <Image
                  className="media"
                  src={src}
                  alt=""
                  fill
                  sizes="90px"
                  style={{ objectFit: "cover" }}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
