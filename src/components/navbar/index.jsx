import React, { useEffect, useState } from "react";
import "./index.css";
import { logo } from "../../assets/images";
import { LINKS } from "../../data";
import { Link } from "react-router-dom";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const pathname = window.location.pathname;

  const handleNavigation = (href) => {
    if (href.startsWith("#") && pathname !== "/") {
      window.location.href = `/${href}`;
    } else {
      window.location.href = href;
    }
  };
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
        <Link to="/" className="nav-brand">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <li className="links">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="nav-links"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </li>
        <li className="nav-btn">Get Started</li>
        <li className="nav-icon" onClick={() => setIsOpen(!isopen)}>
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </li>
      </ul>
      <div className="mobile_nav">
        {isopen && (
          <ul className="mobile_screen">
            <li className=" mobile_links">
              {LINKS.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="nav-links"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="mobile_btn">Get Started</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
