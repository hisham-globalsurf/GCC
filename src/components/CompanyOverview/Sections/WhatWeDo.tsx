"use client";

import { useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const services = [
  {
    label: "General Contracting",
    image: "/companyOverview/whatWeDo/designBuild.jpg",
  },
  {
    label: "Design & Build",
    image: "/companyOverview/whatWeDo/designBuild.jpg",
  },
  {
    label: "Civil & Structural Works",
    image: "/what-we-do/civil-structural.jpg",
  },
  {
    label: "Infrastructure Development",
    image: "/what-we-do/infrastructure.jpg",
  },
  { label: "MEP Services", image: "/what-we-do/mep.jpg" },
  { label: "Project Management", image: "/what-we-do/project-management.jpg" },
  {
    label: "Preconstruction Planning",
    image: "/what-we-do/preconstruction.jpg",
  },
  { label: "Facility Management", image: "/what-we-do/facility.jpg" },
  {
    label: "Specialized Industrial Services",
    image: "/what-we-do/industrial.jpg",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-[#F5F3F0] pt-[25px] lg:pt-[57px]">
      {/* Heading */}
      <div className="container mb-[30px] lg:mb-[57px]">
        <h2 className="text-[30px] md:text-[68px] font-normal mb-[10px] text-black">
          What We Do
        </h2>
        <p className="text-[#515151] lg:text-[32px] text-[17px] font-light">
          Unlocking Potential Through Construction Excellence
        </p>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-[#C2C2C2] relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-[#C2C2C2]" />
      </div>

      {/* Two-column layout */}
      <div className="lg:pl-10 flex lg:flex-row flex-col">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 lg:p-[40px] p-3 md:px-10">
          <p className="text-[#515151] lg:mb-[35px] mb-[15px] font-light text-[19px]">
            Complementing GCC&apos;s sturdy business background, vast local
            construction knowledge and rich resources is the ability to
            undertake construction projects of any scale and form. Currently,
            our construction activities span the below services
          </p>

          {/* Image for mobile */}
          <div className="w-full h-full lg:w-1/2 lg:p-[40px] block lg:hidden py-3">
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].label}
              width={840}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 lg:gap-x-[50px] gap-x-[25px] overflow-hidden">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group lg:text-[23px] text-[15px] cursor-pointer py-4 flex justify-between items-center transition-all duration-300 ${
                    index !== services.length - 1
                      ? "border-b border-[#C2C2C2]"
                      : ""
                  }`}
                >
                  <span
                    className={
                      isActive
                        ? "text-black"
                        : "text-[#515151] hover:text-black transition-all duration-300"
                    }
                  >
                    {service.label}
                  </span>
                  {isActive && (
                    <GoArrowUpRight className="text-green-500 w-[35px] h-[32px] transition-opacity duration-300" />
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-[#515151] lg:mt-[35px] mt-[15px] font-light text-[19px] mb-3 lg:mb-0">
            Furthermore, we&apos; place priority on quality, transparency and
            innovativeness in every project, thereby ensuring that the right
            solutions are applied to deliver enhanced returns for our clients.
            The wide array of services offered by us is ever expanding to
            incorporate emerging needs and newer technological advancements.
          </p>
        </div>

        <div className="left-1/2 top-0  w-[1px] bg-[#C2C2C2]" />

        {/* Right Section - Image for lg */}
        <div className="w-full h-full lg:w-1/2 lg:p-[40px] hidden lg:block">
          <div className="lg:max-w-[840px] lg:h-[700px]">
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].label}
              width={840}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
