"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

interface UnDevelopmentData {
  id: number;
  title: string;
  description: string;
  image: string;
  logo: string;
}

const unDevelopmentData: UnDevelopmentData[] = [
  {
    id: 1,
    logo: "/sustainability/Un/icons/icon1.png",
    title: "Good Health and Well-Being",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/sustainability/Un/UnDetails/UnDetails1.jpg",
  },
  {
    id: 2,
    title: "Clean Water and Sanitation",
    description: "Clean Water and Sanitation - Water management on sites",
    image: "/sustainability/Un/UnDetails/UnDetails2.jpg",
    logo: "/sustainability/Un/icons/icon2.png",
  },
  {
    id: 3,
    title: "Affordable Clean Energy",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/sustainability/Un/UnDetails/UnDetails3.jpg",
    logo: "/sustainability/Un/icons/icon3.png",
  },
  {
    id: 4,
    title: "Industry, Innovation and Infrastructure",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/sustainability/Un/UnDetails/UnDetails4.jpg",
    logo: "/sustainability/Un/icons/icon4.png",
  },
  {
    id: 5,
    title: "Real Estate",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/home/sectors/sec4.png",
    logo: "/home/sectors/secLogo4.png",
  },
  {
    id: 6,
    title: "Real Estate",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/home/sectors/sec4.png",
    logo: "/home/sectors/secLogo4.png",
  },
  {
    id: 7,
    title: "Real Estate",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/home/sectors/sec4.png",
    logo: "/home/sectors/secLogo4.png",
  },
];

export default function UnDevelopment() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="bg-white text-black py-[57px] px-3 sm:px-10 lg:pl-20">
      <div>
        <motion.h2
          className="text-[40px] lg:text-[68px] font-normal mb-[27px] text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          UN Sustainable Development Goals
        </motion.h2>
        <motion.p
          className="text-[19px] lg:text-[23px] font-light max-w-[80vw] mb-[47px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Gulf Contractors supports the global agenda for a more sustainable and
          equitable future. Our practices align with several key United Nations
          Sustainable Development Goals, particularly those connected to
          construction, infrastructure, and community development.
        </motion.p>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3.4,
              },
            }}
            className="sectors-swiper"
            loop={true}
          >
            {unDevelopmentData.map((unDevelopment) => (
              <SwiperSlide key={unDevelopment.id} className="!h-[550px]">
                <motion.div
                  className="group cursor-pointer h-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="group border-t-1 border-r-1 border-[#C2C2C2] transition-all duration-300 p-2 h-full flex flex-col items-center lg:group-hover:border-t-[#EE3524] lg:group-hover:border-t-6">
                    <div className="px-1 py-6">
                      {/* Icon Row */}
                      <div className="mb-[16px] flex justify-between items-center">
                        <div className="w-[100px] h-[100px] flex items-center justify-center">
                          <Image
                            src={unDevelopment.logo}
                            alt={unDevelopment.title}
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Button */}
                        <div className="group/button lg:hidden block">
                          <div
                            className="lg:hidden block"
                            onClick={handleToggle}
                          >
                            <ArrowUpRight
                              size={24}
                              className={`transition duration-300 ${
                                isOpen ? "rotate-315" : "rotate-135"
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[32px] font-normal mb-[10px]">
                        {unDevelopment.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`
    text-[19px] font-light overflow-hidden transition-all duration-300
    h-0 opacity-0
    ${isOpen ? "h-20 opacity-100" : ""}
    lg:h-0 lg:opacity-0 lg:group-hover:h-20 lg:group-hover:opacity-100
  `}
                      >
                        {unDevelopment.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-full hover:h-[320px] transition-all duration-300 overflow-hidden">
                      <Image
                        src={unDevelopment.image}
                        alt={unDevelopment.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation Buttons */}
          <div className="absolute lg:bottom-[50px] lg:-translate-y-1/2 lg:left-[calc(100%/3*2.588)] -right-2 lg:right-0 z-10 lg:w-14 lg:h-14 w-12 h-12 bg-black rounded-full flex overflow-hidden shadow-lg">
            {/* Left Button */}
            <div className="swiper-button-prev-custom w-1/2 h-full bg-black hover:bg-white/30 flex items-center justify-center transition-colors duration-200 cursor-pointer">
              <ChevronLeft className="text-[#7AC142]" />
            </div>
            {/* Right Button */}
            <div className="swiper-button-next-custom w-1/2 bg-black hover:bg-white/30 flex items-center justify-center transition-colors duration-200 cursor-pointer">
              <ChevronRight className="text-[#7AC142]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
