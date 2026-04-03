import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = "https://www.supimione.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Supratim Das | Full-Stack Software Engineer & Founder of Dreamlytix",
  description:
    "Supratim Das — Full-Stack Software Engineer with 7+ years of experience in React, Next.js, Node.js & React Native. Founder of Dreamlytix, transforming schools into digital ecosystems. Open for consulting, collaborations & product development.",
  keywords: [
    "Supratim Das",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "Dreamlytix",
    "Software Engineer India",
    "Freelance Developer",
    "EdTech Founder",
    "TypeScript",
    "MongoDB",
    "NestJS",
  ],
  authors: [{ name: "Supratim Das", url: "https://www.supimione.com" }],
  creator: "Supratim Das",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Supratim Das",
    title: "Supratim Das | Full-Stack Engineer & Founder of Dreamlytix",
    description:
      "Full-Stack Software Engineer with 7+ years building scalable web & mobile apps. Founder of Dreamlytix — transforming education through technology.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@supimione",
    creator: "@supimione",
    title: "Supratim Das | Full-Stack Engineer & Founder",
    description:
      "7+ years building scalable products with React, Next.js, Node.js & React Native. Founder of Dreamlytix.",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${sans.variable} ${mono.variable}`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Supratim Das",
              url: "https://www.supimione.com",
              jobTitle: "Full-Stack Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Dreamlytix",
                url: "https://dreamlytix.com",
              },
              sameAs: [
                "https://www.linkedin.com/in/supimione/",
                "https://github.com/supimione",
                "https://x.com/supimione",
                "https://www.instagram.com/supimione/",
              ],
              knowsAbout: [
                "React", "Next.js", "Node.js", "TypeScript", "React Native",
                "MongoDB", "NestJS", "Tailwind CSS", "Redux",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-darkBg text-white overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
