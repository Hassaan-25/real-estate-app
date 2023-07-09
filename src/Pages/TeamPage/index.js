import React, { useState } from "react";
import "./team.css";
import image1 from "../../assets/a.jpg";
import image2 from "../../assets/b.jpg";
import image3 from "../../assets/c.jpg";
import image4 from "../../assets/d.jpg";
import { FaSyncAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const TeamPage = () => {
  const [people] = useState([
    {
      id: 1,
      name: "Person 1",
      image: image1,
      experience: "18 years of experience",
      expertise: "Business Modeling",
      position: "Head Secretary",
    },
    {
      id: 2,
      name: "Person 2",
      image: image2,
      experience: "12 years of experience",
      expertise: "Financial Analysis",
      position: "Sales Manager",
    },
    {
      id: 3,
      name: "Person 3",
      image: image3,
      experience: "10 years of experience",
      expertise: "Marketing Strategy",
      position: "Marketing Director",
    },
    {
      id: 4,
      name: "Person 4",
      image: image4,
      experience: "15 years of experience",
      expertise: "Project Management",
      position: "Technical Lead",
    },
    {
      id: 5,
      name: "Person 5",
      image: image2,
      experience: "12 years of experience",
      expertise: "Financial Analysis",
      position: "Sales Manager",
    },
    {
      id: 6,
      name: "Person 6",
      image: image3,
      experience: "10 years of experience",
      expertise: "Marketing Strategy",
      position: "Marketing Director",
    },
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 d-flex align-items-center flex-column">
          <h3 className="text-uppercase">
            We are to make the best offer for you
          </h3>
          <p>
            With over 30 languages at the disposal our team is proficient in
            every aspect of the real estate business. Here you find an agent to
            cooperate with.
          </p>
          <div className="inputs w-100">
            <select>
              <option className="bg-dark" value="">
                Specialization
              </option>
              <option className="bg-dark" value="option1">
                Option 1
              </option>
              <option className="bg-dark" value="option2">
                Option 2
              </option>
            </select>
            <select>
              <option className="bg-dark" value="">
                Language
              </option>
              <option className="bg-dark" value="option1">
                Option 1
              </option>
              <option className="bg-dark" value="option2">
                Option 2
              </option>
            </select>

            <button className="refresh-button">
              <FaSyncAlt />
            </button>
          </div>
          <button
            className="btn_container w-100 btn-footer btn-lg btn-call-us fw-lighter"
            type="button"
          >
            Show All
          </button>
        </div>
        <div className="col-md-7">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect={"coverflow"}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            grabCursor={true}
            loop={true}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {people.map((person, index) => (
              <SwiperSlide key={person.id}>
                <img
                  src={person.image}
                  alt={person.name}
                  width={"315px"}
                  height={"500px"}
                />
                <div class="content_info">
                  <div class="content_info-inner">
                    <a
                      href="/agents/hisham-el-assaad"
                      className="text-decoration-none"
                    >
                      <h4 className="fw-lighter">{person.name}</h4>
                    </a>
                    <span>{person.position}</span>
                    <span class="mt-2">Experience: {person.experience}</span>
                    <span class="mt-2 ">{person.expertise}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
