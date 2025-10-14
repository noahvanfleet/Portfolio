"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () =>
    setTheme(currentTheme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      className="
        relative w-[3.5vw] h-[3.5vw] flex items-center justify-center
        rounded-xl
        bg-transparent
        border-gray-200 dark:border-gray-800
        transition-colors duration-400
        hover:bg-gray-300 dark:hover:bg-gray-700
        focus:outline-none
      "
    >
      {/* Sun */}
      <svg
        className={`
          w-[2.5vw] h-[2.5vw] text-yellow-500
          absolute
          transition-all duration-500 ease-out
          transform
          ${currentTheme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}
        `}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <g stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>

      {/* Moon */}
      <svg
        className={`
          w-[2.5vw] h-[2.5vw] text-gray-200
          absolute
          transition-all duration-500 ease-out
          transform
          ${currentTheme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}
        `}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    </button>
  );
};

export default ThemeButton;
