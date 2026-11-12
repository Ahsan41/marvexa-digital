"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Button, { type ButtonProps } from "@/components/common/Button";

type MagneticButtonProps = ButtonProps & {
  strength?: number;
  magnetic?: boolean;
  children: ReactNode;
};

/**
 * Button with optional magnetic desktop interaction.
 * GSAP magnetic code is loaded on demand — not in the critical path.
 */
const MagneticButton = ({
  strength = 0.28,
  magnetic = true,
  className = "",
  children,
  ...props
}: MagneticButtonProps) => {
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!magnetic || !wrapRef.current) return;

    let detach: (() => void) | undefined;
    let cancelled = false;

    const boot = async () => {
      const { attachMagnetic } = await import("@/lib/animations/magnetic");
      if (cancelled || !wrapRef.current) return;
      const target =
        wrapRef.current.querySelector<HTMLElement>("a, button") ??
        wrapRef.current;
      detach = attachMagnetic(target, { strength });
    };

    void boot();

    return () => {
      cancelled = true;
      detach?.();
    };
  }, [magnetic, strength]);

  return (
    <span
      ref={wrapRef}
      className="magnetic-wrap"
      style={{ display: "inline-flex" }}
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </span>
  );
};

export default MagneticButton;
