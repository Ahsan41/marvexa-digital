"use client";

import type { ReactNode } from "react";
import TextRevealTitle from "@/components/common/TextRevealTitle";
import style from "./index.module.scss";

type SectionHeadingProps = {
  tag?: string;
  title: string;
  description?: string;
  titleId: string;
  align?: "left" | "center";
  className?: string;
  /** When false, skip masked text-reveal on the title (default true) */
  reveal?: boolean;
  actions?: ReactNode;
};

/**
 * Shared section heading — used across Home / listing / detail sections.
 * Title uses a self-contained IntersectionObserver word reveal.
 */
const SectionHeading = ({
  tag,
  title,
  description,
  titleId,
  align = "left",
  className = "",
  reveal = true,
  actions,
}: SectionHeadingProps) => {
  const classes = [
    style.heading,
    align === "center" ? style.center : "",
    actions ? style.withActions : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const titleEl = (
    <TextRevealTitle
      id={titleId}
      title={title}
      className={`h2 ${style.title}`}
      reveal={reveal}
    />
  );

  const tagEl = tag ? (
    <p className={`${style.tag} reveal-item`} data-reveal="up">
      {tag}
    </p>
  ) : null;

  const descriptionEl = description ? (
    <p className={`${style.description} reveal-item`} data-reveal="up">
      {description}
    </p>
  ) : null;

  if (actions) {
    return (
      <div className={`${classes} section-header`}>
        <div className={style.desc}>
          {tagEl}
          {titleEl}
          {descriptionEl}
        </div>
        <div className={`${style.actions} reveal-item`} data-reveal="right">
          {actions}
        </div>
      </div>
    );
  }

  return (
    <div className={`${classes} section-header`}>
      {tagEl}
      {titleEl}
      {descriptionEl}
    </div>
  );
};

export default SectionHeading;
