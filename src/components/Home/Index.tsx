import React from "react";
import Footer from "./Sections/Footer";
import DiverseSectorsSlider from "./Sections/Sectors";
import AboutCompany from "./Sections/About";
import News from "./Sections/News";
import AreaExpertise from "./Sections/AreaExpertise";
import Projects from "./Sections/Projects";
import HeroSection from "./Sections/HeroSection/HeroSection";

const Index = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutCompany />
      <Projects />
      <AreaExpertise />
      <DiverseSectorsSlider />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
