/** About Us page content — kept separate from homepage home.ts */

export const aboutPage = {
  hero: {
    title: "About us",
    backgroundImage: "/assets/gemini/banner.webp",
  },
  mission: {
    title: "Helping local businesses make a confident start online",
    highlight: "A clear plan. Consistent presence. More meaningful connections.",
    description:
      "Marvexa Digital is a small digital agency based in Pakistan. We help local businesses build and manage the parts of their online presence that matter most—from brand identity and social media to advertising, websites, and business systems.",
    statement: "Digital support should be personal, practical, and connected to your goals.",
    additionalDescription:
      "Some businesses need a fresh brand and a strong foundation. Others are ready to improve their content, run paid campaigns, appear more prominently on Google Maps, or make it easier for customers to take action through a website or landing page. We listen first, then recommend a focused scope that fits your business and budget.",
    imageSrc: "/assets/gemini/about.webp",
    imageAlt: "Marvexa Digital mission visual",
  },
  stats: {
    cards: [
      {
        type: "copy" as const,
        title: "A small team that stays close to the work.",
        description:
          "We take time to understand your business, customers, and priorities. You get direct communication, clear recommendations, and a team that remains involved through delivery.",
      },
      {
        type: "stat" as const,
        title: "Focused on what matters",
        description: "Recommendations tied to your goals.",
        value: "01",
      },
      {
        type: "stat" as const,
        title: "Made to work together",
        description: "Connected brand, content, and marketing.",
        value: "02",
      },
    ],
  },
  awards: {
    title: "How we can support your business",
    items: [
      {
        year: "01",
        award: "Social media presence",
        description: "A consistent look and voice across your key channels.",
      },
      {
        year: "02",
        award: "Content and campaigns",
        description: "Planned content and creative designed for your audience.",
      },
      {
        year: "03",
        award: "Paid marketing",
        description: "Meta, TikTok, and Google ads with clear goals.",
      },
      {
        year: "04",
        award: "Web and landing pages",
        description: "A useful online home that helps customers take action.",
      },
      {
        year: "05",
        award: "Local visibility",
        description: "Help nearby customers discover your business on Google Maps.",
      },
    ],
  },
} as const;

export type AboutStatCard = (typeof aboutPage.stats.cards)[number];
export type AboutAwardItem = (typeof aboutPage.awards.items)[number];
