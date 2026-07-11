import type { Metadata } from "next";
import { Neuton, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SITE_URL, OG_IMAGE } from "@/lib/siteConfig";

const neuton = Neuton({
  weight: ["300", "400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-neuton",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${neuton.variable} ${jost.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
