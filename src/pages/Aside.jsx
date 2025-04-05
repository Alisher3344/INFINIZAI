import React from "react";
import "../css/Aside.css";
const Aside = () => {
  return (
    <aside>
      <div className="container">
        <div className="AsideHead">
          <h4 style={{ margin: "0px " }}>
            <img src="Fire.svg" alt="No img? " />
            FUTURE OF eSPORTS
          </h4>
          <h3 className="Aside_h3">Your one stop shop gaming needs!</h3>
          <p className="asideP">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </p>
        </div>
        <div className="GridAside">
          <div className="Card_Aside">
            <img src="star.svg" alt="No img?"></img>
            <div>
              <h5 className="Aside_h5">All New Gameplay</h5>
              <p className="Aside_p">
                Vivamus magna justo, lacinia eget coecetur sed, convallis at
                tellus. Curabitur non nulla sit Vestibum ante ipsum primis in
                faucibus orci
              </p>
            </div>
          </div>
          <div className="Card_Aside">
            <img src="star.svg" alt="No img?"></img>
            <div>
              <h5 className="Aside_h5">Generation Graphics</h5>
              <p className="Aside_p">
                Vivamus magna justo, lacinia eget coecetur sed, convallis at
                tellus. Curabitur non nulla sit Vestibum ante ipsum primis in
                faucibus orci
              </p>
            </div>
          </div>
          <div className="Card_Aside">
            <img src="star.svg" alt="No img?"></img>
            <div>
              <h5 className="Aside_h5">Lastest Game Engine</h5>
              <p className="Aside_p">
                Vivamus magna justo, lacinia eget coecetur sed, convallis at
                tellus. Curabitur non nulla sit Vestibum ante ipsum primis in
                faucibus orci
              </p>
            </div>
          </div>
          <div className="Card_Aside">
            <img src="star.svg" alt="No img?"></img>
            <div>
              <h5 className="Aside_h5">Multiplayer on the go</h5>
              <p className="Aside_p">
                Vivamus magna justo, lacinia eget coecetur sed, convallis at
                tellus. Curabitur non nulla sit Vestibum ante ipsum primis in
                faucibus orci
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
