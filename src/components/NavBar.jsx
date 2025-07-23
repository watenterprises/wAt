import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-float" role="navigation">
      <div className="navbar-content">
        <Link className="logo" to="/">
          {/* Logo SVG */}
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM8 13C9.10457 13 10 13.8954 10 15C10 16.1046 9.10457 17 8 17C6.89543 17 6 16.1046 6 15C6 13.8954 6.89543 13 8 13ZM24 23C22.8954 23 22 22.1046 22 21C22 19.8954 22.8954 19 24 19C25.1046 19 26 19.8954 26 21C26 22.1046 25.1046 23 24 23ZM16 28C10.4772 28 6 23.5228 6 18C6 14.939 8.02944 12.5147 10.8579 12.0917C10.3495 11.2908 10 10.2199 10 9C10 5.68629 12.6863 3 16 3C19.3137 3 22 5.68629 22 9C22 10.2199 21.6505 11.2908 21.1421 12.0917C23.9706 12.5147 26 14.939 26 18C26 23.5228 21.5228 28 16 28Z"
              fill="#222"
            />
          </svg>
          <span>Dapper</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="cta-btn">
              Talk to us
              <span className="cta-icon">↗</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
