import React from "react";
import FavBookImg from "../../images/favoritebook.jpg";
import "./FavBook.css";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="main">
      <h1 className="fav-books">Favourite books</h1>
      <div className="FavBook-container">
        <div className="img-container">
          <img src={FavBookImg} alt="favimg" className="fav-img" />
        </div>

        <div className="desc-container">
          <h2 className="fav-heading">
            Find Your Favorite <span className="text-blue-700">Book</span>
          </h2>
          <p className="mb-10 text-lg md:w-5/6">
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.Dictadistinctio assumenda quod aperiam voluptatibus, saepe
            nesciunt ?
          </p>
          <div className="user-details-container">
            <div>
              <h3 className="text-3xl font-bold">800+</h3>
              <p className="text-base">Book Listing</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-base">Register Users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-base">Pdf downloads</p>
            </div>
          </div>
          <div className="py-5">
            <Link to="/shop">
              <button className="explore-more">Explore more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavBook;
