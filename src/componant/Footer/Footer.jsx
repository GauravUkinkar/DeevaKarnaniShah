
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

      {/* Footer Heading */}
      <div className="footer-heading">
        <span></span>
        <h3>Stay Connected</h3>
        <span></span>
      </div>

      {/* Footer Bottom Content */}
      <div className="footer-bottom">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/deeva-karnani-shah?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-linkedin"
          aria-label="LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18.5H5V9h3v9.5ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Zm12 10.8h-3v-4.62c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.77 1.2-1.77 2.43v4.7h-3V9h2.88v1.3h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.16h-.06Z" />
          </svg>
        </a>

        {/* Divider */}
        <span className="footer-divider"></span>

        {/* Email */}
        <a
          href="mailto:info@deevakarnanishah.com"
          className="footer-email"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>

          <span>info@deevakarnanishah.com</span>
        </a>

        {/* Divider */}
        <span className="footer-divider"></span>

        {/* Copyright */}
        <p>
          © {currentYear} Deeva Karnani Shah. All rights reserved.
        </p>

      </div>



    </footer>
  );
};

export default Footer;
