import React from "react";
import { linkedin, logo } from "../../assets/images";
import "./index.css";
import { LINKS } from "../../data";

function Footer() {
  return (
    <div className="fotter_features  ">
      <footer className="footer_section">
        <div className="footer_container">
          <div className="footer_logo">
            <img src={logo} alt="logo" className="" />
          </div>
          <p className="footer_para">
            Want to build the future with us? <br /> Follow T²C and make an
            impact!
          </p>
          <div className="footer_social">
            <a href="#">
              <img src={linkedin} alt="linkedIn" />
            </a>
          </div>
        </div>
        <div>
          <div className="footer_links">
            <ul className="footer_list">
              <h5>Quick Links</h5>
              <li className="list_item">
                {LINKS.map((link, index) => (
                  <a
                    href={link.href}
                    key={index}
                    className="nav-links footer-link footer_para"
                  >
                    {link.label}
                  </a>
                ))}
              </li>
            </ul>
            <div>
              <h5>Company</h5>
              <ul className="list_item">
                <li className="footer_list_item footer_para">Vision</li>
                <li className="footer_list_item footer_para">Mission</li>
                <li className="footer_list_item footer_para"> Values</li>
                <li className="footer_list_item footer_para">Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer_bottom">
        <p className="footer_para">© 2024 TSquaredC | All Rights Reserved.</p>
        <div>
          <a href="#" className=" copyright-link footer_para">
            policy term
          </a>
          <a href="#" className=" copyright-link footer_para">
            Terms of service
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
