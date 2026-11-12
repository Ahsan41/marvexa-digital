import Image from "next/image";
import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import { homeAbout } from "@/data/home";
import style from "./index.module.scss";

const About = () => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="home-about-title"
      data-section="about"
    >
      <div className="container">
        <div className={style.layout}>
          <div className={style.media} data-speed="0.4">
            <div
              className={`${style.blob} image-reveal`}
              data-image-reveal="up"
            >
              <Image
                src={homeAbout.imageSrc}
                alt={homeAbout.imageAlt}
                fill
                sizes="(max-width: 991px) 90vw, 36vw"
                className={style.blobImage}
                loading="lazy"
                quality={70}
              />
            </div>
            <div
              className={`theme-dark ${style.statChip} reveal-item`}
              data-reveal="scale"
            >
              <strong>{homeAbout.statChip.title}</strong>
              <span>{homeAbout.statChip.label}</span>
            </div>
          </div>

          <div className={style.copy}>
            <SectionHeading
              tag={homeAbout.eyebrow}
              title={homeAbout.title}
              titleId="home-about-title"
            />
            {homeAbout.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 36)}
                className={`${style.body} reveal-item`}
                data-reveal={index % 2 === 0 ? "up" : "rise"}
              >
                {paragraph}
              </p>
            ))}
            <div className="reveal-item" data-reveal="up">
              <Button href={homeAbout.cta.href} data-cursor="magnetic">
                {homeAbout.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
