import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ContactPageView from "@/components/contact/ContactPageView";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  path: "/contact-us",
});

export default function ContactPage() {
  return <ContactPageView />;
}
