import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesPageView from "@/components/services/ServicesPageView";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageView />;
}
