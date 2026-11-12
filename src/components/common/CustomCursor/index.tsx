"use client";

import { useEffect, useRef } from "react";
import {
  prefersReducedMotion,
  isDesktopMotionEnabled,
} from "@/lib/animations/motionGate";
import style from "./index.module.scss";

type CursorMode = "default" | "view" | "link" | "magnetic" | "drag";

const LABEL: Record<CursorMode, string> = {
  default: "",
  view: "VIEW",
  link: "",
  magnetic: "",
  drag: "DRAG",
};

/**
 * Desktop-only custom cursor (>=1200px + fine pointer).
 */
const CustomCursor = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const rafRef = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    const label = labelRef.current;
    if (!root || !label) return;

    const enable = isDesktopMotionEnabled() && !prefersReducedMotion();
    if (!enable) {
      root.hidden = true;
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    root.hidden = false;
    document.documentElement.classList.add("has-custom-cursor");

    const setMode = (mode: CursorMode, text?: string) => {
      root.dataset.mode = mode;
      label.textContent = text ?? LABEL[mode];
    };

    const onMove = (event: PointerEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      root.classList.add(style.visible);
    };

    const resolveMode = (el: Element | null): { mode: CursorMode; text?: string } => {
      const host = el?.closest?.("[data-cursor]") as HTMLElement | null;
      if (!host) return { mode: "default" };
      const raw = (host.dataset.cursor || "default").toLowerCase() as CursorMode;
      const text = host.dataset.cursorText;
      if (raw === "view" || raw === "link" || raw === "magnetic" || raw === "drag") {
        return { mode: raw, text };
      }
      return { mode: "default" };
    };

    const onOver = (event: PointerEvent) => {
      const { mode, text } = resolveMode(event.target as Element);
      setMode(mode, text);
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;
      root.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={style.cursor}
      data-mode="default"
      hidden
      aria-hidden
    >
      <span className={style.dot} />
      <span ref={labelRef} className={style.label} />
    </div>
  );
};

export default CustomCursor;
