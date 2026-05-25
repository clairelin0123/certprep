import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://certprep.study";

export const metadata: Metadata = {
  title: {
    default: "CertPrep — Free CMA Exam Practice Questions (2026)",
    template: "%s | CertPrep",
  },
  description:
    "1,200+ free CMA exam practice questions with detailed explanations. Covering all 12 topics for Part 1 and Part 2 of the Certified Management Accountant exam. Quiz mode, progress tracking, and saved mistakes.",
  keywords: [
    "CMA exam",
    "CMA practice questions",
    "CMA exam prep",
    "Certified Management Accountant",
    "CMA Part 1",
    "CMA Part 2",
    "free CMA questions",
    "CMA study guide",
    "CMA exam 2026",
    "CMA test prep",
    "management accounting",
    "IMA certification",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CertPrep",
    title: "CertPrep — Free CMA Exam Practice Questions",
    description:
      "1,200+ free CMA practice questions with explanations. Quiz mode for all 12 topics across Part 1 & Part 2.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CertPrep — Free CMA Exam Practice Questions",
    description:
      "1,200+ free CMA practice questions with explanations. Quiz mode for all 12 topics.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adsensePubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;

  return (
    <html lang="en">
      <head>
        {adsensePubId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePubId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
