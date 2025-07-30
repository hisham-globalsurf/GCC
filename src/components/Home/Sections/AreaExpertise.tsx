"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { ReusableButton } from "@/components/Common/Button";

const expertiseData = [
  {
    id: 1,
    title: "General Contracting",
    icon: "/home/areaExp/areaIcon1.png",
    image: "/home/areaExp/area1.png",
    heading: "General Contracting",
    description:
      "Our general contracting services ensure efficient execution with quality and cost-efficiency.Our general contracting services ensure efficient execution with quality and cost-efficiency.Our general contracting services ensure efficient execution with quality and cost-efficiency.",
  },
  {
    id: 2,
    title: "Design & Build",
    icon: "/home/areaExp/areaIcon2.png",
    image: "/home/areaExp/area2.png",
    heading: "Design & Build",
    description:
      "We manage both design and construction to ensure seamless delivery and communication.",
  },
  {
    id: 3,
    title: "Civil & Structural Works",
    icon: "/home/areaExp/areaIcon3.png",
    image: "/home/areaExp/area3.png",
    heading: "Civil & Structural Work",
    description:
      "The competitive market conditions and aggressive business environment in the UAE have driven the construction industry to adopt a highly professional and systematic approach towards project execution.",
  },
  {
    id: 4,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 5,
    title: "MEP Services",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area5.png",
    heading: "MEP Services",
    description:
      "Mechanical, Electrical, and Plumbing services with precision and professional execution.",
  },
  {
    id: 6,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon6.png",
    image: "/home/areaExp/area6.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 7,
    title: "MEP Services",
    icon: "/home/areaExp/areaIcon7.png",
    image: "/home/areaExp/area5.png",
    heading: "MEP Services",
    description:
      "Mechanical, Electrical, and Plumbing services with precision and professional execution.",
  },
  {
    id: 8,
    title: "MEP Services",
    icon: "/home/areaExp/areaIcon8.png",
    image: "/home/areaExp/area5.png",
    heading: "MEP Services",
    description:
      "Mechanical, Electrical, and Plumbing services with precision and professional execution.",
  },
];

export default function AreaOfExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white w-full pt-12 px-3 sm:px-10 md:px-0 sm:pl-0 md:pl-24">
      <h2 className="text-black text-[40px] md:text-[68px] font-normal mb-[43px]">
        Area of Expertise
      </h2>

      <div className="relative pb-4 mb-10">
        <Swiper
          modules={[FreeMode]}
          freeMode
          slidesPerView={1.2}
          spaceBetween={12}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 0,
            },
          }}
        >
          {expertiseData.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="cursor-pointer pt-4 md:!w-[305px] !w-[200px]"
              onClick={() => setActiveIndex(index)}
            >
              <div>
                <div
                  className={`flex flex-col text-[#515151] items-start transition-all duration-300 border-b-1 pr-6 md:pr-4 pb-8 border-b-[#C2C2C2] ${
                    activeIndex === index ? "border-b-6 border-b-[#EE3524]" : ""
                  }`}
                >
                  {/* Icon circle */}
                  <div
                    className={`w-[85px] h-[85px] flex items-center justify-center rounded-full border transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-[#EE3524] border-[#C2C2C2]"
                        : "bg-white border-[#C2C2C2]"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={38}
                      height={38}
                      className={`transition-all duration-300 ${
                        activeIndex === index
                          ? "filter invert brightness-[0%]"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                {/* Title */}
                <p className="text-[16px] md:text-[20px] font-normal text-left mt-4 relative text-[#515151]">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10 mt-10 pt-12 sm:pr-10 md:pr-24 h-[490px]">
        <div className="w-full h-auto md:w-1/2 md:h-[400px]">
          <Image
            src={expertiseData[activeIndex].image}
            alt={expertiseData[activeIndex].heading}
            width={700}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-6 border-l-2 h-full">
          <div className="md:pl-8 flex flex-col justify-evenly py-16 h-full">
            <h3 className="text-[25px] md:text-[32px] font-normal text-[#515151] mb-4">
              {expertiseData[activeIndex].heading}
            </h3>
            <p className="text-[#515151] text-[19px] font-light mb-6">
              {expertiseData[activeIndex].description}
            </p>

            <div>
              <ReusableButton
                label="Read More"
                icon={
                  <Image
                    src="/home/about/right_top_arrow.png"
                    alt="Read More"
                    width={28}
                    height={28}
                  />
                }
                iconPosition="right"
                className="hover:bg-gray-200 px-6 rounded-[35px] h-[42px] text-[16px] text-[#515151] border border-[#515151] font-light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
