import React from "react";
import "./index.css";
import { space } from "../../assets/images";

function About() {
  return (
    <div className="features">
      <div className="about">
        <div className="about_section">
          <h1 className="about_title">About TSquaredC</h1>
          <p className="about_para">
            At T2C, we push the boundaries of technology for businesses
            worldwide by creating solutions that are both innovative and robust.
            Our focus is on seamless integration and strategic innovation,
            ensuring efficient operations and scalable growth.
          </p>
          <p className="about_para">
            We are committed to empowering businesses in a digital-first world,
            simplifying complex systems to address challenges and unlock
            opportunities. Our scalable solutions are designed for high
            performance, prioritizing customer success and sustainable growth.
          </p>
        </div>
        <div className="aboutImges">
          <img src={space} alt="" className="about_img" />
        </div>
      </div>
    </div>
  );
}

export default About;
