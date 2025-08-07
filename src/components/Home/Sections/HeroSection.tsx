"use client";
import { useState, useEffect } from "react";
import { ReusableButton } from "@/components/Common/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
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
    <div className="relative lg:h-[780px] h-[765px] max-w-[1920px] overflow-hidden">
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

      {/* HERO TEXT CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full w-full container text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden -mt-16 md:mt-8 w-[330px] md:w-full"
        >
          <h1 className="text-[39px] lg:text-[72px] font-normal leading-[55px] lg:leading-[85px] tracking-[0.02em]">
            Pioneering Progress with <br /> Quality & Expertise
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="overflow-hidden mt-[22px] lg:mt-[25px] max-w-5xl"
        >
          <p className="text-[20px] lg:text-[23px] font-light lg:leading-[35px]">
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
                className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            }
            iconPosition="right"
            className="group hover:bg-[#EE3524] hover:text-white px-6 rounded-[35px] h-[42px] text-[16px] text-[#FFFFFF] border border-[#FFFFFF] font-light"
          />
        </motion.div>
      </div>

      {/* STATS */}
      <div className="absolute bottom-0 left-0 w-full lg:pr-52 lg:px-20 px-3 sm:px-10">
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
      <div className="absolute bottom-1/2 lg:top-1/2 left-1/2 lg:left-auto lg:right-4 lg:-translate-y-[160px] -translate-x-[50%] translate-y-[220px] flex lg:flex-col flex-row z-10">
        {HERO_IMAGES.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className="flex lg:flex-row flex-col gap-1 lg:gap-2"
            >
              {/* Index Number */}
              <span
                className={cn(
                  "w-6 text-[14px] font-light tabular-nums text-center",
                  isActive ? "text-white" : "text-white/40"
                )}
              >
                0{index + 1}
              </span>

              {/* Line */}
              <div
                className={cn(
                  // Responsive height/width for horizontal vs vertical line
                  "relative bg-white/50 overflow-hidden transition-all duration-500 border-0",
                  isActive
                    ? "lg:h-16 h-[3px] lg:w-[3px] w-16"
                    : "lg:h-6 h-[2px] lg:w-[2px] w-6"
                )}
              >
                {/* Green bar only on active */}
                <div
                  className={cn(
                    "absolute bg-[#7AC142] transition-all duration-[5200ms]",
                    // Direction of green bar fill
                    isActive && barVisible
                      ? "lg:left-0 lg:top-0 lg:w-[3px] lg:h-full w-full h-[3px] left-0 top-0"
                      : "lg:w-[3px] lg:h-0 w-0 h-[3px]"
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
