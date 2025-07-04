import React from "react";
import "./FlipCarousel.css";

const flipItems = [
  { video: "/src/Data/Black Brown Bold Elegant Exclusive Watch Instagram Story.mp4", title: "Exclusive Deals" },
  { video: "/src/Data/Black Brown Bold Elegant Exclusive Watch Instagram Story (2).mp4", title: "New Arrivals" },
];

const FlipCarousel = () => {
  return (
    <div className="flip-carousel">
      {flipItems.map((item, i) => (
        <div className="flip-card" key={i}>
          <div className="flip-inner">
            <div className="flip-front">
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="flip-video"
              />
            </div>
            <div className="flip-back">
              <h4>{item.title}</h4>
              <p>Check it out now!</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCarousel;
