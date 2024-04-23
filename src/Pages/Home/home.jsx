import React from "react";
import Navigation from "../../Components/navigation/navigation";
import Header from "../../Components/Header/header";
import DoctorCard from "../../Components/DoctorCard/doctorCard";
import photo from "../../Assets/cardimage.png";
import "./home.css";

function HomePage() {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="homeContent">
        <div className="doctors">
          <DoctorCard
            photo={photo}
            specialization="Male-Female Infertility"
            name="Dr. Ahmed Mohammed"
            language="English, Hindi, Marathi"
            chatPrice={230}
            experience={7}
            videoPrice={800}
          />
          <DoctorCard
            photo={photo}
            specialization="Male-Female Infertility"
            name="Dr. Ahmed Mohammed"
            language="English, Hindi, Marathi"
            chatPrice={230}
            experience={7}
            videoPrice={800}
          />
          <DoctorCard
            photo={photo}
            specialization="Male-Female Infertility"
            name="Dr. Ahmed Mohammed"
            language="English, Hindi, Marathi"
            chatPrice={230}
            experience={7}
            videoPrice={800}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
