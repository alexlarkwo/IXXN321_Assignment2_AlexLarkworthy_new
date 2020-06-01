import React from "react";

import  { Link } from "react-router-dom";

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
      <Link to="Projectpage">
        <img
          src={burntmetal}
          className="materials gallery-image"
          alt="burnt metal"
        />
      </Link>

      <Link to="Projectpage">
        <img
          src={lungs}
          className="lung gallery-image"
          alt="image of geometric 3d prints"
        />
       </Link>

      <Link to="Projectpage">
        <img
          src={light}
          className="light gallery-image"
          alt="clear plastic with blue light shining through"
        />
       </Link>

      <Link to="Projectpage">
        <img src={ring} className="ring gallery-image" alt="silver ring on finger" />
        </Link>

      <Link to="Projectpage">
      <img
          src={wax}
          className="materials gallery-image"
          alt="wax and fabric"
        />
        </Link>

        <Link to="Projectpage">
        <img
          src={waxclose}
          className="materials gallery-image"
          alt="wax and fabric"
        />
         </Link>


    </div>
  );
}
