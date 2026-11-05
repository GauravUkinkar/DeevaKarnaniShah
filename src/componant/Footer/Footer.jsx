
import React from "react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-parent parent">
      <div className="footer-cont container">

        <p>
          © {currentYear} Deeva Karnani Shah. All rights reserved.
        </p>

        <button
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          ↑
        </button>

      </div>
    </footer>
  );
};

export default Footer;
