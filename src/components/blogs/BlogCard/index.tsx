import Link from "next/link";
import Image from "next/image";
import SvgComp from "@/components/common/SvgComp";
import type { BlogCard as BlogCardData } from "@/types/content";
import style from "./index.module.scss";

type BlogCardProps = {
  item: BlogCardData;
  index?: number;
  /** Only for above-the-fold listing LCP */
  priority?: boolean;
  className?: string;
};

const glowClass = [style.glowTl, style.glowTr, style.glowBr] as const;

/**
 * Shared blog card — one design for home slider, listing, and related grids.
 */
const BlogCard = ({
  item,
  index = 0,
  priority = false,
  className = "",
}: BlogCardProps) => {
  const glow = glowClass[index % glowClass.length];
  const meta = [item.date, item.author].filter(Boolean).join(" · ");

  return (
    <Link
      href={item.href}
      className={`theme-dark ${style.card} ${glow} reveal-item image-reveal ${className}`.trim()}
      data-reveal={index % 3 === 0 ? "up" : index % 3 === 1 ? "rise" : "scale"}
      data-image-reveal="scale"
      data-cursor="view"
    >
      <div className={style.media} aria-hidden>
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
            className={style.image}
            loading={priority ? "eager" : "lazy"}
            priority={priority}
          />
        ) : (
          <div className={style.fallback} />
        )}
        <div className={style.shade} />
        <div className={style.sweep} />
      </div>

      <div className={style.aura} aria-hidden />

      <div className={style.top}>
        {item.category ? (
          <span className={style.category}>{item.category}</span>
        ) : (
          <span />
        )}
        <div className={`${style.arrow} svg-icon`} aria-hidden>
          <SvgComp src="/assets/svg/arrow-next.svg" />
        </div>
      </div>

      <div className={style.body}>
        {meta ? <p className={style.meta}>{meta}</p> : null}
        <h3 className={style.title}>{item.title}</h3>
        <span className={style.cta}>
          Read article
          <div className={`${style.ctaArrow} svg-icon`} aria-hidden>
            <SvgComp src="/assets/svg/arrow-next.svg" />
          </div>
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
