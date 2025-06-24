// src/components/InfoBanner.jsx
import React from "react";
import "./Banner.css";
import { FaPlane, FaBoxOpen, FaBalanceScale, FaShieldAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="info-banner">
      <div className="info-card">
        <FaPlane className="icon" />
        <div className="info-text">
          <h4>Quick Delivery</h4>
          <p>On all orders over</p>
        </div>
      </div>

      <div className="divider" />

      <div className="info-card">
        <FaBoxOpen className="icon" />
        <div className="info-text">
          <h4>Retail & wholesale</h4>
          <p>Reduce your order</p>
        </div>
      </div>

      <div className="divider" />

      <div className="info-card">
        <FaBalanceScale className="icon" />
        <div className="info-text">
          <h4>Support 24/7</h4>
          <p>Online 24 hours</p>
        </div>
      </div>

      <div className="divider" />

      <div className="info-card">
        <FaShieldAlt className="icon" />
        <div className="info-text">
          <h4>100% Safe</h4>
          <p>Secure shopping</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
