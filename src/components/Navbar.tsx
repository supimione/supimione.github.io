"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Menu, MenuItem } from "./ui/navbar-menu";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Dreamlytix", href: "#dreamlytix" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 max-w-md mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            <MenuItem
              setActive={setActive}
              active={active}
              item={item.label}
            />
          </a>
        ))}
      </Menu>
    </div>
  );
}
