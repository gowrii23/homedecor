import React from "react";
import "./styles/header.css";
const Header = () => (
  <header className="header">
    <div className="top-row">
      <span>
        Need Help, Talk to Expert:
        <a href="tel:+919999999999">+91 9999999999</a>
      </span>
      <span>Working Hours: Monday to Sunday (10am - 8pm)</span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
        alt="Facebook"
        className="social-icon"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram"
        className="social-icon"
      />
    </div>
    <div className="bottom-row">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Felipe_icon_User.svg"
        alt="Home"
        className="nav-icon"
      />
      <nav>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
export default Header;
