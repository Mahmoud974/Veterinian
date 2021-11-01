import React from "react";

const MyblocimgTwo = props => {
  return (
    <div className="container ">
      <ul className=" blocImgProps d-flex flex-row  ">
        {props.mesDonneesTwo.map(blocMyImgTwo => (
          <li className="mx-5 mt-5 list-style-none" key={blocMyImgTwo.id}>
            <img src={blocMyImgTwo.img} alt="img" />
            <div className="text-center">
              <h3 className=" fw-bolder">{blocMyImgTwo.price} </h3>
              <button
                className="btn btn-info px-5  mt-3 text-light fw-bolder "
                style={{ borderRadius: "20px" }}
              >
                Buy Now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyblocimgTwo;
