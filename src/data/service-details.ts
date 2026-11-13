import type { BlogCard, CtaLink, FaqItem, Testimonial } from "@/types/content";
import { blogs } from "@/data/blogs";
import { services } from "@/data/services";

export type ServiceStat = { value: string; label: string };
export type ServiceFeatureCard = { title: string; description: string };
export type ServiceProcessStep = { step: string; title: string; description: string };

export type ServiceDetail = {
  slug: string;
  title: string;
  seoDescription?: string;
  hero: { title: string; backgroundImage: string; backgroundAlt?: string; breadcrumbs: { label: string; href?: string }[] };
  about: { title: string; description: string; cta: CtaLink; imageSrc: string; imageAlt: string; stats: ServiceStat[] };
  why: { title: string; description: string; cta: CtaLink; cards: ServiceFeatureCard[] };
  midCta: { title: string; cta: CtaLink };
  differentiators: { title: string; description: string; items: ServiceFeatureCard[] };
  process: { title: string; description: string; steps: ServiceProcessStep[] };
  testimonials: { title: string; description: string; items: Testimonial[] };
  faqs: { title: string; items: FaqItem[] };
  blogs: { title: string; cta: CtaLink; slugs: string[] };
};

const serviceCopy: Record<string, { summary: string; outcome: string; capabilities: ServiceFeatureCard[]; questions: FaqItem[] }> = {
  "brand-identity": {
    summary: "Build a distinctive brand foundation that gives your business a consistent name, look, and voice. We clarify what makes your offer different and translate it into identity elements customers can recognize and remember.",
    outcome: "Create a brand people recognize and remember.",
    capabilities: [
      { title: "Brand discovery", description: "Understand your business, customers, category, and ambitions before creative work begins." },
      { title: "Identity direction", description: "Develop a name, logo, colour palette, typography, and visual language suited to your positioning." },
      { title: "Brand voice", description: "Set practical messaging and tone guidelines for consistent communication." },
      { title: "Launch-ready assets", description: "Prepare core brand files and guidance your team can use across channels." },
    ],
    questions: [{ question: "Can you help if my business has not launched yet?", answer: "Yes. We can shape the core identity and launch materials around your audience, offer, and business goals." }, { question: "Do I receive the brand files?", answer: "Yes. Final deliverables and usage guidance are agreed at the start and supplied for your team to use." }],
  },
  "social-media-presence": {
    summary: "Make a strong first impression when customers visit your social profiles. We organize the essentials—bio, profile image, highlights, pinned content, and visual direction—so people quickly understand what you do and how to take the next step.",
    outcome: "Turn your profile into a clear, credible introduction to your business.",
    capabilities: [
      { title: "Profile setup", description: "Review account details, bios, links, contact options, and calls to action." },
      { title: "Visual consistency", description: "Align profile imagery, highlights, and page elements with your brand." },
      { title: "Key information", description: "Make your offer, location, opening details, and next steps easy to find." },
      { title: "Pinned content plan", description: "Choose useful introductory posts that answer the questions new visitors often have." },
    ],
    questions: [{ question: "Which platforms can you set up?", answer: "We can help prepare the social platforms most relevant to your customers and business." }, { question: "Can you refresh an existing profile?", answer: "Yes. We can review what is already in place and prioritize improvements to clarity and consistency." }],
  },
  "social-media-management": {
    summary: "Keep your social channels active with a considered content plan and reliable publishing. We shape posts, reels, stories, and captions around your products, customers, offers, and calendar, then manage the agreed schedule with you.",
    outcome: "Show up consistently with content that reflects your business.",
    capabilities: [
      { title: "Monthly content planning", description: "Set themes and a practical publishing calendar around business priorities." },
      { title: "Content creation", description: "Prepare platform-ready posts, reels, stories, and captions within the agreed scope." },
      { title: "Publishing and coordination", description: "Keep content moving through an organized review and scheduling process." },
      { title: "Performance review", description: "Review engagement and audience signals to inform the next content cycle." },
    ],
    questions: [{ question: "Do you post every day?", answer: "The publishing frequency is set together based on your goals, available content, and selected package." }, { question: "Do you need access to my social accounts?", answer: "Publishing and management may require appropriate account permissions. We agree access and responsibilities before work begins." }],
  },
  "paid-advertising": {
    summary: "Plan and manage paid campaigns across Meta, TikTok, and Google to reach relevant audiences and support a clear business objective. We align targeting, creative, and campaign measurement, then use performance data to guide optimization.",
    outcome: "Put your campaign in front of the people most likely to act.",
    capabilities: [
      { title: "Campaign planning", description: "Choose an objective, audience, offer, and budget approach before launch." },
      { title: "Platform setup", description: "Prepare campaigns across Meta, TikTok, and Google where they fit your audience." },
      { title: "Local targeting", description: "Focus delivery by relevant location and audience attributes supported by the platform." },
      { title: "Optimization and reporting", description: "Monitor results, test improvements, and report against agreed measures." },
    ],
    questions: [{ question: "Are advertising costs included?", answer: "Media spend is separate from management fees and is agreed with you before campaigns launch." }, { question: "Can you guarantee sales or leads?", answer: "No responsible agency can guarantee a specific result. We set clear goals, monitor performance, and optimize based on campaign data." }],
  },
  "ad-creative": {
    summary: "Create campaign assets that earn attention and communicate your offer clearly. We develop ad concepts and produce agreed formats—such as short videos, product imagery, reels, and graphic creative—for the channels you use.",
    outcome: "Give your campaigns creative that is clear, relevant, and made for its platform.",
    capabilities: [
      { title: "Creative concepts", description: "Develop campaign angles around customer needs and your offer." },
      { title: "Short-form video", description: "Create or edit concise video assets for social advertising and organic channels." },
      { title: "Product and offer visuals", description: "Present products, services, and promotions in a focused, consistent way." },
      { title: "Platform-ready versions", description: "Adapt approved creative to the placements and formats in the agreed brief." },
    ],
    questions: [{ question: "Can you work with photos or footage we already have?", answer: "Yes. We can plan around existing assets and identify any additional production needs before work starts." }, { question: "How many creative versions are included?", answer: "The number of concepts, formats, and revisions is defined in the project scope." }],
  },
  "website-landing-pages": {
    summary: "Give customers a straightforward place to understand your business and take action. We build practical, mobile-friendly websites and landing pages that present your offer, key information, and contact or booking options clearly.",
    outcome: "Make it easy for customers to learn about your business and get in touch.",
    capabilities: [
      { title: "Business websites", description: "Present your services, location, opening details, and contact information in one clear place." },
      { title: "Campaign landing pages", description: "Build focused pages that support a promotion, lead campaign, booking, or product offer." },
      { title: "Mobile-friendly experience", description: "Make essential information and actions accessible across common screen sizes." },
      { title: "Useful integrations", description: "Connect agreed contact forms, maps, booking links, or analytics to support your workflow." },
    ],
    questions: [{ question: "Can you build a one-page website?", answer: "Yes. A focused landing page can be a suitable starting point for a new business or campaign." }, { question: "Do you provide ongoing updates?", answer: "Ongoing maintenance can be discussed and included as a separate scope where needed." }],
  },
  "pos-systems": {
    summary: "Set up point-of-sale tools that support everyday billing and give you a clearer view of sales. We help identify a suitable setup, configure the agreed system, and guide your team through the basics of using it.",
    outcome: "Bring billing and everyday sales tracking into a more organized workflow.",
    capabilities: [
      { title: "Needs assessment", description: "Understand your products, services, payment flow, and daily reporting needs." },
      { title: "System setup", description: "Configure the agreed POS solution and essential business information." },
      { title: "Sales and reports", description: "Set up practical views for transactions and routine sales reporting." },
      { title: "Team handover", description: "Walk staff through core workflows and provide agreed setup notes." },
    ],
    questions: [{ question: "Can you recommend hardware too?", answer: "We can discuss compatible hardware requirements as part of selecting and planning the POS setup." }, { question: "Will the POS track inventory?", answer: "Inventory features depend on the chosen system and plan. We confirm requirements before recommending a setup." }],
  },
  "google-maps-visibility": {
    summary: "Help nearby customers find accurate, useful information about your business on Google. We improve your Business Profile, strengthen local relevance, and help you build a consistent process for gathering and responding to customer reviews.",
    outcome: "Make your business information easier to discover and trust locally.",
    capabilities: [
      { title: "Business Profile optimization", description: "Review categories, services, description, contact details, and profile completeness." },
      { title: "Accurate local information", description: "Keep location, hours, phone, links, and business details clear and consistent." },
      { title: "Review guidance", description: "Set up a professional process for requesting and responding to genuine customer reviews." },
      { title: "Local visibility review", description: "Track profile activity and identify practical improvements over time." },
    ],
    questions: [{ question: "Can you guarantee a top-three Maps position?", answer: "No. Google rankings depend on many factors and cannot be guaranteed. We improve profile quality and local signals using platform-compliant practices." }, { question: "Do I keep ownership of my Business Profile?", answer: "Yes. The business should retain ownership, with access shared as needed to complete the agreed work." }],
  },
};

