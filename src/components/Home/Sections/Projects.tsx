"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ReusableButton } from "@/components/Common/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const projects = [
  {
    title: "Ruwais Mall",
    location: "Abu Dhabi - UAE",
    client: "Client Name",
    value: "10M",
    superficie: "150000 sq ft",
    category: "Commercial",
    image: "/home/projects/prj1.png",
  },
  {
    title: "Example Project",
    location: "Dubai - UAE",
    client: "Another Client",
    value: "20M",
    superficie: "200000 sq ft",
    category: "Residential",
    image: "/home/projects/prj2.jpg",
  },
  {
    title: "Example Project",
    location: "Dubai - UAE",
    client: "Another Client",
    value: "20M",
    superficie: "200000 sq ft",
    category: "Residential",
    image: "/home/projects/prj1.png",
  },
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="bg-[#F5F3F0] w-full pt-8">
      {/* Top Heading and Controls */}
      <div className="flex items-center justify-between mb-12 px-6 sm:px-10 md:px-24">
        <h2 className="text-[30px] md:text-[68px] font-normal text-black">
          Featured Projects
        </h2>
        <div className="flex gap-5 flex-col md:flex-row items-end md:items-center">
          <div className="flex border border-[#515151] overflow-hidden rounded-[25px]">
            <button className="swiper-button-prev-custom hover:bg-gray-200 px-4 py-[11px] border-r-1 border-[#515151] text-[#7AC142]">
              <IoIosArrowBack />
            </button>
            <button className="swiper-button-next-custom hover:bg-gray-200 px-4 py-[11px] text-[#7AC142]">
              <IoIosArrowForward />
            </button>
          </div>
          <ReusableButton
            label="EXPLORE PROJECTS"
            icon={
              <Image
                src="/home/about/right_top_arrow.png"
                alt="view all"
                width={28}
                height={28}
              />
            }
            iconPosition="right"
            className="hover:bg-gray-200 px-6 rounded-[35px] text-[16px] text-[#515151] border border-[#515151] font-light"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row border-t border-[#DDD] sm:px-10 md:px-0 sm:pl-0 md:pl-24">
        {/* Left - Info */}
        <div className="w-full md:w-[30%] border-r border-[#DDD] md:pr-16 flex flex-col justify-evenly">
          <h3 className="text-[24px] md:text-[32px] font-normal mb-4 text-[#515151]">
            {projects[activeIndex].title}
          </h3>
          <div className="text-sm text-[#555] space-y-6">
            <div className="border-b border-[#C2C2C2] pb-4">
              <p className="text-[16px] text-[#979797] mb-1">LOCATION</p>
              <p className="text-[19px] text-[#515151]">
                {projects[activeIndex].location}
              </p>
            </div>
            <div className="border-b border-[#C2C2C2] pb-4">
              <p className="text-[16px] text-[#979797] mb-1">CLIENT</p>
              <p className="text-[19px] text-[#515151]">
                {projects[activeIndex].client}
              </p>
            </div>
            <div className="border-b border-[#C2C2C2] pb-4">
              <p className="text-[16px] text-[#979797] mb-1">PROJECT VALUE</p>
              <p className="text-[19px] text-[#515151]">
                {projects[activeIndex].value}
              </p>
            </div>
            <div>
              <p className="text-[16px] text-[#979797] mb-1">SUPERFICIE</p>
              <p className="text-[19px] text-[#515151]">
                {projects[activeIndex].superficie}
              </p>
            </div>
          </div>
          <div>
            <ReusableButton
              label="READ MORE"
              icon={
                <Image
                  src="/home/about/right_top_arrow.png"
                  alt="view all"
                  width={28}
                  height={28}
                />
              }
              iconPosition="right"
              className="hover:bg-gray-200 px-6 rounded-[35px] h-[42px] text-[16px] text-[#515151] border border-[#515151] font-light"
            />
          </div>
        </div>

        {/* Right - Swiper */}
        <div className="w-full md:w-[70%] pl-8 pt-8">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSlideChange={handleSlideChange}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!md:w-[1003px]">
                <div className="relative w-full h-[500px] md:h-[640px]">
                  {/* Category Label */}
                  <div className="absolute top-4 left-4 bg-[#7AC142] text-[#515151] text-[16px] font-light px-5 py-1 rounded-[75px] z-10">
                    {project.category.toUpperCase()}
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1003}
                    height={550}
                    className="w-[1003px] h-[600px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
