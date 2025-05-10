import React from "react";
import "./index.css";
import { hero1, hero2, hero3, hero4 } from "../../assets/images";
import { COMPANY_LOGOS } from "../../data";

function Hero() {
  return (
    <div className="hero" id="Home">
      <div className="hero_left">
        <h1 className="hero_heading">
          The Future of Tech <span className="gradient">Starts Here</span>
        </h1>
        <p className="hero_para">
          From concept to market, TSquaredC supercharges your tech journey with
          top-tier talent, cutting-edge tools, and rapid execution. Let's build
          groundbreaking solutions that define tomorrow.
        </p>
        <a href="#contact">
          <button className="btn">Let's Build Something Extraordinary </button>
        </a>
        <div className="company">
          <p>TRUSTED BY THE BEST</p>
          <div className="company_logo">
            {COMPANY_LOGOS.map((logos, index) => (
              <img
                src={logos.src}
                alt={logos.alt}
                className="logos"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div class="hero_rotate_wrapper">
        <img src={hero1} alt="hero_img" className="hero_img" />
        <img src={hero2} alt="hero_img" className="hero_img" />
        <img src={hero3} alt="hero_img" className="hero_img" />
        <img src={hero4} alt="hero_img" className="hero_img" />
      </div>
    </div>
  );
}

export default Hero;
