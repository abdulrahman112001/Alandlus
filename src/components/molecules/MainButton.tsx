import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MainButton({ text, className, href }: any) {
  return (
    <Link href={href}>
      <button
        type="submit"
        className={`bg-[#0D5EF4]  max-h-[55px] text-[14px] lg:text-[16px] gap-2 py-[18px] px-[30px] w-fit mx-auto lg:m-0  lg:min-w-fit rounded-[5px] font-bold flex justify-center items-center uppercase ${className}`}
      >
        {text}
        <span>
          <FaArrowLeft/>
        </span>
      </button>
    </Link>
  );
}
