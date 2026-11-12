import SectionHeading from "@/components/common/SectionHeading";
import DifferentiatorItem from "@/components/services/detail/ServiceDifferentiators/DifferentiatorItem";
import type { ServiceDetail } from "@/data/service-details";
import style from "./index.module.scss";

type ServiceDifferentiatorsProps = {
  data: ServiceDetail["differentiators"];
};

const ServiceDifferentiators = ({ data }: ServiceDifferentiatorsProps) => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="service-diff-title"
      data-section="service-differentiators"
    >
      <div className="container">
        <SectionHeading
          title={data.title}
          description={data.description}
          titleId="service-diff-title"
        />

        <div className={style.list}>
          {data.items.map((item, index) => (
            <DifferentiatorItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDifferentiators;
