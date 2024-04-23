import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navigation.css";
import logo from "../../Assets/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navItems">
        <div className="navLink">
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
            }}
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className="navLink">
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
            }}
            to="/contact"
          >
            Find Doctors
          </NavLink>
        </div>
        <div className="navLink">
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "activeLink";
              }
            }}
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
      <div className="buttons">
        <div className="btn">Login</div>
        <div className="btn primary">Sign-up</div>
      </div>
    </div>
  );
}

export default Navigation;
