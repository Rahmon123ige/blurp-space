
import React from "react";
import "./Hero.css";
import {
  FaCamera, FaMicrophone, FaGifts, FaCogs, FaShoppingBag,
  FaLightbulb, FaAlignCenter, FaHeadphones, FaTshirt, FaEnvelope, FaPhone
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import useIsMobile from "../hooks/useIsMobile"; // custom hook you'll create
import FlipCarousel from "../FlipCarousel/FlipCarousel";

// Images
import Banner1 from '../../Data/affliate.png';
import Banner2 from '../../Data/ChatGPT Image Jun 24, 2025, 11_25_20 PM.png';
import Banner3 from '../../Data/Business proposa;.jpg';
import Banner4 from '../../Data/Event design.jpg';
import Banner5 from '../../Data/Firsts-Blurp-Space-Baner-scaled.jpg';

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

const banners = [Banner5, Banner1, Banner2, Banner3, Banner4];

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="hero">
      {/* Categories */}
      {!isMobile && (
        <div className="hero-categories">
          {categories.map((item, index) => (
            <div className="hero-category" key={index}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Carousel */}
      <div className="hero-carousel">
        {!isMobile ? (
          <Carousel
            autoPlay
            infiniteLoop
            interval={2000}
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
          >
            {banners.map((img, i) => (
              <div key={i}>
                <img src={img} alt={`Slide ${i + 1}`} />
              </div>
            ))}
          </Carousel>
        ) : (
          <Swiper
  spaceBetween={20}
  slidesPerView={1.1}
  loop={true}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
   modules={[Autoplay]}
  className="hero-swiper"
>
  {banners.map((img, i) => (
    <SwiperSlide key={i}>
      <img src={img} alt={`Mobile Slide ${i + 1}`} />
    </SwiperSlide>
  ))}
</Swiper>

        )}
      </div>

      {/* Contact Info */}
      {!isMobile && (
        <div className="hero-flip">
    <FlipCarousel />
  </div>
      )}
    </section>
  );
};

export default Hero;
