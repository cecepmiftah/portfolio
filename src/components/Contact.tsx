import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-14">
      <div className="flex items-center gap-1">
        <Image src="/icons8-gmail.svg" alt="email" width={30} height={30} />
        <h1 className="font-medium text-lg">cecepmiftah73@gmail.com</h1>
      </div>
      <div className="flex items-center gap-1">
        <Image
          src="/icons8-whatsapp-100.png"
          alt="message"
          width={30}
          height={30}
        />
        <h1 className="font-medium text-lg">+6288908XXXX</h1>
      </div>
    </div>
  );
};

export default Contact;
