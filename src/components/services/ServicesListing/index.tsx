import ServiceCard from "@/components/services/ServiceCard";
import type { ServiceListingItem } from "@/data/services";
import style from "./index.module.scss";

type ServicesListingProps = {
  items: ServiceListingItem[];
};

const ServicesListing = ({ items }: ServicesListingProps) => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="services-listing-title"
      data-section="services-listing"
    >
      <div className="container">
        <h2 id="services-listing-title" className="sr-only">
          Our services
        </h2>

        <ul className={style.grid}>
          {items.map((item, index) => (
            <li key={item.slug} className={style.item}>
              <ServiceCard item={item} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesListing;
