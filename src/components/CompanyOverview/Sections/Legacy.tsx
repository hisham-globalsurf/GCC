"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type TimelineItem = {
  year: number;
  title: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    year: 1988,
    title: "GULF CONTRACTORS CO LLC, Was Established",
    description:
      "Gulf Contractors Co. LLC was established in 1988. With decades of industry experience, the company has built a strong reputation for quality and reliability. Today, it stands as a trusted name in delivering innovative construction solutions.",
  },
  {
    year: 1999,
    title: "Major Milestone Reached",
    description:
      "A landmark year with significant achievements in infrastructure development.",
  },
  {
    year: 2000,
    title: "Entered New Markets",
    description:
      "Expanded operations into international markets with new projects.",
  },
  {
    year: 2005,
    title: "Flagship Product Launched",
    description: "Introduced our most successful construction solution.",
  },
  {
    year: 2010,
    title: "Global Expansion",
    description:
      "Opened offices in multiple countries to cater to growing demand.",
  },
  {
    year: 2020,
    title: "Digital Transformation",
    description:
      "Adopted modern digital tools to streamline operations and improve service.",
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(500, false);
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(500, false);
    }
  };

  return (
    <section className="w-full">
      {/* Top Heading and Year Nav */}
      <div className="flex flex-col lg:flex-row w-full justify-between lg:h-[198px] border-b-2">
        <div className="flex items-center container justify-between">
          <div className="pt-12">
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-[30px] lg:text-[68px] font-normal"
            >
              Our Legacy
            </motion.h2>
          </div>
          <div className="flex lg:hidden border border-[#515151] overflow-hidden rounded-[25px] w-[112px] h-[42px] mt-12">
            <button
              className="timeline-prev hover:bg-[#EE3524] hover:text-white border-r px-4 w-[56px] border-[#515151] text-[#7AC142]"
              onClick={goToPrev}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="timeline-next hover:bg-[#EE3524] hover:text-white px-4 w-[56px] text-[#7AC142]"
              onClick={goToNext}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex lg:mt-6 items-center w-fit p-3 sm:pl-10 sm:pt-6 lg:pt-0 sm:pr-10 lg:pr-20"
        >
          <div>
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper: SwiperType) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper: SwiperType) => {
                setActiveIndex(swiper.realIndex);
              }}
              navigation={{
                nextEl: ".timeline-next",
                prevEl: ".timeline-prev",
              }}
              spaceBetween={70}
              allowTouchMove={false}
              slidesPerView={5}
              loop={true}
              className="lg:w-[400px] w-[280px]"
            >
              {timelineData.map((item, index) => (
                <SwiperSlide
                  key={item.year}
                  className="flex flex-col items-center pt-5"
                >
                  <span
                    className={`${
                      index === activeIndex
                        ? "font-semibold lg:text-[32px] transition-all duration-500 text-white"
                        : "text-gray-400 lg:text-[19px]"
                    }`}
                  >
                    {item.year}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Arrows */}
          <div className="hidden lg:flex border border-[#515151] overflow-hidden rounded-[25px] w-[112px] h-[42px]">
            <button
              className="timeline-prev hover:bg-[#EE3524] hover:text-white border-r px-4 w-[56px] border-[#515151] text-[#7AC142]"
              onClick={goToPrev}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="timeline-next hover:bg-[#EE3524] hover:text-white px-4 w-[56px] text-[#7AC142]"
              onClick={goToNext}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <div className="hidden lg:block absolute bottom-0 left-19 h-12 w-[1px] bg-[#7AC142]" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container transition-all duration-500 lg:h-[457px] h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/companyOverview/legacy/legacyBg.jpg"
            alt="legacy background"
          fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* Text content on top */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, scale: 0.95, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative lg:max-w-1/2 w-full rounded-lg text-white"
          >
            <h3 className="text-[30px] lg:text-[68px] font-normal">
              {timelineData[activeIndex].year}
            </h3>
            <h4 className="lg:mt-[17px] mt-[8px] text-[20px] lg:text-[23px] font-medium">
              {timelineData[activeIndex].title}
            </h4>
            <p className="mt-[17px] text-[15px] lg:text-[19px] font-light leading-[29px]">
              {timelineData[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
