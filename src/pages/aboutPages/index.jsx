import React from "react";
import "./index.css";
import { about_section } from "../../data";
import NavBar from "../../components/navbar";
import { about1, about2 } from "../../assets/images";

function AboutPage() {
  return (
    <div className="layout_img">
      <NavBar />
      <div className="layout_hero section ">
        <h1>About us</h1>
        <div className="layout_hero_content">
          <div className="layout_content">
            <h6 className="layout_title">OUR APPROACH</h6>
            <h2 className="layout_heading">
              What we want <br /> <span className="gradient">to achieve</span>
            </h2>
            <p className="layout_para">
              At T2C, our goal is to redefine the boundaries of what technology
              can do for businesses globally. We are dedicated to crafting
              solutions that combine not only innovative but also robust enough
              to handle the dynamic needs of modern enterprises. We focus on
              seamless integration and strategic innovation, so your business
              can operate more efficiently and grow without limits.
            </p>
          </div>
          <div className="layout_img_container">
            <img src={about1} alt="about_img" className="about_img" />
          </div>
        </div>
        <div className="layout_hero_content layout_content_right">
          <div className="layout_img_container">
            <img src={about2} alt="about_img" className="about_img" />
          </div>
          <div className="layout_content ">
            <h6 className="layout_title">OUR MISSION</h6>
            <h2 className="layout_heading">
              What we want <br /> <span className="gradient">to achieve</span>
            </h2>
            <p className="layout_para">
              At T2C, our goal is to redefine the boundaries of what technology
              can do for businesses globally. We are dedicated to crafting
              solutions that combine not only innovative but also robust enough
              to handle the dynamic needs of modern enterprises. We focus on
              seamless integration and strategic innovation, so your business
              can operate more efficiently and grow without limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
