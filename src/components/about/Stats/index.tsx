import StatCard from "@/components/about/Stats/StatCard";
import { aboutPage } from "@/data/about";
import style from "./index.module.scss";

const { cards } = aboutPage.stats;

const Stats = () => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="about-stats-title"
      data-section="about-stats"
    >
      <div className="container">
        <h2 id="about-stats-title" className="sr-only">
          Projects and statistics
        </h2>

        <div className={style.grid}>
          {cards.map((card, index) => (
            <StatCard key={card.title} item={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
