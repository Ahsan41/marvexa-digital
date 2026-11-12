import home from "./home.json";
import { getHomeBlogItems } from "@/data/blogs";
import type {
  ContactFormField,
  CtaLink,
  FaqItem,
  ServiceCard,
  Testimonial,
} from "@/types/content";

/** Single homepage content API — backed by home.json */
export const homeHero = home.hero;

export const homeIntroduction = home.introduction;

export const homeAbout = home.about;

export const homeServices = {
  eyebrow: home.services.eyebrow,
  title: home.services.title,
  cta: home.services.cta as CtaLink,
  items: home.services.items as ServiceCard[],
};

export const homeTestimonials = {
  eyebrow: home.testimonials.eyebrow,
  title: home.testimonials.title,
  stat: home.testimonials.stat,
  testimonials: home.testimonials.items as Testimonial[],
};

export const homeFaqs = home.faqs as {
  eyebrow: string;
  title: string;
  items: FaqItem[];
};

export const homeBlogs = {
  eyebrow: home.blogs.eyebrow,
  title: home.blogs.title,
  cta: home.blogs.cta as CtaLink,
  items: getHomeBlogItems(6),
};

export const homeContact = home.contact as {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  form: {
    title: string;
    description: string;
    submitLabel: string;
    fields: ContactFormField[];
  };
};
