"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import {
  prefersReducedMotion,
  isDesktopMotionEnabled,
} from "@/lib/animations/motionGate";
import style from "./index.module.scss";

type HeroMotionProps = {
  children: ReactNode;
};

/**
 * Desktop-only motion shell — keeps hero markup on the server for LCP.
 * GSAP loads asynchronously only when desktop motion is enabled.
 */
const HeroMotion = ({ children }: HeroMotionProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const host = rootRef.current;
    const root = host?.querySelector<HTMLElement>("[data-section='hero']");
    if (!root) return;

    if (prefersReducedMotion() || !isDesktopMotionEnabled()) {
      return;
    }

    let cancelled = false;
    const cleanups: Array<() => void> = [];

    const boot = async () => {
      const [{ gsap }, { attachMouseParallax }] = await Promise.all([
        import("@/lib/animations/gsap"),
        import("@/lib/animations/parallax"),
      ]);
      if (cancelled) return;

      const rings = root.querySelectorAll<HTMLElement>(`.${style.ring}`);
      const copyBits = root.querySelectorAll<HTMLElement>(
        `.${style.eyebrow}, .${style.titleLine}, .${style.desc}, .${style.actions}`,
      );
      const visual = root.querySelector<HTMLElement>(`.${style.visual}`);
      const titleLines = root.querySelectorAll<HTMLElement>(
        `.${style.titleLine}`,
      );

      titleLines.forEach((line) => {
        line.style.overflow = "hidden";
        const inner = line.firstElementChild as HTMLElement | null;
        if (!inner) {
          const wrap = document.createElement("span");
          wrap.className = style.titleMask;
          while (line.firstChild) wrap.appendChild(line.firstChild);
          line.appendChild(wrap);
        }
      });

      const maskedInners = root.querySelectorAll<HTMLElement>(
        `.${style.titleLine} > span, .${style.titleMask}`,
      );

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(
          root.querySelector(`.${style.eyebrow}`),
          { y: 28, duration: 0.7 },
          0,
        )
        .from(
          maskedInners,
          { yPercent: 110, duration: 1, stagger: 0.12 },
          0.08,
        )
        .from(
          root.querySelector(`.${style.desc}`),
          { y: 32, duration: 0.75 },
          0.35,
        )
        .from(
          root.querySelector(`.${style.actions}`),
          { y: 28, duration: 0.7 },
          0.48,
        )
        .from(
          visual,
          { scale: 0.92, duration: 1.15, ease: "power3.out" },
          0.15,
        );

      rings.forEach((ring, index) => {
        gsap.to(ring, {
          rotation: index % 2 === 0 ? 360 : -360,
          duration: 28 - index * 4,
          ease: "none",
          repeat: -1,
        });
      });

      const detachParallax = attachMouseParallax(root, { strength: 14 });

      cleanups.push(() => {
        intro.kill();
        detachParallax();
        gsap.killTweensOf(
          [...rings, ...copyBits, ...maskedInners, visual].filter(Boolean),
        );
        gsap.set(
          [...copyBits, ...maskedInners, visual].filter(Boolean),
          { clearProps: "transform" },
        );
      });
    };

    void boot();

    return () => {
      cancelled = true;
      cleanups.splice(0).forEach((fn) => fn());
    };
  }, []);

  return (
    <div ref={rootRef} className={style.motionRoot}>
      {children}
    </div>
  );
};

export default HeroMotion;
