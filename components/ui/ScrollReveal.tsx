"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Mounted once in the root layout. Activates scroll-reveal for every
 * .reveal element in the document, and re-initializes on every client-side
 * route change (see useScrollReveal for why that's necessary).
 */
export default function ScrollReveal() {
  useScrollReveal();
  return null;
}
