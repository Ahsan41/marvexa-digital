import { blogs, type BlogListingItem } from "@/data/blogs";
import { contactInfo } from "@/data/site";
import type { CtaLink } from "@/types/content";

export type BlogRichBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subsection"; title: string; text: string }
  | { type: "quote"; text: string };

export type BlogSection = {
  title?: string;
  blocks: BlogRichBlock[];
};

export type BlogSocialLink = {
  label: string;
  href: string;
  iconSrc: string;
};

export type BlogDetail = {
  slug: string;
  title: string;
  seoDescription?: string;
  hero: {
    title: string;
    backgroundImage: string;
    backgroundAlt?: string;
    breadcrumbs: { label: string; href?: string }[];
  };
  meta: {
    date: string;
    author: string;
  };
  featuredImage: {
    src: string;
    alt: string;
  };
  socials: BlogSocialLink[];
  sections: BlogSection[];
  related: {
    title: string;
    cta: CtaLink;
    slugs: string[];
  };
};

const socialIconByLabel: Record<string, string> = {
  Facebook: "/assets/svg/facebook.svg",
  X: "/assets/svg/x.svg",
  LinkedIn: "/assets/svg/linkedin.svg",
  Instagram: "/assets/svg/instagram.svg",
};

const sharedSocials: BlogSocialLink[] = contactInfo.socials.map((social) => ({
  label: social.label,
  href: social.href,
  iconSrc: socialIconByLabel[social.label] ?? "/assets/svg/x.svg",
}));

