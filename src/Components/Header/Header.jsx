import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav>
        <div className="nav__content">
          <div className="logo">
            <a href="/">BBT</a>
          </div>
          <label htmlFor="check" className="checkbox" onClick={handleMenuToggle}>
            <i className="ri-menu-line"></i>
          </label>
          <input type="checkbox" name="check" id="check" checked={menuOpen} />
          <ul className={menuOpen ? 'open' : ''}>
            <li>
              <a href="#Home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#Services" onClick={handleLinkClick}>
                My Services
              </a>
            </li>
            <li>
              <a href="#Portfolio" onClick={handleLinkClick}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
