import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaUser, FaShoppingCart, FaBars, FaTimes, FaBox, FaHeart, FaPhoneAlt } from 'react-icons/fa';
import { MdSearch, MdOutgoingMail } from 'react-icons/md';
import { GiCash } from "react-icons/gi";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { ImUserTie } from "react-icons/im";
import Logo from '../../Data/logo.webp';
import blacklogo from '../../Data/logoblack.png'
import { Link } from 'react-router-dom';

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
              <FaBars className='bars' />
            </div>

            <Link to='/'><img src={blacklogo} alt="Blurp Logo" className="nav-logo" /></Link>

            <div className="mobile-icons">
              <Link to='/Auth'><FaUser className='bars' /></Link>
              <div className="cart-icon">
                <Link to='cartpage'><FaShoppingCart /></Link>
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
            <Link to='/'><img src={blacklogo} alt="Blurp Logo" className="nav-logo" /></Link>
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
                <span>My Account</span>
              </div>

              <div className="account-menu">
                <Link to='/Auth'><button className="sign-in-btn">Sign In</button></Link>
                <hr />
                <div className="dropdown-item"><FaUser className="dropdown-icon" /> My Account</div>
                <div className="dropdown-item"><FaBox className="dropdown-icon" /> Orders</div>
                <Link to='/wishlist'><div className="dropdown-item"><FaHeart className="dropdown-icon" /> Wishlist</div></Link>
                <div className="dropdown-item"><GiCash className="dropdown-icon" /> Earn</div>
                <Link to='/VendorAuth' className="link-reset"><div className="dropdown-item"><ImUserTie className="dropdown-icon" /> Vendor</div></Link>
              </div>
 
            </div>

            <div className="account-dropdown">
              <div className="account-trigger">
              <LuMessageCircleQuestion className="nav-icon" />
            </div>
            <div className="account-menu">
              Contact Us 
              <hr />
              <div className="dropdown-item"><FaPhoneAlt className="dropdown-icon" /> 09047348040</div>
                <div className="dropdown-item"><MdOutgoingMail className="dropdown-icon" /> Infoblurspace@gmail.com</div>
            </div>
            </div>
            

            <div className="cart-icon">
             <Link to='/cartpage'><FaShoppingCart className="nav-icon" /></Link> 
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
            <Link to='/'><img src={Logo} alt="Blurp Logo" className="nav-logo" /></Link>
            <FaTimes className="close-icon" onClick={() => setMobileMenuOpen(false)} />
          </div>

          <div className="mobile-links">
            <div><FaBox /> Orders</div>
            <Link to='/wishlist'><div><FaHeart /> Wishlist</div></Link>
            <Link to='VendorAuth' className="link-reset"><div>Vendor</div></Link>
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
              <li><Link to="/category/Camera" className="link-reset">📷 Camera</Link></li>
              <li><Link to="/category/Gimbals" className="link-reset">🎥 Gimbals</Link></li>
              <li><Link to="/category/Lens" className="link-reset">🔍 Lens</Link></li>
              <li><Link to="/category/Lights" className="link-reset">💡 Lights</Link></li>
              <li><Link to="/category/Microphone"className="link-reset">🎤 Microphone</Link></li>
              <li><Link to="/category/Tripods"className="link-reset">📐 Tripods</Link></li>
              <li><Link to="/category/Fashion Accessories" className="link-reset">👒 Fashion Accessories</Link></li>
              <li><Link to="/category/Skin Care"className="link-reset">🧴 Skin Care</Link></li>
              <li><Link to="/category/Other"className="link-reset">📦 Other Categories</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
