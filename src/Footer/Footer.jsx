import React, { useState, useEffect } from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-section nav-links">
        {["Home", "Shop", "Vendor", "Latest Gist"].map((item) => (
          <a href={`/${item.toLowerCase().replace(" ", "")}`} key={item}>
            {item}
          </a>
        ))}
      </div>

      <hr />

      <div className="footer-section main">
        <div className="col about">
          <h4>About Blurp Space</h4>
          <p>
            Your go-to for quality products, great deals, and fast delivery all across Nigeria.
          </p>
        </div>

        <div className="col support">
          <h4>Support</h4>
          <a href="/help">Help Center</a>
          <a href="/contact">Contact Us</a>
          <a href="/faq">FAQ</a>
          <a href="/returns">Returns</a>
        </div>

        <div className="col company">
          <h4>Company</h4>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        <div className="col social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaEnvelope /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-section bottom">
        <p>&copy; {new Date().getFullYear()} Blurp Space. All rights reserved.</p>
      </div>

      {showTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
