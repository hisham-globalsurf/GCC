import React from 'react'
import BannerSection from './Sections/Banner'
import OverviewSection from './Sections/Overview'
import HighlightsSection from './Sections/Highlights'
import MoreProjects from './Sections/MoreProjects'
import ProjectSpecifications from './Sections/ProjectSpecification'

const Index = () => {
  return (
    <>
    <BannerSection/>
    <ProjectSpecifications/>
    <OverviewSection/>
    <HighlightsSection/>
    <MoreProjects/>
    </>
  )
}

export default Index