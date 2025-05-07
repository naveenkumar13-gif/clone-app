import React from "react";
import "./index.css";
import { businessCards } from "../../data";

function Bussiness() {
  return (
    <div className="features">
      <div className="titles">
        <h2 className="heading">
          Choose Your Solution <br />
          For Emerging Businesses
        </h2>
        <p className="description">
          Propel your new age business forward with our solutions:
        </p>
      </div>

      <div className="business_container">
        {businessCards.map((card, index) => (
          <div className="business_card" key={index}>
            <div className="business_card_img">
              <img src={card.src} alt={card.alt} className="business_img" />
            </div>
            <div className="business_card_content">
              <h4 className="business_card_title">{card.title}</h4>
              <p className="business_description">
                <strong>{card.heading}</strong>
              </p>
              <p className="business_description">{card.description}</p>
              <button className="business_btn">{card.btnText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bussiness;
