import React from "react";
import { linkedin, logo } from "../../assets/images";
import "./index.css";
import { LINKS } from "../../data";

function Footer() {
  return (
    <div className="footer_wrapper">
      <footer className="footer_container">
        <div className="footer_content">
          <div className="footer_brand">
            <img src={logo} alt="logo" className="footer_logo" />
            <p className="footer_para">
              Want to build the future with us? <br /> Follow T²C and make an
              impact!
            </p>
            <div className="footer_social">
              <a href="#" aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="footer_links_container">
            <div className="footer_links_group">
              <h5 className="footer_heading">Quick Links</h5>
              <ul className="footer_links_list">
                {LINKS.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer_link footer_para">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_links_group">
              <h5 className="footer_heading">Company</h5>
              <ul className="footer_links_list">
                <li>
                  <a href="#" className="footer_link footer_para">
                    Vision
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_link footer_para">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_link footer_para">
                    Values
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_link footer_para">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_link footer_para">
                    Trust
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <p className="footer_copyright footer_para">
            © 2024 TSquaredC | All Rights Reserved.
          </p>
          <div className="footer_legal">
            <a href="#" className="footer_legal_link footer_para">
              Policy Terms
            </a>
            <a href="#" className="footer_legal_link footer_para">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
