
import React from "react";
import "./Testimonial.scss";

import ornament7 from "../../assets/ornament-7.png";
import ornamentHero from "../../assets/ornament-hero-2.png";
import test1 from "../../assets/1test.jpg"
import test2 from "../../assets/2test.jpg"
import test3 from "../../assets/3test.jpg"
import test4 from "../../assets/4test.jpg"
import test5 from "../../assets/5test.jpg"
import test6 from "../../assets/6test.jpg"
import ornamentHero2 from "../../assets/ornament-hero-1.png";
import ornamentHero3 from "../../assets/ornament-hero-2.png";
import Top from "../../componant/Top-sec/Top";
import BF from "../../componant/Before-footer/BF";


const testimonials = [
  {
    id: 1,
    review:
      "\"Deeva's stories are a breath of fresh air. Engaging and real, they're my go-to reads!\"",
    name: "Jacqueline Schneider",
    role: "Student",
    image: test1,
  },
  {
    id: 2,
    review:
      "\"Her book The Space Orb was very interesting, I totally loved it.\"",
    name: "Bryan Rose",
    role: "Student",
    image: test2,
  },
  {
    id: 3,
    review:
      "\"Thank you, Deeva, for introducing me to reading. Prior to reading your book, I had no interest in reading, but it gave me a new hobby.\"",
    name: "Patricia Morgan",
    role: "Student",
    image: test3,
  },
  {
    id: 4,
    review:
      "\"Deeva, at 11, is a brilliant storyteller whose books captivate young minds with joy and wisdom. Her tales are a delightful addition to any child's library!\"",
    name: "Sophie Johnson",
    role: "Admiring Reader",
    image: test4,
  },
  {
    id: 5,
    review:
      "\"Her books transport me to a whimsical world of wonder and joy. Her storytelling is a delightful escape for readers of all ages.\"",
    name: "Jessica Parker",
    role: "Avid Reader",
    image: test5,
  },
  {
    id: 6,
    review:
      "\"Deeva's books make me feel like I'm friends with dragons and fairies! Her stories are the best adventures ever, and I can't wait to read them all.\"",
    name: "Mia",
    role: "Student",
    image: test6,
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-parent parent">
      <div className="testimonial-container container">

        <Top title="Testimonial"/>

        <h3>Words from Readers, Testimonials that Speak Volumes</h3>

        {/* Testimonial Grid */}
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <p className="testimonial-review">{item.review}</p>

              <img
                src={item.image}
                alt={item.name}
                className="testimonial-avatar"
              />

              <h4>{item.name}</h4>

              <span>{item.role}</span>
            </div>
          ))}
        </div>
        {/* Contact CTA Section */}
        <BF 
        title="Let's Share Thoughts and Ideas"
          buttonText="GET IN TOUCH"
  buttonLink="/contact"
  />


      </div>
    </div>
  );
};

export default Testimonial;
