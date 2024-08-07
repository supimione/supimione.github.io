import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Supratim Das - Software Developer",
  description:
    "I'm a software developer with over 5 years of experience. I started as a wordpress developer, then transitioned to JS world and now I'm mostly focused on developing great user experiences using React.",
};

export default function RootLayout({
  children,
  darkMode,
}: Readonly<{ children: React.ReactNode; darkMode: boolean }>) {
  return (
    <html lang="en" className={darkMode ? "dark" : "light"}>
      <body>
        <Navbar darkMode={darkMode} />
        {children}
      </body>
    </html>
  );
}
