import React from 'react';
import './Hero.css';
import l1 from '../../logo/l1.webp';
import l2 from '../../logo/l2.webp';
import l3 from '../../logo/l3.webp';
import logo4 from '../../logo/logo4.png';
import logo6 from '../../logo/logo6.webp';
import bgImage1 from '../../logo/bgImage1.jpeg';

const Hero = () => {
  const handleClick = () => {
    alert('Registeration will start soon!');
  };
  return (
    <section className="hero" id="home" 
    // style={{ backgroundImage: `url(${bgImage1})` }}
    >
      <div className="hero-overlay">
        <div className="container hero-content">
          <div className="logo-container">
            {/* Placeholder logos */}
               <img src={l3} alt="NAAC Logo" className="logo" />
            <img src={l2} alt="csjmu Logo" className="logo" />
            <img src={logo4} alt="ICCLG Logo" className="logo" />
            <img src={l1} alt="Abvsls Logo" className="logo" />
            <img src={logo6} alt="Benthem Science logo" className="logo" />
          </div>
          <h1>International Conference on Cybersecurity Law and Governance</h1>
          <h2>Building Global Resilience</h2>
          <div className="hero-details">
            <p className="date">April 17-18 , 2026</p>
            <p className="location">CSJMU Campus, Kanpur, India</p>
             <p className="location">Mode of Conference : Hybrid Mode(Online/Offline)</p>
          </div>
          {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5Y1_TDAg2yxIY_ZppQeDiRODfaUQRzIhOwCTbiOA9fVeXOw/viewform?usp=header" 
            // onClick={handleClick}
            className="cta-button"
          >Register Now</a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;