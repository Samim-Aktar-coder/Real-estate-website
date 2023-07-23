import React from "react";
import "./home.css";
import index from "../../img/index";

function Home() {
  return (
    <div className='home section ' id='home'>
      <div className='white__gradient'></div>
      <div className='home__container flex'>
        <div className='flex__info'>
          <div className='home__title'>
            <span>
              Discover <br /> Most Suitable Property
            </span>
            <div className='home__circle'></div>
          </div>
          <div className='home__text'>
            Find a variety of properties that suit you very easilty Forget all
            difficulties in finding a residence for you
          </div>

          <div className='home__input'>
            <i className='bi bi-geo-alt-fill'></i>
            <input type='email' />
            <button className='main__btn'>Search</button>
          </div>

          <div className='home__stats'>
            <div className='stat__item'>
              <p className='num'>9,000 <span>+</span></p>
              <div className='text'>Premium Product</div>
            </div>
            <div className='stat__item'>
              <p className='num'>2,000 <span>+</span></p>
              <div className='text'>Happy Customer</div>
            </div>
            <div className='stat__item'>
              <p className='num'>28 <span>+</span></p>
              <div className='text'>Awards Winning</div>
            </div>
          </div>
        </div>
        <div className='flex__img'>
          <div className='img__container'>
            <img src={index.hero} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
