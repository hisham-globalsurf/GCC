"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Feature {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    imageSrc: "/companyOverview/whyChooseUs/safety.svg",
    imageAlt: "Certified Quality & Safety",
    title: "Energy-Efficient Machinery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    imageSrc: "/companyOverview/whyChooseUs/tqm.svg",
    imageAlt: "Total Quality Management (TQM)",
    title: "Smart Water Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    imageSrc: "/companyOverview/whyChooseUs/ecoLeave.svg",
    imageAlt: "Eco–Conscious Building",
    title: "Eco–Conscious Building",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    imageSrc: "/companyOverview/whyChooseUs/strength.svg",
    imageAlt: "Strength of Group Synergy",
    title: "Environmental Performance Tracking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
];

const EnergyResource: FC = () => {
  return (
    <section className="bg-[#F5F3F0] lg:py-[57px] py-[25px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container"
      >
        {/* Headings */}
        <h2 className="lg:text-[68px] text-[30px] font-normal mb-[15px] lg:mb-[25px] text-black">
          Energy & Resource Efficiency
        </h2>
        <p className="lg:text-[19px] text-[16px] font-normal mb-[58px] text-[#515151]">
          At Gulf Contractors, we prioritize intelligent use of energy and
          materials across all project phases. By integrating energy-efficient
          technologies, optimizing resource planning, and reducing waste, we
          ensure every development minimizes environmental impact while
          maximizing long-term value for clients and communities.
        </p>
      </motion.div>

      {/* Full-width top border */}
      <div className="container">
        <div className="border-t border-[#C2C2C2]" />
      </div>

      {/* Feature Boxes */}
      <div className="container grid grid-cols-1 lg:grid-cols-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group flex lg:h-[448px] flex-col border-t lg:border-t-0 border-l border-r border-b border-[#C2C2C2]"
          >
            {/* Image & title */}
            <div className="border-b lg:border-[#C2C2C2] lg:group-hover:border-b-[#EE3524] lg:group-hover:border-b-[4px] transition-all duration-300 p-5 lg:px-[30px] lg:pt-[35px] lg:pb-[20px] flex flex-col items-start">
              <div className="mb-4 relative w-[60px] h-[60px] group">
                {/* Red background (only on hover) */}
                <div className="absolute inset-0 w-[80px] h-[80px] -top-[10px] -left-[10px] rounded-full bg-[#EE3524] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                {/* Image */}
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-contain relative z-10 transition duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-black lg:text-[32px] text-[20px] font-normal lg:mb-4"
              >
                {feature.title}
              </motion.h3>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="p-5 lg:px-[30px] lg:pt-[30px] lg:pb-[20px]"
            >
              <p className="text-[#515151] text-[16px] lg:text-[19px] font-light leading-[29px]">
                {feature.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnergyResource;
