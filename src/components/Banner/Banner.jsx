import React from "react";
import "./Banner.css";
import BannerCard from "../BannerCard/BannerCard";

const Banner = () => {
  return (
    <div className="banner-head">
      <div className="Banner-container">
        {/* left side banner */}
        <div className="leftside-conainer">
          <h2 className="text-5xl font-bold  text-black">
            Buy and sell your books <span>for the Best Prices</span>
          </h2>
          <p className="banner-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            modi qui error voluptates, quidem eligendi officiis vitae, sed
            asperiores illum cupiditate ea ab a adipisci magnam temporibus
            blanditiis consequatur quasi.
          </p>
          <div className="input-container">
            <input
              type="search"
              name="search"
              id="search"
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
        {/* right side banner */}
        <div className="rightside-container">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
