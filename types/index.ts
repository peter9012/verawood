// ─── Product ─────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  type: string;
  isNew?: boolean;
  isFeature?: boolean;
  specs: {
    species: string;
    width: string;
    length: string;
    thickness: string;
    construction: string;
    finish: string;
    texture: string;
    grade: string;
    installMethod: string;
    warranty: string;
    tone: ProductTone;
    wear: string;
  };
  /** Image placeholder description (replace with real src when available) */
  imagePlaceholder: string;
  /** Public path to the real catalog photo, if available */
  image?: string;
  /** Full gallery, in display order — first is primary. Falls back to [image] when unset. */
  images?: string[];
  /** Standardized room/flat/grain/profile gallery for ProductGallery. Falls back to [images]/[image] when unset. */
  gallery?: ProductGalleryImage[];
  /** One or two sentences of editorial copy for the product-detail page */
  description?: string;
  /** Downloadable spec/install/warranty PDFs — only set once real files exist in /public */
  documents?: ProductDocument[];
}

export interface ProductDocument {
  label: string;
  /** Public path to the PDF */
  href: string;
}

// ─── Product gallery ─────────────────────────────────────────────────────────

export type ProductGalleryImageType = "room" | "flat" | "grain" | "profile";

export interface ProductGalleryImage {
  type: ProductGalleryImageType;
  src: string;
  alt: string;
  label: string;
  fit: "cover" | "contain";
}

export type ProductTone =
  | "Budapest"
  | "Oxford"
  | "Valencia"
  | "Lancaster"
  | "Brussels"
  | "Oslo"
  | "Athens"
  | "Bristol";

// ─── Project / Gallery ───────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  caption: string;
  imagePlaceholder: string;
  /** Optional CTA link href */
  href?: string;
  /** Optional CTA link label */
  linkLabel?: string;
  /** Public path to the real project photo, if available */
  image?: string;
}

// ─── Collection ──────────────────────────────────────────────────────────────

export interface Collection {
  id: string;
  title: string;
  description: string;
  imagePlaceholder: string;
  href: string;
  linkLabel: string;
}

// ─── Craft step ──────────────────────────────────────────────────────────────

export interface CraftStep {
  number: string;
  title: string;
  description: string;
}

// ─── CTA Band ────────────────────────────────────────────────────────────────

export interface CTAAction {
  label: string;
  href: string;
  solid?: boolean;
}

// ─── Page hero ───────────────────────────────────────────────────────────────

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  /** Required only as a fallback caption while no real photo/video exists yet */
  imagePlaceholder?: string;
  /** Public path to a real photo — takes priority over imagePlaceholder when set */
  image?: string;
  imageAlt?: string;
  /** Public path to a video file — takes priority over image/imagePlaceholder when set */
  video?: string;
}

// ─── Certification ───────────────────────────────────────────────────────────

export interface Certification {
  id: string;
  title: string;
  /** Body copy, one paragraph per entry */
  body: string[];
  /** "confirmed" once VERAWOOD holds current documentation; "draft" otherwise */
  status: "confirmed" | "draft";
  /** Shown in place of a confirmed claim while status is "draft" */
  pendingNote?: string;
  /** Public path to a certificate PDF — only set once a real, current file exists */
  certificateHref?: string;
  certificateLabel?: string;
}
