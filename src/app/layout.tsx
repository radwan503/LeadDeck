import type { Metadata } from "next";
import "./globals.css";
import "@/styles/index.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
  title: "LeadDeck – Modern Lead Capture Landing Page",
  description:
    "Grow your business with LeadDeck. A professional, animated, and modern lead capture landing page built with Next.js, Tailwind, and Ant Design.",
  keywords: [
    "Lead Capture",
    "Landing Page",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "SEO",
    "React",
  ],
  authors: [
    { name: "Radwan Anik", url: "https://radwananik.netlify.app/" },
  ],
  creator: "Radwan Anik",
  publisher: "LeadDeck",
  openGraph: {
    title: "LeadDeck – Modern Lead Capture Landing Page",
    description:
      "Boost conversions with LeadDeck, a beautifully animated landing page built with Next.js and Tailwind CSS.",
    url: "https://radwananik.netlify.app/", // replace with your domain
    siteName: "LeadDeck",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "LeadDeck Lead Capture Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadDeck – Modern Lead Capture Landing Page",
    description:
      "Boost conversions with LeadDeck, a beautifully animated landing page built with Next.js and Tailwind CSS.",
    creator: "@yourhandle", // replace with your Twitter handle
    images: ["https://yourdomain.com/og-image.png"], // replace with your OG image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
