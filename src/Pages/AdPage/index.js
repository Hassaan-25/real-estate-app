import React, { useState } from "react";
import "./advertisement.css";
import { advertisements } from "./static";
import {
  FaMapMarkerAlt,
  FaBed,
  FaHotTub,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const AdPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("PentHouse");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredAdvertisements = advertisements.filter(
    (ad) => ad.category === selectedCategory
  );

  return (
    <div className="container ad-container my-5">
      <div className="border-container py-5">
        <div className="content-container">
          <h2 className="heading">Luxury Properties</h2>
          <div className="textContainer">
            <p
              className={`text ${
                selectedCategory === "PentHouse" ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick("PentHouse")}
            >
              PentHouse
            </p>
            <p
              className={`text ${
                selectedCategory === "Apartments" ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick("Apartments")}
            >
              Apartments
            </p>
            <p
              className={`text ${
                selectedCategory === "TownHouses" ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick("TownHouses")}
            >
              TownHouses
            </p>
            <p
              className={`text ${
                selectedCategory === "Villas" ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick("Villas")}
            >
              Villas
            </p>
          </div>
          <div className="advertisement-container">
            {filteredAdvertisements.map((ad) => (
              <div className="advertisement-card" key={ad.id}>
                <img className="ad-image" src={ad.image} alt={ad.name} />
                <div className="card-body">
                  <br />
                  <h5 className="card-title card-space">{ad.name}</h5>
                  <div className="card-location card-space">
                    <FaMapMarkerAlt /> {ad.location}
                  </div>
                  <div className="card-icon-text card-space">
                    <FaBed /> <span className="card-space">{ad.bedrooms}</span>
                    <FaHotTub />{" "}
                    <span className="card-space">{ad.washrooms}</span>
                  </div>
                  <hr />
                  <p className="card-price card-space">Price: {ad.price}</p>
                  <div className="inputs">
                    <button
                      className="btn_container w-100 btn-footer btn-lg btn-call-us fw-lighter ad-icons"
                      type="button"
                    >
                      <FaPhone />
                    </button>
                    <button
                      className="btn_container w-100 btn-footer btn-lg btn-call-us fw-lighter ad-icons"
                      type="button"
                    >
                      <FaEnvelope />
                    </button>
                    <button
                      className="btn_container w-100 btn-footer btn-lg btn-call-us fw-lighter ad-icons"
                      type="button"
                    >
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPage;
