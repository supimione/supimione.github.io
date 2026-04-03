"use client";

import { cn } from "@/utils/cn";
import { Menu, MenuItem } from "./ui/navbar-menu";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-6 inset-x-0 max-w-lg mx-auto z-50", className)}
    >
      <Menu>
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            <MenuItem item={item.label} />
          </a>
        ))}
      </Menu>
    </div>
  );
}
