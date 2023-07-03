import React from "react";
import "./home.css";
import Header from "../Header";
import Footer from "../Footer";
import IntroPage from "../IntroPage";
import BuyRentPage from "../BuyNRent";
import TeamPage from "../TeamPage";
import AdPage from "../AdPage";

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
      <Footer />
    </>
  );
};

export default Home;
