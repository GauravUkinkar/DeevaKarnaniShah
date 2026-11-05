
import React from "react";
import "./About.scss";
import aboutImage from "../../assets/about-deeva.webp";

const About = () => {
  return (
    <section className="about-parent parent" id="about">
      <div className="about-cont container">

        {/* Left Image */}
        <div className="about-image">
          <img
            src={aboutImage}
            alt="Deeva Karnani Shah with her parents"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="about-subtitle">About Me</span>

          <h2>
            My Path to Literary Brilliance, The Art of Captivating
            Storytelling
          </h2>

          <p>
            Step into my world, where words come alive and stories
            unfold. As an author, I weave tales that resonate with
            the heart, crafting narratives that linger in your mind.
            Join me on a journey through the pages of my life, where
            passion meets pen, and every chapter is a glimpse into
            the extraordinary.
          </p>

          <div className="about-highlight">
            <p>
              I owe my writing journey to the incredible support of
              my parents. Their unwavering love and encouragement
              have fueled my passion, turning every milestone into
              a shared triumph.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
