import SectionHeading from "@/components/common/SectionHeading";
import ProcessStepCard from "@/components/services/detail/ServiceProcess/ProcessStepCard";
import type { ServiceDetail } from "@/data/service-details";
import style from "./index.module.scss";

type ServiceProcessProps = {
  data: ServiceDetail["process"];
};

const ServiceProcess = ({ data }: ServiceProcessProps) => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="service-process-title"
      data-section="service-process"
    >
      <div className="container">
        <SectionHeading
          title={data.title}
          description={data.description}
          titleId="service-process-title"
        />

        <div className={style.grid}>
          {data.steps.map((step, index) => (
            <ProcessStepCard
              key={step.title}
              item={step}
              index={index}
              isLast={index === data.steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
