import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import BlogsPageView from "@/components/blogs/BlogsPageView";

export const metadata: Metadata = buildMetadata({
  title: "Blogs",
  path: "/blogs",
  description:
    "Ideas and practical insights from Marvexa Digital on design, software, digital products, and emerging technology.",
});

type BlogsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  return <BlogsPageView page={Number.isFinite(page) ? page : 1} />;
}
