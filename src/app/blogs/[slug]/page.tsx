import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailPageView from "@/components/blogs/detail/BlogDetailPageView";
import { getBlogBySlug, getBlogSlugs } from "@/data/blogs";
import { getBlogDetailBySlug } from "@/data/blog-details";
import { buildMetadata } from "@/lib/metadata";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getBlogDetailBySlug(slug);
  const listing = getBlogBySlug(slug);

  if (!detail && !listing) {
    return buildMetadata({
      title: "Blog",
      path: `/blogs/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: detail?.title ?? listing?.title ?? "Blog",
    description: detail?.seoDescription,
    path: `/blogs/${slug}`,
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const detail = getBlogDetailBySlug(slug);
  if (!detail) notFound();

  return <BlogDetailPageView detail={detail} />;
}
