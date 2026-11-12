import type { ServiceCard } from "@/types/content";

export type ServiceListingItem = ServiceCard;

const serviceItems: ServiceListingItem[] = [
  { slug: "brand-identity", title: "Build a Brand from Scratch", description: "Create a memorable foundation for your business with a considered name, visual identity, colours, voice, and brand story.", imageSrc: "/assets/gemini/about.jfif" },
  { slug: "social-media-presence", title: "Social Media Appearance", description: "Make a confident first impression with polished profiles, clear bios, branded highlights, and cohesive page visuals.", imageSrc: "/assets/gemini/social-media-presence.webp" },
  { slug: "social-media-management", title: "Social Media Management & Content Strategy", description: "Plan and manage consistent posts, reels, stories, captions, and campaigns around your audience, offers, and business calendar.", imageSrc: "/assets/gemini/social-media-strategy.webp" },
  { slug: "paid-advertising", title: "Meta, TikTok & Google Ads", description: "Reach relevant audiences with focused paid campaigns, careful testing, and ongoing optimization against your business goals.", imageSrc: "/assets/gemini/advertisement.webp" },
  { slug: "ad-creative", title: "Ad Creative", description: "Develop videos, product imagery, reels, and campaign designs that communicate your value and encourage the next step.", imageSrc: "/assets/gemini/ad-creative.webp" },
  { slug: "website-landing-pages", title: "Landing Pages & Websites", description: "Give customers a clear path to learn about your business, browse your offer, and contact or buy from you.", imageSrc: "/assets/gemini/websites.webp" },
  { slug: "pos-systems", title: "POS Systems", description: "Set up practical point-of-sale tools for billing, sales tracking, and everyday reporting, matched to how your business operates.", imageSrc: "/assets/gemini/pos.webp" },
  { slug: "google-maps-visibility", title: "Google Maps Visibility & Local SEO", description: "Improve your local presence with a well-maintained Google Business Profile, accurate business details, and a thoughtful review strategy.", imageSrc: "/assets/gemini/home.jfif" },
].map((service, index) => ({
  ...service,
  id: service.slug,
  href: `/services/${service.slug}`,
  order: index + 1,
}));

export const servicesPage = {
  hero: {
    title: "Digital services for local business",
    backgroundImage: "/assets/blogs-banner.webp",
  },
  items: serviceItems,
};

/** Listing + detail route dataset */
export const services: ServiceListingItem[] = servicesPage.items;

export function getServiceBySlug(slug: string): ServiceListingItem | undefined {
  return services.find((item) => item.slug === slug);
}

export function getServiceSlugs(): string[] {
  return [...new Set(services.map((item) => item.slug))];
}
