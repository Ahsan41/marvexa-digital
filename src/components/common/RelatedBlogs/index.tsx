"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import ClientOnly from "@/components/common/ClientOnly";
import SvgComp from "@/components/common/SvgComp";
import BlogCard from "@/components/blogs/BlogCard";
import type { BlogListingItem } from "@/data/blogs";
import type { CtaLink } from "@/types/content";
import style from "./index.module.scss";

type RelatedBlogsProps = {
  title: string;
  cta: CtaLink;
  items: BlogListingItem[];
  titleId?: string;
  dataSection?: string;
};

/**
 * Related blogs slider — same interaction model as homepage Reads.
 */
const RelatedBlogs = ({
  title,
  cta,
  items,
  titleId = "related-blogs-title",
  dataSection = "related-blogs",
}: RelatedBlogsProps) => {
  if (items.length === 0) return null;

  const navId = `${dataSection}-nav`;

  const fallback = (
    <div className={style.fallbackTrack} aria-hidden>
      {items.slice(0, 1).map((item, index) => (
        <BlogCard key={`fallback-${item.slug}`} item={item} index={index} />
      ))}
    </div>
  );

  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby={titleId}
      data-section={dataSection}
    >
      <div className="container">
        <SectionHeading
          title={title}
          titleId={titleId}
          actions={
            <Button href={cta.href} variant="secondary" data-cursor="link">
              {cta.label}
            </Button>
          }
        />

        <div className={style.slider}>
          <ClientOnly fallback={fallback}>
            <Swiper
              className={style.swiper}
              modules={[Navigation]}
              navigation={{
                prevEl: `#${navId} .custom-prev`,
                nextEl: `#${navId} .custom-next`,
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
                  key={`related-blog-${item.slug}`}
                  className={style.slide}
                >
                  <BlogCard item={item} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ClientOnly>

          <div className={style.controls}>
            <div id={navId} className="custom-swiper-navigation">
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

export default RelatedBlogs;
