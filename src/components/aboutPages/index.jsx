import React from "react";

import NavBar from "../navbar";
import Advisor from "../aboutAdvisor";
import Team from "../team";
import Footer from "../footer";
import AboutLayout from "../aboutLayout";

function AboutPage() {
  return (
    <div className="layout_img">
      <NavBar />
      <AboutLayout />
      <Advisor />
      <Team />

      <Footer />
    </div>
  );
}

export default AboutPage;
