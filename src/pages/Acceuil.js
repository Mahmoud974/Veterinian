import React from "react";
import Navbar from "../components/Navbar";

const Acceuil = () => {
  return (
    <>
      <Navbar />
      <div className="accceuil">
        <div className="container d-flex justify-content-between">
          <div className="textBlocButton text-light  ">
            <h1 className="fw-bolder display-2">
              First I wanted to be <br /> a veterinarian
            </h1>
            <p className="myText ">
              Lorem Ipsum available but the majority have
              <br /> suffered alteration in some form, by injected
              <br /> humour randomised words.
            </p>
            <div className="btnDisplay d-flex">
              <button type="button" className="btn btn-info text-light ">
                Contact Us
              </button>
              <button
                type="button"
                className="btn btn-outline-light mx-5 fw-bolder"
              >
                Our Service
              </button>
            </div>
          </div>
          <div className="dogImg ">
            <img src="./img/dog.png" alt="dog" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Acceuil;
