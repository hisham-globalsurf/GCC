import React from 'react'
import Footer from './Sections/Footer'
import DiverseSectorsSlider from './Sections/Sectors'
import AboutCompany from './Sections/About'

const Index = () => {
  return (
    <div  className='bg-white'>
    <AboutCompany/>
    <DiverseSectorsSlider/>
    <Footer/>
    </div>
  )
}

export default Index