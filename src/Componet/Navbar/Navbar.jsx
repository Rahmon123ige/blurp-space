import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaUser, FaShoppingCart, FaBars, FaTimes, FaBox, FaHeart } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { GiCash } from "react-icons/gi";
import { ImUserTie } from "react-icons/im";
import Logo from '../../Data/logo.webp';
import blacklogo from '../../Data/logoblack.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="navbar" >
        {/* Mobile Layout */}
        <div className="mobile-layout">
          <div className="mobile-top-row">
            <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(true)}>
              <FaBars className='bar' />
            </div>

            <img src={blacklogo} alt="Blurp Logo" className="nav-logo" />

            <div className="mobile-icons">
              <FaUser className='bar' />
              <div className="cart-icon">
                <FaShoppingCart />
                {/* <span className="cart-count">3</span> */}
              </div>
            </div>
          </div>

          <div className="mobile-search-wrapper">
            <MdSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products, brands and categories"
              className="mobile-search-input"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="desktop-layout">
          <div className="nav-left">
            <img src={blacklogo} alt="Blurp Logo" className="nav-logo" />
          </div>

          <div className="nav-center">
            <div className="search-wrapper">
              <MdSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="search-input"
              />
              <button className="btnn"><MdSearch className="search-iicon" /></button>
            </div>
          </div>

          <div className="nav-right">
            <div className="account-dropdown">
              <div className="account-trigger">
                <FaUser className="nav-icon" />
                <span>Account</span>
              </div>

              <div className="account-menu">
                <button className="sign-in-btn">Sign In</button>
                <hr />
                <div className="dropdown-item"><FaUser className="dropdown-icon" /> My Account</div>
                <div className="dropdown-item"><FaBox className="dropdown-icon" /> Orders</div>
                <div className="dropdown-item"><FaHeart className="dropdown-icon" /> Wishlist</div>
                <div className="dropdown-item"><GiCash className="dropdown-icon" /> Earn</div>
                <div className="dropdown-item"><ImUserTie className="dropdown-icon" /> Vendor</div>
              </div>
            </div>

            <div className="cart-icon">
              <FaShoppingCart className="nav-icon" />
              <span>Cart</span>
              {/* <span className="cart-count">3</span> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {mobileMenuOpen && (
        <div className="mobile-sidebar" ref={sidebarRef}>
          <div className="mobile-sidebar-header">
            <img src={Logo} alt="Blurp Logo" className="nav-logo" />
            <FaTimes className="close-icon" onClick={() => setMobileMenuOpen(false)} />
          </div>

          <div className="mobile-links">
            <div><FaBox /> Orders</div>
            <div><FaHeart /> Wishlist</div>
            <div>Vendor</div>
            <div className="earn-dropdown">
              Earn
              <div className="earn-submenu">
                <div>Affiliate Registration</div>
                <div>Affiliate Login</div>
              </div>
            </div>
            <hr />
            <p className="category-title">Our Categories</p>
            <ul className="category-list">
              <li>📷 Camera</li>
              <li>🎥 Gimbals</li>
              <li>🔍 Lens</li>
              <li>💡 Lights</li>
              <li>🎤 Microphone</li>
              <li>📐 Tripods</li>
              <li>👒 Fashion Accessories</li>
              <li>🧴 Skin Care</li>
              <li>📦 Other Categories</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
