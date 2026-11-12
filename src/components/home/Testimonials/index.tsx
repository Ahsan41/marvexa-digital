"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionHeading from "@/components/common/SectionHeading";
import ClientOnly from "@/components/common/ClientOnly";
import SvgComp from "@/components/common/SvgComp";
import TestimonialCard from "@/components/home/Testimonials/TestimonialCard";
import type { Testimonial } from "@/types/content";
import style from "./index.module.scss";

type TestimonialsProps = {
  title: string;
  items: Testimonial[];
  eyebrow?: string;
  description?: string;
  titleId?: string;
  plainSurface?: boolean;
  stat?: {
    value: string | number;
    suffix?: string;
    label: string;
  } | null;
};

const NAV_ID = "testimonials-nav";

const Testimonials = ({
  eyebrow,
  title,
  description,
  items,
  titleId = "testimonials-title",
  plainSurface = false,
  stat = null,
}: TestimonialsProps) => {
  const fallback = (
    <div className={style.fallbackTrack} aria-hidden>
      {items.slice(0, 1).map((item, index) => (
        <TestimonialCard key={`fallback-${index}`} item={item} />
      ))}
    </div>
  );

  return (
    <section
      className={`section-py-100 ${style.section} ${plainSurface ? style.plainSurface : ""} reveal`}
      aria-labelledby={titleId}
      data-section="testimonials"
    >
      <div className="container">
        <div className={style.head}>
          <SectionHeading
            tag={eyebrow}
            title={title}
            description={description}
            titleId={titleId}
            className={style.headingBlock}
          />
          {stat ? (
            <div className={`${style.stat} reveal-item`} data-reveal="scale">
              <p className={style.statValue}>
                {stat.value}
                {stat.suffix ? <span>{stat.suffix}</span> : null}
              </p>
              <p className={style.statLabel}>{stat.label}</p>
            </div>
          ) : null}
        </div>

        <div className={style.slider}>
          <ClientOnly fallback={fallback}>
            <Swiper
              className={style.swiper}
              modules={[Navigation]}
              navigation={{
                prevEl: `#${NAV_ID} .custom-prev`,
                nextEl: `#${NAV_ID} .custom-next`,
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 24 },
              }}
              watchOverflow
              observer
              observeParents
            >
              {items.map((item, index) => (
                <SwiperSlide
                  key={`testimonial-${index}-${item.name}`}
                  className={style.slide}
                >
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ClientOnly>

          <div className={style.controls}>
            <div id={NAV_ID} className="custom-swiper-navigation">
              <button
                type="button"
                className="custom-prev"
                aria-label="Previous testimonials"
              >
                <SvgComp src="/assets/svg/arrow-prev.svg" />
              </button>
              <button
                type="button"
                className="custom-next"
                aria-label="Next testimonials"
              >
                <SvgComp src="/assets/svg/arrow-next.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
