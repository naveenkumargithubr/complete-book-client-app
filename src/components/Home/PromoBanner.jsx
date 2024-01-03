import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Bookpic from "../../images/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className="promo-banner-bg">
      <div className="promo-flex-container">
        <div className="md:w-1/2">
          <h2 className="promo-head">
            2023 National Book Awards for Fiction ShortList
          </h2>
          <Link to="/shop">
            <button className="get-promo">Get Promo Code</button>
          </Link>
        </div>
        <div>
          <img src={Bookpic} alt="" className="w-80" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
