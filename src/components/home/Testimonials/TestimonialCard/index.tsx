import Image from "next/image";
import type { Testimonial } from "@/types/content";
import style from "./index.module.scss";

type TestimonialCardProps = {
  item: Testimonial;
};

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  const rating = Math.max(0, Math.min(5, Math.round(item.rating ?? 5)));

  return (
    <article className={`theme-dark ${style.card}`}>
      <p className={style.quoteMark} aria-hidden>
        “
      </p>
      <div className={style.proof}>
        {item.category ? <p className={style.category}>{item.category}</p> : null}
        <div className={style.rating} role="img" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }, (_, index) => (
            <Image
              key={index}
              src="/review-star.svg"
              alt=""
              width={19}
              height={17}
            />
          ))}
        </div>
      </div>
      <blockquote className={style.quote}>{item.quote}</blockquote>
      <footer className={style.meta}>
        <cite>{item.name}</cite>
        {item.role || item.company ? (
          <span>{[item.role, item.company].filter(Boolean).join(", ")}</span>
        ) : null}
        <span>{item.location}</span>
      </footer>
    </article>
  );
};

export default TestimonialCard;
