"use client";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "next-themes";

export const links = [
  { id: 1, title: "Home", url: "#home", icon: "/home.svg" },
  { id: 2, title: "Projects", url: "#projects", icon: "/project.svg" },
  { id: 3, title: "About Me", url: "#about", icon: "/profile.svg" },
  { id: 4, title: "Contacts", url: "#contacts", icon: "/contact.svg" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentTheme = theme === "dark" ? "dark" : "light";

  return (
    <div
      className={`h-12 flex justify-end items-center sticky right-0 top-0 lg:h-16 z-20 ${
        active && currentTheme === "light"
          ? "bg-slate-200"
          : currentTheme === "dark" && "bg-[#121212]"
      } transition-all duration-300 ease-in}`}
    >
      {/* <div
      className={`h-12 flex justify-end items-center sticky right-0 top-0 lg:h-16 z-20 ${
        active && currentTheme === "light"
          ? "bg-sky-400 text-white"
          : "bg-white"
      } transition-all duration-300 ease-in`}
    > */}
      <div className="hidden md:flex gap-6 mx-6">
        {links.map((link) => (
          <Link
            href={link.url}
            className="font-medium text-lg lg:text-xl"
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
        <DarkModeToggle />
      </div>
      {/* Mobile */}
      <div className="md:hidden flex gap-2">
        <DarkModeToggle />
        <MobileNav links={links} currentTheme={currentTheme} />
      </div>
    </div>
  );
};

export default Navbar;
