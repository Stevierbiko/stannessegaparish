import React from "react";

import { Link } from "react-router-dom";
import Image from "../image/bg1.png";

import "../pages/home/home.css";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left ">
          <h4>All Are Welcome to.</h4>
          <h1>St Annes Catholic Church Sega</h1>

          <p>
            A parish that is inspired by the Gospel and Nourished by the
            Eucharist that is actively visible in the community.
          </p>
          <Link to="/about" className="btn lg ">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Statue Of Mary" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