function buildServiceDetail(service: (typeof services)[number]): ServiceDetail {
  const content = serviceCopy[service.slug];
  if (!content) throw new Error(`Missing service copy for ${service.slug}`);

  const cta = { label: "Discuss your project", href: "/contact-us" };
  const steps: ServiceProcessStep[] = [
    { step: "01", title: "Understand", description: "We learn about your business, customers, current setup, and goals." },
    { step: "02", title: "Plan", description: "We agree on priorities, deliverables, timing, and how we will review progress." },
    { step: "03", title: "Create", description: "We prepare and refine the agreed work with your feedback along the way." },
    { step: "04", title: "Improve", description: "We hand over clearly and identify useful next steps based on what we learn." },
  ];

  return {
    slug: service.slug,
    title: service.title,
    seoDescription: service.description,
    hero: {
      title: service.title,
      backgroundImage: "/assets/blogs-banner.webp",
      backgroundAlt: `${service.title} by Marvexa Digital`,
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }],
    },
    about: {
      title: content.outcome,
      description: content.summary,
      cta,
      imageSrc: "/assets/gemini/about.webp",
      imageAlt: `${service.title} for local businesses`,
      stats: [{ value: "01", label: "Clear scope" }, { value: "02", label: "Collaborative process" }, { value: "03", label: "Practical handover" }],
    },
    why: { title: `What ${service.title.toLowerCase()} can do for your business`, description: content.summary, cta: { label: "View all services", href: "/services" }, cards: content.capabilities },
    midCta: { title: `Let’s talk about ${service.title.toLowerCase()}.`, cta },
    differentiators: { title: "A straightforward way to work together", description: "Small-agency collaboration with clear communication and a scope shaped around your business.", items: [
      { title: "Built around your goals", description: "We focus on the outcome you need and recommend a scope to match." },
      { title: "Clear communication", description: "You know what is in progress, what needs your input, and what comes next." },
      { title: "Made for real customers", description: "We keep your audience and their next step at the centre of the work." },
    ] },
    process: { title: "A clear process from first conversation to delivery", description: "We keep the work organized and involve you at the right points.", steps },
    testimonials: { title: "Our approach", description: "Thoughtful planning and steady collaboration at each stage.", items: [] },
    faqs: { title: "Frequently asked questions", items: content.questions },
    blogs: { title: "More ideas for your business", cta: { label: "Read articles", href: "/blogs" }, slugs: [] },
  };
}

export const serviceDetails: Record<string, ServiceDetail> = Object.fromEntries(
  services.map((service) => [service.slug, buildServiceDetail(service)]),
);

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}

export function resolveServiceBlogs(slugs: string[]): BlogCard[] {
  return slugs.map((slug) => blogs.find((item) => item.slug === slug)).filter((item): item is BlogCard => Boolean(item));
}
