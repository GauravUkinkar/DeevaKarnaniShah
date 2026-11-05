
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);

  const headerRef = useRef(null);

  const books = [
    { name: "Resurgence", link: "/books/resurgence" },
    { name: "The Space Orb", link: "/books/the-space-orb" },
    { name: "Poco 'o' Lombo is Vesuvius", link: "/books/poco-o-lombo" },
    { name: "The Mysterious Island", link: "/books/the-mysterious-island" },
  ];

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about", isSection: true },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Awards", link: "/awards" },
    { name: "Charity", link: "/charity" },
    { name: "Contact Me", link: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setBooksOpen(false);
  };

  const toggleBooks = () => {
    setBooksOpen((prev) => !prev);
  };

  // Scroll to About section
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#about") {
      requestAnimationFrame(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location.pathname, location.hash]);

  // Close menus when route changes
  useEffect(() => {
    setMenuOpen(false);
    setBooksOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setBooksOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="header-parent parent" ref={headerRef}>
      <div className="header-cont container">

        {/* Logo */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img src={logo} alt="Deeva Karnani Shah" />
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "show" : ""}`}>

          {navLinks.slice(0, 3).map((item) => (
            <div className="nav-item" key={item.name}>
              {item.isSection ? (
                <a
                  href="/#about"
                  onClick={closeMenu}
                  className={
                    location.pathname === "/" &&
                      location.hash === "#about"
                      ? "active"
                      : ""
                  }
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  to={item.link}
                  end={item.link === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}

          {/* Books Dropdown */}
          <div
            className={`nav-item has-dropdown ${booksOpen ? "dropdown-open" : ""
              }`}
          >
            <button
              type="button"
              className={`books-toggle ${booksOpen ? "active" : ""}`}
              onClick={toggleBooks}
              aria-expanded={booksOpen}
              aria-haspopup="true"
            >
              <span>Books</span>

              <span className="dropdown-arrow">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={booksOpen ? "M2.5 7.5L6 4L9.5 7.5" : "M2.5 4.5L6 8L9.5 4.5"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <div className="nav-dropdown">
              {books.map((book) => (
                <Link
                  to={book.link}
                  key={book.name}
                  onClick={closeMenu}
                >
                  {book.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining Navigation */}
          {navLinks.slice(3).map((item) => (
            <div className="nav-item" key={item.name}>
              <NavLink
                to={item.link}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {item.name}
              </NavLink>
            </div>
          ))}

          {/* LinkedIn Divider */}
          <span className="nav-divider"></span>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/deeva-karnani-shah?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            className="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18.5H5V9h3v9.5ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Zm12 10.8h-3v-4.62c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.77 1.2-1.77 2.43v4.7h-3V9h2.88v1.3h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.16h-.06Z" />
            </svg>
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;
