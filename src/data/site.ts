import type { NavItem, ContactInfo } from "@/types/content";

export const siteConfig = {
  name: "Marvexa Digital",
  url: "https://marvexadigital.com",
  locale: "en",
  defaultTitle: "Marvexa Digital | Digital Marketing for Local Business",
  defaultDescription:
    "Marvexa Digital helps local businesses build their brand, grow their social presence, reach more customers, and strengthen their online visibility.",
} as const;

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Social Media Presence", href: "/services/social-media-presence" },
      { label: "Social Media Management", href: "/services/social-media-management" },
      { label: "Paid Advertising", href: "/services/paid-advertising" },
      { label: "Content & Ad Creative", href: "/services/ad-creative-content-strategy" },
      { label: "Websites & POS Systems", href: "/services/websites-pos-systems" },
      { label: "Google Maps Visibility", href: "/services/google-maps-visibility" },
    ],
  },
];

export const primaryCta = {
  label: "Get in touch",
  href: "/contact-us",
} as const;

export const contactInfo: ContactInfo = {
  phone: "Email us",
  phoneHref: "mailto:marvexad@gmail.com",
  location: "Pakistan",
  email: "marvexad@gmail.com",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/19vQtR8pk7/",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@marvexadigital",
    },
    { label: "Instagram", href: "https://www.instagram.com/marvexa.digital/" },
    { label: "YouTube", href: "https://youtube.com/@marvexadigital" },
  ],
};

/**
 * Google Maps embed iframe `src` — Pakistan.
 */
export const mapEmbedSrc =
  "https://www.google.com/maps?q=Pakistan&z=5&output=embed";
