
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about", isSection: true },
    { name: "Testimonials", link: "/testimonials" },
    {
      name: "Books",
      link: "/books",
      dropdown: [
        { name: "Resurgence", link: "/books/resurgence" },
        { name: "The Space Orb", link: "/books/the-space-orb" },
        {
          name: "Poco 'o' Lombo is Vesuvius",
          link: "/books/poco-o-lombo",
        },
        {
          name: "The Mysterious Island",
          link: "/books/the-mysterious-island",
        },
      ],
    },
    { name: "Awards", link: "/awards" },
    { name: "Charity", link: "/charity" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Me", link: "/contact" },
  ];

  // Handle About section navigation
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

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setBooksOpen(false);
  }, [location.pathname]);

  // Close menu when clicking navigation
  const closeMenu = () => {
    setMenuOpen(false);
    setBooksOpen(false);
  };

  return (
    <header className="header-parent parent">
      <div className="header-cont container">

        {/* Logo */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img src={logo} alt="Deeva Karnani Shah" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
          {navLinks.map((item) => (
            <div
              className={`nav-item ${
                item.dropdown ? "has-dropdown" : ""
              } ${item.dropdown && booksOpen ? "dropdown-open" : ""}`}
              key={item.name}
            >
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
                  onClick={(e) => {
                    if (
                      item.dropdown &&
                      window.innerWidth <= 850
                    ) {
                      e.preventDefault();
                      setBooksOpen(!booksOpen);
                    } else {
                      closeMenu();
                    }
                  }}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {item.name}
                  {item.dropdown && (
                    <span className="dropdown-arrow">⌄</span>
                  )}
                </NavLink>
              )}

              {/* Books Dropdown */}
              {item.dropdown && (
                <div className="nav-dropdown">
                  {item.dropdown.map((subItem) => (
                    <Link
                      to={subItem.link}
                      key={subItem.name}
                      onClick={closeMenu}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default Header;
