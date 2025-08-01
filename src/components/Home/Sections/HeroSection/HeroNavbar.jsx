"use client";

import Image from "next/image";
import { useState } from "react";
import { FaYoutube, FaFacebookF, FaBars, FaXmark } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroNavbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="absolute top-0 left-0 w-full z-20 h-[79px] md:h-[99px] lg:overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between h-full border-b border-[#DBDBDB] px-6 lg:px-0 lg:pl-20">
          {/* Logo */}
          <div className="w-[160px] h-[45px] lg:w-[233px] lg:h-[66px]">
            <Image
              src="/home/hero/navlogo.svg"
              alt="Logo"
              width={233}
              height={66}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 h-full">
            <div className="flex flex-col items-end gap-5">
              {/* Social Icons */}
              <div className="flex gap-2">
                {[FaFacebookF, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                  <div
                    key={i}
                    className="group w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#C2C2C2] bg-[#F4F4F4] hover:bg-[#EE3524] hover:border-[#EE3524] transition-colors duration-300"
                  >
                    <Icon
                      size={14}
                      className="text-[#515151] group-hover:text-black transition-colors duration-200"
                    />
                  </div>
                ))}
              </div>
              {/* Nav Links */}
              <nav className="flex gap-[37px] text-white text-[16px] font-normal uppercase leading-[29px] group">
                {navLinks.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="transition-opacity duration-400 group-hover:opacity-40 hover:opacity-100"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            {/* Contact Button */}
            <div className="bg-[#EE3524] h-full flex w-[200px] py-[29px] justify-center items-center">
              <button className="text-white uppercase text-[16px] font-light border border-white rounded-[25px] py-[5px] px-[25px] hover:bg-white hover:text-[#EE3524] hover:border-[#EE3524] transition-all duration-300">
                CONTACT
              </button>
            </div>
          </div>
          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              className="text-white"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Drawer - Slide In */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-screen z-30 lg:hidden">
              {/* Backdrop with smooth effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
              />
              {/* Drawer (right 90%) */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[90%] h-full bg-white z-40"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with logo and close button */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                  <div className="w-[50px] h-[40px] relative">
                    <Image
                      src="/home/hero/logoOnly.svg"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <FaXmark size={24} className="text-black" />
                  </button>
                </div>
                {/* Nav Links */}
                <nav className="flex flex-col gap-4 px-6 pt-10 text-[18px] font-normal uppercase text-black">
                  {navLinks.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="border-b border-[#C2C2C2] pb-3"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                {/* Bottom: Socials + Contact */}
                <div className="absolute bottom-6 left-0 w-full px-6 flex flex-col gap-6">
                  <div className="flex gap-3">
                    {[FaFacebookF, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                      <div
                        key={i}
                        className="group w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#C2C2C2] bg-[#F4F4F4] hover:bg-[#EE3524] hover:border-[#EE3524] transition-colors duration-300"
                      >
                        <Icon
                          size={14}
                          className="text-[#515151] group-hover:text-black transition-colors duration-200"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#EE3524] rounded-[25px] text-center w-full">
                    <button className="text-white uppercase text-[14px] font-light py-[10px] px-[25px] w-full">
                      CONTACT
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
  );
}
