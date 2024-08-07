"use client"; //ui manipulation or using any react hook we have to use

import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-primary">
        <button
          onClick={toggleDarkMode}
          className="absolute w-12 h-12 bottom-12 right-12 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black text-sm font-semibold"
        >
          {darkMode ? "LHT" : "DRK"}
        </button>
      </main>
    </div>
  );
}
