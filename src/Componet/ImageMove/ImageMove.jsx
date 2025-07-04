import React, { useEffect, useRef, useState } from "react";
import './ImageMove.css';

const images = [
  "/src/Data/712x384.jpg",
  "/src/Data/carousel2.webp",
  "/src/Data/712X384 (2).jpg",
];

const ImageMove = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide(); // swiped left
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevSlide(); // swiped right
    }
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-wrapper">
  {images.map((img, index) => (
    <div
      key={index}
      className={`carousel-slide fade-slide ${index === current ? "active" : ""}`}
    >
      <img src={img} alt={`Slide ${index + 1}`} />
    </div>
  ))}
</div>

      <div className="carousel-dots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === current ? "active-dot" : ""}`}
            onClick={() => setCurrent(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageMove;
