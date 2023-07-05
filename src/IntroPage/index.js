import React from "react";
import "./intro.css";
import image from "../assets/real-estate-experts.webp";

const introPage = () => {
  return (
    <div className="container bg-dark my-5">
      <div className="row">
        <div className="col-md-4 p-0">
          <img src={image} alt="Partition 1" width={"100%"} />
        </div>
        <div className="col-md-8 p-0 py-5">
          <div className="px-5 intro-content">
            <h2 className="text-uppercase">Real Estate Experts</h2>
            <p>
              We understand the fact that modern people strive for maximum
              comfort. <br /> <br />
              A harmonious environment, communication with professionals,
              accurate and timely information, commitment, reliable and
              convenient technological solutions that save the resources that
              are important to them. <br /> <br />
              We have implemented all these in AX CAPITAL
            </p>

            <button
              className="btn_container btn-footer btn-lg btn-call-us fw-lighter"
              type="button"
            >
              Enquire Now
            </button>
          </div>
          <div className="d-flex justify-content-between my-5 p-3 border-box">
            <div>
              <h3>5000+</h3>
              <p className="text-uppercase">Offers in Database</p>
            </div>
            <div>
              <h3>30+</h3>
              <p className="text-uppercase">Languages</p>
            </div>
            <div>
              <h3>500+</h3>
              <p className="text-uppercase">Specialists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default introPage;
