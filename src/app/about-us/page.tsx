import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import AboutPageView from "@/components/about/AboutPageView";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  path: "/about-us",
});

export default function AboutPage() {
  return <AboutPageView />;
}
