"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SustainPractices = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="container w-full py-[25px] lg:py-[57px] flex flex-col lg:flex-row gap-[30px] lg:gap-[70px] lg:items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[705px]"
        >
          <Image
            src="/sustainability/sustainPractices/sustainPractice.jpg"
            alt="Sustainable Construction Practices"
            width={705}
            height={589}
            className="w-full lg:h-[589px] object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[30px] lg:text-[68px] font-normal lg:mb-[24px] mb-[12px] text-black lg:leading-[78px]"
          >
            Sustainable Construction Practices
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[#515151] text-base lg:text-[19px] leading-[29px] lg:mb-5 mb-4 font-light lg:leading-[29px]"
          >
            Sustainability is fundamental to our construction approach at Gulf
            Contractors. We meticulously select environmentally responsible
            materials and partner with certified green suppliers to minimize our
            ecological impact. Our sites implement rigorous waste reduction
            systems, with dedicated recycling stations that divert over 90% of
            construction debris from landfills through repurposing and material
            recovery programs. We employ cutting-edge green building techniques,
            from energy-efficient designs to smart renewable energy integration,
            ensuring optimal resource use throughout the construction process.
            Every project incorporates lifecycle thinking - we design for
            durability, plan for future adaptability, and consider end-of-phase
            material recovery, creating structures that deliver long-term
            environmental and economic value. Our comprehensive sustainability
            framework transforms responsible practices into measurable results,
            proving that exceptional construction quality and environmental
            stewardship go hand-in-hand.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SustainPractices;
