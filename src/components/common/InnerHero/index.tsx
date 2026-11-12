import Image from "next/image";
import Link from "next/link";
import style from "./index.module.scss";

export type InnerHeroBreadcrumb = {
  label: string;
  href?: string;
};

type InnerHeroProps = {
  title: string;
  backgroundImage: string;
  /** Decorative background — empty alt by default */
  backgroundAlt?: string;
  eyebrow?: string;
  description?: string;
  breadcrumbs?: InnerHeroBreadcrumb[];
  /** When false, skip the dark gradient overlay */
  overlay?: boolean;
  className?: string;
  titleId?: string;
};

/**
 * Shared inner-page hero for About, Contact, listing, and detail pages.
 * Content is always left-aligned within the page container.
 */
const InnerHero = ({
  title,
  backgroundImage,
  backgroundAlt = "",
  eyebrow,
  description,
  breadcrumbs,
  overlay = true,
  className = "",
  titleId = "inner-hero-title",
}: InnerHeroProps) => {
  return (
    <section
      className={`theme-dark ${style.hero} ${className}`.trim()}
      aria-labelledby={titleId}
      data-section="hero"
    >
      <div className={style.media} aria-hidden={backgroundAlt ? undefined : true}>
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          sizes="100vw"
          className={style.image}
        />
        {overlay ? <div className={style.shade} /> : null}
      </div>

      <div className="container">
        <div className={style.inner}>
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <nav className={style.breadcrumbs} aria-label="Breadcrumb">
              <ol className={style.crumbList}>
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <li
                      key={`${crumb.label}-${index}`}
                      className={style.crumbItem}
                    >
                      {crumb.href && !isLast ? (
                        <Link href={crumb.href} data-cursor="link">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span aria-current={isLast ? "page" : undefined}>
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          ) : null}

          {eyebrow ? <p className={style.eyebrow}>{eyebrow}</p> : null}
          <h1 id={titleId} className={`h1 ${style.title}`}>
            {title}
          </h1>
          {description ? <p className={style.lead}>{description}</p> : null}
        </div>
      </div>
    </section>
  );
};

export default InnerHero;
