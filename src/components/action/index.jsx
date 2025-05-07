import React from "react";
import "./index.css";
import { cards } from "../../data";

function Action() {
  return (
    <div className="features">
      <div className="">
        <h2 className="heading">Innovation in Action</h2>
        <p className="description">
          Solutions crafted to propel industry leaders into the future.
        </p>
      </div>
      <div className="action_container">
        {cards.map((card, index) => (
          <div className="action_card" key={index}>
            <div className="action_card_img">
              <img src={card.src} alt={card.alt} className="card_img" />
            </div>
            <h4 className="action_card_heading">{card.title}</h4>
            <p className="action_description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Action;
