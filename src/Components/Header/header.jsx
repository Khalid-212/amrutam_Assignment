import React from "react";
import "./header.css";
import locationIcon from "../../Assets/location.png";
import leftArrow from "../../Assets/leftArrow.png";

function Header() {
  return (
    <div className="header">
      <div className="headerTop">
        <p>Find expert Doctors for an In-clinic session here</p>
        <div className="search">
          <div className="searchLocation">
            <img src={locationIcon} alt="location icon" />
            <select className="locationInput" name="location" id="">
              <option value="london">Select Location</option>
              <option value="london">Paris</option>
              <option value="london">london</option>
              <option value="london">Paris</option>
            </select>
          </div>
          <div className="searchBox">
            <input
              className="searchInput"
              type="search"
              name="search"
              id="search"
              placeholder="eg. Doctor, specialisation, clinic name"
            />
            <div className="arrow">
              <img src={leftArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <div className="filters">
          <div className="filterItem">
            <select className="filterSelector" name="location" id="">
              <option value="Expreties">Expreties</option>
              <option value="london">Paris</option>
            </select>
          </div>
          <div className="filterItem">
            <select className="filterSelector" name="location" id="">
              <option value="london">Gender</option>
              <option value="london">Male</option>
            </select>
          </div>
          <div className="filterItem">
            <select className="filterSelector" name="location" id="">
              <option value="london">Fees</option>
              <option value="london">Low - High</option>
              <option value="london">High - Low</option>
            </select>
          </div>
          <div className="filterItem">
            <select className="filterSelector" name="location" id="">
              <option value="london">Languages</option>
              <option value="london">English</option>
              <option value="london">Hindi</option>
            </select>
          </div>
          <div className="filterItem">
            <select
              className="filterSelector filterSelectorAll"
              name="location"
              id=""
            >
              <option value="london">All filters</option>
            </select>
          </div>
        </div>
      </div>
      <div className="filterChips">
        <div className="chip">Hair care X</div>
        <div className="chip">Hair care X</div>
        <div className="chip">Hair care X</div>
        <div className="chip">Hair care X</div>
      </div>
    </div>
  );
}

export default Header;
