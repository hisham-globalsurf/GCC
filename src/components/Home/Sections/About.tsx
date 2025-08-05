"use client";

import Image from "next/image";
import { ReusableButton } from "@/components/Common/Button";
import { motion } from "framer-motion";

export default function AboutCompany() {
  return (
    <section>
      <div className="w-full py-[50px] lg:py-[100px] container flex flex-col md:flex-row justify-between overflow-hidden bg-white">
        {/* Left (Image) */}
        <motion.div
          initial={{ x: -90, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative lg:w-[705px] lg:h-[432px] md:basis-[45%]"
        >
          <Image
            src="/home/about/about-bg.png"
            alt="City View"
            width={705}
            height={432}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[52px] h-[52px] bg-opacity-80 rounded-full flex items-center justify-center">
              <Image
                src="/home/about/playbtn.png"
                alt="playbtn"
                width={54}
                height={54}
              />
            </div>
          </div>
        </motion.div>

        {/* Right (Text) */}
        <motion.div
          initial={{ x: 90, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:basis-[55%] lg:ml-12 flex flex-col mt-6 lg:mt-0 lg:gap-6"
        >
          <p className="text-gray-800 text-[22px] md:text-[32px] leading-[47px] font-light">
            GCC,{" "}
            <span className="text-red-600 font-semibold">
              established in 1988
            </span>
            , is known for innovation and excellence in construction, with
            projects ranging from infrastructure and defense to industrial,
            commercial, and residential developments.
          </p>
          <div className="mt-[30px] lg:mt-[55px]">
            <ReusableButton
              label="ABOUT COMPANY"
              icon={
                <Image
                  src="/home/about/right_top_arrow.png"
                  alt="Download"
                  width={28}
                  height={28}
                />
              }
              iconPosition="right"
              className="hover:bg-[#EE3524] hover:text-white px-6 rounded-[35px] h-[42px] text-[16px] text-[#515151] border border-[#515151] font-light"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
