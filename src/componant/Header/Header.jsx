
import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
const Header = () => {
  const location = useLocation();

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

  return (
    <header className="header-parent parent">
      <div className="header-cont container">

        {/* Logo */}
        <Link to="/" className="header-logo">
          <img
            src={logo}
            alt="Deeva Karnani Shah"
          />
        </Link>

        {/* Navigation */}
        <nav className="header-nav">
          {navLinks.map((item) => (
            <div
              className={`nav-item ${
                item.dropdown ? "has-dropdown" : ""
              }`}
              key={item.name}
            >
              {item.isSection ? (
                <a
                  href="/#about"
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
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {item.name}
                </NavLink>
              )}

              {/* Books Dropdown */}
              {item.dropdown && (
                <div className="nav-dropdown">
                  {item.dropdown.map((subItem) => (
                    <Link
                      to={subItem.link}
                      key={subItem.name}
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
