import React from "react";
import Image from "next/image";

interface BannerProps {
  imageSrc: string;
  alt: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc, alt, title }) => {
  return (
    <div className="relative w-full lg:h-[550px] h-[400px]">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center lg:items-end">
        <div className="container text-center lg:w-full lg:justify-items-start lg:pb-[83px]">
          <h1 className="text-white text-[35px] lg:text-[72px] font-normal">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
