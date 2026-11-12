import InnerHero from "@/components/common/InnerHero";
import ServicesListing from "@/components/services/ServicesListing";
import { servicesPage } from "@/data/services";

const ServicesPageView = () => {
  const { hero, items } = servicesPage;

  return (
    <>
      <InnerHero
        title={hero.title}
        backgroundImage={hero.backgroundImage}
        titleId="services-hero-title"
      />
      <ServicesListing items={items} />
    </>
  );
};

export default ServicesPageView;
