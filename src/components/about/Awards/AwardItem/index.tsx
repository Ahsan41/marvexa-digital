import type { AboutAwardItem } from "@/data/about";
import style from "./index.module.scss";

type AwardItemProps = {
  item: AboutAwardItem;
  index: number;
};

const AwardItem = ({ item, index }: AwardItemProps) => {
  return (
    <article
      className={`${style.item} reveal-item`}
      data-reveal={index % 2 === 0 ? "left" : "right"}
    >
      <div className={style.marker} aria-hidden>
        <span className={style.dot} />
      </div>

      <div className={`theme-dark ${style.content}`}>
        <time className={style.year} dateTime={item.year}>
          {item.year}
        </time>
        <h3 className={`h4 ${style.award}`}>{item.award}</h3>
        <p className={style.description}>{item.description}</p>
      </div>
    </article>
  );
};

export default AwardItem;
