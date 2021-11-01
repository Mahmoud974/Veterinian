import React from "react";

const MyblocimgQuatre = props => {
  return (
    <div className="container ">
      <ul className=" blocImgProps d-flex flex-row text-dark ">
        {props.myDoctor.map(blocMyImgThree => (
          <li className="mx-5 mt-5 list-style-none " key={blocMyImgThree.id}>
            <img src={blocMyImgThree.img} alt="img" />
            <div className="text-right p-2 ">
              <h4 className=" fw-bolder mt-4  " style={{ fontSize: "35px" }}>
                {blocMyImgThree.title}{" "}
              </h4>
              <p className="text-uppercase text-info fw-bolder">
                {blocMyImgThree.date}{" "}
              </p>
              <p>
                Lorem Ipsum available, but the majo
                <br /> rity have suffered alteration in some
                <br />
                words which look.{" "}
              </p>
              <p className="text-uppercase text-info fw-bolder">Read More+</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyblocimgQuatre;
