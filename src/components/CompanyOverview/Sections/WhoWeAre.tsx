import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="container bg-white py-[25px] lg:py-[57px] flex flex-col lg:flex-row gap-[26px] lg:gap-[72px]">
      {/* Image Section */}
      <div className="w-full lg:w-[745px]">
        <Image
          src="/companyOverview/whoWeAre/whoWeAre.jpg"
          alt="Who We Are - Team"
          width={745}
          height={772}
          className="w-full lg:h-[772px] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-[30px] lg:text-[68px] font-normal lg:mb-[24px] mb-[12px] text-black">
          Who We Are
        </h2>
        <p className="text-[#515151] text-base lg:text-[19px] leading-[29px] lg:mb-5 mb-4 font-light">
          Gulf Contractors Company (GCC) is a subsidiary of Abu Dhabi-based Al
          Sharafi Group and United Eastern (UE) Group, two distinguished
          conglomerates with interests in diverse businesses such as healthcare,
          construction, manufacturing, oil & gas, agriculture, service & tourism
          and trading across the MENA region.
        </p>
        <p className="text-[#515151] text-base lg:text-[19px] leading-[29px] lg:mb-5 mb-4 font-light">
          GCC, founded in the year 1988, is a name synonymous with innovation
          and excellence in civil engineering and construction. Our success is
          exemplified by the sheer breadth of projects accomplished, spanning a
          wide spectrum, right from infrastructure, defense and leisure to
          industrial, commercial and residential. We have spread our excellence
          from our headquarters in Abu Dhabi, UAE to become a name to be
          reckoned with not just in the nation, but also across several
          countries in the Middle East.
        </p>
        <p className="text-[#515151] text-base lg:text-[19px] leading-[29px] font-light">
          The company has, along the way, played a vital role in the development
          of the UAE’s infrastructure, while emerging as a competitive name in
          the region. From just a single contract of AED 3 million in the
          founding year, we have grown the turnover over the past three decades
          to a staggering AED 5.0 billion (USD 1.35 billion), thereby setting
          the pace for quality, progress and distinction. The phenomenal growth
          of GCC and the ambitious plans for the future signify our ranking as a
          premier contractor that is all set to scale greater heights
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
