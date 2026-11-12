import dynamic from "next/dynamic";
import InnerHero from "@/components/common/InnerHero";
import { homeContact } from "@/data/home";
import { mapEmbedSrc } from "@/data/site";

const ContactSection = dynamic(
  () => import("@/components/common/ContactSection"),
);
const MapEmbed = dynamic(() => import("@/components/common/MapEmbed"));

const ContactPageView = () => {
  return (
    <>
      <InnerHero
        title="Contact us"
        backgroundImage={homeContact.imageSrc}
        titleId="contact-hero-title"
      />
      <ContactSection
        eyebrow={homeContact.eyebrow}
        title={homeContact.title}
        description={homeContact.description}
        imageSrc={homeContact.imageSrc}
        form={homeContact.form}
        titleId="contact-page-title"
      />
      <MapEmbed title="Marvexa Digital Location" src={mapEmbedSrc} />
    </>
  );
};

export default ContactPageView;
