import React from "react";

import burntmetal from "../../images/burntmetal.png";
import lungs from "../../images/lungs.png";
import light from "../../images/light.png";
import ring from "../../images/ring.png";
import wax from "../../images/wax.png";
import waxclose from "../../images/waxclose.png";

import "../css/Homegrid.css";

export default function Homegrid() {
  return (
    <div className="gallery">
      <a href="/#/Projectpage">
        <img
          src={burntmetal}
          className="materials gallery-image"
          alt="burnt metal"
        />
      </a>

      <a href="/#/Projectpage">
        <img
          src={lungs}
          className="lung gallery-image"
          alt="image of geometric 3d prints"
        />
      </a>

      <a href="/#/Projectpage">
        <img
          src={light}
          className="light gallery-image"
          alt="clear plastic with blue light shining through"
        />
      </a>

      <a href="/#/Projectpage">
        <img src={ring} className="ring gallery-image" alt="silver ring on finger" />
      </a>

      <a href="/#/Projectpage">
      <img
          src={wax}
          className="materials gallery-image"
          alt="wax and fabric"
        />
        </a>

    <a href="/#/Projectpage">
        <img
          src={waxclose}
          className="materials gallery-image"
          alt="wax and fabric"
        />
        </a>


    </div>
  );
}
