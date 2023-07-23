import React from "react";
import "./hotels.css";
import hotelsData from "./hotelsData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { HashNavigation, Navigation } from "swiper/modules";

function Hotels() {
  return (
    <div className='hotels section' id='residencies'>
      <div className='section__title'>Best Choices</div>
      <div className='section__subtitle'>Popular Residencies</div>

      <div className='hotels__container'>
        <Swiper
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
            1150: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, HashNavigation]}
          className='mySwiper'
        >

          {hotelsData.map((hotel) => (
            <SwiperSlide data-hash={`slide-${hotel.id}`} key={hotel.id}>
              <div className='hotel__item'>
                <img src={hotel.img} alt='hotel-img' />
                <div className='price'>
                  <span>$</span> {hotel.price}
                </div>
                <div className='name'>{hotel.name}</div>
                <p className='address'>{hotel.address}</p>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
  );
}

export default Hotels;
