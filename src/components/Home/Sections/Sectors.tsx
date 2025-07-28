"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { ReusableButton } from "@/components/Common/Button";

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
  return (
    <div className="bg-black text-white py-12 px-6 sm:px-10 md:px-24">
      <div className="max-w-7xl">
        <h2 className="text-[40px] md:text-[68px] font-light mb-10 text-left">
          Our Diverse Sectors
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={"auto"}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="sectors-swiper"
          >
            {sectorsData.map((sector) => (
              <SwiperSlide key={sector.id} className="!w-[510px] !h-[550px]">
                <div className="group cursor-pointer h-full">
                  <div className="border-t-1 border-r-1 border-[#C2C2C2] group-hover:border-t-[#7AC142] group-hover:border-t-6 transition-all duration-300 p-2 h-full flex flex-col items-center">
                    <div className="px-3 py-6">
                      {/* Icon */}
                      <div className="mb-[16px] flex justify-between">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <Image
                            src={sector.logo}
                            alt={sector.title}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="hidden group-hover:block">
                          <button className="p-2 bg-white rounded-[25px] px-4">
                            <Image
                              src="/home/about/right_top_arrow.png"
                              alt="Download"
                              width={24}
                              height={24}
                            />
                          </button>
                        </div>
                      </div>
                      {/* Title */}
                      <h3 className="text-[32px] font-normal mb-[20px]">
                        {sector.title}
                      </h3>
                      {/* Description */}
                      <p className="text-[19px] font-light mb-6 flex-grow h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:h-18 group-hover:opacity-100">
                        {sector.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="relative w-[487px] h-[400px] hover:h-[320px] transition-all duration-300 overflow-hidden">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute bottom-[50px] -translate-y-1/2 right-[-32px] md:right-[232px] z-10 w-14 h-14 bg-black rounded-full flex overflow-hidden shadow-lg">
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
