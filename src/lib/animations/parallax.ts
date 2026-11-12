import { gsap, prefersReducedMotion, isDesktopMotionEnabled } from "./gsap";

type ParallaxOptions = {
  strength?: number;
};

/**
 * Subtle mouse parallax — desktop fine-pointer only.
 */
export function attachMouseParallax(
  root: HTMLElement,
  { strength = 18 }: ParallaxOptions = {},
) {
  if (prefersReducedMotion() || !isDesktopMotionEnabled()) {
    return () => undefined;
  }

  const layers = Array.from(
    root.querySelectorAll<HTMLElement>("[data-parallax-depth]"),
  );

  const onMove = (event: PointerEvent) => {
    const rect = root.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.parallaxDepth || 1);
      gsap.to(layer, {
        x: x * strength * depth,
        y: y * strength * depth,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  };

  const onLeave = () => {
    layers.forEach((layer) => {
      gsap.to(layer, {
        x: 0,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  };

  root.addEventListener("pointermove", onMove);
  root.addEventListener("pointerleave", onLeave);

  return () => {
    root.removeEventListener("pointermove", onMove);
    root.removeEventListener("pointerleave", onLeave);
    gsap.killTweensOf(layers);
  };
}
