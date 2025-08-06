"use client";

import React from "react";
import { ReusableButton } from "@/components/Common/Button";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export default function GCCFooter() {
  return (
    <>
      <footer className="container text-white py-12 relative bg-black">
        <div className="absolute inset-0">
          <Image
            src="/home/footer/footer.jpg"
            alt="footer-bg"
            className="w-full h-full object-cover opacity-25"
            width={1920}
            height={824}
          />
        </div>

        <div className="relative z-10">
          {/* Top heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-[25px] lg:mb-[50px]"
          >
            <h1 className="text-[30px] lg:text-[68px] font-normal leading-tight max-w-3xl">
              Transforming Spaces,
              <br />
              Building Futures
            </h1>
          </motion.div>
          <div className="w-full border-b border-[#515151] mb-[25px] lg:mb-[63px]"></div>
          <div className="flex flex-col md:flex-row justify-between lg:gap-10 gap-6 w-full">
            {/* Left section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 mb-2 lg:mb-0"
            >
              <div className="text-[16px] lg:text-[19px] font-light leading-[29px]">
                <p>Gulf Contractors Company (GCC) LLC</p>
                <p>Suite No. 023, Liberty Tower, Khalifa St, P O Box 45363</p>
                <p>Abu Dhabi, UAE</p>
              </div>
              <div className="lg:space-y-4 space-y-2 flex flex-col">
                {/* Email */}
                <div className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer inline-flex items-center gap-[13px]">
                  <div className="lg:w-[40px] lg:h-[40px] w-[35px] h-[35px] border border-[#515151] bg-black rounded-full flex justify-center items-center">
                    <Image
                      src="/home/footer/msg.png"
                      alt="email"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                  <a
                    href="mailto:info@gcc.ae"
                    className="font-normal text-[19px] md:text-[28px]"
                  >
                    info@gcc.ae
                  </a>
                </div>
                {/* Phone */}
                <div className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer inline-flex items-center gap-[13px]">
                  <div className="lg:w-[40px] lg:h-[40px] w-[35px] h-[35px] border border-[#515151] bg-black rounded-full flex justify-center items-center">
                    <Image
                      src="/home/footer/number.png"
                      alt="phone"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </div>
                  <a
                    href="tel:+97126267510"
                    className="font-normal text-[19px] md:text-[28px]"
                  >
                    +971 2 626 7510
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Right section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col lg:gap-[37px] gap-[20px] min-w-[280px]"
            >
              <p className="font-normal text-[25px] lg:text-[32px]">
                Quick Links
              </p>
              <div className="grid grid-cols-2 lg:gap-x-14 place-items-stretch lg:text-[19px] text-[16px] font-light">
                <ul className="space-y-[3px]">
                  <li>
                    <a
                      href=""
                      className="inline-block cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    >
                      About GCC
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    >
                      Group Companies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    >
                      Certifications
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
                <ul className="space-y-[3px]">
                  <li>
                    <a
                      href="#"
                      className="inline-block cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    >
                      Clientele & Partnerships
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    >
                      Health Safety & Environmental
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="w-full border-b border-[#515151] lg:mb-[48px] mb-[24px] lg:mt-[63px] mt-[31px]"></div>
          {/* Social and Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 w-full"
          >
            <div className="flex lg:space-x-[35px] lg:text-[16px] text-[14px] font-light uppercase w-full lg:w-1/2 justify-between px-4 lg:px-0 lg:justify-start">
              {["LINKEDIN", "FACEBOOK", "YOUTUBE"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-1 group text-[#787878] transition-all duration-300 hover:scale-110"
                >
                  {label}
                  <MdArrowOutward className="text-[#7AC142] text-[22px] group-hover:underline" />
                </a>
              ))}
            </div>

            <div className="w-full md:w-1/2 flex justify-center lg:justify-start lg:ml-60">
              <ReusableButton
                label="Download Profile"
                iconPosition="right"
                className="group bg-[#F4F4F4] hover:bg-[#EE3524] hover:text-white px-6 rounded-[35px] lg:h-[42px] h-[40px] text-[16px] text-[#515151] border border-[#515151] font-light"
                icon={
                  <Image
                    src="/home/footer/download.png"
                    alt="Download"
                    width={24}
                    height={24}
                    className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                }
              />
            </div>
          </motion.div>
        </div>
      </footer>

      {/* copyright section */}
      <div className="bg-[#151515] text-[#787878] text-xs font-light py-4 container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
          {/* Links */}
          <div className="flex flex-row w-full lg:w-fit justify-center gap-24 text-[16px]">
            <a href="#">Terms & Conditions</a>
            <a href="#">Feedback</a>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-right opacity-75 text-[14px]">
            © 2025 GCC. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
