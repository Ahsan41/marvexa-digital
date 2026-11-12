import SectionHeading from "@/components/common/SectionHeading";
import AwardItem from "@/components/about/Awards/AwardItem";
import { aboutPage } from "@/data/about";
import style from "./index.module.scss";

const { awards } = aboutPage;

const Awards = () => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="about-awards-title"
      data-section="about-awards"
    >
      <div className="container">
        <SectionHeading
          title={awards.title}
          titleId="about-awards-title"
          className={style.heading}
        />

        <div className={style.timeline}>
          {awards.items.map((item, index) => (
            <AwardItem
              key={`${item.year}-${item.award}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
