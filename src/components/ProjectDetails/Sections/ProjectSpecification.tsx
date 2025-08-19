"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdArrowForwardIos } from "react-icons/md";

const slides = [
  {
    image: "/projectDetails/pd2.jpg",
    client: "Client Name",
    location: "Abu Dhabi – UAE",
    scope: "Road expansion, Landscaping",
    completion: "June 2023",
    value: "AED 85 Million",
    status: "Completed",
    progress: 100,
  },
  {
    image: "/projectDetails/PD1.png",
    client: "Client 2",
    location: "Dubai – UAE",
    scope: "Bridge Construction",
    completion: "Dec 2024",
    value: "AED 120 Million",
    status: "In Progress",
    progress: 65,
  },
];

export default function ProjectSpecifications() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <section className="container bg-white py-[25px] lg:py-[57px]">
      <div className="relative overflow-hidden lg:h-[715px]">
        {/* Background Image */}
        <Image
          src={slide.image}
          alt="Project View"
          fill
          className="object-cover z-0"
        />
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,#ffffff_0%,#000000_85%)]"></div> */}

        {/* Navigation Arrows */}
        <div className="absolute lg:bottom-10 lg:left-10 bottom-3 right-3 flex gap-[16px] z-20">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className={`w-[80px] h-[80px] rounded-full backdrop-blur-[4px] flex items-center justify-center transition
      ${
        currentSlide === 0
          ? "bg-[#FFFFFFB8]/76 cursor-not-allowed"
          : "bg-black/90 hover:bg-black cursor-pointer"
      }`}
          >
            <ChevronLeft className="text-[#7AC142]" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className={`w-[80px] h-[80px] rounded-full backdrop-blur-[4px] flex items-center justify-center transition
      ${
        currentSlide === slides.length - 1
          ? "bg-[#FFFFFFB8]/76 cursor-not-allowed"
          : "bg-black/90 hover:bg-black cursor-pointer"
      }`}
          >
            <MdArrowForwardIos className="text-[#7AC142] size-[30px]" />
          </button>
        </div>

        {/* Project Details Overlay */}
        <div className="lg:absolute lg:bottom-[30px] lg:right-[30px] lg:max-w-[515px] w-full h-[445px] bg-[linear-gradient(180deg,#ffffff1F_12%,#0F0D0D63_39%)] text-white border border-[#FFFFFF24] backdrop-blur-[5px] lg:p-[30px] p-[20px] flex flex-col z-20">
          <h2 className="lg:text-[32px] text-[23px] font-normal">
            Project Specifications
          </h2>

          {/* Progress Bar with Tag and Ticks */}
          <div className="relative w-full h-6 lg:mt-[44px] mt-[34px]">
            {/* Tag */}
            <div className="absolute -top-11 right-0">
              <div className="relative inline-block text-center">
                <div className="bg-white flex items-center justify-center lg:w-[70px] w-[50px] lg:h-[36px] h-[27px] text-black lg:text-[19px] text-[16px] font-semibold rounded-[4px] border-[0.2px] border-[#C2C2C287] relative z-10">
                  {slide.progress}%
                  <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>
            </div>

            {/* Green bar background */}
            <div className="w-full h-[8px] bg-[#7AC142] rounded-[100px] flex items-center justify-between relative">
              {[...Array(6)].map((_, i) =>
                i !== 0 && i !== 5 ? (
                  <div
                    key={i}
                    className="w-[0.5px] h-full bg-[#FFFFFF]"
                    style={{ height: "100%" }}
                  ></div>
                ) : (
                  <div key={i} className="w-[0.5px]" />
                )
              )}
            </div>
          </div>

          {/* Details */}
          <div className="mt-[10px] text-white text-[15px] lg:space-y-[18px] space-y-[14px]">
            {/* Row 1 */}
            <div className="grid grid-cols-2 border-b border-[#FFFFFFA6/65] lg:pb-[18px] pb-[14px]">
              <div>
                <p className="text-white/60 lg:text-[16px] text-[14px] font-light uppercase">
                  Client
                </p>
                <p className="font-medium lg:text-[19px] text-[16px]">
                  {slide.client}
                </p>
              </div>
              <div>
                <p className="text-white/60 lg:text-[16px] text-[14px] font-light uppercase">
                  Location
                </p>
                <p className="font-medium lg:text-[19px] text-[16px]">
                  {slide.location}
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 border-b border-[#FFFFFFA6/65] lg:pb-[18px] pb-[14px]">
              <div>
                <p className="text-white/60 lg:text-[16px] text-[14px] font-light uppercase">
                  Scope of Work
                </p>
                <p className="font-medium lg:text-[19px] text-[16px]">
                  {slide.scope}
                </p>
              </div>
              <div>
                <p className="text-white/60 lg:text-[16px] text-[14px] font-light uppercase">
                  Completion Date
                </p>
                <p className="font-medium lg:text-[19px] text-[16px]">
                  {slide.completion}
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 border-b border-[#FFFFFFA6/65] lg:pb-[18px] pb-[14px]">
              <div>
                <p className="text-white/60 lg:text-[16px] text-[14px] font-light uppercase">
                  Project Value
                </p>
                <p className="font-medium lg:text-[19px] text-[16px]">
                  {slide.value}
                </p>
              </div>
              <div>
                <p className="text-white/60 lg:text-[16px] text-[14px] font-light uppercase">
                  Status
                </p>
                <p className="font-medium lg:text-[19px] text-[16px]">
                  {slide.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
