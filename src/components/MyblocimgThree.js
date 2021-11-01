import React from "react";

const MyblocimgThree = props => {
  return (
    <div className="container ">
      <ul className=" blocImgProps d-flex flex-row text-dark ">
        {props.myDoctor.map(blocMyImgThree => (
          <li className="mx-5 mt-5 list-style-none" key={blocMyImgThree.id}>
            <img src={blocMyImgThree.img} alt="img" />
            <div className="text-center">
              <h4 className=" fw-bolder mt-4 " style={{ fontSize: "35px" }}>
                {blocMyImgThree.title}{" "}
              </h4>
              <p className="text-uppercase">{blocMyImgThree.function} </p>
            </div>
            <div
              className="text-center"
              style={{ fontSize: "40px", color: "#daac00" }}
            >
              <i className="fab fa-instagram mx-3"></i>
              <i className="fab fa-facebook mx-3 "></i>
              <i className="fab fa-twitter mx-3"></i>
              <i className="fab fa-whatsapp mx-3"></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyblocimgThree;
