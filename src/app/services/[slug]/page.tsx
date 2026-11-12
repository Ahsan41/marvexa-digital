import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailPageView from "@/components/services/detail/ServiceDetailPageView";
import { getServiceBySlug, getServiceSlugs } from "@/data/services";
import { getServiceDetailBySlug } from "@/data/service-details";
import { buildMetadata } from "@/lib/metadata";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetailBySlug(slug);
  const listing = getServiceBySlug(slug);

  if (!detail && !listing) {
    return buildMetadata({
      title: "Service",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: detail?.title ?? listing?.title ?? "Service",
    description:
      detail?.seoDescription ?? listing?.description ?? undefined,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const detail = getServiceDetailBySlug(slug);
  if (!detail) notFound();

  return <ServiceDetailPageView detail={detail} />;
}
