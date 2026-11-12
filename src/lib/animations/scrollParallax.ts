import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  registerGsapPlugins,
  isDesktopViewport,
  isFinePointer,
} from "./gsap";

type ScrollParallaxOptions = {
  scope?: ParentNode | Document;
};

/**
 * Scrubbed scroll parallax for `[data-speed]`.
 * Desktop fine-pointer only.
 */
export function initScrollParallax({ scope = document }: ScrollParallaxOptions = {}) {
  registerGsapPlugins();

  const nodes = Array.from(scope.querySelectorAll<HTMLElement>("[data-speed]"));

  if (
    prefersReducedMotion() ||
    !isDesktopViewport() ||
    !isFinePointer() ||
    nodes.length === 0
  ) {
    return () => undefined;
  }

  const triggers: ScrollTrigger[] = [];

  nodes.forEach((el) => {
    const speed = Number(el.dataset.speed || 0);
    if (!Number.isFinite(speed) || speed === 0) return;

    const y = speed * -40;

    const tween = gsap.to(el, {
      y,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement ?? el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
  });

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => {
    triggers.forEach((t) => t.kill());
    nodes.forEach((el) => gsap.set(el, { clearProps: "transform" }));
  };
}
