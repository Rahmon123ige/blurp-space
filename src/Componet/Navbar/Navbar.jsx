// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../Data/logo.webp'

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [earnDropdownOpen, setEarnDropdownOpen] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  
  return (
    <>
      <nav className="navbar">
        <div className="logo">
  <img src={Logo} alt="Blurp Space Logo" />
</div>
        <ul className="navbar-links">
          <li>Home</li>
          <li>Shop</li>
          <li>Vendor</li>
          <li
            className="dropdown-parent"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Earn
            {showDropdown && (
              <div className="dropdown">
                <p>Affiliate Registration</p>
                <p>Affiliate Account Login</p>
              </div>
            )}
          </li>
        </ul>

        <div className="navbar-icons">
          <div className="icon-box" onClick={toggleSearch}>
            <FaSearch />
          </div>
          <div className="icon-box">
            <FaUser />
          </div>
          <div className="icon-box">
            <FaShoppingCart />
          </div>
          <div className="icon-box menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </nav>

      {showSearch && (
        <div className="search-input">
          <input type="text" placeholder="Search anything..." />
        </div>
      )}

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="close-icon" onClick={toggleMenu}>
            <FaTimes />
          </div>
          <ul className="mobile-links">
            <li>Home</li>
            <li>Shop</li>
            <li>Vendor</li>
            <li onClick={() => setEarnDropdownOpen(!earnDropdownOpen)}>
                    Earn
                    {earnDropdownOpen && (
                        <ul className="mobile-earn-dropdown">
                        <li>Affiliate Registration</li>
                        <li>Affiliate Account Login</li>
                        </ul>
                    )}
                    </li>
          </ul>
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>Camera</li>
              <li>Drone</li>
              <li>Gimbal</li>
              <li>Lens</li>
              <li>Light</li>
              <li>Microphone</li>
              <li>Tripod</li>
              <li>Gadgets</li>
              <li>Fashion Accessories</li>
              <li>Skin Care</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
