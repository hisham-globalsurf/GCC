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
    <section className="bg-white w-full pt-12 px-3 sm:px-10 lg:pl-20 overflow-hidden">
      <h2 className="text-black text-[30px] lg:text-[68px] font-normal lg:mb-[43px] mb-[25px]">
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
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4.7,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
        >
          {expertiseData.map((item, index) => (
            <SwiperSlide
              key={item.id}
              // className="cursor-pointer pt-4 lg:!w-[305px] !w-[200px]"
              className="cursor-pointer pt-4"
              onClick={() => {
                if (!swiperRef.current) return;

                swiperRef.current.autoplay.stop();
                swiperRef.current.slideToLoop(index, 0);

                setTimeout(() => {
                  swiperRef.current?.autoplay.start();
                }, 0);
              }}
            >
              <div>
                <div className="flex flex-col text-[#515151] items-start transition-all duration-300 lg:pr-4 pb-8">
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

                <p className="text-[16px] lg:text-[20px] font-normal text-left mt-4 relative text-[#515151]">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-[40px] -mt-3 lg:mt-10 pt-12 lg:pr-20 lg:h-[590px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${activeIndex}`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[60%] h-auto lg:h-[500px] "
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
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[40%] pl-0 lg:pl-[20px] lg:border-l-2 h-full flex items-center"
          >
            <div className="lg:pl-8 flex flex-col justify-evenly pb-12 h-[65%]">
              <h3 className="text-[25px] lg:text-[32px] font-normal text-[#515151]">
                {expertiseData[activeIndex].heading}
              </h3>
              <p className="text-[#515151] text-[19px] h-[200px] lg:h-auto font-light mb-6">
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
                      className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                    />
                  }
                  iconPosition="right"
                  className="group hover:bg-[#EE3524] hover:text-white lg:px-6 px-4 rounded-[35px] lg:h-[42px] h-[35px] text-[16px] text-[#515151] border border-[#515151] font-light"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
