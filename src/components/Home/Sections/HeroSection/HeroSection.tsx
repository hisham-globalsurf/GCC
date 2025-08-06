"use client";
import { useState, useEffect } from "react";
import { ReusableButton } from "@/components/Common/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HeroNavbar from "./HeroNavbar";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

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
    <div className="relative lg:h-[780px] h-[720px] max-w-[1920px] overflow-hidden">
      <AnimatePresence>
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
      <div className="relative z-10 flex flex-col justify-center items-start h-full w-full container text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden -mt-16 md:mt-8 w-[330px] md:w-full"
        >
          <h1 className="text-[39px] md:text-[72px] font-normal leading-[55px] md:leading-[85px] tracking-[0.02em]">
            Pioneering Progress with <br /> Quality & Expertise
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="overflow-hidden mt-[22px] md:mt-[25px] max-w-5xl"
        >
          <p className="text-[20px] md:text-[23px] font-light md:leading-[35px]">
            Gulf Contractors Company (GCC) is a subsidiary of Abu Dhabi-based Al
            Sharafi Group and United Eastern (UE) Group, leading conglomerates
            with diverse interests across the MENA region.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:mt-[35px] mt-[25px] mb-[30px] lg:mb-[76px] overflow-hidden"
        >
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
            className="px-6 rounded-[35px] h-[42px] text-[16px] text-[#FFFFFF] border border-[#FFFFFF] font-light"
          />
        </motion.div>
      </div>

      {/* STATS */}
      <div className="absolute bottom-0 left-0 w-full containe lg:pr-52 lg:px-20 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-white border-t-1">
          {/* Stat 1 */}
          <div className="flex flex-col border-l border-r border-[#C2C2C2] items-center lg:items-start lg:pl-[45px] text-left justify-center lg:pb-[25px] py-[8px]">
            <span className="text-[30px] lg:text-[68px] font-normal -mb-1">
              <CountUp end={35} suffix="+" duration={2} />
            </span>
            <span className="text-[12px] lg:text-[19px] font-light">
              YEARS OF EXPERTISE
            </span>
          </div>

          {/* Stat 2 - highlighted */}
          <div className="flex flex-col bg-[#FA3D2F] text-white items-center lg:items-start lg:pl-[45px] text-left justify-center lg:pb-[25px] py-[8px]">
            <span className="text-[30px] lg:text-[68px] font-normal -mb-1">
              <CountUp end={180} suffix="M" duration={2} />
            </span>
            <span className="text-[12px] lg:text-[19px] font-light">
              PORTFOLIO VALUE
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col border-x border-y border-[#C2C2C2] items-center lg:items-start lg:pl-[45px] text-left justify-center lg:pb-[25px] py-[8px]">
            <span className="text-[30px] lg:text-[68px] font-normal -mb-1">
              <CountUp end={750} suffix="+" duration={2} />
            </span>
            <span className="text-[12px] lg:text-[19px] font-light">
              PROJECTS COMPLETED
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col border-l border-r border-[#C2C2C2] items-center lg:items-start lg:pl-[45px] text-left justify-center lg:pb-[25px] py-[8px]">
            <span className="text-[30px] lg:text-[68px] font-normal -mb-1">
              <CountUp end={5000} suffix="+" duration={2} />
            </span>
            <span className="text-[12px] lg:text-[19px] font-light">
              DEDICATED MANPOWER
            </span>
          </div>
        </div>
      </div>

      {/* SCROLLING TIMER INDICATOR */}
      <div className="absolute top-[220px] md:top-1/2 md:right-4 right-2 -translate-y-1/2 flex flex-col z-10">
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
                  "relative w-[2px] overflow-hidden bg-white/50 transition-all duration-500 border-0",
                  isActive ? "h-16 w-[3px]" : "h-6"
                )}
              >
                {/* Green bar only on active */}
                <div
                  className={cn(
                    "absolute left-0 top-0 w-[3px] bg-[#7AC142] transition-all duration-[5200ms]",
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
