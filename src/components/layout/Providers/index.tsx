"use client";

import { useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  prefersReducedMotion,
  DESKTOP_MQ,
  DESKTOP_MOTION_MQ,
} from "@/lib/animations/motionGate";
import { initScrollReveals } from "@/lib/animations/scrollReveal";
import { initImageReveals } from "@/lib/animations/imageReveal";

const SmoothScrollRoot = dynamic(() => import("./SmoothScrollRoot"), {
  ssr: false,
});
const CustomCursor = dynamic(
  () => import("@/components/common/CustomCursor"),
  { ssr: false },
);

type ProvidersProps = {
  children: ReactNode;
};

/**
 * Sync IntersectionObserver binder for .reveal-item / .image-reveal.
 * Text reveal lives on SectionHeading itself (TextRevealTitle).
 */
function RevealBinder({ pathname }: { pathname: string }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    document.documentElement.classList.add("js-motion");

    const cleanups: Array<() => void> = [];
    let debounceId = 0;

    const bind = () => {
      cleanups.push(initScrollReveals(), initImageReveals());
    };

    // Bind after paint so LazyMount / dynamic sections are in the DOM.
    const bootId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bind();
      });
    });

    const onContentMounted = () => {
      window.clearTimeout(debounceId);
      debounceId = window.setTimeout(() => bind(), 40);
    };

    window.addEventListener("gravity:content-mounted", onContentMounted);

    // Catch late DOM inserts even if the custom event was missed.
    const observer = new MutationObserver(() => {
      window.clearTimeout(debounceId);
      debounceId = window.setTimeout(() => bind(), 60);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Optional parallax (desktop only) — loaded async, does not block reveals.
    let parallaxCleanup: (() => void) | undefined;
    if (window.matchMedia(DESKTOP_MQ).matches) {
      void import("@/lib/animations/scrollParallax").then(
        ({ initScrollParallax }) => {
          parallaxCleanup = initScrollParallax();
        },
      );
    }

    return () => {
      cancelAnimationFrame(bootId);
      window.clearTimeout(debounceId);
      observer.disconnect();
      window.removeEventListener("gravity:content-mounted", onContentMounted);
      cleanups.forEach((fn) => fn());
      parallaxCleanup?.();
      document.documentElement.classList.remove("js-motion");
    };
  }, [pathname]);

  return null;
}

const Providers = ({ children }: ProvidersProps) => {
  const pathname = usePathname();
  const [smoothScroll, setSmoothScroll] = useState(false);
  const [revealMotion, setRevealMotion] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia(DESKTOP_MOTION_MQ);

    const sync = () => {
      const reduced = prefersReducedMotion();
      setSmoothScroll(motionMq.matches && !reduced);
      setRevealMotion(!reduced);
    };

    sync();
    motionMq.addEventListener("change", sync);
    return () => motionMq.removeEventListener("change", sync);
  }, []);

  const chrome = (
    <>
      {revealMotion ? <RevealBinder pathname={pathname} /> : null}
      {smoothScroll ? <CustomCursor /> : null}
      {children}
    </>
  );

  if (!smoothScroll) {
    return chrome;
  }

  return <SmoothScrollRoot>{chrome}</SmoothScrollRoot>;
};

export default Providers;
