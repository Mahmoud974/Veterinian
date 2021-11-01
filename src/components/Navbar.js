import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-dark text-light  ">
      <div className="container d-flex d-flex justify-content-between">
        <div className="logo">
          <img src="./img/logo.png" alt="logo" />
        </div>
        <div className="d-flex justify-content-between">
          <ul className="d-flex py-4 fw-bolder ">
            <li>Home</li>
            <li>About</li>

            <li>Service</li>

            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
