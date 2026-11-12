import Image from "next/image";
import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import StatCard from "@/components/services/detail/ServiceAboutStats/StatCard";
import type { ServiceDetail } from "@/data/service-details";
import style from "./index.module.scss";

type ServiceAboutStatsProps = {
  data: ServiceDetail["about"];
};

const ServiceAboutStats = ({ data }: ServiceAboutStatsProps) => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="service-about-title"
      data-section="service-about"
    >
      <div className="container">
        <div className={style.layout}>
          <div className={style.copy}>
            <SectionHeading title={data.title} titleId="service-about-title" />
            <p className={`${style.body} reveal-item`} data-reveal="up">
              {data.description}
            </p>
            <div className={`${style.actions} reveal-item`} data-reveal="up">
              <Button href={data.cta.href} data-cursor="link">
                {data.cta.label}
              </Button>
            </div>
          </div>

          <div className={style.media} data-speed="0.35">
            <div
              className={`${style.frame} image-reveal`}
              data-image-reveal="up"
            >
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 991px) 90vw, 42vw"
                className={style.image}
                loading="lazy"
              />
              <div className={style.glow} aria-hidden />
            </div>
          </div>
        </div>

        <div className={style.stats}>
          {data.stats.map((stat, index) => (
            <StatCard key={stat.label} item={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAboutStats;
