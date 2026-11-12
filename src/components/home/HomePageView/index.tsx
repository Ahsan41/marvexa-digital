import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import LazyMount from "@/components/common/LazyMount";
import {
  homeContact,
  homeFaqs,
  homeTestimonials,
} from "@/data/home";

const Introduction = dynamic(() => import("@/components/home/Introduction"));
const Services = dynamic(() => import("@/components/home/Services"));
const About = dynamic(() => import("@/components/home/About"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const FAQs = dynamic(() => import("@/components/home/FAQs"));
const Blogs = dynamic(() => import("@/components/home/Blogs"));
const ContactSection = dynamic(
  () => import("@/components/common/ContactSection"),
);

const HomePageView = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <LazyMount minHeight="36em">
        <Services />
      </LazyMount>
      <LazyMount minHeight="32em">
        <About />
      </LazyMount>
      <LazyMount minHeight="34em">
        <Testimonials
          eyebrow={homeTestimonials.eyebrow}
          title={homeTestimonials.title}
          items={homeTestimonials.testimonials}
          titleId="home-clients-title"
          stat={homeTestimonials.stat}
          plainSurface
        />
      </LazyMount>
      <LazyMount minHeight="28em">
        <FAQs
          eyebrow={homeFaqs.eyebrow}
          title={homeFaqs.title}
          items={homeFaqs.items}
          titleId="home-faq-title"
        />
      </LazyMount>
      <LazyMount minHeight="32em">
        <Blogs />
      </LazyMount>
      <LazyMount minHeight="40em" rootMargin="480px 0px">
        <ContactSection
          eyebrow={homeContact.eyebrow}
          title={homeContact.title}
          description={homeContact.description}
          imageSrc={homeContact.imageSrc}
          form={homeContact.form}
          titleId="home-contact-title"
        />
      </LazyMount>
    </>
  );
};

export default HomePageView;
