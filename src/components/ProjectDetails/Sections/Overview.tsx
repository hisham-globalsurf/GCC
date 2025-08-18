"use client";

import { useState } from "react";
import Image from "next/image";

type TabKey = "Project Overview" | "Challenges" | "Solution";
const tabs: TabKey[] = ["Project Overview", "Challenges", "Solution"];

const content: Record<TabKey, { text: string; image: string }> = {
  "Project Overview": {
    text: `The Abu Dhabi Corniche Expansion is a flagship urban infrastructure project focused on transforming the city’s iconic coastal stretch into a modern, multi-functional public space. The scope includes widening roads, improving pedestrian and cycling paths, upgrading public amenities, and implementing smart urban features to enhance safety and accessibility. The project also integrates sustainable landscaping and eco-friendly lighting to align with the city’s green development goals.
  
  Designed to support both functionality and leisure, the expansion strengthens Abu Dhabi’s position as a world-class city offering high-quality living standards. It enhances traffic flow, encourages healthy outdoor lifestyles, and provides inviting recreational spaces for residents and tourists alike. This project reflects the emirate’s long-term commitment to urban excellence, environmental responsibility, and community wellbeing. Beyond infrastructure, the Corniche Expansion fosters social connectivity and inclusive public engagement. Recreational zones, event spaces, and family-friendly areas have been thoughtfully designed to cater to a diverse population and community.`,
    image: "/projectDetails/PD1.png",
  },

  Challenges: {
    text: `Executing the Corniche Expansion came with a unique set of challenges due to its coastal location and urban significance. Ensuring minimal disruption to existing traffic and pedestrian movement was a key concern, requiring carefully phased construction and temporary rerouting strategies. Maintaining public access to the Corniche during the transformation process demanded precise logistical coordination and stakeholder engagement.
  
  Environmental sustainability also posed a challenge. The team had to protect marine ecosystems and surrounding green spaces while incorporating eco-friendly materials and technologies. Additionally, integrating modern smart infrastructure without compromising the area’s cultural identity required thoughtful planning and community consultation. Balancing rapid progress with safety, sustainability, and public expectations became one of the most critical aspects of the project’s success.`,
    image: "/home/areaExp/area2.png",
  },

  Solution: {
    text: `To overcome these challenges, the project adopted a comprehensive, multi-disciplinary approach rooted in innovation and sustainability. A phased construction plan was developed to maintain accessibility and minimize disruptions, with real-time traffic monitoring systems deployed to optimize mobility during peak hours. Dedicated pedestrian zones and alternate pathways ensured uninterrupted public movement throughout the construction period.
  
  Environmental protection was prioritized through the use of eco-conscious materials, low-energy lighting systems, and native plant species for landscaping. Smart technology was seamlessly integrated—ranging from adaptive lighting to surveillance and emergency response systems—enhancing both safety and operational efficiency. The final solution successfully merged Abu Dhabi’s modern vision with community needs, delivering a vibrant, sustainable, and inclusive urban space that will serve generations to come.`,
    image: "/home/areaExp/area1.png",
  },
};

export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("Project Overview");

  return (
    <div className="container bg-[#F5F3F0] lg:py-[57px] py-[25px]">
      {/* Tabs */}
      <div className="relative border-t border-b border-[#C2C2C2] flex lg:gap-[100px] gap-[20px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative lg:py-[27px] py-[15px] lg:text-[23px] text-[19px] font-normal text-[#515151] transition duration-300 hover:text-black ${
              activeTab === tab ? "text-black font-medium" : ""
            }`}
          >
            {activeTab === tab && (
              <div className="absolute top-0 left-0 w-full h-[6px] bg-[#7AC142]" />
            )}
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="lg:mt-[37px] mt-[25px] flex flex-col lg:flex-row lg:gap-[60px] gap-[20px] items-center">
        <div className="w-full lg:w-3/4 text-[19px] font-medium text-[#515151] whitespace-pre-line">
          {content[activeTab].text}
        </div>

        <div>
          {content[activeTab].image && (
            <div className="max-w-[516px] h-[381px]">
              <Image
                src={content[activeTab].image}
                alt="PD"
                width={516}
                height={381}
                className="object-cover h-[381px] w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
