import React from "react";
import "./index.css";
import { advisor } from "../../data";

function Advisor() {
  return (
    <div className="section">
      <div className=" about_advisor">
        <h6 className="about_advisor_title"> OUR ADVISORS</h6>
        <h2 className="about_advisor_heading">
          Meet our advisors that
          <br /> <span className="advisor_gradient">bring it all together</span>
        </h2>
      </div>
      <div className="advisor_container">
        {advisor.map((advisor, index) => (
          <div key={index} className="advisor_card">
            <div className="advisor_img_container">
              <img
                src={advisor.src}
                alt={advisor.alt}
                className="advisor_img"
              />
            </div>
            <div className="advisor_info">
              <h4 className="advisor_name">{advisor.name}</h4>
              <p className="advisor_title">{advisor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advisor;
