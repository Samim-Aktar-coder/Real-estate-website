import React from "react";
import "./contact.css";
import index from "../../img/index";
import contactData from "./contactData";

function Contact() {
  return (
    <div className='contact section flex' id='contact'>
      <div className='flex__info'>
        <div className='section__title'>Our Contact Us</div>
        <div className='section__subtitle'>Easy to contact us</div>
        <div className='contact__text'>
          We always ready to help by providing the best services for you. We
          beleive a good blace to live can make your life better
        </div>

        <div className='contact__content'>
          {contactData.map((item) => (
            <div key={item.id} className='contact__item'>
              <div className='contact__data'>
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.type}</h3>
                  <p>{item.number}</p>
                </div>
              </div>

              <button className='contact__btn'>{item.btnText}</button>
            </div>
          ))}
        </div>
      </div>
      <div className='flex__img'>
        <div className='img__container'>
          <img src={index.contact} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Contact;
