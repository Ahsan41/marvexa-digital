import type { AboutStatCard } from "@/data/about";
import style from "./index.module.scss";

type StatCardProps = {
  item: AboutStatCard;
  index: number;
};

const StatCard = ({ item, index }: StatCardProps) => {
  return (
    <article
      className={`theme-dark ${style.card} ${
        item.type === "stat" ? style.statCard : style.copyCard
      } reveal-item`}
      data-reveal={index % 2 === 0 ? "up" : "rise"}
    >
      <h3 className={`h4 ${style.title}`}>{item.title}</h3>

      {"value" in item && item.value ? (
        <p className={style.value} aria-label={`${item.value}`}>
          {item.value}
        </p>
      ) : null}

      <p className={style.description}>{item.description}</p>
    </article>
  );
};

export default StatCard;
