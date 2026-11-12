import type { BlogCard } from "@/types/content";

export type BlogListingItem = BlogCard;

const blogImages = [
  "/assets/blog-1.webp",
  "/assets/blog-2.webp",
  "/assets/blog-3.webp",
  "/assets/home/blog-1.webp",
  "/assets/home/blog-2.webp",
  "/assets/case-study-1.webp",
  "/assets/case-study-2.webp",
  "/assets/case-study-3.webp",
  "/assets/industry-1.webp",
  "/assets/industry-2.webp",
  "/assets/industry-3.webp",
  "/assets/home/about.webp",
] as const;

/** Full blog catalog — listing, detail routes, related grids, and homepage slider */
const catalog: BlogListingItem[] = [
  {
    id: "top-10-ai-recommendation-engine-providers-for-ecommerce-growth",
    slug: "top-10-ai-recommendation-engine-providers-for-ecommerce-growth",
    title: "Top 10 AI Recommendation Engine Providers for E‑commerce Growth",
    author: "Marvexa Digital",
    href: "/blogs/top-10-ai-recommendation-engine-providers-for-ecommerce-growth",
    imageSrc: blogImages[0],
    imageAlt: "AI recommendation engines for ecommerce",
    category: "AI",
    date: "January 5, 2026",
    featured: true,
  },
  {
    id: "how-to-choose-the-best-ai-development-company-in-dubai-2026",
    slug: "how-to-choose-the-best-ai-development-company-in-dubai-2026",
    title: "How to Choose the Best AI Development Company in Dubai 2026",
    author: "Sidra Khan",
    href: "/blogs/how-to-choose-the-best-ai-development-company-in-dubai-2026",
    imageSrc: blogImages[1],
    imageAlt: "Choosing an AI development company in Dubai",
    category: "AI",
    date: "June 15, 2026",
  },
  {
    id: "enterprise-ai-agents-that-actually-ship",
    slug: "enterprise-ai-agents-that-actually-ship",
    title: "Enterprise AI Agents That Actually Ship",
    author: "Marvexa Digital",
    href: "/blogs/enterprise-ai-agents-that-actually-ship",
    imageSrc: blogImages[2],
    imageAlt: "Enterprise AI agents in production",
    category: "Agents",
    date: "March 12, 2026",
  },
  {
    id: "rag-systems-for-regulated-industries",
    slug: "rag-systems-for-regulated-industries",
    title: "Building RAG Systems for Regulated Industries",
    author: "Ayesha Malik",
    href: "/blogs/rag-systems-for-regulated-industries",
    imageSrc: blogImages[3],
    imageAlt: "Retrieval augmented generation architecture",
    category: "Architecture",
    date: "February 28, 2026",
  },
  {
    id: "chatbots-vs-conversational-ai-platforms",
    slug: "chatbots-vs-conversational-ai-platforms",
    title: "Chatbots vs Conversational AI Platforms: What Leaders Should Know",
    author: "Omar Farooq",
    href: "/blogs/chatbots-vs-conversational-ai-platforms",
    imageSrc: blogImages[4],
    imageAlt: "Conversational AI platform comparison",
    category: "Chatbots",
    date: "April 3, 2026",
  },
  {
    id: "ai-automation-roi-playbook-for-ops-teams",
    slug: "ai-automation-roi-playbook-for-ops-teams",
    title: "An AI Automation ROI Playbook for Ops Teams",
    author: "Marvexa Digital",
    href: "/blogs/ai-automation-roi-playbook-for-ops-teams",
    imageSrc: blogImages[5],
    imageAlt: "Operations team reviewing AI automation ROI",
    category: "Automation",
    date: "May 9, 2026",
  },
  {
    id: "computer-vision-in-smart-manufacturing",
    slug: "computer-vision-in-smart-manufacturing",
    title: "Computer Vision in Smart Manufacturing: Practical Wins",
    author: "Hassan Raza",
    href: "/blogs/computer-vision-in-smart-manufacturing",
    imageSrc: blogImages[6],
    imageAlt: "Computer vision on a manufacturing floor",
    category: "Vision",
    date: "January 22, 2026",
  },
  {
    id: "llm-governance-without-slowing-delivery",
    slug: "llm-governance-without-slowing-delivery",
    title: "LLM Governance Without Slowing Delivery",
    author: "Sidra Khan",
    href: "/blogs/llm-governance-without-slowing-delivery",
    imageSrc: blogImages[7],
    imageAlt: "LLM governance framework",
    category: "Governance",
    date: "March 30, 2026",
  },
  {
    id: "predictive-analytics-for-customer-retention",
    slug: "predictive-analytics-for-customer-retention",
    title: "Predictive Analytics for Customer Retention",
    author: "Marvexa Digital",
    href: "/blogs/predictive-analytics-for-customer-retention",
    imageSrc: blogImages[8],
    imageAlt: "Predictive analytics dashboard",
    category: "Analytics",
    date: "February 10, 2026",
  },
  {
    id: "multi-agent-workflows-for-enterprise-support",
    slug: "multi-agent-workflows-for-enterprise-support",
    title: "Multi-Agent Workflows for Enterprise Support",
    author: "Ayesha Malik",
    href: "/blogs/multi-agent-workflows-for-enterprise-support",
    imageSrc: blogImages[9],
    imageAlt: "Multi-agent support workflow",
    category: "Agents",
    date: "April 18, 2026",
  },
  {
    id: "dubai-ai-strategy-checklist-for-2026",
    slug: "dubai-ai-strategy-checklist-for-2026",
    title: "Dubai AI Strategy Checklist for 2026",
    author: "Omar Farooq",
    href: "/blogs/dubai-ai-strategy-checklist-for-2026",
    imageSrc: blogImages[10],
    imageAlt: "AI strategy planning in Dubai",
    category: "Strategy",
    date: "May 27, 2026",
  },
  {
    id: "from-poc-to-production-ai-delivery-model",
    slug: "from-poc-to-production-ai-delivery-model",
    title: "From PoC to Production: An AI Delivery Model That Scales",
    author: "Marvexa Digital",
    href: "/blogs/from-poc-to-production-ai-delivery-model",
    imageSrc: blogImages[11],
    imageAlt: "AI product moving from pilot to production",
    category: "Delivery",
    date: "June 2, 2026",
  },
];

export const blogsPage = {
  hero: {
    title: "Blogs",
    backgroundImage: "/assets/blogs-banner.webp",
  },
  /** Six per page so pagination appears with the current catalog */
  pageSize: 6,
  items: catalog,
} as const;

export const blogs: BlogListingItem[] = [...blogsPage.items];

export function getHomeBlogItems(limit = 6): BlogListingItem[] {
  return blogs.slice(0, limit);
}

export function getBlogBySlug(slug: string): BlogListingItem | undefined {
  return blogs.find((item) => item.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogs.map((item) => item.slug);
}

export function getBlogsPage(page = 1, pageSize = blogsPage.pageSize) {
  const safePage = Math.max(1, page);
  const total = blogs.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(safePage, totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    items: blogs.slice(start, start + pageSize),
    currentPage,
    totalPages,
    total,
    pageSize,
  };
}
