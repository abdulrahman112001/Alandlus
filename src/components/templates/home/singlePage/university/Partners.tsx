import { MainHeading, MainTitle } from "@/components/molecules";
import Image from "next/image";
import React from "react";

import {
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
  Client7,
  Client8,
} from "@/components/atom";
import SinglePartners from "./SinglePartners";
export default function Partners() {
  return (
    <>
      <div className="text-center mb-6 pt-[120px]">
        <h2 className="text-2xl font-bold text-[#0F2239]">شركاء النجاح</h2>
        <div className="mt-2 border-b-4 border-blue-500 w-20 mx-auto"></div>
      </div>
      <div className=" container mx-auto flex flex-col md:flex-row items-center px-[12px]">
        <div className="flex items-center flex-col md:block md:w-[50%]">
          <MainTitle title="شركاء النجاح  " />
          <MainHeading className=" md:max-w-[500px] text-center md:text-left mb-0">
            اكثر من <span className="text-[#0D5EF4]">150+</span> جامعة عالميا
          </MainHeading>
        </div>

        <div className="partners-picture md:w-[50%] flex flex-wrap">
          <SinglePartners src={Client1} />
          <SinglePartners src={Client2} />
          <SinglePartners src={Client3} />
          <SinglePartners src={Client4} />
          <SinglePartners src={Client5} />
          <SinglePartners src={Client6} />
          <SinglePartners src={Client7} />
          <SinglePartners src={Client8} />
        </div>
      </div>
    </>
  );
}
