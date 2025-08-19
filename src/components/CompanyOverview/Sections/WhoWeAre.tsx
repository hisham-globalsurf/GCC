"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

  const textVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

const WhoWeAre = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="container w-full py-[25px] lg:py-[57px] flex flex-col lg:flex-row gap-[26px] lg:gap-[72px]">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[745px]"
        >
          <Image
            src="/companyOverview/whoWeAre/whoWeAre.jpg"
            alt="Who We Are - Team"
            width={745}
            height={772}
            className="w-full lg:h-[772px] object-cover"
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
            className="text-[30px] lg:text-[68px] font-normal lg:mb-[24px] mb-[12px] text-black"
          >
            Who We Are
          </motion.h2>

          {/* Paragraphs */}
          <motion.p
            custom={0.2}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#515151] text-base lg:text-[19px] leading-[29px] lg:mb-5 mb-4 font-light"
          >
            Gulf Contractors Company (GCC) is a subsidiary of Abu Dhabi-based Al
            Sharafi Group and United Eastern (UE) Group, two distinguished
            conglomerates with interests in diverse businesses such as
            healthcare, construction, manufacturing, oil & gas, agriculture,
            service & tourism and trading across the MENA region.
          </motion.p>

          <motion.p
            custom={0.4}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#515151] text-base lg:text-[19px] leading-[29px] lg:mb-5 mb-4 font-light"
          >
            GCC, founded in the year 1988, is a name synonymous with innovation
            and excellence in civil engineering and construction. Our success is
            exemplified by the sheer breadth of projects accomplished, spanning
            a wide spectrum, right from infrastructure, defense and leisure to
            industrial, commercial and residential. We have spread our
            excellence from our headquarters in Abu Dhabi, UAE to become a name
            to be reckoned with not just in the nation, but also across several
            countries in the Middle East.
          </motion.p>

          <motion.p
            custom={0.6}
            variants={textVariant}
            initial="hidden"
            viewport={{ once: true }} 
            whileInView="visible"
            className="text-[#515151] text-base lg:text-[19px] leading-[29px] font-light"
          >
            The company has, along the way, played a vital role in the
            development of the UAE’s infrastructure, while emerging as a
            competitive name in the region. From just a single contract of AED 3
            million in the founding year, we have grown the turnover over the
            past three decades to a staggering AED 5.0 billion (USD 1.35
            billion), thereby setting the pace for quality, progress and
            distinction. The phenomenal growth of GCC and the ambitious plans
            for the future signify our ranking as a premier contractor that is
            all set to scale greater heights
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
