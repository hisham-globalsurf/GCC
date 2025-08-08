"use client";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type Section = {
  id: string;
  title: string;
  icon: string;
  content: string[];
};

const sections: Section[] = [
  {
    id: "vision",
    title: "Vision",
    icon: "/companyOverview/visionAccordion/visionEye.png",
    content: [
      "Our vision is to create a vibrant environment for all members of society.",
    ],
  },
  {
    id: "mission",
    title: "Mission",
    icon: "/companyOverview/visionAccordion/mission.png",
    content: [
      "Our mission is to create a vibrant environment for all members of society. As a company, we will be a good corporate citizen, providing high quality service at reasonable prices.",
      "We will pioneer the creation of new value, meet our clients’ needs, respect a diversity of views and ideas, and honour the relationship of humanity in the natural environment.",
      "We will encourage open communication that promotes project success and facilitates an honest exchange of information between our clients and our Project Teams, allowing us to best achieve each owner's particular project objectives.",
    ],
  },
  {
    id: "values",
    title: "Values",
    icon: "/companyOverview/visionAccordion/values.png",
    content: [
      "Integrity, innovation, and collaboration are at the core of everything we do.",
    ],
  },
];

export default function VisionMissionValues() {
  const [openId, setOpenId] = useState<string>("mission");

  return (
    <section className="bg-white w-full">
      <div className="container w-full lg:py-[57px] py-[25px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[30px] lg:text-[68px] font-normal mb-[10px] text-black">
            Vision, Mission & Values
          </h2>
          <p className="text-[17px] lg:text-[32px] font-normal lg:mb-[58px] mb-[25px] text-[#515151]">
            Guided by Purpose, Powered by Principles
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="border-t border-[#C2C2C2]">
            {sections.map((section) => {
              const isOpen = openId === section.id;
              return (
                <div key={section.id} className="border-b border-[#C2C2C2]">
                  <button
                    onClick={() => setOpenId(isOpen ? "" : section.id)}
                    className={`w-full flex items-center justify-between pt-[27px] ${
                      isOpen ? "pb-[20px]" : "pb-[27px]"
                    } text-[#515151]`}
                  >
                    <div className="flex w-full items-start justify-between px-3 lg:px-[30px] lg:gap-x-[180px] gap-x-[30px]">
                      <div>
                        <Image
                          src={section.icon}
                          alt={section.title}
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="flex items-start w-full flex-col gap-[20px]">
                        <span className="lg:text-[32px] text-[22px] font-normal">
                          {section.title}
                        </span>

                        {/* content */}
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 2, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 2, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden text-[#515151]"
                          >
                            {section.content.map((text, idx) => (
                              <div
                                key={idx}
                                className="flex gap-[19px] text-left pb-[30px]"
                              >
                                <span className="text-[#7AC142] -mt-[2px] text-lg">
                                  ■
                                </span>
                                <p className="text-[16px] lg:text-[19px] font-light leading-[29px]">
                                  {text}
                                </p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                      <div>
                        {isOpen ? (
                          <ArrowUp className="text-green-500 transition duration-300 ease-in-out" />
                        ) : (
                          <ArrowUp className="text-gray-500 rotate-180 transition duration-300 ease-in-out" />
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
