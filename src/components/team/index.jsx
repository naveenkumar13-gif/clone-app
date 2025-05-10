import React from "react";
import "./index.css";
import { team } from "../../data";

function Team() {
  return (
    <div className="section">
      <div className=" about_advisor">
        <h6 className="about_advisor_title"> OUR TEAM</h6>
        <h2 className="about_advisor_heading">
          Meet the core team that
          <br /> <span className="advisor_gradient">bring it all together</span>
        </h2>
      </div>
      <div className="team_container">
        {team.map((teamMember, index) => (
          <div className="team_card" key={index}>
            <img
              src={teamMember.src}
              alt={teamMember.alt}
              className="team_img"
            />
            <div className="team_info">
              <h4 className="team_name">{teamMember.name}</h4>
              <p className="team_title">{teamMember.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