/** Shared article body — used for every blog detail page */
const sharedSections: BlogSection[] = [
  {
    blocks: [
      {
        type: "paragraph",
        text: "A few years ago, ‘AI in business’ sounded like something people say in meetings to look smart. Today in the UAE, it is the reason some companies are scaling while others are quietly disappearing.",
      },
      {
        type: "paragraph",
        text: "There is a simple truth most business owners don’t like hearing. AI is no longer a competitive advantage. It is becoming the entry ticket.",
      },
      {
        type: "paragraph",
        text: "In Dubai, Abu Dhabi, and across the UAE, businesses are now using AI to automate decisions, replace repetitive workflows, improve customer experience, and even predict demand before it happens.",
      },
      {
        type: "paragraph",
        text: "And the surprising part is this. Most companies are not asking whether they should adopt AI anymore. They are asking how fast they can implement it before competitors do.",
      },
    ],
  },
  {
    title: "The UAE Is Becoming One of the Fastest AI Adoption Markets in the World",
    blocks: [
      {
        type: "paragraph",
        text: "The UAE did not ‘accidentally’ become AI-friendly. It invested early.",
      },
      {
        type: "paragraph",
        text: "It built cloud infrastructure, digital governance systems, smart city frameworks, and enterprise-level data ecosystems long before most regions.",
      },
      {
        type: "paragraph",
        text: "Today, AI adoption is not limited to tech companies.",
      },
      {
        type: "paragraph",
        text: "It is everywhere.",
      },
      {
        type: "list",
        items: [
          "Banks use AI for fraud detection and credit scoring",
          "Hospitals use AI for diagnostics and patient flow",
          "Logistics companies use AI for routing and forecasting",
          "Retail brands use AI for personalization and demand prediction",
          "Government systems use AI for service automation",
        ],
      },
      {
        type: "paragraph",
        text: "A recent global enterprise survey by PwC reported that more than 70% of Middle East CEOs believe AI will significantly reshape profitability in the next 5 years.",
      },
      {
        type: "paragraph",
        text: "In the UAE, that timeline is already compressed. It is happening now, not later.",
      },
    ],
  },
  {
    title: "What AI Automation Really Means in Modern Business",
    blocks: [
      {
        type: "paragraph",
        text: "Most people misunderstand AI automation. They think it means chatbots or automated emails. That is the shallow version.",
      },
      {
        type: "paragraph",
        text: "Real AI automation means systems that can:",
      },
      {
        type: "list",
        items: [
          "Read data",
          "Understand patterns",
          "Predict outcomes",
          "Make decisions",
          "Execute actions",
        ],
      },
      {
        type: "paragraph",
        text: "Without waiting for human input every time.",
      },
      {
        type: "paragraph",
        text: "A simple example:",
      },
      {
        type: "paragraph",
        text: "A traditional system says: ‘Approve invoice manually.’",
      },
      {
        type: "paragraph",
        text: "An AI-powered system says: ‘This invoice matches vendor history, budget allocation and fraud risk threshold. Approve automatically.’",
      },
      {
        type: "paragraph",
        text: "That difference saves hours every day in large enterprises. And in a fast-moving economy like the UAE, hours matter.",
      },
    ],
  },
  {
    title: "Why UAE Companies Are Adopting AI Faster Than the Rest of the World",
    blocks: [
      {
        type: "paragraph",
        text: "There are 4 major reasons AI adoption is accelerating in the UAE.",
      },
      {
        type: "subsection",
        title: "1. High competition across every industry",
        text: "Competition is intense from real estate to fintech. Companies cannot afford slow decision cycles anymore.",
      },
      {
        type: "subsection",
        title: "2. Multilingual customer base",
        text: "Businesses must serve Arabic, English, Hindi, Urdu, and more. AI handles multilingual communication at scale.",
      },
      {
        type: "subsection",
        title: "3. Government-led digital transformation",
        text: "Smart Dubai initiatives and national AI strategies have pushed adoption forward.",
      },
      {
        type: "subsection",
        title: "4. High operational cost pressure",
        text: "Companies are constantly trying to reduce manual workforce dependency.",
      },
    ],
  },
  {
    title: "How AI Is Redefining Customer Experience in the UAE",
    blocks: [
      {
        type: "paragraph",
        text: "Customer expectations in the UAE are extremely high.",
      },
      {
        type: "paragraph",
        text: "People expect:",
      },
      {
        type: "list",
        items: [
          "Instant responses",
          "24/7 availability",
          "Personalized recommendations",
          "Zero waiting time",
        ],
      },
      {
        type: "paragraph",
        text: "Traditional service models cannot keep up. AI fixes this gap.",
      },
      {
        type: "paragraph",
        text: "AI-powered customer systems now handle:",
      },
      {
        type: "list",
        items: [
          "Live chat support",
          "Automated ticket resolution",
          "Personalized product suggestions",
          "Sentiment analysis",
          "Voice and WhatsApp automation",
        ],
      },
      {
        type: "paragraph",
        text: "A retail brand in Dubai reported a 38% reduction in customer response time after deploying AI chat systems.",
      },
      {
        type: "paragraph",
        text: "Another fintech startup improved customer satisfaction scores by 52% after automating onboarding queries.",
      },
      {
        type: "quote",
        text: "Customers don’t compare us to competitors anymore. They compare us to instant responses.",
      },
    ],
  },
  {
    title: "AI in Finance and Fintech Is Reshaping Trust and Speed",
    blocks: [
      {
        type: "paragraph",
        text: "The financial sector in the UAE is one of the biggest AI adopters. And for good reason. Money systems cannot afford errors.",
      },
      {
        type: "paragraph",
        text: "AI is now used for:",
      },
      {
        type: "list",
        items: [
          "Fraud detection",
          "Credit scoring",
          "Transaction monitoring",
          "Risk analysis",
          "Compliance automation",
        ],
      },
      {
        type: "subsection",
        title: "AI in FinTech Example",
        text: "A Dubai-based digital bank reduced fraud detection time from 3 days to 3 seconds using AI models.",
      },
      {
        type: "paragraph",
        text: "Another financial institution now uses AI to analyze customer behavior and predict loan defaults before they happen.",
      },
      {
        type: "paragraph",
        text: "This is where the real shift is happening.",
      },
      {
        type: "paragraph",
        text: "One fintech strategist said:",
      },
      {
        type: "quote",
        text: "We are moving from reactive banking to predictive banking.",
      },
      {
        type: "paragraph",
        text: "This is also why demand is rising for an AI FinTech Development Company Dubai ecosystem across the region.",
      },
    ],
  },
  {
    title: "AI Is Quietly Transforming Healthcare Systems in the UAE",
    blocks: [
      {
        type: "paragraph",
        text: "Healthcare is another sector where AI is quietly transforming everything.",
      },
      {
        type: "paragraph",
        text: "Hospitals in the UAE are using AI for:",
      },
      {
        type: "list",
        items: [
          "Appointment scheduling",
          "Patient triage",
          "Diagnostic assistance",
          "Medical record automation",
          "Resource allocation",
        ],
      },
      {
        type: "paragraph",
        text: "A hospital administrator in Abu Dhabi described it like this:",
      },
      {
        type: "quote",
        text: "AI does not replace doctors. It removes everything that wastes their time.",
      },
      {
        type: "subsection",
        title: "Real impact example",
        text: "A hospital reduced patient waiting time by 40% after implementing AI scheduling systems. Another clinic improved diagnostic support speed by using AI-based imaging analysis tools.",
      },
      {
        type: "paragraph",
        text: "This is where healthcare is heading, fast. The rise of AI-powered healthcare solutions in Dubai is not a trend. It is a structural shift.",
      },
    ],
  },
  {
    title:
      "AI Is Turning Logistics Into a Predictive System Instead of Reactive Operations",
    blocks: [
      {
        type: "paragraph",
        text: "The UAE is a global logistics hub. That makes AI extremely valuable in this sector.",
      },
      {
        type: "paragraph",
        text: "Logistics companies now use AI for:",
      },
      {
        type: "list",
        items: [
          "Route optimization",
          "Delivery prediction",
          "Inventory forecasting",
          "Fleet management",
          "Warehouse automation",
        ],
      },
      {
        type: "paragraph",
        text: "A logistics manager in Dubai shared this insight:",
      },
      {
        type: "quote",
        text: "We used to react to delays. Now we predict them before they happen.",
      },
      {
        type: "paragraph",
        text: "One delivery company reduced fuel costs by 22% after optimizing routes using AI systems.",
      },
      {
        type: "paragraph",
        text: "Another improved warehouse efficiency by 35% through automated inventory prediction.",
      },
      {
        type: "paragraph",
        text: "This is why demand is rising for specialized AI for Logistics in Dubai solutions.",
      },
    ],
  },
  {
    title: "AI Is Changing How Retail Customers Think and Buy",
    blocks: [
      {
        type: "paragraph",
        text: "Retail in the UAE is highly competitive and digitally driven. AI is now responsible for shaping what customers see and buy.",
      },
      {
        type: "paragraph",
        text: "AI powers:",
      },
      {
        type: "list",
        items: [
          "Product recommendations",
          "Dynamic pricing",
          "Customer segmentation",
          "Behavior prediction",
          "Personalized ads",
        ],
      },
      {
        type: "paragraph",
        text: "For example, when two users open the same online store, they may see completely different products. That is AI at work.",
      },
      {
        type: "paragraph",
        text: "A retail strategist explained it clearly:",
      },
      {
        type: "quote",
        text: "AI does not just sell products. It sells the next best decision.",
      },
    ],
  },
  {
    title: "AI Is Making Manufacturing Smarter and More Efficient",
    blocks: [
      {
        type: "paragraph",
        text: "Factories in the UAE are increasingly adopting AI-driven systems.",
      },
      {
        type: "paragraph",
        text: "AI is used for:",
      },
      {
        type: "list",
        items: [
          "Predictive maintenance",
          "Quality control",
          "Energy optimization",
          "Machine monitoring",
        ],
      },
      {
        type: "paragraph",
        text: "Instead of waiting for machines to break, AI predicts failure before it happens.",
      },
      {
        type: "paragraph",
        text: "A manufacturing engineer explained:",
      },
      {
        type: "quote",
        text: "Downtime used to cost us money. Now prevention saves us money.",
      },
    ],
  },
  {
    title: "AI Is Reshaping Real Estate Decision Making",
    blocks: [
      {
        type: "paragraph",
        text: "Real estate is one of the UAE’s strongest sectors.",
      },
      {
        type: "paragraph",
        text: "AI is now used to:",
      },
      {
        type: "list",
        items: [
          "Predict property prices",
          "Analyze buyer behavior",
          "Automate lead scoring",
          "Optimize property listings",
        ],
      },
      {
        type: "paragraph",
        text: "A Dubai real estate firm increased qualified leads by 44% after implementing AI lead filtering systems.",
      },
      {
        type: "paragraph",
        text: "This is also where demand for an experienced AI development in Dubai ecosystem is growing rapidly.",
      },
    ],
  },
  {
    title: "AI Is Powering Smart Governance in UAE Cities",
    blocks: [
      {
        type: "paragraph",
        text: "Dubai and Abu Dhabi are actively building AI-powered governance systems.",
      },
      {
        type: "paragraph",
        text: "AI is used for:",
      },
      {
        type: "list",
        items: [
          "Smart traffic management",
          "Automated public services",
          "Predictive infrastructure planning",
          "Digital identity systems",
        ],
      },
      {
        type: "paragraph",
        text: "A government innovation officer once said:",
      },
      {
        type: "quote",
        text: "A smart city is not about technology. It is about invisible efficiency.",
      },
    ],
  },
  {
    title: "Cloud Infrastructure Is What Makes AI Work at Scale",
    blocks: [
      {
        type: "paragraph",
        text: "AI does not work alone. It needs data and cloud systems. The UAE’s strong cloud adoption has made AI scaling easier.",
      },
      {
        type: "paragraph",
        text: "Cloud allows:",
      },
      {
        type: "list",
        items: [
          "Real-time data access",
          "Faster processing",
          "Scalable systems",
          "Integration across departments",
        ],
      },
      {
        type: "paragraph",
        text: "Without cloud systems, AI remains limited. With cloud systems, AI becomes enterprise-wide intelligence.",
      },
    ],
  },
  {
    title: "AI Is Changing How Business Decisions Are Made",
    blocks: [
      {
        type: "paragraph",
        text: "The biggest transformation is not automation. It is decision-making.",
      },
      {
        type: "paragraph",
        text: "Previously:",
      },
      {
        type: "list",
        items: [
          "Humans analyzed reports",
          "Then made decisions",
          "Then executed actions",
        ],
      },
      {
        type: "paragraph",
        text: "Now:",
      },
      {
        type: "list",
        items: [
          "AI analyzes in real time",
          "AI suggests decisions",
          "AI executes actions",
        ],
      },
      {
        type: "paragraph",
        text: "A business leader explained it like this:",
      },
      {
        type: "quote",
        text: "We are no longer reacting to data. We are reacting with data.",
      },
    ],
  },
  {
    title: "The Strongest Companies Combine Human Intelligence With AI",
    blocks: [
      {
        type: "paragraph",
        text: "Despite automation, humans are still critical.",
      },
      {
        type: "paragraph",
        text: "AI handles:",
      },
      {
        type: "list",
        items: ["Repetition", "Pattern recognition", "Data analysis"],
      },
      {
        type: "paragraph",
        text: "Humans handle:",
      },
      {
        type: "list",
        items: ["Strategy", "Judgment", "Creativity", "Relationships"],
      },
      {
        type: "paragraph",
        text: "The strongest companies in the UAE are not replacing humans.",
      },
      {
        type: "paragraph",
        text: "They are combining human intelligence with machine intelligence.",
      },
    ],
  },
  {
    title: "AI Governance Is Becoming a Business Priority",
    blocks: [
      {
        type: "paragraph",
        text: "As AI grows, so does risk.",
      },
      {
        type: "paragraph",
        text: "Companies must ensure:",
      },
      {
        type: "list",
        items: [
          "Data privacy",
          "Ethical usage",
          "Model transparency",
          "Security compliance",
        ],
      },
      {
        type: "paragraph",
        text: "In regulated sectors like finance and healthcare, this is critical.",
      },
      {
        type: "paragraph",
        text: "Without governance, AI becomes risky instead of useful.",
      },
    ],
  },
  {
    title:
      "AI Consulting Is Becoming a Core Part of Enterprise Transformation",
    blocks: [
      {
        type: "paragraph",
        text: "Businesses are now seeking structured AI implementation instead of random tools. This is where specialized agencies and consulting firms come in.",
      },
      {
        type: "paragraph",
        text: "A structured approach is now essential through an AI automation agency Dubai model that focuses on integration, not experimentation.",
      },
    ],
  },
  {
    title: "The Future of AI in UAE Businesses Is Already Unfolding",
    blocks: [
      {
        type: "paragraph",
        text: "The next 5 years will define the market.",
      },
      {
        type: "paragraph",
        text: "We will see:",
      },
      {
        type: "list",
        items: [
          "Fully automated customer journeys",
          "AI-managed supply chains",
          "Predictive healthcare ecosystems",
          "Smart financial systems",
          "Autonomous business operations",
        ],
      },
      {
        type: "paragraph",
        text: "A technology strategist summarized it best:",
      },
      {
        type: "quote",
        text: "The future company will not be AI-powered. It will be AI-native.",
      },
    ],
  },
  {
    title: "Final Thoughts on Where This Transformation Is Heading",
    blocks: [
      {
        type: "paragraph",
        text: "AI automation is not changing UAE businesses slowly. It is reshaping them completely. Companies that adopt early are gaining speed, accuracy, and scalability. Companies that delay are losing ground quietly.",
      },
      {
        type: "paragraph",
        text: "The real shift is not technological. It is operational. Businesses are moving from manual systems to intelligent ecosystems. And in this new environment, survival belongs to companies that understand one thing clearly.",
      },
      {
        type: "paragraph",
        text: "AI is not a tool anymore. It is the operating system of modern business in the UAE.",
      },
    ],
  },
];

