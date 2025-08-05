"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { ReusableButton } from "@/components/Common/Button";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

const expertiseData = [
  {
    id: 1,
    title: "General Contracting",
    icon: "/home/areaExp/areaIcon1.png",
    image: "/home/areaExp/area1.png",
    heading: "General Contracting",
    description:
      "Our general contracting services ensure efficient execution with quality and cost-efficiency.Our general contracting services ensure efficient execution with quality and cost-efficiency.Our general contracting services ensure efficient execution with quality and cost-efficiency.",
  },
  {
    id: 2,
    title: "Design & Build",
    icon: "/home/areaExp/areaIcon2.png",
    image: "/home/areaExp/area2.png",
    heading: "Design & Build",
    description:
      "We manage both design and construction to ensure seamless delivery and communication.",
  },
  {
    id: 3,
    title: "Civil & Structural Works",
    icon: "/home/areaExp/areaIcon3.png",
    image: "/home/areaExp/area3.png",
    heading: "Civil & Structural Work",
    description:
      "The competitive market conditions and aggressive business environment in the UAE have driven the construction industry to adopt a highly professional and systematic approach towards project execution.",
  },
  {
    id: 4,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 5,
    title: "MEP Services",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area5.png",
    heading: "MEP Services",
    description:
      "Mechanical, Electrical, and Plumbing services with precision and professional execution.",
  },
  {
    id: 6,
    title: "MEP Services",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area5.png",
    heading: "MEP Services",
    description:
      "Mechanical, Electrical, and Plumbing services with precision and professional execution.",
  },
  {
    id: 7,
    title: "MEP Services",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area5.png",
    heading: "MEP Services",
    description:
      "Mechanical, Electrical, and Plumbing services with precision and professional execution.",
  },
  {
    id: 8,
    title: "MEP Services",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area5.png",
    heading: "MEP Services",
    description:
      "Mechanical, Electrical, and Plumbing services with precision and professional execution.",
  },
];

export default function AreaOfExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(0);
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <section className="bg-white w-full pt-12 px-3 sm:px-10 md:px-0 sm:pl-0 md:pl-20">
      <h2 className="text-black text-[30px] md:text-[68px] font-normal lg:mb-[43px] mb-[25px]">
        Area of Expertise
      </h2>

      <div className="relative">
        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={"auto"}
          speed={1000}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 0,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
        >
          {expertiseData.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="cursor-pointer pt-4 lg:!w-[305px] !w-[200px]"
              onClick={() => {
                if (!swiperRef.current) return;

                swiperRef.current.autoplay.stop();
                swiperRef.current.slideToLoop(index, 0);

                setTimeout(() => {
                  const nextIndex = (index + 1) % expertiseData.length;
                  swiperRef.current?.slideNext();
                  swiperRef.current?.autoplay.start();
                }, 3000);
              }}
            >
              <div>
                <div className="flex flex-col text-[#515151] items-start transition-all duration-300 pr-6 md:pr-4 pb-8">
                  <div
                    className={`w-[85px] h-[85px] flex items-center justify-center rounded-full border transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-[#EE3524] border-[#C2C2C2]"
                        : "bg-white border-[#C2C2C2]"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={38}
                      height={38}
                      className={`transition-all duration-300 ${
                        activeIndex === index
                          ? "filter invert brightness-[0%]"
                          : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Progress Line */}
                <div className="relative mt-2 w-full h-[6px] overflow-hidden">
                  {/* Gray Base Line (1px at top) */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[#C2C2C2]" />

                  {/* Orange Fill Line (4px at bottom) */}
                  {activeIndex === index && (
                    <div
                      key={activeIndex}
                      className="absolute bottom-0 left-0 h-[6px] bg-[#EE3524] animate-fill-bar"
                    />
                  )}
                </div>

                <p className="text-[16px] md:text-[20px] font-normal text-left mt-4 relative text-[#515151]">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-[40px] -mt-3 lg:mt-10 pt-12 sm:pr-10 lg:pr-20 lg:h-[590px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${activeIndex}`}
            initial={{ x: -35, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -35, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full lg:w-[60%] h-auto lg:h-[500px] md:w-1/2 "
          >
            <Image
              src={expertiseData[activeIndex].image}
              alt={expertiseData[activeIndex].heading}
              width={874}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full lg:w-[40%] pl-0 md:pl-[20px] border-l-2 h-full flex items-center"
          >
            <div className="md:pl-8 flex flex-col justify-evenly pb-12 h-[65%]">
              <h3 className="text-[25px] md:text-[32px] font-normal text-[#515151]">
                {expertiseData[activeIndex].heading}
              </h3>
              <p className="text-[#515151] text-[19px] font-light mb-6">
                {expertiseData[activeIndex].description}
              </p>

              <div>
                <ReusableButton
                  label="Read More"
                  icon={
                    <Image
                      src="/home/about/right_top_arrow.png"
                      alt="Read More"
                      width={28}
                      height={28}
                    />
                  }
                  iconPosition="right"
                  className="hover:bg-[#EE3524] hover:text-white lg:px-6 px-4 rounded-[35px] lg:h-[42px] h-[35px] text-[16px] text-[#515151] border border-[#515151] font-light"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
