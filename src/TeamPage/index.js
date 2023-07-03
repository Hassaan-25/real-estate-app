import React, { useState } from "react";
import "./team.css";
import image1 from "../assets/a.jpg";
import image2 from "../assets/b.jpg";
import image3 from "../assets/c.jpg";
import image4 from "../assets/d.jpg";
import { FaSyncAlt } from "react-icons/fa";

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
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
  };

  const selectedPerson = people[currentIndex];

  return (
    <div className="screen">
      <div className="left-partition">
        <h3 className="teamHeading">WE ARE TO MAKE THE BEST OFFER FOR YOU</h3>
        <p className="teamText">
          With over 30 languages at the disposal our team is proficient in every
          aspect of the real estate business. Here you find an agent to
          cooperate with.
        </p>
        <div className="inputs">
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
      <div className="right-partition">
        <div className="people">
          {people.map((person, index) => (
            <div
              key={person.id}
              className={`person ${index === currentIndex ? "active" : ""}`}
            >
              <img src={person.image} alt={person.name} />
            </div>
          ))}
        </div>
        <div className="details">
          <h2>{selectedPerson.name}</h2>
          <p>{selectedPerson.position}</p>
          <p>{selectedPerson.experience}</p>
          <p>{selectedPerson.expertise}</p>
        </div>
        <div className="buttons">
          <button className="left-button" onClick={handleLeftClick}>
            &#10094;
          </button>
          <button className="right-button" onClick={handleRightClick}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
