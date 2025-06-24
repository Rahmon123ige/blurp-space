// src/components/TopRated.jsx
import React from "react";
import "./TopRated.css";
import { FaStar } from "react-icons/fa";

const topRatedProducts = [
  {
    id: 1,
    name: "AHLAM AL EMARAT PERFUMES,100ML",
    image: "/src/Data/top prfume.webp",
    oldPrice: "₦43,000.00",
    newPrice: "₦38,000.00",
  },
  {
    id: 2,
    name: "Black round neck",
    image: "/src/Data/black shart.webp",
    oldPrice: "₦15,000.00",
    newPrice: "₦10,000.00",
  },
  {
    id: 3,
    name: "MARCO PERFUMES",
    image: "/src/Data/marco peff.webp",
    oldPrice: "₦35,000.00",
    newPrice: "₦28,000.00",
  },
  {
    id: 4,
    name: "PARADIS MEN PERFUMES",
    image: "/src/Data/paradis.webp",
    oldPrice: "₦33,000.00",
    newPrice: "₦28,000.00",
  },
  {
    id: 5,
    name: "RED ROSA PERFUMES",
    image: "/src/Data/red rosa.webp",
    oldPrice: "₦33,000.00",
    newPrice: "₦28,000.00",
  },
];

const TopRated = () => {
  return (
    <div className="top-rated">
      <h2>Top Rated Products</h2>
      {topRatedProducts.map((item) => (
        <div className="top-product" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="top-info">
            <h4>{item.name}</h4>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="price">
              <span className="old">{item.oldPrice}</span>
              <span className="new">{item.newPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRated;
