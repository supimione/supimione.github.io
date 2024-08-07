import type { Metadata } from "next";
import "./globals.css";

//components
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
        <div className="flex min-h-screen flex-col items-center justify-between bg-lightBgColor dark:bg-black">
          <div className="min-h-screen bg-white dark:bg-darkBgColor w-full mx-auto sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12">
            <Navbar darkMode={darkMode} />
            {children}
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </body>
    </html>
  );
}
