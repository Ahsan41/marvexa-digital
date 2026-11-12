import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import { aboutPage } from "@/data/about";
import style from "./index.module.scss";

const { mission } = aboutPage;

const Mission = () => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="about-mission-title"
      data-section="about-mission"
    >
      <div className="container">
        <div className={style.layout}>
          <div className={style.copy}>
            <SectionHeading
              title={mission.title}
              titleId="about-mission-title"
            />

            <p
              className={`${style.highlight} reveal-item`}
              data-reveal="up"
            >
              {mission.highlight}
            </p>

            <p className={`${style.body} reveal-item`} data-reveal="up">
              {mission.description}
            </p>

            <p
              className={`${style.statement} reveal-item`}
              data-reveal="rise"
            >
              {mission.statement}
            </p>

            <p className={`${style.body} reveal-item`} data-reveal="up">
              {mission.additionalDescription}
            </p>
          </div>

          <div className={style.media} data-speed="0.4">
            <div
              className={`${style.blob} image-reveal`}
              data-image-reveal="left"
            >
              <Image
                src={mission.imageSrc}
                alt={mission.imageAlt}
                fill
                sizes="(max-width: 991px) 90vw, 42vw"
                className={style.blobImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
