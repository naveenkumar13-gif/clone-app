import React from "react";
import "./index.css";
import { WhyWeCard } from "../../data";

function WhyWe() {
  return (
    <div className="features">
      <div className="titles">
        <h2 className="heading">Why Choose TSquaredC</h2>
        <p className="description">
          Solutions that empower your vision with precision
        </p>
      </div>
      <div>
        <div className="whywe_container">
          {WhyWeCard.map((card, index) => (
            <div key={index} className="whywe_card">
              <div className="whywe_card_content">
                <div className="whywe_card_title">
                  <img
                    src={card.icon}
                    alt={card.alt}
                    className="whywe_card_icon"
                  />
                  <h4>{card.title}</h4>
                </div>
                <p className="whywe_description">{card.description}</p>
              </div>
              <div className="whywe_card_img">
                <img src={card.src} alt={card.alt} className="whywe_card_img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyWe;
