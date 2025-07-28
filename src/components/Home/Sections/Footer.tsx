"use client";

import React from "react";
import { ReusableButton } from "@/components/Common/Button";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function GCCFooter() {
  return (
    <>
      <footer className="text-white py-12 px-6 sm:px-10 md:px-24 relative bg-black">
        <div className="absolute inset-0">
          <Image
            src="/home/footer/footer.png"
            alt="footer-bg"
            className="w-full h-full object-cover opacity-75"
            width={1920}
            height={824}
          />
        </div>

        {/* Top heading */}
        <div className="mb-[40px] md:mb-[50px]">
          <h1 className="text-[34px] lg:text-[68px] font-normal leading-tight max-w-3xl">
            Transforming Spaces,
            <br />
            Building Futures
          </h1>
        </div>

        <div className="w-full border-b border-[#515151] mb-[40px] md:mb-[63px]"></div>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          {/* Left section */}
          <div className="max-w-md space-y-6">
            <div className="text-[17px] lg:text-[19px] font-light leading-[29px]">
              <p>Gulf Contractors Company (GCC) LLC</p>
              <p>Suite No. 023, Liberty Tower, Khalifa St, P O Box 45363</p>
              <p>Abu Dhabi, UAE</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-[13px]">
                <div className="w-[40px] h-[40px] border border-[#515151] bg-black rounded-full flex justify-center items-center">
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
                  className="font-normal text-[20px] md:text-[28px] hover:underline hover:underline-offset-4"
                >
                  info@gcc.ae
                </a>
              </div>
              <div className="flex items-center gap-[13px]">
                <div className="w-[40px] h-[40px] border border-[#515151] rounded-full flex justify-center items-center">
                  <Image
                    src="/home/footer/number.png"
                    alt="number"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </div>

                <a
                  href="tel:+97126267510"
                  className="font-normal text-[20px] md:text-[28px] hover:underline hover:underline-offset-4"
                >
                  +971 2 626 7510
                </a>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-[37px] min-w-[280px]">
            <p className="font-normal text-[32px]">Quick Links</p>
            <div className="grid grid-cols-2 gap-x-12 text-[19px] font-light underline-offset-3">
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    About GCC
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Group Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Projects
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Clientele & Partnerships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Health Safety & Environmental
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full border-b border-[#515151] mb-[48px] mt-[63px]"></div>

        {/* Social and Download */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
          <div className="flex flex-wrap space-x-[35px] text-[16px] font-light uppercase w-full md:w-1/2 justify-center md:justify-start">
            <a href="#" className="flex items-center gap-1 group">
              LINKEDIN
              <MdArrowOutward className="text-[#7AC142] group-hover:underline text-[22px]" />
            </a>
            <a href="#" className="flex items-center gap-1 group">
              FACEBOOK
              <MdArrowOutward className="text-[#7AC142] group-hover:underline text-[22px]" />
            </a>
            <a href="#" className="flex items-center gap-1 group">
              YOUTUBE
              <MdArrowOutward className="text-[#7AC142] group-hover:underline text-[22px]" />
            </a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-start md:ml-60">
            <ReusableButton
              label="Download Profile"
              iconPosition="right"
              className="bg-white hover:bg-gray-200 px-7 rounded-[35px] h-[59px] text-[16px] text-[#515151] font-light"
              icon={
                <Image
                  src="/home/footer/download.png"
                  alt="Download"
                  width={24}
                  height={24}
                />
              }
            />
          </div>
        </div>
      </footer>

      {/* copyright section */}
      <div className="bg-[#151515] text-xs text-[#787878BF] flex flex-col md:flex-row justify-between items-center py-4 px-6 sm:px-10 md:px-24">
        <div className="flex gap-6 justify-center md:justify-start text-[16px]">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Feedback
          </a>
        </div>
        <p className="text-center md:text-right opacity-75">
          © 2025 GCC. All Rights Reserved
        </p>
      </div>
    </>
  );
}
