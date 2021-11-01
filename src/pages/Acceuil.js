import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Aos from "aos";

const Acceuil = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <>
      <Navbar />

      <div className="accceuil">
        <div className="container d-flex justify-content-between">
          <div className="textBlocButton text-light  " data-aos="fade-right">
            <h1 className=" titleFirst fw-bolder display-2">
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
          <motion.div
            drag
            onDragEnd
            className="dogImg "
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25
            }}
            style={{ cursor: "pointer" }}
          >
            <img src="./img/dog.png" alt="dog" draggable="false" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Acceuil;
