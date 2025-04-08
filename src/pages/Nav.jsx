import React, { useState, useEffect } from "react";
import "../css/Nav.css";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav shrink" : "nav"}>
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
          <img
            id="mode-btn"
            onClick={toggleDarkMode}
            src={darkMode ? "sun.svg" : "Moon.svg"}
            alt="Mode icon"
            style={{  width: "48px", }}
          />
          <button className="Navbutton">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
