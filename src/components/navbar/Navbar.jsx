import React, { useState } from "react";
import "./navbar.css";
import index from "../../img/index";
import useScrollPosition from "../../useScrollPosition";

function Navbar() {
  const scrollPosition = useScrollPosition();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevData) => !prevData);
  };

  return (
    <div className={`navbar ${scrollPosition > 50 ? "scroll-navbar" : ""}`}>
      <a href='#home' className='nav__logo'>
        <img src={index.logo1} alt='nav-logo' />
      </a>

      <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
        <ul className='nav__list'>
          <li>
            <a href='#residencies' className='nav__link' onClick={toggleMenu}>
              Residencies
            </a>
          </li>
          <li>
            <a href='#value' className='nav__link' onClick={toggleMenu}>
              Our Value
            </a>
          </li>
          <li>
            <a href='#contact' className='nav__link' onClick={toggleMenu}>
              Contact Us
            </a>
          </li>
          <li>
            <a href='#getstarted' className='nav__link' onClick={toggleMenu}>
              Get Started
            </a>
          </li>
          <li>
            <button className='main__btn' onClick={toggleMenu}>
              Contact
            </button>
          </li>
        </ul>
      </div>

      <div className='nav__toggle' onClick={toggleMenu}>
        {showMenu ? (
          <i className='ri-close-line'></i>
        ) : (
          <i className='ri-menu-3-line'></i>
        )}
      </div>
    </div>
  );
}

export default Navbar;
