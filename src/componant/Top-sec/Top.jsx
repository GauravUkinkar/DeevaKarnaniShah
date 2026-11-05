import React from "react";
import "./Top.scss";

import ornament7 from "../../assets/ornament-7.png";
import ornamentHero2 from "../../assets/ornament-hero-2.png";

const Top = ({ title }) => {
  return (
    <div className="elementor-background-overlay parent">
      <img
        src={ornament7}
        alt=""
        className="ornament ornament1"
      />

      <p>{title}</p>

      <img
        src={ornamentHero2}
        alt=""
        className="ornament ornament2"
      />
    </div>
  );
};

export default Top;