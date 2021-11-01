import React, { Component } from "react";
import MyblocimgThree from "../components/MyblocimgThree";

class BlocSix extends Component {
  state = {
    myDoctor: [
      {
        id: 7,
        img: "./img/doctorOne.png",
        title: "Jennifer Mulen",
        function: "Veterinary"
      },
      {
        id: 8,
        img: "./img/doctorTwo.png",
        title: "Sheeren Collins",
        function: "Docteur"
      },
      {
        id: 9,
        img: "./img/doctorThree.png",
        title: "Olivia Mulen",
        function: "Veterinary"
      }
    ]
  };
  render() {
    let { myDoctor } = this.state;
    return (
      <div className="myKnow bg-light text-light py-5">
        <div className="myTitle text-dark text-center">
          <h2 className="fw-bolder display-4">The vetcare team</h2>
          <p className="myTextTwo">
            Lorem Ipsum available, but the majority have <br />
            suffered alteration in some form.
          </p>
        </div>
        <div className="blocImg">
          <MyblocimgThree myDoctor={myDoctor} />
        </div>
      </div>
    );
  }
}

export default BlocSix;
