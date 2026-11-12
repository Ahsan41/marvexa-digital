"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import {
  gsap,
  ScrollTrigger,
  registerGsapPlugins,
} from "@/lib/animations/gsap";
import "lenis/dist/lenis.css";

type SmoothScrollRootProps = {
  children: ReactNode;
};

function LenisGsapBridge() {
  const lenis = useLenis();

  useEffect(() => {
    registerGsapPlugins();
    if (!lenis) return;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  return null;
}

/** Pause Lenis while the mobile/drawer menu is open (class toggled by Header). */
function MenuLenisLock() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const sync = () => {
      if (document.documentElement.classList.contains("menu-open")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [lenis]);

  return null;
}

/**
 * Desktop-only smooth scroll — dynamically loaded so mobile never pays for Lenis.
 */
const SmoothScrollRoot = ({ children }: SmoothScrollRootProps) => {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      <LenisGsapBridge />
      <MenuLenisLock />
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollRoot;
