
import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { FaAmazon, FaPrint, FaStar } from "react-icons/fa";

import booksData from "../../data/booksData";
import "./BookDetails.scss";

import topDecoration from "../../assets/top-decoration.png";
import bottomDecoration from "../../assets/bottom-decoration.png";

const BookDetails = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("synopsis");

  const book = booksData.find((item) => item.slug === slug);

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  return (
    <section className="book-details-parent parent">

      {/* Title Banner */}
      <div className="book-title-banner">

        <div className="banner-decoration left-decoration">
          <img src={bottomDecoration} alt="" />
        </div>

        <h1>{book.title}</h1>

        <div className="banner-decoration right-decoration">
          <img src={topDecoration} alt="" />
        </div>

      </div>

      {/* Main Book Details */}
      <div className="book-details-cont container">

        <div className="book-details-main">

          {/* Book Cover */}
          <div className="book-cover">
            <img src={book.image} alt={book.title} />
          </div>

          {/* Book Information */}
          <div className="book-information">

            <h2>{book.title}</h2>

            {/* Rating */}
            <div className="book-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} />
              ))}

              <span>Rating-{book.rating}</span>
            </div>

            {/* Tabs */}
            <div className="book-tabs">

              <button
                type="button"
                className={activeTab === "synopsis" ? "active" : ""}
                onClick={() => setActiveTab("synopsis")}
              >
                Synopsis
              </button>

              <button
                type="button"
                className={activeTab === "details" ? "active" : ""}
                onClick={() => setActiveTab("details")}
              >
                Book Details
              </button>

            </div>

            {/* Tab Content */}
            <div className="book-tab-content">

              {activeTab === "synopsis" ? (

                <div className="book-synopsis">
                  {book.synopsis.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

              ) : (

                <div className="book-details-list">
                  {book.details.map((detail, index) => (
                    <div className="detail-row" key={index}>
                      <span>{detail.label}</span>
                      <span>{detail.value}</span>
                    </div>
                  ))}
                </div>

              )}

            </div>

            {/* Purchase Buttons */}
            <div className="book-action-buttons">

              {book.amazonLink ? (
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amazon-btn"
                >
                  <FaAmazon />
                  <span>
                    <small>Buy on</small>
                    Amazon Books
                  </span>
                </a>
              ) : (
                <div className="amazon-btn disabled">
                  <FaAmazon />
                  <span>
                    <small>Buy on</small>
                    Amazon Books
                  </span>
                </div>
              )}

              {book.publisherLink ? (
                <a
                  href={book.publisherLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publisher-btn"
                >
                  <FaPrint />
                  <span>
                    <small>Publisher</small>
                    {book.publisherName}
                  </span>
                </a>
              ) : (
                <div className="publisher-btn disabled">
                  <FaPrint />
                  <span>
                    <small>Publisher</small>
                    {book.publisherName}
                  </span>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="book-thoughts">

        <div className="thought-decoration">
          <img src={bottomDecoration} alt="" />
        </div>

        <h2>Let's Share Thoughts and Ideas</h2>

        <span className="thought-line"></span>

      </div>

    </section>
  );
};

export default BookDetails;
