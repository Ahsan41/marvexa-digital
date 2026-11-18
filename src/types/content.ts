export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type CtaLink = {
  label: string;
  href: string;
};

export type ServiceCard = {
  id?: string;
  slug: string;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  featured?: boolean;
  order?: number;
};

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  role?: string;
  company?: string;
  avatarSrc?: string;
  category?: string;
  rating?: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BlogCard = {
  id?: string;
  slug: string;
  title: string;
  author: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  excerpt?: string;
  date?: string;
  category?: string;
  featured?: boolean;
};

export type ContactInfo = {
  phone: string;
  phoneHref: string;
  location: string;
  email: string;
  socials: { label: string; href: string }[];
};

export type ContactFormField = {
  name: "fullName" | "email" | "phone" | "subject" | "message";
  label: string;
  placeholder: string;
  required: boolean;
  type: "text" | "email" | "tel" | "textarea";
  maxLength?: number;
};

export type PageMeta = {
  title: string;
  description?: string;
};
