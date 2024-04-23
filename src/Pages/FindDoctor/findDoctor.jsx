import React from "react";
import Navigation from "../../Components/navigation/navigation";
import AboutCard from "../../Components/AboutCard/aboutCard";
import "./findDoctor.css";
import DoctorProfileBanner from "../../Components/DoctorProfile/doctorProfileBanner";
import Card from "../../Components/Card/card";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import icon4 from "../../Assets/icon4.png";
import photo from "../../Assets/Ellipse 727.png";
import Hospitalicon from "../../Assets/hospitalIcon.png";
import ReviewCard from "../../Components/Card/reviewCard";
import AppointmentPanel from "../../Components/AppointmentPanel/appointmentPanel";

function FindDoctorPage() {
  return (
    <div>
      <Navigation />
      <div className="findDoctorPage">
        <div className="doctorProfileWrapper">
          <DoctorProfileBanner />
        </div>
        <div className="findDoctorPageBody">
          <div className="findDoctorPageBodyLeft">
            <AboutCard
              btn={true}
              title="A Little About Me"
              description="Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the"
            />
            <Card title="I Specialize In" btn={false}>
              <div className="specialization">
                <div className="specializationIcon">
                  <img src={icon1} alt="icon" />
                  Wemens Health
                </div>
                <div className="specializationIcon">
                  <img src={icon2} alt="icon" />
                  Skin Care
                </div>
                <div className="specializationIcon">
                  <img src={icon3} alt="icon" />
                  Immunity
                </div>
                <div className="specializationIcon">
                  <img src={icon4} alt="icon" />
                  Hair Care
                </div>
              </div>
            </Card>
            <Card title="The Concerns I Treat" btn={false}>
              <div className="chips">
                <div className="chip">skinTreatment</div>
                <div className="chip">Pregnancy</div>
                <div className="chip">period Problems</div>
                <div className="chip">Endometriosis</div>
                <div className="chip">Pelvic Pain</div>
                <div className="chip">Ovarian Cysts</div>
                <div className="chip chipWhite">+ 5 More</div>
              </div>
            </Card>
            <Card title="My Experience" btn={false}>
              <div className="experienceHeading">
                I have been in practice for : 7+ Years
              <div className="line lineCard"></div>
              </div>
              <div className="experience">
                <img src={Hospitalicon} alt="" />
                <div className="experienceDescription">
                  Midtown Medical Clinic
                  <div className="experienceTitle">Senior Doctor</div>
                </div>
                <div className="experienceTime">2016 - Present</div>
              </div>
            </Card>
            <Card title="Reviews" btn={false}>
              <ReviewCard photo={photo} />
              <ReviewCard photo={photo} />
            </Card>
          </div>
          <div className="findDoctorPageRight">
            <AppointmentPanel appointmentFee="222.00" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindDoctorPage;
