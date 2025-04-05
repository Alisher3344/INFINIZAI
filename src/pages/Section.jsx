import React from "react";
import "../css/Section.css";
const Section = () => {
  return (
    <section>
      <div className="container sectionf">
        <img className="SecitonLogo" src="section.svg" alt="No logo?" />
        <p className="sp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec
          donec in morbi pulvinar. Enim non pulvinar neque.
        </p>
        <div className="imgSection">
          <img src="IMAGE (4).svg" alt="No img?" />
          <img src="IMAGE (5).svg" alt="No img?" />
          <img src="IMAGE (6).svg" alt="No img?" />
          <img src="IMAGE (7).svg" alt="No img?" />
          <img src="IMAGE (8).svg" alt="No img?" />
          <img src="IMAGE (9).svg" alt="No img?" />
        </div>
      </div>
    </section>
  );
};

export default Section;
