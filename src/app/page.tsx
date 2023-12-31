"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import IconSkills from "@/components/IconSkills";
import ProjectCard from "@/components/ProjectCard";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const currentTheme = theme === "dark" ? "dark" : "light";

  return (
    <div
      className={`overflow-x-hidden ${
        currentTheme === "light" && "text-[#21243D]"
      }`}
    >
      <div id="home">
        <Hero />
        <IconSkills />
      </div>
      <div className="p-6" id="projects">
        <h1 className="text-center text-2xl font-bold md:text-3xl">Projects</h1>
        {/* <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center pt-6"> */}
        <div className="flex gap-6 py-6 overflow-x-scroll">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProjectCard
              title={`Project ${index + 1}`}
              key={index}
              currentTheme={currentTheme}
            />
          ))}
        </div>
        <div className="flex justify-end mr-4">
          <Image
            src="/arrow_right.svg"
            alt="arrow-right"
            width={30}
            height={20}
            className=""
          />
        </div>
      </div>
      <div className="pt-6" id="about">
        <h1 className="text-center text-2xl font-bold md:text-3xl">About Me</h1>
        <About />
      </div>
      <div className="pt-6" id="contacts">
        <h1 className="text-center text-2xl font-bold md:text-3xl">
          Contact Me
        </h1>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
