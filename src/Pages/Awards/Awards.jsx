
import React from "react";
import "./Awards.scss";
import Top from "../../componant/Top-sec/Top";
import BF from "../../componant/Before-footer/BF";

import ornament7 from "../../assets/ornament-7.png";
import ornamentHero3 from "../../assets/ornament-hero-2.png";
import newsImage from "../../assets/Awards/profile.webp";


import launch1 from "../../assets/Awards/a1.jpg";
import launch2 from "../../assets/Awards/a2.jpg";
import launch3 from "../../assets/Awards/a3.jpg";
import launch4 from "../../assets/Awards/a4.jpg";

import award1 from "../../assets/Awards/p1.jpg";
import award2 from "../../assets/Awards/p2.webp";
import award3 from "../../assets/Awards/p3.webp";
import award4 from "../../assets/Awards/p4.webp";
import award5 from "../../assets/Awards/p5.webp";
import award6 from "../../assets/Awards/profile.webp";
const awardsData = [
  {
    id: 1,
    year: "2023",
    image: award1,
    title: "Deeva Karnani Shah: UK Diwali Gala Award Winner",
    description:
      "Deeva Karnani Shah receives Maheshwari Mahasabha United Kingdom's achievers award last night at their Diwali Gala.",
  },
  {
    id: 2,
    year: "2023",
    image: award2,
    title: 'Awarded as "Young Innovators Creating a Better World for All"',
    description:
      'Deeva has also been awarded this year with the "Young Innovators Creating a Better World for All" Award by Women Economic Forum.',
  },
  {
    id: 3,
    year: "2021",
    image: award3,
    title: "Recognised By Mayor of the London Borough of Ealing",
    description:
      "She was also recognised for her excellent work of writing and publishing children's books by the Mayor of the London Borough of Ealing.",
  },
  {
    id: 4,
    year: "2021",
    image: award4,
    title: "Felicitated with a shawl",
    description:
      "The Trustees of Shree Jalaram Mandir, Greenford felicitated her with a shawl for being one of the youngest authors.",
  },
  {
    id: 5,
    year: "2019",
    image: award5,
    title: 'Received the Pride of Brent "Inspirational Young Person" Award in 2019',
    description:
      'She has also received the Pride of Brent "Inspirational Young Person" Award in 2019.',
  },
  {
    id: 6,
    year: "2019",
    image: award6,
    title: 'Awarded by "She Inspires" Award 2019',
    description:
      'Deeva was awarded "She Inspires" Award 2019 under the category of Special Mention – Bright Artist by Inspiring Indian Women on International Women’s Day at the House of Lords.',
  },
];

const launchEvents = [
  {
    id: 1,
    image: launch1,
    title: "ALF 2023 wrapped up with resounding success!",
    link: "https://www.facebook.com/story.php?story_fbid=pfbid0ut7p2xYBxo1PKk4DwP7bXVNcaRjar8pysink3H75CHe1b4eBTpEYDY8KLAWGEB4Kl&id=100063920980686&mibextid=WC7FNe&_rdr",
  },
  {
    id: 2,
    image: launch2,
    title: "Delighted to have attended the “AIM Literary Festival” at...",
    link: "https://www.facebook.com/story.php?story_fbid=pfbid03BRBFinokjeDfQqp9yrFJjuvn5rcDngqEXMT7XpjPHHnPUqtKiGBmPHeQZE3Wtmpl&id=1274908809&mibextid=WC7FNe&_rdr",
  },
  {
    id: 3,
    image: launch3,
    title: "Deeva launches her book “Resurgence”",
    link: "https://www.facebook.com/story.php?story_fbid=pfbid032jeBySsfo4Mb9HaVge8VoNumSjYstHw1b9nCQpMR5qykk2SFGjNhcT4m8xgk3Aodl&id=720251840&mibextid=WC7FNe&_rdr",
  },
  {
    id: 4,
    image: launch4,
    title: "Join us for the 4th Annual AIM Literary Festival, this year...",
    link: "https://www.facebook.com/reel/728361262531920",
  },
];

const Awards = () => {
  return (
    <div className="awards-parent parent">

      <Top title="Awards & Recognition" />

      {/* News Articles Section */}
      <section className="awards-news-section">

        <img
          src={ornament7}
          alt=""
          className="awards-ornament awards-ornament-left"
        />

        <img
          src={ornamentHero3}
          alt=""
          className="awards-ornament awards-ornament-right"
        />

        <div className="awards-news-heading">
          <span>News Articles</span>
          <h2>
            Book Buzz: Latest News and Articles on Literary Worlds
          </h2>
        </div>

        <div className="awards-news-card">

          <div className="awards-news-image">
            <img src={newsImage} alt="News article" />
          </div>

          <div className="awards-news-content">
            <p>
              Schoolgirl’s book explores a Pompeii rebuilt –
              but there is danger ahead
            </p>

            <a
              href="https://www.kilburntimes.co.uk/news/21951892.schoolgirls-book-explores-pompeii-rebuilt---danger-ahead/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              VIEW FULL STORY
            </a>
          </div>

        </div>
      </section>

      {/* Book Launch Section */}
      <section className="book-launch-section">

        <img
          src={ornament7}
          alt=""
          className="awards-ornament awards-ornament-left"
        />

        <img
          src={ornamentHero3}
          alt=""
          className="awards-ornament awards-ornament-right"
        />

        {/* Heading */}
        <div className="book-launch-heading">
          <span>Book Launch</span>
          <h2>
            Unveiling Wonders: Your Guide to an Extraordinary Book Launch
          </h2>
        </div>

        {/* Gallery */}
        <div className="book-launch-grid">

          {launchEvents.map((item) => (
            <div className="book-launch-card" key={item.id}>

              <div className="book-launch-image">
                <img src={item.image} alt={item.title} />
              </div>

              <p>{item.title}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                VIEW FULL STORY
              </a>

            </div>
          ))}

        </div>

      </section>
      {/* Awards & Achievements Section */}
<section className="awards-achievements-section">

  <div className="awards-achievements-grid">

    {awardsData.map((item) => (
      <div className="achievement-card" key={item.id}>

        <div className="achievement-image">
          <img src={item.image} alt={item.title} />
        </div>

        <span className="achievement-year">
          {item.year}
        </span>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

      </div>
    ))}

  </div>

</section>

      <BF />

    </div>
  );
};

export default Awards;
