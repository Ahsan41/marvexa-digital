import { gsap, prefersReducedMotion, isDesktopMotionEnabled } from "./gsap";

type MagneticOptions = {
  strength?: number;
};

/**
 * Subtle magnetic pull for CTA elements — desktop fine-pointer only.
 */
export function attachMagnetic(
  element: HTMLElement,
  { strength = 0.28 }: MagneticOptions = {},
) {
  if (prefersReducedMotion() || !isDesktopMotionEnabled()) {
    return () => undefined;
  }

  const onMove = (event: PointerEvent) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const onLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.65,
      ease: "elastic.out(1, 0.45)",
      overwrite: "auto",
    });
  };

  element.addEventListener("pointermove", onMove);
  element.addEventListener("pointerleave", onLeave);

  return () => {
    element.removeEventListener("pointermove", onMove);
    element.removeEventListener("pointerleave", onLeave);
    gsap.killTweensOf(element);
    gsap.set(element, { x: 0, y: 0 });
  };
}
