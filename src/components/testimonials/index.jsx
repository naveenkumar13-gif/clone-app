import React from "react";
import "./index.css";
import { testimonialCard } from "../../data";

function Testimonials() {
  return (
    <div className="features"> 
      <div className="titles">
        <h2 className="heading">Testimonials</h2>
      </div>
      <div className="testimonial_container">
        {testimonialCard.map((testimonial, index) => (
          <div className="testimonial_card" key={index}>
            <p className="testimonial_description">{testimonial.description}</p>
            <div>
              <h2 className="testimonial_name">{testimonial.name}</h2>
              <p className="testimonial_company">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
