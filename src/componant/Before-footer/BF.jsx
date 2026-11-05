import React from "react";
import "./BF.scss";

import ornamentHero2 from "../../assets/ornament-hero-1.png";
import ornamentHero3 from "../../assets/ornament-hero-2.png";

const BF = ({
  title = "Let's Share Thoughts and Ideas",
  buttonText = "CONTACT ME",
  buttonLink = "#contact",
  className = "",
}) => {
  return (
    <div className={`contact-cta-section ${className}`}>

      <img
        src={ornamentHero2}
        alt=""
        className="cta-ornament cta-ornament-left"
      />


      <div className="cta-content">
        <h2>{title}</h2>

        <a href={buttonLink} className="btn">
          {buttonText}
        </a>
      </div>

      <img
        src={ornamentHero3}
        alt="ornamentHero3"
        className="cta-ornament cta-ornament-right"
      />

    </div>
  );
};

export default BF;