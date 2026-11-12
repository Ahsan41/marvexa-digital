/** Matches `$desktop` in styles/abstract/_variable.scss */
export const DESKTOP_MQ = "(min-width: 1200px)";

/** Desktop + fine pointer — Lenis, cursor, magnetic, scroll motion */
export const DESKTOP_MOTION_MQ =
  "(min-width: 1200px) and (hover: hover) and (pointer: fine)";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isFinePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

/**
 * Desktop-only motion gate: Lenis, scroll reveals, hover/magnetic polish.
 * iPad Pro / iPad / phones stay on native scroll with no GSAP scroll effects.
 */
export function isDesktopMotionEnabled(): boolean {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  return window.matchMedia(DESKTOP_MOTION_MQ).matches;
}

/** Width-only desktop gate for scroll reveals (>= 1200px). */
export function isDesktopViewport(): boolean {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  return window.matchMedia(DESKTOP_MQ).matches;
}
