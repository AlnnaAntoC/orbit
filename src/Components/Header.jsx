// src/Components/Header.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="top-header">
      <div className="header-left">
        <span>📞 +974 4005 2222</span>
        <span>✉ info@orbitqa.com</span>
        <span>📍Doha, Qatar</span>
      </div>
      <div className="header-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                 <FaLinkedin />
        </a>
        <a href="https://wa.me/97440052222" target="_blank" rel="noopener noreferrer">
                 <FaWhatsapp />
        </a>       
      </div>
    </div>
  );
};

export default Header;
