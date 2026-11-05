
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

import topDecoration from "../../assets/ornament-hero-1.png";
import bottomDecoration from "../../assets/ornament-hero-2.png";

const NotFound = () => {
  return (
    <section className="notfound-parent parent">
      <div className="notfound-cont container">

        {/* Decorations */}
        <div className="notfound-decoration top-decoration">
          <img src={topDecoration} alt="" />
        </div>

        <div className="notfound-decoration bottom-decoration">
          <img src={bottomDecoration} alt="" />
        </div>

        {/* Content */}
        <div className="notfound-content">

          <span className="notfound-subtitle">
            A Little Detour!
          </span>

          <h1>404</h1>

          <h2>
            Oops! This Page Has Gone Missing.
          </h2>

          <p>
            Looks like the story you're searching for has
            wandered off the page. Don't worry, there's
            plenty more to discover!
          </p>

          {/* Buttons */}
          <div className="notfound-buttons">

            <Link to="/" className="notfound-btn primary-btn">
              BACK TO HOME
            </Link>

            <Link to="/books/resurgence" className="notfound-btn secondary-btn">
              EXPLORE BOOKS
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default NotFound;
