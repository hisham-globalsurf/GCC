"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BannerProps {
  imageSrc: string;
  alt: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc, alt, title }) => {
  return (
    <div className="relative w-full lg:h-[550px] h-[400px]">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center lg:items-end">
        <div className="container text-center lg:w-full lg:justify-items-start lg:pb-[83px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-white text-[35px] lg:text-[72px] font-normal"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
