import Button from "@/components/common/Button";
import SectionHeading from "@/components/common/SectionHeading";
import CapabilityCard from "@/components/services/detail/ServiceCapabilities/CapabilityCard";
import type { ServiceDetail } from "@/data/service-details";
import style from "./index.module.scss";

type ServiceCapabilitiesProps = {
  data: ServiceDetail["why"];
};

const ServiceCapabilities = ({ data }: ServiceCapabilitiesProps) => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="service-why-title"
      data-section="service-capabilities"
    >
      <div className="container">
        <SectionHeading
          title={data.title}
          description={data.description}
          titleId="service-why-title"
          actions={
            <Button href={data.cta.href} variant="secondary" data-cursor="link">
              {data.cta.label}
            </Button>
          }
        />

        <div className={style.grid}>
          {data.cards.map((card, index) => (
            <CapabilityCard key={card.title} item={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;
