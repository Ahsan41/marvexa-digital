import Button from "@/components/common/Button";
import type { CtaLink } from "@/types/content";
import style from "./index.module.scss";

type ContentCtaProps = {
  title: string;
  cta: CtaLink;
  eyebrow?: string;
  titleId?: string;
  dataSection?: string;
};

/**
 * Mid-page atmospheric CTA — shared by service and industry detail templates.
 */
const ContentCta = ({
  title,
  cta,
  eyebrow,
  titleId = "content-cta-title",
  dataSection = "content-cta",
}: ContentCtaProps) => {
  return (
    <section
      className={`theme-dark section-py-100 ${style.section} reveal`}
      aria-labelledby={titleId}
      data-section={dataSection}
    >
      <div className="container">
        <div className={`${style.panel} reveal-item`} data-reveal="scale">
          <div className={style.aura} aria-hidden />
          {eyebrow ? <p className={style.eyebrow}>{eyebrow}</p> : null}
          <h2 id={titleId} className={`h2 ${style.title}`}>
            {title}
          </h2>
          <Button href={cta.href} data-cursor="link">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentCta;
