import React, { useState } from "react";
import "../style/Navbar.scss";
import { NavLink } from "react-router-dom";
import Nav_Marquee from "./Nav_Marquee";
import logo from "../img/logo.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <Nav_Marquee />

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="ri-menu-line"></i>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <div className="first-box">
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            Kontakt
          </NavLink>
          <NavLink to="/about-us" className="nav-link" onClick={closeMenu}>
            O nama
          </NavLink>
          <NavLink to="/" className="nav-link" onClick={closeMenu} id="todo">
            <div className="number">10</div>
            <p className="wishlist">Lista želja</p>
          </NavLink>
          <NavLink to="/" className="nav-link" onClick={closeMenu} id="todo">
            <i className="ri-user-fill"></i>
          </NavLink>
          <NavLink to="/" className="nav-link" onClick={closeMenu} id="todo">
            <i className="ri-search-line"></i>
          </NavLink>
        </div>
        <div className="second-box">
          <a href="/">
            <img src={logo} alt="Bxd-Satovi" />
          </a>
        </div>
        <div className="third-box">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Početna stranica
          </NavLink>
          <NavLink to="/shop" className="nav-link" onClick={closeMenu}>
            Prodavnica
          </NavLink>
          <NavLink to="/blog" className="nav-link" onClick={closeMenu}>
            Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
