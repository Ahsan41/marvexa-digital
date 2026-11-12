import Image from "next/image";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/common/SectionHeading";
import { contactInfo } from "@/data/site";
import type { ContactFormField } from "@/types/content";
import style from "./index.module.scss";

const ContactForm = dynamic(() => import("@/components/common/ContactForm"), {
  loading: () => <div className={style.formPlaceholder} aria-hidden />,
});

type ContactSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  form: {
    title: string;
    description: string;
    submitLabel: string;
    fields: ContactFormField[];
  };
  titleId?: string;
  className?: string;
};

/**
 * Shared contact block — page content via props; site contact details from site.ts.
 */
const ContactSection = ({
  eyebrow,
  title,
  description,
  imageSrc,
  form,
  titleId = "contact-section-title",
  className = "",
}: ContactSectionProps) => {
  return (
    <section
      className={`theme-dark section-py-100 ${style.section} reveal ${className}`.trim()}
      aria-labelledby={titleId}
      data-section="contact"
    >
      <div className={style.atmosphere} aria-hidden>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 1200px"
            quality={60}
            className={style.atmosphereImage}
          />
        ) : null}
      </div>

      <div className={`container ${style.inner}`}>
        <div className={style.intro}>
          <SectionHeading
            tag={eyebrow}
            title={title}
            description={description}
            titleId={titleId}
          />
        </div>

        <div className={style.layout}>
          <div className={`${style.info} reveal-item`} data-reveal="left">
            <ul className={style.details}>
              <li>
                <span className={style.label}>Email</span>
                <a href={contactInfo.phoneHref} data-cursor="link">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <span className={style.label}>Our Location</span>
                <span>{contactInfo.location}</span>
              </li>
              <li>
                <span className={style.label}>Email</span>
                <a href={`mailto:${contactInfo.email}`} data-cursor="link">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <span className={style.label}>Social Network</span>
                <div className={style.socials}>
                  {contactInfo.socials.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      data-cursor="link"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div className={`${style.formCol} reveal-item`} data-reveal="right">
            <ContactForm
              title={form.title}
              description={form.description}
              submitLabel={form.submitLabel}
              fields={form.fields}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
