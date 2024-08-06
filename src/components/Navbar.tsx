"use client"; //ui manipulation or using any react hook we have to use

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-6 inset-x-0 max-w-md mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem setActive={setActive} active={active} item="Creating">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title=""
                href="#"
                src="/"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title=""
                href="#"
                src="/"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title=""
                href="#"
                src="/"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title=""
                href="#"
                src="/"
                description="Prepare for tech interviews like never before."
              />
            </div>
          </MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Resume"
          ></MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
