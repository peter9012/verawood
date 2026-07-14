import fs from "node:fs";
import path from "node:path";
import type { ProductGalleryImage, ProductGalleryImageType } from "@/types";

// Server-only: reads public/image/product/<name>/ at module load (build/dev
// server) to verify which of the standardized views actually exist on disk.
// Never import this from a "use client" component.

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];
const PRODUCT_IMAGE_ROOT = path.join(process.cwd(), "public", "image", "product");

const NUMBERED_TYPES: {
  type: ProductGalleryImageType;
  n: 1 | 2 | 3;
  label: string;
  fit: "cover" | "contain";
  alt: (name: string) => string;
}[] = [
  { type: "flat", n: 1, label: "Flat", fit: "contain", alt: (name) => `Top-down flat view of ${name} hardwood flooring` },
  { type: "grain", n: 2, label: "Grain", fit: "cover", alt: (name) => `Close-up of ${name} wood grain and surface texture` },
  { type: "profile", n: 3, label: "Profile", fit: "contain", alt: (name) => `${name} engineered hardwood edge and construction profile` },
];

const ROOM_TYPE = {
  label: "Room",
  fit: "cover" as const,
  alt: (name: string) => `Luxury interior featuring ${name} engineered hardwood flooring`,
};

/** Missing-asset notices collected as galleries are built, for reporting after a build/dev run. */
export const PRODUCT_GALLERY_WARNINGS: string[] = [];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Builds a product's standardized room/flat/grain/profile gallery from files
 * that actually exist in public/image/product/<name>/, following the
 * [Name]_Design01 / [Name]01 / [Name]02 / [Name]03 convention. Missing views
 * are omitted (never referenced) rather than producing a broken path.
 */
export function buildProductGallery(name: string): ProductGalleryImage[] {
  const dir = path.join(PRODUCT_IMAGE_ROOT, name);
  let entries: string[];
  try {
    entries = fs.readdirSync(dir);
  } catch {
    PRODUCT_GALLERY_WARNINGS.push(`${name}: no image folder found at public/image/product/${name}/`);
    return [];
  }

  const extPattern = IMAGE_EXTENSIONS.join("|");
  const escaped = escapeRegExp(name);
  const extRegex = new RegExp(`\\.(${extPattern})$`, "i");

  // Room scene: [Name]_design, [Name]_design01, [Name]_Design02, etc.
  // (case-insensitive on "_design"). Design01 (or the lowest-numbered /
  // unnumbered file) becomes the primary Room Scene.
  const roomRegex = new RegExp(`^${escaped}_design(\\d*)$`, "i");
  const roomFile = entries
    .filter((file) => extRegex.test(file))
    .map((file) => {
      const stem = file.slice(0, file.lastIndexOf("."));
      const match = stem.match(roomRegex);
      return match ? { file, order: match[1] ? parseInt(match[1], 10) : 0 } : null;
    })
    .filter((m): m is { file: string; order: number } => m !== null)
    .sort((a, b) => a.order - b.order)[0]?.file;

  const gallery: ProductGalleryImage[] = [];

  if (roomFile) {
    gallery.push({
      type: "room",
      src: `/image/product/${name}/${roomFile}`,
      alt: ROOM_TYPE.alt(name),
      label: ROOM_TYPE.label,
      fit: ROOM_TYPE.fit,
    });
  } else {
    PRODUCT_GALLERY_WARNINGS.push(`${name}: missing room image (expected ${name}_Design01.[jpg|jpeg|png|webp])`);
  }

  for (const spec of NUMBERED_TYPES) {
    const regex = new RegExp(`^${escaped}0${spec.n}\\.(${extPattern})$`, "i");
    const file = entries.find((entry) => regex.test(entry));
    if (file) {
      gallery.push({
        type: spec.type,
        src: `/image/product/${name}/${file}`,
        alt: spec.alt(name),
        label: spec.label,
        fit: spec.fit,
      });
    } else {
      PRODUCT_GALLERY_WARNINGS.push(`${name}: missing ${spec.type} image (expected ${name}0${spec.n}.[jpg|jpeg|png|webp])`);
    }
  }

  return gallery;
}
