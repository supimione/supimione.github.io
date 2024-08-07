"use client"; //ui manipulation or using any react hook we have to use

import React, { useState } from "react";
import Link from "next/link";

//aceternity ui
import { cn } from "@/utils/cn";
import { Menu, MenuItem } from "./ui/navbar-menu";

function Navbar({
  className,
  darkMode,
}: {
  className?: string;
  darkMode: boolean;
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 max-w-md mx-auto z-50",
        className,
        darkMode ? "dark" : "light"
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/home"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/projects"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>
        <Link href={"/uses"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Uses"
          ></MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
