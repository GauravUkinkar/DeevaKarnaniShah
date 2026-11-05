
import React from "react";
import "./Hero.scss";

import heroImage from "../../assets/a1.webp";
import topDecoration from "../../assets/ornament-hero-1.png";
import bottomDecoration from "../../assets/ornament-hero-2.png";

const Hero = () => {
  return (
    <section className="hero-parent parent" id="home">
      <div className="hero-cont container">

        {/* Top Left Decoration */}
        <div className="hero-decoration top-decoration">
          <img src={topDecoration} alt="" />
        </div>

        {/* Bottom Right Decoration */}
        <div className="hero-decoration bottom-decoration">
          <img src={bottomDecoration} alt="" />
        </div>

        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-name">
            Deeva Karnani Shah
          </span>

          <h1>
            A Rising Literary Star Crafting
            <br />
            Words for the Soul
          </h1>

          <p>
            Discover the magic of Deeva Karnani Shah, a young
            author with a gift for crafting captivating stories.
            Her words resonate with emotion, making her a rising
            star in the literary world.
          </p>

          <a href="/books" className="hero-btn">
            MY BOOKS
          </a>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src={heroImage}
            alt="Deeva Karnani Shah holding her award"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
