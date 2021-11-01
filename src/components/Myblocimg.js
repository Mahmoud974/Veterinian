import React from "react";

const Myblocimg = props => {
  return (
    <div className="container ">
      <ul className=" blocImgProps d-flex flex-row  ">
        {props.mesDonnees.map(blocMyImg => (
          <li className="mx-5 mt-5 list-style-none" key={blocMyImg.id}>
            <img src={blocMyImg.img} alt="img" />
            <div className="text-center">
              <h3 className=" fw-bolder">{blocMyImg.title} </h3>
              <p className="textUnderImg ">{blocMyImg.text} </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Myblocimg;
