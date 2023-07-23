import React from "react";
import "./footer.css";
import index from "../../img/index";

function Footer() {
  return (
    <div className='footer padding-x'>
      <div className='footer__logo'>
        <img src={index.logo2} alt='logo-2' />
        <p className='footer__text'>
          Our vision is to make all people the best place to live for them.
        </p>
      </div>

      <div className='footer__info'>
        <h3>Information</h3>
        <p>145 New York, FL 5467, USA</p>

        <ul className='footer__links'>
          <li>
            <a href='#' className='footer__link'>
              Property
            </a>
          </li>
          <li>
            <a href='#' className='footer__link'>
              Services
            </a>
          </li>
          <li>
            <a href='#' className='footer__link'>
              Product
            </a>
          </li>
          <li>
            <a href='#' className='footer__link'>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
