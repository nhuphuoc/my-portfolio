import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { LanguageProvider } from "./language-provider";

const title = "Phuoc Bui — Software Engineer";
const description =
  "Portfolio of Phuoc Bui (Bui Nhu Phuoc), a software engineer based in Ho Chi Minh City. Building backend systems with Java & Spring Boot and modern web products with Next.js.";
const siteUrl = "https://www.phuocbui.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  verification: {
    google: "dZ3_OXHZmUqq49-xA7ch2UwmC9W6pNrNJ2zJhb-mQlc"
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Phuoc Bui",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Phuoc Bui",
  alternateName: [
    "Bui Nhu Phuoc",
    "Bui Phuoc",
    "Phuoc Bui Nhu",
    "Bùi Nhữ Phước",
    "Bùi Như Phước",
    "Bùi Phước",
    "Như Phước",
    "Phước Bùi"
  ],
  url: siteUrl,
  email: "nhuphuoc.bui@gmail.com",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "NAB Innovation Centre Vietnam"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN"
  },
  sameAs: [
    "https://github.com/nhuphuoc",
    "https://www.linkedin.com/in/phuocbn/"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
