import React, { useEffect, useState } from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

// Import images
import heroImage from "../assets/j.png";
import ceoImage from "../assets/ceo.jpg";
import team1 from "../assets/ceo.jpg";
import team2 from "../assets/ceo.jpg";
import team3 from "../assets/ceo.jpg";
import team4 from "../assets/ceo.jpg";
import bgVision from "../assets/j.png";

const About = () => {
  const navigate = useNavigate();

  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  });

  useEffect(() => {
    const targets = {
      experience: 20,
      projects: 350,
      clients: 120,
      awards: 15,
    };

    const interval = setInterval(() => {
      setCounts((prev) => ({
        experience: prev.experience < targets.experience ? prev.experience + 1 : prev.experience,
        projects: prev.projects < targets.projects ? prev.projects + 5 : prev.projects,
        clients: prev.clients < targets.clients ? prev.clients + 2 : prev.clients,
        awards: prev.awards < targets.awards ? prev.awards + 1 : prev.awards,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-wrapper">

      {/* NAVBAR SPACER */}
      <div className="navbar-spacer"></div>

      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <h1 className="hero-title">About Us</h1>
      </section>

      {/* COMPANY & CEO */}
      <section className="about-company">
        <div className="company-left">
          <h2 className="company-heading">Who We Are</h2>
          <p>
            We are a results-driven organization delivering enterprise-class
            digital solutions through strategic execution, technical excellence,
            and operational discipline. Our focus is on long-term value creation
            and sustainable growth.
          </p>
        </div>

        <div className="company-right">
          <div className="ceo-box">
            <img src={ceoImage} alt="CEO" className="ceo-img" />
            <div className="ceo-content">
              <h3>Message from the CEO</h3>
              <p>
                “Our mission is to enable organizations to scale confidently by
                leveraging technology, people, and process alignment.”
              </p>
              <h4>
                -Ghj,CEO
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* KPI COUNTERS */}
      <section className="about-stats">
        <div className="stat-box">
          <h3>{counts.experience}+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-box">
          <h3>{counts.projects}+</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-box">
          <h3>{counts.clients}+</h3>
          <p>Clients Served</p>
        </div>
        <div className="stat-box">
          <h3>{counts.awards}+</h3>
          <p>Industry Awards</p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section
        className="about-vision fixed-bg"
        style={{ backgroundImage: `url(${bgVision})` }}
      >
        <div className="overlay"></div>
        <div className="vision-content">
          <div>
            <h2>Our Vision</h2>
            <p>To be a globally trusted partner in digital transformation.</p>
          </div>
          <div className="separator"></div>
          <div>
            <h2>Our Mission</h2>
            <p>To deliver scalable, secure, and innovative solutions that drive measurable business outcomes.</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <h2>Our Leadership</h2>
        <div className="team-grid">
          {[team1, team2, team3, team4].map((img, i) => (
            <div className="team-card" key={i}>
              <img src={img} alt={`Team ${i + 1}`} />
              <h4>Team Member</h4>
              <p>{["CEO", "CTO", "PM", "Architect"][i]}</p>
            </div>
          ))}
        </div>
        <button onClick={() => navigate("/contact")} className="primary-btn">
          Contact Us
        </button>
      </section>

      {/* TESTIMONIALS */}
      <section className="about-testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonial-card">
          <p>
            “A highly professional team with strong execution capabilities and
            consistent delivery performance.”
          </p>
          <span>— Enterprise Client</span>
        </div>
        <div className="testimonial-card">
          <p>
            “Innovative solutions and excellent support – helped us transform our digital strategy.”
          </p>
          <span>— Tech Client</span>
        </div>
        <div className="testimonial-card">
          <p>
            “Reliable, proactive, and results-oriented. Our trusted partner for years.”
          </p>
          <span>— Startup Client</span>
        </div>
      </section>

      {/* SERVICES CTA */}
      <section className="about-services fixed-bg">
        <div className="overlay"></div>
        <div className="services-content">
          <h2>What We Do</h2>
          <p>
            We provide end-to-end digital services including strategy,
            engineering, and managed solutions.
          </p>
          <button onClick={() => navigate("/services")} className="secondary-btn">
            View Services
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
