import React, { Component } from "react";

import MyblocimgQuatre from "../components/MyblocimgQuatre";

class BlocSept extends Component {
  state = {
    myDoctor: [
      {
        id: 10,
        img: "./img/vetOne.png",
        title: "As a veterinarian and lover of animals",
        date: "DECEMBER 11, 2021"
      },
      {
        id: 11,
        img: "./img/vetTwo.png",
        title: "As a veterinarian and lover of animals",
        date: "NOVEMBER 01, 2021"
      },
      {
        id: 12,
        img: "./img/vetThree.png",
        title: "As a veterinarian and lover of animals",
        date: "OCTOBER 01, 2021"
      }
    ]
  };
  render() {
    let { myDoctor } = this.state;
    return (
      <div className="myKnow text-light pt-5" id="myKnowYes">
        <div className="myTitle text-dark text-center">
          <h2 className="fw-bolder display-4">Recent Posts</h2>
          <p className="myTextTwo">
            Lorem Ipsum available, but the majority have <br />
            suffered alteration in some form.
          </p>
        </div>
        <div className="blocImg">
          <MyblocimgQuatre myDoctor={myDoctor} />
        </div>
      </div>
    );
  }
}

export default BlocSept;
