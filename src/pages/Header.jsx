import React from "react";
import "../css/Header.css";
const Header = () => {
  return (
    <header id="top">
      <div className="container InHeader">
        <div>
          <h4>
            <img src="Fire.svg" alt="No img? " />
            FUTURE OF eSPORTS
          </h4>
          <h1>
            Unleash the Next{" "}
            <span>
              Generation <img src="liner.svg" alt="" />
            </span>
            of Gaming
          </h1>
          <p className="Headerp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec
            donec in morbi pulvinar. Enim non pulvinar neque.
          </p>
          <div className="flex noen">
            <button className="Hbtn">Explore More</button>
            <h2  className="HeaderH2">View our team</h2>
          </div>
        </div>
        <img className="img_Header" src="game.svg" alt="No icon?" />
      </div>
    </header>
  );
};  

export default Header;
