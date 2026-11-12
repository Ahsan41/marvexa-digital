import type { Testimonial } from "@/types/content";
import style from "./index.module.scss";

type TestimonialCardProps = {
  item: Testimonial;
};

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  return (
    <article className={`theme-dark ${style.card}`}>
      <p className={style.quoteMark} aria-hidden>
        “
      </p>
      <blockquote className={style.quote}>{item.quote}</blockquote>
      <footer className={style.meta}>
        <cite>{item.name}</cite>
        <span>{item.location}</span>
      </footer>
    </article>
  );
};

export default TestimonialCard;
