import { MainButton, MainHeading, MainTitle } from "@/components/molecules";
import Image from "next/image";
import React from "react";

export default function SinglePopular({
  img,
  title,
  heading,
  buttonHref,
}: any) {
  return (
    <div
      className={` single-popular w-[90%] md:w-[50%] p-[60px] px-[80px] rounded-[20px]  bg-[Popular1] overflow-hidden h-[400px] relative`}
      style={{
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        // backgroundPosition: "",
      }}
    >
      <div className="overlay h-full bg-[#00000040] absolute z-1 top-0  left-0 w-full"></div>
      <div className="absolute z-9">
        <MainTitle title={title} className="!text-white" />
        <MainHeading className="text-white !text-[30px] w-[350px]">
          {heading}
        </MainHeading>
        {/* <MainButton
          href={buttonHref}
          text="JOIN WITH US"
          className="bg-white "
        /> */}
      </div>
    </div>
  );
}
