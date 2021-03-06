import React, { useEffect } from "react";
import Aos from "aos";

const BlocDeux = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="accceuilWhite">
      <div className="container d-flex justify-content-between">
        <div className="textBlocButton text-dark  " data-aos="fade-up">
          <h1 className="fw-bolder display-2">
            As a veterinarian and
            <br /> lover of animals.
          </h1>
          <p className="myText ">
            Lorem Ipsum available but the majority have
            <br /> suffered alteration in some form, by injected
            <br /> humour randomised words.
          </p>
          <div className="btnDisplay d-flex">
            <button type="button" className="btn btn-warning text-light ">
              Our Service
            </button>
          </div>
        </div>
        <div className="dogImg " data-aos="fade-right">
          <img src="./img/video.png" alt="dog" />
        </div>
      </div>
    </div>
  );
};

export default BlocDeux;
