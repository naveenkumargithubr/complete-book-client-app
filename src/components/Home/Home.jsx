import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import BestSellerBooks from "../BestSellerBooks/BestSellerBooks";
import FavBook from "../FavBook/FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";
const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};

export default Home;
