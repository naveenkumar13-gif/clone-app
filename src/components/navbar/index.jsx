import React, { useEffect, useState } from "react";
import "./index.css";
import { logo } from "../../assets/images";
import { LINKS } from "../../data";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <ul className="nav section">
        <li>
          <img src={logo} alt="logo" className="nav-logo" />
        </li>
        <li className="links">
          {LINKS.map((link, index) => (
            <a href={link.href} key={index} className="nav-links">
              {link.label}
            </a>
          ))}
        </li>
        <li className="nav-btn">Get Started</li>
      </ul>
    </div>
  );
}

export default NavBar;
