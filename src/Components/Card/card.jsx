import React from "react";

function Card({ title, btn, children }) {
  return (
    <div>
      <div className="aboutCard">
        <div className="aboutCardTop">
          {title}
          {btn === true ? <div className="aboutCardButton">Follow +</div> : ""}
        </div>
        {children}
      </div>
    </div>
  );
}

export default Card;
