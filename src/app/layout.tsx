import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";
import { buildMetadata } from "@/lib/metadata";
import "swiper/css";
import "./globals.scss";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          <main id="main-content" className="site-main">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
