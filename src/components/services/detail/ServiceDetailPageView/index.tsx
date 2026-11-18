import dynamic from "next/dynamic";
import InnerHero from "@/components/common/InnerHero";
import ContentCta from "@/components/common/ContentCta";
import LazyMount from "@/components/common/LazyMount";
import ServiceAboutStats from "@/components/services/detail/ServiceAboutStats";
import ServiceCapabilities from "@/components/services/detail/ServiceCapabilities";
import { homeContact, homeTestimonials } from "@/data/home";
import type { ServiceDetail } from "@/data/service-details";

const ServiceDifferentiators = dynamic(
  () => import("@/components/services/detail/ServiceDifferentiators"),
);
const ServiceProcess = dynamic(
  () => import("@/components/services/detail/ServiceProcess"),
);
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const FAQs = dynamic(() => import("@/components/home/FAQs"));
const ContactSection = dynamic(
  () => import("@/components/common/ContactSection"),
);

type ServiceDetailPageViewProps = {
  detail: ServiceDetail;
};

const ServiceDetailPageView = ({ detail }: ServiceDetailPageViewProps) => {
  return (
    <>
      <InnerHero
        title={detail.hero.title}
        backgroundImage={detail.hero.backgroundImage}
        backgroundAlt={detail.hero.backgroundAlt}
        breadcrumbs={detail.hero.breadcrumbs}
        titleId="service-detail-hero-title"
      />

      <ServiceAboutStats data={detail.about} />
      <ServiceCapabilities data={detail.why} />
      <ContentCta
        title={detail.midCta.title}
        cta={detail.midCta.cta}
        titleId="service-mid-cta-title"
        dataSection="service-cta"
      />
      <LazyMount minHeight="28em">
        <ServiceDifferentiators data={detail.differentiators} />
      </LazyMount>
      <LazyMount minHeight="28em">
        <ServiceProcess data={detail.process} />
      </LazyMount>

      <LazyMount minHeight="34em">
        <Testimonials
          eyebrow={homeTestimonials.eyebrow}
          title={homeTestimonials.title}
          items={homeTestimonials.testimonials}
          titleId="service-testimonials-title"
          stat={homeTestimonials.stat}
        />
      </LazyMount>

      <LazyMount minHeight="28em">
        <FAQs
          title={detail.faqs.title}
          items={detail.faqs.items}
          titleId="service-faq-title"
          eyebrow="FAQ"
        />
      </LazyMount>

      <LazyMount minHeight="40em" rootMargin="480px 0px">
        <ContactSection
          eyebrow={homeContact.eyebrow}
          title={homeContact.title}
          description={homeContact.description}
          imageSrc={homeContact.imageSrc}
          form={homeContact.form}
          titleId="service-contact-title"
        />
      </LazyMount>
    </>
  );
};

export default ServiceDetailPageView;
