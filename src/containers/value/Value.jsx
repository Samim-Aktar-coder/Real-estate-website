import React from "react";
import "./value.css";
import index from "../../img/index";
import data from "./accordion";
import { IoMdArrowDropdown } from "react-icons/io";
import toggleAnswer from "./custom-value";

function Value() {
  
  return (
    <div className='value section flex' id='value'>
      <div className='flex__img'>
        <div className='img__container'>
          <img src={index.value} alt='' />
        </div>
      </div>

      <div className='flex__info'>
        <div className='section__title'>Our Value</div>
        <div className='section__subtitle'>Value We Give to You</div>
        <div className='value__text'>
          We always ready to help by providing the best services for you. We
          beleive a good blace to live can make your life better
        </div>

        <div className='accordion__container'>
          {data.map((question) => (
            <div key={question.heading} className='question__item'>
              <div className='question' onClick={toggleAnswer}>
                <div className='logo'>{question.icon}</div>
                <p className='question__text'>{question.heading}</p>
                <div className='arrow-logo'>
                  <IoMdArrowDropdown />
                </div>
              </div>

              <div className='answer'>
                <p>{question.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Value;
