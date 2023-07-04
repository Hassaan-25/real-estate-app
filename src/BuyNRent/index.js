import React, { useState } from "react";
import "./buynrent.css";
import buyImage from "../assets/buy-sell_buy.webp";
import sellImage from "../assets/buy-sell_rent.webp";

const BuyRentPage = () => {
  const [isBuyHovered, setIsBuyHovered] = useState(true);

  const handleBuyHover = () => {
    setIsBuyHovered(true);
  };

  const handleSellHover = () => {
    setIsBuyHovered(false);
  };

  return (
    <div className="screen">
      <div className="box">
        <div className="partition left">
          {/* <h3>Heading</h3>
          <p>Some text goes here...</p> */}
          <div className="options">
            <div
              className={`option ${isBuyHovered ? "active" : ""}`}
              onMouseEnter={handleBuyHover}
            >
              BUY <span className="arrow"> &#8594;</span>
            </div>
            <div
              className={`option ${!isBuyHovered ? "active" : ""}`}
              onMouseEnter={handleSellHover}
            >
              RENT <span className="arrow "> &#8594;</span>
            </div>
            <p className="buytxt">
              With a comprehensive portfolio of properties and countless offers,
              we cover all your real estate needs.
            </p>
          </div>
        </div>
        <div className="partition right">
          <img src={isBuyHovered ? buyImage : sellImage} alt="Partition 2" />
        </div>
      </div>
    </div>
  );
};

export default BuyRentPage;
