"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ReusableButton } from "@/components/Common/Button";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    title: "Particularly worth mentioning are Gulf Tunnelling Company",
    date: "15-05-2025",
    category: "Industrial",
    image: "/home/news/news1.png",
    description:
      "At GCC, teamwork, quality, service, and creativity drive our success. With over AED 200 million..",
  },
  {
    id: 2,
    title: "Particularly worth mentioning are Gulf Tunnelling Company",
    date: "15-05-2025",
    category: "Industrial",
    image: "/home/news/news1.png",
    description:
      "At GCC, teamwork, quality, service, and creativity drive our success. With over AED 200 million..",
  },
  {
    id: 3,
    title: "Particularly worth mentioning are Gulf Tunnelling Company",
    date: "15-05-2025",
    category: "Industrial",
    image: "/home/news/news1.png",
    description:
      "At GCC, teamwork, quality, service, and creativity drive our success. With over AED 200 million..",
  },
  {
    id: 4,
    title: "Particularly worth mentioning are Gulf Tunnelling Company",
    date: "15-05-2025",
    category: "Industrial",
    image: "/home/news/news1.png",
    description:
      "At GCC, teamwork, quality, service, and creativity drive our success. With over AED 200 million..",
  },
  {
    id: 5,
    title: "Particularly worth mentioning are Gulf Tunnelling Company",
    date: "15-05-2025",
    category: "Industrial",
    image: "/home/news/news1.png",
    description:
      "At GCC, teamwork, quality, service, and creativity drive our success. With over AED 200 million..",
  },
];

export default function NewsSection() {
  return (
    <section className="container bg-[#F5F3F0] lg:pt-[50px] pt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[30px] md:text-[68px] font-normal text-black">
          News
        </h2>
        <ReusableButton
          label="VIEW ALL"
          icon={
            <Image
              src="/home/about/right_top_arrow.png"
              alt="view all"
              width={28}  
              height={28}
              className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
          }
          iconPosition="right"
          className="group hover:bg-[#EE3524] hover:text-white lg:px-6 px-4 rounded-[35px] lg:h-[42px] h-[35px] text-[16px] text-[#515151] border border-[#515151] font-light"
        />
      </div>

      <div className="w-full border-b border-[#C2C2C2] lg:mb-[52px] mb-[30px]"></div>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        speed={500}
        className="relative"
      >
        {newsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col lg:flex-row lg:gap-[69px] gap-[40px]">
              {/* Left: Image */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full h-auto md:w-[745px] md:h-[431px]"
              >
                <Image
                  src={item.image}
                  alt="News image"
                  width={745}
                  height={431}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full md:basis-[50%] flex flex-col justify-evenly lg:py-10"
              >
                <div className="flex justify-between items-center mb-8 lg:mb-4">
                  <span className="bg-[#7AC142] text-[#515151] text-[16px] font-light uppercase px-[14px] py-[3px]">
                    {item.category.toUpperCase()}
                  </span>
                  <span className="text-[16px] text-[#515151] border-b border-black pb-1 font-light">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-[23px] md:text-[32px] text-[#515151] font-normal mb-3 leading-[29px] md:leading-[45px]">
                  {item.title}
                </h3>

                <p className="text-[19px] font-light text-[#515151] lg:mb-[50px] mb-[30px]">
                  {item.description}
                </p>

                <div>
                  <ReusableButton
                    label="Read More"
                    icon={
                      <Image
                        src="/home/about/right_top_arrow.png"
                        alt="view all"
                        width={28}
                        height={28} 
                        className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                      />
                    }
                    iconPosition="right"
                    className="group hover:bg-[#EE3524] hover:text-white lg:px-6 px-4 rounded-[35px] lg:h-[42px] h-[35px] text-[16px] text-[#515151] border border-[#515151] font-light"
                  />
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="custom-pagination mt-[42px] lg:mb-[70px] mb-8 flex justify-center gap-[10px]"></div>
      </Swiper>

      <style jsx global>{`
        .custom-bullet {
          width: 9px;
          border: 3px solid #515151;
          border-radius: 9999px;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          width: 27px;
          background: #8bc34a;
          border: 3px solid #7ac142;
        }
      `}</style>
    </section>
  );
}
