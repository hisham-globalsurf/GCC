"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { ReusableButton } from "@/components/Common/Button";
import { useState } from "react";

interface SectorData {
  id: number;
  title: string;
  description: string;
  image: string;
  logo: string;
}

const sectorsData: SectorData[] = [
  {
    id: 1,
    logo: "/home/sectors/secLogo1.png",
    title: "Commercial",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/home/sectors/sec1.png",
  },
  {
    id: 2,
    title: "Infrastructure",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/home/sectors/sec2.png",
    logo: "/home/sectors/secLogo2.png",
  },
  {
    id: 3,
    title: "Industrial",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/home/sectors/sec3.png",
    logo: "/home/sectors/secLogo3.png",
  },
  {
    id: 4,
    title: "Real Estate",
    description:
      "GCC, established in 1998, is known for innovation and excellence in construction, with projects.",
    image: "/home/sectors/sec4.png",
    logo: "/home/sectors/secLogo4.png",
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

export default function DiverseSectorsSlider() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="bg-black text-white py-12 px-3 md:px-0 sm:pl-0 md:pl-24">
      <div>
        <motion.h2
          className="text-[40px] md:text-[68px] font-normal mb-10 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Diverse Sectors
        </motion.h2>
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
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3.4,
              },
            }}
            className="sectors-swiper"
            loop={true}
          >
            {sectorsData.map((sector) => (
              <SwiperSlide key={sector.id} className="!h-[550px]">
                <motion.div
                  className="group cursor-pointer h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="group border-t-1 border-r-1 border-[#C2C2C2] transition-all duration-300 p-2 h-full flex flex-col items-center lg:group-hover:border-t-[#7AC142] lg:group-hover:border-t-6">
                    <div className="px-1 py-6">
                      {/* Icon Row */}
                      <div className="mb-[16px] flex justify-between items-center">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <Image
                            src={sector.logo}
                            alt={sector.title}
                            width={48}
                            height={48}
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

                        {/* button on lg for hover */}
                        <div className="group/button hidden lg:group-hover:block">
                          <ReusableButton
                            icon={
                              <Image
                                src="/home/about/right_top_arrow.png"
                                alt="Download"
                                width={24}
                                height={24}
                                className="transition duration-300 group-hover/button:filter group-hover/button:brightness-0 group-hover/button:invert"
                              />
                            }
                            className="bg-[#F5F3F0] group-hover/button:bg-[#EE3524] w-[69px] group-hover/button:text-white rounded-[35px] text-[16px] text-[#515151] border border-[#515151]"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[32px] font-normal mb-[20px]">
                        {sector.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`
    text-[19px] font-light mb-6 overflow-hidden transition-all duration-300
    h-0 opacity-0
    ${isOpen ? "h-20 opacity-100" : ""}
    lg:h-0 lg:opacity-0 lg:group-hover:h-20 lg:group-hover:opacity-100
  `}
                      >
                        {sector.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-full hover:h-[320px] transition-all duration-300 overflow-hidden">
                      <Image
                        src={sector.image}
                        alt={sector.title}
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
            <div className="swiper-button-next-custom w-1/2 h-full bg-black hover:bg-white/30 flex items-center justify-center transition-colors duration-200 cursor-pointer">
              <ChevronRight className="text-[#7AC142]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
