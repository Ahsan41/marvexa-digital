import type { ServiceProcessStep } from "@/data/service-details";
import style from "./index.module.scss";

type ProcessStepCardProps = {
  item: ServiceProcessStep;
  index: number;
  isLast?: boolean;
};

const ProcessStepCard = ({
  item,
  index,
  isLast = false,
}: ProcessStepCardProps) => {
  return (
    <article
      className={`${style.card} ${isLast ? style.last : ""} reveal-item`}
      data-reveal={index % 2 === 0 ? "up" : "rise"}
    >
      <div className={style.rail} aria-hidden>
        <span className={style.dot} />
      </div>
      <div className={`theme-dark ${style.body}`}>
        <p className={style.stepNum}>{item.step}</p>
        <h3 className={style.title}>{item.title}</h3>
        <p className={style.description}>{item.description}</p>
      </div>
    </article>
  );
};

export default ProcessStepCard;
