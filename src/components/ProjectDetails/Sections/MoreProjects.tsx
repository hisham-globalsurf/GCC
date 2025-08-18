"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ReusableButton } from "@/components/Common/Button";

const projects = [
  {
    title: "Project Name Dummy Text",
    categories: ["Civil", "Residential", "Sharjah"],
    image: "/home/areaExp/area1.png",
  },
  {
    title: "Project Name Dummy Text",
    categories: ["Infrastructure", "Commercial", "Abu Dhabi"],
    image: "/home/areaExp/area2.png",
  },
  {
    title: "Project Name Dummy Text",
    categories: ["Fit-Out", "Residential", "Sharjah"],
    image: "/home/areaExp/area3.png",
  },
];

export default function MoreProjects() {
  return (
    <section className="container bg-[#F5F3F0] py-[25px] lg:py-[57px]">
      <div className="flex justify-between items-center mb-[15px] lg:mb-[35px]">
        <h2 className="text-[30px] lg:text-[68px] font-normal text-black">
          More Projects
        </h2>
        <ReusableButton
          label="View All"
          icon={
            <Image
              src="/home/about/right_top_arrow.png"
              alt="view all"
              width={28}
              height={28}
              className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
          }
          iconPosition="right"
          className="group hover:bg-[#EE3524] hover:text-white lg:px-6 px-4 rounded-[35px] lg:h-[42px] h-[35px] text-[16px] text-[#515151] border border-[#515151] font-light"
        />
      </div>

      <hr className="border-t border-[#C2C2C2] lg:mb-[47px] mb-[25px]" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[30px] gap-[15px]">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="w-full h-[475px] relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover h-full w-full"
              />
            </div>
            <p className="lg:text-[19px] text-[16px] font-light text-[#515151] lg:mt-[27px] mt-[12px]">
              {project.categories.map((cat, i) => (
                <span key={i}>
                  {cat}
                  {i < project.categories.length - 1 && (
                    <span className="text-black px-3">|</span>
                  )}
                </span>
              ))}
            </p>

            <h3 className="lg:text-[32px] text-[23px] font-normal text-black lg:mt-[12px] mt-[6px]">
              {project.title}
            </h3>
            <hr className="border-t border-[#C2C2C2] mt-[27px]" />
          </div>
        ))}
      </div>
    </section>
  );
}
