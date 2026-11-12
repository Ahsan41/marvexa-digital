import type { ServiceFeatureCard } from "@/data/service-details";
import style from "./index.module.scss";

type DifferentiatorItemProps = {
  item: ServiceFeatureCard;
  index: number;
};

const DifferentiatorItem = ({ item, index }: DifferentiatorItemProps) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`${style.item} reveal-item`}
      data-reveal={index % 2 === 0 ? "left" : "right"}
    >
      <span className={style.number} aria-hidden>
        {num}
      </span>
      <div className={style.copy}>
        <h3 className={style.title}>{item.title}</h3>
        <p className={style.body}>{item.description}</p>
      </div>
    </article>
  );
};

export default DifferentiatorItem;
