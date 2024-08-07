import React from "react";
import Link from "next/link";

export const Footer = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className={darkMode ? "dark" : "light"}>
      <footer className="w-full bottom-0 left-0 z-20 px-20 py-12 md:flex md:items-center md:justify-between border-t border-zinc-100 dark:border-zinc-700/40">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Supratim Das. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/home" className="hover:underline me-4 md:me-6">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline me-4 md:me-6">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/uses" className="hover:underline me-4 md:me-6">
              Uses
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
