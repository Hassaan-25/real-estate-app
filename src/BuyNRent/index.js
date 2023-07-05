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
    <div className="bg-dark container">
      <div className="row buy-n-rent-row">
        <div className="col-xl-6 order-xl-2 py-5 px-0 buy-n-rent-img">
          <img
            src={isBuyHovered ? buyImage : sellImage}
            alt="Partition 2"
            width={"100%"}
          />
        </div>
        <div className="col-xl-6 order-xl-1 d-flex align-items-center px-0">
          <div className="buy-n-rent-content p-5">
            <div className="options">
              <div
                className={`option ${isBuyHovered ? "active" : ""}`}
                onMouseEnter={handleBuyHover}
              >
                <h2>
                  BUY <span className="arrow"></span>
                </h2>
              </div>
              <div
                className={`option ${!isBuyHovered ? "active" : ""}`}
                onMouseEnter={handleSellHover}
              >
                <h2>
                  RENT <span className="arrow"></span>
                </h2>
              </div>
              <p className="buytxt">
                With a comprehensive portfolio of properties and countless
                offers, we cover all your real estate needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyRentPage;
