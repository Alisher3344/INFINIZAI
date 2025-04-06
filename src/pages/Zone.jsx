import React from "react";
import "../css/Zone.css";
const Zone = () => {
  return (
    <div className="container ">
      <h4>
        <img src="Fire.svg" alt="No img? " />
        FUTURE OF eSPORTS
      </h4>
      <div className="Zone_div">
        <h2 className="Zoneh2">Latest News & Articles</h2>
        <button className="ExemBtn">Read More</button>
      </div>
      <div className="ZoneFlexw">
        <div className="itm1">
          <img src="IMAGE (14).svg" alt="No img?"></img>
          <p className="ZoneP">April 2, 2021</p>
          <h5 className="Itm1h5">
            Esports Group teams up with the Indianapolis Colts
          </h5>
        </div>
        <div className="ZoneGrid">
          <div className="itm2">
            <img src="IMAGE (15).svg" alt="No img?"></img>
            <p className="ZoneP">April 2, 2021</p>
            <h5 className="Itmsh5">NAVI reveals s1mple</h5>
          </div>
          <div className="itm3">
            <img src="IMAGE (16).svg" alt="No img?"></img>
            <p className="ZoneP">April 2, 2021</p>
            <h5 className="Itmsh5">A1esports Shares </h5>
          </div>
          <div className="itm4">
            <img src="IMAGE (17).svg" alt="No img?"></img>
            <p className="ZoneP">April 2, 2021</p>
            <h5 className="Itmsh5">T1 unveil with Razer</h5>
          </div>
          <div className="itm5">
            <img src="IMAGE (18).svg" alt="No img?"></img>
            <p className="ZoneP">April 2, 2021</p>
            <h5 className="Itmsh5">RX secures content with</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zone;
