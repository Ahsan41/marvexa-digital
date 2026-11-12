"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import ServicePreviewCard from "@/components/home/Services/ServicePreviewCard";
import ServiceTab from "@/components/home/Services/ServiceTab";
import { homeServices } from "@/data/home";
import style from "./index.module.scss";

const featuredServices = [...homeServices.items]
  .filter((item) => item.featured)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  .slice(0, 5);

const Services = () => {
  const [active, setActive] = useState(0);
  const activeItem = featuredServices[active] ?? featuredServices[0];

  return (
    <section
      className={`theme-dark section-py-100 ${style.section} reveal`}
      aria-labelledby="home-services-title"
      data-section="services"
    >
      <div className="container">
        <SectionHeading
          tag={homeServices.eyebrow}
          title={homeServices.title}
          titleId="home-services-title"
          actions={
            <Button
              href={homeServices.cta.href}
              variant="secondary"
              data-cursor="link"
            >
              {homeServices.cta.label}
            </Button>
          }
        />

        <div className={style.layout}>
          <div className={style.list} role="tablist" aria-label="Services">
            {featuredServices.map((item, index) => (
              <ServiceTab
                key={item.slug}
                title={item.title}
                index={index}
                isActive={active === index}
                tabId={`service-tab-${item.slug}`}
                panelId="service-preview-panel"
                onActivate={() => setActive(index)}
              />
            ))}
          </div>

          <ServicePreviewCard
            href={activeItem.href}
            title={activeItem.title}
            description={activeItem.description}
            imageSrc={activeItem.imageSrc}
            index={active}
            total={featuredServices.length}
            labelledBy={`service-tab-${activeItem.slug}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
