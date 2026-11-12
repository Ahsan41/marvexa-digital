import type { Metadata } from "next";
import HomePageView from "@/components/home/HomePageView";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pakistan-Based Digital Agency",
  path: "/",
});

export default function HomePage() {
  return <HomePageView />;
}
