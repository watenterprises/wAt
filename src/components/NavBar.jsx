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
          {/* Updated Brand Logo SVG */}
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="#6366f1"/>
            <text x="16" y="21" textAnchor="middle" fontWeight="700" fontSize="14" fill="#fff" fontFamily="Inter,Arial" letterSpacing="1.5">wAt</text>
          </svg>
          <span>wAt</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="cta-btn">
              Talk to us <span className="cta-icon">↗</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
