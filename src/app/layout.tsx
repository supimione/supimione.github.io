import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
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
  authors: [{ name: "Supratim Das", url: "https://supimione.github.io" }],
  creator: "Supratim Das",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://supimione.github.io",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${sans.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Supratim Das",
              url: "https://supimione.github.io",
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
        <ParticleBackground />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
