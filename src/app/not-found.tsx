import Button from "@/components/common/Button";
import style from "./not-found.module.scss";

/**
 * Branded 404 — bad URLs / missing slugs.
 */
export default function NotFound() {
  return (
    <section className={style.page} aria-labelledby="not-found-title">
      <div className={`container ${style.inner}`}>
        <p className={style.code}>404</p>
        <h1 id="not-found-title" className={style.title}>
          Page not found
        </h1>
        <p className={style.desc}>
          The page you are looking for does not exist or has been moved.
        </p>
        <div className={style.actions}>
          <Button href="/" data-cursor="link">
            Back to home
          </Button>
          <Button href="/contact-us" variant="secondary" data-cursor="link">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
