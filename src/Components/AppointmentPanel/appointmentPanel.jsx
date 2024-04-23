import React, { useState } from "react";
import "./appointmentPanel.css";
import calenderIcon from "../../Assets/calenderIcon.png";

const AppointmentPanel = ({ appointmentFee }) => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSessionSelect = (sessionType) => {
    setSelectedSession(sessionType);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="appointmentPanel">
      <div className="appointmentFeeCard">
        <div className="appointmentFeeTitle">Appointment Fee</div>
        <div className="appointmentFeeAmount">₹{appointmentFee}</div>
      </div>
      <div className="modeOfSession">
        <div className="modeOfSessionTitle">
          Select your Mode of Session
          <hr />
        </div>
        <div className="modeOfSessionTypes">
          <div
            className={`modeOfSessionType ${
              selectedSession === "In-Clinic" ? "selected" : ""
            }`}
            onClick={() => handleSessionSelect("In-Clinic")}
          >
            <div className="modeOfSessionName">In-Clinic</div>
            <div className="modeOfSessionTime">45 Mins</div>
          </div>
          <div
            className={`modeOfSessionType ${
              selectedSession === "Video" ? "selected" : ""
            }`}
            onClick={() => handleSessionSelect("Video")}
          >
            <div className="modeOfSessionName">Video</div>
            <div className="modeOfSessionTime">45 Mins</div>
          </div>
          <div
            className={`modeOfSessionType ${
              selectedSession === "Chat" ? "selected" : ""
            }`}
            onClick={() => handleSessionSelect("Chat")}
          >
            <div className="modeOfSessionName">Chat</div>
            <div className="modeOfSessionTime">10 Mins</div>
          </div>
        </div>
      </div>
      <div className="sessionDatePicker">
        <div className="sessionDateTitle">
          Pick a time slot
          <hr />
          <img src={calenderIcon} alt="" />
        </div>

        <div className="sessionDatePickerCard">
          {/* Render your date slots here */}
          <div className="sessionDatePickerArrowLeft">{"<"}</div>

          <div
            className={`sessionDatePickerDateCard ${
              selectedSlot === "Mon, 10 Oct" ? "selected" : ""
            }`}
            onClick={() => handleSlotSelect("Mon, 10 Oct")}
          >
            <div className="sessionDatePickerDate">Mon, 10 Oct</div>
            <div className="sessionDatePickerSlots">10 slots</div>
          </div>

          <div
            className={`sessionDatePickerDateCard ${
              selectedSlot === "Tue, 11 Oct" ? "selected" : ""
            }`}
            onClick={() => handleSlotSelect("Tue, 11 Oct")}
          >
            <div className="sessionDatePickerDate">Tue, 11 Oct</div>
            <div className="sessionDatePickerSlots">10 slots</div>
          </div>

          <div
            className={`sessionDatePickerDateCard ${
              selectedSlot === "Wed, 12 Oct" ? "selected" : ""
            }`}
            onClick={() => handleSlotSelect("Wed, 12 Oct")}
          >
            <div className="sessionDatePickerDate">Wed, 12 Oct</div>
            <div className="sessionDatePickerSlots">3 slots</div>
          </div>
          <div className="sessionDatePickerArrowLeft">{">"}</div>
        </div>
      </div>
      {/*  */}
      <div className="sessionTimePicker">
        <p>Morning</p>
        <div className="sessionTimeCards">
          <div
            className={`sessionTimeCard ${
              selectedTime === "10:00 AM" ? "selected" : ""
            }`}
            onClick={() => handleTimeSelect("10:00 AM")}
          >
            10:00 AM
          </div>
          <div
            className={`sessionTimeCard ${
              selectedTime === "9:00 AM" ? "selected" : ""
            }`}
            onClick={() => handleTimeSelect("9:00 AM")}
          >
            9:00 AM
          </div>
          <div
            className={`sessionTimeCard ${
              selectedTime === "8:00 AM" ? "selected" : ""
            }`}
            onClick={() => handleTimeSelect("8:00 AM")}
          >
            8:00 AM
          </div>

          <div
            className={`sessionTimeCard ${
              selectedTime === "7:00 AM" ? "selected" : ""
            }`}
            onClick={() => handleTimeSelect("7:00 AM")}
          >
            7:00 AM
          </div>

          <div
            className={`sessionTimeCard ${
              selectedTime === "6:00 AM" ? "selected" : ""
            }`}
            onClick={() => handleTimeSelect("6:00 AM")}
          >
            6:00 AM
          </div>

          <div
            className={`sessionTimeCard ${
              selectedTime === "5:00 AM" ? "selected" : ""
            }`}
            onClick={() => handleTimeSelect("5:00 AM")}
          >
            5:00 AM
          </div>
          <div
            className={`sessionTimeCard ${
              selectedTime === "4:00 AM" ? "selected" : ""
            }`}
            onClick={() => handleTimeSelect("4:00 AM")}
          >
            4:00 AM
          </div>
        </div>
        {/*  */}
        <div className="sessionTimePicker">
          <p>Evening</p>
          <div className="sessionTimeCards">
            <div
              className={`sessionTimeCard ${
                selectedTime === "10:00 PM" ? "selected" : ""
              }`}
              onClick={() => handleTimeSelect("10:00 PM")}
            >
              10:00 PM
            </div>
            <div
              className={`sessionTimeCard ${
                selectedTime === "9:00 PM" ? "selected" : ""
              }`}
              onClick={() => handleTimeSelect("9:00 PM")}
            >
              9:00 PM
            </div>
            <div
              className={`sessionTimeCard ${
                selectedTime === "8:00 PM" ? "selected" : ""
              }`}
              onClick={() => handleTimeSelect("8:00 PM")}
            >
              8:00 PM
            </div>

            <div
              className={`sessionTimeCard ${
                selectedTime === "7:00 PM" ? "selected" : ""
              }`}
              onClick={() => handleTimeSelect("7:00 PM")}
            >
              7:00 PM
            </div>

            <div
              className={`sessionTimeCard ${
                selectedTime === "6:00 PM" ? "selected" : ""
              }`}
              onClick={() => handleTimeSelect("6:00 PM")}
            >
              6:00 PM
            </div>

            <div
              className={`sessionTimeCard ${
                selectedTime === "5:00 PM" ? "selected" : ""
              }`}
              onClick={() => handleTimeSelect("5:00 PM")}
            >
              5:00 PM
            </div>
            <div
              className={`sessionTimeCard ${
                selectedTime === "4:00 PM" ? "selected" : ""
              }`}
              onClick={() => handleTimeSelect("4:00 PM")}
            >
              4:00 PM
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div
        className="appointmentBtn"
        onClick={() => console.log("Appointment booked!")}
      >
        Book An Appointment
      </div>
    </div>
  );
};

export default AppointmentPanel;
