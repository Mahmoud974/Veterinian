import React, { Component } from "react";
import MyblocimgTwo from "../components/MyblocimgTwo";

class BlocCinq extends Component {
  state = {
    mesDonneesTwo: [
      {
        id: 4,
        img: "./img/dogOne.png",
        price: "$30"
      },
      {
        id: 5,
        img: "./img/dogTwo.png",
        price: "$25"
      },
      {
        id: 6,
        img: "./img/dogThree.png",
        price: "$25"
      }
    ]
  };

  render() {
    let { mesDonneesTwo } = this.state;
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
          <MyblocimgTwo mesDonneesTwo={mesDonneesTwo} />
        </div>
      </div>
    );
  }
}

export default BlocCinq;
