import React from "react";
import logo from "./assests/images/logo.svg";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logoclass">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="list">
        <ul className="navlist">
          <li>Features </li>
          <li>Company</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className="navright">
        <p>Login</p>
        <button className="register">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
