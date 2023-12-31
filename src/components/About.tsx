import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="px-2 md:px-0 md:w-1/2 lg:max-w-xl">
          <h1 className="font-bold text-center leading-8 text-xl md:text-2xl md:leading-10 md:text-start">
            Just to remind you, I&apos;m Cecep Miftah Solahudin. A Frontend Web
            Developer from Garut, West Java Indonesia.
          </h1>
          <p className="text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            assumenda animi magnam excepturi officiis molestias cupiditate sunt
            vel quis est! Sapiente accusantium repellendus suscipit deserunt
            asperiores magni enim sint quod.
          </p>
        </div>
        <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72">
          <Image
            src="/my-pic2.jpeg"
            alt="my-pic2"
            fill
            className="object-cover"
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center pt-6">
        <h1 className="font-bold text-xl">#Skills</h1>
        <div className="w-full flex justify-around lg:justify-evenly">
          <div className="text-lg border-l-2 py-2 border-slate-400 pl-2 leading-relaxed">
            <h3>HTML</h3>
            <h3>CSS3</h3>
            <h3>JavaScript</h3>
            <h3>ES6</h3>
          </div>
          <div className="text-lg border-l-2 py-2 border-slate-400 pl-2 leading-relaxed">
            <h3>React.js</h3>
            <h3>Next.js</h3>
            <h3>Restful API</h3>
            <h3>Tailwind CSS</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
