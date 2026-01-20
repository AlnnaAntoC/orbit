import "./Navbar.css";
import logo from "../assets/l.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  // Separate states for dropdowns
  const [openProjects, setOpenProjects] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  // Smooth scroll to sections within Services page
  const scrollToSection = (id) => {
    navigate("/services");

    // Wait for page navigation to complete
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <nav className="navbar">
      <div className="mobile-hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <FaTimes /> : <FaBars />}
      </div>

      {/* Logo */}
      <div className="logo-wrapper">
        <img src={logo} alt="Company Logo" className="logo-img" />
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${mobileMenu ? "active" : ""}`}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About Us</button>

        {/* Projects Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setOpenProjects(true)}
          onMouseLeave={() => setOpenProjects(false)}
        >
          <button className="dropdown-btn">Projects ▾</button>
          {openProjects && (
            <div className="dropdown-menu">
              <button onClick={() => scrollToSection("proj")}>Projects</button>
              <button onClick={() => scrollToSection("gall")}>Gallery</button>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setOpenServices(true)}
          onMouseLeave={() => setOpenServices(false)}
        >
          <button className="dropdown-btn">Services ▾</button>
          {openServices && (
            <div className="dropdown-menu">
              <button onClick={() => scrollToSection("all")}>All Services</button>
              <button onClick={() => scrollToSection("civil")}>Civil Telecom/OSP Services</button>
              <button onClick={() => scrollToSection("elv")}>ELV Systems</button>
              <button onClick={() => scrollToSection("fttx")}>FTTx</button>
              <button onClick={() => scrollToSection("it")}>IT Networking</button>
            </div>
          )}
        </div>

        <button onClick={() => navigate("/news")}>News</button>
        <button onClick={() => navigate("/contact")}>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
