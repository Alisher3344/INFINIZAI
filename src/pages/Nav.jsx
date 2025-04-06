import React, { useState, useEffect } from "react";
import "../css/Nav.css";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "nav shrink" : "nav"} >
      <div className="container navflex">
        <div className="flex1">
          <img src="logo.svg" alt="No brend?" />
          <h1 className="hamburger" onClick={toggleMenu}>
            <FaBars />
          </h1>
        </div>
        <ul className={menuOpen ? "show" : "hide"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
        </ul>
        <div className={`endNav ${menuOpen ? "show" : "hide"}`}>
          <img src="Moon.svg" alt="NO icon?" />
          <button className="Navbutton">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
