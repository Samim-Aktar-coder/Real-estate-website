import React from "react";
import "./brands.css";
import index from "../../img/index";

function Brands() {
  return (
    <div className='brands__box padding-x'>
      <div className='brand__logo'>
        <img src={index.prologis} alt='prologies' />
      </div>
      <div className='brand__logo'>
        <img src={index.tower} alt='tower' />
      </div>
      <div className='brand__logo'>
        <img src={index.equinix} alt='tower' />
      </div>
      <div className='brand__logo'>
        <img src={index.realty} alt='realty' />
      </div>
    </div>
  );
}

export default Brands;
