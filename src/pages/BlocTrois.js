import React, { Component } from "react";
import Myblocimg from "../components/Myblocimg";

class BlocTrois extends Component {
  state = {
    mesDonnees: [
      {
        id: 1,
        img: "./img/imgblocOne.png",
        title: "Veterinarian",
        text:
          "Lorem Ipsum available, but the majority have suffered alteration in some."
      },
      {
        id: 2,
        img: "./img/imgblocTwo.png",
        title: "Vaccination Care",
        text:
          "Lorem Ipsum available, but the majority have suffered alteration in some."
      },
      {
        id: 3,
        img: "./img/imgblocThree.png",
        title: "Dental Care",
        text:
          "Lorem Ipsum available, but the majority have suffered alteration in some."
      }
    ]
  };

  render() {
    let { mesDonnees } = this.state;
    return (
      <div className="myKnow text-light pt-5">
        <div className="myTitle text-center">
          <h2 className="fw-bolder display-4">Title Here</h2>
          <p className="myTextTwo">
            Lorem Ipsum available, but the majority have <br />
            suffered alteration in some form.
          </p>
        </div>
        <div className="blocImg">
          <Myblocimg mesDonnees={mesDonnees} />
        </div>
      </div>
    );
  }
}

export default BlocTrois;
