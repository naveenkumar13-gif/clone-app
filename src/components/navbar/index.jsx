import React, { useEffect, useState } from "react";
import "./index.css";
import { logo } from "../../assets/images";
import { LINKS } from "../../data";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isopen, setIsOpen] = useState(false);

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
        <li className="nav-icon">
          {isopen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon_menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