const DETAIL_BANNER = "/assets/blogs-banner.webp";

const SHARED_META = {
  date: "June 10, 2026",
  author: "Sidra Khan",
} as const;

function relatedSlugsFor(currentSlug: string): string[] {
  return blogs
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 8)
    .map((item) => item.slug);
}

function buildBlogDetail(blog: BlogListingItem): BlogDetail {
  return {
    slug: blog.slug,
    title: blog.title,
    seoDescription: `${blog.title} — insights from Marvexa Digital on AI systems, automation, and delivery.`,
    hero: {
      title: blog.title,
      backgroundImage: DETAIL_BANNER,
      backgroundAlt: `${blog.title} — Marvexa Digital blog`,
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs", href: "/blogs" },
        { label: blog.title },
      ],
    },
    meta: {
      date: blog.date ?? SHARED_META.date,
      author: blog.author || SHARED_META.author,
    },
    featuredImage: {
      src: blog.imageSrc ?? "/assets/blog-1.webp",
      alt: blog.imageAlt ?? blog.title,
    },
    socials: sharedSocials,
    sections: sharedSections,
    related: {
      title: "Related Blog",
      cta: { label: "More articles", href: "/blogs" },
      slugs: relatedSlugsFor(blog.slug),
    },
  };
}

/** One detail page per listing blog — same article body for all */
export const blogDetails: Record<string, BlogDetail> = Object.fromEntries(
  blogs.map((blog) => [blog.slug, buildBlogDetail(blog)]),
);

export function getBlogDetailBySlug(slug: string): BlogDetail | undefined {
  return blogDetails[slug];
}

export function resolveRelatedBlogs(slugs: string[]): BlogListingItem[] {
  return slugs
    .map((slug) => blogs.find((item) => item.slug === slug))
    .filter((item): item is BlogListingItem => Boolean(item));
}
