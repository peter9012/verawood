"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Activates every .reveal element on the current route.
 *
 * The App Router keeps the root layout (and this hook's caller) mounted
 * across client-side navigations — only `children` unmounts/remounts. An
 * effect with no dependency on the route would therefore only ever run once,
 * on the very first page load, and silently skip every page reached via
 * <Link>. Depending on `pathname` forces a fresh query + observe pass on
 * every navigation.
 */
export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Marks JS as initialized. .reveal is only hidden by CSS once this is
    // present, so content stays visible by default if JS never runs.
    document.documentElement.classList.add("reveal-ready");

    const reveals = document.querySelectorAll<HTMLElement>(".reveal, [data-reveal]");
    const reduces = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduces || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    reveals.forEach((el) => {
      el.classList.remove("in");
      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (alreadyVisible) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });

    // Safety net for elements that finish laying out (images, fonts, async
    // content) just after this pass, before they'd otherwise be observed.
    const refreshTimer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.in), [data-reveal]:not(.in)").forEach((el) => io.observe(el));
    }, 150);

    return () => {
      window.clearTimeout(refreshTimer);
      io.disconnect();
    };
  }, [pathname]);
}
