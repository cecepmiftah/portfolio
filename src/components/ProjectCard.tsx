import Image from "next/image";
import React from "react";

const ProjectCard = ({
  title,
  currentTheme,
}: {
  title: string;
  currentTheme: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-64 lg:w-72 border-solid border-2 rounded-tl-3xl rounded-br-3xl border-slate-600 ${
          currentTheme === "light" && "bg-slate-200 text-[#21243D]"
        }`}
      >
        <div className="relative w-[80%] h-40 m-auto border-white rounded-md">
          <Image src="/projectEx.PNG" alt="" fill className="object-contain" />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <h1 className="text-center font-bold text-xl border-b-2 border-indigo-500 mx-16">
            {title}
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsum.
            Labore similique nihil error nemo dolorum sunt ipsa quod
            consequuntur.
          </p>
          <div>
            <button className="py-2 px-6 my-2 bg-indigo-500 rounded-xl text-white text-sm">
              Look it up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
