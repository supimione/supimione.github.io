"use client";

import React from "react";

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <nav
      aria-label="Main navigation"
      className="relative rounded-full bg-darkBg/80 text-sm text-zinc-300 shadow-lg shadow-blue-500/5 ring-1 ring-white/10 backdrop-blur-xl flex justify-center space-x-4 px-4 py-3"
    >
      {children}
    </nav>
  );
};

export const MenuItem = ({
  item,
}: {
  item: string;
}) => {
  return (
    <span className="cursor-pointer text-zinc-400 hover:text-blue-400 text-xs px-2 transition-colors duration-300">
      {item}
    </span>
  );
};
