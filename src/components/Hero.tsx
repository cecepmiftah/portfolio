import Image from "next/image";
import Link from "next/link";
import React from "react";

const linkSocials = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/cecep-miftah-solahudin-28b812275/",
    img: "/icons8-linkedin.svg",
    alt: "linkedin",
    width: 30,
    height: 30,
  },
  {
    id: 2,
    url: "https://www.instagram.com/cecepm999/",
    img: "/icons8-instagram-100.png",
    alt: "instagram",
    width: 30,
    height: 30,
  },
  {
    id: 3,
    url: "https://web.facebook.com/cecep.m.3760/",
    img: "/icons8-facebook.svg",
    alt: "facebook",
    width: 30,
    height: 30,
  },
  {
    id: 4,
    url: "https://github.com/cecepmiftah",
    img: "/icons8-github-100.png",
    alt: "github",
    width: 33,
    height: 33,
  },
];

const Hero = () => {
  return (
    <div className="h-1/2 flex flex-col items-center gap-6 md:flex-row-reverse md:justify-center md:h-full md:items-center md:my-6">
      <div className="relative my-3 w-48 h-48 md:w-60 md:h-60">
        <Image
          src="/my-pic.jpeg"
          alt="img-profile"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3 w-full text-center justify-center md:w-1/2 md:text-start md:gap-4">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl">Hi, I am Cecep,</h1>
          <h1 className="font-bold text-2xl md:text-3xl">
            Frontend Web Developer
          </h1>
        </div>
        <div>
          <p className="text-sm md:text-base md:min-w-[20rem] lg:mx-w-[38rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            perspiciatis veniam excepturi commodi molestiae! Quis autem saepe
            repellendus veniam labore? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates, animi.
          </p>
        </div>
        <div className="flex gap-2 justify-center md:justify-start">
          {linkSocials.map((item) => (
            <Link
              href={item.url}
              target="_blank"
              key={item.id}
              className="hover:scale-150 transition-all duration-500"
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
