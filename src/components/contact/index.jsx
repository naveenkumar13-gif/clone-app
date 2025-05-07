import React from "react";
import "./index.css";
import { contactCard } from "../../data";

function Contact() {
  return (
    <div className="contact_section" id="contact">
      <div class="container">
        <div class="form-wrapper">
          <div class="form-header">
            <div class="left">
              <h2>Ready to Build the Future? Let’s Make It Happen </h2>
            </div>
            <div class="right">
              <p>
                Your breakthrough idea deserves a world-class execution. Partner
                with T2C and transform your vision into reality.
              </p>
            </div>
          </div>
          <form class="form-body">
            <div class="form-group">
              <label>First Name*</label>
              <input type="text" placeholder="Enter Your First Name" />
            </div>
            <div class="form-group">
              <label>Last Name*</label>
              <input type="text" placeholder="Enter Your Last Name" />
            </div>
            <div class="form-group">
              <label>Email*</label>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div class="form-group">
              <label>Phone Number*</label>
              <input type="tel" placeholder="Enter Your Phone Number" />
            </div>
            <div class="form-button">
              <button type="submit">Send Now</button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact_container">
        {contactCard.map((card, index) => (
          <div className="contact_card" key={index}>
            <img src={card.icon} alt={card.alt} className="contact_img" />

            <div>
              <strong>{card.title}</strong>
              <p className="contact_para">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
