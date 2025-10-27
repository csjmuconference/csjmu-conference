import React from 'react';
import './Hero.css';
import l1 from '../../logo/l1.webp';
import l2 from '../../logo/l2.webp';
import l3 from '../../logo/l3.webp';

const Hero = () => {
  const handleClick = () => {
    alert('Registeration will start soon!');
  };
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="container hero-content">
          <div className="logo-container">
            {/* Placeholder logos */}
            <img src={l2} alt="NAAC Logo" className="logo" />
            <img src={l3} alt="ARAD Logo" className="logo" />
            <img src={l1} alt="Aurel Vlaicu Logo" className="logo" />
          </div>
          <h1>International Conference on Cybersecurity Law and Governance</h1>
          <h2>Building Global Resilience</h2>
          <div className="hero-details">
            <p className="date">April 17-18 , 2026</p>
            <p className="location">CSJMU Campus, Kanpur, India</p>
          </div>
          <a
            // href="https://docs.google.com/forms/d/e/1FAIpQLSeCzsqfL9feuHP44JlxmpqYp6SXxiGuRVLopLqmR4ZI4RgDwg/viewform" 
            onClick={handleClick}
            className="cta-button"
          >Register Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;