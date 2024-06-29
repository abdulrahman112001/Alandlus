import { useSocialLinks } from "@/hooks/useSocialLinks ";
import Image from "next/image";
import React from "react";

function About() {
  const { links } = useSocialLinks();

  return (
    <div>
      <div className="mx-[50px]">
        <div>
          <Image
            alt=""
            src={"/assets/image5.jpg"}
            width={10000}
            height={100}
            className="w-full h-[80vh]"
          />
        </div>
        <div className="mt-5">
          <p >{links?.aboutUs}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
