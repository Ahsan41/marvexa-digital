import SvgComp from "@/components/common/SvgComp";
import type { ServiceFeatureCard } from "@/data/service-details";
import style from "./index.module.scss";

type CapabilityCardProps = {
  item: ServiceFeatureCard;
  index: number;
};

/**
 * Editorial capability card for service detail "why" grids.
 * Span sizes live on the parent grid via nth-child.
 */
const CapabilityCard = ({ item, index }: CapabilityCardProps) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`theme-dark ${style.card} reveal-item`}
      data-reveal={index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "right"}
    >
      <div className={style.top}>
        <span className={style.index}>{num}</span>
        <span className={`${style.arrow} svg-icon`} aria-hidden>
          <SvgComp src="/assets/svg/arrow-next.svg" />
        </span>
      </div>
      <h3 className={style.title}>{item.title}</h3>
      <p className={style.body}>{item.description}</p>
      <div className={style.glow} aria-hidden />
    </article>
  );
};

export default CapabilityCard;
