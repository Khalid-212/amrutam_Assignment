import React from "react";
import "./doctorProfileBanner.css";
import photo from "../../Assets/Ellipse 727.png";
import star from "../../Assets/stars.png";
import verified from "../../Assets/tik.png";

function DoctorProfileBanner() {
  return (
    <div className="doctorProfileBanner">
      <div className="profileBannerTop"></div>
      <div className="profileBannerBottom">
        <img className="doctorProfilePicture" src={photo} alt="" />
        <div className="doctorPersonalInfo">
          <div className="doctorName">
            Dr. John Doe
            <img src={verified} alt="" />
          </div>
          <div className="doctorTitle">Gynecologist</div>
          <div className="rating">
            4.3
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
        <div className="doctorStats">
          <div>
            <div className="statTitle">Followers</div>
            <div className="statDescription">850</div>
          </div>
          <div>
            <div className="statTitle">Following</div>
            <div className="statDescription">18K</div>
          </div>
          <div>
            <div className="statTitle">Posts</div>
            <div className="statDescription">250</div>
          </div>
        </div>
        <div className="btnBook">Book An Appointment</div>
      </div>
    </div>
  );
}

export default DoctorProfileBanner;
