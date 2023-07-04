import React, { useState } from "react";
import "./grid.css";

const GridPage = () => {
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };
  return (
    <>
      <div className="grid-screen-container">
        <div className="gridcolumn">
          <h2 className="gridheading">Trending Areas</h2>
          <div className="text-container-grid">
            <a href="#a" className="gridtext">
              Properties for sale in Dubai Marina
            </a>
            <a href="#a" className="gridtext">
              Properties for sale in Dubai Hills
            </a>
            <a href="#a" className="gridtext">
              Properties for sale in Business Bay
            </a>
            <a href="#a" className="gridtext">
              Properties for sale in Palm Jumeirah
            </a>
            <a href="#a" className="gridtext">
              Properties for sale in Dubai Marina
            </a>
          </div>
        </div>{" "}
        <div className="gridcolumn">
          <h2 className="gridheading">Popular Searches</h2>
          <div className="text-container-grid">
            <a href="#a" className="gridtext">
              Properties for sale in Dubai
            </a>
            <a href="#a" className="gridtext">
              Apartments for sale in Dubai Marina
            </a>
            <a href="#a" className="gridtext">
              Commerical Properties in Dubai
            </a>
            <a href="#a" className="gridtext">
              Duplexes for sale in Dubai
            </a>
            <a href="#a" className="gridtext">
              Apartment Hotels in Dubai Marina
            </a>
            <a href="#a" className="gridtext">
              Townhouses for sale in Dubai
            </a>
            <a href="#a" className="gridtext">
              Plots for sale in Dubai
            </a>
          </div>
        </div>{" "}
        <div className="gridcolumn">
          <h2 className="gridheading">LifeStyle</h2>
          <div className="text-container-grid">
            <a href="#a" className="gridtext">
              Downtown Living
            </a>
            <a href="#a" className="gridtext">
              Golf Club Living
            </a>
            <a href="#a" className="gridtext">
              Marina Living
            </a>
            <a href="#a" className="gridtext">
              Beachfront Property
            </a>
            <a href="#a" className="gridtext">
              Luxury PentHouse
            </a>
          </div>
        </div>{" "}
        <div className="gridcolumn">
          <h2 className="gridheading">Off-Plan Projects</h2>
          <div className="text-container-grid">
            <a href="#a" className="gridtext">
              Sunridge At Rashid Yachts & Marina
            </a>
            <a href="#a" className="gridtext">
              Rivana Villas
            </a>
            <a href="#a" className="gridtext">
              Arbor View
            </a>
            <a href="#a" className="gridtext">
              Bayview by Address Resorts
            </a>
            <a href="#a" className="gridtext">
              Casa Canal
            </a>
          </div>
        </div>{" "}
      </div>
      <div className="detail-screen-container">
        <div className="detail-wrapper">
          <div
            className={`fade-text detail-container ${
              showHistory ? "expanded" : ""
            }`}
            id="companyHistory"
          >
            <h2 className="detail-heading">
              {" "}
              AX CAPITAL – A REAL ESTATE AGENCY IN DUBAI
            </h2>{" "}
            <br />
            AX CAPITAL is a professional real estate agency involved in sale and
            rent of properties in Dubai, UAE. We process our clients’ requests
            promptly in a CRM system, so all your questions will be answered
            timeously. Our competent team members are always available and are
            happy to consult with you on property selection at any time. Our
            team is comprised of experts of over 40 nationalities, collectively
            speaking 30 languages, allowing us to communicate with clients,
            understand their needs, and respond to any requests. With over 400
            real estate professionals on our team, we are passionate about
            improving our professional skills. Our database is constantly being
            updated and includes over 5,000 properties, allowing our customers
            to choose a home to their taste in any of the emirates. Permanent
            partners of the real estate agency AX CAPITAL include over 70
            trusted developers, such as Emaar Properties, Seven Tides
            International, the Sobha Group, Deyaar Properties and Damac
            Properties, among others. We offer our clients off-plan properties
            in Dubai, as well as homes in popular development projects that
            already have an excellent reputation. In the year 2021 alone, our
            team members closed 2,500 successful deals. With over 4,000 clients,
            the total value of all the properties sold over the years reached
            USD 2 billion (AED 7.35 billion). AX CAPITAL, a Dubai real estate
            broker, is involved in active development, as evidenced by its’
            sales performance. For example, a 3,657 m2 villa has recently been
            purchased for USD 25 million (AED 94 million) and another home
            rental transaction was worth USD 19 million (AED 70 million).
            Information technology is only just emerging in the Dubai real
            estate market but we are actively investing in developing in-house
            IT solutions, such as: Innovative property sales platforms; CRM
            systems for brokers and developers; New VR and AR solutions for
            property marketing. These new tools equip us to find the best
            bargains and allow us to offer them to our customers.{" "}
            <h2 className="detail-heading">
              {" "}
              AX CAPITAL – A REAL ESTATE AGENCY IN DUBAI
            </h2>{" "}
            <br /> UAE Are you thinking of buying a property through a real
            estate agency in Dubai? We have extensive experience of working in
            the Emirates and insider knowledge of the UAE’s real estate market.
            Our luxury real estate agency offers a comprehensive range of
            services, which include: A selection of investment properties that
            meet customers’ personal requirements and preferences; Purchase,
            rent, and sale transactions of residential, retail, and office
            properties, remotely or in person, with the customer present; The
            after-sales maintenance and management of residential and commercial
            properties; Legal advice from highly competent professional lawyers;
            Assistance with opening a bank account in the UAE and consultations
            on procuring other financial documents. BUYING PROPERTY THROUGH AN
            AGENCY IN DUBAI The high demand in the housing market boosts the
            prices of villas and apartments in Dubai. Professionals from the
            upscale real estate agency, AX CAPITAL, will contact you at any time
            convenient for you.
          </div>
          <div className="button-container">
            {!showHistory ? (
              <button onClick={toggleHistory} className="read-more-button">
                Read More
              </button>
            ) : (
              <button onClick={toggleHistory} className="hide-button">
                Hide
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GridPage;
