import { prefersReducedMotion } from "./motionGate";

type RevealOptions = {
  scope?: ParentNode | Document;
};

type RevealVariant = "up" | "left" | "right" | "scale" | "rise";

function resolveVariant(el: HTMLElement): RevealVariant {
  const raw = (el.dataset.reveal || el.dataset.revealItem || "up").toLowerCase();
  if (raw === "left" || raw === "right" || raw === "scale" || raw === "rise") {
    return raw;
  }
  return "up";
}

/**
 * Always paint hidden (ready) first, then flip visible on a later frame / IO.
 * Skipping ready was why LazyMount sections never animated.
 */
function armReveal(
  el: HTMLElement,
  observer: IntersectionObserver,
  readyKey: "revealReady" | "imageRevealReady" | "textRevealReady",
  visibleKey: "revealVisible" | "imageRevealVisible" | "textRevealVisible",
) {
  el.dataset[readyKey] = "1";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!el.isConnected) return;
      if (el.dataset[visibleKey] === "1") return;

      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.92 && rect.bottom > 40;

      if (inView) {
        el.dataset[visibleKey] = "1";
        return;
      }

      observer.observe(el);
    });
  });
}

/**
 * Scroll-driven reveals for `.reveal-item` / `[data-reveal-item]`.
 * Sync + IntersectionObserver. Safe to re-call for LazyMount.
 */
export function initScrollReveals({ scope = document }: RevealOptions = {}) {
  const allItems = Array.from(
    scope.querySelectorAll<HTMLElement>(".reveal-item, [data-reveal-item]"),
  ).filter(
    (el) =>
      el.dataset.revealBound !== "1" &&
      !el.classList.contains("image-reveal") &&
      !el.hasAttribute("data-image-reveal") &&
      !el.hasAttribute("data-text-reveal"),
  );

  if (prefersReducedMotion() || allItems.length === 0) {
    allItems.forEach((el) => {
      el.dataset.revealVisible = "1";
    });
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (!entry.isIntersecting) return;
        el.dataset.revealVisible = "1";
        observer.unobserve(el);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.15,
    },
  );

  allItems.forEach((el) => {
    el.dataset.revealBound = "1";
    el.dataset.revealVariant = resolveVariant(el);
    armReveal(el, observer, "revealReady", "revealVisible");
  });

  return () => {
    observer.disconnect();
    allItems.forEach((el) => {
      delete el.dataset.revealBound;
      delete el.dataset.revealReady;
      delete el.dataset.revealVisible;
      delete el.dataset.revealVariant;
    });
  };
}
