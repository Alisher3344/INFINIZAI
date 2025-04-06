import React from "react";
import "../css/Exemple.css";
const Exemple = () => {
  return (
    <div className="Exemple">
      <div className="container exem">
        <div>
          <h4>
            <img src="Fire.svg" alt="No img? " />
            FUTURE OF eSPORTS
          </h4>
          <h2 className="Examh2">The new era of cloud gaming here</h2>
          <p className="Exwmp">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          </p>
          <button className="ExemBtn">Explore More</button>
        </div>
        <div className="modal">
          <img src="play.svg" alt="No icon?" />
        </div>
      </div>
    </div>
  );
};

export default Exemple;
