import React from "react";

const BlocAnimate = () => {
  return (
    <div
      className="animateMyBg"
      style={{
        backgroundImage: "url('./img/imgYellow.png')",
        backgroundSize: "cover",
        height: "574px"
      }}
    >
      <div>
        <ul
          className="list-unstyled d-flex justify-content-center"
          style={{ paddingTop: "150px" }}
        >
          <li className="text-light text-center mx-5  ">
            <img src="./img/heart.png" className="mb-5" alt="heart" />
            <h5 className="display-5">+34793 </h5>
            <h5 className="display-5 fw-bolder">Happy Clients </h5>
          </li>

          <li className="text-light text-center mx-5 ">
            <img src="./img/ear.png" className="mb-5" alt="heart" />
            <h5 className="display-5">+34793 </h5>
            <h5 className="display-5 fw-bolder">Happy Clients </h5>
          </li>

          <li className="text-light text-center mx-5 ">
            <img src="./img/vaccin.png" className="mb-5" alt="heart" />
            <h5 className="display-5">+34793 </h5>
            <h5 className="display-5 fw-bolder">Happy Clients </h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlocAnimate;
