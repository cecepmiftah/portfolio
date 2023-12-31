import Image from "next/image";
import React from "react";

const img = [
  { id: 1, url: "/icons8-javascript-100.png", alt: "javascript" },
  //   { id: 2, url: "/icons8-typescript-100.png", alt: "typescript" },
  { id: 3, url: "/icons8-react-js-100.png", alt: "reactjs" },
  { id: 4, url: "/icons8-nextjs-100.png", alt: "nextjs" },
  { id: 5, url: "/icons8-visual-studio-code-100.png", alt: "vscode" },
];

const IconSkills = () => {
  return (
    <div className="w-full flex justify-around mt-6 mx-2 gap-3 border-y-[1px] border-slate-400 md:mt-3 lg:justify-evenly">
      {img.map((item) => (
        <Image
          src={item.url}
          alt={item.alt}
          key={item.id}
          width={80}
          height={80}
          className="p-2 md:p-1"
        />
      ))}
    </div>
  );
};

export default IconSkills;
