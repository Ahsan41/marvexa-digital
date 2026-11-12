import type { ServiceStat } from "@/data/service-details";
import style from "./index.module.scss";

type StatCardProps = {
  item: ServiceStat;
  index: number;
};

const StatCard = ({ item, index }: StatCardProps) => {
  return (
    <article
      className={`theme-dark ${style.card} reveal-item`}
      data-reveal={index % 2 === 0 ? "up" : "rise"}
    >
      <p className={style.value}>{item.value}</p>
      <p className={style.label}>{item.label}</p>
    </article>
  );
};

export default StatCard;
