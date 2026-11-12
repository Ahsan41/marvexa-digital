import dynamic from "next/dynamic";
import InnerHero from "@/components/common/InnerHero";
import Mission from "@/components/about/Mission";
import { aboutPage } from "@/data/about";
import { homeContact } from "@/data/home";

const Stats = dynamic(() => import("@/components/about/Stats"));
const Awards = dynamic(() => import("@/components/about/Awards"));
const ContactSection = dynamic(
  () => import("@/components/common/ContactSection"),
);

const AboutPageView = () => {
  const { hero } = aboutPage;

  return (
    <>
      <InnerHero
        title={hero.title}
        backgroundImage={hero.backgroundImage}
        titleId="about-hero-title"
      />
      <Mission />
      <Stats />
      <Awards />
      <ContactSection
        eyebrow={homeContact.eyebrow}
        title={homeContact.title}
        description={homeContact.description}
        imageSrc={homeContact.imageSrc}
        form={homeContact.form}
        titleId="about-contact-title"
      />
    </>
  );
};

export default AboutPageView;
