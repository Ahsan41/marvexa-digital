"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/animations/motionGate";

type TextRevealTitleProps = {
  id: string;
  title: string;
  className?: string;
  /** When false, render plain title with no split/reveal */
  reveal?: boolean;
};

function getInitialReduced() {
  if (typeof window === "undefined") return false;
  return prefersReducedMotion();
}

/**
 * Self-contained word-mask reveal. Observes itself when mounted —
 * works with LazyMount, route changes, and Lenis without a global binder.
 */
const TextRevealTitle = ({
  id,
  title,
  className = "",
  reveal = true,
}: TextRevealTitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [reduced] = useState(getInitialReduced);
  const [ready] = useState(() => Boolean(reveal));
  const [visible, setVisible] = useState(() => !reveal || getInitialReduced());

  useLayoutEffect(() => {
    if (reveal && !prefersReducedMotion()) {
      document.documentElement.classList.add("js-motion");
    }
  }, [reveal]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !reveal) return;

    // Reduced motion: initial state already shows the title — no setState needed.
    if (prefersReducedMotion() || reduced) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const show = () => {
      if (cancelled) return;
      setVisible(true);
    };

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cancelled) return;

        observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (!entry?.isIntersecting) return;
            show();
            observer?.disconnect();
          },
          {
            root: null,
            rootMargin: "0px 0px -8% 0px",
            threshold: 0.2,
          },
        );

        observer.observe(el);

        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          show();
          observer.disconnect();
        }
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [title, reveal, reduced]);

  const parts = useMemo(
    () => title.replace(/\s+/g, " ").trim().split(/(\s+)/),
    [title],
  );

  const wordNodes = useMemo(() => {
    return parts.map((part, i) => {
      if (/^\s+$/.test(part)) {
        return <span key={`s-${i}`}>{part}</span>;
      }
      const wordIndex = parts
        .slice(0, i)
        .filter((p) => !/^\s+$/.test(p)).length;
      const delay = wordIndex * 0.02;
      return (
        <span className="tr-word" key={`w-${i}`}>
          <span
            className="tr-word-inner"
            style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
          >
            {part}
          </span>
        </span>
      );
    });
  }, [parts, visible]);

  if (!reveal) {
    return (
      <h2 id={id} className={className}>
        {title}
      </h2>
    );
  }

  return (
    <h2
      ref={ref}
      id={id}
      className={`has-text-reveal ${className}`.trim()}
      data-text-reveal=""
      data-text-reveal-ready={ready ? "1" : undefined}
      data-text-reveal-visible={visible ? "1" : undefined}
    >
      {wordNodes}
    </h2>
  );
};

export default TextRevealTitle;
