import React from 'react'
import { FaBook } from "react-icons/fa6";

export default function MainTitle({title,className}:any) {
  return (
    <span className={`mb-[12px] text-[#0d5ef4]  flex items-center lg:text-[22px] gap-4 uppercase ${className}`}>
      <FaBook />
      {title}
    </span>
  )
}
