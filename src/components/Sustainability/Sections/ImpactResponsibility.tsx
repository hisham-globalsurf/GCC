"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import type { Swiper as SwiperType } from "swiper";

const expertiseData = [
  {
    id: 1,
    title: "Community Jobs",
    icon: "/sustainability/impactResponsibility/1.svg",
    image: "/home/areaExp/area1.png",
    heading: "General Contracting",
    description:
      "Our general contracting services ensure efficient execution with quality and cost-efficiency.",
  },
  {
    id: 2,
    title: "Ethical Workforce",
    icon: "/sustainability/impactResponsibility/2.svg",
    image: "/home/areaExp/area2.png",
    heading: "Design & Build",
    description:
      "We manage both design and construction to ensure seamless delivery and communication.",
  },
  {
    id: 3,
    title: "Local Support",
    icon: "/sustainability/impactResponsibility/3.svg",
    image: "/home/areaExp/area3.png",
    heading: "Civil & Structural Work",
    description:
      "The competitive market conditions and aggressive business environment in the UAE have driven the construction industry to adopt a highly professional and systematic approach towards project execution.",
  },
  {
    id: 4,
    title: "Health & Wellness",
    icon: "/sustainability/impactResponsibility/4.svg",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 5,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 6,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 7,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 8,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 9,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 10,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 11,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 12,
    title: "Infrastructure Development",
    icon: "/home/areaExp/areaIcon4.png",
    image: "/home/areaExp/area4.png",
    heading: "Infrastructure Development",
    description:
      "We deliver innovative infrastructure solutions for sustainable urban growth and development.",
  },
  {
    id: 13,
    title: "Civil & Structural Works",
    icon: "/home/areaExp/areaIcon3.png",
    image: "/home/areaExp/area3.png",
    heading: "Civil & Structural Work",
    description:
      "The competitive market conditions and aggressive business environment in the UAE have driven the construction industry to adopt a highly professional and systematic approach towards project execution.",
  },
];

export default function ImpactResponsibility() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleClick = (index: number) => {
    const swiper = swiperRef.current?.swiper;
    const slidesPerView = swiper?.params?.slidesPerView;

    if (!swiper || typeof slidesPerView !== "number") return;

    setActiveIndex(index);

    const isLastVisibleItem =
      index === Math.floor(swiper.activeIndex + slidesPerView - 1);

    if (isLastVisibleItem) {
      const nextGroupStart = swiper.activeIndex - 1 + slidesPerView;
      if (nextGroupStart < expertiseData.length) {
        swiper.slideTo(nextGroupStart);
      } else {
        swiper.slideTo(0);
      }
    }
  };

  return (
    <section className="container bg-black lg:py-[57px] py-[25px] overflow-hidden">
      <h2 className="text-white text-[30px] lg:text-[68px] font-normal lg:mb-[43px] mb-[25px]">
        Social Impact & Responsibility
      </h2>

      <Swiper
        ref={swiperRef}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {expertiseData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className="cursor-pointer pt-4 w-full"
              onClick={() => {
                handleClick(index);
              }}
            >
              <div className="flex flex-col text-white items-start transition-all duration-300 pb-8">
                <div className="w-[85px] h-[85px] flex items-center transition-all duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              {/* Progress Line */}{" "}
              <div className="relative mt-2 w-full h-[6px] overflow-hidden">
                {" "}
                {/* Gray Base Line (1px at top) */}{" "}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#C2C2C2]" />{" "}
                {/* Green Fill Line (4px at bottom) */}{" "}
                {activeIndex === index && (
                  <div className="absolute bottom-0 left-0 h-[6px] w-full bg-[#7AC142]" />
                )}{" "}
              </div>
              <p
                className={`text-[16px] lg:text-[20px] font-normal text-left mt-4 relative text-[#515151] transition-all duration-400 ${
                  activeIndex === index
                    ? "text-white font-medium"
                    : "text-white/80 font-normal"
                }`}
              >
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:mt-10 pt-8 lg:gap-[75px] gap-[35px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${activeIndex}`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[50%] h-auto lg:h-[483px]"
          >
            <Image
              src={expertiseData[activeIndex].image}
              alt={expertiseData[activeIndex].heading}
              width={775}
              height={483}
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
            className="w-full lg:w-[50%] h-full flex items-center"
          >
            <div className="flex flex-col justify-evenly">
              <h3 className="text-[25px] lg:text-[32px] mb-[20px] font-normal text-white">
                {expertiseData[activeIndex].heading}
              </h3>
              <p className="text-white/80 text-[19px] lg:h-auto font-light">
                We are firmly committed to upholding ethical labor practices
                across all levels of our operations. Our approach is grounded in
                fairness, transparency, and respect for human rights, ensuring
                that every member of our workforce is treated with dignity. We
                believe that ethical employment is not just a compliance
                measure, but a core value that shapes our culture and defines
                the way we do business. We follow strict labor policies that
                align with national regulations and international standards,
                providing safe working conditions, equitable treatment, and
                protection from any form of exploitation or discrimination. We
                work actively to create a workplace that values diversity,
                promotes inclusion, and supports the well-being of every
                individual.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
