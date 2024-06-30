import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useRouter } from "next/router";

import { MainButton } from "../molecules";
import { MainDrawer } from "../templates";
import { useSocialLinks } from "@/hooks/useSocialLinks ";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { links } = useSocialLinks();

  return (
    <header className="w-full relative">
      <div className="header-top px-[50px] md:pl-[50px] xl:pl-[150px] relative h-[50px] bg-[#0F2239] w-full text-white flex items-center justify-between">
        <div className="left hidden lg:flex items-center gap-2 z-[2]">
          <div className="flex gap-3 pr-2 border-r-2 border-r-[#ffffff33]">
            <span className="text-[20px] ">
              <FaPhone />
            </span>
            <Link href="">{links?.phone} </Link>
          </div>
          <div className="hidden xl:flex gap-3 pr-2 border-r-2 border-r-[#ffffff33]">
            <span className="text-[20px] ">
              <FaEnvelope />
            </span>
            <Link href="">{links?.email}</Link>
          </div>

          <div className="flex gap-3 ">
            <span className="text-[20px] ">
              <FaClock />
            </span>
            <p className="">Mon - Sat: 8:00 - 15:00</p>
          </div>
        </div>

        <div className="right flex items-center justify-center md:justify-between w-full lg:w-auto gap-[50px] z-[2]">
          <div className="social flex gap-2">
            <h6 className="text-[18px]">Follow Us:</h6>
            <ul className="flex gap-3 items-center">
              <Link href={`${links?.facebookLink}`}>
                <FaFacebookF />
              </Link>
              {/* <Link href={`${links?.facebookLink}`}>
                <FaTwitter />
              </Link> */}
              <Link href={`${links?.linkedinLink}`}>
                <FaLinkedinIn />
              </Link>
              {/* <Link href={`${links?.linkedinLink}`}>
                <FaYoutube />
              </Link> */}
              {/* <Link href="">
                <FaSkype />
              </Link> */}
            </ul>
          </div>
         
        </div>
        <span className="absolute bg-[#0D5EF4] left-0 top-0 h-full w-[100%] xl:w-[85%] z-[1] rounded-br-[0px] xl:rounded-br-[50px]"></span>
      </div>

        <div className="flex justify-end md:hidden w-full">
          <MainDrawer />
        </div>
      <div className="sticky-wrapper container mx-auto bg-[#fff] shadow-sm flex items-center justify-between gap-[30px]">
        <ul className="hidden md:flex gap-4">
          <Link href="/" passHref>
            <li
              className={`py-[31.5px] text-[#0F2239] cursor-pointer font-[600] text-[18px] flex items-center gap-2 ${
                router.pathname === "/" ? "text-blue-500" : ""
              }`}
            >
              الرئيسية
            </li>
          </Link>
          <Link href="/places" passHref>
            <li
              className={`py-[31.5px] text-[#0F2239] cursor-pointer font-[600] text-[18px] ${
                router.pathname === "/places" ? "text-blue-500" : ""
              }`}
            >
              اعمالنا
            </li>
          </Link>
          <Link href="/aboutUs" passHref>
            <li
              className={`py-[31.5px] text-[#0F2239] cursor-pointer font-[600] text-[18px] ${
                router.pathname === "/aboutUs" ? "text-blue-500" : ""
              }`}
            >
              من نحن
            </li>
          </Link>
          <Link href="/privacyPolicy" passHref>
            <li
              className={`py-[31.5px] text-[#0F2239] cursor-pointer font-[600] text-[18px] ${
                router.pathname === "/privacyPolicy" ? "text-blue-500" : ""
              }`}
            >
              السياسة والخصوصية
            </li>
          </Link>
          <Link href="/termsConditions" passHref>
            <li
              className={`py-[31.5px] text-[#0F2239] cursor-pointer font-[600] text-[18px] ${
                router.pathname === "/termsConditions" ? "text-blue-500" : ""
              }`}
            >
              الشروط والاحكام
            </li>
          </Link>
          <Link href="/contactUs" passHref>
            <li
              className={`py-[31.5px] text-[#0F2239] cursor-pointer font-[600] text-[18px] ${
                router.pathname === "/contactUs" ? "text-blue-500" : ""
              }`}
            >
              تواصل معنا
            </li>
          </Link>
        </ul>
        <div className="flex items-center gap-5 text-white">
          <div className="hidden lg:flex">
            <MainButton href="/contactUs" text="تواصل معنا" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
