import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import "./BannerCard.css";

const BannerCard = () => {
  return (
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/src/images/banner-books/book1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/images/banner-books/book2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/images/banner-books/book3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/images/banner-books/book4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/images/banner-books/book5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/src/images/banner-books/book3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/src/images/banner-books/book5.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
