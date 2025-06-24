// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import { FaCamera, FaMicrophone, FaGifts, FaCogs, FaShoppingBag, FaLightbulb, FaAlignCenter, FaHeadphones, FaTshirt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from '../../Data/3rd Blurp Space Banner.jpg'
import Banner2 from '../../Data/ADVERTISE HERE.png'
import Banner3 from '../../Data/Business proposa;.jpg'
import Banner4 from '../../Data/Event design.jpg'
import Banner5 from '../../Data/Firsts-Blurp-Space-Baner-scaled.jpg'

const categories = [
  { name: "Camera", icon: <FaCamera /> },
  { name: "Drone", icon: <FaGifts /> },
  { name: "Gimbals", icon: <FaAlignCenter /> },
  { name: "Lens", icon: <FaCogs /> },
  { name: "Lights", icon: <FaLightbulb /> },
  { name: "Microphones", icon: <FaMicrophone /> },
  { name: "Tripods", icon: <FaShoppingBag /> },
  { name: "Gadgets", icon: <FaHeadphones /> },
  { name: "Fashion Accessories", icon: <FaTshirt /> },
  { name: "Skin Care", icon: <FaShoppingBag /> },
  { name: "Others categories", icon: <FaGifts /> },
];

const Hero = () => {
  return (
    <section className="hero">
      {/* Categories */}
      <div className="hero-categories">
        {categories.map((item, index) => (
          <div className="hero-category" key={index}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Carousel */}
      <div className="hero-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
        >
          <div>
            <img src={Banner5} alt="Slide 1" />
          </div>
          <div>
            <img src={Banner1} alt="Slide 2" />
          </div>
          <div>
            <img src={Banner2} alt="Slide 3" />
          </div>
          <div>
            <img src={Banner3} alt="Slide 4" />
          </div>
          <div>
            <img src={Banner4} alt="Slide 5" />
          </div>
        </Carousel>
      </div>

      {/* Contact Info */}
      <div className="hero-contact">
        <div className="contact-box">
          <FaPhone />
          <span>Call: 09047348040</span>
        </div>
        <div className="contact-box">
          <FaEnvelope />
          <span>Email: infoblurpspace@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
