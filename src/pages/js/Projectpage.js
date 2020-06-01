import React from 'react';
import Carousel from 'nuka-carousel';
import wax from "../../images/ProjectPageImages/wax.png";
import waxclose from "../../images/ProjectPageImages/waxclose.png";

import "../css/Projectpage.css";

export default class extends React.Component {
  render() {
    return (

      <div className="project-images">
      <Carousel>
          <img
          src={wax}
          className="materials gallery-image"
          alt="wax and fabric"
        />

        <img
          src={waxclose}
          className="matrials gallery-image"
          alt="wax and fabric"
        />


<div>
<h1>Materials Experimentation (Parasite)</h1>
        <p>
In the project I explored the relationship between two materials. 
I created a sculptural piece to explore how a parasitic relationship between two materials could be illustrated. 
The piece is made from candle wax and burnt nylon. The wax envelopes the nylon and appears to be infecting it. 
The growths created by melted wax have a similar appearance to that of cordycep fungi that infect the minds of insects. 
        </p>
    </div>

      </Carousel>
    </div>


    );
  }
}

