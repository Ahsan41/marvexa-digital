import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import { homeIntroduction } from "@/data/home";
import style from "./index.module.scss";

const Introduction = () => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="home-intro-title"
      data-section="introduction"
    >
      <div className="container">
        <div className={style.layout}>
          <div className={style.copy}>
            <SectionHeading
              tag={homeIntroduction.eyebrow}
              title={homeIntroduction.title}
              titleId="home-intro-title"
            />
            {homeIntroduction.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`${style.body} reveal-item`}
                data-reveal={index % 2 === 0 ? "up" : "rise"}
              >
                {paragraph}
              </p>
            ))}
            <div className={`${style.clients} reveal-item`} data-reveal="up">
              <span>{homeIntroduction.clientsLabel}</span>
              {homeIntroduction.clients.map((client) => (
                <strong key={client}>{client}</strong>
              ))}
            </div>
          </div>

          <div className={style.mediaWrap} data-speed="0.35">
            <div className={style.frameBack} aria-hidden />
            <div
              className={`${style.frame} image-reveal`}
              data-image-reveal="left"
            >
              <Image
                src={homeIntroduction.imageSrc}
                alt={homeIntroduction.imageAlt}
                fill
                sizes="(max-width: 991px) 90vw, 42vw"
                className={style.frameImage}
                loading="lazy"
              />
              <p className={style.frameMeta}>{homeIntroduction.imageCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
