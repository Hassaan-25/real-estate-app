import React, { useState } from "react";
import "./advertisement.css";
import ad1 from "../assets/ad1.webp";
import ad2 from "../assets/ad2.webp";
import ad3 from "../assets/ad3.webp";
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

  const advertisements = [
    {
      id: 1,
      name: "Advertisement 1",
      location: "Location 1",
      price: "$100,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad1,
      category: "PentHouse",
    },
    {
      id: 2,
      name: "Advertisement 2",
      location: "Location 2",
      price: "$200,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad2,
      category: "Apartments",
    },
    {
      id: 3,
      name: "Advertisement 3",
      location: "Location 3",
      price: "$300,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad3,
      category: "TownHouses",
    },
    {
      id: 4,
      name: "Advertisement 4",
      location: "Location 4",
      price: "$400,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad2,
      category: "PentHouse",
    },
    {
      id: 5,
      name: "Advertisement 5",
      location: "Location 5",
      price: "$500,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad3,
      category: "PentHouse",
    },
    {
      id: 6,
      name: "Advertisement 3",
      location: "Location 3",
      price: "$300,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad3,
      category: "TownHouses",
    },
    {
      id: 7,
      name: "Advertisement 3",
      location: "Location 3",
      price: "$300,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad3,
      category: "TownHouses",
    },
    {
      id: 8,
      name: "Advertisement 5",
      location: "Location 5",
      price: "$500,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad3,
      category: "Villas",
    },
    {
      id: 9,
      name: "Advertisement 3",
      location: "Location 3",
      price: "$300,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad2,
      category: "Villas",
    },
    {
      id: 10,
      name: "Advertisement 3",
      location: "Location 3",
      price: "$300,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad1,
      category: "Villas",
    },
    {
      id: 11,
      name: "Advertisement 3",
      location: "Location 3",
      price: "$300,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad2,
      category: "Apartments",
    },
    {
      id: 12,
      name: "Advertisement 3",
      location: "Location 3",
      price: "$300,000",
      bedrooms: 2,
      washrooms: 4,
      image: ad1,
      category: "Apartments",
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredAdvertisements = advertisements.filter(
    (ad) => ad.category === selectedCategory
  );

  return (
    <div className="screen-container">
      <div className="border-container">
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
