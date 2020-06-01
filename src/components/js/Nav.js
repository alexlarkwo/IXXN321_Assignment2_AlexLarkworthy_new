import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
import home from "../../images/navigation-home.png";
import logo from "../../images/alexlarkworthylogo.png"
const Nav = () => (
  <header className="navbox">
    <nav className="navigation">
      <div></div>
      <div className="nav-logo">
        <Link to="/">
          <img
            src={logo}
            className="logo-image"
            alt="designed logo"
          />{" "}
        </Link>
      </div>
      <div className="nav-home-logo">
        <Link to="/">
          <img src={home} className="home-image" alt="image of house" />
        </Link>
      </div>
    </nav>
  </header>
);

export default Nav;
