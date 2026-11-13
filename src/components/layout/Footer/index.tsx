import Image from "next/image";
import Link from "next/link";
import { contactInfo, navigation, siteConfig } from "@/data/site";
import style from "./index.module.scss";

const year = 2026;

const Footer = () => {
  const serviceLinks =
    navigation.find((item) => item.href === "/services")?.children ?? [];
  const exploreLinks = navigation.filter((item) => !item.children?.length);

  return (
    <footer className={`theme-dark ${style.footer}`}>
      <div className={style.atmosphere} aria-hidden>
        <span className={style.watermark}>{siteConfig.name.toUpperCase()}</span>
      </div>

      <div className={`container ${style.inner}`}>
        <div className={`custom-row ${style.row}`}>
          <div className={`col_12 col_md_6 col_lg_4 ${style.brand}`}>
            <Link href="/" className={style.logo} aria-label={siteConfig.name}>
              <Image
                className={style.logoImage}
                src="/assets/marvexa-logo-horizontal.webp"
                alt=""
                width={1506}
                height={450}
              />
            </Link>
            <p className={style.tagline}>{siteConfig.defaultDescription}</p>
            <ul className={style.socials}>
              {contactInfo.socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`col_12 col_sm_6 col_lg_2 ${style.col}`}>
            <p className={`text-label ${style.heading}`}>Explore</p>
            <ul className={style.list}>
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={`col_12 col_sm_6 col_lg_3 ${style.col}`}>
            <p className={`text-label ${style.heading}`}>
              <Link href="/services">Services</Link>
            </p>
            <ul className={style.list}>
              {serviceLinks.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`col_12 col_md_6 col_lg_3 ${style.col}`}>
            <p className={`text-label ${style.heading}`}>Contact</p>
            <ul className={style.contactList}>
              <li>
                <span className={style.contactLabel}>Email</span>
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </li>
              <li>
                <span className={style.contactLabel}>Email</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <span className={style.contactLabel}>Location</span>
                <span>{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.bottom}>
          <p className={style.copy}>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
