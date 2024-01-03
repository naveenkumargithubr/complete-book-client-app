import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Fa6, FaCartShopping } from "react-icons/fa6";

import "./BookCard.css";

const BookCard = (props) => {
  const { books, headline } = props;

  return (
    <div className="bookcard-container">
      <h2 className="headline">{headline}</h2>
      {/* cards */}
      <div className="bookseller-cards">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="swiper-bg"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/books/${book._id}`}>
                <div className="bookCard-items">
                  <img src={book.imageUrl} alt="images" className="w-96" />
                  <h3>{book.bookTitle}</h3>
                  <div className="sellercart-icon">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
