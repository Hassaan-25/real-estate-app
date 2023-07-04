import React from "react";
import "./intro.css";
import image from "../assets/real-estate-experts.webp";

const introPage = () => {
  return (
    <div className="full-screen">
      <div className="partition1">
        <img src={image} alt="Partition 1" />
      </div>
      <div className="partition2">
        <div className="centered-text">
          <h3>Real Estate Experts</h3>
          <p>
            We understand the fact that modern people strive for maximum
            comfort. <br />
            A harmonious environment, communication with professionals, accurate
            and timely information, commitment, reliable and convenient
            technological solutions that save the resources that are important
            to them. <br /> We have implemented all these in AX CAPITAL
          </p>

          <button
            className="btn_container btn-footer btn-lg btn-call-us fw-lighter"
            type="button"
          >
            Enquire Now
          </button>
        </div>
      </div>
      <div className="box-container">
        <div className="box-left"></div>
        <div className="box-right">
          <div>
            <span className="box-span">5000+</span>
            <p className="box-text">Offers in the Database</p>
          </div>
          <div>
            <span className="box-span">30+</span>
            <p className="box-text">LANGUAGES</p>
          </div>
          <div>
            <span className="box-span">500+</span>
            <p className="box-text">SPECIALISTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default introPage;
