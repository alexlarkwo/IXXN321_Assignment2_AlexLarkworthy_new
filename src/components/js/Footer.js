import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="/#/EmailForm">
        <button className="getInTouch">
          {" "}
          <span> Get in Touch! </span>{" "}
        </button>
      </a>

      <img
        src={require("../../images/linebreak.png")}
        className="line-image"
        alt="image of white line"
      />

      <div className="footer-text">
        <p>I'd love to hear from you! </p>
      </div>

      <a
        href="https://www.instagram.com/alex.larkworthy_design/"
        target="_blank"
        title="Instagram Profile"
      >
        {" "}
        <img
          src={require("../../images/insta.png")}
          className="instalogo"
          alt="Instagram Logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/alex-larkworthy-989158191/"
        target="_blank"
        title="LinkedIn Profile"
      >
        {" "}
        <img
          src={require("../../images/linked in.svg")}
          className="linkedin"
          alt="Linked In Logo"
        />{" "}
      </a>
      <a
        href="https://github.com/alexlarkwo"
        target="_blank"
        title="GitHub Profile"
      >
        {" "}
        <img
          src={require("../../images/GitHubLogoEdit.png")}
          className="github"
          alt="GitHub Logo"
        />{" "}
      </a>
    </div>
  );
};

export default Footer;
