"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import ClientOnly from "@/components/common/ClientOnly";
import SvgComp from "@/components/common/SvgComp";
import BlogCard from "@/components/blogs/BlogCard";
import { homeBlogs } from "@/data/home";
import style from "./index.module.scss";

const NAV_ID = "home-blogs-nav";

const Blogs = () => {
  const fallback = (
    <div className={style.fallbackTrack} aria-hidden>
      {homeBlogs.items.slice(0, 1).map((item, index) => (
        <BlogCard key={`fallback-${item.slug}`} item={item} index={index} />
      ))}
    </div>
  );

  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="home-blogs-title"
      data-section="blogs"
    >
      <div className="container">
        <SectionHeading
          tag={homeBlogs.eyebrow}
          title={homeBlogs.title}
          titleId="home-blogs-title"
          actions={
            <Button
              href={homeBlogs.cta.href}
              variant="secondary"
              data-cursor="link"
            >
              {homeBlogs.cta.label}
            </Button>
          }
        />

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
              {homeBlogs.items.map((item, index) => (
                <SwiperSlide
                  key={`blog-slide-${item.slug}`}
                  className={style.slide}
                >
                  <BlogCard item={item} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ClientOnly>

          <div className={style.controls}>
            <div id={NAV_ID} className="custom-swiper-navigation">
              <button
                type="button"
                className="custom-prev"
                aria-label="Previous articles"
              >
                <SvgComp src="/assets/svg/arrow-prev.svg" />
              </button>
              <button
                type="button"
                className="custom-next"
                aria-label="Next articles"
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

export default Blogs;
