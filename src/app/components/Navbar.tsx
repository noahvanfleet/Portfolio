"use client";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.style.scrollPaddingTop = '4vw';
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <nav className="hidden md:flex fixed top-0 left-0 w-full bg-white dark:bg-[#1d1d23] z-50 justify-center items-center py-[1vw] transition-colors">
      {/* Logo */}
      <h1 className="fixed left-[2vw] font-extrabold text-[2vw] selectDisable">NVF</h1>

      {/* Navigation Links */}
      <ul className="flex gap-[3vw] relative">
        {sections.map((s) => (
          <li key={s.id} className="relative group flex items-center">
            <a
              href={`#${s.id}`}
              className={`flex items-center gap-[1vw] text-[1.5vw] transition-all duration-300 ease-out transform 
                ${
                  active === s.id
                    ? "text-[#0095ff] dark:text-[#41acf9] font-semibold"
                    : "text-gray-600 dark:text-[#b2b2b6]"
                } 
                group-hover:text-[#2cb1c5] group-hover:-translate-y-[1px]`}
            >
              {/* Boat beside active section */}
              {active === s.id && (
                <span
                  className="text-[1.5vw] transition-all duration-500 ease-in-out opacity-100 translate-x-0"
                  style={{ transform: "translateX(-4px)" }}
                  aria-hidden="true"
                >
                  ⛵
                </span>
              )}
              {s.label}

              {/* Animated underline */}
              <span
                className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] bg-[#05dbfc] rounded-full transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"
              ></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Theme Switcher */}
      <div className="fixed right-[1vw] selectDisable">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
