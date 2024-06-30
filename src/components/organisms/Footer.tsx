import React from "react";
import MainButton from "../molecules/MainButton";
import Image from "next/image";
import Logo from "../../components/atom/assets/img/logo.svg";
import { FooterLink, WidgetTitle } from "../templates";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaSkype,
  FaLocationDot,
  FaPhone,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa6";
import { useSocialLinks } from "@/hooks/useSocialLinks ";

export default function Footer() {
  const { links } = useSocialLinks();

  return (
    <footer className="bg-[#0F1B31] text-[white] mt-[100px]">
      <div className="center mt-[80px] mb-[40px] px-[15px] pt-10">
        <div className="container mx-auto flex flex-col sm:flex-row flex-wrap gap-6">
          <div className="box sm:w-[50%] lg:w-[25%]">
            <WidgetTitle title="عن الشركة" />
            <p className="about-text mb-[25px] text-[#b3c1d3]">
              نوفر أفضل الأثاث المدرسي بأعلى جودة وسرعة في التسليم لضمان راحة
              الطلاب والمعلمين.
            </p>
            <div className="social">
              <h6 className="mb-[15px] text-[18px] font-[600] uppercase">
                تابعنا على:
              </h6>
              <div className="flex gap-2">
                <Link
                  href={links.facebookLink}
                  className="w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href={links.instagramLink}
                  className="w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href={links.linkedinLink}
                  className="w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href={links.linkedinLink}
                  className="w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href={links.linkedinLink}
                  className="w-[45px] text-[18px] h-[45px] flex justify-center items-center bg-[#1e2c46] text-[#b3c1d3] rounded-full"
                >
                  <FaSkype />
                </Link>
              </div>
            </div>
          </div>
          <div className="box grow">
            <WidgetTitle title="روابط سريعة" />
            <ul className="flex flex-col">
              <FooterLink href="/">الرئيسية</FooterLink>
              <FooterLink href="/aboutUs">من نحن</FooterLink>
              <FooterLink href="/places">اعمالنا</FooterLink>
              <FooterLink href="/contactUs">تواصل معنا</FooterLink>
            </ul>
          </div>
          <div className="box grow">
            <WidgetTitle title="تحميل التطبيق" />
            <p className="about-text mb-[25px] text-[#b3c1d3]">
              حمل تطبيقنا للحصول على تجربة أفضل وخدمات متميزة.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                <FaGooglePlay className="text-2xl" />
                <span>Google Play</span>
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
              >
                <FaApple className="text-2xl" />
                <span>App Store</span>
              </a>
            </div>
          </div>
          <div className="box sm:w-[50%] lg:w-[25%]">
            <WidgetTitle title="تواصل معنا" />
            <div className="flex gap-3 mb-[20px]">
              <span className="text-[20px] text-[#0D5EF4]">
                <FaLocationDot />
              </span>
              <p className="text-[#b3c1d3]">{links.address}</p>
            </div>
            <div className="flex gap-3 mb-[20px]">
              <span className="text-[20px] text-[#0D5EF4]">
                <FaEnvelope />
              </span>
              <Link href={`mailto:${links.email}`} className="text-[#b3c1d3]">
                {links.email}
              </Link>
            </div>
            <div className="flex gap-3 mb-[20px]">
              <span className="text-[20px] text-[#0D5EF4]">
                <FaPhone />
              </span>
              <Link href={`tel:${links.phone}`} className="text-[#b3c1d3]">
                {links.phone}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom bg-[#283752] px-[15px]">
        <div className="container mx-auto py-[16px] text-[#B3c1d3] flex gap-3">
          <p className="">حقوق الطبع والنشر © 2023 جميع الحقوق محفوظة.</p>
          <ul className="grow justify-end gap-5 hidden lg:flex">
            <Link href="/privacy-policy">سياسة الخصوصية</Link>
            <Link href="/terms-conditions">الشروط والأحكام</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
