import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // NEW FUNCTION: This will close the menu after a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        {/* The menu toggle button remains the same */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {/* ADD onClick={closeMenu} to every <a> tag */}
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#committee" onClick={closeMenu}>Committee</a></li>
            <li><a href="#call-for-papers" onClick={closeMenu}>GuideLines</a></li>
            <li><a href="#important-dates" onClick={closeMenu}>Important Dates</a></li>
            <li><a href="#registration" onClick={closeMenu}>Registration</a></li>
            <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
            <li><a href="#attractions" onClick={closeMenu}>Attractions</a></li>
            {/* <li><a href="#downloads" onClick={closeMenu}>Downloads</a></li> */}
            <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;