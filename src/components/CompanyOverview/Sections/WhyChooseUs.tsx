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
    title: "Certified Quality & Safety",
    description:
      "GCC, established in 1988, is known for innovation and excellence in construction, with projects..",
  },
  {
    imageSrc: "/companyOverview/whyChooseUs/tqm.svg",
    imageAlt: "Total Quality Management (TQM)",
    title: "Total Quality Management (TQM)",
    description:
      "Company-wide implementation of TQM reflects our commitment to continuous improvement and client satisfaction.",
  },
  {
    imageSrc: "/companyOverview/whyChooseUs/ecoLeave.svg",
    imageAlt: "Eco–Conscious Building",
    title: "Eco–Conscious Building",
    description:
      "Dedicated to building responsibly, with a clear focus on protecting the environment and future generations.",
  },
  {
    imageSrc: "/companyOverview/whyChooseUs/strength.svg",
    imageAlt: "Strength of Group Synergy",
    title: "Strength of Group Synergy",
    description:
      "Access to a wide network of affiliated companies and supply partners enhances our capabilities and accelerates project success.",
  },
];

const WhyChooseUs: FC = () => {
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
        <h2 className="lg:text-[68px] text-[30px] font-normal mb-[10px] text-black">
          Why Choose Us
        </h2>
        <p className="lg:text-[32px] text-[17px] font-normal mb-[58px] text-[#515151]">
          Experience Illuminates the Possibilities
        </p>
      </motion.div>

      {/* Full-width top border */}
      <div className="pl-20">
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
              <div className="mb-4 w-[60px] h-[60px] relative">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-contain"
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

export default WhyChooseUs;
