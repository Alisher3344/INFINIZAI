import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2 className="FooterH2">
          Join the largest gaming{" "}
          <span>
            community <img src="line.svg" alt="" />
          </span>
        </h2>
        <p className="FooterP">
          Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl
          tempus lectus. Cras ultricies ligula sed magna dictum porta. Nulla
          quis lorem ut libero malesu ada feugiat. Nulla quis lorem ut libero
          malesuada feugiat. Vivamus magna justo
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form action="">
            <input type="text" placeholder=" Your Email Address" />
            <button>Subscribe Now</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
