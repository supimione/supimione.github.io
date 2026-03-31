import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Supratim Das - Full-Stack Engineer & Founder",
  description:
    "Full-Stack Software Engineer with 7+ years of experience. Founder of Dreamlytix. Building scalable, high-performance web & mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-darkBg text-white overflow-x-hidden">
        <ParticleBackground />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
