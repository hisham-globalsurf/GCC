"use client";

import React from "react";

const highlights = [
  {
    title: "7 km+ Coastal Stretch Transformed",
    description:
      "Widened roads, walkways, and leisure areas enhanced city connectivity and public engagement.",
  },
  {
    title: "Smart Urban Systems Integrated",
    description:
      "Included adaptive lighting, smart signage, and IoT-enabled safety features across the waterfront.",
  },
  {
    title: "Zero Public Disruption During Execution",
    description:
      "Careful phased implementation maintained smooth traffic flow and public access throughout.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="container py-[25px] lg:py-[57px] bg-black text-white border-t border-white/20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[30px] lg:text-[68px] font-normal lg:mb-[57px] mb-[25px]">
          Key Highlights of the Abu Dhabi Corniche Expansion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 lg:gap-x-[79px]">
          {highlights.map((item, index) => (
            <div key={index} className="relative group">
              <h3 className="lg:text-[32px] text-[23px] font-regular lg:mb-[30px] mb-[18px]">
                {item.title}
              </h3>

              {/* Line that changes color on hover */}
              <div className="h-[1px] w-full bg-[#C2C2C2] group-hover:bg-[#EE3524] transition-all duration-300" />

              <p className="lg:mt-[30px] mt-[18px] lg:text-[19px] text-[16px] font-light text-white/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
