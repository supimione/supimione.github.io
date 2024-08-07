"use client"; //ui manipulation or using any react hook we have to use

import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

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
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Uses"
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
