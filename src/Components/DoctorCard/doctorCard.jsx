import React from "react";
import "./doctorCard.css";
import link from "../../Assets/link.png";
import education from "../../Assets/education.png";
import comment from "../../Assets/comment.png";
import { Link } from "react-router-dom";

function DoctorCard({
  photo,
  name,
  videoPrice,
  chatPrice,
  language,
  experience,
  specialization,
}) {
  return (
    <div className="doctorCard">
      <div className="photo">
        <img src={photo} alt="" />
        <div className="rating"></div>
      </div>
      <div className="name">{name}</div>
      <div className="details">
        <div className="specialization">
          <img src={link} alt="" />
          {specialization}
        </div>
        <div className="experience">
          <img src={education} alt="" />
          {experience} years of experience
        </div>
        <div className="language">
          <img src={comment} alt="" />
          Speaks: {language}
        </div>
      </div>
      <div className="services">
        <div className="serviceType">
          video consultation <br />
          <div>{"₹" + videoPrice}</div>
        </div>
        <div className="serviceType">
          chat consultation <br />
          <div>{"₹" + chatPrice}</div>
        </div>
      </div>
      <div className="cardButtons">
        <Link to="/contact">
          <div className="cardButton">View Profile</div>
        </Link>
        <Link to="/contact">
          <div className="cardButton cardButtonPrimary">
            Book a consultation
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;
