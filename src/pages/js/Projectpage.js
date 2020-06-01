import React from 'react';
import Carousel from 'nuka-carousel';
import wax from "../../images/ProjectPageImages/wax.png";
import waxclose from "../../images/ProjectPageImages/waxclose.png";

export default class extends React.Component {
  render() {
    return (
      <Carousel>
          <img
          src={wax}
          className="materials gallery-image"
          alt="wax and fabric"
        />

        <img
          src={waxclose}
          className="materials gallery-image"
          alt="wax and fabric"
        />
      </Carousel>
    );
  }
}

