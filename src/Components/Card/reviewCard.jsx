import React from "react";
import Card from "./card";
import "./card.css";
import star from "../../Assets/stars.png";

function ReviewCard({ photo }) {
  return (
    <div>
      <div className="review">
        <div className="reviewer">
          <div className="reviewerLeft">
            <div className="reviewerImage">
              <img src={photo} alt="" />
            </div>
            <div>
              <div className="reviewerName">Alicent Hightower</div>
              <div style={{ height: "5px" }}></div>
              <div className="reviewerService">Consulted for Skin care</div>
            </div>
          </div>
          <div className="reviewerRight">
            <div className="reviewerDate">20 January 2023</div>
          </div>
        </div>
        <div className="reviewDescription">
          <div className="reviewerRating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          Dr. Bruce is a very good doctor. He listens to the problem very
          carefully and gives the best solution.
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
