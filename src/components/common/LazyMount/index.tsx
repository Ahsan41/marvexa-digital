"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";

type LazyMountProps = {
  children: ReactNode;
  /** Placeholder height before the island mounts (limits CLS) */
  minHeight?: string;
  rootMargin?: string;
  className?: string;
};

/**
 * Defers mounting heavy client islands until near the viewport (TBT / JS).
 * Dispatches `gravity:content-mounted` so desktop reveal/text-split can bind new nodes.
 */
const LazyMount = ({
  children,
  minHeight = "28em",
  rootMargin = "320px 0px",
  className = "",
}: LazyMountProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || active) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setActive(true);
        io.disconnect();
      },
      { rootMargin },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [active, rootMargin]);

  useEffect(() => {
    if (!active) return;

    const notify = () => {
      window.dispatchEvent(new CustomEvent("gravity:content-mounted"));
    };

    // Wait for children to paint, then let ScrollMotion bind text/scroll reveals.
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(notify);
    });

    return () => window.cancelAnimationFrame(id);
  }, [active]);

  const style: CSSProperties | undefined = active
    ? undefined
    : { minHeight, width: "100%" };

  return (
    <div ref={ref} className={className} style={style}>
      {active ? children : null}
    </div>
  );
};

export default LazyMount;
