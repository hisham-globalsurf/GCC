import React from "react";
import Footer from "./Sections/Footer";
import DiverseSectorsSlider from "./Sections/Sectors";
import AboutCompany from "./Sections/About";
import News from "./Sections/News";
import AreaExpertise from "./Sections/AreaExpertise";
import Projects from "./Sections/Projects";

const Index = () => {
  return (
    <div className="bg-white">
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
