import React from "react";
import "./aboutCard.css";
import ig from "../../Assets/instaa.png";
import fb from "../../Assets/fbb.png";
import tw from "../../Assets/twitterr.png";
import yt from "../../Assets/youtubee.png";


function AboutCard({ btn, title, description }) {
  return (
    <div className="aboutCard">
      <div className="aboutCardTop">
        {title}
        {btn === true ? <div className="aboutCardButton">Follow +</div> : ""}
      </div>

      <div className="aboutCardBottom">
        <div className="aboutCardDescription">
          {description}
          <div className="readMore">
            <div className="line"></div>
            Read More
          </div>
        </div>
        <div className="aboutLanguage">
          <div className="aboutLanguageTitle">Language Spoken:</div>
          <div className="aboutPageLanguages">English</div>
          <div className="aboutPageLanguages">Hindi</div>
          <div className="aboutPageLanguages">Telugu</div>
        </div>
        <div className="aboutSocial">
          <img className="aboutSocialIcon" src={ig} alt="" />
          <img className="aboutSocialIcon" src={fb} alt="" />
          <img className="aboutSocialIcon" src={tw} alt="" />
          <img className="aboutSocialIcon" src={yt} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
