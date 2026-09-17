import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sonali-paul.vercel.app"),
  title: "Sonali Paul | Digital Marketing Specialist",
  description:
    "Portfolio of Sonali Paul — MBA @ LPU, Digital Marketing & Retail Management. ZEVAR co-founder, RUXSTAR intern, campaigns, Shopify, and growth.",
  openGraph: {
    title: "Sonali Paul | Digital Marketing Specialist",
    description: siteTagline(),
    images: ["/sonali-paul.jpeg"],
  },
};

function siteTagline() {
  return "Building brands with data-led campaigns, content, and growth that convert.";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
