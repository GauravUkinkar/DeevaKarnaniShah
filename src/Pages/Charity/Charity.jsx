
import React from "react";
import "./Charity.scss";
import Top from "../../componant/Top-sec/Top";

import charityBanner from "../../assets/Banner-01.jpg";
import stLukesBanner from "../../assets/1234.jpg";

const charityData = [
  {
    id: 1,
    image: charityBanner,
    imageAlt: "Akshaya Patra Foundation",
    title: (
      <>
        The money raised from the sale of
        <span> "The Mysterious Island" </span>
        goes to the charity,
        <span> Akshaya Patra Foundation UK.</span>
      </>
    ),
    description:
      "As a writer, I believe in the power of stories to inspire change. Supporting the Akshaya Patra Foundation aligns with my commitment to nourishing minds. Every book sold contributes to ensuring no child faces hunger, empowering them through education and a brighter future.",
    heading: "Akshaya Patra Foundation",
    details:
      "The Akshaya Patra Foundation is a not-for-profit organisation headquartered in Bengaluru, India. The Foundation strives to eliminate classroom hunger by implementing the PM POSHAN (Mid-Day Meal) Programme. It provides nutritious meals to children studying in government schools and government-aided schools. Akshaya Patra also aims to counter malnutrition and support the Right to Education of children hailing from socio-economically challenging backgrounds.",
    style: "charity-first",
  },
  {
    id: 2,
    image: stLukesBanner,
    imageAlt: "St. Luke's Hospice",
    title: (
      <>
        The proceeds from the sale of
        <span> "The Space Orb" </span>
        goes to St. Luke's Hospice.
      </>
    ),
    description:
      "Contributing to St. Luke's Hospice is my way of bringing comfort to those facing life's toughest moments. Through book sales, we share hope, easing the journey for cancer patients and their families, because everyone deserves dignity and care in their final chapters.",
    heading: "St. Luke's Hospice.",
    details:
      "St. Luke's Hospice, serving Brent and Harrow, provides compassionate care for those facing incurable illnesses. Their dedicated team offers specialized support, aiming to enhance the quality of life, address complex symptoms, and provide emotional assistance, ensuring individuals and their families receive dignified care during life's final phase.",
    style: "charity-second",
  },
];

const Charity = () => {
  return (
    <div className="charity-parent parent">
      <Top title="Charity" />

      {charityData.map((item) => (
        <section className={`charity-section ${item.style}`} key={item.id}>

          {/* Banner */}
          <div className="charity-banner">
            <img src={item.image} alt={item.imageAlt} />
          </div>

          {/* Content */}
          <div className="charity-grid">

            <div className="charity-left">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div className="charity-right">
              <h2>{item.heading}</h2>
              <p>{item.details}</p>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
};

export default Charity;
