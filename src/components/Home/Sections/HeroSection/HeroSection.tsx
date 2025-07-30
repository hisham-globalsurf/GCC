"use client";
import { useState, useEffect } from "react";
import { ReusableButton } from "@/components/Common/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HeroNavbar from "./HeroNavbar";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  "/home/hero/hero1.jpg",
  "/home/areaExp/area1.png",
  "/home/areaExp/area4.png",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    setBarVisible(false);
    const timeout = setTimeout(() => setBarVisible(true), 10);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[890px] md:h-screen lg:h-[774px] max-w-[1920px] overflow-hidden">
      <AnimatePresence mode="wait">
        {HERO_IMAGES.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <motion.div
              key={index}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ pointerEvents: isActive ? "auto" : "none" }}
            >
              <Image
                src={src}
                alt="Hero Background"
                fill
                priority
                className="object-cover w-full h-full"
              />
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 100%)",
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* NAVBAR */}
      <HeroNavbar />

      {/* HERO TEXT CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full w-full px-6 sm:px-10 md:px-24 text-white">
        <h1 className="text-[35px] w-[300px] md:text-[72px] md:w-full font-normal md:leading-[85px]">
          Pioneering Progress with <br /> Quality & Expertise
        </h1>
        <p className="mt-[25px] max-w-5xl text-[23px] font-light md:leading-[35px]">
          Gulf Contractors Company (GCC) is a subsidiary of Abu Dhabi-based Al
          Sharafi Group and United Eastern (UE) Group, leading conglomerates
          with diverse interests across the MENA region.
        </p>
        <div className="mt-6">
          <ReusableButton
            label="READ MORE"
            icon={
              <Image
                src="/home/about/right_top_arrow.png"
                alt="Download"
                width={28}
                height={28}
              />
            }
            iconPosition="right"
            className="hover:bg-gray-200 px-6 rounded-[35px] h-[42px] text-[16px] text-[#FFFFFF] border border-[#FFFFFF] font-light"
          />
        </div>
      </div>

      {/* STATS */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-24 md:pr-48">
        <div className="grid grid-cols-2 md:grid-cols-4 text-white border-t-1">
          {/* Stat 1 */}
          <div className="flex flex-col border-l border-r border-[#C2C2C2] pl-10 text-left justify-center pb-5">
            <span className="text-[30px] md:text-[68px] font-normal">35+</span>
            <span className="text-[12px] md:text-[19px] font-light">
              YEARS OF EXPERTISE
            </span>
          </div>

          {/* Stat 2 - highlighted */}
          <div className="flex flex-col bg-[#FA3D2F] text-white pl-10 text-left justify-center pb-5">
            <span className="text-[30px] md:text-[68px] font-normal">180M</span>
            <span className="text-[12px] md:text-[19px] font-light">
              PORTFOLIO VALUE
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col border-x border-y border-[#C2C2C2] pl-10 text-left justify-center pb-5">
            <span className="text-[30px] md:text-[68px] font-normal">750+</span>
            <span className="text-[12px] md:text-[19px] font-light">
              PROJECTS COMPLETED
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col border-l border-r border-[#C2C2C2] pl-10 text-left justify-center pb-5">
            <span className="text-[30px] md:text-[68px] font-normal">
              5000+
            </span>
            <span className="text-[12px] md:text-[19px] font-light">
              DEDICATED MANPOWER
            </span>
          </div>
        </div>
      </div>

      {/* SCROLLING TIMER INDICATOR */}
      <div className="absolute top-[250px] md:top-1/2 md:right-4 right-2 -translate-y-1/2 flex flex-col z-10">
        {HERO_IMAGES.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <div key={index} className="flex items-cente gap-2">
              {/* Index Number */}
              <span
                className={cn(
                  "w-6 text-[14px] font-light tabular-nums",
                  isActive ? "text-white" : "text-white/40"
                )}
              >
                0{index + 1}
              </span>

              {/* Vertical Line */}
              <div
                className={cn(
                  "relative w-[2px] overflow-hidden bg-white/50 transition-all duration-600 border-0",
                  isActive ? "h-16 w-[3px]" : "h-6"
                )}
              >
                {/* Green bar only on active */}
                <div
                  className={cn(
                    "absolute left-0 top-0 w-[3px] bg-[#7AC142] transition-all duration-[5400ms]",
                    isActive && barVisible ? "h-full" : "h-0"
                  )}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
