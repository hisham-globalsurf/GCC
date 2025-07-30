"use client";

import Image from "next/image";
import { FaYoutube, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function HeroNavbar() {
  const navLinks = [
    "About",
    "Expertise",
    "AI Technology",
    "Projects",
    "How We Work",
    "News & Media",
    "Careers",
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-20 h-[99px] md:overflow-hidden">
      <div className="flex items-center justify-between h-full border-b border-[#DBDBDB] md:pl-24">
        {/* Logo */}
        <Image
          src="/home/hero/navlogo.png"
          alt="Logo"
          width={160}
          height={50}
        />

        {/* Navigation & Button */}
        <div className="flex items-center gap-10 h-full">
          <div className="hidden md:flex flex-col items-end gap-5">
            {/* Social Icons */}
            <div className="flex gap-2">
              <div className="group w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#C2C2C2] bg-[#F4F4F4] hover:bg-[#EE3524] hover:border-[#EE3524] transition-colors duration-300">
                <FaFacebookF
                  size={14}
                  className="text-[#515151] group-hover:text-black transition-colors duration-200"
                />
              </div>

              <div className="group w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#C2C2C2] bg-[#F4F4F4] hover:bg-[#EE3524] hover:border-[#EE3524] transition-colors duration-300">
                <FaLinkedinIn
                  size={14}
                  className="text-[#515151] group-hover:text-black transition-colors duration-200"
                />
              </div>

              <div className="group w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#C2C2C2] bg-[#F4F4F4] hover:bg-[#EE3524] hover:border-[#EE3524] transition-colors duration-300">
                <FaYoutube
                  size={16}
                  className="text-[#515151] group-hover:text-black transition-colors duration-200"
                />
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex gap-9 text-white text-[16px] font-normal uppercase leading-[29px]">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-[#EE3524] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Button */}
          <div className="relative z-10 bg-[#EE3524] h-full flex px-[40px] py-[29px] items-center outline-[#EE3524] outline-[1px]">
            <button className="cursor-pointer text-white uppercase text-[16px] font-light border-1 border-white rounded-[25px] py-[5px] px-[25px]">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
