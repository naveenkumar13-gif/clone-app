import React from "react";
import "./index.css";
import { Technology } from "../../data";

function Feature() {
  return (
    <div className="features">
      <div className="titles">
        <h2 className="heading">Technology, Turbocharged</h2>
        <p className="description">
          Delivering unmatched speed, security, scalability
        </p>
      </div>
      <div>
        <div className="feature_container">
          {Technology.map((card, index) => (
            <div key={index} className="feature_card">
              <div>
                <img src={card.src} alt={card.alt} className="cards" />
              </div>
              <div className="feature_card_content">
                <h4>{card.title}</h4>
                <p className="feature_para">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
