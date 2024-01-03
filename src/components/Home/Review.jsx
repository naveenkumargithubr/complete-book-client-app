import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
// import required modules
import { Pagination } from "swiper/modules";
import profile from "../../images/profile.jpg";

const Review = () => {
  return (
    <div className="our-customer-container">
      <h2>Our Customers </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="swiper-bg"
      >
        <SwiperSlide className="review-shadow">
          <div className="space-y-6 text-blue-500">
            <div className="cust-rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="my-3 mb-5 font-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                saepe eius pariatur doloremque id alias iure culpa explicabo
                enim sit?
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 mt-3"
                />
                <h5 className="text-lg font-medium">Melisa</h5>
                <p className="text-base">CEO, Some Company</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="review-shadow">
          <div className="space-y-6 text-blue-500">
            <div className="cust-rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="my-3 mb-5 font-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                saepe eius pariatur doloremque id alias iure culpa explicabo
                enim sit?
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 mt-3"
                />
                <h5 className="text-lg font-medium">Melisa</h5>
                <p className="text-base">CEO, Some Company</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="review-shadow">
          <div className="space-y-6 text-blue-500">
            <div className="cust-rating">
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="my-3 mb-5 font-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                saepe eius pariatur doloremque id alias iure culpa explicabo
                enim sit?
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 mt-3"
                />
                <h5 className="text-lg font-medium">Melisa</h5>
                <p className="text-base">CEO, Some Company</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="review-shadow">
          <div className="space-y-6 text-blue-500">
            <div className="cust-rating">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="my-3 mb-5 font-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                saepe eius pariatur doloremque id alias iure culpa explicabo
                enim sit?
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 mt-3"
                />
                <h5 className="text-lg font-medium">Melisa</h5>
                <p className="text-base">CEO, Some Company</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="review-shadow">
          <div className="space-y-6 text-blue-500">
            <div className="cust-rating">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="my-3 mb-5 font-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                saepe eius pariatur doloremque id alias iure culpa explicabo
                enim sit?
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 mt-3"
                />
                <h5 className="text-lg font-medium">Melisa</h5>
                <p className="text-base">CEO, Some Company</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
