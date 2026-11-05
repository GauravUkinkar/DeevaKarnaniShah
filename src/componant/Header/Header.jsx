
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
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

  return (
    <div className="header-parent parent">
      <div className="header-cont container">
        <Link to="/" className="header-logo">
          <svg viewBox="0 0 30 35" fill="none">
            <path
              d="M25 2C16 7 8 17 3 31C11 25 21 14 25 2Z"
              fill="#568B00"
            />
            <path
              d="M5 28L21 8M10 22L8 18M14 17L12 13M18 12L16 9"
              stroke="#FAF0E1"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span>Deeva Karnani Shah</span>
        </Link>

        <nav className="header-nav">
          {navLinks.map((item) => (
            <div
              className={`nav-item ${item.dropdown ? "has-dropdown" : ""}`}
              key={item.name}
            >
              {item.isSection ? (
                <a href={item.link}>{item.name}</a>
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

              {item.dropdown && (
                <div className="nav-dropdown">
                  {item.dropdown.map((subItem) => (
                    <Link to={subItem.link} key={subItem.name}>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
