"use client";

import SVG from "react-inlinesvg";

type SvgCompProps = {
  src: string;
  /** Preferred prop name in this codebase */
  classes?: string;
  className?: string;
  title?: string;
};

/**
 * Inline SVG via react-inlinesvg — CSS can recolor with `currentColor` / path fill.
 */
const SvgComp = ({ src, classes = "", className = "", title }: SvgCompProps) => {
  return (
    <SVG
      src={src}
      className={[classes, className].filter(Boolean).join(" ")}
      title={title}
      preProcessor={(code) =>
        code
          .replace(/fill="white"/gi, 'fill="currentColor"')
          .replace(/fill="#fff(?:fff)?"/gi, 'fill="currentColor"')
      }
    />
  );
};

export default SvgComp;
