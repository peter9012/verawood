"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ProductGalleryImage } from "@/types";

interface ProductGalleryProps {
  images: ProductGalleryImage[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const initialIndex = Math.max(
    images.findIndex((img) => img.type === "room"),
    0
  );
  const [active, setActive] = useState(initialIndex);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const mainRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const hasMultiple = images.length > 1;
  const current = images[active];

  const step = (delta: number) => {
    setActive((i) => (i + delta + images.length) % images.length);
  };

  useEffect(() => {
    if (wasOpen.current && !lightboxOpen) {
      mainRef.current?.focus();
    }
    wasOpen.current = lightboxOpen;
  }, [lightboxOpen]);

  if (images.length === 0) return null;

  return (
    <div className="product-gallery">
      <button
        type="button"
        ref={mainRef}
        className="product-gallery__main"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Open full-size ${current.label.toLowerCase()} image of ${productName}`}
      >
        <Image
          key={current.src}
          className="product-gallery__main-img"
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
          style={{ objectFit: current.fit }}
        />
      </button>

      {hasMultiple && (
        <ul className="product-gallery__thumbs" role="list">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                className={`product-gallery__thumb${i === active ? " is-active" : ""}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className="product-gallery__thumb-frame">
                  <Image
                    className="product-gallery__thumb-img"
                    src={img.src}
                    alt=""
                    fill
                    sizes="120px"
                    style={{ objectFit: img.fit }}
                  />
                </span>
                <span className="product-gallery__thumb-label">{img.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {lightboxOpen && (
        <Lightbox
          images={images}
          active={active}
          productName={productName}
          hasMultiple={hasMultiple}
          onClose={() => setLightboxOpen(false)}
          onStep={step}
        />
      )}
    </div>
  );
}

interface LightboxProps {
  images: ProductGalleryImage[];
  active: number;
  productName: string;
  hasMultiple: boolean;
  onClose: () => void;
  onStep: (delta: number) => void;
}

function Lightbox({ images, active, productName, hasMultiple, onClose, onStep }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const current = images[active];
  const prevLabel = images[(active - 1 + images.length) % images.length].label;
  const nextLabel = images[(active + 1) % images.length].label;

  useEffect(() => {
    closeRef.current?.focus();
    document.body.classList.add("lightbox-open");
    return () => document.body.classList.remove("lightbox-open");
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowRight") onStep(1);
      if (hasMultiple && e.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [hasMultiple, onClose, onStep]);

  const trapFocus = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusables = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
    if (!focusables || focusables.length === 0) return;
    const list = Array.from(focusables);
    const first = list[0];
    const last = list[list.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className="product-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${productName} — ${current.label} image, enlarged`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={trapFocus}
    >
      <div className="product-lightbox__inner" ref={dialogRef}>
        <button
          type="button"
          ref={closeRef}
          className="product-lightbox__close"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          ✕
        </button>

        {hasMultiple && (
          <button
            type="button"
            className="product-lightbox__nav product-lightbox__nav--prev"
            onClick={() => onStep(-1)}
            aria-label={`Previous image: ${prevLabel}`}
          >
            ←
          </button>
        )}

        <figure className="product-lightbox__figure">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
            priority
          />
          <figcaption className="product-lightbox__label">{current.label}</figcaption>
        </figure>

        {hasMultiple && (
          <button
            type="button"
            className="product-lightbox__nav product-lightbox__nav--next"
            onClick={() => onStep(1)}
            aria-label={`Next image: ${nextLabel}`}
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
