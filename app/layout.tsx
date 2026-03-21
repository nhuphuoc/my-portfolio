import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./language-provider";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  display: "swap"
});

const title = "Phuoc Bui | Creative Developer Portfolio";
const description =
  "A modern personal portfolio crafted with Next.js, focused on product-minded frontend engineering, interaction design, and high-impact digital experiences.";
const siteUrl = "https://your-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "portfolio",
    "frontend developer",
    "next.js",
    "typescript",
    "tailwind css",
    "creative developer"
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Phuoc Bui Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
