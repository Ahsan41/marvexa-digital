import { prefersReducedMotion } from "./motionGate";

type ImageRevealOptions = {
  scope?: ParentNode | Document;
};

type WipeDir = "up" | "left" | "scale";

function resolveWipe(node: HTMLElement): WipeDir {
  const raw = (node.dataset.imageReveal || "up").toLowerCase();
  if (raw === "left" || raw === "scale") return raw;
  return "up";
}

/**
 * Image wipe via clip-path. Always paints hidden first, then reveals on IO.
 */
export function initImageReveals({ scope = document }: ImageRevealOptions = {}) {
  const nodes = Array.from(
    scope.querySelectorAll<HTMLElement>(".image-reveal, [data-image-reveal]"),
  ).filter((node) => node.dataset.imageRevealBound !== "1");

  if (prefersReducedMotion() || nodes.length === 0) {
    nodes.forEach((node) => {
      node.dataset.imageRevealVisible = "1";
    });
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const node = entry.target as HTMLElement;
        if (!entry.isIntersecting) return;
        node.dataset.imageRevealVisible = "1";
        observer.unobserve(node);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    },
  );

  nodes.forEach((node) => {
    node.dataset.imageRevealBound = "1";
    node.dataset.imageRevealVariant = resolveWipe(node);
    node.dataset.imageRevealReady = "1";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!node.isConnected) return;
        if (node.dataset.imageRevealVisible === "1") return;

        const rect = node.getBoundingClientRect();
        const inView =
          rect.top < window.innerHeight * 0.92 && rect.bottom > 40;

        if (inView) {
          node.dataset.imageRevealVisible = "1";
          return;
        }

        observer.observe(node);
      });
    });
  });

  return () => {
    observer.disconnect();
    nodes.forEach((node) => {
      delete node.dataset.imageRevealBound;
      delete node.dataset.imageRevealReady;
      delete node.dataset.imageRevealVisible;
      delete node.dataset.imageRevealVariant;
    });
  };
}
