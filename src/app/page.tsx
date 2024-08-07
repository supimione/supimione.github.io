"use client"; //ui manipulation or using any react hook we have to use

import { useState } from "react";

//react-icons
import { FaRegLightbulb } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="px-20">
        {" "}
        dasd asdasd as
        <br />
        dasd asdasd as
        <br />
        dasd asdasd as
        <br />
        dasd asdasd as
        <br />
        dasd asdasd as
        <br />
        dasd asdasd as
        <br />
      </main>
      <button
        onClick={toggleDarkMode}
        className="fixed w-10 h-10 bottom-6 right-6 bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10  rounded-full text-sm font-semibold"
      >
        {darkMode ? (
          <FaRegLightbulb size="24px" color="white" className="ml-2" />
        ) : (
          <MdDarkMode size="24px" color="black" className="ml-2" />
        )}
      </button>
    </div>
  );
}
