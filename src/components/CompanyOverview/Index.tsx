import React from 'react'
import BannerSection from './Sections/Banner'
import WhoWeAre from './Sections/WhoWeAre'
import WhatWeDo from './Sections/WhatWeDo'
import VisionMissionValues from './Sections/VisionAccordion'
import WhyChooseUs from './Sections/WhyChooseUs'
import Legacy from './Sections/Legacy'

const Index = () => {
  return (
    <>
        <BannerSection/>
          <WhoWeAre/>
          <WhatWeDo/>
          <VisionMissionValues/>
          <Legacy/>
          <WhyChooseUs/>
    </>  
  )
}

export default Index