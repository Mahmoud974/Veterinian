import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-dark text-light d-flex justify-content-evenly align-items-center mx-auto ">
      <div className="about">
        <ul>
          <li>
            <h4 className="fw-bolder">About</h4>
          </li>
          <li>History</li>
          <li>Our Team</li>
          <li>Brand Guidelines</li>
          <li>Termes & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className=" services">
        <ul>
          <li>
            <h4 className="fw-bolder">Services</h4>
          </li>
          <li>How to Order</li>
          <li>Our Product</li>
          <li>Order Status</li>
          <li>Promo</li>
          <li>Payment Method</li>
        </ul>
      </div>

      <div className=" titleHere">
        <ul>
          <li>
            <h4 className=" fw-bolder">Title Here</h4>
          </li>
          <li>
            <p>Lorem Ipsum availabe, but the majorit</p>
          </li>
          <li>
            <input
              type="text"
              style={{
                backgroundColor: "#daac00",
                height: "70px",
                width: "280px",
                border: "none"
              }}
            />
            <input
              type="submit"
              style={{
                backgroundColor: "#00bec9",
                color: "#fff",
                height: "70px",
                width: "130px",
                border: "none"
              }}
              value="SEARCH"
            />
            <div className="d-flex mt-3">
              <i className="fab fa-instagram display-5"></i>
              <i className="fab fa-facebook mx-4 display-5"></i>
              <i className="fab fa-twitter mx-3 display-5"></i>
              <i className="fab fa-whatsapp mx-3 display-5"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
