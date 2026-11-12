import { prefersReducedMotion } from "./gsap";

type TextRevealOptions = {
  scope?: ParentNode | Document;
};

/**
 * Split headings into masked word spans and reveal on scroll.
 * Desktop (>=1200px) only. Safe to re-call — skips already-bound nodes.
 * The returned cleanup kills triggers and restores original text so re-init works on route change.
 */
export function initTextReveals({ scope = document }: TextRevealOptions = {}) {
  const nodes = Array.from(
    scope.querySelectorAll<HTMLElement>("[data-text-reveal]"),
  ).filter((el) => el.dataset.textRevealBound !== "1");

  if (nodes.length === 0) {
    return () => undefined;
  }

  if (prefersReducedMotion()) {
    return () => undefined;
  }

  const boundNodes: HTMLElement[] = [];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (!entry.isIntersecting) return;
        el.dataset.textRevealVisible = "1";
        observer.unobserve(el);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    },
  );

  nodes.forEach((el) => {
    const text = el.textContent?.replace(/\s+/g, " ").trim() ?? "";
    if (!text) return;

    el.dataset.textRevealBound = "1";
    el.dataset.originalText = text;

    const parts = text.split(/(\s+)/);
    el.innerHTML = parts
      .map((part) => {
        if (/^\s+$/.test(part)) return part;
        return `<span class="tr-word"><span class="tr-word-inner">${part}</span></span>`;
      })
      .join("");

    el.classList.add("has-text-reveal");
    boundNodes.push(el);

    el.querySelectorAll<HTMLElement>(".tr-word-inner").forEach((inner, index) => {
      inner.style.transitionDelay = `${index * 0.02}s`;
    });

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88) {
      el.dataset.textRevealVisible = "1";
      return;
    }

    el.dataset.textRevealReady = "1";
    observer.observe(el);
  });

  return () => {
    observer.disconnect();
    boundNodes.forEach((el) => {
      const original = el.dataset.originalText;
      if (original != null) {
        el.textContent = original;
        delete el.dataset.originalText;
      }
      delete el.dataset.textRevealBound;
      delete el.dataset.textRevealReady;
      delete el.dataset.textRevealVisible;
      el.classList.remove("has-text-reveal");
    });
  };
}
