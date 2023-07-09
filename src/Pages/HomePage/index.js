import React from "react";
import "./home.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import IntroPage from "../IntroPage";
import BuyRentPage from "../BuyNRent";
import TeamPage from "../TeamPage";
import AdPage from "../AdPage";
import ReviewPage from "../ReviewPage";
import GridPage from "../GridPgae";

const Home = () => {
  return (
    <>
      <div className="homeContainer imagecontainer">
        <Header />
        <div className="homeTextWrapper">
          <div className="homeText">AX CAPITAL</div>
          <div className="homeTextSmall">
            Innovative Real Estate Agency In Dubai
          </div>
        </div>
      </div>
      <IntroPage />
      <BuyRentPage />
      <TeamPage />
      <AdPage />
      <ReviewPage />
      <GridPage />
      <Footer />
    </>
  );
};

export default Home;
