"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { links } from "./Navbar";

type PropsType = {
  id: number;
  title: string;
  url: string;
  icon: string;
};

const MobileNav = ({
  links,
  currentTheme,
}: {
  links: PropsType[];
  currentTheme: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex flex-col`}>
      <div className="mr-2">
        {!open ? (
          <Image
            src={"/menu.png"}
            alt="hamburger-menu"
            width={24}
            height={24}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src={"/close.png"}
            alt="hamburger-menu"
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      {open && (
        <div
          className={`absolute left-0 top-12 w-full h-[100vh] font-medium flex flex-col justify-center gap-16 text-3xl z-10  ${
            currentTheme === "light" ? "bg-white" : "bg-[#121212]"
          }`}
        >
          {links.map((link: PropsType) => (
            <div key={link.id} className="flex justify-center items-center">
              <div className="w-1/2 flex gap-3 justify-start items-start">
                {currentTheme === "light" && (
                  <Image
                    src={link.icon}
                    alt="icon"
                    width={40}
                    height={40}
                    className="flex-shrink-0"
                  />
                )}

                <Link
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className="flex-grow-0"
                >
                  {link.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
