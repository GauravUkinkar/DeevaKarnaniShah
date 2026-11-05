
import React from "react";
import { Link } from "react-router-dom";
import "./Books.scss";

import topDecoration from "../../assets/ornament-hero-1.png";
import bottomDecoration from "../../assets/ornament-hero-2.png";
import book1 from "../../assets/Resurgence-scaled.jpg";
import book2 from "../../assets/1.webp";
import book3 from "../../assets/2.webp";
import book4 from "../../assets/3.webp";

const books = [
  {
    id: 1,
    title: "Resurgence",
    image: book1,
    rating: "5",
    link: "/books/resurgence",
  },
  {
    id: 2,
    title: "The Space Orb",
    image: book2,
    rating: "5",
    link: "/books/the-space-orb",
  },
  {
    id: 3,
    title: "Poco 'o' Lombo is Vesuvius",
    image: book3,
    rating: "5",
    link: "/books/poco-o-lombo",
  },
  {
    id: 4,
    title: "The Mysterious Island",
    image: book4,
    rating: "4.7",
    link: "/books/the-mysterious-island",
  },
];

const Books = () => {
  return (
    <section className="books-parent parent" id="books">
      <div className="books-cont container">

        {/* Decorations */}
        <div className="books-decoration top-decoration">
          <img src={topDecoration} alt="" />
        </div>

        <div className="books-decoration bottom-decoration">
          <img src={bottomDecoration} alt="" />
        </div>

        {/* Heading */}
        <div className="books-heading">
          <span>Book Collection</span>
          <h2>Find the Stories You've Been Searching For.</h2>
        </div>

        {/* Books Grid */}
        <div className="books-grid">
          {books.map((book) => (
            <div className="book-item" key={book.id}>

              <div className="book-image">
                <img src={book.image} alt={book.title} />

                <div className="book-rating">
                  {book.rating} <span>★</span>
                </div>

                <Link to={book.link} className="book-details">
                  <span>➤</span> MORE DETAILS
                </Link>
              </div>

              <h3>{book.title}</h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Books;
